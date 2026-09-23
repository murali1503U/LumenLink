// crc32.ts
export function crc32(data: Uint8Array): number {
    let c = 0xFFFFFFFF;
    for (let i = 0; i < data.length; i++) {
        c ^= data[i];
        for (let j = 0; j < 8; j++) {
            c = (c >>> 1) ^ ((c & 1) ? 0xEDB88320 : 0);
        }
    }
    return (c ^ 0xFFFFFFFF) >>> 0;
}
