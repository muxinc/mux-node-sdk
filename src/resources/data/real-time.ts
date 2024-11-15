// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class RealTime extends APIResource {
  /**
   * Lists available real-time dimensions. This API is now deprecated, please use the
   * `List Monitoring Dimensions` API.
   */
  listDimensions(options?: Core.RequestOptions): Core.APIPromise<RealTimeDimensionsResponse> {
    return this._client.get('/data/v1/realtime/dimensions', options);
  }

  /**
   * Lists available real-time metrics. This API is now deprecated, please use the
   * `List Monitoring Metrics` API.
   */
  listMetrics(options?: Core.RequestOptions): Core.APIPromise<RealTimeMetricsResponse> {
    return this._client.get('/data/v1/realtime/metrics', options);
  }

  /**
   * Gets breakdown information for a specific dimension and metric along with the
   * number of concurrent viewers and negative impact score. This API is now
   * deprecated, please use the `Get Monitoring Breakdown` API.
   */
  retrieveBreakdown(
    realtimeMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate',
    query?: RealTimeRetrieveBreakdownParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RealTimeBreakdownResponse>;
  retrieveBreakdown(
    realtimeMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate',
    options?: Core.RequestOptions,
  ): Core.APIPromise<RealTimeBreakdownResponse>;
  retrieveBreakdown(
    realtimeMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate',
    query: RealTimeRetrieveBreakdownParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RealTimeBreakdownResponse> {
    if (isRequestOptions(query)) {
      return this.retrieveBreakdown(realtimeMetricId, {}, query);
    }
    return this._client.get(`/data/v1/realtime/metrics/${realtimeMetricId}/breakdown`, { query, ...options });
  }

  /**
   * Gets histogram timeseries information for a specific metric. This API is now
   * deprecated, please use the `Get Monitoring Histogram Timeseries` API.
   */
  retrieveHistogramTimeseries(
    realtimeHistogramMetricId: 'video-startup-time',
    query?: RealTimeRetrieveHistogramTimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RealTimeHistogramTimeseriesResponse>;
  retrieveHistogramTimeseries(
    realtimeHistogramMetricId: 'video-startup-time',
    options?: Core.RequestOptions,
  ): Core.APIPromise<RealTimeHistogramTimeseriesResponse>;
  retrieveHistogramTimeseries(
    realtimeHistogramMetricId: 'video-startup-time',
    query: RealTimeRetrieveHistogramTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RealTimeHistogramTimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.retrieveHistogramTimeseries(realtimeHistogramMetricId, {}, query);
    }
    return this._client.get(`/data/v1/realtime/metrics/${realtimeHistogramMetricId}/histogram-timeseries`, {
      query,
      ...options,
    });
  }

  /**
   * Gets Time series information for a specific metric along with the number of
   * concurrent viewers. This API is now deprecated, please use the
   * `Get Monitoring Timeseries` API.
   */
  retrieveTimeseries(
    realtimeMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate',
    query?: RealTimeRetrieveTimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RealTimeTimeseriesResponse>;
  retrieveTimeseries(
    realtimeMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate',
    options?: Core.RequestOptions,
  ): Core.APIPromise<RealTimeTimeseriesResponse>;
  retrieveTimeseries(
    realtimeMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate',
    query: RealTimeRetrieveTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RealTimeTimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.retrieveTimeseries(realtimeMetricId, {}, query);
    }
    return this._client.get(`/data/v1/realtime/metrics/${realtimeMetricId}/timeseries`, {
      query,
      ...options,
    });
  }
}

export interface RealTimeBreakdownResponse {
  data: Array<RealTimeBreakdownResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export namespace RealTimeBreakdownResponse {
  export interface Data {
    concurrent_viewers: number;

    metric_value: number | null;

    negative_impact: number;

    starting_up_viewers: number;

    value: string | null;

    display_value?: string;
  }
}

export interface RealTimeDimensionsResponse {
  data: Array<RealTimeDimensionsResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export namespace RealTimeDimensionsResponse {
  export interface Data {
    display_name: string;

    name: string;
  }
}

export interface RealTimeHistogramTimeseriesResponse {
  data: Array<RealTimeHistogramTimeseriesResponse.Data>;

  meta: RealTimeHistogramTimeseriesResponse.Meta;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export namespace RealTimeHistogramTimeseriesResponse {
  export interface Data {
    average: number | null;

    bucket_values: Array<Data.BucketValue>;

    max_percentage: number;

    median: number | null;

    p95: number | null;

    sum: number;

    timestamp: string;
  }

  export namespace Data {
    export interface BucketValue {
      count: number;

      percentage: number;
    }
  }

  export interface Meta {
    bucket_unit: string;

    buckets: Array<Meta.Bucket>;
  }

  export namespace Meta {
    export interface Bucket {
      end: number | null;

      start: number;
    }
  }
}

export interface RealTimeMetricsResponse {
  data: Array<RealTimeMetricsResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export namespace RealTimeMetricsResponse {
  export interface Data {
    display_name: string;

    name: string;
  }
}

export interface RealTimeTimeseriesResponse {
  data: Array<RealTimeTimeseriesResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export namespace RealTimeTimeseriesResponse {
  export interface Data {
    concurrent_viewers: number;

    date: string;

    value: number | null;
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
   * Possible filter names are the same as returned by the List Monitoring Dimensions
   * endpoint.
   *
   * Example:
   *
   * - `filters[]=operating_system:windows&filters[]=!country:US`
   */
  filters?: Array<string>;

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
   * Possible filter names are the same as returned by the List Monitoring Dimensions
   * endpoint.
   *
   * Example:
   *
   * - `filters[]=operating_system:windows&filters[]=!country:US`
   */
  filters?: Array<string>;
}

export interface RealTimeRetrieveTimeseriesParams {
  /**
   * Limit the results to rows that match conditions from provided key:value pairs.
   * Must be provided as an array query string parameter.
   *
   * To exclude rows that match a certain condition, prepend a `!` character to the
   * dimension.
   *
   * Possible filter names are the same as returned by the List Monitoring Dimensions
   * endpoint.
   *
   * Example:
   *
   * - `filters[]=operating_system:windows&filters[]=!country:US`
   */
  filters?: Array<string>;

  /**
   * Timestamp to use as the start of the timeseries data. This value must be
   * provided as a unix timestamp. Defaults to 30 minutes ago.
   */
  timestamp?: number;
}

export declare namespace RealTime {
  export {
    type RealTimeBreakdownResponse as RealTimeBreakdownResponse,
    type RealTimeDimensionsResponse as RealTimeDimensionsResponse,
    type RealTimeHistogramTimeseriesResponse as RealTimeHistogramTimeseriesResponse,
    type RealTimeMetricsResponse as RealTimeMetricsResponse,
    type RealTimeTimeseriesResponse as RealTimeTimeseriesResponse,
    type RealTimeRetrieveBreakdownParams as RealTimeRetrieveBreakdownParams,
    type RealTimeRetrieveHistogramTimeseriesParams as RealTimeRetrieveHistogramTimeseriesParams,
    type RealTimeRetrieveTimeseriesParams as RealTimeRetrieveTimeseriesParams,
  };
}
