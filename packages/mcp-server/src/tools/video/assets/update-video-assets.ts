// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.assets',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/video/v1/assets/{ASSET_ID}',
  operationId: 'update-asset',
};

export const tool: Tool = {
  name: 'update_video_assets',
  description:
    'Updates the details of an already-created Asset with the provided Asset ID. This currently supports only the `passthrough` field.',
  inputSchema: {
    type: 'object',
    properties: {
      ASSET_ID: {
        type: 'string',
      },
      meta: {
        type: 'object',
        description:
          'Customer provided metadata about this asset.\n\nNote: This metadata may be publicly available via the video player. Do not include PII or sensitive information.\n',
        properties: {
          creator_id: {
            type: 'string',
            description:
              'This is an identifier you provide to keep track of the creator of the asset. Max 128 code points.',
          },
          external_id: {
            type: 'string',
            description:
              'This is an identifier you provide to link the asset to your own data. Max 128 code points.',
          },
          title: {
            type: 'string',
            description: 'The asset title. Max 512 code points.',
          },
        },
      },
      passthrough: {
        type: 'string',
        description:
          "You can set this field to anything you want. It will be included in the asset details and related webhooks. If you're looking for more structured metadata, such as `title` or `external_id` , you can use the `meta` object instead. **Max: 255 characters**. In order to clear this value, the field should be included with an empty string value.",
      },
    },
    required: ['ASSET_ID'],
  },
  annotations: {},
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ASSET_ID, ...body } = args as any;
  try {
    return asTextContentResult(await client.video.assets.update(ASSET_ID, body));
  } catch (error) {
    if (error instanceof Mux.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
