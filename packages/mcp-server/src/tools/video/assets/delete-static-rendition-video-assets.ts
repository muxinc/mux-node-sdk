// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.assets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_static_rendition_video_assets',
  description: 'Deletes a single static rendition for an asset',
  inputSchema: {
    type: 'object',
    properties: {
      ASSET_ID: {
        type: 'string',
      },
      STATIC_RENDITION_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ASSET_ID, STATIC_RENDITION_ID, ...body } = args as any;
  return client.video.assets.deleteStaticRendition(ASSET_ID, STATIC_RENDITION_ID);
};

export default { metadata, tool, handler };
