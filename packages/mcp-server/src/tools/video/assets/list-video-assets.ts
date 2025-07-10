// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.assets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/video/v1/assets',
  operationId: 'list-assets',
};

export const tool: Tool = {
  name: 'list_video_assets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all Mux assets.",
  inputSchema: {
    type: 'object',
    properties: {
      cursor: {
        type: 'string',
        description:
          'This parameter is used to request pages beyond the first. You can find the cursor value in the `next_cursor` field of paginated responses.',
      },
      limit: {
        type: 'integer',
        description: 'Number of items to include in the response',
      },
      live_stream_id: {
        type: 'string',
        description: 'Filter response to return all the assets for this live stream only',
      },
      page: {
        type: 'integer',
        description: 'Offset by this many pages, of the size of `limit`',
      },
      upload_id: {
        type: 'string',
        description: 'Filter response to return an asset created from this direct upload only',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.video.assets.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
