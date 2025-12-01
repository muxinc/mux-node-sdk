// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets histogram timeseries information for a specific metric. This API is now deprecated, please use the `Get Monitoring Histogram Timeseries` API.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/real_time_histogram_timeseries_response',\n  $defs: {\n    real_time_histogram_timeseries_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              average: {\n                type: 'number'\n              },\n              bucket_values: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    count: {\n                      type: 'integer'\n                    },\n                    percentage: {\n                      type: 'number'\n                    }\n                  },\n                  required: [                    'count',\n                    'percentage'\n                  ]\n                }\n              },\n              max_percentage: {\n                type: 'number'\n              },\n              median: {\n                type: 'number'\n              },\n              p95: {\n                type: 'number'\n              },\n              sum: {\n                type: 'integer'\n              },\n              timestamp: {\n                type: 'string'\n              }\n            },\n            required: [              'average',\n              'bucket_values',\n              'max_percentage',\n              'median',\n              'p95',\n              'sum',\n              'timestamp'\n            ]\n          }\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            bucket_unit: {\n              type: 'string'\n            },\n            buckets: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  end: {\n                    type: 'integer'\n                  },\n                  start: {\n                    type: 'integer'\n                  }\n                },\n                required: [                  'end',\n                  'start'\n                ]\n              }\n            }\n          },\n          required: [            'bucket_unit',\n            'buckets'\n          ]\n        },\n        timeframe: {\n          type: 'array',\n          items: {\n            type: 'integer'\n          }\n        },\n        total_row_count: {\n          type: 'integer'\n        }\n      },\n      required: [        'data',\n        'meta',\n        'timeframe',\n        'total_row_count'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['REALTIME_HISTOGRAM_METRIC_ID'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { REALTIME_HISTOGRAM_METRIC_ID, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.data.realTime.retrieveHistogramTimeseries(REALTIME_HISTOGRAM_METRIC_ID, body),
      ),
    );
  } catch (error) {
    if (error instanceof Mux.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
