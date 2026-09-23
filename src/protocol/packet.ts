// packet.ts
import { crc32 } from '../utils/crc32';

export interface PacketHeader {
    sessionId: number;
    originalSize: number;
    blockSize: number;
    totalBlocks: number;
    checksum: number;
    sequenceNum: number;
}

export interface FountainPacket {
    header: PacketHeader;
    payload: Uint8Array;
}

// Header structure (20 bytes total):
// 0-3: Session ID (Uint32)
// 4-7: Original Size (Uint32)
// 8-9: Block Size (Uint16)
// 10-11: Total Blocks (Uint16)
// 12-15: Checksum (Uint32)
// 16-19: Sequence Number (Uint32)

export const HEADER_SIZE = 20;

export function encodePacket(header: PacketHeader, payload: Uint8Array): Uint8Array {
    const buffer = new ArrayBuffer(HEADER_SIZE + payload.length);
    const view = new DataView(buffer);
    const outBytes = new Uint8Array(buffer);

    view.setUint32(0, header.sessionId, true);
    view.setUint32(4, header.originalSize, true);
    view.setUint16(8, header.blockSize, true);
    view.setUint16(10, header.totalBlocks, true);
    view.setUint32(12, header.checksum, true);
    view.setUint32(16, header.sequenceNum, true);

    outBytes.set(payload, HEADER_SIZE);

    return outBytes;
}

export function decodePacket(data: Uint8Array): FountainPacket | null {
    if (data.length <= HEADER_SIZE) return null;

    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    
    try {
        const header: PacketHeader = {
            sessionId: view.getUint32(0, true),
            originalSize: view.getUint32(4, true),
            blockSize: view.getUint16(8, true),
            totalBlocks: view.getUint16(10, true),
            checksum: view.getUint32(12, true),
            sequenceNum: view.getUint32(16, true),
        };
        const payload = new Uint8Array(data.buffer, data.byteOffset + HEADER_SIZE, data.byteLength - HEADER_SIZE);
        
        return { header, payload };
    } catch (e) {
        return null;
    }
}
