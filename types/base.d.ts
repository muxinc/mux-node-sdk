import { AxiosInstance } from 'axios';
import EventEmitter from 'events';
import { RequestOptions } from './RequestOptions';
/**
 * Mux Base Class - Simple base class to be extended by all child modules.
 *
 * @ignore
 * @property {string} tokenId - The ID for the access token.
 * @property {string} tokenSecret - The secret for the access token.
 * @property {object} config - The configuration for the Base object.
 * @property {Object} requestOptions - The HTTP request options for Mux Assets
 * @property {string} requestOptions.auth.username - HTTP basic auth username (access token)
 * @property {string} requestOptions.auth.password - HTTP basic auth password (secret)
 *
 */
export declare class Base extends EventEmitter {
    readonly http: AxiosInstance;
    private _tokenId;
    private _tokenSecret;
    private _config;
    constructor(muxBase: Base);
    constructor(requestOptions: RequestOptions);
    constructor(tokenId: string, tokenSecret: string, config: RequestOptions);
    isVideoUrl(url: string): boolean;
    set config(options: RequestOptions);
    get config(): RequestOptions;
    set tokenId(token: string | undefined);
    get tokenId(): string | undefined;
    set tokenSecret(secret: string | undefined);
    get tokenSecret(): string | undefined;
}
