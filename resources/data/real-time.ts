// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';

export class RealTimeResource extends APIResource {
  /**
   * Lists available real-time dimensions.
   */
  listDimensions(options?: Core.RequestOptions): Promise<Core.APIResponse<ListRealTimeDimensionsResponse>> {
    return this.get('/data/v1/realtime/dimensions', options);
  }

  /**
   * Lists available real-time metrics.
   */
  listMetrics(options?: Core.RequestOptions): Promise<Core.APIResponse<ListRealTimeMetricsResponse>> {
    return this.get('/data/v1/realtime/metrics', options);
  }

  /**
   * Gets breakdown information for a specific dimension and metric along with the
   * number of concurrent viewers and negative impact score.
   */
  retrieveBreakdown(
    id: string,
    query?: RealTimeRetrieveBreakdownParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<GetRealTimeBreakdownResponse>>;
  retrieveBreakdown(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<GetRealTimeBreakdownResponse>>;
  retrieveBreakdown(
    id: string,
    query: RealTimeRetrieveBreakdownParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<GetRealTimeBreakdownResponse>> {
    if (isRequestOptions(query)) {
      return this.retrieveBreakdown(id, {}, query);
    }

    return this.get(`/data/v1/realtime/metrics/${id}/breakdown`, { query, ...options });
  }

  /**
   * Gets histogram timeseries information for a specific metric.
   */
  retrieveHistogramTimeseries(
    id: string,
    query?: RealTimeRetrieveHistogramTimeseriesParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<GetRealTimeHistogramTimeseriesResponse>>;
  retrieveHistogramTimeseries(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<GetRealTimeHistogramTimeseriesResponse>>;
  retrieveHistogramTimeseries(
    id: string,
    query: RealTimeRetrieveHistogramTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<GetRealTimeHistogramTimeseriesResponse>> {
    if (isRequestOptions(query)) {
      return this.retrieveHistogramTimeseries(id, {}, query);
    }

    return this.get(`/data/v1/realtime/metrics/${id}/histogram-timeseries`, { query, ...options });
  }

  /**
   * Gets Time series information for a specific metric along with the number of
   * concurrent viewers.
   */
  retrieveTimeseries(
    id: string,
    query?: RealTimeRetrieveTimeseriesParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<GetRealTimeTimeseriesResponse>>;
  retrieveTimeseries(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<GetRealTimeTimeseriesResponse>>;
  retrieveTimeseries(
    id: string,
    query: RealTimeRetrieveTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<GetRealTimeTimeseriesResponse>> {
    if (isRequestOptions(query)) {
      return this.retrieveTimeseries(id, {}, query);
    }

    return this.get(`/data/v1/realtime/metrics/${id}/timeseries`, { query, ...options });
  }
}

export interface GetRealTimeBreakdownResponse {
  data?: Array<GetRealTimeBreakdownResponse.Data>;

  timeframe?: Array<number>;

  total_row_count?: number;
}

export namespace GetRealTimeBreakdownResponse {
  export interface Data {
    concurrent_viewers?: number;

    display_value?: string;

    metric_value?: number;

    negative_impact?: number;

    value?: string;
  }
}

export interface GetRealTimeHistogramTimeseriesResponse {
  data?: Array<GetRealTimeHistogramTimeseriesResponse.Data>;

  meta?: GetRealTimeHistogramTimeseriesResponse.Meta;

  timeframe?: Array<number>;

  total_row_count?: number;
}

export namespace GetRealTimeHistogramTimeseriesResponse {
  export interface Meta {
    buckets?: Array<Meta.Buckets>;
  }

  export namespace Meta {
    export interface Buckets {
      end?: number;

      start?: number;
    }
  }

  export interface Data {
    average?: number;

    bucket_values?: Array<Data.BucketValues>;

    max_percentage?: number;

    median?: number;

    p95?: number;

    sum?: number;

    timestamp?: string;
  }

  export namespace Data {
    export interface BucketValues {
      count?: number;

      percentage?: number;
    }
  }
}

export interface GetRealTimeTimeseriesResponse {
  data?: Array<GetRealTimeTimeseriesResponse.Data>;

  timeframe?: Array<number>;

  total_row_count?: number;
}

export namespace GetRealTimeTimeseriesResponse {
  export interface Data {
    concurrent_viewers?: number;

    date?: string;

    value?: number;
  }
}

export interface ListRealTimeDimensionsResponse {
  data?: Array<ListRealTimeDimensionsResponse.Data>;

  timeframe?: Array<number>;

  total_row_count?: number;
}

export namespace ListRealTimeDimensionsResponse {
  export interface Data {
    display_name?: string;

    name?: string;
  }
}

export interface ListRealTimeMetricsResponse {
  data?: Array<ListRealTimeMetricsResponse.Data>;

  timeframe?: Array<number>;

  total_row_count?: number;
}

export namespace ListRealTimeMetricsResponse {
  export interface Data {
    display_name?: string;

    name?: string;
  }
}

export interface RealTimeRetrieveBreakdownParams {
  /**
   * Dimension the specified value belongs to
   */
  dimension?:
    | 'asn'
    | 'cdn'
    | 'country'
    | 'operating_system'
    | 'player_name'
    | 'region'
    | 'stream_type'
    | 'sub_property_id'
    | 'video_series'
    | 'video_title';

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
   * Value to order the results by
   */
  order_by?: 'negative_impact' | 'value' | 'views' | 'field';

  /**
   * Sort order.
   */
  order_direction?: 'asc' | 'desc';

  /**
   * Timestamp to limit results by. This value must be provided as a unix timestamp.
   * Defaults to the current unix timestamp.
   */
  timestamp?: number;
}

export interface RealTimeRetrieveHistogramTimeseriesParams {
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
}

export interface RealTimeRetrieveTimeseriesParams {
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
}
