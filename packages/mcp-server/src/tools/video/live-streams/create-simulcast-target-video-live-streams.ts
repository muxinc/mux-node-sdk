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
  httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets',
  operationId: 'create-live-stream-simulcast-target',
};

export const tool: Tool = {
  name: 'create_simulcast_target_video_live_streams',
  description:
    'Create a simulcast target for the parent live stream. Simulcast target can only be created when the parent live stream is in idle state. Only one simulcast target can be created at a time with this API.',
  inputSchema: {
    type: 'object',
    properties: {
      LIVE_STREAM_ID: {
        type: 'string',
      },
      url: {
        type: 'string',
        description:
          'The RTMP(s) or SRT endpoint for a simulcast destination.\n* For RTMP(s) destinations, this should include the application name for the third party live streaming service, for example: `rtmp://live.example.com/app`.\n* For SRT destinations, this should be a fully formed SRT connection string, for example: `srt://srt-live.example.com:1234?streamid={stream_key}&passphrase={srt_passphrase}`.\n\nNote: SRT simulcast targets can only be used when an source is connected over SRT.\n',
      },
      passthrough: {
        type: 'string',
        description: 'Arbitrary user-supplied metadata set by you when creating a simulcast target.',
      },
      stream_key: {
        type: 'string',
        description:
          'Stream Key represents a stream identifier on the third party live streaming service to send the parent live stream to. Only used for RTMP(s) simulcast destinations.',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { LIVE_STREAM_ID, ...body } = args as any;
  return asTextContentResult(await client.video.liveStreams.createSimulcastTarget(LIVE_STREAM_ID, body));
};

export default { metadata, tool, handler };
