// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.live_streams',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/reset-stream-key',
  operationId: 'reset-stream-key',
};

export const tool: Tool = {
  name: 'reset_stream_key_video_live_streams',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReset a live stream key if you want to immediately stop the current stream key from working and create a new stream key that can be used for future broadcasts.",
  inputSchema: {
    type: 'object',
    properties: {
      LIVE_STREAM_ID: {
        type: 'string',
      },
    },
    required: ['LIVE_STREAM_ID'],
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { LIVE_STREAM_ID, ...body } = args as any;
  return asTextContentResult(await client.video.liveStreams.resetStreamKey(LIVE_STREAM_ID));
};

export default { metadata, tool, handler };
