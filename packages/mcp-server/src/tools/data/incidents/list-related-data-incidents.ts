// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.incidents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/incidents/{INCIDENT_ID}/related',
  operationId: 'list-related-incidents',
};

export const tool: Tool = {
  name: 'list_related_data_incidents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns all the incidents that seem related to a specific incident.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/incident'\n      }\n    },\n    timeframe: {\n      type: 'array',\n      items: {\n        type: 'integer'\n      }\n    },\n    total_row_count: {\n      type: 'integer'\n    }\n  },\n  required: [    'data',\n    'timeframe',\n    'total_row_count'\n  ],\n  $defs: {\n    incident: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        affected_views: {\n          type: 'integer'\n        },\n        affected_views_per_hour: {\n          type: 'integer'\n        },\n        affected_views_per_hour_on_open: {\n          type: 'integer'\n        },\n        breakdowns: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              value: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'name',\n              'value'\n            ]\n          }\n        },\n        description: {\n          type: 'string'\n        },\n        error_description: {\n          type: 'string'\n        },\n        impact: {\n          type: 'string'\n        },\n        incident_key: {\n          type: 'string'\n        },\n        measured_value: {\n          type: 'number'\n        },\n        measured_value_on_close: {\n          type: 'number'\n        },\n        measurement: {\n          type: 'string'\n        },\n        notification_rules: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              action: {\n                type: 'string'\n              },\n              property_id: {\n                type: 'string'\n              },\n              rules: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    name: {\n                      type: 'string'\n                    },\n                    value: {\n                      type: 'string'\n                    }\n                  },\n                  required: [                    'id',\n                    'name',\n                    'value'\n                  ]\n                }\n              },\n              status: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'action',\n              'property_id',\n              'rules',\n              'status'\n            ]\n          }\n        },\n        notifications: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'integer'\n              },\n              attempted_at: {\n                type: 'string'\n              },\n              queued_at: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'attempted_at',\n              'queued_at'\n            ]\n          }\n        },\n        resolved_at: {\n          type: 'string'\n        },\n        sample_size: {\n          type: 'integer'\n        },\n        sample_size_unit: {\n          type: 'string'\n        },\n        severity: {\n          type: 'string'\n        },\n        started_at: {\n          type: 'string'\n        },\n        status: {\n          type: 'string'\n        },\n        threshold: {\n          type: 'number'\n        }\n      },\n      required: [        'id',\n        'affected_views',\n        'affected_views_per_hour',\n        'affected_views_per_hour_on_open',\n        'breakdowns',\n        'description',\n        'error_description',\n        'impact',\n        'incident_key',\n        'measured_value',\n        'measured_value_on_close',\n        'measurement',\n        'notification_rules',\n        'notifications',\n        'resolved_at',\n        'sample_size',\n        'sample_size_unit',\n        'severity',\n        'started_at',\n        'status',\n        'threshold'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      INCIDENT_ID: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'Number of items to include in the response',
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
      page: {
        type: 'integer',
        description: 'Offset by this many pages, of the size of `limit`',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['INCIDENT_ID'],
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { INCIDENT_ID, ...body } = args as any;
  const response = await client.data.incidents.listRelated(INCIDENT_ID, body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
