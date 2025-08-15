// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { BasePage, type BasePageParams } from '../../pagination';

export class Filters extends APIResource {
  /**
   * The API has been replaced by the list-dimension-values API call.
   *
   * Lists the values for a filter along with a total count of related views.
   *
   * @deprecated
   */
  listValues(
    filterId: string,
    query?: FilterListValuesParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FilterValuesBasePage, FilterValue>;
  listValues(
    filterId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FilterValuesBasePage, FilterValue>;
  listValues(
    filterId: string,
    query: FilterListValuesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<FilterValuesBasePage, FilterValue> {
    if (isRequestOptions(query)) {
      return this.listValues(filterId, {}, query);
    }
    return this._client.getAPIList(`/data/v1/filters/${filterId}`, FilterValuesBasePage, {
      query,
      defaultBaseURL: 'https://api.mux.com',
      ...options,
    });
  }
}

export class FilterValuesBasePage extends BasePage<FilterValue> {}

export interface FilterValue {
  total_count: number;

  value: string | null;
}

export interface FiltersResponse {
  data: FiltersResponse.Data;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export namespace FiltersResponse {
  export interface Data {
    advanced: Array<string>;

    basic: Array<string>;
  }
}

export interface FilterListValuesParams extends BasePageParams {
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

Filters.FilterValuesBasePage = FilterValuesBasePage;

export declare namespace Filters {
  export {
    type FilterValue as FilterValue,
    type FiltersResponse as FiltersResponse,
    FilterValuesBasePage as FilterValuesBasePage,
    type FilterListValuesParams as FilterListValuesParams,
  };
}
