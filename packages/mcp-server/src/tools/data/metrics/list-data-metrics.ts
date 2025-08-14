// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/metrics/comparison',
  operationId: 'list-all-metric-values',
};

export const tool: Tool = {
  name: 'list_data_metrics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all of the values across every breakdown for a specific metric.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/all_metric_values_response',\n  $defs: {\n    all_metric_values_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              name: {\n                type: 'string'\n              },\n              ended_views: {\n                type: 'integer'\n              },\n              items: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    metric: {\n                      type: 'string'\n                    },\n                    name: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string'\n                    },\n                    value: {\n                      type: 'number'\n                    },\n                    measurement: {\n                      type: 'string'\n                    }\n                  },\n                  required: [                    'metric',\n                    'name',\n                    'type',\n                    'value'\n                  ]\n                }\n              },\n              metric: {\n                type: 'string'\n              },\n              started_views: {\n                type: 'integer'\n              },\n              total_playing_time: {\n                type: 'integer'\n              },\n              type: {\n                type: 'string'\n              },\n              unique_viewers: {\n                type: 'integer'\n              },\n              value: {\n                type: 'number'\n              },\n              view_count: {\n                type: 'integer'\n              },\n              watch_time: {\n                type: 'integer'\n              }\n            },\n            required: [              'name'\n            ]\n          }\n        },\n        timeframe: {\n          type: 'array',\n          items: {\n            type: 'integer'\n          }\n        },\n        total_row_count: {\n          type: 'integer'\n        }\n      },\n      required: [        'data',\n        'timeframe',\n        'total_row_count'\n      ]\n    }\n  }\n}\n```",
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
          'video_cdn_trace',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.data.metrics.list(body)));
};

export default { metadata, tool, handler };
