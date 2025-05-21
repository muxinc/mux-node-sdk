// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.assets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_video_assets',
  description:
    'Retrieves the details of an asset that has previously been created. Supply the unique asset ID that was returned from your previous request, and Mux will return the corresponding asset information. The same information is returned when creating an asset.',
  inputSchema: {
    type: 'object',
    properties: {
      ASSET_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ASSET_ID, ...body } = args as any;
  return client.video.assets.retrieve(ASSET_ID);
};

export default { metadata, tool, handler };
