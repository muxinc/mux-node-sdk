// File generated from our OpenAPI spec by Stainless.

import * as qs from 'qs';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources/index';
import * as Errors from './error';
import type { Agent } from 'mux/_shims/agent';
import * as Uploads from './uploads';

type Config = {
  /**
   * Defaults to process.env["MUX_TOKEN_ID"].
   */
  tokenId?: string;
  baseURL?: string;
  timeout?: number;
  httpAgent?: Agent;
  maxRetries?: number;
  defaultHeaders?: Core.Headers;
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

  protected override defaultHeaders(): Core.Headers {
    return {
      ...super.defaultHeaders(),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(): Core.Headers {
    const credentials = `${this.tokenId}:${this.tokenSecret}`;
    const Authorization = `Basic ${Buffer.from(credentials).toString('base64')}`;
    return { Authorization };
  }

  protected override qsOptions(): qs.IStringifyOptions {
    return { arrayFormat: 'comma' };
  }

  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
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
