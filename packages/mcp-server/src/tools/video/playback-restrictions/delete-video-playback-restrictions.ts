// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.playback_restrictions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}',
  operationId: 'delete-playback-restriction',
};

export const tool: Tool = {
  name: 'delete_video_playback_restrictions',
  description: 'Deletes a single Playback Restriction.',
  inputSchema: {
    type: 'object',
    properties: {
      PLAYBACK_RESTRICTION_ID: {
        type: 'string',
      },
    },
    required: ['PLAYBACK_RESTRICTION_ID'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { PLAYBACK_RESTRICTION_ID, ...body } = args as any;
  const response = await client.video.playbackRestrictions.delete(PLAYBACK_RESTRICTION_ID).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
