// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mux-node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.web_inputs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/video/v1/web-inputs/{WEB_INPUT_ID}',
  operationId: 'delete-web-input',
};

export const tool: Tool = {
  name: 'delete_video_web_inputs',
  description: 'Deletes a Web Input and all its data',
  inputSchema: {
    type: 'object',
    properties: {
      WEB_INPUT_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { WEB_INPUT_ID, ...body } = args as any;
  const response = await client.video.webInputs.delete(WEB_INPUT_ID).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
