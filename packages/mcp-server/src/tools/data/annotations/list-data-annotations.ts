// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.annotations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/annotations',
  operationId: 'list-annotations',
};

export const tool: Tool = {
  name: 'list_data_annotations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of annotations.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/list_annotations_response',\n  $defs: {\n    list_annotations_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/annotation'\n          }\n        },\n        total_row_count: {\n          type: 'integer',\n          description: 'Total number of annotations available'\n        },\n        timeframe: {\n          type: 'array',\n          description: 'Start and end unix timestamps for the data range',\n          items: {\n            type: 'integer'\n          }\n        }\n      },\n      required: [        'data',\n        'total_row_count'\n      ]\n    },\n    annotation: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the annotation'\n        },\n        date: {\n          type: 'string',\n          description: 'Datetime when the annotation applies',\n          format: 'date-time'\n        },\n        note: {\n          type: 'string',\n          description: 'The annotation note content'\n        },\n        sub_property_id: {\n          type: 'string',\n          description: 'Customer-defined sub-property identifier'\n        }\n      },\n      required: [        'id',\n        'date',\n        'note'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Number of items to include in the response',
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
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.data.annotations.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
