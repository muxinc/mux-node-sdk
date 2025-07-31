// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.live_streams',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions',
  operationId: 'delete-live-stream-new-asset-settings-static-renditions',
};

export const tool: Tool = {
  name: 'delete_new_asset_settings_static_renditions_video_live_streams',
  description:
    "Deletes a live stream's static renditions settings for new assets. Further assets made via this live stream will not create static renditions unless re-added.",
  inputSchema: {
    type: 'object',
    properties: {
      LIVE_STREAM_ID: {
        type: 'string',
      },
    },
    required: ['LIVE_STREAM_ID'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { LIVE_STREAM_ID, ...body } = args as any;
  const response = await client.video.liveStreams
    .deleteNewAssetSettingsStaticRenditions(LIVE_STREAM_ID)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
