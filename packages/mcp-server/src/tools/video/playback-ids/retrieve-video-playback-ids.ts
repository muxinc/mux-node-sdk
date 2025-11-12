// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.playback_ids',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/video/v1/playback-ids/{PLAYBACK_ID}',
  operationId: 'get-asset-or-livestream-id',
};

export const tool: Tool = {
  name: 'retrieve_video_playback_ids',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the Identifier of the Asset or Live Stream associated with the Playback ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/playback_id_retrieve_response',\n  $defs: {\n    playback_id_retrieve_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The Playback ID used to retrieve the corresponding asset or the live stream ID'\n        },\n        object: {\n          type: 'object',\n          description: 'Describes the Asset or LiveStream object associated with the playback ID.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The identifier of the object.'\n            },\n            type: {\n              type: 'string',\n              description: 'Identifies the object type associated with the playback ID.',\n              enum: [                'asset',\n                'live_stream'\n              ]\n            }\n          },\n          required: [            'id',\n            'type'\n          ]\n        },\n        policy: {\n          $ref: '#/$defs/playback_policy'\n        }\n      },\n      required: [        'id',\n        'object',\n        'policy'\n      ]\n    },\n    playback_policy: {\n      type: 'string',\n      description: '* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}`\\n\\n* `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens.\\n\\n* `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).',\n      enum: [        'public',\n        'signed',\n        'drm'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      PLAYBACK_ID: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['PLAYBACK_ID'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { PLAYBACK_ID, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.video.playbackIds.retrieve(PLAYBACK_ID)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
