// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@mux/mcp/filtering';
import { asTextContentResult } from '@mux/mcp/tools/types';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAllows you to modify the list of domains or change how Mux validates playback requests without the `Referer` HTTP header. The Referrer restriction fully replaces the old list with this new list of domains.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/playback_restriction_response',\n  $defs: {\n    playback_restriction_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/playback_restriction'\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    playback_restriction: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the Playback Restriction. Max 255 characters.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch).'\n        },\n        referrer: {\n          type: 'object',\n          description: 'A list of domains allowed to play your videos.',\n          properties: {\n            allow_no_referrer: {\n              type: 'boolean',\n              description: 'A boolean to determine whether to allow or deny HTTP requests without `Referer` HTTP request header. Playback requests coming from non-web/native applications like iOS, Android or smart TVs will not have a `Referer` HTTP header. Set this value to `true` to allow these playback requests.'\n            },\n            allowed_domains: {\n              type: 'array',\n              description: 'List of domains allowed to play videos. Possible values are\\n  * `[]` Empty Array indicates deny video playback requests for all domains\\n  * `[\"*\"]` A Single Wildcard `*` entry means allow video playback requests from any domain\\n  * `[\"*.example.com\", \"foo.com\"]` A list of up to 10 domains or valid dns-style wildcards\\n',\n              items: {\n                type: 'string'\n              }\n            }\n          },\n          required: []\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch).'\n        },\n        user_agent: {\n          type: 'object',\n          description: 'Rules that control what user agents are allowed to play your videos. Please see [Using User-Agent HTTP header for validation](https://docs.mux.com/guides/secure-video-playback#using-user-agent-http-header-for-validation) for more details on this feature.',\n          properties: {\n            allow_high_risk_user_agent: {\n              type: 'boolean',\n              description: 'Whether or not to allow high risk user agents. The high risk user agents are defined by Mux.'\n            },\n            allow_no_user_agent: {\n              type: 'boolean',\n              description: 'Whether or not to allow views without a `User-Agent` HTTP request header.'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'referrer',\n        'updated_at',\n        'user_agent'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { PLAYBACK_RESTRICTION_ID, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      args,
      await client.video.playbackRestrictions.updateReferrer(PLAYBACK_RESTRICTION_ID, body),
    ),
  );
};

export default { metadata, tool, handler };
