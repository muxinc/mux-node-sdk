// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mux-node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.web_inputs',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/video/v1/web-inputs/{WEB_INPUT_ID}/url',
  operationId: 'update-web-input-url',
};

export const tool: Tool = {
  name: 'update_url_video_web_inputs',
  description:
    'Changes the URL that a Web Input loads when it launches.\n\nNote: This can only be called when the Web Input is idle.\n',
  inputSchema: {
    type: 'object',
    properties: {
      WEB_INPUT_ID: {
        type: 'string',
      },
      url: {
        type: 'string',
        description: 'The URL for the Web Input to load.',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { WEB_INPUT_ID, ...body } = args as any;
  return asTextContentResult(await client.video.webInputs.updateURL(WEB_INPUT_ID, body));
};

export default { metadata, tool, handler };
