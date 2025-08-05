// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.transcription_vocabularies',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}',
  operationId: 'delete-transcription-vocabulary',
};

export const tool: Tool = {
  name: 'delete_video_transcription_vocabularies',
  description:
    "Deletes a Transcription Vocabulary. The Transcription Vocabulary's ID will be disassociated from any live streams using it. Transcription Vocabularies can be deleted while associated live streams are active. However, the words and phrases in the deleted Transcription Vocabulary will remain attached to those streams while they are active.",
  inputSchema: {
    type: 'object',
    properties: {
      TRANSCRIPTION_VOCABULARY_ID: {
        type: 'string',
      },
    },
    required: ['TRANSCRIPTION_VOCABULARY_ID'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { TRANSCRIPTION_VOCABULARY_ID, ...body } = args as any;
  const response = await client.video.transcriptionVocabularies
    .delete(TRANSCRIPTION_VOCABULARY_ID)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
