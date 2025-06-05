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
  httpPath: '/video/v1/web-inputs/{WEB_INPUT_ID}/launch',
  operationId: 'launch-web-input',
};

export const tool: Tool = {
  name: 'launch_video_web_inputs',
  description:
    'Launches the browsers instance, loads the URL specified, and then starts streaming to the specified Live Stream.',
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
  return asTextContentResult((await client.video.webInputs.launch(WEB_INPUT_ID)) as object);
};

export default { metadata, tool, handler };
