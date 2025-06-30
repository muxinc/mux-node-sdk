// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from '@mux/mux-node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.playback',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/{PLAYBACK_ID}/thumbnail.{EXTENSION}',
  operationId: 'get-thumbnail',
};

export const tool: Tool = {
  name: 'thumbnail_video_playback',
  description:
    '[Fetch a thumbnail image from a video](https://docs.mux.com/guides/get-images-from-a-video) at a specified time with optional transformations.',
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
      fit_mode: {
        type: 'string',
        description: 'How to fit a thumbnail within the specified width + height.',
        enum: ['preserve', 'stretch', 'crop', 'smartcrop', 'pad'],
      },
      flip_h: {
        type: 'boolean',
        description: 'Flip the image left-right after performing all other transformations.',
      },
      flip_v: {
        type: 'boolean',
        description: 'Flip the image top-bottom after performing all other transformations.',
      },
      height: {
        type: 'integer',
        description: 'The height of the thumbnail (in pixels). Defaults to the height of the original video.',
      },
      rotate: {
        type: 'string',
        description: 'Rotate the image clockwise by the given number of degrees.',
        enum: [90, 180, 270],
      },
      time: {
        type: 'number',
        description:
          'The time (in seconds) of the video timeline where the image should be pulled. Defaults to the middle of the original video.',
      },
      TOKEN: {
        type: 'string',
        description:
          'Signed token (JWT) for [secure video playback](https://docs.mux.com/guides/secure-video-playback).',
      },
      width: {
        type: 'integer',
        description: 'The width of the thumbnail (in pixels). Defaults to the width of the original video.',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { PLAYBACK_ID, EXTENSION, ...body } = args as any;
  return asBinaryContentResult(await client.video.playback.thumbnail(PLAYBACK_ID, EXTENSION, body));
};

export default { metadata, tool, handler };
