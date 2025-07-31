// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.playback',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/{PLAYBACK_ID}/{FILENAME}',
  operationId: 'get-static-rendition',
};

export const tool: Tool = {
  name: 'static_rendition_video_playback',
  description:
    'Fetch a static rendition (usually an MP4 or M4A file) of the specified video asset. [MP4 Support](https://docs.mux.com/guides/enable-static-mp4-renditions) must be enabled on the asset before using these URLs.',
  inputSchema: {
    type: 'object',
    properties: {
      PLAYBACK_ID: {
        type: 'string',
      },
      FILENAME: {
        type: 'string',
        enum: ['capped-1080p.mp4', 'audio.m4a', 'low.mp4', 'medium.mp4', 'high.mp4'],
      },
      TOKEN: {
        type: 'string',
        description:
          'Signed token (JWT) for [secure video playback](https://docs.mux.com/guides/secure-video-playback).',
      },
    },
    required: ['PLAYBACK_ID', 'FILENAME'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { PLAYBACK_ID, FILENAME, ...body } = args as any;
  return asBinaryContentResult(await client.video.playback.staticRendition(PLAYBACK_ID, FILENAME, body));
};

export default { metadata, tool, handler };
