// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.transcription_vocabularies',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/video/v1/transcription-vocabularies',
  operationId: 'create-transcription-vocabulary',
};

export const tool: Tool = {
  name: 'create_video_transcription_vocabularies',
  description: 'Create a new Transcription Vocabulary.',
  inputSchema: {
    type: 'object',
    properties: {
      phrases: {
        type: 'array',
        description:
          "Phrases, individual words, or proper names to include in the Transcription Vocabulary. When the Transcription Vocabulary is attached to a live stream's `generated_subtitles`, the probability of successful speech recognition for these words or phrases is boosted.",
        items: {
          type: 'string',
          description: 'A phrase or word belonging to a Transcription Vocabulary.',
        },
      },
      name: {
        type: 'string',
        description: 'The user-supplied name of the Transcription Vocabulary.',
      },
      passthrough: {
        type: 'string',
        description:
          'Arbitrary user-supplied metadata set for the Transcription Vocabulary. Max 255 characters.',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.video.transcriptionVocabularies.create(body));
};

export default { metadata, tool, handler };
