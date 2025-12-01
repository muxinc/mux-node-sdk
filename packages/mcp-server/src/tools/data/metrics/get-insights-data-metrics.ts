// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/metrics/{METRIC_ID}/insights',
  operationId: 'list-insights',
};

export const tool: Tool = {
  name: 'get_insights_data_metrics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of insights for a metric. These are the worst performing values across all breakdowns sorted by how much they negatively impact a specific metric.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/insights_response',\n  $defs: {\n    insights_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              filter_column: {\n                type: 'string'\n              },\n              filter_value: {\n                type: 'string'\n              },\n              metric: {\n                type: 'number'\n              },\n              negative_impact_score: {\n                type: 'number'\n              },\n              total_playing_time: {\n                type: 'integer'\n              },\n              total_views: {\n                type: 'integer'\n              },\n              total_watch_time: {\n                type: 'integer'\n              }\n            },\n            required: [              'filter_column',\n              'filter_value',\n              'metric',\n              'negative_impact_score',\n              'total_playing_time',\n              'total_views',\n              'total_watch_time'\n            ]\n          }\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            aggregation: {\n              type: 'string'\n            },\n            granularity: {\n              type: 'string'\n            }\n          }\n        },\n        timeframe: {\n          type: 'array',\n          items: {\n            type: 'integer'\n          }\n        },\n        total_row_count: {\n          type: 'integer'\n        }\n      },\n      required: [        'data',\n        'meta',\n        'timeframe',\n        'total_row_count'\n      ]\n    }\n  }\n}\n```",
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
          'rendition_change_count',
          'rendition_upshift_count',
          'rendition_downshift_count',
        ],
      },
      filters: {
        type: 'array',
        description:
          'Filter results using key:value pairs. Must be provided as an array query string parameter.\n\n**Basic filtering:**\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n\n**For trace dimensions (like video_cdn_trace):**\n* `filters[]=+dimension:value` - Include rows where trace contains value\n* `filters[]=-dimension:value` - Exclude rows where trace contains value\n* `filters[]=dimension:[value1,value2]` - Exact trace match\n\n**Examples:**\n* `filters[]=country:US` - US views only\n* `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN\n',
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
      order_direction: {
        type: 'string',
        description: 'Sort order.',
        enum: ['asc', 'desc'],
      },
      timeframe: {
        type: 'array',
        description:
          'Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['METRIC_ID'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { METRIC_ID, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.data.metrics.getInsights(METRIC_ID, body)),
    );
  } catch (error) {
    if (error instanceof Mux.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
