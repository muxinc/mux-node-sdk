// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.monitoring.metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/monitoring/metrics',
  operationId: 'list-monitoring-metrics',
};

export const tool: Tool = {
  name: 'list_monitoring_data_metrics',
  description: 'Lists available monitoring metrics.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.data.monitoring.metrics.list());
};

export default { metadata, tool, handler };
