// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.delivery_usage',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_video_delivery_usage',
  description: 'Returns a list of delivery usage records and their associated Asset IDs or Live Stream IDs.',
  inputSchema: {
    type: 'object',
    properties: {
      asset_id: {
        type: 'string',
        description:
          'Filter response to return delivery usage for this asset only. You cannot specify both the `asset_id` and `live_stream_id` parameters together.',
      },
      limit: {
        type: 'integer',
        description: 'Number of items to include in the response',
      },
      live_stream_id: {
        type: 'string',
        description:
          'Filter response to return delivery usage for assets for this live stream. You cannot specify both the `asset_id` and `live_stream_id` parameters together.',
      },
      page: {
        type: 'integer',
        description: 'Offset by this many pages, of the size of `limit`',
      },
      timeframe: {
        type: 'array',
        description:
          'Time window to get delivery usage information. timeframe[0] indicates the start time, timeframe[1] indicates the end time in seconds since the Unix epoch. Default time window is 1 hour representing usage from 13th to 12th hour from when the request is made.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.video.deliveryUsage.list(body);
};

export default { metadata, tool, handler };
