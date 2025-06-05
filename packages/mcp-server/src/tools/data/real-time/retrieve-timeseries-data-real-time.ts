// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mux-node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.real_time',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/timeseries',
  operationId: 'get-realtime-timeseries',
};

export const tool: Tool = {
  name: 'retrieve_timeseries_data_real_time',
  description:
    'Gets Time series information for a specific metric along with the number of concurrent viewers. This API is now deprecated, please use the `Get Monitoring Timeseries` API.',
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
      filters: {
        type: 'array',
        description:
          'Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.\n\nTo exclude rows that match a certain condition, prepend a `!` character to the dimension.\n\nPossible filter names are the same as returned by the List Monitoring Dimensions endpoint.\n\nExample:\n\n  * `filters[]=operating_system:windows&filters[]=!country:US`\n',
        items: {
          type: 'string',
        },
      },
      timestamp: {
        type: 'integer',
        description:
          'Timestamp to use as the start of the timeseries data. This value must be provided as a unix timestamp. Defaults to 30 minutes ago.',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { REALTIME_METRIC_ID, ...body } = args as any;
  return asTextContentResult(await client.data.realTime.retrieveTimeseries(REALTIME_METRIC_ID, body));
};

export default { metadata, tool, handler };
