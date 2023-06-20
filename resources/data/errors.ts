// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as API from './';

export class Errors extends APIResource {
  /**
   * Returns a list of errors.
   */
  list(query?: ErrorListParams, options?: Core.RequestOptions): Promise<Core.APIResponse<ErrorsResponse>>;
  list(options?: Core.RequestOptions): Promise<Core.APIResponse<ErrorsResponse>>;
  list(
    query: ErrorListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ErrorsResponse>> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.get('/data/v1/errors', { query, ...options });
  }
}

export interface ErrorsResponse {
  data: Array<ErrorsResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number;
}

export namespace ErrorsResponse {
  export interface Data {
    /**
     * The error code
     */
    code?: number;

    /**
     * The total number of views that experiend this error.
     */
    count?: number;

    /**
     * Description of the error.
     */
    description?: string;

    /**
     * A unique identifier for this error.
     */
    id?: number;

    /**
     * The last time this error was seen (ISO 8601 timestamp).
     */
    last_seen?: string;

    /**
     * The error message.
     */
    message?: string;

    /**
     * Notes that are attached to this error.
     */
    notes?: string;

    /**
     * The percentage of views that experienced this error.
     */
    percentage?: number;
  }
}

export interface ErrorListParams {
  /**
   * Limit the results to rows that match conditions from provided key:value pairs.
   * Must be provided as an array query string parameter.
   *
   * To exclude rows that match a certain condition, prepend a `!` character to the
   * dimension.
   *
   * Possible filter names are the same as returned by the List Filters endpoint.
   *
   * Example:
   *
   * - `filters[]=operating_system:windows&filters[]=!country:US`
   */
  'filters[]'?: Array<string>;

  /**
   * Timeframe window to limit results by. Must be provided as an array query string
   * parameter (e.g. timeframe[]=).
   *
   * Accepted formats are...
   *
   * - array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`
   * - duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`
   */
  'timeframe[]'?: Array<string>;
}

export namespace Errors {
  export import ErrorsResponse = API.ErrorsResponse;
  export import ErrorListParams = API.ErrorListParams;
}
