// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.assets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/video/v1/assets/{ASSET_ID}/static-renditions/{STATIC_RENDITION_ID}',
  operationId: 'delete-asset-static-rendition',
};

export const tool: Tool = {
  name: 'delete_static_rendition_video_assets',
  description: 'Deletes a single static rendition for an asset',
  inputSchema: {
    type: 'object',
    properties: {
      ASSET_ID: {
        type: 'string',
      },
      STATIC_RENDITION_ID: {
        type: 'string',
      },
    },
    required: ['ASSET_ID', 'STATIC_RENDITION_ID'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ASSET_ID, STATIC_RENDITION_ID, ...body } = args as any;
  const response = await client.video.assets
    .deleteStaticRendition(ASSET_ID, STATIC_RENDITION_ID)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
