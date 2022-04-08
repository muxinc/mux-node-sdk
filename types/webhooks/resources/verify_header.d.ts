/// <reference types="node" />
export declare const HeaderScheme: {
    readonly V1: "v1";
};
export declare type HeaderScheme = typeof HeaderScheme[keyof typeof HeaderScheme];
export declare class VerifyHeader {
    static parseHeader(header?: string, scheme?: HeaderScheme): {
        timestamp: number;
        signatures: string[];
    };
    static computeSignature(payload: string, secret: string | Buffer): any;
    static verify(_payload: string | Buffer, _header: string | Buffer, secret: string | Buffer, tolerance?: number): boolean;
}
