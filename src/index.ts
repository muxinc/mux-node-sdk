// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import {
  type BasePageParams,
  BasePageResponse,
  type CursorPageParams,
  CursorPageResponse,
  type PageWithTotalParams,
  PageWithTotalResponse,
} from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Webhooks } from './resources/webhooks';
import { Data } from './resources/data/data';
import { System } from './resources/system/system';
import { Video } from './resources/video/video';

export interface ClientOptions {
  /**
   * Defaults to process.env['MUX_TOKEN_ID'].
   */
  tokenId?: string | null | undefined;

  /**
   * Defaults to process.env['MUX_TOKEN_SECRET'].
   */
  tokenSecret?: string | null | undefined;

  /**
   * Defaults to process.env['MUX_WEBHOOK_SECRET'].
   */
  webhookSecret?: string | null | undefined;

  /**
   * Defaults to process.env['MUX_SIGNING_KEY'].
   */
  jwtSigningKey?: string | null | undefined;

  /**
   * Defaults to process.env['MUX_PRIVATE_KEY'].
   */
  jwtPrivateKey?: string | null | undefined;

  /**
   * Defaults to process.env['MUX_AUTHORIZATION_TOKEN'].
   */
  authorizationToken?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['MUX_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Mux API.
 */
export class Mux extends Core.APIClient {
  tokenId: string | null;
  tokenSecret: string | null;
  webhookSecret: string | null;
  jwtSigningKey: string | null;
  jwtPrivateKey: string | null;
  authorizationToken: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Mux API.
   *
   * @param {string | null | undefined} [opts.tokenId=process.env['MUX_TOKEN_ID'] ?? null]
   * @param {string | null | undefined} [opts.tokenSecret=process.env['MUX_TOKEN_SECRET'] ?? null]
   * @param {string | null | undefined} [opts.webhookSecret=process.env['MUX_WEBHOOK_SECRET'] ?? null]
   * @param {string | null | undefined} [opts.jwtSigningKey=process.env['MUX_SIGNING_KEY'] ?? null]
   * @param {string | null | undefined} [opts.jwtPrivateKey=process.env['MUX_PRIVATE_KEY'] ?? null]
   * @param {string | null | undefined} [opts.authorizationToken=process.env['MUX_AUTHORIZATION_TOKEN'] ?? null]
   * @param {string} [opts.baseURL=process.env['MUX_BASE_URL'] ?? https://api.mux.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('MUX_BASE_URL'),
    tokenId = Core.readEnv('MUX_TOKEN_ID') ?? null,
    tokenSecret = Core.readEnv('MUX_TOKEN_SECRET') ?? null,
    webhookSecret = Core.readEnv('MUX_WEBHOOK_SECRET') ?? null,
    jwtSigningKey = Core.readEnv('MUX_SIGNING_KEY') ?? null,
    jwtPrivateKey = Core.readEnv('MUX_PRIVATE_KEY') ?? null,
    authorizationToken = Core.readEnv('MUX_AUTHORIZATION_TOKEN') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      tokenId,
      tokenSecret,
      webhookSecret,
      jwtSigningKey,
      jwtPrivateKey,
      authorizationToken,
      ...opts,
      baseURL: baseURL || `https://api.mux.com`,
    };

    super({
      baseURL: options.baseURL!,
      baseURLOverridden: baseURL ? baseURL !== 'https://api.mux.com' : false,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.tokenId = tokenId;
    this.tokenSecret = tokenSecret;
    this.webhookSecret = webhookSecret;
    this.jwtSigningKey = jwtSigningKey;
    this.jwtPrivateKey = jwtPrivateKey;
    this.authorizationToken = authorizationToken;
  }

  video: API.Video = new API.Video(this);
  data: API.Data = new API.Data(this);
  system: API.System = new API.System(this);
  webhooks: API.Webhooks = new API.Webhooks(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.mux.com';
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override validateHeaders(headers: Core.Headers, customHeaders: Core.Headers) {
    if (this.tokenId && this.tokenSecret && headers['authorization']) {
      return;
    }
    if (customHeaders['authorization'] === null) {
      return;
    }

    if (this.authorizationToken && headers['authorization']) {
      return;
    }
    if (customHeaders['authorization'] === null) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected either tokenId, tokenSecret or authorizationToken to be set. Or for one of the "Authorization" or "Authorization" headers to be explicitly omitted',
    );
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...this.accessTokenAuth(opts),
      ...this.authorizationTokenAuth(opts),
    };
  }

  protected accessTokenAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (!this.tokenId) {
      return {};
    }

    if (!this.tokenSecret) {
      return {};
    }

    const credentials = `${this.tokenId}:${this.tokenSecret}`;
    const Authorization = `Basic ${Core.toBase64(credentials)}`;
    return { Authorization };
  }

  protected authorizationTokenAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.authorizationToken == null) {
      return {};
    }
    return { Authorization: `Bearer ${this.authorizationToken}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'brackets' });
  }

  static Mux = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static MuxError = Errors.MuxError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Mux.Video = Video;
Mux.Data = Data;
Mux.System = System;
Mux.Webhooks = Webhooks;
export declare namespace Mux {
  export type RequestOptions = Core.RequestOptions;

  export import PageWithTotal = Pagination.PageWithTotal;
  export {
    type PageWithTotalParams as PageWithTotalParams,
    type PageWithTotalResponse as PageWithTotalResponse,
  };

  export import BasePage = Pagination.BasePage;
  export { type BasePageParams as BasePageParams, type BasePageResponse as BasePageResponse };

  export import CursorPage = Pagination.CursorPage;
  export { type CursorPageParams as CursorPageParams, type CursorPageResponse as CursorPageResponse };

  export { Video as Video };

  export { Data as Data };

  export { System as System };

  export { Webhooks as Webhooks };

  export type PlaybackID = API.PlaybackID;
  export type PlaybackPolicy = API.PlaybackPolicy;
}

export { toFile, fileFromPath } from './uploads';
export {
  MuxError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Mux;
