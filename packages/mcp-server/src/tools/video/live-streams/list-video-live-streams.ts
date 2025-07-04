// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.live_streams',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/video/v1/live-streams',
  operationId: 'list-live-streams',
};

export const tool: Tool = {
  name: 'list_video_live_streams',
  description: 'Lists the live streams that currently exist in the current environment.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Number of items to include in the response',
      },
      page: {
        type: 'integer',
        description: 'Offset by this many pages, of the size of `limit`',
      },
      status: {
        type: 'string',
        description: 'Filter response to return live streams with the specified status only',
        enum: ['active', 'idle', 'disabled'],
      },
      stream_key: {
        type: 'string',
        description: 'Filter response to return live stream for this stream key only',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.video.liveStreams.list(body));
};

export default { metadata, tool, handler };
