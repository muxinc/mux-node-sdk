// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mux-node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.playback_restrictions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/referrer',
  operationId: 'update-referrer-domain-restriction',
};

export const tool: Tool = {
  name: 'update_referrer_video_playback_restrictions',
  description:
    'Allows you to modify the list of domains or change how Mux validates playback requests without the `Referer` HTTP header. The Referrer restriction fully replaces the old list with this new list of domains.',
  inputSchema: {
    type: 'object',
    properties: {
      PLAYBACK_RESTRICTION_ID: {
        type: 'string',
      },
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
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { PLAYBACK_RESTRICTION_ID, ...body } = args as any;
  return asTextContentResult(
    await client.video.playbackRestrictions.updateReferrer(PLAYBACK_RESTRICTION_ID, body),
  );
};

export default { metadata, tool, handler };
