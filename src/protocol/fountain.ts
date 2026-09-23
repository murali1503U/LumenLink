// fountain.ts

// Deterministic PRNG: Mulberry32
export function mulberry32(a: number) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

export function getBlockIndices(seqNum: number, k: number): number[] {
    const pos = seqNum % (2 * k);
    if (pos < k) return [pos]; // Systematic sweep: 1 frame for every block

    // Repair frames: degree 4 to 24 (or k if k is small).
    // A uniform mid-degree avoids the overhead of a Soliton distribution
    // for small files.
    const random = mulberry32(seqNum);
    const minD = Math.min(k, 4);
    const maxD = Math.min(k, 24);
    const d = minD + Math.floor(random() * (maxD - minD + 1));

    const indices = new Set<number>();
    while (indices.size < d) {
        indices.add(Math.floor(random() * k));
    }
    return Array.from(indices);
}

export function xorUint8Arrays(a: Uint8Array, b: Uint8Array): Uint8Array {
    const len = Math.max(a.length, b.length);
    const result = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        result[i] = (a[i] || 0) ^ (b[i] || 0);
    }
    return result;
}

export interface Equation {
    indices: Set<number>;
    data: Uint8Array;
}

export class PeelingDecoder {
    private k: number;
    private solvedBlocks: Map<number, Uint8Array> = new Map();
    private equations: Equation[] = [];
    private packetCount: number = 0;

    constructor(k: number) {
        this.k = k;
    }

    public addPacket(indices: number[], data: Uint8Array): boolean {
        this.packetCount++;
        let eq: Equation = {
            indices: new Set(indices),
            data: new Uint8Array(data)
        };

        // Substitute already solved blocks into the new equation
        for (const [solvedIdx, solvedData] of this.solvedBlocks.entries()) {
            if (eq.indices.has(solvedIdx)) {
                eq.indices.delete(solvedIdx);
                eq.data = xorUint8Arrays(eq.data, solvedData);
            }
        }

        if (eq.indices.size === 0) {
            // Redundant packet
            return false;
        }

        this.equations.push(eq);
        this.processQueue();

        return this.isComplete();
    }

    private processQueue() {
        let changed = true;
        while (changed) {
            changed = false;

            // Find all degree-1 equations
            const degree1 = this.equations.filter(e => e.indices.size === 1);
            
            for (const eq of degree1) {
                const idx = Array.from(eq.indices)[0];
                if (!this.solvedBlocks.has(idx)) {
                    this.solvedBlocks.set(idx, eq.data);
                    changed = true;
                    
                    // Substitute this newly solved block into all other equations
                    for (let i = 0; i < this.equations.length; i++) {
                        const otherEq = this.equations[i];
                        if (otherEq !== eq && otherEq.indices.has(idx)) {
                            otherEq.indices.delete(idx);
                            otherEq.data = xorUint8Arrays(otherEq.data, eq.data);
                        }
                    }
                }
            }
            // Remove solved and empty equations
            this.equations = this.equations.filter(e => e.indices.size > 0);
        }
    }

    public isComplete(): boolean {
        return this.solvedBlocks.size === this.k;
    }

    public getRecoveredBlocks(): Uint8Array[] {
        if (!this.isComplete()) throw new Error("Not all blocks recovered yet");
        const blocks: Uint8Array[] = [];
        for (let i = 0; i < this.k; i++) {
            blocks.push(this.solvedBlocks.get(i)!);
        }
        return blocks;
    }
    
    public getProgress(): number {
        return this.solvedBlocks.size / this.k;
    }
    
    public getPacketCount(): number {
        return this.packetCount;
    }
    
    public getUniqueBlocksCount(): number {
        return this.solvedBlocks.size;
    }
}
