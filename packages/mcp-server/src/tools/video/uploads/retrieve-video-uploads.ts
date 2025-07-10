// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches information about a single direct upload in the current environment.",
  inputSchema: {
    type: 'object',
    properties: {
      UPLOAD_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { UPLOAD_ID, ...body } = args as any;
  return asTextContentResult(await client.video.uploads.retrieve(UPLOAD_ID));
};

export default { metadata, tool, handler };
