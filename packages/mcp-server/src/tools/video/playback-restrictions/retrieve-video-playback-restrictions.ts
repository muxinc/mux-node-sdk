// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mux-node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.playback_restrictions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}',
  operationId: 'get-playback-restriction',
};

export const tool: Tool = {
  name: 'retrieve_video_playback_restrictions',
  description: 'Retrieves a Playback Restriction associated with the unique identifier.',
  inputSchema: {
    type: 'object',
    properties: {
      PLAYBACK_RESTRICTION_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { PLAYBACK_RESTRICTION_ID, ...body } = args as any;
  return asTextContentResult(await client.video.playbackRestrictions.retrieve(PLAYBACK_RESTRICTION_ID));
};

export default { metadata, tool, handler };
