// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mux-node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.assets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/video/v1/assets/{ASSET_ID}',
  operationId: 'delete-asset',
};

export const tool: Tool = {
  name: 'delete_video_assets',
  description: 'Deletes a video asset and all its data.',
  inputSchema: {
    type: 'object',
    properties: {
      ASSET_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ASSET_ID, ...body } = args as any;
  const response = await client.video.assets.delete(ASSET_ID).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
