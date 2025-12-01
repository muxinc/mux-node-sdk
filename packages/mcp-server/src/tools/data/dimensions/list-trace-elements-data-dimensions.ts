// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.dimensions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/dimensions/{DIMENSION_ID}/elements',
  operationId: 'list-dimension-elements',
};

export const tool: Tool = {
  name: 'list_trace_elements_data_dimensions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists the elements (values) for a trace dimension along with their total counts.\nThis endpoint is specifically designed for trace dimensions like video_cdn_trace\nthat contain arrays of values.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/dimension_value'\n      }\n    },\n    timeframe: {\n      type: 'array',\n      items: {\n        type: 'integer'\n      }\n    },\n    total_row_count: {\n      type: 'integer'\n    }\n  },\n  required: [    'data',\n    'timeframe',\n    'total_row_count'\n  ],\n  $defs: {\n    dimension_value: {\n      type: 'object',\n      properties: {\n        total_count: {\n          type: 'integer'\n        },\n        value: {\n          type: 'string'\n        }\n      },\n      required: [        'total_count',\n        'value'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      DIMENSION_ID: {
        type: 'string',
      },
      filters: {
        type: 'array',
        description:
          'Filter results using key:value pairs. Must be provided as an array query string parameter.\n\n**Basic filtering:**\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n\n**For trace dimensions (like video_cdn_trace):**\n* `filters[]=+dimension:value` - Include rows where trace contains value\n* `filters[]=-dimension:value` - Exclude rows where trace contains value\n* `filters[]=dimension:[value1,value2]` - Exact trace match\n\n**Examples:**\n* `filters[]=country:US` - US views only\n* `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN\n',
        items: {
          type: 'string',
        },
      },
      limit: {
        type: 'integer',
        description: 'Number of items to include in the response',
      },
      metric_filters: {
        type: 'array',
        description:
          'Limit the results to rows that match inequality conditions from provided metric comparison clauses. Must be provided as an array query string parameter.\n\nPossible filterable metrics are the same as the set of metric ids, with the exceptions of `exits_before_video_start`, `unique_viewers`, `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.\n\nExample:\n\n  * `metric_filters[]=aggregate_startup_time>=1000`\n',
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
      page: {
        type: 'integer',
        description: 'Offset by this many pages, of the size of `limit`',
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
    required: ['DIMENSION_ID'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { DIMENSION_ID, jq_filter, ...body } = args as any;
  const response = await client.data.dimensions.listTraceElements(DIMENSION_ID, body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Mux.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
