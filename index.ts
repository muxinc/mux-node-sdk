// File generated from our OpenAPI spec by Stainless.
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources';

import type { Agent } from 'http';

type Config = {
  /**
   * Defaults to to process.env["MUX_TOKEN_ID"]. Set it to null if you want to send unauthenticated requests.
   */
  tokenId?: string | null;
  baseURL?: string;
  timeout?: number;
  httpAgent?: Agent;
  tokenSecret?: string | null;
};

export class Mux extends Core.APIClient {
  tokenId: string | null;
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

  video: API.VideoResource = new API.VideoResource(this);
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

export namespace Mux {
  export import MorePages = Pagination.MorePages;
  export import MorePagesParams = Pagination.MorePagesParams;
  export import MorePagesResponse = Pagination.MorePagesResponse;

  export import NoMorePages = Pagination.NoMorePages;
  export import NoMorePagesParams = Pagination.NoMorePagesParams;
  export import NoMorePagesResponse = Pagination.NoMorePagesResponse;
}

exports = module.exports = Mux;
export default Mux;
