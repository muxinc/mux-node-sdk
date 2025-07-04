// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.uploads',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/video/v1/uploads/{UPLOAD_ID}/cancel',
  operationId: 'cancel-direct-upload',
};

export const tool: Tool = {
  name: 'cancel_video_uploads',
  description:
    'Cancels a direct upload and marks it as cancelled. If a pending upload finishes after this\nrequest, no asset will be created. This request will only succeed if the upload is still in\nthe `waiting` state.\n',
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
  return asTextContentResult(await client.video.uploads.cancel(UPLOAD_ID));
};

export default { metadata, tool, handler };
