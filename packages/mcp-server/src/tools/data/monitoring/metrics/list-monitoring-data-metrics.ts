// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.monitoring.metrics',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_monitoring_data_metrics',
  description: 'Lists available monitoring metrics.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  return client.data.monitoring.metrics.list();
};

export default { metadata, tool, handler };
