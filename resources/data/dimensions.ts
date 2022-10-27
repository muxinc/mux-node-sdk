// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { PageWithTotal, PageWithTotalParams } from '~/pagination';
import * as Shared from '~/resources/shared';

export class Dimensions extends APIResource {
  /**
   * List all available dimensions.
   *
   * Note: This API replaces the list-filters API call.
   */
  list(options?: Core.RequestOptions): Promise<Core.APIResponse<DimensionsResponse>> {
    return this.get('/data/v1/dimensions', options);
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
  ): Core.PagePromise<DimensionValuesPageWithTotal>;
  listValues(
    dimensionId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DimensionValuesPageWithTotal>;
  listValues(
    dimensionId: string,
    query: DimensionListValuesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DimensionValuesPageWithTotal> {
    if (isRequestOptions(query)) {
      return this.listValues(dimensionId, {}, query);
    }

    return this.getAPIList(`/data/v1/dimensions/${dimensionId}`, DimensionValuesPageWithTotal, {
      query,
      ...options,
    });
  }
}

export class DimensionValuesPageWithTotal extends PageWithTotal<Shared.DimensionValue> {}

export interface DimensionsResponse {
  data?: DimensionsResponse.Data;

  timeframe?: Array<number>;

  total_row_count?: number;
}

export namespace DimensionsResponse {
  export interface Data {
    advanced?: Array<string>;

    basic?: Array<string>;
  }
}

export interface DimensionListValuesParams extends PageWithTotalParams {
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
