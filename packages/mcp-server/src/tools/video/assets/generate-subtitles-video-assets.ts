// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mux-node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.assets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}/generate-subtitles',
  operationId: 'generate-asset-track-subtitles',
};

export const tool: Tool = {
  name: 'generate_subtitles_video_assets',
  description:
    'Generates subtitles (captions) for a given audio track. This API can be used for up to 7 days after an asset is created.',
  inputSchema: {
    type: 'object',
    properties: {
      ASSET_ID: {
        type: 'string',
      },
      TRACK_ID: {
        type: 'string',
      },
      generated_subtitles: {
        type: 'array',
        description: 'Generate subtitle tracks using automatic speech recognition with this configuration.',
        items: {
          type: 'object',
          properties: {
            language_code: {
              type: 'string',
              description: 'The language to generate subtitles in.',
              enum: [
                'en',
                'es',
                'it',
                'pt',
                'de',
                'fr',
                'pl',
                'ru',
                'nl',
                'ca',
                'tr',
                'sv',
                'uk',
                'no',
                'fi',
                'sk',
                'el',
                'cs',
                'hr',
                'da',
                'ro',
                'bg',
              ],
            },
            name: {
              type: 'string',
              description: 'A name for this subtitle track.',
            },
            passthrough: {
              type: 'string',
              description: 'Arbitrary metadata set for the subtitle track. Max 255 characters.',
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ASSET_ID, TRACK_ID, ...body } = args as any;
  return asTextContentResult(await client.video.assets.generateSubtitles(ASSET_ID, TRACK_ID, body));
};

export default { metadata, tool, handler };
