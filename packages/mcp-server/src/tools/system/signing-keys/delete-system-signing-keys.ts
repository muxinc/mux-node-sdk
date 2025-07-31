// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'system.signing_keys',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/system/v1/signing-keys/{SIGNING_KEY_ID}',
  operationId: 'delete-signing-key',
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
    required: ['SIGNING_KEY_ID'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { SIGNING_KEY_ID, ...body } = args as any;
  const response = await client.system.signingKeys.delete(SIGNING_KEY_ID).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
