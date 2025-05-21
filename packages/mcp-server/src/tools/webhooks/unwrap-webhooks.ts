// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'webhooks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'unwrap_webhooks',
  description: 'Validates that the given payload was sent by Mux and parses the payload.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  return client.webhooks.unwrap();
};

export default { metadata, tool, handler };
