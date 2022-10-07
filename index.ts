// File generated from our OpenAPI spec by Stainless.
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources';

import type { Agent } from 'http';

type Config = {
  /**
   * Defaults to to process.env["MUX_API_KEY"]. Set it to null if you want to send unauthenticated requests.
   */
  apiKey?: string | null;
  baseURL?: string;
  timeout?: number;
  httpAgent?: Agent;
};

export class Mux extends Core.APIClient {
  constructor(config?: Config) {
    const options: Config = {
      apiKey: process.env['MUX_API_KEY'] || '',
      baseURL: 'https://api.mux.com',
      ...config,
    };

    if (!options.apiKey && options.apiKey !== null) {
      throw new Error(
        "The MUX_API_KEY environment variable is missing or empty; either provide it, or instantiate the Mux client with an apiKey option, like new Mux({apiKey: 'my api key'}).",
      );
    }

    super({
      apiKey: options.apiKey,
      baseURL: options.baseURL!,
      timeout: options.timeout,
      httpAgent: options.httpAgent,
    });
  }

  video: API.VideoResource = new API.VideoResource(this);
  data: API.Data = new API.Data(this);

  protected override authHeaders(): Core.Headers {
    const creds = `Basic 44c819de-4add-4c9f-b2e9-384a0a71bede:INKxCoZ+cX6l1yrR6vqzYHVaeFEcqvZShznWM1U/No8KsV7h6Jxu1XXuTUQ91sdiGONK3H7NE7H`;
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
