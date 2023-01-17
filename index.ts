// File generated from our OpenAPI spec by Stainless.
import qs from 'qs';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources';
import type { Agent } from 'http';
import * as FileFromPath from 'formdata-node/file-from-path';

type Config = {
  /**
   * Defaults to to process.env["MUX_TOKEN_ID"]. Set it to null if you want to send unauthenticated requests.
   */
  tokenId?: string;
  baseURL?: string;
  timeout?: number;
  httpAgent?: Agent;
  tokenSecret?: string | null;
};

export class Mux extends Core.APIClient {
  tokenId: string;
  tokenSecret: string;

  constructor(config: Config) {
    const options: Config = {
      tokenId: process.env['MUX_TOKEN_ID'] || '',
      baseURL: 'https://api.mux.com',
      ...config,
    };

    if (!options.tokenId && options.tokenId !== null) {
      throw new Error(
        "The MUX_TOKEN_ID environment variable is missing or empty; either provide it, or instantiate the Mux client with an tokenId option, like new Mux({tokenId: 'my token id'}).",
      );
    }

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout,
      httpAgent: options.httpAgent,
    });
    this.tokenId = options.tokenId;

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

  protected override authHeaders(): Core.Headers {
    const creds = `${this.tokenId}:${this.tokenSecret}`;
    const Authorization = `Basic ${Buffer.from(creds).toString('base64')}`;
    return { Authorization };
  }

  protected override qsOptions(): qs.IStringifyOptions {
    return { arrayFormat: 'comma' };
  }

  static APIError = Core.APIError;

  static APIConnectionError = Core.APIConnectionError;
  static APIConnectionTimeoutError = Core.APIConnectionTimeoutError;

  static BadRequestError = Core.BadRequestError;
  static AuthenticationError = Core.AuthenticationError;
  static PermissionDeniedError = Core.PermissionDeniedError;
  static NotFoundError = Core.NotFoundError;
  static ConflictError = Core.ConflictError;
  static UnprocessableEntityError = Core.UnprocessableEntityError;
  static RateLimitError = Core.RateLimitError;
  static InternalServerError = Core.InternalServerError;
}

export const {
  APIError,

  APIConnectionError,
  APIConnectionTimeoutError,

  BadRequestError,
  AuthenticationError,
  PermissionDeniedError,
  NotFoundError,
  ConflictError,
  UnprocessableEntityError,
  RateLimitError,
  InternalServerError,
} = Mux;

export namespace Mux {
  // Helper functions
  export import fileFromPath = FileFromPath.fileFromPath;

  export import PageWithTotal = Pagination.PageWithTotal;
  export import PageWithTotalParams = Pagination.PageWithTotalParams;
  export import PageWithTotalResponse = Pagination.PageWithTotalResponse;

  export import BasePage = Pagination.BasePage;
  export import BasePageParams = Pagination.BasePageParams;
  export import BasePageResponse = Pagination.BasePageResponse;

  export import PlaybackID = API.PlaybackID;
}

exports = module.exports = Mux;
export default Mux;
