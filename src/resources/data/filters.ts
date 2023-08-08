// File generated from our OpenAPI spec by Stainless.

import * as Core from '@mux/mux-node/core';
import { APIResource } from '@mux/mux-node/resource';
import { isRequestOptions } from '@mux/mux-node/core';
import * as API from './index';
import { BasePage, BasePageParams } from '@mux/mux-node/pagination';

export class Filters extends APIResource {
  /**
   * The API has been replaced by the list-dimension-values API call.
   *
   * Lists the values for a filter along with a total count of related views.
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
    return this.getAPIList(`/data/v1/filters/${filterId}`, FilterValuesBasePage, { query, ...options });
  }
}

export class FilterValuesBasePage extends BasePage<FilterValue> {}
// alias so we can export it in the namespace
type _FilterValuesBasePage = FilterValuesBasePage;

export interface FilterValue {
  total_count?: number;

  value?: string;
}

export interface FiltersResponse {
  data: FiltersResponse.Data;

  timeframe: Array<number>;

  total_row_count: number;
}

export namespace FiltersResponse {
  export interface Data {
    advanced?: Array<string>;

    basic?: Array<string>;
  }
}

export interface FilterListValuesParams extends BasePageParams {
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

export namespace Filters {
  export import FilterValue = API.FilterValue;
  export import FiltersResponse = API.FiltersResponse;
  export type FilterValuesBasePage = _FilterValuesBasePage;
  export import FilterListValuesParams = API.FilterListValuesParams;
}
