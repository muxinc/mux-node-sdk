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
  name: 'delete_playback_id_video_assets',
  description:
    "Deletes a playback ID, rendering it nonfunctional for viewing an asset's video content. Please note that deleting the playback ID removes access to the underlying asset; a viewer who started playback before the playback ID was deleted may be able to watch the entire video for a limited duration.",
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

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ASSET_ID, PLAYBACK_ID, ...body } = args as any;
  return client.video.assets.deletePlaybackId(ASSET_ID, PLAYBACK_ID);
};

export default { metadata, tool, handler };
