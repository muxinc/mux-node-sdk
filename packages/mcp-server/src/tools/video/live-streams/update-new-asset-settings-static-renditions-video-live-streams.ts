// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.live_streams',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions',
  operationId: 'update-live-stream-new-asset-settings-static-renditions',
};

export const tool: Tool = {
  name: 'update_new_asset_settings_static_renditions_video_live_streams',
  description:
    "Updates a live stream's static renditions settings for new assets. Further assets made via this live stream will create static renditions per the settings provided. You must provide all static renditions desired.",
  inputSchema: {
    type: 'object',
    properties: {
      LIVE_STREAM_ID: {
        type: 'string',
      },
      static_renditions: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            resolution: {
              type: 'string',
              enum: [
                'highest',
                'audio-only',
                '2160p',
                '1440p',
                '1080p',
                '720p',
                '540p',
                '480p',
                '360p',
                '270p',
              ],
            },
            passthrough: {
              type: 'string',
              description:
                'Arbitrary user-supplied metadata set for the static rendition. Max 255 characters.',
            },
          },
          required: ['resolution'],
        },
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { LIVE_STREAM_ID, ...body } = args as any;
  return asTextContentResult(
    await client.video.liveStreams.updateNewAssetSettingsStaticRenditions(LIVE_STREAM_ID, body),
  );
};

export default { metadata, tool, handler };
