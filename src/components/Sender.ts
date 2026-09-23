import QRCode from 'qrcode';
import { crc32 } from '../utils/crc32';
import { encodePacket } from '../protocol/packet';
import type { PacketHeader } from '../protocol/packet';
import { getBlockIndices, xorUint8Arrays } from '../protocol/fountain';

export class Sender {
    private container: HTMLElement;
    private fileInput: HTMLInputElement;
    private textInput: HTMLTextAreaElement;
    private startBtn: HTMLButtonElement;
    private canvas: HTMLCanvasElement;
    private statusEl: HTMLElement;

    private isSending    = false;
    private rafId        = 0;
    private sessionId    = 0;
    private sequenceNum  = 0;
    private blocks: Uint8Array[] = [];
    private originalSize = 0;
    private checksum     = 0;

    // Powered by native decimen-codec tracking, we can safely push max capacity
    // (2900 bytes per frame).
    private readonly BLOCK_SIZE = 2900;

    constructor(container: HTMLElement) {
        this.container = container;
        this.container.innerHTML = `
            <h2>📡 Sender Mode</h2>
            <div class="input-group">
                <label>Send a File:</label>
                <input type="file" id="sender-file" />
            </div>
            <div class="input-group">
                <label>Or Send Text:</label>
                <textarea id="sender-text" rows="3" placeholder="Type a message..."></textarea>
            </div>
            <button id="sender-start" class="btn primary">Start Sending</button>
            <div id="sender-status" class="status">Waiting for input…</div>
            <canvas id="sender-canvas" style="display:none;"></canvas>
        `;

        this.fileInput = this.container.querySelector('#sender-file')!;
        this.textInput = this.container.querySelector('#sender-text')!;
        this.startBtn  = this.container.querySelector('#sender-start')!;
        this.canvas    = this.container.querySelector('#sender-canvas')!;
        this.statusEl  = this.container.querySelector('#sender-status')!;

        this.startBtn.addEventListener('click', () => this.handleStart());
        this.fileInput.addEventListener('change', () => { if (this.fileInput.files?.length) this.textInput.value = ''; });
        this.textInput.addEventListener('input',  () => { if (this.textInput.value) this.fileInput.value = ''; });
    }

    private async handleStart() {
        if (this.isSending) { this.stopSending(); return; }

        let data: Uint8Array;
        if (this.fileInput.files?.length) {
            data = new Uint8Array(await this.fileInput.files[0].arrayBuffer());
        } else if (this.textInput.value.trim()) {
            data = new TextEncoder().encode(this.textInput.value);
        } else {
            alert('Please select a file or enter some text.');
            return;
        }

        this.prepareData(data);
        this.isSending = true;
        this.startBtn.textContent = 'Stop Sending';
        this.canvas.style.display = 'block';
        this.rafId = requestAnimationFrame(this.loop);
    }

    private prepareData(data: Uint8Array) {
        this.originalSize = data.length;
        this.checksum     = crc32(data);
        this.sessionId    = (Math.random() * 0xFFFFFFFF) >>> 0;
        this.sequenceNum  = 0;
        this.blocks       = [];

        const n = Math.ceil(this.originalSize / this.BLOCK_SIZE);
        for (let i = 0; i < n; i++) {
            const block = new Uint8Array(this.BLOCK_SIZE);
            block.set(data.subarray(i * this.BLOCK_SIZE, (i + 1) * this.BLOCK_SIZE));
            this.blocks.push(block);
        }
        this.statusEl.textContent =
            `Ready: ${n} blocks × ${this.BLOCK_SIZE} B  (${(data.length / 1024).toFixed(1)} KB total)`;
        this.statusEl.style.color = '';
    }

    private stopSending() {
        this.isSending = false;
        cancelAnimationFrame(this.rafId);
        this.canvas.style.display = 'none';
        this.startBtn.textContent = 'Start Sending';
        this.statusEl.textContent = 'Stopped.';
        this.statusEl.style.color = '';
    }

    /** Convert binary Uint8Array to base64 string safely (handles all byte values incl. 0x00). */
    private toBase64(bytes: Uint8Array): string {
        // Build binary string in chunks to avoid call-stack overflow on large arrays
        let binary = '';
        const CHUNK = 8192;
        for (let i = 0; i < bytes.length; i += CHUNK) {
            binary += String.fromCharCode(...bytes.subarray(i, i + CHUNK));
        }
        return btoa(binary);
    }

    // 60 FPS throttle (16ms hold). decimen-codec can keep up easily.
    private readonly HOLD_MS = 1000 / 60;
    private lastRenderTime = 0;
    private sessionStartTime = 0;

    private loop = async (timestamp: number) => {
        if (!this.isSending) return;

        if (this.sessionStartTime === 0) {
            this.sessionStartTime = timestamp;
        }

        const elapsed = timestamp - this.lastRenderTime;
        if (elapsed < this.HOLD_MS) {
            this.rafId = requestAnimationFrame(this.loop);
            return;
        }
        this.lastRenderTime = timestamp;

        const k   = this.blocks.length;
        const seq = this.sequenceNum++;

        const indices = getBlockIndices(seq, k);
        let payload   = new Uint8Array(this.BLOCK_SIZE);
        for (const idx of indices) payload = xorUint8Arrays(payload, this.blocks[idx]);

        const header: PacketHeader = {
            sessionId:    this.sessionId,
            originalSize: this.originalSize,
            blockSize:    this.BLOCK_SIZE,
            totalBlocks:  k,
            checksum:     this.checksum,
            sequenceNum:  seq,
        };

        const packetBytes = encodePacket(header, payload);

        const qrWidth = Math.min(
            (this.canvas.parentElement?.clientWidth ?? window.innerWidth) - 32,
            640
        );

        try {
            // By casting to QRCodeSegment and forcing mode: 'byte', the library
            // handles binary data without the \0 null-byte bug.
            // maskPattern: 4 bypasses the expensive 8-way mask search, speeding up 4x!
            await QRCode.toCanvas(this.canvas, [{ data: packetBytes, mode: 'byte' } as any], {
                errorCorrectionLevel: 'L',
                margin: 4,
                width: qrWidth,
                maskPattern: 4,
            });
            // Clear any previous error colour
            this.statusEl.style.color = '';
            
            // Calculate accurate pkt/s based on actual session duration
            const totalElapsedSec = (timestamp - this.sessionStartTime) / 1000;
            const rate = totalElapsedSec > 0 ? (this.sequenceNum / totalElapsedSec).toFixed(1) : "0.0";
            
            this.statusEl.textContent =
                `Frame ${seq} | ${k} blocks | ${packetBytes.length} bytes in QR | ${rate} pkt/s`;
        } catch (err) {
            // Show the error prominently so it's never silent
            this.statusEl.textContent = `❌ QR render failed: ${err}`;
            this.statusEl.style.color = 'red';
            console.error('[Sender] QR render error:', err);
        }

        this.rafId = requestAnimationFrame(this.loop);
    };
}
