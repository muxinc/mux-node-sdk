// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as API from './';
import { BasePage, BasePageParams } from '~/pagination';

export class Metrics extends APIResource {
  /**
   * List all of the values across every breakdown for a specific metric.
   */
  list(
    query?: MetricListParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AllMetricValuesResponse>>;
  list(options?: Core.RequestOptions): Promise<Core.APIResponse<AllMetricValuesResponse>>;
  list(
    query: MetricListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AllMetricValuesResponse>> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.get('/data/v1/metrics/comparison', { query, ...options });
  }

  /**
   * Returns a list of insights for a metric. These are the worst performing values
   * across all breakdowns sorted by how much they negatively impact a specific
   * metric.
   */
  getInsights(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_failure_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'rebuffer_score'
      | 'requests_for_first_preroll'
      | 'seek_latency'
      | 'startup_time_score'
      | 'unique_viewers'
      | 'upscale_percentage'
      | 'video_quality_score'
      | 'video_startup_preroll_load_time'
      | 'video_startup_preroll_request_time'
      | 'video_startup_time'
      | 'viewer_experience_score'
      | 'views'
      | 'weighted_average_bitrate',
    query?: MetricGetInsightsParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<InsightsResponse>>;
  getInsights(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_failure_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'rebuffer_score'
      | 'requests_for_first_preroll'
      | 'seek_latency'
      | 'startup_time_score'
      | 'unique_viewers'
      | 'upscale_percentage'
      | 'video_quality_score'
      | 'video_startup_preroll_load_time'
      | 'video_startup_preroll_request_time'
      | 'video_startup_time'
      | 'viewer_experience_score'
      | 'views'
      | 'weighted_average_bitrate',
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<InsightsResponse>>;
  getInsights(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_failure_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'rebuffer_score'
      | 'requests_for_first_preroll'
      | 'seek_latency'
      | 'startup_time_score'
      | 'unique_viewers'
      | 'upscale_percentage'
      | 'video_quality_score'
      | 'video_startup_preroll_load_time'
      | 'video_startup_preroll_request_time'
      | 'video_startup_time'
      | 'viewer_experience_score'
      | 'views'
      | 'weighted_average_bitrate',
    query: MetricGetInsightsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<InsightsResponse>> {
    if (isRequestOptions(query)) {
      return this.getInsights(metricId, {}, query);
    }
    return this.get(`/data/v1/metrics/${metricId}/insights`, { query, ...options });
  }

  /**
   * Returns the overall value for a specific metric, as well as the total view
   * count, watch time, and the Mux Global metric value for the metric.
   */
  getOverallValues(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_failure_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'rebuffer_score'
      | 'requests_for_first_preroll'
      | 'seek_latency'
      | 'startup_time_score'
      | 'unique_viewers'
      | 'upscale_percentage'
      | 'video_quality_score'
      | 'video_startup_preroll_load_time'
      | 'video_startup_preroll_request_time'
      | 'video_startup_time'
      | 'viewer_experience_score'
      | 'views'
      | 'weighted_average_bitrate',
    query?: MetricGetOverallValuesParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<OverallValuesResponse>>;
  getOverallValues(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_failure_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'rebuffer_score'
      | 'requests_for_first_preroll'
      | 'seek_latency'
      | 'startup_time_score'
      | 'unique_viewers'
      | 'upscale_percentage'
      | 'video_quality_score'
      | 'video_startup_preroll_load_time'
      | 'video_startup_preroll_request_time'
      | 'video_startup_time'
      | 'viewer_experience_score'
      | 'views'
      | 'weighted_average_bitrate',
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<OverallValuesResponse>>;
  getOverallValues(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_failure_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'rebuffer_score'
      | 'requests_for_first_preroll'
      | 'seek_latency'
      | 'startup_time_score'
      | 'unique_viewers'
      | 'upscale_percentage'
      | 'video_quality_score'
      | 'video_startup_preroll_load_time'
      | 'video_startup_preroll_request_time'
      | 'video_startup_time'
      | 'viewer_experience_score'
      | 'views'
      | 'weighted_average_bitrate',
    query: MetricGetOverallValuesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<OverallValuesResponse>> {
    if (isRequestOptions(query)) {
      return this.getOverallValues(metricId, {}, query);
    }
    return this.get(`/data/v1/metrics/${metricId}/overall`, { query, ...options });
  }

  /**
   * Returns timeseries data for a specific metric.
   *
   * Each interval represented in the data array contains an array with the following
   * values:
   *
   * - the first element is the interval time
   * - the second element is the calculated metric value
   * - the third element is the number of views in the interval that have a valid
   *   metric value
   */
  getTimeseries(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_failure_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'rebuffer_score'
      | 'requests_for_first_preroll'
      | 'seek_latency'
      | 'startup_time_score'
      | 'unique_viewers'
      | 'upscale_percentage'
      | 'video_quality_score'
      | 'video_startup_preroll_load_time'
      | 'video_startup_preroll_request_time'
      | 'video_startup_time'
      | 'viewer_experience_score'
      | 'views'
      | 'weighted_average_bitrate',
    query?: MetricGetTimeseriesParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MetricTimeseriesDataResponse>>;
  getTimeseries(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_failure_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'rebuffer_score'
      | 'requests_for_first_preroll'
      | 'seek_latency'
      | 'startup_time_score'
      | 'unique_viewers'
      | 'upscale_percentage'
      | 'video_quality_score'
      | 'video_startup_preroll_load_time'
      | 'video_startup_preroll_request_time'
      | 'video_startup_time'
      | 'viewer_experience_score'
      | 'views'
      | 'weighted_average_bitrate',
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MetricTimeseriesDataResponse>>;
  getTimeseries(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_failure_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'rebuffer_score'
      | 'requests_for_first_preroll'
      | 'seek_latency'
      | 'startup_time_score'
      | 'unique_viewers'
      | 'upscale_percentage'
      | 'video_quality_score'
      | 'video_startup_preroll_load_time'
      | 'video_startup_preroll_request_time'
      | 'video_startup_time'
      | 'viewer_experience_score'
      | 'views'
      | 'weighted_average_bitrate',
    query: MetricGetTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MetricTimeseriesDataResponse>> {
    if (isRequestOptions(query)) {
      return this.getTimeseries(metricId, {}, query);
    }
    return this.get(`/data/v1/metrics/${metricId}/timeseries`, { query, ...options });
  }

  /**
   * List the breakdown values for a specific metric.
   */
  listBreakdownValues(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_failure_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'rebuffer_score'
      | 'requests_for_first_preroll'
      | 'seek_latency'
      | 'startup_time_score'
      | 'unique_viewers'
      | 'upscale_percentage'
      | 'video_quality_score'
      | 'video_startup_preroll_load_time'
      | 'video_startup_preroll_request_time'
      | 'video_startup_time'
      | 'viewer_experience_score'
      | 'views'
      | 'weighted_average_bitrate',
    query?: MetricListBreakdownValuesParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BreakdownValuesBasePage>;
  listBreakdownValues(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_failure_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'rebuffer_score'
      | 'requests_for_first_preroll'
      | 'seek_latency'
      | 'startup_time_score'
      | 'unique_viewers'
      | 'upscale_percentage'
      | 'video_quality_score'
      | 'video_startup_preroll_load_time'
      | 'video_startup_preroll_request_time'
      | 'video_startup_time'
      | 'viewer_experience_score'
      | 'views'
      | 'weighted_average_bitrate',
    options?: Core.RequestOptions,
  ): Core.PagePromise<BreakdownValuesBasePage>;
  listBreakdownValues(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_failure_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'rebuffer_score'
      | 'requests_for_first_preroll'
      | 'seek_latency'
      | 'startup_time_score'
      | 'unique_viewers'
      | 'upscale_percentage'
      | 'video_quality_score'
      | 'video_startup_preroll_load_time'
      | 'video_startup_preroll_request_time'
      | 'video_startup_time'
      | 'viewer_experience_score'
      | 'views'
      | 'weighted_average_bitrate',
    query: MetricListBreakdownValuesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<BreakdownValuesBasePage> {
    if (isRequestOptions(query)) {
      return this.listBreakdownValues(metricId, {}, query);
    }
    return this.getAPIList(`/data/v1/metrics/${metricId}/breakdown`, BreakdownValuesBasePage, {
      query,
      ...options,
    });
  }
}

export class BreakdownValuesBasePage extends BasePage<BreakdownValue> {}

export interface AllMetricValuesResponse {
  data: Array<AllMetricValuesResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number;
}

export namespace AllMetricValuesResponse {
  export interface Data {
    items?: Array<Data.Items>;

    metric?: string;

    name?: string;

    value?: number;

    view_count?: number;

    watch_time?: number;
  }

  export namespace Data {
    export interface Items {
      measurement?: string;

      metric?: string;

      name?: string;

      type?: string;

      value?: number;
    }
  }
}

export interface BreakdownValue {
  field?: string;

  negative_impact?: number;

  total_watch_time?: number;

  value?: number;

  views?: number;
}

export interface InsightsResponse {
  data: Array<InsightsResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number;
}

export namespace InsightsResponse {
  export interface Data {
    filter_column?: string;

    filter_value?: string;

    metric?: number;

    negative_impact_score?: number;

    total_views?: number;

    total_watch_time?: number;
  }
}

export interface MetricTimeseriesDataResponse {
  data: Array<Array<string>>;

  timeframe: Array<number>;

  total_row_count: number;
}

export interface OverallValuesResponse {
  data: OverallValuesResponse.Data;

  timeframe: Array<number>;

  total_row_count: number;
}

export namespace OverallValuesResponse {
  export interface Data {
    global_value?: number;

    total_views?: number;

    total_watch_time?: number;

    value?: number;
  }
}

export interface MetricListParams {
  /**
   * Dimension the specified value belongs to
   */
  dimension?:
    | 'asn'
    | 'asset_id'
    | 'browser'
    | 'browser_version'
    | 'cdn'
    | 'continent_code'
    | 'country'
    | 'custom_1'
    | 'custom_2'
    | 'custom_3'
    | 'custom_4'
    | 'custom_5'
    | 'custom_6'
    | 'custom_7'
    | 'custom_8'
    | 'custom_9'
    | 'custom_10'
    | 'exit_before_video_start'
    | 'experiment_name'
    | 'live_stream_id'
    | 'operating_system'
    | 'operating_system_version'
    | 'playback_id'
    | 'player_autoplay'
    | 'player_error_code'
    | 'player_mux_plugin_name'
    | 'player_mux_plugin_version'
    | 'player_name'
    | 'player_preload'
    | 'player_remote_played'
    | 'player_software'
    | 'player_software_version'
    | 'player_version'
    | 'preroll_ad_asset_hostname'
    | 'preroll_ad_tag_hostname'
    | 'preroll_played'
    | 'preroll_requested'
    | 'region'
    | 'source_hostname'
    | 'source_type'
    | 'stream_type'
    | 'sub_property_id'
    | 'video_encoding_variant'
    | 'video_id'
    | 'video_series'
    | 'video_title'
    | 'view_drm_type'
    | 'view_has_ad'
    | 'view_session_id'
    | 'viewer_connection_type'
    | 'viewer_device_category'
    | 'viewer_device_manufacturer'
    | 'viewer_device_model'
    | 'viewer_device_name'
    | 'viewer_user_id';

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

  /**
   * Value to show all available metrics for
   */
  value?: string;
}

export interface MetricGetInsightsParams {
  /**
   * Measurement for the provided metric. If omitted, the default for the metric will
   * be used.
   */
  measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum';

  /**
   * Sort order.
   */
  order_direction?: 'asc' | 'desc';

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

export interface MetricGetOverallValuesParams {
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
   * Measurement for the provided metric. If omitted, the default for the metric will
   * be used.
   */
  measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum';

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
   * Time granularity to group results by. If this value is omitted, a default
   * granularity is chosen based on the timeframe.
   *
   * For timeframes of 6 hours or less, the default granularity is `ten_minutes`.
   * Between 6 hours and 15 days inclusive, the default granularity is `hour`. The
   * granularity of timeframes that exceed 15 days is `day`. This default behavior is
   * subject to change; it is strongly suggested that you explicitly specify the
   * granularity.
   */
  group_by?: 'ten_minutes' | 'hour' | 'day';

  /**
   * Measurement for the provided metric. If omitted, the default for the metric will
   * be used.
   */
  measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum';

  /**
   * Sort order.
   */
  order_direction?: 'asc' | 'desc';

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

export interface MetricListBreakdownValuesParams extends BasePageParams {
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
   * Breakdown value to group the results by
   */
  group_by?:
    | 'asn'
    | 'asset_id'
    | 'browser'
    | 'browser_version'
    | 'cdn'
    | 'continent_code'
    | 'country'
    | 'custom_1'
    | 'custom_2'
    | 'custom_3'
    | 'custom_4'
    | 'custom_5'
    | 'custom_6'
    | 'custom_7'
    | 'custom_8'
    | 'custom_9'
    | 'custom_10'
    | 'exit_before_video_start'
    | 'experiment_name'
    | 'live_stream_id'
    | 'operating_system'
    | 'operating_system_version'
    | 'playback_id'
    | 'player_autoplay'
    | 'player_error_code'
    | 'player_mux_plugin_name'
    | 'player_mux_plugin_version'
    | 'player_name'
    | 'player_preload'
    | 'player_remote_played'
    | 'player_software'
    | 'player_software_version'
    | 'player_version'
    | 'preroll_ad_asset_hostname'
    | 'preroll_ad_tag_hostname'
    | 'preroll_played'
    | 'preroll_requested'
    | 'region'
    | 'source_hostname'
    | 'source_type'
    | 'stream_type'
    | 'sub_property_id'
    | 'video_encoding_variant'
    | 'video_id'
    | 'video_series'
    | 'video_title'
    | 'view_drm_type'
    | 'view_has_ad'
    | 'view_session_id'
    | 'viewer_connection_type'
    | 'viewer_device_category'
    | 'viewer_device_manufacturer'
    | 'viewer_device_model'
    | 'viewer_device_name'
    | 'viewer_user_id';

  /**
   * Measurement for the provided metric. If omitted, the default for the metric will
   * be used.
   */
  measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum';

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
   * Accepted formats are...
   *
   * - array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`
   * - duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`
   */
  'timeframe[]'?: Array<string>;
}

export namespace Metrics {
  export import AllMetricValuesResponse = API.AllMetricValuesResponse;
  export import BreakdownValue = API.BreakdownValue;
  export import InsightsResponse = API.InsightsResponse;
  export import MetricTimeseriesDataResponse = API.MetricTimeseriesDataResponse;
  export import OverallValuesResponse = API.OverallValuesResponse;
  export import BreakdownValuesBasePage = API.BreakdownValuesBasePage;
  export import MetricListParams = API.MetricListParams;
  export import MetricGetInsightsParams = API.MetricGetInsightsParams;
  export import MetricGetOverallValuesParams = API.MetricGetOverallValuesParams;
  export import MetricGetTimeseriesParams = API.MetricGetTimeseriesParams;
  export import MetricListBreakdownValuesParams = API.MetricListBreakdownValuesParams;
}
