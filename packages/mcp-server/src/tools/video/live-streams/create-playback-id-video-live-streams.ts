// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.live_streams',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids',
  operationId: 'create-live-stream-playback-id',
};

export const tool: Tool = {
  name: 'create_playback_id_video_live_streams',
  description:
    'Create a new playback ID for this live stream, through which a viewer can watch the streamed content of the live stream.',
  inputSchema: {
    type: 'object',
    properties: {
      LIVE_STREAM_ID: {
        type: 'string',
      },
      drm_configuration_id: {
        type: 'string',
        description:
          'The DRM configuration used by this playback ID. Must only be set when `policy` is set to `drm`.',
      },
      policy: {
        $ref: '#/$defs/playback_policy',
      },
    },
    $defs: {
      playback_policy: {
        type: 'string',
        description:
          '* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}`\n\n* `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens.\n\n* `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).',
        enum: ['public', 'signed', 'drm'],
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { LIVE_STREAM_ID, ...body } = args as any;
  return asTextContentResult(await client.video.liveStreams.createPlaybackId(LIVE_STREAM_ID, body));
};

export default { metadata, tool, handler };
