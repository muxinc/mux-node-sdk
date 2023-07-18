// File generated from our OpenAPI spec by Stainless.

import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources/index';
import * as Errors from './error';
import type { Agent } from '@mux/mux-node/_shims/agent';
import * as Uploads from './uploads';
import * as qs from 'qs';

type Config = {
  /**
   * Defaults to process.env["MUX_TOKEN_ID"].
   */
  tokenId?: string;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   */
  baseURL?: string;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

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
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;

  tokenSecret?: string | null;
};

/** Instantiate the API Client. */
export class Mux extends Core.APIClient {
  tokenId: string;
  tokenSecret: string;

  private _options: Config;

  constructor(config: Config) {
    const options: Config = {
      tokenId: typeof process === 'undefined' ? '' : process.env['MUX_TOKEN_ID'] || '',
      baseURL: 'https://api.mux.com',
      ...config,
    };

    if (!options.tokenId && options.tokenId !== null) {
      throw new Error(
        "The MUX_TOKEN_ID environment variable is missing or empty; either provide it, or instantiate the Mux client with an tokenId option, like new Mux({ tokenId: 'my token id' }).",
      );
    }

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this.tokenId = options.tokenId;
    this._options = options;

    const tokenSecret = config.tokenSecret || process.env['MUX_TOKEN_SECRET'];
    if (!tokenSecret) {
      throw new Error(
        "The MUX_TOKEN_SECRET environment variable is missing or empty; either provide it, or instantiate the Mux client with an tokenSecret option, like new Mux({ tokenSecret: 'my secret' }).",
      );
    }
    this.tokenSecret = tokenSecret;
  }

  video: API.Video = new API.Video(this);
  data: API.Data = new API.Data(this);
  system: API.System = new API.System(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(): Core.Headers {
    return {
      ...super.defaultHeaders(),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(): Core.Headers {
    const credentials = `${this.tokenId}:${this.tokenSecret}`;
    const Authorization = `Basic ${Core.toBase64(credentials)}`;
    return { Authorization };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static Mux = this;

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
}

export const {
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
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Mux {
  // Helper functions
  export import toFile = Uploads.toFile;
  export import fileFromPath = Uploads.fileFromPath;

  export import PageWithTotal = Pagination.PageWithTotal;
  export import PageWithTotalParams = Pagination.PageWithTotalParams;
  export import PageWithTotalResponse = Pagination.PageWithTotalResponse;

  export import BasePage = Pagination.BasePage;
  export import BasePageParams = Pagination.BasePageParams;
  export import BasePageResponse = Pagination.BasePageResponse;

  export import Video = API.Video;

  export import Data = API.Data;

  export import System = API.System;

  export import PlaybackID = API.PlaybackID;
  export import PlaybackPolicy = API.PlaybackPolicy;
}

export default Mux;
