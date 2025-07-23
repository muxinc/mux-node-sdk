// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.live_streams',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/embedded-subtitles',
  operationId: 'update-live-stream-embedded-subtitles',
};

export const tool: Tool = {
  name: 'update_embedded_subtitles_video_live_streams',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nConfigures a live stream to receive embedded closed captions.\nThe resulting Asset's subtitle text track will have `closed_captions: true` set.\n",
  inputSchema: {
    type: 'object',
    properties: {
      LIVE_STREAM_ID: {
        type: 'string',
      },
      embedded_subtitles: {
        type: 'array',
        description: 'Describe the embedded closed caption contents of the incoming live stream.',
        items: {
          type: 'object',
          properties: {
            language_channel: {
              type: 'string',
              description: 'CEA-608 caption channel to read data from.',
              enum: ['cc1', 'cc2', 'cc3', 'cc4'],
            },
            language_code: {
              type: 'string',
              description: 'The language of the closed caption stream. Value must be BCP 47 compliant.',
            },
            name: {
              type: 'string',
              description: 'A name for this live stream closed caption track.',
            },
            passthrough: {
              type: 'string',
              description:
                'Arbitrary user-supplied metadata set for the live stream closed caption track. Max 255 characters.',
            },
          },
        },
      },
    },
    required: ['LIVE_STREAM_ID'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { LIVE_STREAM_ID, ...body } = args as any;
  return asTextContentResult(await client.video.liveStreams.updateEmbeddedSubtitles(LIVE_STREAM_ID, body));
};

export default { metadata, tool, handler };
