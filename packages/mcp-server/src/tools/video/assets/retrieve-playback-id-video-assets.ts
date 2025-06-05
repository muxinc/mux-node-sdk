// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mux-node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.assets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}',
  operationId: 'get-asset-playback-id',
};

export const tool: Tool = {
  name: 'retrieve_playback_id_video_assets',
  description: 'Retrieves information about the specified playback ID.',
  inputSchema: {
    type: 'object',
    properties: {
      ASSET_ID: {
        type: 'string',
      },
      PLAYBACK_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ASSET_ID, PLAYBACK_ID, ...body } = args as any;
  return asTextContentResult(await client.video.assets.retrievePlaybackId(ASSET_ID, PLAYBACK_ID));
};

export default { metadata, tool, handler };
