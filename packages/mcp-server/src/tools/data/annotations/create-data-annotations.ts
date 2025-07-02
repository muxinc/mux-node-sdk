// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.annotations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/data/v1/annotations',
  operationId: 'create-annotation',
};

export const tool: Tool = {
  name: 'create_data_annotations',
  description: 'Creates a new annotation.',
  inputSchema: {
    type: 'object',
    properties: {
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
  const body = args as any;
  return asTextContentResult(await client.data.annotations.create(body));
};

export default { metadata, tool, handler };
