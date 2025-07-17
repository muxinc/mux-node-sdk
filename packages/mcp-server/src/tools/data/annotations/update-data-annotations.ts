// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.annotations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/data/v1/annotations/{ANNOTATION_ID}',
  operationId: 'update-annotation',
};

export const tool: Tool = {
  name: 'update_data_annotations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates an existing annotation.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/annotation_response',\n  $defs: {\n    annotation_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/annotation'\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    annotation: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the annotation'\n        },\n        date: {\n          type: 'string',\n          description: 'Datetime when the annotation applies',\n          format: 'date-time'\n        },\n        note: {\n          type: 'string',\n          description: 'The annotation note content'\n        },\n        sub_property_id: {\n          type: 'string',\n          description: 'Customer-defined sub-property identifier'\n        }\n      },\n      required: [        'id',\n        'date',\n        'note'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      ANNOTATION_ID: {
        type: 'string',
      },
      date: {
        type: 'integer',
        description: 'Datetime when the annotation applies (Unix timestamp)',
      },
      note: {
        type: 'string',
        description: 'The annotation note content',
      },
      sub_property_id: {
        type: 'string',
        description: 'Customer-defined sub-property identifier',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['ANNOTATION_ID', 'date', 'note'],
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ANNOTATION_ID, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.data.annotations.update(ANNOTATION_ID, body)),
  );
};

export default { metadata, tool, handler };
