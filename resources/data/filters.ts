// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { MorePages, MorePagesParams } from '~/pagination';

export class Filters extends APIResource {
  /**
   * The API has been replaced by the list-dimensions API call.
   *
   * Lists all the filters broken out into basic and advanced.
   */
  list(options?: Core.RequestOptions): Promise<Core.APIResponse<ListFiltersResponse>> {
    return this.get('/data/v1/filters', options);
  }

  /**
   * The API has been replaced by the list-dimension-values API call.
   *
   * Lists the values for a filter along with a total count of related views.
   */
  listFilterValues(
    id: string,
    query?: FilterListFilterValuesParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FilterValuesMorePages>;
  listFilterValues(id: string, options?: Core.RequestOptions): Core.PagePromise<FilterValuesMorePages>;
  listFilterValues(
    id: string,
    query: FilterListFilterValuesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<FilterValuesMorePages> {
    if (isRequestOptions(query)) {
      return this.listFilterValues(id, {}, query);
    }

    return this.getAPIList(`/data/v1/filters/${id}`, FilterValuesMorePages, { query, ...options });
  }
}

export class FilterValuesMorePages extends MorePages<FilterValue> {}

export interface FilterValue {
  total_count?: number;

  value?: string;
}

export interface ListFiltersResponse {
  data?: ListFiltersResponse.Data;

  timeframe?: Array<number>;

  total_row_count?: number;
}

export namespace ListFiltersResponse {
  export interface Data {
    advanced?: Array<string>;

    basic?: Array<string>;
  }
}

export interface FilterListFilterValuesParams extends MorePagesParams {
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
