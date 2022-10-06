// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { MorePages, MorePagesParams } from '~/pagination';

export class Dimensions extends APIResource {
  /**
   * List all available dimensions.
   *
   * Note: This API replaces the list-filters API call.
   */
  list(options?: Core.RequestOptions): Promise<Core.APIResponse<ListDimensionsResponse>> {
    return this.get('/data/v1/dimensions', options);
  }

  /**
   * Lists the values for a dimension along with a total count of related views.
   *
   * Note: This API replaces the list-filter-values API call.
   */
  listDimensionValues(
    id: string,
    query?: DimensionListDimensionValuesParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DimensionValuesMorePages>;
  listDimensionValues(id: string, options?: Core.RequestOptions): Core.PagePromise<DimensionValuesMorePages>;
  listDimensionValues(
    id: string,
    query: DimensionListDimensionValuesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DimensionValuesMorePages> {
    if (isRequestOptions(query)) {
      return this.listDimensionValues(id, {}, query);
    }

    return this.getAPIList(`/data/v1/dimensions/${id}`, DimensionValuesMorePages, { query, ...options });
  }
}

export class DimensionValuesMorePages extends MorePages<DimensionValue> {}

export interface DimensionValue {
  total_count?: number;

  value?: string;
}

export interface DimensionValue {
  data?: Array<DimensionValue>;

  timeframe?: Array<number>;

  total_row_count?: number;
}

export interface ListDimensionsResponse {
  data?: ListDimensionsResponse.Data;

  timeframe?: Array<number>;

  total_row_count?: number;
}

export namespace ListDimensionsResponse {
  export interface Data {
    advanced?: Array<string>;

    basic?: Array<string>;
  }
}

export interface DimensionListDimensionValuesParams extends MorePagesParams {
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
