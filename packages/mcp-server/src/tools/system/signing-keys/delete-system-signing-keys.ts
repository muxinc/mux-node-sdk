// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'system.signing_keys',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_system_signing_keys',
  description:
    'Deletes an existing signing key. Use with caution, as this will invalidate any existing signatures and no JWTs can be signed using the key again.',
  inputSchema: {
    type: 'object',
    properties: {
      SIGNING_KEY_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const { SIGNING_KEY_ID, ...body } = args as any;
  return client.system.signingKeys.delete(SIGNING_KEY_ID);
};

export default { metadata, tool, handler };
