// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { BasePage, type BasePageParams } from '../../pagination';

export class VideoViews extends APIResource {
  /**
   * Returns the details of a video view.
   */
  retrieve(videoViewId: string, options?: Core.RequestOptions): Core.APIPromise<VideoViewResponse> {
    return this._client.get(`/data/v1/video-views/${videoViewId}`, options);
  }

  /**
   * Returns a list of video views which match the filters and have a `view_end`
   * within the specified timeframe.
   */
  list(
    query?: VideoViewListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AbridgedVideoViewsBasePage, AbridgedVideoView>;
  list(options?: Core.RequestOptions): Core.PagePromise<AbridgedVideoViewsBasePage, AbridgedVideoView>;
  list(
    query: VideoViewListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AbridgedVideoViewsBasePage, AbridgedVideoView> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/data/v1/video-views', AbridgedVideoViewsBasePage, { query, ...options });
  }
}

export class AbridgedVideoViewsBasePage extends BasePage<AbridgedVideoView> {}

export interface AbridgedVideoView {
  id: string;

  country_code: string | null;

  error_type_id: number | null;

  playback_failure: boolean;

  player_error_code: string | null;

  player_error_message: string | null;

  total_row_count: number;

  video_title: string | null;

  view_end: string;

  view_start: string;

  viewer_application_name: string | null;

  viewer_experience_score: number | null;

  viewer_os_family: string | null;

