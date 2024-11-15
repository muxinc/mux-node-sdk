// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { BasePage, type BasePageParams } from '../../pagination';

export class Metrics extends APIResource {
  /**
   * List all of the values across every breakdown for a specific metric.
   */
  list(query?: MetricListParams, options?: Core.RequestOptions): Core.APIPromise<AllMetricValuesResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AllMetricValuesResponse>;
  list(
    query: MetricListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AllMetricValuesResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/data/v1/metrics/comparison', { query, ...options });
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
      | 'max_request_latency'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_success_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'request_latency'
      | 'request_throughput'
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
      | 'weighted_average_bitrate'
      | 'video_startup_failure_percentage'
      | 'ad_attempt_count'
      | 'ad_break_count'
      | 'ad_break_error_count'
      | 'ad_break_error_percentage'
      | 'ad_error_count'
      | 'ad_error_percentage'
      | 'ad_exit_before_start_count'
      | 'ad_exit_before_start_percentage'
      | 'ad_impression_count'
      | 'ad_startup_error_count'
      | 'ad_startup_error_percentage'
      | 'playback_business_exception_percentage'
      | 'video_startup_business_exception_percentage'
      | 'view_content_startup_time'
      | 'ad_preroll_startup_time'
      | 'view_dropped_percentage',
    query?: MetricGetInsightsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsightsResponse>;
  getInsights(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_request_latency'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_success_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'request_latency'
      | 'request_throughput'
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
      | 'weighted_average_bitrate'
      | 'video_startup_failure_percentage'
      | 'ad_attempt_count'
      | 'ad_break_count'
      | 'ad_break_error_count'
      | 'ad_break_error_percentage'
      | 'ad_error_count'
      | 'ad_error_percentage'
      | 'ad_exit_before_start_count'
      | 'ad_exit_before_start_percentage'
      | 'ad_impression_count'
      | 'ad_startup_error_count'
      | 'ad_startup_error_percentage'
      | 'playback_business_exception_percentage'
      | 'video_startup_business_exception_percentage'
      | 'view_content_startup_time'
      | 'ad_preroll_startup_time'
      | 'view_dropped_percentage',
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsightsResponse>;
  getInsights(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_request_latency'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_success_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'request_latency'
      | 'request_throughput'
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
      | 'weighted_average_bitrate'
      | 'video_startup_failure_percentage'
      | 'ad_attempt_count'
      | 'ad_break_count'
      | 'ad_break_error_count'
      | 'ad_break_error_percentage'
      | 'ad_error_count'
      | 'ad_error_percentage'
      | 'ad_exit_before_start_count'
      | 'ad_exit_before_start_percentage'
      | 'ad_impression_count'
      | 'ad_startup_error_count'
      | 'ad_startup_error_percentage'
      | 'playback_business_exception_percentage'
      | 'video_startup_business_exception_percentage'
      | 'view_content_startup_time'
      | 'ad_preroll_startup_time'
      | 'view_dropped_percentage',
    query: MetricGetInsightsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsightsResponse> {
    if (isRequestOptions(query)) {
      return this.getInsights(metricId, {}, query);
    }
    return this._client.get(`/data/v1/metrics/${metricId}/insights`, { query, ...options });
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
      | 'max_request_latency'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_success_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'request_latency'
      | 'request_throughput'
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
      | 'weighted_average_bitrate'
      | 'video_startup_failure_percentage'
      | 'ad_attempt_count'
      | 'ad_break_count'
      | 'ad_break_error_count'
      | 'ad_break_error_percentage'
      | 'ad_error_count'
      | 'ad_error_percentage'
      | 'ad_exit_before_start_count'
      | 'ad_exit_before_start_percentage'
      | 'ad_impression_count'
      | 'ad_startup_error_count'
      | 'ad_startup_error_percentage'
      | 'playback_business_exception_percentage'
      | 'video_startup_business_exception_percentage'
      | 'view_content_startup_time'
      | 'ad_preroll_startup_time'
      | 'view_dropped_percentage',
    query?: MetricGetOverallValuesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverallValuesResponse>;
  getOverallValues(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_request_latency'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_success_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'request_latency'
      | 'request_throughput'
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
      | 'weighted_average_bitrate'
      | 'video_startup_failure_percentage'
      | 'ad_attempt_count'
      | 'ad_break_count'
      | 'ad_break_error_count'
      | 'ad_break_error_percentage'
      | 'ad_error_count'
      | 'ad_error_percentage'
      | 'ad_exit_before_start_count'
      | 'ad_exit_before_start_percentage'
      | 'ad_impression_count'
      | 'ad_startup_error_count'
      | 'ad_startup_error_percentage'
      | 'playback_business_exception_percentage'
      | 'video_startup_business_exception_percentage'
      | 'view_content_startup_time'
      | 'ad_preroll_startup_time'
      | 'view_dropped_percentage',
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverallValuesResponse>;
  getOverallValues(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_request_latency'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_success_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'request_latency'
      | 'request_throughput'
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
      | 'weighted_average_bitrate'
      | 'video_startup_failure_percentage'
      | 'ad_attempt_count'
      | 'ad_break_count'
      | 'ad_break_error_count'
      | 'ad_break_error_percentage'
      | 'ad_error_count'
      | 'ad_error_percentage'
      | 'ad_exit_before_start_count'
      | 'ad_exit_before_start_percentage'
      | 'ad_impression_count'
      | 'ad_startup_error_count'
      | 'ad_startup_error_percentage'
      | 'playback_business_exception_percentage'
      | 'video_startup_business_exception_percentage'
      | 'view_content_startup_time'
      | 'ad_preroll_startup_time'
      | 'view_dropped_percentage',
    query: MetricGetOverallValuesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverallValuesResponse> {
    if (isRequestOptions(query)) {
      return this.getOverallValues(metricId, {}, query);
    }
    return this._client.get(`/data/v1/metrics/${metricId}/overall`, { query, ...options });
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
      | 'max_request_latency'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_success_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'request_latency'
      | 'request_throughput'
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
      | 'weighted_average_bitrate'
      | 'video_startup_failure_percentage'
      | 'ad_attempt_count'
      | 'ad_break_count'
      | 'ad_break_error_count'
      | 'ad_break_error_percentage'
      | 'ad_error_count'
      | 'ad_error_percentage'
      | 'ad_exit_before_start_count'
      | 'ad_exit_before_start_percentage'
      | 'ad_impression_count'
      | 'ad_startup_error_count'
      | 'ad_startup_error_percentage'
      | 'playback_business_exception_percentage'
      | 'video_startup_business_exception_percentage'
      | 'view_content_startup_time'
      | 'ad_preroll_startup_time'
      | 'view_dropped_percentage',
    query?: MetricGetTimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MetricTimeseriesDataResponse>;
  getTimeseries(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_request_latency'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_success_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'request_latency'
      | 'request_throughput'
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
      | 'weighted_average_bitrate'
      | 'video_startup_failure_percentage'
      | 'ad_attempt_count'
      | 'ad_break_count'
      | 'ad_break_error_count'
      | 'ad_break_error_percentage'
      | 'ad_error_count'
      | 'ad_error_percentage'
      | 'ad_exit_before_start_count'
      | 'ad_exit_before_start_percentage'
      | 'ad_impression_count'
      | 'ad_startup_error_count'
      | 'ad_startup_error_percentage'
      | 'playback_business_exception_percentage'
      | 'video_startup_business_exception_percentage'
      | 'view_content_startup_time'
      | 'ad_preroll_startup_time'
      | 'view_dropped_percentage',
    options?: Core.RequestOptions,
  ): Core.APIPromise<MetricTimeseriesDataResponse>;
  getTimeseries(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_request_latency'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_success_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'request_latency'
      | 'request_throughput'
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
      | 'weighted_average_bitrate'
      | 'video_startup_failure_percentage'
      | 'ad_attempt_count'
      | 'ad_break_count'
      | 'ad_break_error_count'
      | 'ad_break_error_percentage'
      | 'ad_error_count'
      | 'ad_error_percentage'
      | 'ad_exit_before_start_count'
      | 'ad_exit_before_start_percentage'
      | 'ad_impression_count'
      | 'ad_startup_error_count'
      | 'ad_startup_error_percentage'
      | 'playback_business_exception_percentage'
      | 'video_startup_business_exception_percentage'
      | 'view_content_startup_time'
      | 'ad_preroll_startup_time'
      | 'view_dropped_percentage',
    query: MetricGetTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MetricTimeseriesDataResponse> {
    if (isRequestOptions(query)) {
      return this.getTimeseries(metricId, {}, query);
    }
    return this._client.get(`/data/v1/metrics/${metricId}/timeseries`, { query, ...options });
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
      | 'max_request_latency'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_success_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'request_latency'
      | 'request_throughput'
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
      | 'weighted_average_bitrate'
      | 'video_startup_failure_percentage'
      | 'ad_attempt_count'
      | 'ad_break_count'
      | 'ad_break_error_count'
      | 'ad_break_error_percentage'
      | 'ad_error_count'
      | 'ad_error_percentage'
      | 'ad_exit_before_start_count'
      | 'ad_exit_before_start_percentage'
      | 'ad_impression_count'
      | 'ad_startup_error_count'
      | 'ad_startup_error_percentage'
      | 'playback_business_exception_percentage'
      | 'video_startup_business_exception_percentage'
      | 'view_content_startup_time'
      | 'ad_preroll_startup_time'
      | 'view_dropped_percentage',
    query?: MetricListBreakdownValuesParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BreakdownValuesBasePage, BreakdownValue>;
  listBreakdownValues(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_request_latency'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_success_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'request_latency'
      | 'request_throughput'
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
      | 'weighted_average_bitrate'
      | 'video_startup_failure_percentage'
      | 'ad_attempt_count'
      | 'ad_break_count'
      | 'ad_break_error_count'
      | 'ad_break_error_percentage'
      | 'ad_error_count'
      | 'ad_error_percentage'
      | 'ad_exit_before_start_count'
      | 'ad_exit_before_start_percentage'
      | 'ad_impression_count'
      | 'ad_startup_error_count'
      | 'ad_startup_error_percentage'
      | 'playback_business_exception_percentage'
      | 'video_startup_business_exception_percentage'
      | 'view_content_startup_time'
      | 'ad_preroll_startup_time'
      | 'view_dropped_percentage',
    options?: Core.RequestOptions,
  ): Core.PagePromise<BreakdownValuesBasePage, BreakdownValue>;
  listBreakdownValues(
    metricId:
      | 'aggregate_startup_time'
      | 'downscale_percentage'
      | 'exits_before_video_start'
      | 'live_stream_latency'
      | 'max_downscale_percentage'
      | 'max_request_latency'
      | 'max_upscale_percentage'
      | 'page_load_time'
      | 'playback_failure_percentage'
      | 'playback_success_score'
      | 'player_startup_time'
      | 'playing_time'
      | 'rebuffer_count'
      | 'rebuffer_duration'
      | 'rebuffer_frequency'
      | 'rebuffer_percentage'
      | 'request_latency'
      | 'request_throughput'
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
      | 'weighted_average_bitrate'
      | 'video_startup_failure_percentage'
      | 'ad_attempt_count'
      | 'ad_break_count'
      | 'ad_break_error_count'
      | 'ad_break_error_percentage'
      | 'ad_error_count'
      | 'ad_error_percentage'
      | 'ad_exit_before_start_count'
      | 'ad_exit_before_start_percentage'
      | 'ad_impression_count'
      | 'ad_startup_error_count'
      | 'ad_startup_error_percentage'
      | 'playback_business_exception_percentage'
      | 'video_startup_business_exception_percentage'
      | 'view_content_startup_time'
      | 'ad_preroll_startup_time'
      | 'view_dropped_percentage',
    query: MetricListBreakdownValuesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<BreakdownValuesBasePage, BreakdownValue> {
    if (isRequestOptions(query)) {
      return this.listBreakdownValues(metricId, {}, query);
    }
    return this._client.getAPIList(`/data/v1/metrics/${metricId}/breakdown`, BreakdownValuesBasePage, {
      query,
      ...options,
    });
  }
}

export class BreakdownValuesBasePage extends BasePage<BreakdownValue> {}

export interface AllMetricValuesResponse {
  data: Array<AllMetricValuesResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export namespace AllMetricValuesResponse {
  export interface Data {
    name: string;

    ended_views?: number;

    items?: Array<Data.Item>;

    metric?: string;

    started_views?: number;

    total_playing_time?: number | null;

    type?: string;

    unique_viewers?: number;

    value?: number;

    view_count?: number;

    watch_time?: number | null;
  }

  export namespace Data {
    export interface Item {
      metric: string;

      name: string;

      type: string;

      value: number | null;

      measurement?: string;
    }
  }
}

export interface BreakdownValue {
  field: string | null;

  negative_impact: number;

  total_playing_time: number | null;

  total_watch_time: number | null;

  value: number;

  views: number;
}

export interface InsightsResponse {
  data: Array<InsightsResponse.Data>;

  meta: InsightsResponse.Meta;

  timeframe: Array<number>;

  total_row_count: number;
}

export namespace InsightsResponse {
  export interface Data {
    filter_column: string;

    filter_value: string | null;

    metric: number;

    negative_impact_score: number;

    total_playing_time: number | null;

    total_views: number;

    total_watch_time: number | null;
  }

  export interface Meta {
    aggregation?: string;

    granularity?: string;
  }
}

export interface MetricTimeseriesDataResponse {
  data: Array<Array<string | number | null>>;

  meta: MetricTimeseriesDataResponse.Meta;

  timeframe: Array<number>;

  total_row_count: number;
}

export namespace MetricTimeseriesDataResponse {
  export interface Meta {
    aggregation?: string;

    granularity?: string;
  }
}

export interface OverallValuesResponse {
  data: OverallValuesResponse.Data;

  meta: OverallValuesResponse.Meta;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export namespace OverallValuesResponse {
  export interface Data {
    global_value: number | null;

    total_playing_time: number | null;

    total_views: number;

    total_watch_time: number | null;

    value: number;
  }

  export interface Meta {
    aggregation?: string;

    granularity?: string;
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
    | 'page_type'
    | 'playback_failure'
    | 'playback_business_exception'
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
    | 'video_content_type'
    | 'video_encoding_variant'
    | 'video_id'
    | 'video_series'
    | 'video_startup_failure'
    | 'video_startup_business_exception'
    | 'video_title'
    | 'view_drm_type'
    | 'view_has_ad'
    | 'view_session_id'
    | 'viewer_connection_type'
    | 'viewer_device_category'
    | 'viewer_device_manufacturer'
    | 'viewer_device_model'
    | 'viewer_device_name'
    | 'viewer_user_id'
    | 'ad_playback_failure'
    | 'content_playback_failure'
    | 'view_dropped';

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

  /**
   * Value to show all available metrics for
   */
  value?: string;
}

export interface MetricGetInsightsParams {
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
   * Measurement for the provided metric. If omitted, the default for the metric will
   * be used. The default measurement for each metric is: "sum" : `ad_attempt_count`,
   * `ad_break_count`, `ad_break_error_count`, `ad_error_count`,
   * `ad_impression_count`, `playing_time` "median" : `ad_preroll_startup_time`,
   * `aggregate_startup_time`, `content_startup_time`, `max_downscale_percentage`,
   * `max_upscale_percentage`, `page_load_time`, `player_average_live_latency`,
   * `player_startup_time`, `rebuffer_count`, `rebuffer_duration`,
   * `requests_for_first_preroll`, `video_startup_preroll_load_time`,
   * `video_startup_preroll_request_time`, `video_startup_time`,
   * `view_average_request_latency`, `view_average_request_throughput`,
   * `view_max_request_latency`, `weighted_average_bitrate` "avg" :
   * `ad_break_error_percentage`, `ad_error_percentage`,
   * `ad_exit_before_start_count`, `ad_exit_before_start_percentage`,
   * `ad_playback_failure_percentage`, `ad_startup_error_count`,
   * `ad_startup_error_percentage`, `content_playback_failure_percentage`,
   * `downscale_percentage`, `exits_before_video_start`,
   * `playback_business_exception_percentage`, `playback_failure_percentage`,
   * `playback_success_score`, `rebuffer_frequency`, `rebuffer_percentage`,
   * `seek_latency`, `smoothness_score`, `startup_time_score`, `upscale_percentage`,
   * `video_quality_score`, `video_startup_business_exception_percentage`,
   * `video_startup_failure_percentage`, `view_dropped_percentage`,
   * `viewer_experience_score` "count" : `started_views`, `unique_viewers`
   */
  measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum';

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
  timeframe?: Array<string>;
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
  filters?: Array<string>;

  /**
   * Measurement for the provided metric. If omitted, the default for the metric will
   * be used. The default measurement for each metric is: "sum" : `ad_attempt_count`,
   * `ad_break_count`, `ad_break_error_count`, `ad_error_count`,
   * `ad_impression_count`, `playing_time` "median" : `ad_preroll_startup_time`,
   * `aggregate_startup_time`, `content_startup_time`, `max_downscale_percentage`,
   * `max_upscale_percentage`, `page_load_time`, `player_average_live_latency`,
   * `player_startup_time`, `rebuffer_count`, `rebuffer_duration`,
   * `requests_for_first_preroll`, `video_startup_preroll_load_time`,
   * `video_startup_preroll_request_time`, `video_startup_time`,
   * `view_average_request_latency`, `view_average_request_throughput`,
   * `view_max_request_latency`, `weighted_average_bitrate` "avg" :
   * `ad_break_error_percentage`, `ad_error_percentage`,
   * `ad_exit_before_start_count`, `ad_exit_before_start_percentage`,
   * `ad_playback_failure_percentage`, `ad_startup_error_count`,
   * `ad_startup_error_percentage`, `content_playback_failure_percentage`,
   * `downscale_percentage`, `exits_before_video_start`,
   * `playback_business_exception_percentage`, `playback_failure_percentage`,
   * `playback_success_score`, `rebuffer_frequency`, `rebuffer_percentage`,
   * `seek_latency`, `smoothness_score`, `startup_time_score`, `upscale_percentage`,
   * `video_quality_score`, `video_startup_business_exception_percentage`,
   * `video_startup_failure_percentage`, `view_dropped_percentage`,
   * `viewer_experience_score` "count" : `started_views`, `unique_viewers`
   */
  measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum';

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
  filters?: Array<string>;

  /**
   * Time granularity to group results by. If this value is omitted, a default
   * granularity is chosen based on the timeframe.
   *
   * For timeframes of less than 90 minutes, the default granularity is `minute`.
   * Between 90 minutes and 6 hours, the default granularity is `ten_minutes`.
   * Between 6 hours and 15 days inclusive, the default granularity is `hour`. The
   * granularity of timeframes that exceed 15 days is `day`. This default behavior is
   * subject to change; it is strongly suggested that you explicitly specify the
   * granularity.
   */
  group_by?: 'minute' | 'ten_minutes' | 'hour' | 'day';

  /**
   * Measurement for the provided metric. If omitted, the default for the metric will
   * be used. The default measurement for each metric is: "sum" : `ad_attempt_count`,
   * `ad_break_count`, `ad_break_error_count`, `ad_error_count`,
   * `ad_impression_count`, `playing_time` "median" : `ad_preroll_startup_time`,
   * `aggregate_startup_time`, `content_startup_time`, `max_downscale_percentage`,
   * `max_upscale_percentage`, `page_load_time`, `player_average_live_latency`,
   * `player_startup_time`, `rebuffer_count`, `rebuffer_duration`,
   * `requests_for_first_preroll`, `video_startup_preroll_load_time`,
   * `video_startup_preroll_request_time`, `video_startup_time`,
   * `view_average_request_latency`, `view_average_request_throughput`,
   * `view_max_request_latency`, `weighted_average_bitrate` "avg" :
   * `ad_break_error_percentage`, `ad_error_percentage`,
   * `ad_exit_before_start_count`, `ad_exit_before_start_percentage`,
   * `ad_playback_failure_percentage`, `ad_startup_error_count`,
   * `ad_startup_error_percentage`, `content_playback_failure_percentage`,
   * `downscale_percentage`, `exits_before_video_start`,
   * `playback_business_exception_percentage`, `playback_failure_percentage`,
   * `playback_success_score`, `rebuffer_frequency`, `rebuffer_percentage`,
   * `seek_latency`, `smoothness_score`, `startup_time_score`, `upscale_percentage`,
   * `video_quality_score`, `video_startup_business_exception_percentage`,
   * `video_startup_failure_percentage`, `view_dropped_percentage`,
   * `viewer_experience_score` "count" : `started_views`, `unique_viewers`
   */
  measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum';

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
  timeframe?: Array<string>;
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
  filters?: Array<string>;

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
    | 'page_type'
    | 'playback_failure'
    | 'playback_business_exception'
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
    | 'video_content_type'
    | 'video_encoding_variant'
    | 'video_id'
    | 'video_series'
    | 'video_startup_business_exception'
    | 'video_startup_failure'
    | 'video_title'
    | 'view_drm_type'
    | 'view_has_ad'
    | 'view_session_id'
    | 'viewer_connection_type'
    | 'viewer_device_category'
    | 'viewer_device_manufacturer'
    | 'viewer_device_model'
    | 'viewer_device_name'
    | 'viewer_user_id'
    | 'ad_playback_failure'
    | 'content_playback_failure'
    | 'view_dropped';

  /**
   * Measurement for the provided metric. If omitted, the default for the metric will
   * be used. The default measurement for each metric is: "sum" : `ad_attempt_count`,
   * `ad_break_count`, `ad_break_error_count`, `ad_error_count`,
   * `ad_impression_count`, `playing_time` "median" : `ad_preroll_startup_time`,
   * `aggregate_startup_time`, `content_startup_time`, `max_downscale_percentage`,
   * `max_upscale_percentage`, `page_load_time`, `player_average_live_latency`,
   * `player_startup_time`, `rebuffer_count`, `rebuffer_duration`,
   * `requests_for_first_preroll`, `video_startup_preroll_load_time`,
   * `video_startup_preroll_request_time`, `video_startup_time`,
   * `view_average_request_latency`, `view_average_request_throughput`,
   * `view_max_request_latency`, `weighted_average_bitrate` "avg" :
   * `ad_break_error_percentage`, `ad_error_percentage`,
   * `ad_exit_before_start_count`, `ad_exit_before_start_percentage`,
   * `ad_playback_failure_percentage`, `ad_startup_error_count`,
   * `ad_startup_error_percentage`, `content_playback_failure_percentage`,
   * `downscale_percentage`, `exits_before_video_start`,
   * `playback_business_exception_percentage`, `playback_failure_percentage`,
   * `playback_success_score`, `rebuffer_frequency`, `rebuffer_percentage`,
   * `seek_latency`, `smoothness_score`, `startup_time_score`, `upscale_percentage`,
   * `video_quality_score`, `video_startup_business_exception_percentage`,
   * `video_startup_failure_percentage`, `view_dropped_percentage`,
   * `viewer_experience_score` "count" : `started_views`, `unique_viewers`
   */
  measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum';

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
  timeframe?: Array<string>;
}

Metrics.BreakdownValuesBasePage = BreakdownValuesBasePage;

export declare namespace Metrics {
  export {
    type AllMetricValuesResponse as AllMetricValuesResponse,
    type BreakdownValue as BreakdownValue,
    type InsightsResponse as InsightsResponse,
    type MetricTimeseriesDataResponse as MetricTimeseriesDataResponse,
    type OverallValuesResponse as OverallValuesResponse,
    BreakdownValuesBasePage as BreakdownValuesBasePage,
    type MetricListParams as MetricListParams,
    type MetricGetInsightsParams as MetricGetInsightsParams,
    type MetricGetOverallValuesParams as MetricGetOverallValuesParams,
    type MetricGetTimeseriesParams as MetricGetTimeseriesParams,
    type MetricListBreakdownValuesParams as MetricListBreakdownValuesParams,
  };
}
