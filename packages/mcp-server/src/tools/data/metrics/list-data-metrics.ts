// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.metrics',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_data_metrics',
  description: 'List all of the values across every breakdown for a specific metric.',
  inputSchema: {
    type: 'object',
    properties: {
      dimension: {
        type: 'string',
        description: 'Dimension the specified value belongs to',
        enum: [
          'asn',
          'asset_id',
          'browser',
          'browser_version',
          'cdn',
          'continent_code',
          'country',
          'custom_1',
          'custom_2',
          'custom_3',
          'custom_4',
          'custom_5',
          'custom_6',
          'custom_7',
          'custom_8',
          'custom_9',
          'custom_10',
          'exit_before_video_start',
          'experiment_name',
          'live_stream_id',
          'operating_system',
          'operating_system_version',
          'page_type',
          'playback_failure',
          'playback_business_exception',
          'playback_id',
          'player_autoplay',
          'player_error_code',
          'player_mux_plugin_name',
          'player_mux_plugin_version',
          'player_name',
          'player_preload',
          'player_remote_played',
          'player_software',
          'player_software_version',
          'player_version',
          'preroll_ad_asset_hostname',
          'preroll_ad_tag_hostname',
          'preroll_played',
          'preroll_requested',
          'region',
          'source_hostname',
          'source_type',
          'stream_type',
          'sub_property_id',
          'video_content_type',
          'video_encoding_variant',
          'video_id',
          'video_series',
          'video_startup_failure',
          'video_startup_business_exception',
          'video_title',
          'view_drm_type',
          'view_has_ad',
          'view_session_id',
          'viewer_connection_type',
          'viewer_device_category',
          'viewer_device_manufacturer',
          'viewer_device_model',
          'viewer_device_name',
          'viewer_user_id',
          'ad_playback_failure',
          'content_playback_failure',
          'view_dropped',
          'client_application_name',
          'client_application_version',
          'video_affiliate',
          'viewer_plan',
          'viewer_plan_status',
          'viewer_plan_category',
          'view_drm_level',
          'video_brand',
          'used_pip',
          'time_shift_enabled',
          'used_captions',
          'video_codec',
          'audio_codec',
          'video_dynamic_range_type',
          'view_cdn_edge_pop',
          'view_cdn_origin',
          'video_creator_id',
        ],
      },
      filters: {
        type: 'array',
        description:
          'Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.\n\nTo exclude rows that match a certain condition, prepend a `!` character to the dimension.\n\nPossible filter names are the same as returned by the List Filters endpoint.\n\nExample:\n\n  * `filters[]=operating_system:windows&filters[]=!country:US`\n',
        items: {
          type: 'string',
        },
      },
      metric_filters: {
        type: 'array',
        description:
          'Limit the results to rows that match inequality conditions from provided metric comparison clauses. Must be provided as an array query string parameter.\n\nPossible filterable metrics are the same as the set of metric ids, with the exceptions of `exits_before_video_start`, `unique_viewers`, `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.\n\nExample:\n\n  * `metric_filters[]=aggregate_startup_time>=1000`\n',
        items: {
          type: 'string',
        },
      },
      timeframe: {
        type: 'array',
        description:
          'Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n',
        items: {
          type: 'string',
        },
      },
      value: {
        type: 'string',
        description: 'Value to show all available metrics for',
      },
    },
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.data.metrics.list(body);
};

export default { metadata, tool, handler };
