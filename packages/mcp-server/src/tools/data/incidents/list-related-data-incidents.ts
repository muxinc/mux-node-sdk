// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
  description: 'Returns all the incidents that seem related to a specific incident.',
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
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { INCIDENT_ID, ...body } = args as any;
  return asTextContentResult(await client.data.incidents.listRelated(INCIDENT_ID, body));
};

export default { metadata, tool, handler };
