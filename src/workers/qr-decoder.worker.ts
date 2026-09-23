// qr-decoder.worker.ts
import wasmUrl from '../vendor/decimen-codec/decimen_codec.wasm?url';
import DecimenCodec, { type DecimenModule, type DecimenQuad } from '../vendor/decimen-codec/decimen_codec.js';

let ready: Promise<DecimenModule>;

// Initialize the codec only once
try {
    ready = DecimenCodec({
        locateFile: (path: string, prefix: string) => (path.endsWith('.wasm') ? wasmUrl : prefix + path),
    });
} catch (e) {
    console.error("Failed to initialize DecimenCodec", e);
}

// Warm up the WASM instance
void (async () => {
    try {
        const zx = await ready;
        const ptr = zx._malloc(8 * 8 * 4);
        zx.HEAPU8.set(new Uint8Array(8 * 8 * 4).fill(255), ptr);
        zx.readFull(ptr, 8, 8, false, 1, false).delete();
        zx._free(ptr);
    } catch {}
})();

let frameCount = 0;

self.onmessage = async function (e: MessageEvent) {
    const { data, width, height, quad, dim } = e.data as {
        data: Uint8ClampedArray;
        width: number;
        height: number;
        quad?: DecimenQuad;
        dim?: number;
    };

    frameCount++;
    try {
        const zx = await ready;
        const ptr = zx._malloc(width * height * 4);
        zx.HEAPU8.set(data, ptr);

        let success = false;
        let bytes: Uint8Array | null = null;
        let position: any = null;
        let outModules = 0;

        // Fast path: Tracked Decode (2ms)
        if (quad && dim) {
            const r = zx.readTracked(
                ptr, width, height, dim,
                quad.topLeft.x, quad.topLeft.y,
                quad.topRight.x, quad.topRight.y,
                quad.bottomRight.x, quad.bottomRight.y,
                quad.bottomLeft.x, quad.bottomLeft.y
            );
            if (r.valid && r.bytes.length > 0) {
                success = true;
                bytes = r.bytes;
                position = r.position;
                outModules = r.modules;
            }
        }

        // Fallback path: Full Decode (tryHarder enabled)
        if (!success) {
            const vec = zx.readFull(ptr, width, height, true, 2, true);
            for (let i = 0; i < vec.size(); i++) {
                const r = vec.get(i);
                if (r.valid && r.bytes.length > 0) {
                    success = true;
                    bytes = r.bytes;
                    position = r.position;
                    outModules = r.modules;
                    break;
                }
            }
            vec.delete();
        }

        zx._free(ptr);

        if (success && bytes) {
            self.postMessage({
                success: true,
                data: bytes,
                frameCount,
                position,
                dim: outModules
            });
            return;
        }

    } catch (err) {
        self.postMessage({ success: false, error: String(err), frameCount });
        return;
    }

    self.postMessage({ success: false, frameCount });
};
