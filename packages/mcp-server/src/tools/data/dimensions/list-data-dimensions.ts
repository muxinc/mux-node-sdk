// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.dimensions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/dimensions',
  operationId: 'list-dimensions',
};

export const tool: Tool = {
  name: 'list_data_dimensions',
  description: 'List all available dimensions.\n\nNote: This API replaces the list-filters API call.\n',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.data.dimensions.list());
};

export default { metadata, tool, handler };
