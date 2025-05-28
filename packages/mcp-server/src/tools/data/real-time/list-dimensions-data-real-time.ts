// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.real_time',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/realtime/dimensions',
  operationId: 'list-realtime-dimensions',
};

export const tool: Tool = {
  name: 'list_dimensions_data_real_time',
  description:
    'Lists available real-time dimensions. This API is now deprecated, please use the `List Monitoring Dimensions` API.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  return client.data.realTime.listDimensions();
};

export default { metadata, tool, handler };
