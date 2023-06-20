// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as API from './';

export class Metrics extends APIResource {
  /**
   * Lists available monitoring metrics.
   */
  list(options?: Core.RequestOptions): Promise<Core.APIResponse<MetricListResponse>> {
    return this.get('/data/v1/monitoring/metrics', options);
  }

  /**
   * Gets breakdown information for a specific dimension and metric along with the
   * number of concurrent viewers and negative impact score.
   */
  getBreakdown(
    monitoringMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate'
      | 'video-startup-failure-percentage',
    query?: MetricGetBreakdownParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MetricGetBreakdownResponse>>;
  getBreakdown(
    monitoringMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate'
      | 'video-startup-failure-percentage',
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MetricGetBreakdownResponse>>;
  getBreakdown(
    monitoringMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate'
      | 'video-startup-failure-percentage',
    query: MetricGetBreakdownParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MetricGetBreakdownResponse>> {
    if (isRequestOptions(query)) {
      return this.getBreakdown(monitoringMetricId, {}, query);
    }
    return this.get(`/data/v1/monitoring/metrics/${monitoringMetricId}/breakdown`, { query, ...options });
  }

  /**
   * Gets timeseries of breakdown information for a specific dimension and metric.
   * Each datapoint in the response represents 5 seconds worth of data.
   */
  getBreakdownTimeseries(
    monitoringMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate'
      | 'video-startup-failure-percentage',
    query?: MetricGetBreakdownTimeseriesParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MetricGetBreakdownTimeseriesResponse>>;
  getBreakdownTimeseries(
    monitoringMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate'
      | 'video-startup-failure-percentage',
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MetricGetBreakdownTimeseriesResponse>>;
  getBreakdownTimeseries(
    monitoringMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate'
      | 'video-startup-failure-percentage',
    query: MetricGetBreakdownTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MetricGetBreakdownTimeseriesResponse>> {
    if (isRequestOptions(query)) {
      return this.getBreakdownTimeseries(monitoringMetricId, {}, query);
    }
    return this.get(`/data/v1/monitoring/metrics/${monitoringMetricId}/breakdown-timeseries`, {
      query,
      ...options,
    });
  }

  /**
   * Gets histogram timeseries information for a specific metric.
   */
  getHistogramTimeseries(
    monitoringHistogramMetricId: 'video-startup-time',
    query?: MetricGetHistogramTimeseriesParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MetricGetHistogramTimeseriesResponse>>;
  getHistogramTimeseries(
    monitoringHistogramMetricId: 'video-startup-time',
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MetricGetHistogramTimeseriesResponse>>;
  getHistogramTimeseries(
    monitoringHistogramMetricId: 'video-startup-time',
    query: MetricGetHistogramTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MetricGetHistogramTimeseriesResponse>> {
    if (isRequestOptions(query)) {
      return this.getHistogramTimeseries(monitoringHistogramMetricId, {}, query);
    }
    return this.get(`/data/v1/monitoring/metrics/${monitoringHistogramMetricId}/histogram-timeseries`, {
      query,
      ...options,
    });
  }

  /**
   * Gets Time series information for a specific metric along with the number of
   * concurrent viewers.
   */
  getTimeseries(
    monitoringMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate'
      | 'video-startup-failure-percentage',
    query?: MetricGetTimeseriesParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MetricGetTimeseriesResponse>>;
  getTimeseries(
    monitoringMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate'
      | 'video-startup-failure-percentage',
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MetricGetTimeseriesResponse>>;
  getTimeseries(
    monitoringMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate'
      | 'video-startup-failure-percentage',
    query: MetricGetTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MetricGetTimeseriesResponse>> {
    if (isRequestOptions(query)) {
      return this.getTimeseries(monitoringMetricId, {}, query);
    }
    return this.get(`/data/v1/monitoring/metrics/${monitoringMetricId}/timeseries`, { query, ...options });
  }
}

export interface MetricListResponse {
  data: Array<MetricListResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number;
}

export namespace MetricListResponse {
  export interface Data {
    display_name?: string;

    name?: string;
  }
}

export interface MetricGetBreakdownResponse {
  data: Array<MetricGetBreakdownResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number;
}

export namespace MetricGetBreakdownResponse {
  export interface Data {
    concurrent_viewers?: number;

    display_value?: string;

    metric_value?: number;

    negative_impact?: number;

    value?: string;
  }
}

export interface MetricGetTimeseriesResponse {
  data: Array<MetricGetTimeseriesResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number;
}

export namespace MetricGetTimeseriesResponse {
  export interface Data {
    concurrent_viewers?: number;

    date?: string;

    value?: number;
  }
}

export interface MetricGetBreakdownTimeseriesResponse {
  data: Array<MetricGetBreakdownTimeseriesResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number;
}

export namespace MetricGetBreakdownTimeseriesResponse {
  export interface Data {
    date?: string;

    values?: Array<Data.Values>;
  }

  export namespace Data {
    export interface Values {
      concurrent_viewers?: number;

      metric_value?: number;

      value?: string;
    }
  }
}

export interface MetricGetHistogramTimeseriesResponse {
  data: Array<MetricGetHistogramTimeseriesResponse.Data>;

  meta: MetricGetHistogramTimeseriesResponse.Meta;

  timeframe: Array<number>;

  total_row_count: number;
}

export namespace MetricGetHistogramTimeseriesResponse {
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

export interface MetricGetBreakdownParams {
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
    | 'video_title'
    | 'view_has_ad';

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

export interface MetricGetBreakdownTimeseriesParams {
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
    | 'video_title'
    | 'view_has_ad';

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
   * Number of items to include in each timestamp's `value` list.
   *
   * The default is 10, and the maximum is 100.
   */
  limit?: number;

  /**
   * Value to order the results by
   */
  order_by?: 'negative_impact' | 'value' | 'views' | 'field';

  /**
   * Sort order.
   */
  order_direction?: 'asc' | 'desc';

  /**
   * Timeframe window to limit results by. Must be provided as an array query string
   * parameter (e.g. timeframe[]=).
   *
   * The default for this is the last 60 seconds of available data. Timeframes larger
   * than 10 minutes are not allowed, and must be within the last 24 hours.
   */
  'timeframe[]'?: Array<string>;
}

export interface MetricGetHistogramTimeseriesParams {
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

export interface MetricGetTimeseriesParams {
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
   * Timestamp to use as the start of the timeseries data. This value must be
   * provided as a unix timestamp. Defaults to 30 minutes ago.
   */
  timestamp?: number;
}

export namespace Metrics {
  export import MetricListResponse = API.MetricListResponse;
  export import MetricGetBreakdownResponse = API.MetricGetBreakdownResponse;
  export import MetricGetTimeseriesResponse = API.MetricGetTimeseriesResponse;
  export import MetricGetBreakdownTimeseriesResponse = API.MetricGetBreakdownTimeseriesResponse;
  export import MetricGetHistogramTimeseriesResponse = API.MetricGetHistogramTimeseriesResponse;
  export import MetricGetBreakdownParams = API.MetricGetBreakdownParams;
  export import MetricGetBreakdownTimeseriesParams = API.MetricGetBreakdownTimeseriesParams;
  export import MetricGetHistogramTimeseriesParams = API.MetricGetHistogramTimeseriesParams;
  export import MetricGetTimeseriesParams = API.MetricGetTimeseriesParams;
}
