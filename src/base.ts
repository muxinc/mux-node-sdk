/* eslint no-underscore-dangle: ["error", { "allow": ["_config", "_tokenId", "_tokenSecret"] }] */

import Axios, { AxiosInstance } from 'axios';
import EventEmitter from 'events';

import { RequestOptions } from './RequestOptions.js';
import { VERSION } from './version.js';

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
export class Base extends EventEmitter {
  readonly http: AxiosInstance;

  private _tokenId!: string;
  private _tokenSecret!: string;
  private _config!: RequestOptions;

  constructor(muxBase: Base);
  constructor(requestOptions: RequestOptions);
  constructor(tokenId: string, tokenSecret: string, config: RequestOptions);
  constructor(
    tokenIdOrOptionsOrBase: string | RequestOptions | Base,
    tokenSecret?: string,
    config?: RequestOptions
  ) {
    super();

    if (tokenIdOrOptionsOrBase instanceof Base) {
      // we could do this with Object.assign but I'd rather we be really explicit about what we copy.
      this.config = tokenIdOrOptionsOrBase._config;
      this._tokenId = tokenIdOrOptionsOrBase._tokenId;
      this._tokenSecret = tokenIdOrOptionsOrBase._tokenSecret;

      this.http = tokenIdOrOptionsOrBase.http;
    } else {
      if (
        typeof tokenIdOrOptionsOrBase === 'object' &&
        !(tokenIdOrOptionsOrBase instanceof Base)
      ) {
        this.config = tokenIdOrOptionsOrBase;
        this.tokenId = undefined;
        this.tokenSecret = undefined;
      } else {
        // without 'as' this complains of Base | string typing, but we have ruled out the Base case implicitly
        this.tokenId = tokenIdOrOptionsOrBase as string;
        this.tokenSecret = tokenSecret;
        this.config = config!;
      }

      this.http = Axios.create({
        baseURL: this.config.baseUrl,
        headers: {
          'User-Agent': `Mux Node | ${VERSION}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        withCredentials: false,
        auth: {
          username: this._tokenId,
          password: this._tokenSecret,
        },
      });

      this.http.interceptors.request.use((req: any) => {
        this.emit('request', req);

        return req;
      });

      this.http.interceptors.response.use(
        (res: any) => {
          this.emit('response', res);
          if (res.config.url && this.isVideoUrl(res.config.url)) {
            return res.data && res.data.data;
          }

          return res.data;
        },
        (errorRes: any) =>
          Promise.reject(
            (errorRes.response && errorRes.response.data.error) || errorRes
          )
      );
    }
  }

  // eslint-disable-next-line class-methods-use-this
  isVideoUrl(url: string) {
    return url.startsWith(`/video/v1/`);
  }

  set config(options: RequestOptions) {
    this._config = {
      baseUrl: 'https://api.mux.com',
      ...options,
    };
  }

  get config() {
    return this._config;
  }

  set tokenId(token: string | undefined) {
    const v = token || process.env.MUX_TOKEN_ID;
    if (!v || v.length === 0) {
      throw new Error('API Access Token must be provided.');
    }

    this._tokenId = v;
  }

  get tokenId() {
    return this._tokenId;
  }

  set tokenSecret(secret: string | undefined) {
    const v = secret || process.env.MUX_TOKEN_SECRET;
    if (!v || v.length === 0) {
      throw new Error('API secret key must be provided');
    }

    this._tokenSecret = v;
  }

  get tokenSecret() {
    return this._tokenSecret;
  }
}
