// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.live_streams',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_playback_id_video_live_streams',
  description:
    "Fetches information about a live stream's playback ID, through which a viewer can watch the streamed content from this live stream.",
  inputSchema: {
    type: 'object',
    properties: {
      LIVE_STREAM_ID: {
        type: 'string',
      },
      PLAYBACK_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const { LIVE_STREAM_ID, PLAYBACK_ID, ...body } = args as any;
  return client.video.liveStreams.retrievePlaybackId(LIVE_STREAM_ID, PLAYBACK_ID);
};

export default { metadata, tool, handler };
