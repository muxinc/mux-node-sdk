// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.real_time',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/breakdown',
  operationId: 'get-realtime-breakdown',
};

export const tool: Tool = {
  name: 'retrieve_breakdown_data_real_time',
  description:
    'Gets breakdown information for a specific dimension and metric along with the number of concurrent viewers and negative impact score. This API is now deprecated, please use the `Get Monitoring Breakdown` API.',
  inputSchema: {
    type: 'object',
    properties: {
      REALTIME_METRIC_ID: {
        type: 'string',
        enum: [
          'current-concurrent-viewers',
          'current-rebuffering-percentage',
          'exits-before-video-start',
          'playback-failure-percentage',
          'current-average-bitrate',
        ],
      },
      dimension: {
        type: 'string',
        description: 'Dimension the specified value belongs to',
        enum: [
          'asn',
          'cdn',
          'country',
          'operating_system',
          'player_name',
          'region',
          'stream_type',
          'sub_property_id',
          'video_series',
          'video_title',
        ],
      },
      filters: {
        type: 'array',
        description:
          'Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.\n\nTo exclude rows that match a certain condition, prepend a `!` character to the dimension.\n\nPossible filter names are the same as returned by the List Monitoring Dimensions endpoint.\n\nExample:\n\n  * `filters[]=operating_system:windows&filters[]=!country:US`\n',
        items: {
          type: 'string',
        },
      },
      order_by: {
        type: 'string',
        description: 'Value to order the results by',
        enum: ['negative_impact', 'value', 'views', 'field'],
      },
      order_direction: {
        type: 'string',
        description: 'Sort order.',
        enum: ['asc', 'desc'],
      },
      timestamp: {
        type: 'integer',
        description:
          'Timestamp to limit results by. This value must be provided as a unix timestamp. Defaults to the current unix timestamp.',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { REALTIME_METRIC_ID, ...body } = args as any;
  return asTextContentResult(await client.data.realTime.retrieveBreakdown(REALTIME_METRIC_ID, body));
};

export default { metadata, tool, handler };
