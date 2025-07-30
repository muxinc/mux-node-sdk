// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.live_streams',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/generated-subtitles',
  operationId: 'update-live-stream-generated-subtitles',
};

export const tool: Tool = {
  name: 'update_generated_subtitles_video_live_streams',
  description:
    "Updates a live stream's automatic-speech-recognition-generated subtitle configuration.\nAutomatic speech recognition subtitles can be removed by sending an empty array in the\nrequest payload.\n",
  inputSchema: {
    type: 'object',
    properties: {
      LIVE_STREAM_ID: {
        type: 'string',
      },
      generated_subtitles: {
        type: 'array',
        description:
          'Update automated speech recognition subtitle configuration for a live stream. At most one subtitle track is allowed.',
        items: {
          type: 'object',
          properties: {
            language_code: {
              type: 'string',
              description: 'The language to generate subtitles in.',
              enum: ['en', 'en-US', 'es', 'fr', 'de', 'pt', 'it'],
            },
            name: {
              type: 'string',
              description: 'A name for this live stream subtitle track.',
            },
            passthrough: {
              type: 'string',
              description: 'Arbitrary metadata set for the live stream subtitle track. Max 255 characters.',
            },
            transcription_vocabulary_ids: {
              type: 'array',
              description:
                'Unique identifiers for existing Transcription Vocabularies to use while generating subtitles for the live stream. If the Transcription Vocabularies provided collectively have more than 1000 phrases, only the first 1000 phrases will be included.',
              items: {
                type: 'string',
              },
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
  return asTextContentResult(await client.video.liveStreams.updateGeneratedSubtitles(LIVE_STREAM_ID, body));
};

export default { metadata, tool, handler };
