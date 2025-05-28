// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.live_streams',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}',
  operationId: 'get-live-stream',
};

export const tool: Tool = {
  name: 'retrieve_video_live_streams',
  description:
    'Retrieves the details of a live stream that has previously been created. Supply the unique live stream ID that was returned from your previous request, and Mux will return the corresponding live stream information. The same information is returned when creating a live stream.',
  inputSchema: {
    type: 'object',
    properties: {
      LIVE_STREAM_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const { LIVE_STREAM_ID, ...body } = args as any;
  return client.video.liveStreams.retrieve(LIVE_STREAM_ID);
};

export default { metadata, tool, handler };
