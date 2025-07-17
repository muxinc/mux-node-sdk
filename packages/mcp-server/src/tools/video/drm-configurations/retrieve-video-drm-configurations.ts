// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.drm_configurations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/video/v1/drm-configurations/{DRM_CONFIGURATION_ID}',
  operationId: 'get-drm-configuration',
};

export const tool: Tool = {
  name: 'retrieve_video_drm_configurations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a single DRM Configuration.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/drm_configuration'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    drm_configuration: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the DRM Configuration. Max 255 characters.'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      DRM_CONFIGURATION_ID: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['DRM_CONFIGURATION_ID'],
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { DRM_CONFIGURATION_ID, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.video.drmConfigurations.retrieve(DRM_CONFIGURATION_ID)),
  );
};

export default { metadata, tool, handler };
