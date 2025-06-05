// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mux-node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.live_streams',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/complete',
  operationId: 'signal-live-stream-complete',
};

export const tool: Tool = {
  name: 'complete_video_live_streams',
  description:
    '(Optional) End the live stream recording immediately instead of waiting for the reconnect_window. `EXT-X-ENDLIST` tag is added to the HLS manifest which notifies the player that this live stream is over.\n\nMux does not close the encoder connection immediately. Encoders are often configured to re-establish connections immediately which would result in a new recorded asset. For this reason, Mux waits for 60s before closing the connection with the encoder. This 60s timeframe is meant to give encoder operators a chance to disconnect from their end.\n',
  inputSchema: {
    type: 'object',
    properties: {
      LIVE_STREAM_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { LIVE_STREAM_ID, ...body } = args as any;
  await client.video.liveStreams.complete(LIVE_STREAM_ID);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
