/*!
 * Mux Video Views
 * Copyright(c) 2018 Mux Inc.
 */
import { Base } from '../../base';
import { RequestOptions } from '../../RequestOptions';

/**
 * @private Base exports path for the Mux API
 * */
const PATH = '/data/v1/video-views';

export interface VideoViewEvent {
  viewer_time?: number;
  playback_time?: number;
  name?: string;
  event_time?: number;
}

export interface VideoView {
  view_total_upscaling?: string;
  preroll_ad_asset_hostname?: string;
  player_source_domain?: string;
  region?: string;
  viewer_user_agent?: string;
  preroll_requested?: boolean;
  page_type?: string;
  startup_score?: string;
  view_seek_duration?: string;
  country_name?: string;
  player_source_height?: number;
  longitude?: string;
  buffering_count?: string;
  video_duration?: string;
  player_source_type?: string;
  city?: string;
  view_id?: string;
  platform_description?: string;
  video_startup_preroll_request_time?: string;
  viewer_device_name?: string;
  video_series?: string;
  viewer_application_name?: string;
  updated_at?: string;
  view_total_content_playback_time?: string;
  cdn?: string;
  player_instance_id?: string;
  video_language?: string;
  player_source_width?: number;
  player_error_message?: string;
  player_mux_plugin_version?: string;
  watched?: boolean;
  playback_score?: string;
  page_url?: string;
  metro?: string;
  view_max_request_latency?: string;
  requests_for_first_preroll?: string;
  view_total_downscaling?: string;
  latitude?: string;
  player_source_host_name?: string;
  inserted_at?: string;
  view_end?: string;
  mux_embed_version?: string;
  player_language?: string;
  page_load_time?: number;
  viewer_device_category?: string;
  video_startup_preroll_load_time?: string;
  player_version?: string;
  watch_time?: number;
  player_source_stream_type?: string;
  preroll_ad_tag_hostname?: string;
  viewer_device_manufacturer?: string;
  rebuffering_score?: string;
  experiment_name?: string;
  viewer_os_version?: string;
  player_preload?: boolean;
  buffering_duration?: string;
  player_view_count?: number;
  player_software?: string;
  player_load_time?: string;
  platform_summary?: string;
  video_encoding_variant?: string;
  player_width?: number;
  view_seek_count?: string;
  viewer_experience_score?: string;
  view_error_id?: number;
  video_variant_name?: string;
  preroll_played?: boolean;
  viewer_application_engine?: string;
  viewer_os_architecture?: string;
  player_error_code?: string;
  buffering_rate?: string;
  events?: Array<VideoViewEvent>;
  player_name?: string;
  view_start?: string;
  view_average_request_throughput?: string;
  video_producer?: string;
  error_type_id?: number;
  mux_viewer_id?: string;
  video_id?: string;
  continent_code?: string;
  session_id?: string;
  exit_before_video_start?: boolean;
  video_content_type?: string;
  viewer_os_family?: string;
  player_poster?: string;
  view_average_request_latency?: string;
  video_variant_id?: string;
  player_source_duration?: number;
  player_source_url?: string;
  mux_api_version?: string;
  video_title?: string;
  id?: string;
  short_time?: string;
  rebuffer_percentage?: string;
  time_to_first_frame?: string;
  viewer_user_id?: string;
  video_stream_type?: string;
  player_startup_time?: number;
  viewer_application_version?: string;
  view_max_downscale_percentage?: string;
  view_max_upscale_percentage?: string;
  country_code?: string;
  used_fullscreen?: boolean;
  isp?: string;
  property_id?: number;
  player_autoplay?: boolean;
  player_height?: number;
  asn?: number;
  quality_score?: string;
  player_software_version?: string;
}

export interface VideoViewsQueryParams {
  limit?: number;
  page?: number;
  error_id?: number;
  order_direction?: 'asc' | 'desc';
  filters?: Array<string>;
  timeframe?: Array<string>;
  viewer_id?: string;
}

export interface VideoViewsListResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: Array<VideoView>;
}

/**
 * VideoViews Class - Provides access to the Mux Data Video Views API
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Data } = muxClient;
 *
 * // Returns a list of video views for a property that occurred within the specified timeframe.
 * // Results are ordered by view_end, according to what you provide for order_direction.
 * Data.VideoViews.list({order_direction: 'asc'});
 */
export class VideoViews extends Base {
  constructor(base: Base);
  constructor(config: RequestOptions);
  constructor(accessToken: string, secret: string, config: RequestOptions);
  constructor(
    accessTokenOrConfigOrBase: string | RequestOptions | Base,
    secret?: string,
    config?: RequestOptions
  ) {
    if (accessTokenOrConfigOrBase instanceof Base) {
      super(accessTokenOrConfigOrBase);
    } else if (typeof accessTokenOrConfigOrBase === 'object') {
      super(accessTokenOrConfigOrBase);
    } else {
      super(accessTokenOrConfigOrBase, secret!, config!);
    }
  }

  /**
   * Returns a list of video views for a property that occurred within the specified timeframe.
   * Results are ordered by view_end, according to what you provide for order_direction.
   *
   * @extends Base
   * @param {Object} queryParams - example { viewer_id: 'ABCD1234', timeframe: ['7:days'], filters: ['operating_system:windows'] }
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Returns a list of video views for a property that occurred within the specified timeframe.
   * Data.VideoViews.list({ viewer_id: 'ABCD1234', timeframe: ['7:days'], order_direction: 'asc' });
   *
   * @see https://docs.mux.com/api-reference/data#operation/list-video-views
   */
  list(params?: VideoViewsQueryParams): Promise<VideoViewsListResponse> {
    return this.http.get(PATH, { params });
  }

  /**
   * Returns the details for a single video view
   *
   * @param {string} videoViewId - The ID for the video view
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * //Returns the details for a single video view
   * Data.VideoViews.get('ABCD1234');
   *
   * @see https://docs.mux.com/api-reference/data#operation/get-video-view
   */
  get(videoViewId: string): Promise<VideoView> {
    if (!videoViewId) {
      throw new Error('A video view Id is required for video view details.');
    }
    return this.http.get(`${PATH}/${videoViewId}`);
  }
}
