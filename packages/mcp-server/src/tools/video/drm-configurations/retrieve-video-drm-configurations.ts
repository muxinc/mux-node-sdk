// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mux-node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
  description: 'Retrieves a single DRM Configuration.',
  inputSchema: {
    type: 'object',
    properties: {
      DRM_CONFIGURATION_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { DRM_CONFIGURATION_ID, ...body } = args as any;
  return asTextContentResult(await client.video.drmConfigurations.retrieve(DRM_CONFIGURATION_ID));
};

export default { metadata, tool, handler };
