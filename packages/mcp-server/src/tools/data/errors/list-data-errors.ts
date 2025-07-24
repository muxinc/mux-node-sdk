// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.errors',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/errors',
  operationId: 'list-errors',
};

export const tool: Tool = {
  name: 'list_data_errors',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of errors.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/errors_response',\n  $defs: {\n    errors_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'A unique identifier for this error.'\n              },\n              code: {\n                type: 'integer',\n                description: 'The error code'\n              },\n              count: {\n                type: 'integer',\n                description: 'The total number of views that experienced this error.'\n              },\n              description: {\n                type: 'string',\n                description: 'Description of the error.'\n              },\n              last_seen: {\n                type: 'string',\n                description: 'The last time this error was seen (ISO 8601 timestamp).'\n              },\n              message: {\n                type: 'string',\n                description: 'The error message.'\n              },\n              notes: {\n                type: 'string',\n                description: 'Notes that are attached to this error.'\n              },\n              percentage: {\n                type: 'number',\n                description: 'The percentage of views that experienced this error.'\n              },\n              player_error_code: {\n                type: 'string',\n                description: 'The string version of the error code'\n              }\n            },\n            required: [              'id',\n              'code',\n              'count',\n              'description',\n              'last_seen',\n              'message',\n              'notes',\n              'percentage',\n              'player_error_code'\n            ]\n          }\n        },\n        timeframe: {\n          type: 'array',\n          items: {\n            type: 'integer'\n          }\n        },\n        total_row_count: {\n          type: 'integer'\n        }\n      },\n      required: [        'data',\n        'timeframe',\n        'total_row_count'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.data.errors.list(body)));
};

export default { metadata, tool, handler };
