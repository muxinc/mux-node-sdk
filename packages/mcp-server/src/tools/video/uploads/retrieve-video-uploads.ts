// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.uploads',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/video/v1/uploads/{UPLOAD_ID}',
  operationId: 'get-direct-upload',
};

export const tool: Tool = {
  name: 'retrieve_video_uploads',
  description: 'Fetches information about a single direct upload in the current environment.',
  inputSchema: {
    type: 'object',
    properties: {
      UPLOAD_ID: {
        type: 'string',
      },
    },
    required: ['UPLOAD_ID'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { UPLOAD_ID, ...body } = args as any;
  try {
    return asTextContentResult(await client.video.uploads.retrieve(UPLOAD_ID));
  } catch (error) {
    if (error instanceof Mux.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
