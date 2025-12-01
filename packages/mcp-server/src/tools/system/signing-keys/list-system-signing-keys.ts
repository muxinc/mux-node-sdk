// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'system.signing_keys',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/system/v1/signing-keys',
  operationId: 'list-signing-keys',
};

export const tool: Tool = {
  name: 'list_system_signing_keys',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of signing keys.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/signing_key'\n      }\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    signing_key: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the Signing Key.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Time at which the object was created. Measured in seconds since the Unix epoch.'\n        },\n        private_key: {\n          type: 'string',\n          description: 'A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). **Note that this value is only returned once when creating a URL signing key.**'\n        }\n      },\n      required: [        'id',\n        'created_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Number of items to include in the response',
      },
      page: {
        type: 'integer',
        description: 'Offset by this many pages, of the size of `limit`',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.system.signingKeys.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Mux.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
