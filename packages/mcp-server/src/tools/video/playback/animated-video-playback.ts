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
  httpPath: '/{PLAYBACK_ID}/animated.{EXTENSION}',
  operationId: 'get-animated',
};

export const tool: Tool = {
  name: 'animated_video_playback',
  description:
    '[Fetch an animated GIF or WebP image](https://docs.mux.com/guides/get-images-from-a-video#get-an-animated-gif-from-a-video) from a video segment with optional transformations.',
  inputSchema: {
    type: 'object',
    properties: {
      PLAYBACK_ID: {
        type: 'string',
      },
      EXTENSION: {
        type: 'string',
        enum: ['gif', 'webp'],
      },
      end: {
        type: 'number',
        description:
          'The time (in seconds) of the video timeline where the GIF ends. Defaults to 5 seconds after the start. Maximum total duration of GIF is limited to 10 seconds; minimum total duration of GIF is 250ms.',
      },
      fps: {
        type: 'integer',
        description: 'The frame rate of the generated GIF. Defaults to 15 fps. Max 30 fps.',
      },
      height: {
        type: 'integer',
        description:
          'The height in pixels of the animated GIF. The default height is determined by preserving aspect ratio with the width provided. Maximum height is 640px.',
      },
      start: {
        type: 'number',
        description:
          'The time (in seconds) of the video timeline where the animated GIF should begin. Defaults to 0.',
      },
      TOKEN: {
        type: 'string',
        description:
          'Signed token (JWT) for [secure video playback](https://docs.mux.com/guides/secure-video-playback).',
      },
      width: {
        type: 'integer',
        description:
          'The width in pixels of the animated GIF. Default is 320px, or if height is provided, the width is determined by preserving aspect ratio with the height. Max width is 640px.',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { PLAYBACK_ID, EXTENSION, ...body } = args as any;
  return asBinaryContentResult(await client.video.playback.animated(PLAYBACK_ID, EXTENSION, body));
};

export default { metadata, tool, handler };
