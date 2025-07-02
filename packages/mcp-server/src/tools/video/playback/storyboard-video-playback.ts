// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.playback',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/{PLAYBACK_ID}/storyboard.{EXTENSION}',
  operationId: 'get-image-storyboard',
};

export const tool: Tool = {
  name: 'storyboard_video_playback',
  description:
    'Fetch a storyboard image composed of multiple thumbnails for use in [timeline hover previews](https://docs.mux.com/guides/create-timeline-hover-previews).',
  inputSchema: {
    type: 'object',
    properties: {
      PLAYBACK_ID: {
        type: 'string',
      },
      EXTENSION: {
        type: 'string',
        enum: ['jpg', 'png', 'webp'],
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
  const { PLAYBACK_ID, EXTENSION, ...body } = args as any;
  return asBinaryContentResult(await client.video.playback.storyboard(PLAYBACK_ID, EXTENSION, body));
};

export default { metadata, tool, handler };
