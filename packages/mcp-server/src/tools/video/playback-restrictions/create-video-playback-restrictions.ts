// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.playback_restrictions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/video/v1/playback-restrictions',
  operationId: 'create-playback-restriction',
};

export const tool: Tool = {
  name: 'create_video_playback_restrictions',
  description: 'Create a new Playback Restriction.',
  inputSchema: {
    type: 'object',
    properties: {
      referrer: {
        type: 'object',
        description: 'A list of domains allowed to play your videos.',
        properties: {
          allowed_domains: {
            type: 'array',
            description:
              'List of domains allowed to play videos. Possible values are\n  * `[]` Empty Array indicates deny video playback requests for all domains\n  * `["*"]` A Single Wildcard `*` entry means allow video playback requests from any domain\n  * `["*.example.com", "foo.com"]` A list of up to 10 domains or valid dns-style wildcards\n',
            items: {
              type: 'string',
            },
          },
          allow_no_referrer: {
            type: 'boolean',
            description:
              'A boolean to determine whether to allow or deny HTTP requests without `Referer` HTTP request header. Playback requests coming from non-web/native applications like iOS, Android or smart TVs will not have a `Referer` HTTP header. Set this value to `true` to allow these playback requests.',
          },
        },
        required: ['allowed_domains'],
      },
      user_agent: {
        type: 'object',
        description:
          'Rules that control what user agents are allowed to play your videos. Please see [Using User-Agent HTTP header for validation](https://docs.mux.com/guides/secure-video-playback#using-user-agent-http-header-for-validation) for more details on this feature.',
        properties: {
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
        required: [],
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.video.playbackRestrictions.create(body));
};

export default { metadata, tool, handler };
