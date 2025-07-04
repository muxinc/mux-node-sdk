// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.annotations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/data/v1/annotations/{ANNOTATION_ID}',
  operationId: 'delete-annotation',
};

export const tool: Tool = {
  name: 'delete_data_annotations',
  description: 'Deletes an annotation.',
  inputSchema: {
    type: 'object',
    properties: {
      ANNOTATION_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ANNOTATION_ID, ...body } = args as any;
  const response = await client.data.annotations.delete(ANNOTATION_ID).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
