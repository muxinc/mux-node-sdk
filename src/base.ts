/* eslint no-underscore-dangle: ["error", { "allow": ["_config", "_tokenId", "_secret"] }] */

import Axios, {
  AxiosInstance,
} from 'axios';
import EventEmitter from 'events';
import { RequestOptions } from './RequestOptions';

const pkg = require('../package.json');

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
export default class Base extends EventEmitter {
  readonly http: AxiosInstance;

  private _tokenId: string;
  private _tokenSecret: string;
  private _config: RequestOptions;

  constructor(requestOptions: RequestOptions)
  constructor(tokenId: string, tokenSecret: string, config: RequestOptions)
  constructor(tokenIdOrOptions: string | RequestOptions, tokenSecret?: string, config?: RequestOptions) {
    super();

    if (typeof(tokenIdOrOptions) === 'object') {
      this.config = tokenIdOrOptions; // eslint-disable-line prefer-destructuring
      this.tokenId = undefined;
      this.tokenSecret = undefined;
    } else {
      this.tokenId = tokenIdOrOptions; // eslint-disable-line prefer-destructuring
      this.tokenSecret = tokenSecret; // eslint-disable-line prefer-destructuring
      this.config = config; // eslint-disable-line prefer-destructuring
    }

    this.http = Axios.create({
      baseURL: this.config.baseUrl,
      headers: {
        'User-Agent': `Mux Node | ${pkg.version}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      withCredentials: false,
      auth: {
        username: this.tokenId,
        password: this.tokenSecret,
      },
    });

    this.http.interceptors.request.use((req) => {
      this.emit('request', req);

      return req;
    });

    this.http.interceptors.response.use(
      (res) => {
        this.emit('response', res);
        if (this.isVideoUrl(res.config.url)) {
          return res.data && res.data.data;
        }

        return res.data;
      },
      (errorRes) =>
        Promise.reject(
          (errorRes.response && errorRes.response.data.error) || errorRes
        )
    );
  }

  // eslint-disable-next-line class-methods-use-this
  isVideoUrl(url) {
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

  set tokenId(token: string | null) {
    this._tokenId = token || process.env.MUX_TOKEN_ID;

    if (typeof this._tokenId === 'undefined') {
      throw new Error('API Access Token must be provided.');
    }
  }

  get tokenId() {
    return this._tokenId;
  }

  set tokenSecret(secret: string | null) {
    this._tokenSecret = secret || process.env.MUX_TOKEN_SECRET;

    if (typeof this._tokenSecret === 'undefined' || this._tokenSecret === '') {
      throw new Error('API secret key must be provided');
    }
  }

  get tokenSecret() {
    return this._tokenSecret;
  }
}
