// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    'Removes a text or additional audio track from an asset. Neither video nor the primary audio track can be removed.',
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
    required: ['ASSET_ID', 'TRACK_ID'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ASSET_ID, TRACK_ID, ...body } = args as any;
  const response = await client.video.assets.deleteTrack(ASSET_ID, TRACK_ID).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
