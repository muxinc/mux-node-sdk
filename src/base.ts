/* eslint no-underscore-dangle: ["error", { "allow": ["_config", "_tokenId", "_secret"] }] */

import axios, { AxiosInstance } from 'axios';
import { EventEmitter } from 'events';
import pkg = require('../package.json');

export interface RequestOptions {
  baseUrl?: string;
  auth?: {
    username?: string;
    password?: string;
  };
}

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
  private _tokenId?: string;
  private _tokenSecret?: string;
  private _config?: RequestOptions;
  // TODO: Should this be removed?
  private _requestOptions?: RequestOptions;
  http: AxiosInstance = undefined as any;

  constructor(base: Base | RequestOptions);
  constructor(tokenId: string, tokenSecret: string, config: RequestOptions);
  constructor(param?: Base | RequestOptions | string, tokenSecret?: string, config?: RequestOptions);
  constructor(...params: any[]) {
    super();

    if (params[0] instanceof Base) {
      return Object.assign(this, params[0]);
    }

    if (typeof params[0] === 'object') {
      this.config = params[0]; // eslint-disable-line prefer-destructuring
      this.tokenId = undefined;
      this.tokenSecret = undefined;
    } else {
      this.tokenId = params[0]; // eslint-disable-line prefer-destructuring
      this.tokenSecret = params[1]; // eslint-disable-line prefer-destructuring
      this.config = params[2]; // eslint-disable-line prefer-destructuring
    }

    this.http = axios.create({
      baseURL: this.config?.baseUrl,
      headers: {
        'User-Agent': `Mux Node | ${pkg.version}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      // mode: 'cors',
      withCredentials: false,
      auth: {
        username: this.tokenId as any,
        password: this.tokenSecret as any,
      },
    });

    this.http.interceptors.request.use(req => {
      this.emit('request', req);

      return req;
    });

    this.http.interceptors.response.use(
      res => {
        this.emit('response', res);

        return res.data && res.data.data;
      },
      errorRes =>
        Promise.reject(
          (errorRes.response && errorRes.response.data.error) || errorRes
        )
    );
  }

  set config(options: RequestOptions) {
    options = options || {};
    this._config = {
      baseUrl: 'https://api.mux.com',
      ...options,
    };
  }

  get config() {
    return this._config;
  }

  set tokenId(token) {
    token = token || process.env.MUX_TOKEN_ID;
    this._tokenId = token;

    if (typeof this._tokenId === 'undefined') {
      throw new Error('API Access Token must be provided.');
    }
  }

  get tokenId() {
    return this._tokenId;
  }

  set tokenSecret(secret) {
    secret = secret || process.env.MUX_TOKEN_SECRET
    this._tokenSecret = secret;

    if (typeof this._tokenSecret === 'undefined' || this._tokenSecret === '') {
      throw new Error('API secret key must be provided');
    }
  }

  get tokenSecret() {
    return this._tokenSecret;
  }

  remove(...params: any[]): any {
    // eslint-disable-next-line no-console
    console.warn(
      'The remove helper has been deprecated in favor of del. `remove` will no longer be available after the next major version bump (3.0).'
    );
    // TODO: Determine why del is undefined
    return (this as any).del(...params);
  }
}