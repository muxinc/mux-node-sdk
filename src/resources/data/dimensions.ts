// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { BasePage, type BasePageParams } from '../../pagination';

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

Dimensions.DimensionValuesBasePage = DimensionValuesBasePage;

export declare namespace Dimensions {
  export {
    type DimensionValue as DimensionValue,
    type DimensionsResponse as DimensionsResponse,
    DimensionValuesBasePage as DimensionValuesBasePage,
    type DimensionListValuesParams as DimensionListValuesParams,
  };
}
