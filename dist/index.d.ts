type Algorithm = "sha256" | "sha512";
declare class Hasher {
    private algorithm;
    private saltLength;
    constructor(algorithm?: Algorithm, saltLength?: number);
    verify(encoded: string, unencoded: string): boolean;
    encode(string: string): string;
    hash(string: string, algorithm: Algorithm, salt: string): string;
    private parse;
}
declare const hash: Hasher;

export { Hasher, hash };
