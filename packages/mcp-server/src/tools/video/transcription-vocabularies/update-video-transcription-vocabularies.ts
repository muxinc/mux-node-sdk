// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.transcription_vocabularies',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}',
  operationId: 'update-transcription-vocabulary',
};

export const tool: Tool = {
  name: 'update_video_transcription_vocabularies',
  description:
    'Updates the details of a previously-created Transcription Vocabulary. Updates to Transcription Vocabularies are allowed while associated live streams are active. However, updates will not be applied to those streams while they are active.',
  inputSchema: {
    type: 'object',
    properties: {
      TRANSCRIPTION_VOCABULARY_ID: {
        type: 'string',
      },
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

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const { TRANSCRIPTION_VOCABULARY_ID, ...body } = args as any;
  return client.video.transcriptionVocabularies.update(TRANSCRIPTION_VOCABULARY_ID, body);
};

export default { metadata, tool, handler };
