// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
  description: 'Lists the available video view exports along with URLs to retrieve them.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.data.exports.listVideoViews());
};

export default { metadata, tool, handler };
