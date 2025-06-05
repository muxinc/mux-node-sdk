// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mux-node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/metrics/{METRIC_ID}/overall',
  operationId: 'get-overall-values',
};

export const tool: Tool = {
  name: 'get_overall_values_data_metrics',
  description:
    'Returns the overall value for a specific metric, as well as the total view count, watch time, and the Mux Global metric value for the metric.',
  inputSchema: {
    type: 'object',
    properties: {
      METRIC_ID: {
        type: 'string',
        enum: [
          'aggregate_startup_time',
          'downscale_percentage',
          'exits_before_video_start',
          'live_stream_latency',
          'max_downscale_percentage',
          'max_request_latency',
          'max_upscale_percentage',
          'page_load_time',
          'playback_failure_percentage',
          'playback_success_score',
          'player_startup_time',
          'playing_time',
          'rebuffer_count',
          'rebuffer_duration',
          'rebuffer_frequency',
          'rebuffer_percentage',
          'request_latency',
          'request_throughput',
          'rebuffer_score',
          'requests_for_first_preroll',
          'seek_latency',
          'startup_time_score',
          'unique_viewers',
          'upscale_percentage',
          'video_quality_score',
          'video_startup_preroll_load_time',
          'video_startup_preroll_request_time',
          'video_startup_time',
          'viewer_experience_score',
          'views',
          'weighted_average_bitrate',
          'video_startup_failure_percentage',
          'ad_attempt_count',
          'ad_break_count',
          'ad_break_error_count',
          'ad_break_error_percentage',
          'ad_error_count',
          'ad_error_percentage',
          'ad_exit_before_start_count',
          'ad_exit_before_start_percentage',
          'ad_impression_count',
          'ad_startup_error_count',
          'ad_startup_error_percentage',
          'playback_business_exception_percentage',
          'video_startup_business_exception_percentage',
          'view_content_startup_time',
          'ad_preroll_startup_time',
          'view_dropped_percentage',
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
      measurement: {
        type: 'string',
        description:
          'Measurement for the provided metric. If omitted, the default for the metric will be used.\nThe default measurement for each metric is:\n"sum" : `ad_attempt_count`, `ad_break_count`, `ad_break_error_count`, `ad_error_count`, `ad_impression_count`, `playing_time`\n"median" : `ad_preroll_startup_time`, `aggregate_startup_time`, `content_startup_time`, `max_downscale_percentage`, `max_upscale_percentage`, `page_load_time`, `player_average_live_latency`, `player_startup_time`, `rebuffer_count`, `rebuffer_duration`, `requests_for_first_preroll`, `video_startup_preroll_load_time`, `video_startup_preroll_request_time`, `video_startup_time`, `view_average_request_latency`, `view_average_request_throughput`, `view_max_request_latency`, `weighted_average_bitrate`\n"avg" : `ad_break_error_percentage`, `ad_error_percentage`, `ad_exit_before_start_count`, `ad_exit_before_start_percentage`, `ad_playback_failure_percentage`, `ad_startup_error_count`, `ad_startup_error_percentage`, `content_playback_failure_percentage`, `downscale_percentage`, `exits_before_video_start`, `playback_business_exception_percentage`, `playback_failure_percentage`, `playback_success_score`, `rebuffer_frequency`, `rebuffer_percentage`, `seek_latency`, `smoothness_score`, `startup_time_score`, `upscale_percentage`, `video_quality_score`, `video_startup_business_exception_percentage`, `video_startup_failure_percentage`, `view_dropped_percentage`, `viewer_experience_score`\n"count" : `started_views`, `unique_viewers`',
        enum: ['95th', 'median', 'avg', 'count', 'sum'],
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
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { METRIC_ID, ...body } = args as any;
  return asTextContentResult(await client.data.metrics.getOverallValues(METRIC_ID, body));
};

export default { metadata, tool, handler };
