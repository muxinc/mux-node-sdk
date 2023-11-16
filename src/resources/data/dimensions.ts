// File generated from our OpenAPI spec by Stainless.

import * as Core from '@mux/mux-node/core';
import { APIResource } from '@mux/mux-node/resource';
import { isRequestOptions } from '@mux/mux-node/core';
import * as DimensionsAPI from '@mux/mux-node/resources/data/dimensions';
import { BasePage, type BasePageParams } from '@mux/mux-node/pagination';

export class Dimensions extends APIResource {
  /**
   * List all available dimensions.
   *
   * Note: This API replaces the list-filters API call.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<DimensionsResponse> {
    return this._client.get('/data/v1/dimensions', options);
  }

  /**
   * Lists the values for a dimension along with a total count of related views.
   *
   * Note: This API replaces the list-filter-values API call.
   */
  listValues(
    dimensionId: string,
    query?: DimensionListValuesParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DimensionValuesBasePage, DimensionValue>;
  listValues(
    dimensionId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DimensionValuesBasePage, DimensionValue>;
  listValues(
    dimensionId: string,
    query: DimensionListValuesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DimensionValuesBasePage, DimensionValue> {
    if (isRequestOptions(query)) {
      return this.listValues(dimensionId, {}, query);
    }
    return this._client.getAPIList(`/data/v1/dimensions/${dimensionId}`, DimensionValuesBasePage, {
      query,
      ...options,
    });
  }
}

export class DimensionValuesBasePage extends BasePage<DimensionValue> {}

export interface DimensionValue {
  total_count: number;

  value: string | null;
}

export interface DimensionsResponse {
  data: DimensionsResponse.Data;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export namespace DimensionsResponse {
  export interface Data {
    advanced: Array<string>;

    basic: Array<string>;
  }
}

export interface DimensionListValuesParams extends BasePageParams {
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

export namespace Dimensions {
  export import DimensionValue = DimensionsAPI.DimensionValue;
  export import DimensionsResponse = DimensionsAPI.DimensionsResponse;
  export import DimensionValuesBasePage = DimensionsAPI.DimensionValuesBasePage;
  export import DimensionListValuesParams = DimensionsAPI.DimensionListValuesParams;
}
