// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
  description: 'Updates an existing annotation.',
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
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ANNOTATION_ID, ...body } = args as any;
  return asTextContentResult(await client.data.annotations.update(ANNOTATION_ID, body));
};

export default { metadata, tool, handler };
