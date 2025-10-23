// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.assets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/video/v1/assets/{ASSET_ID}/playback-ids',
  operationId: 'create-asset-playback-id',
};

export const tool: Tool = {
  name: 'create_playback_id_video_assets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a playback ID that can be used to stream the asset to a viewer.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/playback_id',\n  $defs: {\n    playback_id: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the PlaybackID'\n        },\n        policy: {\n          $ref: '#/$defs/playback_policy'\n        },\n        drm_configuration_id: {\n          type: 'string',\n          description: 'The DRM configuration used by this playback ID. Must only be set when `policy` is set to `drm`.'\n        }\n      },\n      required: [        'id',\n        'policy'\n      ]\n    },\n    playback_policy: {\n      type: 'string',\n      description: '* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}`\\n\\n* `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens.\\n\\n* `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).',\n      enum: [        'public',\n        'signed',\n        'drm'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      ASSET_ID: {
        type: 'string',
      },
      drm_configuration_id: {
        type: 'string',
        description:
          'The DRM configuration used by this playback ID. Must only be set when `policy` is set to `drm`.',
      },
      policy: {
        $ref: '#/$defs/playback_policy',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['ASSET_ID'],
    $defs: {
      playback_policy: {
        type: 'string',
        description:
          '* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}`\n\n* `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens.\n\n* `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).',
        enum: ['public', 'signed', 'drm'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ASSET_ID, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.video.assets.createPlaybackId(ASSET_ID, body)),
  );
};

export default { metadata, tool, handler };
