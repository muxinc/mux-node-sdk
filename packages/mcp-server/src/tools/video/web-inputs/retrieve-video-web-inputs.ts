// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.web_inputs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/video/v1/web-inputs/{WEB_INPUT_ID}',
  operationId: 'get-web-input',
};

export const tool: Tool = {
  name: 'retrieve_video_web_inputs',
  description: "Retrieve a single Web Input's info",
  inputSchema: {
    type: 'object',
    properties: {
      WEB_INPUT_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const { WEB_INPUT_ID, ...body } = args as any;
  return client.video.webInputs.retrieve(WEB_INPUT_ID);
};

export default { metadata, tool, handler };
