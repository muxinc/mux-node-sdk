// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.playback_ids',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_video_playback_ids',
  description: 'Retrieves the Identifier of the Asset or Live Stream associated with the Playback ID.',
  inputSchema: {
    type: 'object',
    properties: {
      PLAYBACK_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const { PLAYBACK_ID, ...body } = args as any;
  return client.video.playbackIds.retrieve(PLAYBACK_ID);
};

export default { metadata, tool, handler };
