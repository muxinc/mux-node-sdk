// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.drm_configurations',
  operation: 'read',
  tags: [],
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

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const { DRM_CONFIGURATION_ID, ...body } = args as any;
  return client.video.drmConfigurations.retrieve(DRM_CONFIGURATION_ID);
};

export default { metadata, tool, handler };
