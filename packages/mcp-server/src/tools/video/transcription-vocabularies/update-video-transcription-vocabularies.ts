// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates the details of a previously-created Transcription Vocabulary. Updates to Transcription Vocabularies are allowed while associated live streams are active. However, updates will not be applied to those streams while they are active.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/transcription_vocabulary_response',\n  $defs: {\n    transcription_vocabulary_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/transcription_vocabulary'\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    transcription_vocabulary: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the Transcription Vocabulary'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch).'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Time the Transcription Vocabulary was updated, defined as a Unix timestamp (seconds since epoch).'\n        },\n        name: {\n          type: 'string',\n          description: 'The user-supplied name of the Transcription Vocabulary.'\n        },\n        passthrough: {\n          type: 'string',\n          description: 'Arbitrary user-supplied metadata set for the Transcription Vocabulary. Max 255 characters.'\n        },\n        phrases: {\n          type: 'array',\n          description: 'Phrases, individual words, or proper names to include in the Transcription Vocabulary. When the Transcription Vocabulary is attached to a live stream\\'s `generated_subtitles` configuration, the probability of successful speech recognition for these words or phrases is boosted.',\n          items: {\n            type: 'string',\n            description: 'A phrase or word belonging to a Transcription Vocabulary.'\n          }\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['TRANSCRIPTION_VOCABULARY_ID', 'phrases'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { TRANSCRIPTION_VOCABULARY_ID, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      args,
      await client.video.transcriptionVocabularies.update(TRANSCRIPTION_VOCABULARY_ID, body),
    ),
  );
};

export default { metadata, tool, handler };
