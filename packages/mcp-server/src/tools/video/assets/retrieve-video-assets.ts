// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.assets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/video/v1/assets/{ASSET_ID}',
  operationId: 'get-asset',
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
    required: ['ASSET_ID'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ASSET_ID, ...body } = args as any;
  try {
    return asTextContentResult(await client.video.assets.retrieve(ASSET_ID));
  } catch (error) {
    if (error instanceof Mux.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
