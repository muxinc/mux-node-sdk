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
  httpPath: '/{PLAYBACK_ID}/storyboard.vtt',
  operationId: 'get-vtt-storyboard',
};

export const tool: Tool = {
  name: 'storyboard_vtt_video_playback',
  description:
    'Fetch metadata for the [storyboard image in WebVTT format](https://docs.mux.com/guides/create-timeline-hover-previews#webvtt), detailing the coordinates and time ranges of each thumbnail.',
  inputSchema: {
    type: 'object',
    properties: {
      PLAYBACK_ID: {
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
  const { PLAYBACK_ID, ...body } = args as any;
  return asTextContentResult(await client.video.playback.storyboardVtt(PLAYBACK_ID, body));
};

export default { metadata, tool, handler };
