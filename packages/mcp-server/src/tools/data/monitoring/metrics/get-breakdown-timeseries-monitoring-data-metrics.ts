// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.monitoring.metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown-timeseries',
  operationId: 'get-monitoring-breakdown-timeseries',
};

export const tool: Tool = {
  name: 'get_breakdown_timeseries_monitoring_data_metrics',
  description:
    'Gets timeseries of breakdown information for a specific dimension and metric. Each datapoint in the response represents 5 seconds worth of data.',
  inputSchema: {
    type: 'object',
    properties: {
      MONITORING_METRIC_ID: {
        type: 'string',
        enum: [
          'current-concurrent-viewers',
          'current-rebuffering-percentage',
          'exits-before-video-start',
          'playback-failure-percentage',
          'current-average-bitrate',
          'video-startup-failure-percentage',
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
          'view_has_ad',
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
      limit: {
        type: 'integer',
        description:
          "Number of items to include in each timestamp's `value` list.\n\nThe default is 10, and the maximum is 100.\n",
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
      timeframe: {
        type: 'array',
        description:
          'Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nThe default for this is the last 60 seconds of available data. Timeframes larger than 10 minutes are not allowed, and must be within the last 24 hours.\n',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const { MONITORING_METRIC_ID, ...body } = args as any;
  return client.data.monitoring.metrics.getBreakdownTimeseries(MONITORING_METRIC_ID, body);
};

export default { metadata, tool, handler };
