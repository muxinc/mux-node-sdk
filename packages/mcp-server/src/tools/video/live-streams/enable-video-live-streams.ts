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
  httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/enable',
  operationId: 'enable-live-stream',
};

export const tool: Tool = {
  name: 'enable_video_live_streams',
  description: 'Enables a live stream, allowing it to accept an incoming RTMP stream.',
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
  await client.video.liveStreams.enable(LIVE_STREAM_ID);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
