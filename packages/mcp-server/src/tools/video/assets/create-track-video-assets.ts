// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.assets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/video/v1/assets/{ASSET_ID}/tracks',
  operationId: 'create-asset-track',
};

export const tool: Tool = {
  name: 'create_track_video_assets',
  description:
    'Adds an asset track (for example, subtitles, or an alternate audio track) to an asset. Assets must be in the `ready` state before tracks can be added.',
  inputSchema: {
    type: 'object',
    properties: {
      ASSET_ID: {
        type: 'string',
      },
      language_code: {
        type: 'string',
        description:
          'The language code value must be a valid BCP 47 specification compliant value. For example, en for English or en-US for the US version of English.',
      },
      type: {
        type: 'string',
        enum: ['text', 'audio'],
      },
      url: {
        type: 'string',
        description:
          'The URL of the file that Mux should download and use.\n* For `audio` tracks, the URL is the location of the audio file for Mux to download, for example an M4A, WAV, or MP3 file. Mux supports most audio file formats and codecs, but for fastest processing, you should [use standard inputs wherever possible](https://docs.mux.com/guides/minimize-processing-time).\n* For `text` tracks, the URL is the location of subtitle/captions file. Mux supports [SubRip Text (SRT)](https://en.wikipedia.org/wiki/SubRip) and [Web Video Text Tracks](https://www.w3.org/TR/webvtt1/) formats for ingesting Subtitles and Closed Captions.\n',
      },
      closed_captions: {
        type: 'boolean',
        description: 'Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).',
      },
      name: {
        type: 'string',
        description:
          'The name of the track containing a human-readable description. This value must be unique within each group of `text` or `audio` track types. The HLS manifest will associate the `text` or `audio` track with this value. For example, set the value to "English" for subtitles text track with `language_code` as en-US. If this parameter is not included, Mux will auto-populate a value based on the `language_code` value.',
      },
      passthrough: {
        type: 'string',
        description:
          'Arbitrary user-supplied metadata set for the track either when creating the asset or track.',
      },
      text_type: {
        type: 'string',
        enum: ['subtitles'],
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { ASSET_ID, ...body } = args as any;
  return asTextContentResult(await client.video.assets.createTrack(ASSET_ID, body));
};

export default { metadata, tool, handler };
