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
  httpPath: '/data/v1/incidents',
  operationId: 'list-incidents',
};

export const tool: Tool = {
  name: 'list_data_incidents',
  description: 'Returns a list of incidents.',
  inputSchema: {
    type: 'object',
    properties: {
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
      severity: {
        type: 'string',
        description: 'Severity to filter incidents by',
        enum: ['warning', 'alert'],
      },
      status: {
        type: 'string',
        description: 'Status to filter incidents by',
        enum: ['open', 'closed', 'expired'],
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.data.incidents.list(body));
};

export default { metadata, tool, handler };
