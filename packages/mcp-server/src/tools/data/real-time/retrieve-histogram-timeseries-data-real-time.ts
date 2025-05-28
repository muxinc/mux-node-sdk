// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.real_time',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries',
  operationId: 'get-realtime-histogram-timeseries',
};

export const tool: Tool = {
  name: 'retrieve_histogram_timeseries_data_real_time',
  description:
    'Gets histogram timeseries information for a specific metric. This API is now deprecated, please use the `Get Monitoring Histogram Timeseries` API.',
  inputSchema: {
    type: 'object',
    properties: {
      REALTIME_HISTOGRAM_METRIC_ID: {
        type: 'string',
        enum: ['video-startup-time'],
      },
      filters: {
        type: 'array',
        description:
          'Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.\n\nTo exclude rows that match a certain condition, prepend a `!` character to the dimension.\n\nPossible filter names are the same as returned by the List Monitoring Dimensions endpoint.\n\nExample:\n\n  * `filters[]=operating_system:windows&filters[]=!country:US`\n',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const { REALTIME_HISTOGRAM_METRIC_ID, ...body } = args as any;
  return client.data.realTime.retrieveHistogramTimeseries(REALTIME_HISTOGRAM_METRIC_ID, body);
};

export default { metadata, tool, handler };
