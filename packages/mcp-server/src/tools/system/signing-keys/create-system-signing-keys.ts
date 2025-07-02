// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'system.signing_keys',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/system/v1/signing-keys',
  operationId: 'create-signing-key',
};

export const tool: Tool = {
  name: 'create_system_signing_keys',
  description:
    'Creates a new signing key pair. When creating a new signing key, the API will generate a 2048-bit RSA key-pair and return the private key and a generated key-id; the public key will be stored at Mux to validate signed tokens.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.system.signingKeys.create());
};

export default { metadata, tool, handler };
