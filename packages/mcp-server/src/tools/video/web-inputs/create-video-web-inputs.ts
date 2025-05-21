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
  name: 'create_video_web_inputs',
  description: 'Create a new Web Input',
  inputSchema: {
    type: 'object',
    properties: {
      live_stream_id: {
        type: 'string',
        description: 'The Live Stream ID to broadcast this Web Input to',
      },
      url: {
        type: 'string',
        description: 'The URL for the Web Input to load.',
      },
      id: {
        type: 'string',
        description: 'Unique identifier for the Web Input.',
      },
      auto_launch: {
        type: 'boolean',
        description:
          'When set to `true` the Web Input will automatically launch and start streaming immediately after creation',
      },
      created_at: {
        type: 'string',
        description: 'Time the Web Input was created, defined as a Unix timestamp (seconds since epoch).',
      },
      passthrough: {
        type: 'string',
        description:
          'Arbitrary metadata that will be included in the Web Input details and related webhooks. Can be used to store your own ID for the Web Input. **Max: 255 characters**.',
      },
      resolution: {
        type: 'string',
        description:
          "The resolution of the viewport of the Web Input's browser instance. Defaults to 1920x1080 if not set.",
        enum: ['1920x1080', '1280x720', '1080x1920', '720x1280', '1080x1080', '720x720'],
      },
      status: {
        type: 'string',
        enum: ['idle', 'launching', 'streaming'],
      },
      timeout: {
        type: 'integer',
        description:
          'The number of seconds that the Web Input should stream for before automatically shutting down.',
      },
    },
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.video.webInputs.create(body);
};

export default { metadata, tool, handler };
