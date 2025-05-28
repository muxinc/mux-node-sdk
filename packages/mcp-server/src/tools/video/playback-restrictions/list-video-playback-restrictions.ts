// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.playback_restrictions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/video/v1/playback-restrictions',
  operationId: 'list-playback-restrictions',
};

export const tool: Tool = {
  name: 'list_video_playback_restrictions',
  description: 'Returns a list of all Playback Restrictions.',
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
    },
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.video.playbackRestrictions.list(body);
};

export default { metadata, tool, handler };
