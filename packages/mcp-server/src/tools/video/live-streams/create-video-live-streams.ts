// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mux-node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.live_streams',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/video/v1/live-streams',
  operationId: 'create-live-stream',
};

export const tool: Tool = {
  name: 'create_video_live_streams',
  description:
    'Creates a new live stream. Once created, an encoder can connect to Mux via the specified stream key and begin streaming to an audience.',
  inputSchema: {
    type: 'object',
    properties: {
      advanced_playback_policies: {
        type: 'array',
        description:
          'An array of playback policy objects that you want applied on this live stream and available through `playback_ids`. `advanced_playback_policies` must be used instead of `playback_policies` when creating a DRM playback ID.\n',
        items: {
          type: 'object',
          properties: {
            drm_configuration_id: {
              type: 'string',
              description:
                'The DRM configuration used by this playback ID. Must only be set when `policy` is set to `drm`.',
            },
            policy: {
              $ref: '#/$defs/playback_policy',
            },
          },
          required: [],
        },
      },
      audio_only: {
        type: 'boolean',
        description:
          'Force the live stream to only process the audio track when the value is set to true. Mux drops the video track if broadcasted.',
      },
      embedded_subtitles: {
        type: 'array',
        description: 'Describe the embedded closed caption contents of the incoming live stream.',
        items: {
          type: 'object',
          properties: {
            language_channel: {
              type: 'string',
              description: 'CEA-608 caption channel to read data from.',
              enum: ['cc1', 'cc2', 'cc3', 'cc4'],
            },
            language_code: {
              type: 'string',
              description: 'The language of the closed caption stream. Value must be BCP 47 compliant.',
            },
            name: {
              type: 'string',
              description: 'A name for this live stream closed caption track.',
            },
            passthrough: {
              type: 'string',
              description:
                'Arbitrary user-supplied metadata set for the live stream closed caption track. Max 255 characters.',
            },
          },
          required: [],
        },
      },
      generated_subtitles: {
        type: 'array',
        description:
          'Configure the incoming live stream to include subtitles created with automatic speech recognition. Each Asset created from a live stream with `generated_subtitles` configured will automatically receive two text tracks. The first of these will have a `text_source` value of `generated_live`, and will be available with `ready` status as soon as the stream is live. The second text track will have a `text_source` value of `generated_live_final` and will contain subtitles with improved accuracy, timing, and formatting. However, `generated_live_final` tracks will not be available in `ready` status until the live stream ends. If an Asset has both `generated_live` and `generated_live_final` tracks that are `ready`, then only the `generated_live_final` track will be included during playback.',
        items: {
          type: 'object',
          properties: {
            language_code: {
              type: 'string',
              description: 'The language to generate subtitles in.',
              enum: ['en', 'en-US'],
            },
            name: {
              type: 'string',
              description: 'A name for this live stream subtitle track.',
            },
            passthrough: {
              type: 'string',
              description: 'Arbitrary metadata set for the live stream subtitle track. Max 255 characters.',
            },
            transcription_vocabulary_ids: {
              type: 'array',
              description:
                'Unique identifiers for existing Transcription Vocabularies to use while generating subtitles for the live stream. If the Transcription Vocabularies provided collectively have more than 1000 phrases, only the first 1000 phrases will be included.',
              items: {
                type: 'string',
              },
            },
          },
          required: [],
        },
      },
      latency_mode: {
        type: 'string',
        description:
          'Latency is the time from when the streamer transmits a frame of video to when you see it in the player. Set this as an alternative to setting low latency or reduced latency flags.',
        enum: ['low', 'reduced', 'standard'],
      },
      low_latency: {
        type: 'boolean',
        description:
          'This field is deprecated. Please use `latency_mode` instead. Latency is the time from when the streamer transmits a frame of video to when you see it in the player. Setting this option will enable compatibility with the LL-HLS specification for low-latency streaming. This typically has lower latency than Reduced Latency streams, and cannot be combined with Reduced Latency.',
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
        required: [],
      },
      new_asset_settings: {
        $ref: '#/$defs/asset_options',
      },
      passthrough: {
        type: 'string',
      },
      playback_policies: {
        type: 'array',
        description:
          'An array of playback policy names that you want applied to this live stream and available through `playback_ids`. Options include:\n\n* `"public"` (anyone with the playback URL can stream the live stream).\n* `"signed"` (an additional access token is required to play the live stream).\n\nIf no `playback_policies` is set, the live stream will have no playback IDs and will therefore not be playable. For simplicity, a single string name can be used in place of the array in the case of only one playback policy.\n',
        items: {
          $ref: '#/$defs/playback_policy',
        },
      },
      playback_policy: {
        type: 'array',
        description: 'Deprecated. Use `playback_policies` instead, which accepts an identical type.',
        items: {
          $ref: '#/$defs/playback_policy',
        },
      },
      reconnect_slate_url: {
        type: 'string',
        description:
          'The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. This file will be downloaded each time a new recorded asset is created from the live stream. If this is not set, the default slate media will be used.',
      },
      reconnect_window: {
        type: 'number',
        description:
          'When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live stream finished and completing the recorded asset. Defaults to 60 seconds on the API if not specified.\n\nIf not specified directly, Standard Latency streams have a Reconnect Window of 60 seconds; Reduced and Low Latency streams have a default of 0 seconds, or no Reconnect Window. For that reason, we suggest specifying a value other than zero for Reduced and Low Latency streams.\n\nReduced and Low Latency streams with a Reconnect Window greater than zero will insert slate media into the recorded asset while waiting for the streaming software to reconnect or when there are brief interruptions in the live stream media. When using a Reconnect Window setting higher than 60 seconds with a Standard Latency stream, we highly recommend enabling slate with the `use_slate_for_standard_latency` option.\n',
      },
      reduced_latency: {
        type: 'boolean',
        description:
          'This field is deprecated. Please use `latency_mode` instead. Latency is the time from when the streamer transmits a frame of video to when you see it in the player. Set this if you want lower latency for your live stream. Read more here: https://mux.com/blog/reduced-latency-for-mux-live-streaming-now-available/',
      },
      simulcast_targets: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            url: {
              type: 'string',
              description:
                'The RTMP(s) or SRT endpoint for a simulcast destination.\n* For RTMP(s) destinations, this should include the application name for the third party live streaming service, for example: `rtmp://live.example.com/app`.\n* For SRT destinations, this should be a fully formed SRT connection string, for example: `srt://srt-live.example.com:1234?streamid={stream_key}&passphrase={srt_passphrase}`.\n\nNote: SRT simulcast targets can only be used when an source is connected over SRT.\n',
            },
            passthrough: {
              type: 'string',
              description: 'Arbitrary user-supplied metadata set by you when creating a simulcast target.',
            },
            stream_key: {
              type: 'string',
              description:
                'Stream Key represents a stream identifier on the third party live streaming service to send the parent live stream to. Only used for RTMP(s) simulcast destinations.',
            },
          },
          required: ['url'],
        },
      },
      test: {
        type: 'boolean',
        description:
          'Marks the live stream as a test live stream when the value is set to true. A test live stream can help evaluate the Mux Video APIs without incurring any cost. There is no limit on number of test live streams created. Test live streams are watermarked with the Mux logo and limited to 5 minutes. The test live stream is disabled after the stream is active for 5 mins and the recorded asset also deleted after 24 hours.',
      },
      use_slate_for_standard_latency: {
        type: 'boolean',
        description:
          'By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. Setting this to true enables slate insertion on a Standard Latency stream.',
      },
    },
    $defs: {
      playback_policy: {
        type: 'string',
        description:
          '* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}`\n\n* `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens.\n\n* `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).',
        enum: ['public', 'signed', 'drm'],
      },
      asset_options: {
        type: 'object',
        properties: {
          advanced_playback_policies: {
            type: 'array',
            description:
              'An array of playback policy objects that you want applied to this asset and available through `playback_ids`. `advanced_playback_policies` must be used instead of `playback_policies` when creating a DRM playback ID.\n',
            items: {
              type: 'object',
              properties: {
                drm_configuration_id: {
                  type: 'string',
                  description:
                    'The DRM configuration used by this playback ID. Must only be set when `policy` is set to `drm`.',
                },
                policy: {
                  $ref: '#/$defs/playback_policy',
                },
              },
              required: [],
            },
          },
          encoding_tier: {
            type: 'string',
            description:
              'This field is deprecated. Please use `video_quality` instead. The encoding tier informs the cost, quality, and available platform features for the asset. The default encoding tier for an account can be set in the Mux Dashboard. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)',
            enum: ['smart', 'baseline', 'premium'],
          },
          input: {
            type: 'array',
            description: 'Deprecated. Use `inputs` instead, which accepts an identical type.',
            items: {
              type: 'object',
              description:
                'An array of objects that each describe an input file to be used to create the asset. As a shortcut, `input` can also be a string URL for a file when only one input file is used. See `input[].url` for requirements.',
              properties: {
                closed_captions: {
                  type: 'boolean',
                  description:
                    'Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). This optional parameter should be used for tracks with `type` of `text` and `text_type` set to `subtitles`.',
                },
                end_time: {
                  type: 'number',
                  description:
                    "The time offset in seconds from the beginning of the video, indicating the clip's ending marker. The default value is the duration of the video when not included. This parameter is only applicable for creating clips when `input.url` has `mux://assets/{asset_id}` format.",
                },
                generated_subtitles: {
                  type: 'array',
                  description:
                    'Generate subtitle tracks using automatic speech recognition with this configuration. This may only be provided for the first input object (the main input file). For direct uploads, this first input should omit the url parameter, as the main input file is provided via the direct upload. This will create subtitles based on the audio track ingested from that main input file. Note that subtitle generation happens after initial ingest, so the generated tracks will be in the `preparing` state when the asset transitions to `ready`.',
                  items: {
                    type: 'object',
                    properties: {
                      language_code: {
                        type: 'string',
                        description: 'The language to generate subtitles in.',
                        enum: [
                          'en',
                          'es',
                          'it',
                          'pt',
                          'de',
                          'fr',
                          'pl',
                          'ru',
                          'nl',
                          'ca',
                          'tr',
                          'sv',
                          'uk',
                          'no',
                          'fi',
                          'sk',
                          'el',
                          'cs',
                          'hr',
                          'da',
                          'ro',
                          'bg',
                        ],
                      },
                      name: {
                        type: 'string',
                        description: 'A name for this subtitle track.',
                      },
                      passthrough: {
                        type: 'string',
                        description: 'Arbitrary metadata set for the subtitle track. Max 255 characters.',
                      },
                    },
                    required: [],
                  },
                },
                language_code: {
                  type: 'string',
                  description:
                    'The language code value must be a valid [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value. For example, `en` for English or `en-US` for the US version of English. This parameter is required for `text` and `audio` track types.',
                },
                name: {
                  type: 'string',
                  description:
                    'The name of the track containing a human-readable description. This value must be unique within each group of `text` or `audio` track types. The HLS manifest will associate a subtitle text track with this value. For example, the value should be "English" for a subtitle text track with `language_code` set to `en`. This optional parameter should be used only for `text` and `audio` type tracks. This parameter can be optionally provided for the first video input to denote the name of the muxed audio track if present. If this parameter is not included, Mux will auto-populate based on the `input[].language_code` value.',
                },
                overlay_settings: {
                  type: 'object',
                  description:
                    'An object that describes how the image file referenced in URL should be placed over the video (i.e. watermarking). Ensure that the URL is active and persists the entire lifespan of the video object.',
                  properties: {
                    height: {
                      type: 'string',
                      description:
                        'How tall the overlay should appear. Can be expressed as a percent ("10%") or as a pixel value ("100px"). If both width and height are left blank the height will be the true pixels of the image, applied as if the video has been scaled to fit a 1920x1080 frame. If width is supplied with no height, the height will scale proportionally to the width.',
                    },
                    horizontal_align: {
                      type: 'string',
                      description:
                        'Where the horizontal positioning of the overlay/watermark should begin from.',
                      enum: ['left', 'center', 'right'],
                    },
                    horizontal_margin: {
                      type: 'string',
                      description:
                        'The distance from the horizontal_align starting point and the image\'s closest edge. Can be expressed as a percent ("10%") or as a pixel value ("100px"). Negative values will move the overlay offscreen. In the case of \'center\', a positive value will shift the image towards the right and and a negative value will shift it towards the left.',
                    },
                    opacity: {
                      type: 'string',
                      description:
                        'How opaque the overlay should appear, expressed as a percent. (Default 100%)',
                    },
                    vertical_align: {
                      type: 'string',
                      description:
                        'Where the vertical positioning of the overlay/watermark should begin from. Defaults to `"top"`',
                      enum: ['top', 'middle', 'bottom'],
                    },
                    vertical_margin: {
                      type: 'string',
                      description:
                        'The distance from the vertical_align starting point and the image\'s closest edge. Can be expressed as a percent ("10%") or as a pixel value ("100px"). Negative values will move the overlay offscreen. In the case of \'middle\', a positive value will shift the overlay towards the bottom and and a negative value will shift it towards the top.',
                    },
                    width: {
                      type: 'string',
                      description:
                        'How wide the overlay should appear. Can be expressed as a percent ("10%") or as a pixel value ("100px"). If both width and height are left blank the width will be the true pixels of the image, applied as if the video has been scaled to fit a 1920x1080 frame. If height is supplied with no width, the width will scale proportionally to the height.',
                    },
                  },
                  required: [],
                },
                passthrough: {
                  type: 'string',
                  description:
                    'This optional parameter should be used for tracks with `type` of `text` and `text_type` set to `subtitles`.',
                },
                start_time: {
                  type: 'number',
                  description:
                    "The time offset in seconds from the beginning of the video indicating the clip's starting marker. The default value is 0 when not included. This parameter is only applicable for creating clips when `input.url` has `mux://assets/{asset_id}` format.",
                },
                text_type: {
                  type: 'string',
                  description:
                    'Type of text track. This parameter only supports subtitles value. For more information on Subtitles / Closed Captions, [see this blog post](https://mux.com/blog/subtitles-captions-webvtt-hls-and-those-magic-flags/). This parameter is required for `text` type tracks.',
                  enum: ['subtitles'],
                },
                type: {
                  type: 'string',
                  description: 'This parameter is required for `text` type tracks.',
                  enum: ['video', 'audio', 'text'],
                },
                url: {
                  type: 'string',
                  description:
                    'The URL of the file that Mux should download and use.\n* For the main input file, this should be the URL to the muxed file for Mux to download, for example an MP4, MOV, MKV, or TS file. Mux supports most audio/video file formats and codecs, but for fastest processing, you should [use standard inputs wherever possible](https://docs.mux.com/guides/minimize-processing-time).\n* For `audio` tracks, the URL is the location of the audio file for Mux to download, for example an M4A, WAV, or MP3 file. Mux supports most audio file formats and codecs, but for fastest processing, you should [use standard inputs wherever possible](https://docs.mux.com/guides/minimize-processing-time).\n* For `text` tracks, the URL is the location of subtitle/captions file. Mux supports [SubRip Text (SRT)](https://en.wikipedia.org/wiki/SubRip) and [Web Video Text Tracks](https://www.w3.org/TR/webvtt1/) formats for ingesting Subtitles and Closed Captions.\n* For Watermarking or Overlay, the URL is the location of the watermark image. The maximum size is 4096x4096.\n* When creating clips from existing Mux assets, the URL is defined with `mux://assets/{asset_id}` template where `asset_id` is the Asset Identifier for creating the clip from.\nThe url property may be omitted on the first input object when providing asset settings for LiveStream and Upload objects, in order to configure settings related to the primary (live stream or direct upload) input.\n',
                },
              },
              required: [],
            },
          },
          inputs: {
            type: 'array',
            description:
              'An array of objects that each describe an input file to be used to create the asset. As a shortcut, input can also be a string URL for a file when only one input file is used. See `input[].url` for requirements.',
            items: {
              type: 'object',
              description:
                'An array of objects that each describe an input file to be used to create the asset. As a shortcut, `input` can also be a string URL for a file when only one input file is used. See `input[].url` for requirements.',
              properties: {
                closed_captions: {
                  type: 'boolean',
                  description:
                    'Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). This optional parameter should be used for tracks with `type` of `text` and `text_type` set to `subtitles`.',
                },
                end_time: {
                  type: 'number',
                  description:
                    "The time offset in seconds from the beginning of the video, indicating the clip's ending marker. The default value is the duration of the video when not included. This parameter is only applicable for creating clips when `input.url` has `mux://assets/{asset_id}` format.",
                },
                generated_subtitles: {
                  type: 'array',
                  description:
                    'Generate subtitle tracks using automatic speech recognition with this configuration. This may only be provided for the first input object (the main input file). For direct uploads, this first input should omit the url parameter, as the main input file is provided via the direct upload. This will create subtitles based on the audio track ingested from that main input file. Note that subtitle generation happens after initial ingest, so the generated tracks will be in the `preparing` state when the asset transitions to `ready`.',
                  items: {
                    type: 'object',
                    properties: {
                      language_code: {
                        type: 'string',
                        description: 'The language to generate subtitles in.',
                        enum: [
                          'en',
                          'es',
                          'it',
                          'pt',
                          'de',
                          'fr',
                          'pl',
                          'ru',
                          'nl',
                          'ca',
                          'tr',
                          'sv',
                          'uk',
                          'no',
                          'fi',
                          'sk',
                          'el',
                          'cs',
                          'hr',
                          'da',
                          'ro',
                          'bg',
                        ],
                      },
                      name: {
                        type: 'string',
                        description: 'A name for this subtitle track.',
                      },
                      passthrough: {
                        type: 'string',
                        description: 'Arbitrary metadata set for the subtitle track. Max 255 characters.',
                      },
                    },
                    required: [],
                  },
                },
                language_code: {
                  type: 'string',
                  description:
                    'The language code value must be a valid [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value. For example, `en` for English or `en-US` for the US version of English. This parameter is required for `text` and `audio` track types.',
                },
                name: {
                  type: 'string',
                  description:
                    'The name of the track containing a human-readable description. This value must be unique within each group of `text` or `audio` track types. The HLS manifest will associate a subtitle text track with this value. For example, the value should be "English" for a subtitle text track with `language_code` set to `en`. This optional parameter should be used only for `text` and `audio` type tracks. This parameter can be optionally provided for the first video input to denote the name of the muxed audio track if present. If this parameter is not included, Mux will auto-populate based on the `input[].language_code` value.',
                },
                overlay_settings: {
                  type: 'object',
                  description:
                    'An object that describes how the image file referenced in URL should be placed over the video (i.e. watermarking). Ensure that the URL is active and persists the entire lifespan of the video object.',
                  properties: {
                    height: {
                      type: 'string',
                      description:
                        'How tall the overlay should appear. Can be expressed as a percent ("10%") or as a pixel value ("100px"). If both width and height are left blank the height will be the true pixels of the image, applied as if the video has been scaled to fit a 1920x1080 frame. If width is supplied with no height, the height will scale proportionally to the width.',
                    },
                    horizontal_align: {
                      type: 'string',
                      description:
                        'Where the horizontal positioning of the overlay/watermark should begin from.',
                      enum: ['left', 'center', 'right'],
                    },
                    horizontal_margin: {
                      type: 'string',
                      description:
                        'The distance from the horizontal_align starting point and the image\'s closest edge. Can be expressed as a percent ("10%") or as a pixel value ("100px"). Negative values will move the overlay offscreen. In the case of \'center\', a positive value will shift the image towards the right and and a negative value will shift it towards the left.',
                    },
                    opacity: {
                      type: 'string',
                      description:
                        'How opaque the overlay should appear, expressed as a percent. (Default 100%)',
                    },
                    vertical_align: {
                      type: 'string',
                      description:
                        'Where the vertical positioning of the overlay/watermark should begin from. Defaults to `"top"`',
                      enum: ['top', 'middle', 'bottom'],
                    },
                    vertical_margin: {
                      type: 'string',
                      description:
                        'The distance from the vertical_align starting point and the image\'s closest edge. Can be expressed as a percent ("10%") or as a pixel value ("100px"). Negative values will move the overlay offscreen. In the case of \'middle\', a positive value will shift the overlay towards the bottom and and a negative value will shift it towards the top.',
                    },
                    width: {
                      type: 'string',
                      description:
                        'How wide the overlay should appear. Can be expressed as a percent ("10%") or as a pixel value ("100px"). If both width and height are left blank the width will be the true pixels of the image, applied as if the video has been scaled to fit a 1920x1080 frame. If height is supplied with no width, the width will scale proportionally to the height.',
                    },
                  },
                  required: [],
                },
                passthrough: {
                  type: 'string',
                  description:
                    'This optional parameter should be used for tracks with `type` of `text` and `text_type` set to `subtitles`.',
                },
                start_time: {
                  type: 'number',
                  description:
                    "The time offset in seconds from the beginning of the video indicating the clip's starting marker. The default value is 0 when not included. This parameter is only applicable for creating clips when `input.url` has `mux://assets/{asset_id}` format.",
                },
                text_type: {
                  type: 'string',
                  description:
                    'Type of text track. This parameter only supports subtitles value. For more information on Subtitles / Closed Captions, [see this blog post](https://mux.com/blog/subtitles-captions-webvtt-hls-and-those-magic-flags/). This parameter is required for `text` type tracks.',
                  enum: ['subtitles'],
                },
                type: {
                  type: 'string',
                  description: 'This parameter is required for `text` type tracks.',
                  enum: ['video', 'audio', 'text'],
                },
                url: {
                  type: 'string',
                  description:
                    'The URL of the file that Mux should download and use.\n* For the main input file, this should be the URL to the muxed file for Mux to download, for example an MP4, MOV, MKV, or TS file. Mux supports most audio/video file formats and codecs, but for fastest processing, you should [use standard inputs wherever possible](https://docs.mux.com/guides/minimize-processing-time).\n* For `audio` tracks, the URL is the location of the audio file for Mux to download, for example an M4A, WAV, or MP3 file. Mux supports most audio file formats and codecs, but for fastest processing, you should [use standard inputs wherever possible](https://docs.mux.com/guides/minimize-processing-time).\n* For `text` tracks, the URL is the location of subtitle/captions file. Mux supports [SubRip Text (SRT)](https://en.wikipedia.org/wiki/SubRip) and [Web Video Text Tracks](https://www.w3.org/TR/webvtt1/) formats for ingesting Subtitles and Closed Captions.\n* For Watermarking or Overlay, the URL is the location of the watermark image. The maximum size is 4096x4096.\n* When creating clips from existing Mux assets, the URL is defined with `mux://assets/{asset_id}` template where `asset_id` is the Asset Identifier for creating the clip from.\nThe url property may be omitted on the first input object when providing asset settings for LiveStream and Upload objects, in order to configure settings related to the primary (live stream or direct upload) input.\n',
                },
              },
              required: [],
            },
          },
          master_access: {
            type: 'string',
            description:
              'Specify what level (if any) of support for master access. Master access can be enabled temporarily for your asset to be downloaded. See the [Download your videos guide](https://docs.mux.com/guides/enable-static-mp4-renditions) for more information.',
            enum: ['none', 'temporary'],
          },
          max_resolution_tier: {
            type: 'string',
            description:
              'Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. If not set, this defaults to `1080p`.',
            enum: ['1080p', '1440p', '2160p'],
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
            required: [],
          },
          mp4_support: {
            type: 'string',
            description:
              "Deprecated. See the [Static Renditions API](https://www.mux.com/docs/guides/enable-static-mp4-renditions) for the updated API.\n\nSpecify what level of support for mp4 playback. You may not enable both `mp4_support` and  `static_renditions`.\n\n* The `capped-1080p` option produces a single MP4 file, called `capped-1080p.mp4`, with the video resolution capped at 1080p. This option produces an `audio.m4a` file for an audio-only asset.\n* The `audio-only` option produces a single M4A file, called `audio.m4a` for a video or an audio-only asset. MP4 generation will error when this option is specified for a video-only asset.\n* The `audio-only,capped-1080p` option produces both the `audio.m4a` and `capped-1080p.mp4` files. Only the `capped-1080p.mp4` file is produced for a video-only asset, while only the `audio.m4a` file is produced for an audio-only asset.\n\nThe `standard`(deprecated) option produces up to three MP4 files with different levels of resolution (`high.mp4`, `medium.mp4`, `low.mp4`, or `audio.m4a` for an audio-only asset).\n\nMP4 files are not produced for `none` (default).\n\nIn most cases you should use our default HLS-based streaming playback (`{playback_id}.m3u8`) which can automatically adjust to viewers' connection speeds, but an mp4 can be useful for some legacy devices or downloading for offline playback. See the [Download your videos guide](https://docs.mux.com/guides/enable-static-mp4-renditions) for more information.",
            enum: ['none', 'standard', 'capped-1080p', 'audio-only', 'audio-only,capped-1080p'],
          },
          normalize_audio: {
            type: 'boolean',
            description:
              'Normalize the audio track loudness level. This parameter is only applicable to on-demand (not live) assets.',
          },
          passthrough: {
            type: 'string',
            description:
              "You can set this field to anything you want. It will be included in the asset details and related webhooks. If you're looking for more structured metadata, such as `title` or `external_id`, you can use the `meta` object instead. **Max: 255 characters**.",
          },
          per_title_encode: {
            type: 'boolean',
          },
          playback_policies: {
            type: 'array',
            description:
              'An array of playback policy names that you want applied to this asset and available through `playback_ids`. Options include:\n\n* `"public"` (anyone with the playback URL can stream the asset).\n* `"signed"` (an additional access token is required to play the asset).\n\nIf no `playback_policies` are set, the asset will have no playback IDs and will therefore not be playable. For simplicity, a single string name can be used in place of the array in the case of only one playback policy.\n',
            items: {
              $ref: '#/$defs/playback_policy',
            },
          },
          playback_policy: {
            type: 'array',
            description: 'Deprecated. Use `playback_policies` instead, which accepts an identical type.',
            items: {
              $ref: '#/$defs/playback_policy',
            },
          },
          static_renditions: {
            type: 'array',
            description:
              'An array of static renditions to create for this asset. You may not enable both `static_renditions` and `mp4_support (the latter being deprecated)`',
            items: {
              type: 'object',
              properties: {
                resolution: {
                  type: 'string',
                  enum: [
                    'highest',
                    'audio-only',
                    '2160p',
                    '1440p',
                    '1080p',
                    '720p',
                    '540p',
                    '480p',
                    '360p',
                    '270p',
                  ],
                },
                passthrough: {
                  type: 'string',
                  description:
                    'Arbitrary user-supplied metadata set for the static rendition. Max 255 characters.',
                },
              },
              required: ['resolution'],
            },
          },
          test: {
            type: 'boolean',
            description:
              'Marks the asset as a test asset when the value is set to true. A Test asset can help evaluate the Mux Video APIs without incurring any cost. There is no limit on number of test assets created. Test asset are watermarked with the Mux logo, limited to 10 seconds, deleted after 24 hrs.',
          },
          video_quality: {
            type: 'string',
            description:
              'The video quality controls the cost, quality, and available platform features for the asset. The default video quality for an account can be set in the Mux Dashboard. This field replaces the deprecated `encoding_tier` value. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)',
            enum: ['basic', 'plus', 'premium'],
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.video.liveStreams.create(body));
};

export default { metadata, tool, handler };
