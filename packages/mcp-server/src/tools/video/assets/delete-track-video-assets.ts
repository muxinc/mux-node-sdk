// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.assets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}',
  operationId: 'delete-asset-track',
};

export const tool: Tool = {
  name: 'delete_track_video_assets',
  description: 'Removes a text track from an asset. Audio and video tracks on assets cannot be removed.',
  inputSchema: {
    type: 'object',
    properties: {
      ASSET_ID: {
        type: 'string',
      },
      TRACK_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ASSET_ID, TRACK_ID, ...body } = args as any;
  return client.video.assets.deleteTrack(ASSET_ID, TRACK_ID);
};

export default { metadata, tool, handler };
