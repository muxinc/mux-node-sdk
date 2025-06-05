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
  httpPath: '/video/v1/drm-configurations',
  operationId: 'list-drm-configurations',
};

export const tool: Tool = {
  name: 'list_video_drm_configurations',
  description: 'Returns a list of DRM Configurations',
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
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.video.drmConfigurations.list(body));
};

export default { metadata, tool, handler };
