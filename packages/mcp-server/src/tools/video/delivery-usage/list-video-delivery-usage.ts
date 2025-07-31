// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.delivery_usage',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/video/v1/delivery-usage',
  operationId: 'list-delivery-usage',
};

export const tool: Tool = {
  name: 'list_video_delivery_usage',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of delivery usage records and their associated Asset IDs or Live Stream IDs.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/delivery_report'\n      }\n    },\n    limit: {\n      type: 'integer',\n      description: 'Number of assets returned in this response. Default value is 100.'\n    },\n    timeframe: {\n      type: 'array',\n      items: {\n        type: 'integer'\n      }\n    },\n    total_row_count: {\n      type: 'integer'\n    }\n  },\n  required: [    'data',\n    'limit',\n    'timeframe',\n    'total_row_count'\n  ],\n  $defs: {\n    delivery_report: {\n      type: 'object',\n      properties: {\n        asset_duration: {\n          type: 'number',\n          description: 'The duration of the asset in seconds.'\n        },\n        asset_encoding_tier: {\n          type: 'string',\n          description: 'This field is deprecated. Please use `asset_video_quality` instead. The encoding tier that the asset was ingested at. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)',\n          enum: [            'smart',\n            'baseline',\n            'premium'\n          ]\n        },\n        asset_id: {\n          type: 'string',\n          description: 'Unique identifier for the asset.'\n        },\n        asset_resolution_tier: {\n          type: 'string',\n          description: 'The resolution tier that the asset was ingested at, affecting billing for ingest & storage',\n          enum: [            'audio-only',\n            '720p',\n            '1080p',\n            '1440p',\n            '2160p'\n          ]\n        },\n        asset_state: {\n          type: 'string',\n          description: 'The state of the asset.',\n          enum: [            'ready',\n            'errored',\n            'deleted'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          description: 'Time at which the asset was created. Measured in seconds since the Unix epoch.'\n        },\n        delivered_seconds: {\n          type: 'number',\n          description: 'Total number of delivered seconds during this time window.'\n        },\n        delivered_seconds_by_resolution: {\n          type: 'object',\n          description: 'Seconds delivered broken into resolution tiers. Each tier will only be displayed if there was content delivered in the tier.',\n          properties: {\n            tier_1080p: {\n              type: 'number',\n              description: 'Total number of delivered seconds during this time window that had a resolution larger than the 720p tier but less than or equal to the 1440p tier (over 921,600 and <= 2,073,600 pixels total).'\n            },\n            tier_1440p: {\n              type: 'number',\n              description: 'Total number of delivered seconds during this time window that had a resolution larger than the 1080p tier but less than or equal to the 2160p tier (over 2,073,600 and <= 4,194,304 pixels total).'\n            },\n            tier_2160p: {\n              type: 'number',\n              description: 'Total number of delivered seconds during this time window that had a resolution larger than the 1440p tier (over 4,194,304 pixels total).'\n            },\n            tier_720p: {\n              type: 'number',\n              description: 'Total number of delivered seconds during this time window that had a resolution within the 720p tier (up to 921,600 pixels total, based on typical 1280x720).'\n            },\n            tier_audio_only: {\n              type: 'number',\n              description: 'Total number of delivered seconds during this time window that had a resolution of audio only.'\n            }\n          }\n        },\n        asset_video_quality: {\n          type: 'string',\n          description: 'The video quality that the asset was ingested at. This field replaces `asset_encoding_tier`. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)',\n          enum: [            'basic',\n            'plus',\n            'premium'\n          ]\n        },\n        deleted_at: {\n          type: 'string',\n          description: 'If exists, time at which the asset was deleted. Measured in seconds since the Unix epoch.'\n        },\n        live_stream_id: {\n          type: 'string',\n          description: 'Unique identifier for the live stream that created the asset.'\n        },\n        passthrough: {\n          type: 'string',\n          description: 'The `passthrough` value for the asset.'\n        }\n      },\n      required: [        'asset_duration',\n        'asset_encoding_tier',\n        'asset_id',\n        'asset_resolution_tier',\n        'asset_state',\n        'created_at',\n        'delivered_seconds',\n        'delivered_seconds_by_resolution'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      asset_id: {
        type: 'string',
        description:
          'Filter response to return delivery usage for this asset only. You cannot specify both the `asset_id` and `live_stream_id` parameters together.',
      },
      limit: {
        type: 'integer',
        description: 'Number of items to include in the response',
      },
      live_stream_id: {
        type: 'string',
        description:
          'Filter response to return delivery usage for assets for this live stream. You cannot specify both the `asset_id` and `live_stream_id` parameters together.',
      },
      page: {
        type: 'integer',
        description: 'Offset by this many pages, of the size of `limit`',
      },
      timeframe: {
        type: 'array',
        description:
          'Time window to get delivery usage information. timeframe[0] indicates the start time, timeframe[1] indicates the end time in seconds since the Unix epoch. Default time window is 1 hour representing usage from 13th to 12th hour from when the request is made.',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.video.deliveryUsage.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
