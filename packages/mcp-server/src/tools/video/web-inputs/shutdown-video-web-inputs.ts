// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.web_inputs',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'shutdown_video_web_inputs',
  description:
    'Ends streaming to the specified Live Stream, and then shuts down the Web Input browser instance.',
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
  return client.video.webInputs.shutdown(WEB_INPUT_ID);
};

export default { metadata, tool, handler };
