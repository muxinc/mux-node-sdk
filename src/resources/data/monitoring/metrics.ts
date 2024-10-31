// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Metrics extends APIResource {
  /**
   * Lists available monitoring metrics.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<MetricListResponse> {
    return this._client.get('/data/v1/monitoring/metrics', options);
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
  ): Core.APIPromise<MetricGetBreakdownResponse>;
  getBreakdown(
    monitoringMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate'
      | 'video-startup-failure-percentage',
    options?: Core.RequestOptions,
  ): Core.APIPromise<MetricGetBreakdownResponse>;
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
  ): Core.APIPromise<MetricGetBreakdownResponse> {
    if (isRequestOptions(query)) {
      return this.getBreakdown(monitoringMetricId, {}, query);
    }
    return this._client.get(`/data/v1/monitoring/metrics/${monitoringMetricId}/breakdown`, {
      query,
      ...options,
    });
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
  ): Core.APIPromise<MetricGetBreakdownTimeseriesResponse>;
  getBreakdownTimeseries(
    monitoringMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate'
      | 'video-startup-failure-percentage',
    options?: Core.RequestOptions,
  ): Core.APIPromise<MetricGetBreakdownTimeseriesResponse>;
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
  ): Core.APIPromise<MetricGetBreakdownTimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.getBreakdownTimeseries(monitoringMetricId, {}, query);
    }
    return this._client.get(`/data/v1/monitoring/metrics/${monitoringMetricId}/breakdown-timeseries`, {
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
  ): Core.APIPromise<MetricGetHistogramTimeseriesResponse>;
  getHistogramTimeseries(
    monitoringHistogramMetricId: 'video-startup-time',
    options?: Core.RequestOptions,
  ): Core.APIPromise<MetricGetHistogramTimeseriesResponse>;
  getHistogramTimeseries(
    monitoringHistogramMetricId: 'video-startup-time',
    query: MetricGetHistogramTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MetricGetHistogramTimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.getHistogramTimeseries(monitoringHistogramMetricId, {}, query);
    }
    return this._client.get(
      `/data/v1/monitoring/metrics/${monitoringHistogramMetricId}/histogram-timeseries`,
      { query, ...options },
    );
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
  ): Core.APIPromise<MetricGetTimeseriesResponse>;
  getTimeseries(
    monitoringMetricId:
      | 'current-concurrent-viewers'
      | 'current-rebuffering-percentage'
      | 'exits-before-video-start'
      | 'playback-failure-percentage'
      | 'current-average-bitrate'
      | 'video-startup-failure-percentage',
    options?: Core.RequestOptions,
  ): Core.APIPromise<MetricGetTimeseriesResponse>;
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
  ): Core.APIPromise<MetricGetTimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.getTimeseries(monitoringMetricId, {}, query);
    }
    return this._client.get(`/data/v1/monitoring/metrics/${monitoringMetricId}/timeseries`, {
      query,
      ...options,
    });
  }
}

export interface MetricListResponse {
  data: Array<MetricListResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export namespace MetricListResponse {
  export interface Data {
    display_name: string;

    name: string;
  }
}

export interface MetricGetBreakdownResponse {
  data: Array<MetricGetBreakdownResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export namespace MetricGetBreakdownResponse {
  export interface Data {
    concurrent_viewers: number;

    metric_value: number | null;

    negative_impact: number;

    starting_up_viewers: number;

    value: string | null;

    display_value?: string;
  }
}

export interface MetricGetBreakdownTimeseriesResponse {
  data: Array<MetricGetBreakdownTimeseriesResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export namespace MetricGetBreakdownTimeseriesResponse {
  export interface Data {
    date: string;

    values: Array<Data.Value>;
  }

  export namespace Data {
    export interface Value {
      concurrent_viewers: number;

      metric_value: number | null;

      starting_up_viewers: number;

      value: string | null;
    }
  }
}

export interface MetricGetHistogramTimeseriesResponse {
  data: Array<MetricGetHistogramTimeseriesResponse.Data>;

  meta: MetricGetHistogramTimeseriesResponse.Meta;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export namespace MetricGetHistogramTimeseriesResponse {
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

export interface MetricGetTimeseriesResponse {
  data: Array<MetricGetTimeseriesResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export namespace MetricGetTimeseriesResponse {
  export interface Data {
    concurrent_viewers: number;

    date: string;

    value: number | null;
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
   * Possible filter names are the same as returned by the List Monitoring Dimensions
   * endpoint.
   *
   * Example:
   *
   * - `filters[]=operating_system:windows&filters[]=!country:US`
   */
  filters?: Array<string>;

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
  timeframe?: Array<string>;
}

export interface MetricGetHistogramTimeseriesParams {
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

export interface MetricGetTimeseriesParams {
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

export declare namespace Metrics {
  export {
    type MetricListResponse as MetricListResponse,
    type MetricGetBreakdownResponse as MetricGetBreakdownResponse,
    type MetricGetBreakdownTimeseriesResponse as MetricGetBreakdownTimeseriesResponse,
    type MetricGetHistogramTimeseriesResponse as MetricGetHistogramTimeseriesResponse,
    type MetricGetTimeseriesResponse as MetricGetTimeseriesResponse,
    type MetricGetBreakdownParams as MetricGetBreakdownParams,
    type MetricGetBreakdownTimeseriesParams as MetricGetBreakdownTimeseriesParams,
    type MetricGetHistogramTimeseriesParams as MetricGetHistogramTimeseriesParams,
    type MetricGetTimeseriesParams as MetricGetTimeseriesParams,
  };
}
