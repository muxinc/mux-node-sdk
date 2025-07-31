// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.real_time',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/breakdown',
  operationId: 'get-realtime-breakdown',
};

export const tool: Tool = {
  name: 'retrieve_breakdown_data_real_time',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets breakdown information for a specific dimension and metric along with the number of concurrent viewers and negative impact score. This API is now deprecated, please use the `Get Monitoring Breakdown` API.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/real_time_breakdown_response',\n  $defs: {\n    real_time_breakdown_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              concurrent_viewers: {\n                type: 'integer'\n              },\n              metric_value: {\n                type: 'number'\n              },\n              negative_impact: {\n                type: 'integer'\n              },\n              starting_up_viewers: {\n                type: 'integer'\n              },\n              value: {\n                type: 'string'\n              },\n              display_value: {\n                type: 'string'\n              }\n            },\n            required: [              'concurrent_viewers',\n              'metric_value',\n              'negative_impact',\n              'starting_up_viewers',\n              'value'\n            ]\n          }\n        },\n        timeframe: {\n          type: 'array',\n          items: {\n            type: 'integer'\n          }\n        },\n        total_row_count: {\n          type: 'integer'\n        }\n      },\n      required: [        'data',\n        'timeframe',\n        'total_row_count'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      REALTIME_METRIC_ID: {
        type: 'string',
        enum: [
          'current-concurrent-viewers',
          'current-rebuffering-percentage',
          'exits-before-video-start',
          'playback-failure-percentage',
          'current-average-bitrate',
        ],
      },
      dimension: {
        type: 'string',
        description: 'Dimension the specified value belongs to',
        enum: [
          'asn',
          'cdn',
          'country',
          'operating_system',
          'player_name',
          'region',
          'stream_type',
          'sub_property_id',
          'video_series',
          'video_title',
        ],
      },
      filters: {
        type: 'array',
        description:
          'Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.\n\nTo exclude rows that match a certain condition, prepend a `!` character to the dimension.\n\nPossible filter names are the same as returned by the List Monitoring Dimensions endpoint.\n\nExample:\n\n  * `filters[]=operating_system:windows&filters[]=!country:US`\n',
        items: {
          type: 'string',
        },
      },
      order_by: {
        type: 'string',
        description: 'Value to order the results by',
        enum: ['negative_impact', 'value', 'views', 'field'],
      },
      order_direction: {
        type: 'string',
        description: 'Sort order.',
        enum: ['asc', 'desc'],
      },
      timestamp: {
        type: 'integer',
        description:
          'Timestamp to limit results by. This value must be provided as a unix timestamp. Defaults to the current unix timestamp.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['REALTIME_METRIC_ID'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { REALTIME_METRIC_ID, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.data.realTime.retrieveBreakdown(REALTIME_METRIC_ID, body)),
  );
};

export default { metadata, tool, handler };
