// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.video_views',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/video-views/{VIDEO_VIEW_ID}',
  operationId: 'get-video-view',
};

export const tool: Tool = {
  name: 'retrieve_data_video_views',
  description: 'Returns the details of a video view.',
  inputSchema: {
    type: 'object',
    properties: {
      VIDEO_VIEW_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { VIDEO_VIEW_ID, ...body } = args as any;
  return asTextContentResult(await client.data.videoViews.retrieve(VIDEO_VIEW_ID));
};

export default { metadata, tool, handler };
