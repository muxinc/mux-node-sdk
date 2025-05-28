// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.assets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/video/v1/assets/{ASSET_ID}/input-info',
  operationId: 'get-asset-input-info',
};

export const tool: Tool = {
  name: 'retrieve_input_info_video_assets',
  description:
    'Returns a list of the input objects that were used to create the asset along with any settings that were applied to each input.',
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
  return client.video.assets.retrieveInputInfo(ASSET_ID);
};

export default { metadata, tool, handler };
