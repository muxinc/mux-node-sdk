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
  name: 'update_master_access_video_assets',
  description:
    'Allows you to add temporary access to the master (highest-quality) version of the asset in MP4 format. A URL will be created that can be used to download the master version for 24 hours. After 24 hours Master Access will revert to "none".\nThis master version is not optimized for web and not meant to be streamed, only downloaded for purposes like archiving or editing the video offline.',
  inputSchema: {
    type: 'object',
    properties: {
      ASSET_ID: {
        type: 'string',
      },
      master_access: {
        type: 'string',
        description: 'Add or remove access to the master version of the video.',
        enum: ['temporary', 'none'],
      },
    },
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ASSET_ID, ...body } = args as any;
  return client.video.assets.updateMasterAccess(ASSET_ID, body);
};

export default { metadata, tool, handler };
