// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mux-node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.live_streams',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}',
  operationId: 'get-live-stream-playback-id',
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

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { LIVE_STREAM_ID, PLAYBACK_ID, ...body } = args as any;
  return asTextContentResult(await client.video.liveStreams.retrievePlaybackId(LIVE_STREAM_ID, PLAYBACK_ID));
};

export default { metadata, tool, handler };
