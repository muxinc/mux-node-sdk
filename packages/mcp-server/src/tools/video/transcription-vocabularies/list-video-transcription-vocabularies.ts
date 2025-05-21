// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.transcription_vocabularies',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_video_transcription_vocabularies',
  description: 'List all Transcription Vocabularies.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Number of items to include in the response',
      },
      page: {
        type: 'integer',
        description: 'Offset by this many pages, of the size of `limit`',
      },
    },
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.video.transcriptionVocabularies.list(body);
};

export default { metadata, tool, handler };
