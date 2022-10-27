// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';

export class RealTimeResource extends APIResource {
  /**
   * Lists available real-time dimensions.
   */
  listDimensions(options?: Core.RequestOptions): Promise<Core.APIResponse<RealTimeDimensionsResponse>> {
    return this.get('/data/v1/realtime/dimensions', options);
  }

  /**
   * Lists available real-time metrics.
   */
  listMetrics(options?: Core.RequestOptions): Promise<Core.APIResponse<RealTimeMetricsResponse>> {
    return this.get('/data/v1/realtime/metrics', options);
  }

  /**
   * Gets breakdown information for a specific dimension and metric along with the
   * number of concurrent viewers and negative impact score.
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
  ): Promise<Core.APIResponse<RealTimeBreakdownResponse>>;
  retrieveBreakdown(
    realtimeMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate',
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<RealTimeBreakdownResponse>>;
  retrieveBreakdown(
    realtimeMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate',
    query: RealTimeRetrieveBreakdownParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<RealTimeBreakdownResponse>> {
    if (isRequestOptions(query)) {
      return this.retrieveBreakdown(realtimeMetricId, {}, query);
    }

    return this.get(`/data/v1/realtime/metrics/${realtimeMetricId}/breakdown`, { query, ...options });
  }

  /**
   * Gets histogram timeseries information for a specific metric.
   */
  retrieveHistogramTimeseries(
    realtimeHistogramMetricId: 'video-startup-time',
    query?: RealTimeRetrieveHistogramTimeseriesParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<RealTimeHistogramTimeseriesResponse>>;
  retrieveHistogramTimeseries(
    realtimeHistogramMetricId: 'video-startup-time',
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<RealTimeHistogramTimeseriesResponse>>;
  retrieveHistogramTimeseries(
    realtimeHistogramMetricId: 'video-startup-time',
    query: RealTimeRetrieveHistogramTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<RealTimeHistogramTimeseriesResponse>> {
    if (isRequestOptions(query)) {
      return this.retrieveHistogramTimeseries(realtimeHistogramMetricId, {}, query);
    }

    return this.get(`/data/v1/realtime/metrics/${realtimeHistogramMetricId}/histogram-timeseries`, {
      query,
      ...options,
    });
  }

  /**
   * Gets Time series information for a specific metric along with the number of
   * concurrent viewers.
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
  ): Promise<Core.APIResponse<RealTimeTimeseriesResponse>>;
  retrieveTimeseries(
    realtimeMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate',
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<RealTimeTimeseriesResponse>>;
  retrieveTimeseries(
    realtimeMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate',
    query: RealTimeRetrieveTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<RealTimeTimeseriesResponse>> {
    if (isRequestOptions(query)) {
      return this.retrieveTimeseries(realtimeMetricId, {}, query);
    }

    return this.get(`/data/v1/realtime/metrics/${realtimeMetricId}/timeseries`, { query, ...options });
  }
}

export interface RealTimeBreakdownResponse {
  data?: Array<RealTimeBreakdownResponse.Data>;

  timeframe?: Array<number>;

  total_row_count?: number;
}

export namespace RealTimeBreakdownResponse {
  export interface Data {
    concurrent_viewers?: number;

    display_value?: string;

    metric_value?: number;

    negative_impact?: number;

    value?: string;
  }
}

export interface RealTimeDimensionsResponse {
  data?: Array<RealTimeDimensionsResponse.Data>;

  timeframe?: Array<number>;

  total_row_count?: number;
}

export namespace RealTimeDimensionsResponse {
  export interface Data {
    display_name?: string;

    name?: string;
  }
}

export interface RealTimeHistogramTimeseriesResponse {
  data?: Array<RealTimeHistogramTimeseriesResponse.Data>;

  meta?: RealTimeHistogramTimeseriesResponse.Meta;

  timeframe?: Array<number>;

  total_row_count?: number;
}

export namespace RealTimeHistogramTimeseriesResponse {
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

export interface RealTimeMetricsResponse {
  data?: Array<RealTimeMetricsResponse.Data>;

  timeframe?: Array<number>;

  total_row_count?: number;
}

export namespace RealTimeMetricsResponse {
  export interface Data {
    display_name?: string;

    name?: string;
  }
}

export interface RealTimeTimeseriesResponse {
  data?: Array<RealTimeTimeseriesResponse.Data>;

  timeframe?: Array<number>;

  total_row_count?: number;
}

export namespace RealTimeTimeseriesResponse {
  export interface Data {
    concurrent_viewers?: number;

    date?: string;

    value?: number;
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
