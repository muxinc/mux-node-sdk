// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mux-node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.assets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/video/v1/assets/{ASSET_ID}/static-renditions',
  operationId: 'create-asset-static-rendition',
};

export const tool: Tool = {
  name: 'create_static_rendition_video_assets',
  description: 'Creates a static rendition (i.e. MP4) for an asset',
  inputSchema: {
    type: 'object',
    properties: {
      ASSET_ID: {
        type: 'string',
      },
      resolution: {
        type: 'string',
        enum: ['highest', 'audio-only', '2160p', '1440p', '1080p', '720p', '540p', '480p', '360p', '270p'],
      },
      passthrough: {
        type: 'string',
        description: 'Arbitrary user-supplied metadata set for the static rendition. Max 255 characters.',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ASSET_ID, ...body } = args as any;
  return asTextContentResult(await client.video.assets.createStaticRendition(ASSET_ID, body));
};

export default { metadata, tool, handler };
