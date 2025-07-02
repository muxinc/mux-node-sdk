// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.annotations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/annotations/{ANNOTATION_ID}',
  operationId: 'get-annotation',
};

export const tool: Tool = {
  name: 'retrieve_data_annotations',
  description: 'Returns the details of a specific annotation.',
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
  return asTextContentResult(await client.data.annotations.retrieve(ANNOTATION_ID));
};

export default { metadata, tool, handler };
