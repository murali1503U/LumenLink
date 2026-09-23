import { decodePacket } from '../protocol/packet';
import { PeelingDecoder, getBlockIndices } from '../protocol/fountain';
import { crc32 } from '../utils/crc32';

export class Receiver {
    private container: HTMLElement;
    private video: HTMLVideoElement;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private startBtn: HTMLButtonElement;
    private statusEl: HTMLElement;
    private resultContainer: HTMLElement;

    private isReceiving  = false;
    private worker: Worker;
    private stream: MediaStream | null = null;
    private workerBusy   = false;

    private currentSessionId: number | null = null;
    private decoder: PeelingDecoder | null  = null;
    private expectedChecksum = 0;
    private originalSize     = 0;

    // Rate tracking
    private pktTotal  = 0;
    private startedAt = 0;

    constructor(container: HTMLElement) {
        this.container = container;
        this.container.innerHTML = `
            <h2>📥 Receiver Mode</h2>
            <button id="receiver-start" class="btn primary">Start Receiving</button>
            <div id="receiver-status" class="status">Waiting to start…</div>

            <!-- Live viewfinder — helps user aim at both QR codes -->
            <video id="receiver-video" playsinline muted
                style="width:100%;max-width:420px;display:none;margin-top:10px;border-radius:8px;"></video>
            <canvas id="receiver-canvas" style="display:none;"></canvas>

            <div id="receiver-result" class="card" style="display:none;margin-top:20px;">
                <h3>Transfer Complete ✅</h3>
                <div id="result-content"></div>
                <button id="download-btn" class="btn" style="display:none;margin-top:10px;">Download File</button>
            </div>
        `;

        this.video          = this.container.querySelector('#receiver-video')!;
        this.canvas         = this.container.querySelector('#receiver-canvas')!;
        this.ctx            = this.canvas.getContext('2d', { willReadFrequently: true })!;
        this.startBtn       = this.container.querySelector('#receiver-start')!;
        this.statusEl       = this.container.querySelector('#receiver-status')!;
        this.resultContainer= this.container.querySelector('#receiver-result')!;

        this.startBtn.addEventListener('click', () => this.handleStart());

        // Spawn the zxing-wasm Web Worker
        this.worker = new Worker(
            new URL('../workers/qr-decoder.worker.ts', import.meta.url),
            { type: 'module' }
        );
        this.worker.onmessage = this.handleWorkerMessage.bind(this);
    }

    /* ------------------------------------------------------------------ */
    /*  Camera lifecycle                                                     */
    /* ------------------------------------------------------------------ */

