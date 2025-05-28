// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.incidents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/incidents/{INCIDENT_ID}',
  operationId: 'get-incident',
};

export const tool: Tool = {
  name: 'retrieve_data_incidents',
  description: 'Returns the details of an incident.',
  inputSchema: {
    type: 'object',
    properties: {
      INCIDENT_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const { INCIDENT_ID, ...body } = args as any;
  return client.data.incidents.retrieve(INCIDENT_ID);
};

export default { metadata, tool, handler };
