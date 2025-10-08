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
  httpPath: '/video/v1/assets/{ASSET_ID}/static-renditions',
  operationId: 'create-asset-static-rendition',
};

export const tool: Tool = {
  name: 'create_static_rendition_video_assets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a static rendition (i.e. MP4) for an asset\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/asset_create_static_rendition_response'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    asset_create_static_rendition_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of this static rendition, used in managing this static rendition. This field is only valid for `static_renditions`, not for `mp4_support`.'\n        },\n        bitrate: {\n          type: 'integer',\n          description: 'The bitrate in bits per second'\n        },\n        ext: {\n          type: 'string',\n          description: 'Extension of the static rendition file',\n          enum: [            'mp4',\n            'm4a'\n          ]\n        },\n        filesize: {\n          type: 'string',\n          description: 'The file size in bytes'\n        },\n        height: {\n          type: 'integer',\n          description: 'The height of the static rendition\\'s file in pixels'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the static rendition file',\n          enum: [            'low.mp4',\n            'medium.mp4',\n            'high.mp4',\n            'highest.mp4',\n            'audio.m4a',\n            'capped-1080p.mp4',\n            '2160p.mp4',\n            '1440p.mp4',\n            '1080p.mp4',\n            '720p.mp4',\n            '540p.mp4',\n            '480p.mp4',\n            '360p.mp4',\n            '270p.mp4'\n          ]\n        },\n        passthrough: {\n          type: 'string',\n          description: 'Arbitrary user-supplied metadata set for the static rendition. Max 255 characters.'\n        },\n        resolution: {\n          type: 'string',\n          description: 'Indicates the resolution of this specific MP4 version of this asset. This field is only valid for `static_renditions`, not for `mp4_support`.',\n          enum: [            'highest',\n            'audio-only',\n            '2160p',\n            '1440p',\n            '1080p',\n            '720p',\n            '540p',\n            '480p',\n            '360p',\n            '270p'\n          ]\n        },\n        resolution_tier: {\n          type: 'string',\n          description: 'Indicates the resolution tier of this specific MP4 version of this asset. This field is only valid for `static_renditions`, not for `mp4_support`.',\n          enum: [            '2160p',\n            '1440p',\n            '1080p',\n            '720p',\n            'audio-only'\n          ]\n        },\n        status: {\n          type: 'string',\n          description: 'Indicates the status of this specific MP4 version of this asset. This field is only valid for `static_renditions`, not for `mp4_support`.\\n* `ready` indicates the MP4 has been generated and is ready for download\\n* `preparing` indicates the asset has not been ingested or the static rendition is still being generated after an asset is ready\\n* `skipped` indicates the static rendition will not be generated because the requested resolution conflicts with the asset attributes after the asset has been ingested\\n* `errored` indicates the static rendition cannot be generated. For example, an asset could not be ingested',\n          enum: [            'ready',\n            'preparing',\n            'skipped',\n            'errored'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'Indicates the static rendition type of this specific MP4 version of this asset. This field is only valid for `static_renditions`, not for `mp4_support`.',\n          enum: [            'standard',\n            'advanced'\n          ]\n        },\n        width: {\n          type: 'integer',\n          description: 'The width of the static rendition\\'s file in pixels'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      ASSET_ID: {
        type: 'string',
      },
      resolution: {
        type: 'string',
        enum: ['highest', 'audio-only', '2160p', '1440p', '1080p', '720p', '540p', '480p', '360p', '270p'],
      },
      passthrough: {
        type: 'string',
        description: 'Arbitrary user-supplied metadata set for the static rendition. Max 255 characters.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['ASSET_ID', 'resolution'],
  },
  annotations: {},
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ASSET_ID, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.video.assets.createStaticRendition(ASSET_ID, body)),
  );
};

export default { metadata, tool, handler };
