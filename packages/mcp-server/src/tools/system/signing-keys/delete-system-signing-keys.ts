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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes an existing signing key. Use with caution, as this will invalidate any existing signatures and no JWTs can be signed using the key again.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      SIGNING_KEY_ID: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { SIGNING_KEY_ID, ...body } = args as any;
  const response = await client.system.signingKeys.delete(SIGNING_KEY_ID).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
