// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'system.signing_keys',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/system/v1/signing-keys/{SIGNING_KEY_ID}',
  operationId: 'get-signing-key',
};

export const tool: Tool = {
  name: 'retrieve_system_signing_keys',
  description:
    'Retrieves the details of a signing key that has previously\nbeen created. Supply the unique signing key ID that was returned from your\nprevious request, and Mux will return the corresponding signing key information.\n**The private key is not returned in this response.**\n',
  inputSchema: {
    type: 'object',
    properties: {
      SIGNING_KEY_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { SIGNING_KEY_ID, ...body } = args as any;
  return asTextContentResult(await client.system.signingKeys.retrieve(SIGNING_KEY_ID));
};

export default { metadata, tool, handler };
