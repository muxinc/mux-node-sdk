// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'system.utilities',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/system/v1/whoami',
  operationId: 'get-whoami',
};

export const tool: Tool = {
  name: 'whoami_system_utilities',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve information about your current access token, including organization, environment, and permissions. Note that this can only be access with an access token, and _all_ access tokens can access this route, regardless of what permissions they have assigned.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/whoami_response',\n  $defs: {\n    whoami_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/utility_whoami_response'\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    utility_whoami_response: {\n      type: 'object',\n      properties: {\n        access_token_name: {\n          type: 'string'\n        },\n        environment_id: {\n          type: 'string'\n        },\n        environment_name: {\n          type: 'string'\n        },\n        environment_type: {\n          type: 'string'\n        },\n        organization_id: {\n          type: 'string'\n        },\n        organization_name: {\n          type: 'string'\n        },\n        permissions: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'access_token_name',\n        'environment_id',\n        'environment_name',\n        'environment_type',\n        'organization_id',\n        'organization_name',\n        'permissions'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.system.utilities.whoami()));
};

export default { metadata, tool, handler };
