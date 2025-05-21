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
  name: 'reload_video_web_inputs',
  description:
    'Reloads the page that a Web Input is displaying.\n\nNote: Using this when the Web Input is streaming will display the page reloading.\n',
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
  return client.video.webInputs.reload(WEB_INPUT_ID);
};

export default { metadata, tool, handler };
