/* eslint no-underscore-dangle: ["error", { "allow": ["_config", "_tokenId", "_secret"] }] */

const axios = require('axios');
const EventEmitter = require('events');
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
class Base extends EventEmitter {
  constructor(...params) {
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
      baseURL: this.config.baseUrl,
      headers: {
        'User-Agent': `Mux Node | ${pkg.version}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      mode: 'cors',
      withCredentials: false,
      auth: {
        username: this.tokenId,
        password: this.tokenSecret,
      },
    });

    this.http.interceptors.request.use(req => {
      this.emit('request', req);

      return req;
    });

    this.http.interceptors.response.use(
      res => {
        this.emit('response', res);
        if (this.isVideoUrl(res.config.url)) {
          return res.data && res.data.data;
        }

        return res.data;
      },
      errorRes =>
        Promise.reject(
          (errorRes.response && errorRes.response.data.error) || errorRes
        )
    );
  }

  isVideoUrl(url) {
    return url.startsWith(`${this.config.baseUrl}/video/v1/`);
  }

  set config(options = {}) {
    this._config = {
      baseUrl: 'https://api.mux.com',
      ...options,
    };
  }

  get config() {
    return this._config;
  }

  set tokenId(token = process.env.MUX_TOKEN_ID) {
    this._tokenId = token;

    if (typeof this._tokenId === 'undefined') {
      throw new Error('API Access Token must be provided.');
    }
  }

  get tokenId() {
    return this._tokenId;
  }

  set tokenSecret(secret = process.env.MUX_TOKEN_SECRET) {
    this._secret = secret;

    if (typeof this._secret === 'undefined' || this._secret === '') {
      throw new Error('API secret key must be provided');
    }
  }

  get tokenSecret() {
    return this._secret;
  }
}

module.exports = Base;
