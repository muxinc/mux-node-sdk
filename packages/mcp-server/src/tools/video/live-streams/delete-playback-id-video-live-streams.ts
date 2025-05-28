// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.live_streams',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}',
  operationId: 'delete-live-stream-playback-id',
};

export const tool: Tool = {
  name: 'delete_playback_id_video_live_streams',
  description:
    'Deletes the playback ID for the live stream. This will not disable ingest (as the live stream still exists). New attempts to play back the live stream will fail immediately. However, current viewers will be able to continue watching the stream for some period of time.',
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
  return client.video.liveStreams.deletePlaybackId(LIVE_STREAM_ID, PLAYBACK_ID);
};

export default { metadata, tool, handler };
