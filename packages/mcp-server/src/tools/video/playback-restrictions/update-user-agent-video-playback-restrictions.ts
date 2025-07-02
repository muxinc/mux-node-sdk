// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.playback_restrictions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/user_agent',
  operationId: 'update-user-agent-restriction',
};

export const tool: Tool = {
  name: 'update_user_agent_video_playback_restrictions',
  description:
    'Allows you to modify how Mux validates playback requests with different user agents.  Please see [Using User-Agent HTTP header for validation](https://docs.mux.com/guides/secure-video-playback#using-user-agent-http-header-for-validation) for more details on this feature.',
  inputSchema: {
    type: 'object',
    properties: {
      PLAYBACK_RESTRICTION_ID: {
        type: 'string',
      },
      allow_high_risk_user_agent: {
        type: 'boolean',
        description:
          'Whether or not to allow high risk user agents. The high risk user agents are defined by Mux.',
      },
      allow_no_user_agent: {
        type: 'boolean',
        description: 'Whether or not to allow views without a `User-Agent` HTTP request header.',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { PLAYBACK_RESTRICTION_ID, ...body } = args as any;
  return asTextContentResult(
    await client.video.playbackRestrictions.updateUserAgent(PLAYBACK_RESTRICTION_ID, body),
  );
};

export default { metadata, tool, handler };