    private async handleStart() {
        if (this.isReceiving) { this.stopReceiving(); return; }

        try {
            // The Realme P3 Pro IMX896 PDAF will focus quickly.
            // 720p gives enough detail for our QR module size with room to spare.
            this.stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'environment',
                    width:  { ideal: 1280 },
                    height: { ideal: 720 },
                    frameRate: { ideal: 30 },
                },
            });
            this.video.srcObject = this.stream;
            this.video.style.display = 'block';
            await this.video.play();

            this.isReceiving = true;
            this.pktTotal    = 0;
            this.startedAt   = performance.now();
            this.startBtn.textContent = 'Stop Receiving';
            this.statusEl.textContent = 'Scanning… (aim camera at the QR code)';
            this.resultContainer.style.display = 'none';

            requestAnimationFrame(this.captureFrame);
        } catch (err) {
            console.error(err);
            this.statusEl.textContent = `Camera error: ${err}`;
        }
    }

    private stopReceiving() {
        this.isReceiving = false;
        this.workerBusy  = false;
        this.lastQuad = null;
        this.lastDim = 0;
        this.startBtn.textContent = 'Start Receiving';
        this.video.style.display  = 'none';
        this.stream?.getTracks().forEach(t => t.stop());
        this.stream = null;
    }

    private lastQuad: any = null;
    private lastDim: number = 0;

    /* ------------------------------------------------------------------ */
    /*  Frame capture loop                                                  */
    /* ------------------------------------------------------------------ */

    private captureFrame = () => {
        if (!this.isReceiving) return;

        if (this.video.readyState === this.video.HAVE_ENOUGH_DATA && !this.workerBusy) {
            let w = this.video.videoWidth;
            let h = this.video.videoHeight;
            
            this.canvas.width  = w;
            this.canvas.height = h;
            this.ctx.drawImage(this.video, 0, 0, w, h);

            const imageData = this.ctx.getImageData(0, 0, w, h);
            this.workerBusy = true;
            this.worker.postMessage(
                { 
                    data: imageData.data, 
                    width: w, 
                    height: h,
                    quad: this.lastQuad,
                    dim: this.lastDim
                },
                [imageData.data.buffer]
            );
        }

        requestAnimationFrame(this.captureFrame);
    };

    /* ------------------------------------------------------------------ */
    /*  Worker message handler                                              */
    /* ------------------------------------------------------------------ */

    private handleWorkerMessage = (e: MessageEvent) => {
        const { success, data, error, frameCount, position, dim } = e.data;
        this.workerBusy = false;

        if (!success || !data) {
            this.lastQuad = null; // Lost tracking, do full scan next frame
            if (!this.decoder?.isComplete()) {
                if (error) {
                    this.statusEl.textContent = `❌ Decoder error: ${error}`;
                } else if (!this.currentSessionId) {
                    // Honest: camera is processing frames but no valid QR found yet
                    this.statusEl.textContent = `📷 Camera active — no QR detected yet (${frameCount} frames)`;
                }
            }
            return;
        }

        if (position && dim) {
            this.lastQuad = position;
            this.lastDim = dim;
        } else {
            this.lastQuad = null;
        }

        // Valid packet decoded → process it
        this.processPacket(data);
    };

    /* ------------------------------------------------------------------ */
    /*  Fountain decoding                                                   */
    /* ------------------------------------------------------------------ */

    private processPacket(raw: Uint8Array) {
        const packet = decodePacket(raw);
        if (!packet) return;

        const { sessionId, totalBlocks, checksum, originalSize, sequenceNum } = packet.header;

        // New session?
        if (this.currentSessionId !== sessionId) {
            this.currentSessionId = sessionId;
            this.decoder          = new PeelingDecoder(totalBlocks);
            this.expectedChecksum = checksum;
            this.originalSize     = originalSize;
            this.pktTotal         = 0;
            this.startedAt        = performance.now();
        }

        if (!this.decoder || this.decoder.isComplete()) return;

        const indices = getBlockIndices(sequenceNum, totalBlocks);
        this.decoder.addPacket(indices, packet.payload);
        this.pktTotal++;

        const solved   = this.decoder.getUniqueBlocksCount();
        const pct      = Math.floor((solved / totalBlocks) * 100);
        const elapsed  = (performance.now() - this.startedAt) / 1000;
        const pktSec   = (this.pktTotal / elapsed).toFixed(1);

        this.statusEl.textContent =
            `${solved}/${totalBlocks} blocks (${pct}%) · ${pktSec} pkt/s · ${this.pktTotal} total`;

        if (this.decoder.isComplete()) this.finishTransfer();
    }

    /* ------------------------------------------------------------------ */
    /*  Reassembly & display                                                */
    /* ------------------------------------------------------------------ */

    private finishTransfer() {
        this.stopReceiving();
        this.statusEl.textContent = 'Verifying checksum…';

        const blocks    = this.decoder!.getRecoveredBlocks();
        const blockSize = blocks[0].length;
        const full      = new Uint8Array(blocks.length * blockSize);
        blocks.forEach((b, i) => full.set(b, i * blockSize));

        const final      = full.subarray(0, this.originalSize);
        const actualCrc  = crc32(final);

        if (actualCrc !== this.expectedChecksum) {
            this.statusEl.textContent =
                `❌ Checksum mismatch! (got ${actualCrc}, expected ${this.expectedChecksum})`;
            return;
        }

        const elapsed = ((performance.now() - this.startedAt) / 1000).toFixed(1);
        this.statusEl.textContent =
            `✅ Done in ${elapsed}s — ${(this.originalSize / 1024).toFixed(1)} KB received`;
        this.displayResult(final);
    }

    private displayResult(data: Uint8Array) {
        this.resultContainer.style.display = 'block';
        const contentEl  = this.resultContainer.querySelector('#result-content')!  as HTMLElement;
        const downloadBtn= this.resultContainer.querySelector('#download-btn')!    as HTMLButtonElement;

        let textStr = '';
        let isText  = false;
        try { textStr = new TextDecoder('utf-8', { fatal: true }).decode(data); isText = true; }
        catch { /* binary */ }

        if (isText && textStr.length < 10_000) {
            contentEl.innerHTML = `<pre style="white-space:pre-wrap;word-break:break-all;
                background:#f4f4f4;padding:10px;border-radius:4px;">${this.esc(textStr)}</pre>`;
            downloadBtn.style.display = 'none';
            return;
        }

        const blob = new Blob([data]);
        const url  = URL.createObjectURL(blob);
        contentEl.innerHTML = `<p>Received ${(data.length / 1024).toFixed(1)} KB</p>`;

        const isPng  = data[0] === 0x89 && data[1] === 0x50;
        const isJpeg = data[0] === 0xFF && data[1] === 0xD8;
        if (isPng || isJpeg) {
            contentEl.innerHTML +=
                `<img src="${url}" style="max-width:100%;margin-top:10px;border-radius:4px;"/>`;
        }

        downloadBtn.style.display = 'inline-block';
        downloadBtn.onclick = () => {
            const a = document.createElement('a');
            a.href = url; a.download = 'received_file'; a.click();
        };
    }

    private esc(s: string) {
        return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }
}
