declare module "maath/random/dist/maath-random.esm" {
    export const inSphere: (buffer: Float32Array, options?: { radius?: number }) => Float32Array;
    export const inBox: (buffer: Float32Array, options?: { sides?: number[] }) => Float32Array;
    export const inCircle: (buffer: Float32Array, options?: { radius?: number }) => Float32Array;
}
