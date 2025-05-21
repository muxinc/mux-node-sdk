// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.transcription_vocabularies',
  operation: 'write',
  tags: [],
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
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const { TRANSCRIPTION_VOCABULARY_ID, ...body } = args as any;
  return client.video.transcriptionVocabularies.delete(TRANSCRIPTION_VOCABULARY_ID);
};

export default { metadata, tool, handler };
