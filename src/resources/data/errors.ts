// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Errors extends APIResource {
  /**
   * Returns a list of errors.
   *
   * @example
   * ```ts
   * const errorsResponse = await client.data.errors.list();
   * ```
   */
  list(query?: ErrorListParams, options?: Core.RequestOptions): Core.APIPromise<ErrorsResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ErrorsResponse>;
  list(
    query: ErrorListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ErrorsResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/data/v1/errors', { query, defaultBaseURL: 'https://api.mux.com', ...options });
  }
}

export interface ErrorsResponse {
  data: Array<ErrorsResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export namespace ErrorsResponse {
  export interface Data {
    /**
     * A unique identifier for this error.
     */
    id: number;

    /**
     * The error code
     */
    code: number | null;

    /**
     * The total number of views that experienced this error.
     */
    count: number;

    /**
     * Description of the error.
     */
    description: string | null;

    /**
     * The last time this error was seen (ISO 8601 timestamp).
     */
    last_seen: string;

    /**
     * The error message.
     */
    message: string | null;

    /**
     * Notes that are attached to this error.
     */
    notes: string | null;

    /**
     * The percentage of views that experienced this error.
     */
    percentage: number;

    /**
     * The string version of the error code
     */
    player_error_code: string | null;
  }
}

export interface ErrorListParams {
  /**
   * Filter results using key:value pairs. Must be provided as an array query string
   * parameter.
   *
   * **Basic filtering:**
   *
   * - `filters[]=dimension:value` - Include rows where dimension equals value
   * - `filters[]=!dimension:value` - Exclude rows where dimension equals value
   *
   * **For trace dimensions (like video_cdn_trace):**
   *
   * - `filters[]=+dimension:value` - Include rows where trace contains value
   * - `filters[]=-dimension:value` - Exclude rows where trace contains value
   * - `filters[]=dimension:[value1,value2]` - Exact trace match
   *
   * **Examples:**
   *
   * - `filters[]=country:US` - US views only
   * - `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN
   */
  filters?: Array<string>;

  /**
   * Limit the results to rows that match inequality conditions from provided metric
   * comparison clauses. Must be provided as an array query string parameter.
   *
   * Possible filterable metrics are the same as the set of metric ids, with the
   * exceptions of `exits_before_video_start`, `unique_viewers`,
   * `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.
   *
   * Example:
   *
   * - `metric_filters[]=aggregate_startup_time>=1000`
   */
  metric_filters?: Array<string>;

  /**
   * Timeframe window to limit results by. Must be provided as an array query string
   * parameter (e.g. timeframe[]=).
   *
   * Accepted formats are...
   *
   * - array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`
   * - duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`
   */
  timeframe?: Array<string>;
}

export declare namespace Errors {
  export { type ErrorsResponse as ErrorsResponse, type ErrorListParams as ErrorListParams };
}
