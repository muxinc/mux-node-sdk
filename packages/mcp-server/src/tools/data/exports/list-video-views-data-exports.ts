// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.exports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/exports/views',
  operationId: 'list-exports-views',
};

export const tool: Tool = {
  name: 'list_video_views_data_exports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists the available video view exports along with URLs to retrieve them.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/video_view_exports_response',\n  $defs: {\n    video_view_exports_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              export_date: {\n                type: 'string',\n                format: 'date'\n              },\n              files: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    path: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string'\n                    },\n                    version: {\n                      type: 'integer'\n                    }\n                  },\n                  required: [                    'path',\n                    'type',\n                    'version'\n                  ]\n                }\n              }\n            },\n            required: [              'export_date',\n              'files'\n            ]\n          }\n        },\n        timeframe: {\n          type: 'array',\n          items: {\n            type: 'integer'\n          }\n        },\n        total_row_count: {\n          type: 'integer'\n        }\n      },\n      required: [        'data',\n        'timeframe',\n        'total_row_count'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(await maybeFilter(args, await client.data.exports.listVideoViews()));
};

export default { metadata, tool, handler };
