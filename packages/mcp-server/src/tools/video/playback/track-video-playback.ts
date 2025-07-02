// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.playback',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/{PLAYBACK_ID}/text/{TRACK_ID}.vtt',
  operationId: 'get-vtt-text-track',
};

export const tool: Tool = {
  name: 'track_video_playback',
  description: 'Fetch a standalone WebVTT version of a text track from an asset.',
  inputSchema: {
    type: 'object',
    properties: {
      PLAYBACK_ID: {
        type: 'string',
      },
      TRACK_ID: {
        type: 'string',
      },
      TOKEN: {
        type: 'string',
        description:
          'Signed token (JWT) for [secure video playback](https://docs.mux.com/guides/secure-video-playback).',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { PLAYBACK_ID, TRACK_ID, ...body } = args as any;
  return asTextContentResult(await client.video.playback.track(PLAYBACK_ID, TRACK_ID, body));
};

export default { metadata, tool, handler };
