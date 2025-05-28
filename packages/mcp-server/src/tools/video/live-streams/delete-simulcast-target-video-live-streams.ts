// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.live_streams',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}',
  operationId: 'delete-live-stream-simulcast-target',
};

export const tool: Tool = {
  name: 'delete_simulcast_target_video_live_streams',
  description:
    'Delete the simulcast target using the simulcast target ID returned when creating the simulcast target. Simulcast Target can only be deleted when the parent live stream is in idle state.',
  inputSchema: {
    type: 'object',
    properties: {
      LIVE_STREAM_ID: {
        type: 'string',
      },
      SIMULCAST_TARGET_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const { LIVE_STREAM_ID, SIMULCAST_TARGET_ID, ...body } = args as any;
  return client.video.liveStreams.deleteSimulcastTarget(LIVE_STREAM_ID, SIMULCAST_TARGET_ID);
};

export default { metadata, tool, handler };
