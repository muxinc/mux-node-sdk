// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.filters',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/filters/{FILTER_ID}',
  operationId: 'list-filter-values',
};

export const tool: Tool = {
  name: 'list_values_data_filters',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe API has been replaced by the list-dimension-values API call.\n\nLists the values for a filter along with a total count of related views.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/filter_value'\n      }\n    },\n    timeframe: {\n      type: 'array',\n      items: {\n        type: 'integer'\n      }\n    },\n    total_row_count: {\n      type: 'integer'\n    }\n  },\n  required: [    'data',\n    'timeframe',\n    'total_row_count'\n  ],\n  $defs: {\n    filter_value: {\n      type: 'object',\n      properties: {\n        total_count: {\n          type: 'integer'\n        },\n        value: {\n          type: 'string'\n        }\n      },\n      required: [        'total_count',\n        'value'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      FILTER_ID: {
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
    required: ['FILTER_ID'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { FILTER_ID, jq_filter, ...body } = args as any;
  const response = await client.data.filters.listValues(FILTER_ID, body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
