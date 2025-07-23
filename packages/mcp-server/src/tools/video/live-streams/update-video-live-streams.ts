// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.live_streams',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}',
  operationId: 'update-live-stream',
};

export const tool: Tool = {
  name: 'update_video_live_streams',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates the parameters of a previously-created live stream. This currently supports a subset of variables. Supply the live stream ID and the updated parameters and Mux will return the corresponding live stream information. The information returned will be the same after update as for subsequent get live stream requests.",
  inputSchema: {
    type: 'object',
    properties: {
      LIVE_STREAM_ID: {
        type: 'string',
      },
      latency_mode: {
        type: 'string',
        description:
          'Latency is the time from when the streamer transmits a frame of video to when you see it in the player. Set this as an alternative to setting low latency or reduced latency flags.',
        enum: ['low', 'reduced', 'standard'],
      },
      max_continuous_duration: {
        type: 'integer',
        description:
          'The time in seconds a live stream may be continuously active before being disconnected. Defaults to 12 hours.',
      },
      meta: {
        type: 'object',
        description:
          'Customer provided metadata about this live stream.\n\nNote: This metadata may be publicly available via the video player. Do not include PII or sensitive information.\n',
        properties: {
          title: {
            type: 'string',
            description: 'The live stream title. Max 512 code points.',
          },
        },
      },
      new_asset_settings: {
        type: 'object',
        description:
          'Updates the new asset settings to use to generate a new asset for this live stream. Only the `mp4_support`, `master_access`, and `video_quality` settings may be updated.\n',
        properties: {
          master_access: {
            type: 'string',
            description: 'Add or remove access to the master version of the video.',
            enum: ['temporary', 'none'],
          },
          meta: {
            type: 'object',
            description:
              'Customer provided metadata about this asset.\n\nNote: This metadata may be publicly available via the video player. Do not include PII or sensitive information.\n',
            properties: {
              creator_id: {
                type: 'string',
                description:
                  'This is an identifier you provide to keep track of the creator of the asset. Max 128 code points.',
              },
              external_id: {
                type: 'string',
                description:
                  'This is an identifier you provide to link the asset to your own data. Max 128 code points.',
              },
              title: {
                type: 'string',
                description: 'The asset title. Max 512 code points.',
              },
            },
          },
          mp4_support: {
            type: 'string',
            description:
              'Deprecated. See the [Static Renditions API](https://www.mux.com/docs/guides/enable-static-mp4-renditions#during-live-stream-creation) for the updated API.\nSpecify what level of support for mp4 playback should be added to new assets generated from this live stream.\n* The `none` option disables MP4 support for new assets. MP4 files will not be produced for an asset generated from this live stream.\n* The `capped-1080p` option produces a single MP4 file, called `capped-1080p.mp4`, with the video resolution capped at 1080p. This option produces an `audio.m4a` file for an audio-only asset.\n* The `audio-only` option produces a single M4A file, called `audio.m4a` for a video or an audio-only asset. MP4 generation will error when this option is specified for a video-only asset.\n* The `audio-only,capped-1080p` option produces both the `audio.m4a` and `capped-1080p.mp4` files. Only the `capped-1080p.mp4` file is produced for a video-only asset, while only the `audio.m4a` file is produced for an audio-only asset.\n* The `standard`(deprecated) option produces up to three MP4 files with different levels of resolution (`high.mp4`, `medium.mp4`, `low.mp4`, or `audio.m4a` for an audio-only asset).',
            enum: ['none', 'standard', 'capped-1080p', 'audio-only', 'audio-only,capped-1080p'],
          },
          video_quality: {
            type: 'string',
            description:
              'The video quality controls the cost, quality, and available platform features for the asset. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)',
            enum: ['plus', 'premium'],
          },
        },
      },
      passthrough: {
        type: 'string',
        description:
          'Arbitrary user-supplied metadata set for the live stream. Max 255 characters. In order to clear this value, the field should be included with an empty-string value.',
      },
      reconnect_slate_url: {
        type: 'string',
        description:
          'The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. This file will be downloaded each time a new recorded asset is created from the live stream. Set this to a blank string to clear the value so that the default slate media will be used.',
      },
      reconnect_window: {
        type: 'number',
        description:
          'When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live stream finished and completing the recorded asset.\n\nIf not specified directly, Standard Latency streams have a Reconnect Window of 60 seconds; Reduced and Low Latency streams have a default of 0 seconds, or no Reconnect Window. For that reason, we suggest specifying a value other than zero for Reduced and Low Latency streams.\n\nReduced and Low Latency streams with a Reconnect Window greater than zero will insert slate media into the recorded asset while waiting for the streaming software to reconnect or when there are brief interruptions in the live stream media. When using a Reconnect Window setting higher than 60 seconds with a Standard Latency stream, we highly recommend enabling slate with the `use_slate_for_standard_latency` option.\n',
      },
      use_slate_for_standard_latency: {
        type: 'boolean',
        description:
          'By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. Setting this to true enables slate insertion on a Standard Latency stream.',
      },
    },
    required: ['LIVE_STREAM_ID'],
  },
  annotations: {},
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { LIVE_STREAM_ID, ...body } = args as any;
  return asTextContentResult(await client.video.liveStreams.update(LIVE_STREAM_ID, body));
};

export default { metadata, tool, handler };