  watch_time: number | null;
}

export interface VideoViewResponse {
  data: VideoViewResponse.Data;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export namespace VideoViewResponse {
  export interface Data {
    id: string;

    ad_attempt_count: number | null;

    ad_break_count: number | null;

    ad_break_error_count: number | null;

    ad_break_error_percentage: string | null;

    ad_error_count: number | null;

    ad_error_percentage: string | null;

    ad_exit_before_start_count: number | null;

    ad_exit_before_start_percentage: string | null;

    ad_impression_count: number | null;

    ad_playback_failure_error_type_id: number | null;

    ad_preroll_startup_time: number | null;

    ad_startup_error_count: number | null;

    ad_startup_error_percentage: string | null;

    asn: number | null;

    asn_name: string | null;

    asset_id: string | null;

    buffering_count: number | null;

    buffering_duration: number | null;

    buffering_rate: string | null;

    cdn: string | null;

    city: string | null;

    continent_code: string | null;

    country_code: string | null;

    country_name: string | null;

    custom_1: string | null;

    custom_10: string | null;

    custom_2: string | null;

    custom_3: string | null;

    custom_4: string | null;

    custom_5: string | null;

    custom_6: string | null;

    custom_7: string | null;

    custom_8: string | null;

    custom_9: string | null;

    environment_id: string;

    error_type_id: number | null;

    events: Array<Data.Event>;

    exit_before_video_start: boolean;

    experiment_name: string | null;

    inserted_at: string;

    isp: string | null;

    latitude: string | null;

    live_stream_id: string | null;

    live_stream_latency: number | null;

    long_rebuffering: boolean;

    long_resume: boolean;

    longitude: string | null;

    metro: string | null;

    mux_api_version: string;

    mux_embed: string | null;

    mux_embed_version: string | null;

    mux_viewer_id: string;

    page_load_time: number | null;

    page_type: string | null;

    page_url: string | null;

    platform_description: string | null;

    platform_summary: string | null;

    playback_business_exception_error_type_id: number | null;

    playback_failure: boolean;

    playback_failure_error_type_id: number | null;

    playback_id: string | null;

    playback_score: string | null;

    player_autoplay: boolean;

    player_error_code: string | null;

    player_error_message: string | null;

    player_height: number | null;

    player_instance_id: string | null;

    player_language: string | null;

    player_load_time: number | null;

    player_mux_plugin_name: string | null;

    player_mux_plugin_version: string | null;

    player_name: string | null;

    player_poster: string | null;

    player_preload: boolean;

    player_remote_played: boolean | null;

    player_software: string | null;

    player_software_version: string | null;

    player_source_domain: string | null;

    player_source_duration: number | null;

    player_source_height: number | null;

    player_source_host_name: string | null;

    player_source_stream_type: string | null;

    player_source_type: string | null;

    player_source_url: string | null;

    player_source_width: number | null;

    player_startup_time: number | null;

    player_version: string | null;

    player_view_count: number | null;

    player_width: number | null;

    preroll_ad_asset_hostname: string | null;

    preroll_ad_tag_hostname: string | null;

    preroll_played: boolean | null;

    preroll_requested: boolean | null;

    property_id: number;

    quality_score: string | null;

    rebuffer_percentage: string | null;

    rebuffering_score: string | null;

    region: string | null;

    requests_for_first_preroll: number | null;

    session_id: string;

    short_time: string;

    startup_score: string | null;

    sub_property_id: string | null;

    time_to_first_frame: number | null;

    updated_at: string;

    used_fullscreen: boolean;

    video_content_type: string | null;

    video_duration: number | null;

    video_encoding_variant: string | null;

    video_id: string | null;

    video_language: string | null;

    video_producer: string | null;

    video_series: string | null;

    video_startup_business_exception_error_type_id: number | null;

    video_startup_failure: boolean;

    video_startup_preroll_load_time: number | null;

    video_startup_preroll_request_time: number | null;

    video_stream_type: string | null;

    video_title: string | null;

    video_variant_id: string | null;

    video_variant_name: string | null;

    view_average_request_latency: number | null;

    view_average_request_throughput: number | null;

    view_content_startup_time: number | null;

    view_drm_type: string | null;

    view_dropped: boolean;

    view_dropped_frame_count: number | null;

    view_end: string;

    view_error_id: number | null;

    view_has_ad: boolean;

    view_id: string;

    view_max_downscale_percentage: string | null;

    view_max_playhead_position: string | null;

    view_max_request_latency: number | null;

    view_max_upscale_percentage: string | null;

    view_playing_time: string | null;

    view_seek_count: number | null;

    view_seek_duration: number | null;

    view_session_id: string | null;

    view_start: string;

    view_total_content_playback_time: number | null;

    view_total_downscaling: string | null;

    view_total_upscaling: string | null;

    viewer_application_engine: string | null;

    viewer_application_name: string | null;

    viewer_application_version: string | null;

    viewer_connection_type: string | null;

    viewer_device_category: string | null;

    viewer_device_manufacturer: string | null;

    viewer_device_model: string | null;

    viewer_device_name: string | null;

    viewer_experience_score: string | null;

    viewer_os_architecture: string | null;

    viewer_os_family: string | null;

    viewer_os_version: string | null;

    viewer_user_agent: string | null;

    viewer_user_id: string | null;

    watch_time: number | null;

    watched: boolean;

    weighted_average_bitrate: number | null;

    player_error_context?: string | null;
  }

  export namespace Data {
    export interface Event {
      details: Record<string, unknown>;

      event_time: number;

      name: string;

      playback_time: number;

      viewer_time: number;
    }
  }
}

export interface VideoViewListParams extends BasePageParams {
  /**
   * Filter video views by the provided error ID (as returned in the error_type_id
   * field in the list video views endpoint). If you provide any as the error ID,
   * this will filter the results to those with any error.
   */
  error_id?: number;

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

  /**
   * Viewer ID to filter results by. This value may be provided by the integration,
   * or may be created by Mux.
   */
  viewer_id?: string;
}

VideoViews.AbridgedVideoViewsBasePage = AbridgedVideoViewsBasePage;

export declare namespace VideoViews {
  export {
    type AbridgedVideoView as AbridgedVideoView,
    type VideoViewResponse as VideoViewResponse,
    AbridgedVideoViewsBasePage as AbridgedVideoViewsBasePage,
    type VideoViewListParams as VideoViewListParams,
  };
}
