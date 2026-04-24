// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { BasePage, type BasePageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Deprecated, please refer to the Dimensions APIs.
 */
export class Filters extends APIResource {
  /**
   * The API has been replaced by the list-dimension-values API call.
   *
   * Lists the values for a filter along with a total count of related views.
   *
   * @deprecated
   */
  listValues(filterID: string, query: FilterListValuesParams | null | undefined = {}, options?: RequestOptions): PagePromise<FilterValuesBasePage, FilterValue> {
    return this._client.getAPIList(path`/data/v1/filters/${filterID}`, BasePage<FilterValue>, { query, defaultBaseURL: 'https://api.mux.com', ...options });
  }
}

export type FilterValuesBasePage = BasePage<FilterValue>

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

export declare namespace Filters {
  export {
    type FilterValue as FilterValue,
    type FiltersResponse as FiltersResponse,
    type FilterValuesBasePage as FilterValuesBasePage,
    type FilterListValuesParams as FilterListValuesParams
  };
}
