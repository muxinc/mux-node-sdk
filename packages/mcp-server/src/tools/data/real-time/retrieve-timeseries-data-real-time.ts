// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@mux/mcp/filtering';
import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.real_time',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/timeseries',
  operationId: 'get-realtime-timeseries',
};

export const tool: Tool = {
  name: 'retrieve_timeseries_data_real_time',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets Time series information for a specific metric along with the number of concurrent viewers. This API is now deprecated, please use the `Get Monitoring Timeseries` API.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/real_time_timeseries_response',\n  $defs: {\n    real_time_timeseries_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              concurrent_viewers: {\n                type: 'integer'\n              },\n              date: {\n                type: 'string'\n              },\n              value: {\n                type: 'number'\n              }\n            },\n            required: [              'concurrent_viewers',\n              'date',\n              'value'\n            ]\n          }\n        },\n        timeframe: {\n          type: 'array',\n          items: {\n            type: 'integer'\n          }\n        },\n        total_row_count: {\n          type: 'integer'\n        }\n      },\n      required: [        'data',\n        'timeframe',\n        'total_row_count'\n      ]\n    }\n  }\n}\n```",
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
      filters: {
        type: 'array',
        description:
          'Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.\n\nTo exclude rows that match a certain condition, prepend a `!` character to the dimension.\n\nPossible filter names are the same as returned by the List Monitoring Dimensions endpoint.\n\nExample:\n\n  * `filters[]=operating_system:windows&filters[]=!country:US`\n',
        items: {
          type: 'string',
        },
      },
      timestamp: {
        type: 'integer',
        description:
          'Timestamp to use as the start of the timeseries data. This value must be provided as a unix timestamp. Defaults to 30 minutes ago.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { REALTIME_METRIC_ID, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.data.realTime.retrieveTimeseries(REALTIME_METRIC_ID, body)),
  );
};

export default { metadata, tool, handler };
