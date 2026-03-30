// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'create',
    endpoint: '/video/v1/assets',
    httpMethod: 'post',
    summary: 'Create an asset',
    description: 'Create a new Mux Video asset.',
    stainlessPath: '(resource) video.assets > (method) create',
    qualified: 'client.video.assets.create',
    params: [
      "inputs: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[];",
      "advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[];",
      'copy_overlays?: boolean;',
      "encoding_tier?: 'smart' | 'baseline' | 'premium';",
      "input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[];",
      "master_access?: 'none' | 'temporary';",
      "max_resolution_tier?: '1080p' | '1440p' | '2160p';",
      'meta?: { creator_id?: string; external_id?: string; title?: string; };',
      "mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p';",
      'normalize_audio?: boolean;',
      'passthrough?: string;',
      'per_title_encode?: boolean;',
      "playback_policies?: 'public' | 'signed' | 'drm'[];",
      "playback_policy?: 'public' | 'signed' | 'drm'[];",
      "static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[];",
      'test?: boolean;',
      "video_quality?: 'basic' | 'plus' | 'premium';",
    ],
    response:
      "{ id: string; created_at: string; encoding_tier: 'smart' | 'baseline' | 'premium'; master_access: 'temporary' | 'none'; max_resolution_tier: '1080p' | '1440p' | '2160p'; progress: object; status: 'preparing' | 'ready' | 'errored'; aspect_ratio?: string; duration?: number; errors?: object; ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'; is_live?: boolean; live_stream_id?: string; master?: object; max_stored_frame_rate?: number; max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'; meta?: object; mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; non_standard_input_reasons?: object; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_ids?: playback_id[]; recording_times?: object[]; resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; source_asset_id?: string; static_renditions?: object; test?: boolean; tracks?: track[]; upload_id?: string; video_quality?: 'basic' | 'plus' | 'premium'; }",
    markdown:
      "## create\n\n`client.video.assets.create(inputs: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[], advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[], copy_overlays?: boolean, encoding_tier?: 'smart' | 'baseline' | 'premium', input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[], master_access?: 'none' | 'temporary', max_resolution_tier?: '1080p' | '1440p' | '2160p', meta?: { creator_id?: string; external_id?: string; title?: string; }, mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p', normalize_audio?: boolean, passthrough?: string, per_title_encode?: boolean, playback_policies?: 'public' | 'signed' | 'drm'[], playback_policy?: 'public' | 'signed' | 'drm'[], static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[], test?: boolean, video_quality?: 'basic' | 'plus' | 'premium'): { id: string; created_at: string; encoding_tier: 'smart' | 'baseline' | 'premium'; master_access: 'temporary' | 'none'; max_resolution_tier: '1080p' | '1440p' | '2160p'; progress: object; status: 'preparing' | 'ready' | 'errored'; aspect_ratio?: string; duration?: number; errors?: object; ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'; is_live?: boolean; live_stream_id?: string; master?: object; max_stored_frame_rate?: number; max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'; meta?: object; mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; non_standard_input_reasons?: object; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_ids?: playback_id[]; recording_times?: object[]; resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; source_asset_id?: string; static_renditions?: object; test?: boolean; tracks?: track[]; upload_id?: string; video_quality?: 'basic' | 'plus' | 'premium'; }`\n\n**post** `/video/v1/assets`\n\nCreate a new Mux Video asset.\n\n### Parameters\n\n- `inputs: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]`\n  An array of objects that each describe an input file to be used to create the asset. As a shortcut, input can also be a string URL for a file when only one input file is used. See `input[].url` for requirements.\n\n- `advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]`\n  An array of playback policy objects that you want applied to this asset and available through `playback_ids`. `advanced_playback_policies` must be used instead of `playback_policies` when creating a DRM playback ID.\n\n\n- `copy_overlays?: boolean`\n  If the created asset is a clip, this controls whether overlays are copied from the source asset.\n\n- `encoding_tier?: 'smart' | 'baseline' | 'premium'`\n  This field is deprecated. Please use `video_quality` instead. The encoding tier informs the cost, quality, and available platform features for the asset. The default encoding tier for an account can be set in the Mux Dashboard. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)\n\n- `input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]`\n  Deprecated. Use `inputs` instead, which accepts an identical type.\n\n- `master_access?: 'none' | 'temporary'`\n  Specify what level (if any) of support for master access. Master access can be enabled temporarily for your asset to be downloaded. See the [Download your videos guide](https://docs.mux.com/guides/enable-static-mp4-renditions) for more information.\n\n- `max_resolution_tier?: '1080p' | '1440p' | '2160p'`\n  Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. If not set, this defaults to `1080p`.\n\n- `meta?: { creator_id?: string; external_id?: string; title?: string; }`\n  Customer provided metadata about this asset.\n\nNote: This metadata may be publicly available via the video player. Do not include PII or sensitive information.\n\n  - `creator_id?: string`\n    This is an identifier you provide to keep track of the creator of the asset. Max 128 code points.\n  - `external_id?: string`\n    This is an identifier you provide to link the asset to your own data. Max 128 code points.\n  - `title?: string`\n    The asset title. Max 512 code points.\n\n- `mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'`\n  Deprecated. See the [Static Renditions API](https://www.mux.com/docs/guides/enable-static-mp4-renditions) for the updated API.\n\nSpecify what level of support for mp4 playback. You may not enable both `mp4_support` and  `static_renditions`.\n\n* The `capped-1080p` option produces a single MP4 file, called `capped-1080p.mp4`, with the video resolution capped at 1080p. This option produces an `audio.m4a` file for an audio-only asset.\n* The `audio-only` option produces a single M4A file, called `audio.m4a` for a video or an audio-only asset. MP4 generation will error when this option is specified for a video-only asset.\n* The `audio-only,capped-1080p` option produces both the `audio.m4a` and `capped-1080p.mp4` files. Only the `capped-1080p.mp4` file is produced for a video-only asset, while only the `audio.m4a` file is produced for an audio-only asset.\n\nThe `standard`(deprecated) option produces up to three MP4 files with different levels of resolution (`high.mp4`, `medium.mp4`, `low.mp4`, or `audio.m4a` for an audio-only asset).\n\nMP4 files are not produced for `none` (default).\n\nIn most cases you should use our default HLS-based streaming playback (`{playback_id}.m3u8`) which can automatically adjust to viewers' connection speeds, but an mp4 can be useful for some legacy devices or downloading for offline playback. See the [Download your videos guide](https://docs.mux.com/guides/enable-static-mp4-renditions) for more information.\n\n- `normalize_audio?: boolean`\n  Normalize the audio track loudness level. This parameter is only applicable to on-demand (not live) assets.\n\n- `passthrough?: string`\n  You can set this field to anything you want. It will be included in the asset details and related webhooks. If you're looking for more structured metadata, such as `title` or `external_id`, you can use the `meta` object instead. **Max: 255 characters**.\n\n- `per_title_encode?: boolean`\n\n- `playback_policies?: 'public' | 'signed' | 'drm'[]`\n  An array of playback policy names that you want applied to this asset and available through `playback_ids`. Options include:\n\n* `\"public\"` (anyone with the playback URL can stream the asset).\n* `\"signed\"` (an additional access token is required to play the asset).\n\nIf no `playback_policies` are set, the asset will have no playback IDs and will therefore not be playable. For simplicity, a single string name can be used in place of the array in the case of only one playback policy.\n\n\n- `playback_policy?: 'public' | 'signed' | 'drm'[]`\n  Deprecated. Use `playback_policies` instead, which accepts an identical type.\n\n- `static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]`\n  An array of static renditions to create for this asset. You may not enable both `static_renditions` and `mp4_support (the latter being deprecated)`\n\n- `test?: boolean`\n  Marks the asset as a test asset when the value is set to true. A Test asset can help evaluate the Mux Video APIs without incurring any cost. There is no limit on number of test assets created. Test asset are watermarked with the Mux logo, limited to 10 seconds, deleted after 24 hrs.\n\n- `video_quality?: 'basic' | 'plus' | 'premium'`\n  The video quality controls the cost, quality, and available platform features for the asset. The default video quality for an account can be set in the Mux Dashboard. This field replaces the deprecated `encoding_tier` value. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)\n\n### Returns\n\n- `{ id: string; created_at: string; encoding_tier: 'smart' | 'baseline' | 'premium'; master_access: 'temporary' | 'none'; max_resolution_tier: '1080p' | '1440p' | '2160p'; progress: { progress: number; state: 'ingesting' | 'transcoding' | 'completed' | 'live' | 'errored'; }; status: 'preparing' | 'ready' | 'errored'; aspect_ratio?: string; duration?: number; errors?: { messages?: string[]; type?: string; }; ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'; is_live?: boolean; live_stream_id?: string; master?: { status?: 'ready' | 'preparing' | 'errored'; url?: string; }; max_stored_frame_rate?: number; max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; non_standard_input_reasons?: { audio_codec?: string; audio_edit_list?: 'non-standard'; pixel_aspect_ratio?: string; unexpected_media_file_parameters?: 'non-standard'; unsupported_pixel_format?: string; video_bitrate?: 'high'; video_codec?: string; video_edit_list?: 'non-standard'; video_frame_rate?: string; video_gop_size?: 'high'; video_resolution?: string; }; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_ids?: { id: string; policy: playback_policy; drm_configuration_id?: string; }[]; recording_times?: { duration?: number; started_at?: string; type?: 'content' | 'slate'; }[]; resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; source_asset_id?: string; static_renditions?: { files?: { id?: string; bitrate?: number; ext?: 'mp4' | 'm4a'; filesize?: string; height?: number; name?: string; passthrough?: string; resolution?: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; resolution_tier?: '2160p' | '1440p' | '1080p' | '720p' | 'audio-only'; status?: 'ready' | 'preparing' | 'skipped' | 'errored'; type?: 'standard' | 'advanced'; width?: number; }[]; status?: 'ready' | 'preparing' | 'disabled' | 'errored'; }; test?: boolean; tracks?: { id?: string; auto_language_confidence?: number; closed_captions?: boolean; duration?: number; language_code?: string; max_channel_layout?: string; max_channels?: number; max_frame_rate?: number; max_height?: number; max_width?: number; name?: string; passthrough?: string; primary?: boolean; status?: 'preparing' | 'ready' | 'errored' | 'deleted'; text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod'; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; }[]; upload_id?: string; video_quality?: 'basic' | 'plus' | 'premium'; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `encoding_tier: 'smart' | 'baseline' | 'premium'`\n  - `master_access: 'temporary' | 'none'`\n  - `max_resolution_tier: '1080p' | '1440p' | '2160p'`\n  - `progress: { progress: number; state: 'ingesting' | 'transcoding' | 'completed' | 'live' | 'errored'; }`\n  - `status: 'preparing' | 'ready' | 'errored'`\n  - `aspect_ratio?: string`\n  - `duration?: number`\n  - `errors?: { messages?: string[]; type?: string; }`\n  - `ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'`\n  - `is_live?: boolean`\n  - `live_stream_id?: string`\n  - `master?: { status?: 'ready' | 'preparing' | 'errored'; url?: string; }`\n  - `max_stored_frame_rate?: number`\n  - `max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'`\n  - `meta?: { creator_id?: string; external_id?: string; title?: string; }`\n  - `mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'`\n  - `non_standard_input_reasons?: { audio_codec?: string; audio_edit_list?: 'non-standard'; pixel_aspect_ratio?: string; unexpected_media_file_parameters?: 'non-standard'; unsupported_pixel_format?: string; video_bitrate?: 'high'; video_codec?: string; video_edit_list?: 'non-standard'; video_frame_rate?: string; video_gop_size?: 'high'; video_resolution?: string; }`\n  - `normalize_audio?: boolean`\n  - `passthrough?: string`\n  - `per_title_encode?: boolean`\n  - `playback_ids?: { id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }[]`\n  - `recording_times?: { duration?: number; started_at?: string; type?: 'content' | 'slate'; }[]`\n  - `resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'`\n  - `source_asset_id?: string`\n  - `static_renditions?: { files?: { id?: string; bitrate?: number; ext?: 'mp4' | 'm4a'; filesize?: string; height?: number; name?: string; passthrough?: string; resolution?: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; resolution_tier?: '2160p' | '1440p' | '1080p' | '720p' | 'audio-only'; status?: 'ready' | 'preparing' | 'skipped' | 'errored'; type?: 'standard' | 'advanced'; width?: number; }[]; status?: 'ready' | 'preparing' | 'disabled' | 'errored'; }`\n  - `test?: boolean`\n  - `tracks?: { id?: string; auto_language_confidence?: number; closed_captions?: boolean; duration?: number; language_code?: string; max_channel_layout?: string; max_channels?: number; max_frame_rate?: number; max_height?: number; max_width?: number; name?: string; passthrough?: string; primary?: boolean; status?: 'preparing' | 'ready' | 'errored' | 'deleted'; text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod'; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; }[]`\n  - `upload_id?: string`\n  - `video_quality?: 'basic' | 'plus' | 'premium'`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst asset = await client.video.assets.create({ inputs: [{}] });\n\nconsole.log(asset);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/video/v1/assets/{ASSET_ID}',
    httpMethod: 'get',
    summary: 'Retrieve an asset',
    description:
      'Retrieves the details of an asset that has previously been created. Supply the unique asset ID that was returned from your previous request, and Mux will return the corresponding asset information. The same information is returned when creating an asset.',
    stainlessPath: '(resource) video.assets > (method) retrieve',
    qualified: 'client.video.assets.retrieve',
    params: ['ASSET_ID: string;'],
    response:
      "{ id: string; created_at: string; encoding_tier: 'smart' | 'baseline' | 'premium'; master_access: 'temporary' | 'none'; max_resolution_tier: '1080p' | '1440p' | '2160p'; progress: object; status: 'preparing' | 'ready' | 'errored'; aspect_ratio?: string; duration?: number; errors?: object; ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'; is_live?: boolean; live_stream_id?: string; master?: object; max_stored_frame_rate?: number; max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'; meta?: object; mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; non_standard_input_reasons?: object; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_ids?: playback_id[]; recording_times?: object[]; resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; source_asset_id?: string; static_renditions?: object; test?: boolean; tracks?: track[]; upload_id?: string; video_quality?: 'basic' | 'plus' | 'premium'; }",
    markdown:
      "## retrieve\n\n`client.video.assets.retrieve(ASSET_ID: string): { id: string; created_at: string; encoding_tier: 'smart' | 'baseline' | 'premium'; master_access: 'temporary' | 'none'; max_resolution_tier: '1080p' | '1440p' | '2160p'; progress: object; status: 'preparing' | 'ready' | 'errored'; aspect_ratio?: string; duration?: number; errors?: object; ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'; is_live?: boolean; live_stream_id?: string; master?: object; max_stored_frame_rate?: number; max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'; meta?: object; mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; non_standard_input_reasons?: object; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_ids?: playback_id[]; recording_times?: object[]; resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; source_asset_id?: string; static_renditions?: object; test?: boolean; tracks?: track[]; upload_id?: string; video_quality?: 'basic' | 'plus' | 'premium'; }`\n\n**get** `/video/v1/assets/{ASSET_ID}`\n\nRetrieves the details of an asset that has previously been created. Supply the unique asset ID that was returned from your previous request, and Mux will return the corresponding asset information. The same information is returned when creating an asset.\n\n### Parameters\n\n- `ASSET_ID: string`\n\n### Returns\n\n- `{ id: string; created_at: string; encoding_tier: 'smart' | 'baseline' | 'premium'; master_access: 'temporary' | 'none'; max_resolution_tier: '1080p' | '1440p' | '2160p'; progress: { progress: number; state: 'ingesting' | 'transcoding' | 'completed' | 'live' | 'errored'; }; status: 'preparing' | 'ready' | 'errored'; aspect_ratio?: string; duration?: number; errors?: { messages?: string[]; type?: string; }; ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'; is_live?: boolean; live_stream_id?: string; master?: { status?: 'ready' | 'preparing' | 'errored'; url?: string; }; max_stored_frame_rate?: number; max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; non_standard_input_reasons?: { audio_codec?: string; audio_edit_list?: 'non-standard'; pixel_aspect_ratio?: string; unexpected_media_file_parameters?: 'non-standard'; unsupported_pixel_format?: string; video_bitrate?: 'high'; video_codec?: string; video_edit_list?: 'non-standard'; video_frame_rate?: string; video_gop_size?: 'high'; video_resolution?: string; }; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_ids?: { id: string; policy: playback_policy; drm_configuration_id?: string; }[]; recording_times?: { duration?: number; started_at?: string; type?: 'content' | 'slate'; }[]; resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; source_asset_id?: string; static_renditions?: { files?: { id?: string; bitrate?: number; ext?: 'mp4' | 'm4a'; filesize?: string; height?: number; name?: string; passthrough?: string; resolution?: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; resolution_tier?: '2160p' | '1440p' | '1080p' | '720p' | 'audio-only'; status?: 'ready' | 'preparing' | 'skipped' | 'errored'; type?: 'standard' | 'advanced'; width?: number; }[]; status?: 'ready' | 'preparing' | 'disabled' | 'errored'; }; test?: boolean; tracks?: { id?: string; auto_language_confidence?: number; closed_captions?: boolean; duration?: number; language_code?: string; max_channel_layout?: string; max_channels?: number; max_frame_rate?: number; max_height?: number; max_width?: number; name?: string; passthrough?: string; primary?: boolean; status?: 'preparing' | 'ready' | 'errored' | 'deleted'; text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod'; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; }[]; upload_id?: string; video_quality?: 'basic' | 'plus' | 'premium'; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `encoding_tier: 'smart' | 'baseline' | 'premium'`\n  - `master_access: 'temporary' | 'none'`\n  - `max_resolution_tier: '1080p' | '1440p' | '2160p'`\n  - `progress: { progress: number; state: 'ingesting' | 'transcoding' | 'completed' | 'live' | 'errored'; }`\n  - `status: 'preparing' | 'ready' | 'errored'`\n  - `aspect_ratio?: string`\n  - `duration?: number`\n  - `errors?: { messages?: string[]; type?: string; }`\n  - `ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'`\n  - `is_live?: boolean`\n  - `live_stream_id?: string`\n  - `master?: { status?: 'ready' | 'preparing' | 'errored'; url?: string; }`\n  - `max_stored_frame_rate?: number`\n  - `max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'`\n  - `meta?: { creator_id?: string; external_id?: string; title?: string; }`\n  - `mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'`\n  - `non_standard_input_reasons?: { audio_codec?: string; audio_edit_list?: 'non-standard'; pixel_aspect_ratio?: string; unexpected_media_file_parameters?: 'non-standard'; unsupported_pixel_format?: string; video_bitrate?: 'high'; video_codec?: string; video_edit_list?: 'non-standard'; video_frame_rate?: string; video_gop_size?: 'high'; video_resolution?: string; }`\n  - `normalize_audio?: boolean`\n  - `passthrough?: string`\n  - `per_title_encode?: boolean`\n  - `playback_ids?: { id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }[]`\n  - `recording_times?: { duration?: number; started_at?: string; type?: 'content' | 'slate'; }[]`\n  - `resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'`\n  - `source_asset_id?: string`\n  - `static_renditions?: { files?: { id?: string; bitrate?: number; ext?: 'mp4' | 'm4a'; filesize?: string; height?: number; name?: string; passthrough?: string; resolution?: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; resolution_tier?: '2160p' | '1440p' | '1080p' | '720p' | 'audio-only'; status?: 'ready' | 'preparing' | 'skipped' | 'errored'; type?: 'standard' | 'advanced'; width?: number; }[]; status?: 'ready' | 'preparing' | 'disabled' | 'errored'; }`\n  - `test?: boolean`\n  - `tracks?: { id?: string; auto_language_confidence?: number; closed_captions?: boolean; duration?: number; language_code?: string; max_channel_layout?: string; max_channels?: number; max_frame_rate?: number; max_height?: number; max_width?: number; name?: string; passthrough?: string; primary?: boolean; status?: 'preparing' | 'ready' | 'errored' | 'deleted'; text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod'; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; }[]`\n  - `upload_id?: string`\n  - `video_quality?: 'basic' | 'plus' | 'premium'`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst asset = await client.video.assets.retrieve('ASSET_ID');\n\nconsole.log(asset);\n```",
  },
  {
    name: 'update',
    endpoint: '/video/v1/assets/{ASSET_ID}',
    httpMethod: 'patch',
    summary: 'Update an asset',
    description:
      'Updates the details of an existing Asset with the provided Asset ID. This API currently only supports the `passthrough` and `meta` fields.',
    stainlessPath: '(resource) video.assets > (method) update',
    qualified: 'client.video.assets.update',
    params: [
      'ASSET_ID: string;',
      'meta?: { creator_id?: string; external_id?: string; title?: string; };',
      'passthrough?: string;',
    ],
    response:
      "{ id: string; created_at: string; encoding_tier: 'smart' | 'baseline' | 'premium'; master_access: 'temporary' | 'none'; max_resolution_tier: '1080p' | '1440p' | '2160p'; progress: object; status: 'preparing' | 'ready' | 'errored'; aspect_ratio?: string; duration?: number; errors?: object; ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'; is_live?: boolean; live_stream_id?: string; master?: object; max_stored_frame_rate?: number; max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'; meta?: object; mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; non_standard_input_reasons?: object; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_ids?: playback_id[]; recording_times?: object[]; resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; source_asset_id?: string; static_renditions?: object; test?: boolean; tracks?: track[]; upload_id?: string; video_quality?: 'basic' | 'plus' | 'premium'; }",
    markdown:
      "## update\n\n`client.video.assets.update(ASSET_ID: string, meta?: { creator_id?: string; external_id?: string; title?: string; }, passthrough?: string): { id: string; created_at: string; encoding_tier: 'smart' | 'baseline' | 'premium'; master_access: 'temporary' | 'none'; max_resolution_tier: '1080p' | '1440p' | '2160p'; progress: object; status: 'preparing' | 'ready' | 'errored'; aspect_ratio?: string; duration?: number; errors?: object; ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'; is_live?: boolean; live_stream_id?: string; master?: object; max_stored_frame_rate?: number; max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'; meta?: object; mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; non_standard_input_reasons?: object; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_ids?: playback_id[]; recording_times?: object[]; resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; source_asset_id?: string; static_renditions?: object; test?: boolean; tracks?: track[]; upload_id?: string; video_quality?: 'basic' | 'plus' | 'premium'; }`\n\n**patch** `/video/v1/assets/{ASSET_ID}`\n\nUpdates the details of an existing Asset with the provided Asset ID. This API currently only supports the `passthrough` and `meta` fields.\n\n### Parameters\n\n- `ASSET_ID: string`\n\n- `meta?: { creator_id?: string; external_id?: string; title?: string; }`\n  Customer provided metadata about this asset.\n\nNote: This metadata may be publicly available via the video player. Do not include PII or sensitive information.\n\n  - `creator_id?: string`\n    This is an identifier you provide to keep track of the creator of the asset. Max 128 code points.\n  - `external_id?: string`\n    This is an identifier you provide to link the asset to your own data. Max 128 code points.\n  - `title?: string`\n    The asset title. Max 512 code points.\n\n- `passthrough?: string`\n  You can set this field to anything you want. It will be included in the asset details and related webhooks. If you're looking for more structured metadata, such as `title` or `external_id` , you can use the `meta` object instead. **Max: 255 characters**. In order to clear this value, the field should be included with an empty string value.\n\n### Returns\n\n- `{ id: string; created_at: string; encoding_tier: 'smart' | 'baseline' | 'premium'; master_access: 'temporary' | 'none'; max_resolution_tier: '1080p' | '1440p' | '2160p'; progress: { progress: number; state: 'ingesting' | 'transcoding' | 'completed' | 'live' | 'errored'; }; status: 'preparing' | 'ready' | 'errored'; aspect_ratio?: string; duration?: number; errors?: { messages?: string[]; type?: string; }; ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'; is_live?: boolean; live_stream_id?: string; master?: { status?: 'ready' | 'preparing' | 'errored'; url?: string; }; max_stored_frame_rate?: number; max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; non_standard_input_reasons?: { audio_codec?: string; audio_edit_list?: 'non-standard'; pixel_aspect_ratio?: string; unexpected_media_file_parameters?: 'non-standard'; unsupported_pixel_format?: string; video_bitrate?: 'high'; video_codec?: string; video_edit_list?: 'non-standard'; video_frame_rate?: string; video_gop_size?: 'high'; video_resolution?: string; }; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_ids?: { id: string; policy: playback_policy; drm_configuration_id?: string; }[]; recording_times?: { duration?: number; started_at?: string; type?: 'content' | 'slate'; }[]; resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; source_asset_id?: string; static_renditions?: { files?: { id?: string; bitrate?: number; ext?: 'mp4' | 'm4a'; filesize?: string; height?: number; name?: string; passthrough?: string; resolution?: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; resolution_tier?: '2160p' | '1440p' | '1080p' | '720p' | 'audio-only'; status?: 'ready' | 'preparing' | 'skipped' | 'errored'; type?: 'standard' | 'advanced'; width?: number; }[]; status?: 'ready' | 'preparing' | 'disabled' | 'errored'; }; test?: boolean; tracks?: { id?: string; auto_language_confidence?: number; closed_captions?: boolean; duration?: number; language_code?: string; max_channel_layout?: string; max_channels?: number; max_frame_rate?: number; max_height?: number; max_width?: number; name?: string; passthrough?: string; primary?: boolean; status?: 'preparing' | 'ready' | 'errored' | 'deleted'; text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod'; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; }[]; upload_id?: string; video_quality?: 'basic' | 'plus' | 'premium'; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `encoding_tier: 'smart' | 'baseline' | 'premium'`\n  - `master_access: 'temporary' | 'none'`\n  - `max_resolution_tier: '1080p' | '1440p' | '2160p'`\n  - `progress: { progress: number; state: 'ingesting' | 'transcoding' | 'completed' | 'live' | 'errored'; }`\n  - `status: 'preparing' | 'ready' | 'errored'`\n  - `aspect_ratio?: string`\n  - `duration?: number`\n  - `errors?: { messages?: string[]; type?: string; }`\n  - `ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'`\n  - `is_live?: boolean`\n  - `live_stream_id?: string`\n  - `master?: { status?: 'ready' | 'preparing' | 'errored'; url?: string; }`\n  - `max_stored_frame_rate?: number`\n  - `max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'`\n  - `meta?: { creator_id?: string; external_id?: string; title?: string; }`\n  - `mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'`\n  - `non_standard_input_reasons?: { audio_codec?: string; audio_edit_list?: 'non-standard'; pixel_aspect_ratio?: string; unexpected_media_file_parameters?: 'non-standard'; unsupported_pixel_format?: string; video_bitrate?: 'high'; video_codec?: string; video_edit_list?: 'non-standard'; video_frame_rate?: string; video_gop_size?: 'high'; video_resolution?: string; }`\n  - `normalize_audio?: boolean`\n  - `passthrough?: string`\n  - `per_title_encode?: boolean`\n  - `playback_ids?: { id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }[]`\n  - `recording_times?: { duration?: number; started_at?: string; type?: 'content' | 'slate'; }[]`\n  - `resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'`\n  - `source_asset_id?: string`\n  - `static_renditions?: { files?: { id?: string; bitrate?: number; ext?: 'mp4' | 'm4a'; filesize?: string; height?: number; name?: string; passthrough?: string; resolution?: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; resolution_tier?: '2160p' | '1440p' | '1080p' | '720p' | 'audio-only'; status?: 'ready' | 'preparing' | 'skipped' | 'errored'; type?: 'standard' | 'advanced'; width?: number; }[]; status?: 'ready' | 'preparing' | 'disabled' | 'errored'; }`\n  - `test?: boolean`\n  - `tracks?: { id?: string; auto_language_confidence?: number; closed_captions?: boolean; duration?: number; language_code?: string; max_channel_layout?: string; max_channels?: number; max_frame_rate?: number; max_height?: number; max_width?: number; name?: string; passthrough?: string; primary?: boolean; status?: 'preparing' | 'ready' | 'errored' | 'deleted'; text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod'; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; }[]`\n  - `upload_id?: string`\n  - `video_quality?: 'basic' | 'plus' | 'premium'`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst asset = await client.video.assets.update('ASSET_ID');\n\nconsole.log(asset);\n```",
  },
  {
    name: 'list',
    endpoint: '/video/v1/assets',
    httpMethod: 'get',
    summary: 'List assets',
    description: 'List all Mux assets.',
    stainlessPath: '(resource) video.assets > (method) list',
    qualified: 'client.video.assets.list',
    params: [
      'cursor?: string;',
      'limit?: number;',
      'live_stream_id?: string;',
      'page?: number;',
      'upload_id?: string;',
    ],
    response:
      "{ id: string; created_at: string; encoding_tier: 'smart' | 'baseline' | 'premium'; master_access: 'temporary' | 'none'; max_resolution_tier: '1080p' | '1440p' | '2160p'; progress: object; status: 'preparing' | 'ready' | 'errored'; aspect_ratio?: string; duration?: number; errors?: object; ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'; is_live?: boolean; live_stream_id?: string; master?: object; max_stored_frame_rate?: number; max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'; meta?: object; mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; non_standard_input_reasons?: object; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_ids?: playback_id[]; recording_times?: object[]; resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; source_asset_id?: string; static_renditions?: object; test?: boolean; tracks?: track[]; upload_id?: string; video_quality?: 'basic' | 'plus' | 'premium'; }",
    markdown:
      "## list\n\n`client.video.assets.list(cursor?: string, limit?: number, live_stream_id?: string, page?: number, upload_id?: string): { id: string; created_at: string; encoding_tier: 'smart' | 'baseline' | 'premium'; master_access: 'temporary' | 'none'; max_resolution_tier: '1080p' | '1440p' | '2160p'; progress: object; status: 'preparing' | 'ready' | 'errored'; aspect_ratio?: string; duration?: number; errors?: object; ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'; is_live?: boolean; live_stream_id?: string; master?: object; max_stored_frame_rate?: number; max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'; meta?: object; mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; non_standard_input_reasons?: object; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_ids?: playback_id[]; recording_times?: object[]; resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; source_asset_id?: string; static_renditions?: object; test?: boolean; tracks?: track[]; upload_id?: string; video_quality?: 'basic' | 'plus' | 'premium'; }`\n\n**get** `/video/v1/assets`\n\nList all Mux assets.\n\n### Parameters\n\n- `cursor?: string`\n  This parameter is used to request pages beyond the first. You can find the cursor value in the `next_cursor` field of paginated responses.\n\n- `limit?: number`\n  Number of items to include in the response\n\n- `live_stream_id?: string`\n  Filter response to return all the assets for this live stream only\n\n- `page?: number`\n  Offset by this many pages, of the size of `limit`\n\n- `upload_id?: string`\n  Filter response to return an asset created from this direct upload only\n\n### Returns\n\n- `{ id: string; created_at: string; encoding_tier: 'smart' | 'baseline' | 'premium'; master_access: 'temporary' | 'none'; max_resolution_tier: '1080p' | '1440p' | '2160p'; progress: { progress: number; state: 'ingesting' | 'transcoding' | 'completed' | 'live' | 'errored'; }; status: 'preparing' | 'ready' | 'errored'; aspect_ratio?: string; duration?: number; errors?: { messages?: string[]; type?: string; }; ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'; is_live?: boolean; live_stream_id?: string; master?: { status?: 'ready' | 'preparing' | 'errored'; url?: string; }; max_stored_frame_rate?: number; max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; non_standard_input_reasons?: { audio_codec?: string; audio_edit_list?: 'non-standard'; pixel_aspect_ratio?: string; unexpected_media_file_parameters?: 'non-standard'; unsupported_pixel_format?: string; video_bitrate?: 'high'; video_codec?: string; video_edit_list?: 'non-standard'; video_frame_rate?: string; video_gop_size?: 'high'; video_resolution?: string; }; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_ids?: { id: string; policy: playback_policy; drm_configuration_id?: string; }[]; recording_times?: { duration?: number; started_at?: string; type?: 'content' | 'slate'; }[]; resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; source_asset_id?: string; static_renditions?: { files?: { id?: string; bitrate?: number; ext?: 'mp4' | 'm4a'; filesize?: string; height?: number; name?: string; passthrough?: string; resolution?: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; resolution_tier?: '2160p' | '1440p' | '1080p' | '720p' | 'audio-only'; status?: 'ready' | 'preparing' | 'skipped' | 'errored'; type?: 'standard' | 'advanced'; width?: number; }[]; status?: 'ready' | 'preparing' | 'disabled' | 'errored'; }; test?: boolean; tracks?: { id?: string; auto_language_confidence?: number; closed_captions?: boolean; duration?: number; language_code?: string; max_channel_layout?: string; max_channels?: number; max_frame_rate?: number; max_height?: number; max_width?: number; name?: string; passthrough?: string; primary?: boolean; status?: 'preparing' | 'ready' | 'errored' | 'deleted'; text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod'; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; }[]; upload_id?: string; video_quality?: 'basic' | 'plus' | 'premium'; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `encoding_tier: 'smart' | 'baseline' | 'premium'`\n  - `master_access: 'temporary' | 'none'`\n  - `max_resolution_tier: '1080p' | '1440p' | '2160p'`\n  - `progress: { progress: number; state: 'ingesting' | 'transcoding' | 'completed' | 'live' | 'errored'; }`\n  - `status: 'preparing' | 'ready' | 'errored'`\n  - `aspect_ratio?: string`\n  - `duration?: number`\n  - `errors?: { messages?: string[]; type?: string; }`\n  - `ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'`\n  - `is_live?: boolean`\n  - `live_stream_id?: string`\n  - `master?: { status?: 'ready' | 'preparing' | 'errored'; url?: string; }`\n  - `max_stored_frame_rate?: number`\n  - `max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'`\n  - `meta?: { creator_id?: string; external_id?: string; title?: string; }`\n  - `mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'`\n  - `non_standard_input_reasons?: { audio_codec?: string; audio_edit_list?: 'non-standard'; pixel_aspect_ratio?: string; unexpected_media_file_parameters?: 'non-standard'; unsupported_pixel_format?: string; video_bitrate?: 'high'; video_codec?: string; video_edit_list?: 'non-standard'; video_frame_rate?: string; video_gop_size?: 'high'; video_resolution?: string; }`\n  - `normalize_audio?: boolean`\n  - `passthrough?: string`\n  - `per_title_encode?: boolean`\n  - `playback_ids?: { id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }[]`\n  - `recording_times?: { duration?: number; started_at?: string; type?: 'content' | 'slate'; }[]`\n  - `resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'`\n  - `source_asset_id?: string`\n  - `static_renditions?: { files?: { id?: string; bitrate?: number; ext?: 'mp4' | 'm4a'; filesize?: string; height?: number; name?: string; passthrough?: string; resolution?: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; resolution_tier?: '2160p' | '1440p' | '1080p' | '720p' | 'audio-only'; status?: 'ready' | 'preparing' | 'skipped' | 'errored'; type?: 'standard' | 'advanced'; width?: number; }[]; status?: 'ready' | 'preparing' | 'disabled' | 'errored'; }`\n  - `test?: boolean`\n  - `tracks?: { id?: string; auto_language_confidence?: number; closed_captions?: boolean; duration?: number; language_code?: string; max_channel_layout?: string; max_channels?: number; max_frame_rate?: number; max_height?: number; max_width?: number; name?: string; passthrough?: string; primary?: boolean; status?: 'preparing' | 'ready' | 'errored' | 'deleted'; text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod'; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; }[]`\n  - `upload_id?: string`\n  - `video_quality?: 'basic' | 'plus' | 'premium'`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\n// Automatically fetches more pages as needed.\nfor await (const asset of client.video.assets.list()) {\n  console.log(asset);\n}\n```",
  },
  {
    name: 'delete',
    endpoint: '/video/v1/assets/{ASSET_ID}',
    httpMethod: 'delete',
    summary: 'Delete an asset',
    description: 'Deletes a video asset and all its data.',
    stainlessPath: '(resource) video.assets > (method) delete',
    qualified: 'client.video.assets.delete',
    params: ['ASSET_ID: string;'],
    markdown:
      "## delete\n\n`client.video.assets.delete(ASSET_ID: string): void`\n\n**delete** `/video/v1/assets/{ASSET_ID}`\n\nDeletes a video asset and all its data.\n\n### Parameters\n\n- `ASSET_ID: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nawait client.video.assets.delete('ASSET_ID')\n```",
  },
  {
    name: 'create_playback_id',
    endpoint: '/video/v1/assets/{ASSET_ID}/playback-ids',
    httpMethod: 'post',
    summary: 'Create a playback ID',
    description: 'Creates a playback ID that can be used to stream the asset to a viewer.',
    stainlessPath: '(resource) video.assets > (method) create_playback_id',
    qualified: 'client.video.assets.createPlaybackID',
    params: ['ASSET_ID: string;', 'drm_configuration_id?: string;', "policy?: 'public' | 'signed' | 'drm';"],
    response: "{ id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }",
    markdown:
      "## create_playback_id\n\n`client.video.assets.createPlaybackID(ASSET_ID: string, drm_configuration_id?: string, policy?: 'public' | 'signed' | 'drm'): { id: string; policy: playback_policy; drm_configuration_id?: string; }`\n\n**post** `/video/v1/assets/{ASSET_ID}/playback-ids`\n\nCreates a playback ID that can be used to stream the asset to a viewer.\n\n### Parameters\n\n- `ASSET_ID: string`\n\n- `drm_configuration_id?: string`\n  The DRM configuration used by this playback ID. Must only be set when `policy` is set to `drm`.\n\n- `policy?: 'public' | 'signed' | 'drm'`\n  * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}`\n\n* `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens.\n\n* `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).\n\n\n### Returns\n\n- `{ id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }`\n\n  - `id: string`\n  - `policy: 'public' | 'signed' | 'drm'`\n  - `drm_configuration_id?: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst playbackID = await client.video.assets.createPlaybackID('ASSET_ID');\n\nconsole.log(playbackID);\n```",
  },
  {
    name: 'create_static_rendition',
    endpoint: '/video/v1/assets/{ASSET_ID}/static-renditions',
    httpMethod: 'post',
    summary: 'Create a static rendition for an asset',
    description: 'Creates a static rendition (i.e. MP4) for an asset',
    stainlessPath: '(resource) video.assets > (method) create_static_rendition',
    qualified: 'client.video.assets.createStaticRendition',
    params: [
      'ASSET_ID: string;',
      "resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p';",
      'passthrough?: string;',
    ],
    response:
      "{ id?: string; bitrate?: number; ext?: 'mp4' | 'm4a'; filesize?: string; height?: number; name?: string; passthrough?: string; resolution?: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; resolution_tier?: '2160p' | '1440p' | '1080p' | '720p' | 'audio-only'; status?: 'ready' | 'preparing' | 'skipped' | 'errored'; type?: 'standard' | 'advanced'; width?: number; }",
    markdown:
      "## create_static_rendition\n\n`client.video.assets.createStaticRendition(ASSET_ID: string, resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p', passthrough?: string): { id?: string; bitrate?: number; ext?: 'mp4' | 'm4a'; filesize?: string; height?: number; name?: string; passthrough?: string; resolution?: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; resolution_tier?: '2160p' | '1440p' | '1080p' | '720p' | 'audio-only'; status?: 'ready' | 'preparing' | 'skipped' | 'errored'; type?: 'standard' | 'advanced'; width?: number; }`\n\n**post** `/video/v1/assets/{ASSET_ID}/static-renditions`\n\nCreates a static rendition (i.e. MP4) for an asset\n\n### Parameters\n\n- `ASSET_ID: string`\n\n- `resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'`\n\n- `passthrough?: string`\n  Arbitrary user-supplied metadata set for the static rendition. Max 255 characters.\n\n### Returns\n\n- `{ id?: string; bitrate?: number; ext?: 'mp4' | 'm4a'; filesize?: string; height?: number; name?: string; passthrough?: string; resolution?: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; resolution_tier?: '2160p' | '1440p' | '1080p' | '720p' | 'audio-only'; status?: 'ready' | 'preparing' | 'skipped' | 'errored'; type?: 'standard' | 'advanced'; width?: number; }`\n\n  - `id?: string`\n  - `bitrate?: number`\n  - `ext?: 'mp4' | 'm4a'`\n  - `filesize?: string`\n  - `height?: number`\n  - `name?: string`\n  - `passthrough?: string`\n  - `resolution?: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'`\n  - `resolution_tier?: '2160p' | '1440p' | '1080p' | '720p' | 'audio-only'`\n  - `status?: 'ready' | 'preparing' | 'skipped' | 'errored'`\n  - `type?: 'standard' | 'advanced'`\n  - `width?: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.video.assets.createStaticRendition('ASSET_ID', { resolution: 'highest' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'create_track',
    endpoint: '/video/v1/assets/{ASSET_ID}/tracks',
    httpMethod: 'post',
    summary: 'Create an asset track',
    description:
      'Adds an asset track (for example, subtitles, or an alternate audio track) to an asset. Assets must be in the `ready` state before tracks can be added.',
    stainlessPath: '(resource) video.assets > (method) create_track',
    qualified: 'client.video.assets.createTrack',
    params: [
      'ASSET_ID: string;',
      'language_code: string;',
      "type: 'text' | 'audio';",
      'url: string;',
      'closed_captions?: boolean;',
      'name?: string;',
      'passthrough?: string;',
      "text_type?: 'subtitles';",
    ],
    response:
      "{ id?: string; auto_language_confidence?: number; closed_captions?: boolean; duration?: number; language_code?: string; max_channel_layout?: string; max_channels?: number; max_frame_rate?: number; max_height?: number; max_width?: number; name?: string; passthrough?: string; primary?: boolean; status?: 'preparing' | 'ready' | 'errored' | 'deleted'; text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod'; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; }",
    markdown:
      "## create_track\n\n`client.video.assets.createTrack(ASSET_ID: string, language_code: string, type: 'text' | 'audio', url: string, closed_captions?: boolean, name?: string, passthrough?: string, text_type?: 'subtitles'): { id?: string; auto_language_confidence?: number; closed_captions?: boolean; duration?: number; language_code?: string; max_channel_layout?: string; max_channels?: number; max_frame_rate?: number; max_height?: number; max_width?: number; name?: string; passthrough?: string; primary?: boolean; status?: 'preparing' | 'ready' | 'errored' | 'deleted'; text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod'; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; }`\n\n**post** `/video/v1/assets/{ASSET_ID}/tracks`\n\nAdds an asset track (for example, subtitles, or an alternate audio track) to an asset. Assets must be in the `ready` state before tracks can be added.\n\n### Parameters\n\n- `ASSET_ID: string`\n\n- `language_code: string`\n  The language code of this track. The value must be a valid BCP 47 specification compliant value. For example, en for English or en-US for the US version of English.\n\n- `type: 'text' | 'audio'`\n\n- `url: string`\n  The URL of the file that Mux should download and use.\n* For `audio` tracks, the URL is the location of the audio file for Mux to download, for example an M4A, WAV, or MP3 file. Mux supports most audio file formats and codecs, but for fastest processing, you should [use standard inputs wherever possible](https://docs.mux.com/guides/minimize-processing-time).\n* For `text` tracks, the URL is the location of subtitle/captions file. Mux supports [SubRip Text (SRT)](https://en.wikipedia.org/wiki/SubRip) and [Web Video Text Tracks](https://www.w3.org/TR/webvtt1/) formats for ingesting Subtitles and Closed Captions.\n\n\n- `closed_captions?: boolean`\n  Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).\n\n- `name?: string`\n  The name of the track containing a human-readable description. This value must be unique within each group of `text` or `audio` track types. The HLS manifest will associate the `text` or `audio` track with this value. For example, set the value to \"English\" for subtitles text track with `language_code` as en-US. If this parameter is not included, Mux will auto-populate a value based on the `language_code` value.\n\n- `passthrough?: string`\n  Arbitrary user-supplied metadata set for the track either when creating the asset or track.\n\n- `text_type?: 'subtitles'`\n\n### Returns\n\n- `{ id?: string; auto_language_confidence?: number; closed_captions?: boolean; duration?: number; language_code?: string; max_channel_layout?: string; max_channels?: number; max_frame_rate?: number; max_height?: number; max_width?: number; name?: string; passthrough?: string; primary?: boolean; status?: 'preparing' | 'ready' | 'errored' | 'deleted'; text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod'; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; }`\n\n  - `id?: string`\n  - `auto_language_confidence?: number`\n  - `closed_captions?: boolean`\n  - `duration?: number`\n  - `language_code?: string`\n  - `max_channel_layout?: string`\n  - `max_channels?: number`\n  - `max_frame_rate?: number`\n  - `max_height?: number`\n  - `max_width?: number`\n  - `name?: string`\n  - `passthrough?: string`\n  - `primary?: boolean`\n  - `status?: 'preparing' | 'ready' | 'errored' | 'deleted'`\n  - `text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod'`\n  - `text_type?: 'subtitles'`\n  - `type?: 'video' | 'audio' | 'text'`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst track = await client.video.assets.createTrack('ASSET_ID', {\n  language_code: 'en-US',\n  type: 'text',\n  url: 'https://example.com/myVideo_en.srt',\n});\n\nconsole.log(track);\n```",
  },
  {
    name: 'delete_playback_id',
    endpoint: '/video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}',
    httpMethod: 'delete',
    summary: 'Delete a playback ID',
    description:
      "Deletes a playback ID, rendering it nonfunctional for viewing an asset's video content. Please note that deleting the playback ID removes access to the underlying asset; a viewer who started playback before the playback ID was deleted may be able to watch the entire video for a limited duration.",
    stainlessPath: '(resource) video.assets > (method) delete_playback_id',
    qualified: 'client.video.assets.deletePlaybackID',
    params: ['ASSET_ID: string;', 'PLAYBACK_ID: string;'],
    markdown:
      "## delete_playback_id\n\n`client.video.assets.deletePlaybackID(ASSET_ID: string, PLAYBACK_ID: string): void`\n\n**delete** `/video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}`\n\nDeletes a playback ID, rendering it nonfunctional for viewing an asset's video content. Please note that deleting the playback ID removes access to the underlying asset; a viewer who started playback before the playback ID was deleted may be able to watch the entire video for a limited duration.\n\n### Parameters\n\n- `ASSET_ID: string`\n\n- `PLAYBACK_ID: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nawait client.video.assets.deletePlaybackID('PLAYBACK_ID', { ASSET_ID: 'ASSET_ID' })\n```",
  },
  {
    name: 'delete_static_rendition',
    endpoint: '/video/v1/assets/{ASSET_ID}/static-renditions/{STATIC_RENDITION_ID}',
    httpMethod: 'delete',
    summary: 'Delete a single static rendition for an asset',
    description: 'Deletes a single static rendition for an asset',
    stainlessPath: '(resource) video.assets > (method) delete_static_rendition',
    qualified: 'client.video.assets.deleteStaticRendition',
    params: ['ASSET_ID: string;', 'STATIC_RENDITION_ID: string;'],
    markdown:
      "## delete_static_rendition\n\n`client.video.assets.deleteStaticRendition(ASSET_ID: string, STATIC_RENDITION_ID: string): void`\n\n**delete** `/video/v1/assets/{ASSET_ID}/static-renditions/{STATIC_RENDITION_ID}`\n\nDeletes a single static rendition for an asset\n\n### Parameters\n\n- `ASSET_ID: string`\n\n- `STATIC_RENDITION_ID: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nawait client.video.assets.deleteStaticRendition('STATIC_RENDITION_ID', { ASSET_ID: 'ASSET_ID' })\n```",
  },
  {
    name: 'delete_track',
    endpoint: '/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}',
    httpMethod: 'delete',
    summary: 'Delete an asset track',
    description:
      'Removes a text or additional audio track from an asset. Neither video nor the primary audio track can be removed.',
    stainlessPath: '(resource) video.assets > (method) delete_track',
    qualified: 'client.video.assets.deleteTrack',
    params: ['ASSET_ID: string;', 'TRACK_ID: string;'],
    markdown:
      "## delete_track\n\n`client.video.assets.deleteTrack(ASSET_ID: string, TRACK_ID: string): void`\n\n**delete** `/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}`\n\nRemoves a text or additional audio track from an asset. Neither video nor the primary audio track can be removed.\n\n### Parameters\n\n- `ASSET_ID: string`\n\n- `TRACK_ID: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nawait client.video.assets.deleteTrack('TRACK_ID', { ASSET_ID: 'ASSET_ID' })\n```",
  },
  {
    name: 'generate_subtitles',
    endpoint: '/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}/generate-subtitles',
    httpMethod: 'post',
    summary: 'Generate track subtitles',
    description:
      'Generates subtitles (captions) for a given audio track. [See docs for more information.](https://mux.com/docs/guides/add-autogenerated-captions-and-use-transcripts#retroactively-enable-auto-generated-captions)',
    stainlessPath: '(resource) video.assets > (method) generate_subtitles',
    qualified: 'client.video.assets.generateSubtitles',
    params: [
      'ASSET_ID: string;',
      'TRACK_ID: string;',
      'generated_subtitles: { language_code?: string; name?: string; passthrough?: string; }[];',
    ],
    response:
      "{ id?: string; auto_language_confidence?: number; closed_captions?: boolean; duration?: number; language_code?: string; max_channel_layout?: string; max_channels?: number; max_frame_rate?: number; max_height?: number; max_width?: number; name?: string; passthrough?: string; primary?: boolean; status?: 'preparing' | 'ready' | 'errored' | 'deleted'; text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod'; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; }[]",
    markdown:
      "## generate_subtitles\n\n`client.video.assets.generateSubtitles(ASSET_ID: string, TRACK_ID: string, generated_subtitles: { language_code?: string; name?: string; passthrough?: string; }[]): object[]`\n\n**post** `/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}/generate-subtitles`\n\nGenerates subtitles (captions) for a given audio track. [See docs for more information.](https://mux.com/docs/guides/add-autogenerated-captions-and-use-transcripts#retroactively-enable-auto-generated-captions)\n\n### Parameters\n\n- `ASSET_ID: string`\n\n- `TRACK_ID: string`\n\n- `generated_subtitles: { language_code?: string; name?: string; passthrough?: string; }[]`\n  Generate subtitle tracks using automatic speech recognition with this configuration.\n\n### Returns\n\n- `{ id?: string; auto_language_confidence?: number; closed_captions?: boolean; duration?: number; language_code?: string; max_channel_layout?: string; max_channels?: number; max_frame_rate?: number; max_height?: number; max_width?: number; name?: string; passthrough?: string; primary?: boolean; status?: 'preparing' | 'ready' | 'errored' | 'deleted'; text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod'; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; }[]`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst tracks = await client.video.assets.generateSubtitles('TRACK_ID', { ASSET_ID: 'ASSET_ID', generated_subtitles: [{}] });\n\nconsole.log(tracks);\n```",
  },
  {
    name: 'retrieve_input_info',
    endpoint: '/video/v1/assets/{ASSET_ID}/input-info',
    httpMethod: 'get',
    summary: 'Retrieve asset input info',
    description:
      'Returns a list of the input objects that were used to create the asset along with any settings that were applied to each input.',
    stainlessPath: '(resource) video.assets > (method) retrieve_input_info',
    qualified: 'client.video.assets.retrieveInputInfo',
    params: ['ASSET_ID: string;'],
    response:
      "{ file?: { container_format?: string; tracks?: object[]; }; settings?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: object[]; language_code?: string; name?: string; overlay_settings?: object; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }; }[]",
    markdown:
      "## retrieve_input_info\n\n`client.video.assets.retrieveInputInfo(ASSET_ID: string): object[]`\n\n**get** `/video/v1/assets/{ASSET_ID}/input-info`\n\nReturns a list of the input objects that were used to create the asset along with any settings that were applied to each input.\n\n### Parameters\n\n- `ASSET_ID: string`\n\n### Returns\n\n- `{ file?: { container_format?: string; tracks?: object[]; }; settings?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: object[]; language_code?: string; name?: string; overlay_settings?: object; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }; }[]`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst inputInfos = await client.video.assets.retrieveInputInfo('ASSET_ID');\n\nconsole.log(inputInfos);\n```",
  },
  {
    name: 'retrieve_playback_id',
    endpoint: '/video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}',
    httpMethod: 'get',
    summary: 'Retrieve a playback ID',
    description: 'Retrieves information about the specified playback ID.',
    stainlessPath: '(resource) video.assets > (method) retrieve_playback_id',
    qualified: 'client.video.assets.retrievePlaybackID',
    params: ['ASSET_ID: string;', 'PLAYBACK_ID: string;'],
    response: "{ id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }",
    markdown:
      "## retrieve_playback_id\n\n`client.video.assets.retrievePlaybackID(ASSET_ID: string, PLAYBACK_ID: string): { id: string; policy: playback_policy; drm_configuration_id?: string; }`\n\n**get** `/video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}`\n\nRetrieves information about the specified playback ID.\n\n### Parameters\n\n- `ASSET_ID: string`\n\n- `PLAYBACK_ID: string`\n\n### Returns\n\n- `{ id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }`\n\n  - `id: string`\n  - `policy: 'public' | 'signed' | 'drm'`\n  - `drm_configuration_id?: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst playbackID = await client.video.assets.retrievePlaybackID('PLAYBACK_ID', { ASSET_ID: 'ASSET_ID' });\n\nconsole.log(playbackID);\n```",
  },
  {
    name: 'update_master_access',
    endpoint: '/video/v1/assets/{ASSET_ID}/master-access',
    httpMethod: 'put',
    summary: 'Update master access',
    description:
      'Allows you to add temporary access to the master (highest-quality) version of the asset in MP4 format. A URL will be created that can be used to download the master version for 24 hours. After 24 hours Master Access will revert to "none".\nThis master version is not optimized for web and not meant to be streamed, only downloaded for purposes like archiving or editing the video offline.',
    stainlessPath: '(resource) video.assets > (method) update_master_access',
    qualified: 'client.video.assets.updateMasterAccess',
    params: ['ASSET_ID: string;', "master_access: 'temporary' | 'none';"],
    response:
      "{ id: string; created_at: string; encoding_tier: 'smart' | 'baseline' | 'premium'; master_access: 'temporary' | 'none'; max_resolution_tier: '1080p' | '1440p' | '2160p'; progress: object; status: 'preparing' | 'ready' | 'errored'; aspect_ratio?: string; duration?: number; errors?: object; ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'; is_live?: boolean; live_stream_id?: string; master?: object; max_stored_frame_rate?: number; max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'; meta?: object; mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; non_standard_input_reasons?: object; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_ids?: playback_id[]; recording_times?: object[]; resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; source_asset_id?: string; static_renditions?: object; test?: boolean; tracks?: track[]; upload_id?: string; video_quality?: 'basic' | 'plus' | 'premium'; }",
    markdown:
      "## update_master_access\n\n`client.video.assets.updateMasterAccess(ASSET_ID: string, master_access: 'temporary' | 'none'): { id: string; created_at: string; encoding_tier: 'smart' | 'baseline' | 'premium'; master_access: 'temporary' | 'none'; max_resolution_tier: '1080p' | '1440p' | '2160p'; progress: object; status: 'preparing' | 'ready' | 'errored'; aspect_ratio?: string; duration?: number; errors?: object; ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'; is_live?: boolean; live_stream_id?: string; master?: object; max_stored_frame_rate?: number; max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'; meta?: object; mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; non_standard_input_reasons?: object; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_ids?: playback_id[]; recording_times?: object[]; resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; source_asset_id?: string; static_renditions?: object; test?: boolean; tracks?: track[]; upload_id?: string; video_quality?: 'basic' | 'plus' | 'premium'; }`\n\n**put** `/video/v1/assets/{ASSET_ID}/master-access`\n\nAllows you to add temporary access to the master (highest-quality) version of the asset in MP4 format. A URL will be created that can be used to download the master version for 24 hours. After 24 hours Master Access will revert to \"none\".\nThis master version is not optimized for web and not meant to be streamed, only downloaded for purposes like archiving or editing the video offline.\n\n### Parameters\n\n- `ASSET_ID: string`\n\n- `master_access: 'temporary' | 'none'`\n  Add or remove access to the master version of the video.\n\n### Returns\n\n- `{ id: string; created_at: string; encoding_tier: 'smart' | 'baseline' | 'premium'; master_access: 'temporary' | 'none'; max_resolution_tier: '1080p' | '1440p' | '2160p'; progress: { progress: number; state: 'ingesting' | 'transcoding' | 'completed' | 'live' | 'errored'; }; status: 'preparing' | 'ready' | 'errored'; aspect_ratio?: string; duration?: number; errors?: { messages?: string[]; type?: string; }; ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'; is_live?: boolean; live_stream_id?: string; master?: { status?: 'ready' | 'preparing' | 'errored'; url?: string; }; max_stored_frame_rate?: number; max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; non_standard_input_reasons?: { audio_codec?: string; audio_edit_list?: 'non-standard'; pixel_aspect_ratio?: string; unexpected_media_file_parameters?: 'non-standard'; unsupported_pixel_format?: string; video_bitrate?: 'high'; video_codec?: string; video_edit_list?: 'non-standard'; video_frame_rate?: string; video_gop_size?: 'high'; video_resolution?: string; }; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_ids?: { id: string; policy: playback_policy; drm_configuration_id?: string; }[]; recording_times?: { duration?: number; started_at?: string; type?: 'content' | 'slate'; }[]; resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; source_asset_id?: string; static_renditions?: { files?: { id?: string; bitrate?: number; ext?: 'mp4' | 'm4a'; filesize?: string; height?: number; name?: string; passthrough?: string; resolution?: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; resolution_tier?: '2160p' | '1440p' | '1080p' | '720p' | 'audio-only'; status?: 'ready' | 'preparing' | 'skipped' | 'errored'; type?: 'standard' | 'advanced'; width?: number; }[]; status?: 'ready' | 'preparing' | 'disabled' | 'errored'; }; test?: boolean; tracks?: { id?: string; auto_language_confidence?: number; closed_captions?: boolean; duration?: number; language_code?: string; max_channel_layout?: string; max_channels?: number; max_frame_rate?: number; max_height?: number; max_width?: number; name?: string; passthrough?: string; primary?: boolean; status?: 'preparing' | 'ready' | 'errored' | 'deleted'; text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod'; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; }[]; upload_id?: string; video_quality?: 'basic' | 'plus' | 'premium'; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `encoding_tier: 'smart' | 'baseline' | 'premium'`\n  - `master_access: 'temporary' | 'none'`\n  - `max_resolution_tier: '1080p' | '1440p' | '2160p'`\n  - `progress: { progress: number; state: 'ingesting' | 'transcoding' | 'completed' | 'live' | 'errored'; }`\n  - `status: 'preparing' | 'ready' | 'errored'`\n  - `aspect_ratio?: string`\n  - `duration?: number`\n  - `errors?: { messages?: string[]; type?: string; }`\n  - `ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'`\n  - `is_live?: boolean`\n  - `live_stream_id?: string`\n  - `master?: { status?: 'ready' | 'preparing' | 'errored'; url?: string; }`\n  - `max_stored_frame_rate?: number`\n  - `max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'`\n  - `meta?: { creator_id?: string; external_id?: string; title?: string; }`\n  - `mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'`\n  - `non_standard_input_reasons?: { audio_codec?: string; audio_edit_list?: 'non-standard'; pixel_aspect_ratio?: string; unexpected_media_file_parameters?: 'non-standard'; unsupported_pixel_format?: string; video_bitrate?: 'high'; video_codec?: string; video_edit_list?: 'non-standard'; video_frame_rate?: string; video_gop_size?: 'high'; video_resolution?: string; }`\n  - `normalize_audio?: boolean`\n  - `passthrough?: string`\n  - `per_title_encode?: boolean`\n  - `playback_ids?: { id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }[]`\n  - `recording_times?: { duration?: number; started_at?: string; type?: 'content' | 'slate'; }[]`\n  - `resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'`\n  - `source_asset_id?: string`\n  - `static_renditions?: { files?: { id?: string; bitrate?: number; ext?: 'mp4' | 'm4a'; filesize?: string; height?: number; name?: string; passthrough?: string; resolution?: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; resolution_tier?: '2160p' | '1440p' | '1080p' | '720p' | 'audio-only'; status?: 'ready' | 'preparing' | 'skipped' | 'errored'; type?: 'standard' | 'advanced'; width?: number; }[]; status?: 'ready' | 'preparing' | 'disabled' | 'errored'; }`\n  - `test?: boolean`\n  - `tracks?: { id?: string; auto_language_confidence?: number; closed_captions?: boolean; duration?: number; language_code?: string; max_channel_layout?: string; max_channels?: number; max_frame_rate?: number; max_height?: number; max_width?: number; name?: string; passthrough?: string; primary?: boolean; status?: 'preparing' | 'ready' | 'errored' | 'deleted'; text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod'; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; }[]`\n  - `upload_id?: string`\n  - `video_quality?: 'basic' | 'plus' | 'premium'`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst asset = await client.video.assets.updateMasterAccess('ASSET_ID', { master_access: 'temporary' });\n\nconsole.log(asset);\n```",
  },
  {
    name: 'update_mp4_support',
    endpoint: '/video/v1/assets/{ASSET_ID}/mp4-support',
    httpMethod: 'put',
    summary: 'Update MP4 support',
    description:
      'This method has been deprecated. Please see the [Static Rendition API](https://www.mux.com/docs/guides/enable-static-mp4-renditions#after-asset-creation).\nAllows you to add or remove mp4 support for assets that were created without it. The values supported are `capped-1080p`, `audio-only`, `audio-only,capped-1080p`, `standard`(deprecated),  and `none`. `none` means that an asset *does not* have mp4 support, so submitting a request with `mp4_support` set to `none` will delete the mp4 assets from the asset in question.\n',
    stainlessPath: '(resource) video.assets > (method) update_mp4_support',
    qualified: 'client.video.assets.updateMP4Support',
    params: [
      'ASSET_ID: string;',
      "mp4_support: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p';",
    ],
    response:
      "{ id: string; created_at: string; encoding_tier: 'smart' | 'baseline' | 'premium'; master_access: 'temporary' | 'none'; max_resolution_tier: '1080p' | '1440p' | '2160p'; progress: object; status: 'preparing' | 'ready' | 'errored'; aspect_ratio?: string; duration?: number; errors?: object; ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'; is_live?: boolean; live_stream_id?: string; master?: object; max_stored_frame_rate?: number; max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'; meta?: object; mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; non_standard_input_reasons?: object; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_ids?: playback_id[]; recording_times?: object[]; resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; source_asset_id?: string; static_renditions?: object; test?: boolean; tracks?: track[]; upload_id?: string; video_quality?: 'basic' | 'plus' | 'premium'; }",
    markdown:
      "## update_mp4_support\n\n`client.video.assets.updateMP4Support(ASSET_ID: string, mp4_support: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'): { id: string; created_at: string; encoding_tier: 'smart' | 'baseline' | 'premium'; master_access: 'temporary' | 'none'; max_resolution_tier: '1080p' | '1440p' | '2160p'; progress: object; status: 'preparing' | 'ready' | 'errored'; aspect_ratio?: string; duration?: number; errors?: object; ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'; is_live?: boolean; live_stream_id?: string; master?: object; max_stored_frame_rate?: number; max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'; meta?: object; mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; non_standard_input_reasons?: object; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_ids?: playback_id[]; recording_times?: object[]; resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; source_asset_id?: string; static_renditions?: object; test?: boolean; tracks?: track[]; upload_id?: string; video_quality?: 'basic' | 'plus' | 'premium'; }`\n\n**put** `/video/v1/assets/{ASSET_ID}/mp4-support`\n\nThis method has been deprecated. Please see the [Static Rendition API](https://www.mux.com/docs/guides/enable-static-mp4-renditions#after-asset-creation).\nAllows you to add or remove mp4 support for assets that were created without it. The values supported are `capped-1080p`, `audio-only`, `audio-only,capped-1080p`, `standard`(deprecated),  and `none`. `none` means that an asset *does not* have mp4 support, so submitting a request with `mp4_support` set to `none` will delete the mp4 assets from the asset in question.\n\n\n### Parameters\n\n- `ASSET_ID: string`\n\n- `mp4_support: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'`\n  Specify what level of support for mp4 playback.\n\n* The `capped-1080p` option produces a single MP4 file, called `capped-1080p.mp4`, with the video resolution capped at 1080p. This option produces an `audio.m4a` file for an audio-only asset.\n* The `audio-only` option produces a single M4A file, called `audio.m4a` for a video or an audio-only asset. MP4 generation will error when this option is specified for a video-only asset.\n* The `audio-only,capped-1080p` option produces both the `audio.m4a` and `capped-1080p.mp4` files. Only the `capped-1080p.mp4` file is produced for a video-only asset, while only the `audio.m4a` file is produced for an audio-only asset.\n\nThe `standard`(deprecated) option produces up to three MP4 files with different levels of resolution (`high.mp4`, `medium.mp4`, `low.mp4`, or `audio.m4a` for an audio-only asset).\n\n`none` will delete the MP4s from the asset in question.\n\n### Returns\n\n- `{ id: string; created_at: string; encoding_tier: 'smart' | 'baseline' | 'premium'; master_access: 'temporary' | 'none'; max_resolution_tier: '1080p' | '1440p' | '2160p'; progress: { progress: number; state: 'ingesting' | 'transcoding' | 'completed' | 'live' | 'errored'; }; status: 'preparing' | 'ready' | 'errored'; aspect_ratio?: string; duration?: number; errors?: { messages?: string[]; type?: string; }; ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'; is_live?: boolean; live_stream_id?: string; master?: { status?: 'ready' | 'preparing' | 'errored'; url?: string; }; max_stored_frame_rate?: number; max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; non_standard_input_reasons?: { audio_codec?: string; audio_edit_list?: 'non-standard'; pixel_aspect_ratio?: string; unexpected_media_file_parameters?: 'non-standard'; unsupported_pixel_format?: string; video_bitrate?: 'high'; video_codec?: string; video_edit_list?: 'non-standard'; video_frame_rate?: string; video_gop_size?: 'high'; video_resolution?: string; }; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_ids?: { id: string; policy: playback_policy; drm_configuration_id?: string; }[]; recording_times?: { duration?: number; started_at?: string; type?: 'content' | 'slate'; }[]; resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; source_asset_id?: string; static_renditions?: { files?: { id?: string; bitrate?: number; ext?: 'mp4' | 'm4a'; filesize?: string; height?: number; name?: string; passthrough?: string; resolution?: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; resolution_tier?: '2160p' | '1440p' | '1080p' | '720p' | 'audio-only'; status?: 'ready' | 'preparing' | 'skipped' | 'errored'; type?: 'standard' | 'advanced'; width?: number; }[]; status?: 'ready' | 'preparing' | 'disabled' | 'errored'; }; test?: boolean; tracks?: { id?: string; auto_language_confidence?: number; closed_captions?: boolean; duration?: number; language_code?: string; max_channel_layout?: string; max_channels?: number; max_frame_rate?: number; max_height?: number; max_width?: number; name?: string; passthrough?: string; primary?: boolean; status?: 'preparing' | 'ready' | 'errored' | 'deleted'; text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod'; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; }[]; upload_id?: string; video_quality?: 'basic' | 'plus' | 'premium'; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `encoding_tier: 'smart' | 'baseline' | 'premium'`\n  - `master_access: 'temporary' | 'none'`\n  - `max_resolution_tier: '1080p' | '1440p' | '2160p'`\n  - `progress: { progress: number; state: 'ingesting' | 'transcoding' | 'completed' | 'live' | 'errored'; }`\n  - `status: 'preparing' | 'ready' | 'errored'`\n  - `aspect_ratio?: string`\n  - `duration?: number`\n  - `errors?: { messages?: string[]; type?: string; }`\n  - `ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt'`\n  - `is_live?: boolean`\n  - `live_stream_id?: string`\n  - `master?: { status?: 'ready' | 'preparing' | 'errored'; url?: string; }`\n  - `max_stored_frame_rate?: number`\n  - `max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD'`\n  - `meta?: { creator_id?: string; external_id?: string; title?: string; }`\n  - `mp4_support?: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'`\n  - `non_standard_input_reasons?: { audio_codec?: string; audio_edit_list?: 'non-standard'; pixel_aspect_ratio?: string; unexpected_media_file_parameters?: 'non-standard'; unsupported_pixel_format?: string; video_bitrate?: 'high'; video_codec?: string; video_edit_list?: 'non-standard'; video_frame_rate?: string; video_gop_size?: 'high'; video_resolution?: string; }`\n  - `normalize_audio?: boolean`\n  - `passthrough?: string`\n  - `per_title_encode?: boolean`\n  - `playback_ids?: { id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }[]`\n  - `recording_times?: { duration?: number; started_at?: string; type?: 'content' | 'slate'; }[]`\n  - `resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'`\n  - `source_asset_id?: string`\n  - `static_renditions?: { files?: { id?: string; bitrate?: number; ext?: 'mp4' | 'm4a'; filesize?: string; height?: number; name?: string; passthrough?: string; resolution?: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; resolution_tier?: '2160p' | '1440p' | '1080p' | '720p' | 'audio-only'; status?: 'ready' | 'preparing' | 'skipped' | 'errored'; type?: 'standard' | 'advanced'; width?: number; }[]; status?: 'ready' | 'preparing' | 'disabled' | 'errored'; }`\n  - `test?: boolean`\n  - `tracks?: { id?: string; auto_language_confidence?: number; closed_captions?: boolean; duration?: number; language_code?: string; max_channel_layout?: string; max_channels?: number; max_frame_rate?: number; max_height?: number; max_width?: number; name?: string; passthrough?: string; primary?: boolean; status?: 'preparing' | 'ready' | 'errored' | 'deleted'; text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod'; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; }[]`\n  - `upload_id?: string`\n  - `video_quality?: 'basic' | 'plus' | 'premium'`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst asset = await client.video.assets.updateMP4Support('ASSET_ID', { mp4_support: 'capped-1080p' });\n\nconsole.log(asset);\n```",
  },
  {
    name: 'list',
    endpoint: '/video/v1/delivery-usage',
    httpMethod: 'get',
    summary: 'List Usage',
    description:
      'Returns a list of delivery usage records and their associated Asset IDs or Live Stream IDs.',
    stainlessPath: '(resource) video.delivery_usage > (method) list',
    qualified: 'client.video.deliveryUsage.list',
    params: [
      'asset_id?: string;',
      'limit?: number;',
      'live_stream_id?: string;',
      'page?: number;',
      'timeframe?: string[];',
    ],
    response:
      "{ asset_duration: number; asset_encoding_tier: 'smart' | 'baseline' | 'premium'; asset_id: string; asset_resolution_tier: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; asset_state: 'ready' | 'errored' | 'deleted'; created_at: string; delivered_seconds: number; delivered_seconds_by_resolution: { tier_1080p?: number; tier_1440p?: number; tier_2160p?: number; tier_720p?: number; tier_audio_only?: number; }; asset_video_quality?: 'basic' | 'plus' | 'premium'; deleted_at?: string; live_stream_id?: string; passthrough?: string; }",
    markdown:
      "## list\n\n`client.video.deliveryUsage.list(asset_id?: string, limit?: number, live_stream_id?: string, page?: number, timeframe?: string[]): { asset_duration: number; asset_encoding_tier: 'smart' | 'baseline' | 'premium'; asset_id: string; asset_resolution_tier: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; asset_state: 'ready' | 'errored' | 'deleted'; created_at: string; delivered_seconds: number; delivered_seconds_by_resolution: object; asset_video_quality?: 'basic' | 'plus' | 'premium'; deleted_at?: string; live_stream_id?: string; passthrough?: string; }`\n\n**get** `/video/v1/delivery-usage`\n\nReturns a list of delivery usage records and their associated Asset IDs or Live Stream IDs.\n\n### Parameters\n\n- `asset_id?: string`\n  Filter response to return delivery usage for this asset only. You cannot specify both the `asset_id` and `live_stream_id` parameters together.\n\n- `limit?: number`\n  Number of items to include in the response\n\n- `live_stream_id?: string`\n  Filter response to return delivery usage for assets for this live stream. You cannot specify both the `asset_id` and `live_stream_id` parameters together.\n\n- `page?: number`\n  Offset by this many pages, of the size of `limit`\n\n- `timeframe?: string[]`\n  Time window to get delivery usage information. timeframe[0] indicates the start time, timeframe[1] indicates the end time in seconds since the Unix epoch. Default time window is 1 hour representing usage from 13th to 12th hour from when the request is made.\n\n### Returns\n\n- `{ asset_duration: number; asset_encoding_tier: 'smart' | 'baseline' | 'premium'; asset_id: string; asset_resolution_tier: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'; asset_state: 'ready' | 'errored' | 'deleted'; created_at: string; delivered_seconds: number; delivered_seconds_by_resolution: { tier_1080p?: number; tier_1440p?: number; tier_2160p?: number; tier_720p?: number; tier_audio_only?: number; }; asset_video_quality?: 'basic' | 'plus' | 'premium'; deleted_at?: string; live_stream_id?: string; passthrough?: string; }`\n\n  - `asset_duration: number`\n  - `asset_encoding_tier: 'smart' | 'baseline' | 'premium'`\n  - `asset_id: string`\n  - `asset_resolution_tier: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p'`\n  - `asset_state: 'ready' | 'errored' | 'deleted'`\n  - `created_at: string`\n  - `delivered_seconds: number`\n  - `delivered_seconds_by_resolution: { tier_1080p?: number; tier_1440p?: number; tier_2160p?: number; tier_720p?: number; tier_audio_only?: number; }`\n  - `asset_video_quality?: 'basic' | 'plus' | 'premium'`\n  - `deleted_at?: string`\n  - `live_stream_id?: string`\n  - `passthrough?: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\n// Automatically fetches more pages as needed.\nfor await (const deliveryReport of client.video.deliveryUsage.list()) {\n  console.log(deliveryReport);\n}\n```",
  },
  {
    name: 'create',
    endpoint: '/video/v1/live-streams',
    httpMethod: 'post',
    summary: 'Create a live stream',
    description:
      'Creates a new live stream. Once created, an encoder can connect to Mux via the specified stream key and begin streaming to an audience.',
    stainlessPath: '(resource) video.live_streams > (method) create',
    qualified: 'client.video.liveStreams.create',
    params: [
      "advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[];",
      'audio_only?: boolean;',
      "embedded_subtitles?: { language_channel?: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code?: string; name?: string; passthrough?: string; }[];",
      "generated_subtitles?: { language_code?: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name?: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[];",
      "latency_mode?: 'low' | 'reduced' | 'standard';",
      'low_latency?: boolean;',
      'max_continuous_duration?: number;',
      'meta?: { title?: string; };',
      "new_asset_settings?: { advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; inputs?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: 'public' | 'signed' | 'drm'[]; playback_policy?: 'public' | 'signed' | 'drm'[]; static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; };",
      'passthrough?: string;',
      "playback_policies?: 'public' | 'signed' | 'drm'[];",
      "playback_policy?: 'public' | 'signed' | 'drm'[];",
      'reconnect_slate_url?: string;',
      'reconnect_window?: number;',
      'reduced_latency?: boolean;',
      'simulcast_targets?: { url: string; passthrough?: string; stream_key?: string; }[];',
      'test?: boolean;',
      'use_slate_for_standard_latency?: boolean;',
    ],
    response:
      "{ id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]; generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]; low_latency?: boolean; meta?: { title?: string; }; new_asset_settings?: object; passthrough?: string; playback_ids?: object[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: object[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }",
    markdown:
      "## create\n\n`client.video.liveStreams.create(advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[], audio_only?: boolean, embedded_subtitles?: { language_channel?: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code?: string; name?: string; passthrough?: string; }[], generated_subtitles?: { language_code?: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name?: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[], latency_mode?: 'low' | 'reduced' | 'standard', low_latency?: boolean, max_continuous_duration?: number, meta?: { title?: string; }, new_asset_settings?: { advanced_playback_policies?: object[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: object[]; inputs?: object[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: object; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: playback_policy[]; playback_policy?: playback_policy[]; static_renditions?: object[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }, passthrough?: string, playback_policies?: 'public' | 'signed' | 'drm'[], playback_policy?: 'public' | 'signed' | 'drm'[], reconnect_slate_url?: string, reconnect_window?: number, reduced_latency?: boolean, simulcast_targets?: { url: string; passthrough?: string; stream_key?: string; }[], test?: boolean, use_slate_for_standard_latency?: boolean): { id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: object[]; generated_subtitles?: object[]; low_latency?: boolean; meta?: object; new_asset_settings?: asset_options; passthrough?: string; playback_ids?: playback_id[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: simulcast_target[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }`\n\n**post** `/video/v1/live-streams`\n\nCreates a new live stream. Once created, an encoder can connect to Mux via the specified stream key and begin streaming to an audience.\n\n### Parameters\n\n- `advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]`\n  An array of playback policy objects that you want applied on this live stream and available through `playback_ids`. `advanced_playback_policies` must be used instead of `playback_policies` when creating a DRM playback ID.\n\n\n- `audio_only?: boolean`\n  Force the live stream to only process the audio track when the value is set to true. Mux drops the video track if broadcasted.\n\n- `embedded_subtitles?: { language_channel?: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code?: string; name?: string; passthrough?: string; }[]`\n  Describe the embedded closed caption contents of the incoming live stream.\n\n- `generated_subtitles?: { language_code?: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name?: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]`\n  Configure the incoming live stream to include subtitles created with automatic speech recognition. Each Asset created from a live stream with `generated_subtitles` configured will automatically receive two text tracks. The first of these will have a `text_source` value of `generated_live`, and will be available with `ready` status as soon as the stream is live. The second text track will have a `text_source` value of `generated_live_final` and will contain subtitles with improved accuracy, timing, and formatting. However, `generated_live_final` tracks will not be available in `ready` status until the live stream ends. If an Asset has both `generated_live` and `generated_live_final` tracks that are `ready`, then only the `generated_live_final` track will be included during playback.\n\n- `latency_mode?: 'low' | 'reduced' | 'standard'`\n  Latency is the time from when the streamer transmits a frame of video to when you see it in the player. Set this as an alternative to setting low latency or reduced latency flags.\n\n- `low_latency?: boolean`\n  This field is deprecated. Please use `latency_mode` instead. Latency is the time from when the streamer transmits a frame of video to when you see it in the player. Setting this option will enable compatibility with the LL-HLS specification for low-latency streaming. This typically has lower latency than Reduced Latency streams, and cannot be combined with Reduced Latency.\n\n- `max_continuous_duration?: number`\n  The time in seconds a live stream may be continuously active before being disconnected. Defaults to 12 hours.\n\n- `meta?: { title?: string; }`\n  Customer provided metadata about this live stream.\n\nNote: This metadata may be publicly available via the video player. Do not include PII or sensitive information.\n\n  - `title?: string`\n    The live stream title. Max 512 code points.\n\n- `new_asset_settings?: { advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; inputs?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: 'public' | 'signed' | 'drm'[]; playback_policy?: 'public' | 'signed' | 'drm'[]; static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }`\n  - `advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]`\n    An array of playback policy objects that you want applied to this asset and available through `playback_ids`. `advanced_playback_policies` must be used instead of `playback_policies` when creating a DRM playback ID.\n\n  - `copy_overlays?: boolean`\n    If the created asset is a clip, this controls whether overlays are copied from the source asset.\n  - `encoding_tier?: 'smart' | 'baseline' | 'premium'`\n    This field is deprecated. Please use `video_quality` instead. The encoding tier informs the cost, quality, and available platform features for the asset. The default encoding tier for an account can be set in the Mux Dashboard. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)\n  - `input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]`\n    Deprecated. Use `inputs` instead, which accepts an identical type.\n  - `inputs?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]`\n    An array of objects that each describe an input file to be used to create the asset. As a shortcut, input can also be a string URL for a file when only one input file is used. See `input[].url` for requirements.\n  - `master_access?: 'none' | 'temporary'`\n    Specify what level (if any) of support for master access. Master access can be enabled temporarily for your asset to be downloaded. See the [Download your videos guide](https://docs.mux.com/guides/enable-static-mp4-renditions) for more information.\n  - `max_resolution_tier?: '1080p' | '1440p' | '2160p'`\n    Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. If not set, this defaults to `1080p`.\n  - `meta?: { creator_id?: string; external_id?: string; title?: string; }`\n    Customer provided metadata about this asset.\n\nNote: This metadata may be publicly available via the video player. Do not include PII or sensitive information.\n\n  - `mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'`\n    Deprecated. See the [Static Renditions API](https://www.mux.com/docs/guides/enable-static-mp4-renditions) for the updated API.\n\nSpecify what level of support for mp4 playback. You may not enable both `mp4_support` and  `static_renditions`.\n\n* The `capped-1080p` option produces a single MP4 file, called `capped-1080p.mp4`, with the video resolution capped at 1080p. This option produces an `audio.m4a` file for an audio-only asset.\n* The `audio-only` option produces a single M4A file, called `audio.m4a` for a video or an audio-only asset. MP4 generation will error when this option is specified for a video-only asset.\n* The `audio-only,capped-1080p` option produces both the `audio.m4a` and `capped-1080p.mp4` files. Only the `capped-1080p.mp4` file is produced for a video-only asset, while only the `audio.m4a` file is produced for an audio-only asset.\n\nThe `standard`(deprecated) option produces up to three MP4 files with different levels of resolution (`high.mp4`, `medium.mp4`, `low.mp4`, or `audio.m4a` for an audio-only asset).\n\nMP4 files are not produced for `none` (default).\n\nIn most cases you should use our default HLS-based streaming playback (`{playback_id}.m3u8`) which can automatically adjust to viewers' connection speeds, but an mp4 can be useful for some legacy devices or downloading for offline playback. See the [Download your videos guide](https://docs.mux.com/guides/enable-static-mp4-renditions) for more information.\n  - `normalize_audio?: boolean`\n    Normalize the audio track loudness level. This parameter is only applicable to on-demand (not live) assets.\n  - `passthrough?: string`\n    You can set this field to anything you want. It will be included in the asset details and related webhooks. If you're looking for more structured metadata, such as `title` or `external_id`, you can use the `meta` object instead. **Max: 255 characters**.\n  - `per_title_encode?: boolean`\n  - `playback_policies?: 'public' | 'signed' | 'drm'[]`\n    An array of playback policy names that you want applied to this asset and available through `playback_ids`. Options include:\n\n* `\"public\"` (anyone with the playback URL can stream the asset).\n* `\"signed\"` (an additional access token is required to play the asset).\n\nIf no `playback_policies` are set, the asset will have no playback IDs and will therefore not be playable. For simplicity, a single string name can be used in place of the array in the case of only one playback policy.\n\n  - `playback_policy?: 'public' | 'signed' | 'drm'[]`\n    Deprecated. Use `playback_policies` instead, which accepts an identical type.\n  - `static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]`\n    An array of static renditions to create for this asset. You may not enable both `static_renditions` and `mp4_support (the latter being deprecated)`\n  - `test?: boolean`\n    Marks the asset as a test asset when the value is set to true. A Test asset can help evaluate the Mux Video APIs without incurring any cost. There is no limit on number of test assets created. Test asset are watermarked with the Mux logo, limited to 10 seconds, deleted after 24 hrs.\n  - `video_quality?: 'basic' | 'plus' | 'premium'`\n    The video quality controls the cost, quality, and available platform features for the asset. The default video quality for an account can be set in the Mux Dashboard. This field replaces the deprecated `encoding_tier` value. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)\n\n- `passthrough?: string`\n\n- `playback_policies?: 'public' | 'signed' | 'drm'[]`\n  An array of playback policy names that you want applied to this live stream and available through `playback_ids`. Options include:\n\n* `\"public\"` (anyone with the playback URL can stream the live stream).\n* `\"signed\"` (an additional access token is required to play the live stream).\n\nIf no `playback_policies` is set, the live stream will have no playback IDs and will therefore not be playable. For simplicity, a single string name can be used in place of the array in the case of only one playback policy.\n\n\n- `playback_policy?: 'public' | 'signed' | 'drm'[]`\n  Deprecated. Use `playback_policies` instead, which accepts an identical type.\n\n- `reconnect_slate_url?: string`\n  The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. This file will be downloaded each time a new recorded asset is created from the live stream. If this is not set, the default slate media will be used.\n\n- `reconnect_window?: number`\n  When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live stream finished and completing the recorded asset. Defaults to 60 seconds on the API if not specified.\n\nIf not specified directly, Standard Latency streams have a Reconnect Window of 60 seconds; Reduced and Low Latency streams have a default of 0 seconds, or no Reconnect Window. For that reason, we suggest specifying a value other than zero for Reduced and Low Latency streams.\n\nReduced and Low Latency streams with a Reconnect Window greater than zero will insert slate media into the recorded asset while waiting for the streaming software to reconnect or when there are brief interruptions in the live stream media. When using a Reconnect Window setting higher than 60 seconds with a Standard Latency stream, we highly recommend enabling slate with the `use_slate_for_standard_latency` option.\n\n\n- `reduced_latency?: boolean`\n  This field is deprecated. Please use `latency_mode` instead. Latency is the time from when the streamer transmits a frame of video to when you see it in the player. Set this if you want lower latency for your live stream. Read more here: https://mux.com/blog/reduced-latency-for-mux-live-streaming-now-available/\n\n- `simulcast_targets?: { url: string; passthrough?: string; stream_key?: string; }[]`\n\n- `test?: boolean`\n  Marks the live stream as a test live stream when the value is set to true. A test live stream can help evaluate the Mux Video APIs without incurring any cost. There is no limit on number of test live streams created. Test live streams are watermarked with the Mux logo and limited to 5 minutes. The test live stream is disabled after the stream is active for 5 mins and the recorded asset also deleted after 24 hours.\n\n- `use_slate_for_standard_latency?: boolean`\n  By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. Setting this to true enables slate insertion on a Standard Latency stream.\n\n### Returns\n\n- `{ id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]; generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]; low_latency?: boolean; meta?: { title?: string; }; new_asset_settings?: { advanced_playback_policies?: object[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: object[]; inputs?: object[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: object; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: playback_policy[]; playback_policy?: playback_policy[]; static_renditions?: object[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }; passthrough?: string; playback_ids?: { id: string; policy: playback_policy; drm_configuration_id?: string; }[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: { id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `latency_mode: 'low' | 'reduced' | 'standard'`\n  - `max_continuous_duration: number`\n  - `status: 'active' | 'idle' | 'disabled'`\n  - `stream_key: string`\n  - `active_asset_id?: string`\n  - `active_ingest_protocol?: 'rtmp' | 'srt'`\n  - `audio_only?: boolean`\n  - `embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]`\n  - `generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]`\n  - `low_latency?: boolean`\n  - `meta?: { title?: string; }`\n  - `new_asset_settings?: { advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; inputs?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: 'public' | 'signed' | 'drm'[]; playback_policy?: 'public' | 'signed' | 'drm'[]; static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }`\n  - `passthrough?: string`\n  - `playback_ids?: { id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }[]`\n  - `recent_asset_ids?: string[]`\n  - `reconnect_slate_url?: string`\n  - `reconnect_window?: number`\n  - `reduced_latency?: boolean`\n  - `simulcast_targets?: { id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }[]`\n  - `srt_passphrase?: string`\n  - `test?: boolean`\n  - `use_slate_for_standard_latency?: boolean`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst liveStream = await client.video.liveStreams.create();\n\nconsole.log(liveStream);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/video/v1/live-streams/{LIVE_STREAM_ID}',
    httpMethod: 'get',
    summary: 'Retrieve a live stream',
    description:
      'Retrieves the details of a live stream that has previously been created. Supply the unique live stream ID that was returned from your previous request, and Mux will return the corresponding live stream information. The same information is returned when creating a live stream.',
    stainlessPath: '(resource) video.live_streams > (method) retrieve',
    qualified: 'client.video.liveStreams.retrieve',
    params: ['LIVE_STREAM_ID: string;'],
    response:
      "{ id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]; generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]; low_latency?: boolean; meta?: { title?: string; }; new_asset_settings?: object; passthrough?: string; playback_ids?: object[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: object[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }",
    markdown:
      "## retrieve\n\n`client.video.liveStreams.retrieve(LIVE_STREAM_ID: string): { id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: object[]; generated_subtitles?: object[]; low_latency?: boolean; meta?: object; new_asset_settings?: asset_options; passthrough?: string; playback_ids?: playback_id[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: simulcast_target[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }`\n\n**get** `/video/v1/live-streams/{LIVE_STREAM_ID}`\n\nRetrieves the details of a live stream that has previously been created. Supply the unique live stream ID that was returned from your previous request, and Mux will return the corresponding live stream information. The same information is returned when creating a live stream.\n\n### Parameters\n\n- `LIVE_STREAM_ID: string`\n\n### Returns\n\n- `{ id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]; generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]; low_latency?: boolean; meta?: { title?: string; }; new_asset_settings?: { advanced_playback_policies?: object[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: object[]; inputs?: object[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: object; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: playback_policy[]; playback_policy?: playback_policy[]; static_renditions?: object[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }; passthrough?: string; playback_ids?: { id: string; policy: playback_policy; drm_configuration_id?: string; }[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: { id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `latency_mode: 'low' | 'reduced' | 'standard'`\n  - `max_continuous_duration: number`\n  - `status: 'active' | 'idle' | 'disabled'`\n  - `stream_key: string`\n  - `active_asset_id?: string`\n  - `active_ingest_protocol?: 'rtmp' | 'srt'`\n  - `audio_only?: boolean`\n  - `embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]`\n  - `generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]`\n  - `low_latency?: boolean`\n  - `meta?: { title?: string; }`\n  - `new_asset_settings?: { advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; inputs?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: 'public' | 'signed' | 'drm'[]; playback_policy?: 'public' | 'signed' | 'drm'[]; static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }`\n  - `passthrough?: string`\n  - `playback_ids?: { id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }[]`\n  - `recent_asset_ids?: string[]`\n  - `reconnect_slate_url?: string`\n  - `reconnect_window?: number`\n  - `reduced_latency?: boolean`\n  - `simulcast_targets?: { id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }[]`\n  - `srt_passphrase?: string`\n  - `test?: boolean`\n  - `use_slate_for_standard_latency?: boolean`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst liveStream = await client.video.liveStreams.retrieve('LIVE_STREAM_ID');\n\nconsole.log(liveStream);\n```",
  },
  {
    name: 'update',
    endpoint: '/video/v1/live-streams/{LIVE_STREAM_ID}',
    httpMethod: 'patch',
    summary: 'Update a live stream',
    description:
      'Updates the parameters of a previously-created live stream. This currently supports a subset of variables. Supply the live stream ID and the updated parameters and Mux will return the corresponding live stream information. The information returned will be the same after update as for subsequent get live stream requests.',
    stainlessPath: '(resource) video.live_streams > (method) update',
    qualified: 'client.video.liveStreams.update',
    params: [
      'LIVE_STREAM_ID: string;',
      "latency_mode?: 'low' | 'reduced' | 'standard';",
      'max_continuous_duration?: number;',
      'meta?: { title?: string; };',
      "new_asset_settings?: { master_access?: 'temporary' | 'none'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; video_quality?: 'plus' | 'premium'; };",
      'passthrough?: string;',
      'reconnect_slate_url?: string;',
      'reconnect_window?: number;',
      'use_slate_for_standard_latency?: boolean;',
    ],
    response:
      "{ id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]; generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]; low_latency?: boolean; meta?: { title?: string; }; new_asset_settings?: object; passthrough?: string; playback_ids?: object[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: object[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }",
    markdown:
      "## update\n\n`client.video.liveStreams.update(LIVE_STREAM_ID: string, latency_mode?: 'low' | 'reduced' | 'standard', max_continuous_duration?: number, meta?: { title?: string; }, new_asset_settings?: { master_access?: 'temporary' | 'none'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; video_quality?: 'plus' | 'premium'; }, passthrough?: string, reconnect_slate_url?: string, reconnect_window?: number, use_slate_for_standard_latency?: boolean): { id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: object[]; generated_subtitles?: object[]; low_latency?: boolean; meta?: object; new_asset_settings?: asset_options; passthrough?: string; playback_ids?: playback_id[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: simulcast_target[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }`\n\n**patch** `/video/v1/live-streams/{LIVE_STREAM_ID}`\n\nUpdates the parameters of a previously-created live stream. This currently supports a subset of variables. Supply the live stream ID and the updated parameters and Mux will return the corresponding live stream information. The information returned will be the same after update as for subsequent get live stream requests.\n\n### Parameters\n\n- `LIVE_STREAM_ID: string`\n\n- `latency_mode?: 'low' | 'reduced' | 'standard'`\n  Latency is the time from when the streamer transmits a frame of video to when you see it in the player. Set this as an alternative to setting low latency or reduced latency flags.\n\n- `max_continuous_duration?: number`\n  The time in seconds a live stream may be continuously active before being disconnected. Defaults to 12 hours.\n\n- `meta?: { title?: string; }`\n  Customer provided metadata about this live stream.\n\nNote: This metadata may be publicly available via the video player. Do not include PII or sensitive information.\n\n  - `title?: string`\n    The live stream title. Max 512 code points.\n\n- `new_asset_settings?: { master_access?: 'temporary' | 'none'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; video_quality?: 'plus' | 'premium'; }`\n  Updates the new asset settings to use to generate a new asset for this live stream. Only the `mp4_support`, `master_access`, and `video_quality` settings may be updated.\n\n  - `master_access?: 'temporary' | 'none'`\n    Add or remove access to the master version of the video.\n  - `meta?: { creator_id?: string; external_id?: string; title?: string; }`\n    Customer provided metadata about this asset.\n\nNote: This metadata may be publicly available via the video player. Do not include PII or sensitive information.\n\n  - `mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'`\n    Deprecated. See the [Static Renditions API](https://www.mux.com/docs/guides/enable-static-mp4-renditions#during-live-stream-creation) for the updated API.\nSpecify what level of support for mp4 playback should be added to new assets generated from this live stream.\n* The `none` option disables MP4 support for new assets. MP4 files will not be produced for an asset generated from this live stream.\n* The `capped-1080p` option produces a single MP4 file, called `capped-1080p.mp4`, with the video resolution capped at 1080p. This option produces an `audio.m4a` file for an audio-only asset.\n* The `audio-only` option produces a single M4A file, called `audio.m4a` for a video or an audio-only asset. MP4 generation will error when this option is specified for a video-only asset.\n* The `audio-only,capped-1080p` option produces both the `audio.m4a` and `capped-1080p.mp4` files. Only the `capped-1080p.mp4` file is produced for a video-only asset, while only the `audio.m4a` file is produced for an audio-only asset.\n* The `standard`(deprecated) option produces up to three MP4 files with different levels of resolution (`high.mp4`, `medium.mp4`, `low.mp4`, or `audio.m4a` for an audio-only asset).\n  - `video_quality?: 'plus' | 'premium'`\n    The video quality controls the cost, quality, and available platform features for the asset. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)\n\n- `passthrough?: string`\n  Arbitrary user-supplied metadata set for the live stream. Max 255 characters. In order to clear this value, the field should be included with an empty-string value.\n\n- `reconnect_slate_url?: string`\n  The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. This file will be downloaded each time a new recorded asset is created from the live stream. Set this to a blank string to clear the value so that the default slate media will be used.\n\n- `reconnect_window?: number`\n  When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live stream finished and completing the recorded asset.\n\nIf not specified directly, Standard Latency streams have a Reconnect Window of 60 seconds; Reduced and Low Latency streams have a default of 0 seconds, or no Reconnect Window. For that reason, we suggest specifying a value other than zero for Reduced and Low Latency streams.\n\nReduced and Low Latency streams with a Reconnect Window greater than zero will insert slate media into the recorded asset while waiting for the streaming software to reconnect or when there are brief interruptions in the live stream media. When using a Reconnect Window setting higher than 60 seconds with a Standard Latency stream, we highly recommend enabling slate with the `use_slate_for_standard_latency` option.\n\n\n- `use_slate_for_standard_latency?: boolean`\n  By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. Setting this to true enables slate insertion on a Standard Latency stream.\n\n### Returns\n\n- `{ id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]; generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]; low_latency?: boolean; meta?: { title?: string; }; new_asset_settings?: { advanced_playback_policies?: object[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: object[]; inputs?: object[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: object; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: playback_policy[]; playback_policy?: playback_policy[]; static_renditions?: object[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }; passthrough?: string; playback_ids?: { id: string; policy: playback_policy; drm_configuration_id?: string; }[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: { id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `latency_mode: 'low' | 'reduced' | 'standard'`\n  - `max_continuous_duration: number`\n  - `status: 'active' | 'idle' | 'disabled'`\n  - `stream_key: string`\n  - `active_asset_id?: string`\n  - `active_ingest_protocol?: 'rtmp' | 'srt'`\n  - `audio_only?: boolean`\n  - `embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]`\n  - `generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]`\n  - `low_latency?: boolean`\n  - `meta?: { title?: string; }`\n  - `new_asset_settings?: { advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; inputs?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: 'public' | 'signed' | 'drm'[]; playback_policy?: 'public' | 'signed' | 'drm'[]; static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }`\n  - `passthrough?: string`\n  - `playback_ids?: { id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }[]`\n  - `recent_asset_ids?: string[]`\n  - `reconnect_slate_url?: string`\n  - `reconnect_window?: number`\n  - `reduced_latency?: boolean`\n  - `simulcast_targets?: { id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }[]`\n  - `srt_passphrase?: string`\n  - `test?: boolean`\n  - `use_slate_for_standard_latency?: boolean`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst liveStream = await client.video.liveStreams.update('LIVE_STREAM_ID');\n\nconsole.log(liveStream);\n```",
  },
  {
    name: 'list',
    endpoint: '/video/v1/live-streams',
    httpMethod: 'get',
    summary: 'List live streams',
    description: 'Lists the live streams that currently exist in the current environment.',
    stainlessPath: '(resource) video.live_streams > (method) list',
    qualified: 'client.video.liveStreams.list',
    params: [
      'limit?: number;',
      'page?: number;',
      "status?: 'active' | 'idle' | 'disabled';",
      'stream_key?: string;',
    ],
    response:
      "{ id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]; generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]; low_latency?: boolean; meta?: { title?: string; }; new_asset_settings?: object; passthrough?: string; playback_ids?: object[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: object[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }",
    markdown:
      "## list\n\n`client.video.liveStreams.list(limit?: number, page?: number, status?: 'active' | 'idle' | 'disabled', stream_key?: string): { id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: object[]; generated_subtitles?: object[]; low_latency?: boolean; meta?: object; new_asset_settings?: asset_options; passthrough?: string; playback_ids?: playback_id[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: simulcast_target[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }`\n\n**get** `/video/v1/live-streams`\n\nLists the live streams that currently exist in the current environment.\n\n### Parameters\n\n- `limit?: number`\n  Number of items to include in the response\n\n- `page?: number`\n  Offset by this many pages, of the size of `limit`\n\n- `status?: 'active' | 'idle' | 'disabled'`\n  Filter response to return live streams with the specified status only\n\n- `stream_key?: string`\n  Filter response to return live stream for this stream key only\n\n### Returns\n\n- `{ id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]; generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]; low_latency?: boolean; meta?: { title?: string; }; new_asset_settings?: { advanced_playback_policies?: object[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: object[]; inputs?: object[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: object; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: playback_policy[]; playback_policy?: playback_policy[]; static_renditions?: object[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }; passthrough?: string; playback_ids?: { id: string; policy: playback_policy; drm_configuration_id?: string; }[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: { id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `latency_mode: 'low' | 'reduced' | 'standard'`\n  - `max_continuous_duration: number`\n  - `status: 'active' | 'idle' | 'disabled'`\n  - `stream_key: string`\n  - `active_asset_id?: string`\n  - `active_ingest_protocol?: 'rtmp' | 'srt'`\n  - `audio_only?: boolean`\n  - `embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]`\n  - `generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]`\n  - `low_latency?: boolean`\n  - `meta?: { title?: string; }`\n  - `new_asset_settings?: { advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; inputs?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: 'public' | 'signed' | 'drm'[]; playback_policy?: 'public' | 'signed' | 'drm'[]; static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }`\n  - `passthrough?: string`\n  - `playback_ids?: { id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }[]`\n  - `recent_asset_ids?: string[]`\n  - `reconnect_slate_url?: string`\n  - `reconnect_window?: number`\n  - `reduced_latency?: boolean`\n  - `simulcast_targets?: { id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }[]`\n  - `srt_passphrase?: string`\n  - `test?: boolean`\n  - `use_slate_for_standard_latency?: boolean`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\n// Automatically fetches more pages as needed.\nfor await (const liveStream of client.video.liveStreams.list()) {\n  console.log(liveStream);\n}\n```",
  },
  {
    name: 'delete',
    endpoint: '/video/v1/live-streams/{LIVE_STREAM_ID}',
    httpMethod: 'delete',
    summary: 'Delete a live stream',
    description:
      'Deletes a live stream from the current environment. If the live stream is currently active and being streamed to, ingest will be terminated and the encoder will be disconnected.',
    stainlessPath: '(resource) video.live_streams > (method) delete',
    qualified: 'client.video.liveStreams.delete',
    params: ['LIVE_STREAM_ID: string;'],
    markdown:
      "## delete\n\n`client.video.liveStreams.delete(LIVE_STREAM_ID: string): void`\n\n**delete** `/video/v1/live-streams/{LIVE_STREAM_ID}`\n\nDeletes a live stream from the current environment. If the live stream is currently active and being streamed to, ingest will be terminated and the encoder will be disconnected.\n\n### Parameters\n\n- `LIVE_STREAM_ID: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nawait client.video.liveStreams.delete('LIVE_STREAM_ID')\n```",
  },
  {
    name: 'complete',
    endpoint: '/video/v1/live-streams/{LIVE_STREAM_ID}/complete',
    httpMethod: 'put',
    summary: 'Signal a live stream is finished',
    description:
      '(Optional) End the live stream recording immediately instead of waiting for the reconnect_window. `EXT-X-ENDLIST` tag is added to the HLS manifest which notifies the player that this live stream is over.\n\nMux does not close the encoder connection immediately. Encoders are often configured to re-establish connections immediately which would result in a new recorded asset. For this reason, Mux waits for 60s before closing the connection with the encoder. This 60s timeframe is meant to give encoder operators a chance to disconnect from their end.\n',
    stainlessPath: '(resource) video.live_streams > (method) complete',
    qualified: 'client.video.liveStreams.complete',
    params: ['LIVE_STREAM_ID: string;'],
    markdown:
      "## complete\n\n`client.video.liveStreams.complete(LIVE_STREAM_ID: string): void`\n\n**put** `/video/v1/live-streams/{LIVE_STREAM_ID}/complete`\n\n(Optional) End the live stream recording immediately instead of waiting for the reconnect_window. `EXT-X-ENDLIST` tag is added to the HLS manifest which notifies the player that this live stream is over.\n\nMux does not close the encoder connection immediately. Encoders are often configured to re-establish connections immediately which would result in a new recorded asset. For this reason, Mux waits for 60s before closing the connection with the encoder. This 60s timeframe is meant to give encoder operators a chance to disconnect from their end.\n\n\n### Parameters\n\n- `LIVE_STREAM_ID: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nawait client.video.liveStreams.complete('LIVE_STREAM_ID')\n```",
  },
  {
    name: 'create_playback_id',
    endpoint: '/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids',
    httpMethod: 'post',
    summary: 'Create a live stream playback ID',
    description:
      'Create a new playback ID for this live stream, through which a viewer can watch the streamed content of the live stream.',
    stainlessPath: '(resource) video.live_streams > (method) create_playback_id',
    qualified: 'client.video.liveStreams.createPlaybackID',
    params: [
      'LIVE_STREAM_ID: string;',
      'drm_configuration_id?: string;',
      "policy?: 'public' | 'signed' | 'drm';",
    ],
    response: "{ id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }",
    markdown:
      "## create_playback_id\n\n`client.video.liveStreams.createPlaybackID(LIVE_STREAM_ID: string, drm_configuration_id?: string, policy?: 'public' | 'signed' | 'drm'): { id: string; policy: playback_policy; drm_configuration_id?: string; }`\n\n**post** `/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids`\n\nCreate a new playback ID for this live stream, through which a viewer can watch the streamed content of the live stream.\n\n### Parameters\n\n- `LIVE_STREAM_ID: string`\n\n- `drm_configuration_id?: string`\n  The DRM configuration used by this playback ID. Must only be set when `policy` is set to `drm`.\n\n- `policy?: 'public' | 'signed' | 'drm'`\n  * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}`\n\n* `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens.\n\n* `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).\n\n\n### Returns\n\n- `{ id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }`\n\n  - `id: string`\n  - `policy: 'public' | 'signed' | 'drm'`\n  - `drm_configuration_id?: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst playbackID = await client.video.liveStreams.createPlaybackID('LIVE_STREAM_ID');\n\nconsole.log(playbackID);\n```",
  },
  {
    name: 'create_simulcast_target',
    endpoint: '/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets',
    httpMethod: 'post',
    summary: 'Create a live stream simulcast target',
    description:
      'Create a simulcast target for the parent live stream. Simulcast target can only be created when the parent live stream is in idle state. Only one simulcast target can be created at a time with this API.',
    stainlessPath: '(resource) video.live_streams > (method) create_simulcast_target',
    qualified: 'client.video.liveStreams.createSimulcastTarget',
    params: ['LIVE_STREAM_ID: string;', 'url: string;', 'passthrough?: string;', 'stream_key?: string;'],
    response:
      "{ id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }",
    markdown:
      "## create_simulcast_target\n\n`client.video.liveStreams.createSimulcastTarget(LIVE_STREAM_ID: string, url: string, passthrough?: string, stream_key?: string): { id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }`\n\n**post** `/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets`\n\nCreate a simulcast target for the parent live stream. Simulcast target can only be created when the parent live stream is in idle state. Only one simulcast target can be created at a time with this API.\n\n### Parameters\n\n- `LIVE_STREAM_ID: string`\n\n- `url: string`\n  The RTMP(s) or SRT endpoint for a simulcast destination.\n* For RTMP(s) destinations, this should include the application name for the third party live streaming service, for example: `rtmp://live.example.com/app`.\n* For SRT destinations, this should be a fully formed SRT connection string, for example: `srt://srt-live.example.com:1234?streamid={stream_key}&passphrase={srt_passphrase}`.\n\nNote: SRT simulcast targets can only be used when an source is connected over SRT.\n\n\n- `passthrough?: string`\n  Arbitrary user-supplied metadata set by you when creating a simulcast target.\n\n- `stream_key?: string`\n  Stream Key represents a stream identifier on the third party live streaming service to send the parent live stream to. Only used for RTMP(s) simulcast destinations.\n\n### Returns\n\n- `{ id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }`\n\n  - `id: string`\n  - `status: 'idle' | 'starting' | 'broadcasting' | 'errored'`\n  - `url: string`\n  - `error_severity?: 'normal' | 'fatal'`\n  - `passthrough?: string`\n  - `stream_key?: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst simulcastTarget = await client.video.liveStreams.createSimulcastTarget('LIVE_STREAM_ID', { url: 'rtmp://live.example.com/app' });\n\nconsole.log(simulcastTarget);\n```",
  },
  {
    name: 'delete_new_asset_settings_static_renditions',
    endpoint: '/video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions',
    httpMethod: 'delete',
    summary: "Delete a live stream's static renditions setting for new assets",
    description:
      "Deletes a live stream's static renditions settings for new assets. Further assets made via this live stream will not create static renditions unless re-added.",
    stainlessPath: '(resource) video.live_streams > (method) delete_new_asset_settings_static_renditions',
    qualified: 'client.video.liveStreams.deleteNewAssetSettingsStaticRenditions',
    params: ['LIVE_STREAM_ID: string;'],
    markdown:
      "## delete_new_asset_settings_static_renditions\n\n`client.video.liveStreams.deleteNewAssetSettingsStaticRenditions(LIVE_STREAM_ID: string): void`\n\n**delete** `/video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions`\n\nDeletes a live stream's static renditions settings for new assets. Further assets made via this live stream will not create static renditions unless re-added.\n\n### Parameters\n\n- `LIVE_STREAM_ID: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nawait client.video.liveStreams.deleteNewAssetSettingsStaticRenditions('LIVE_STREAM_ID')\n```",
  },
  {
    name: 'delete_playback_id',
    endpoint: '/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}',
    httpMethod: 'delete',
    summary: 'Delete a live stream playback ID',
    description:
      'Deletes the playback ID for the live stream. This will not disable ingest (as the live stream still exists). New attempts to play back the live stream will fail immediately. However, current viewers will be able to continue watching the stream for some period of time.',
    stainlessPath: '(resource) video.live_streams > (method) delete_playback_id',
    qualified: 'client.video.liveStreams.deletePlaybackID',
    params: ['LIVE_STREAM_ID: string;', 'PLAYBACK_ID: string;'],
    markdown:
      "## delete_playback_id\n\n`client.video.liveStreams.deletePlaybackID(LIVE_STREAM_ID: string, PLAYBACK_ID: string): void`\n\n**delete** `/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}`\n\nDeletes the playback ID for the live stream. This will not disable ingest (as the live stream still exists). New attempts to play back the live stream will fail immediately. However, current viewers will be able to continue watching the stream for some period of time.\n\n### Parameters\n\n- `LIVE_STREAM_ID: string`\n\n- `PLAYBACK_ID: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nawait client.video.liveStreams.deletePlaybackID('PLAYBACK_ID', { LIVE_STREAM_ID: 'LIVE_STREAM_ID' })\n```",
  },
  {
    name: 'delete_simulcast_target',
    endpoint: '/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}',
    httpMethod: 'delete',
    summary: 'Delete a live stream simulcast target',
    description:
      'Delete the simulcast target using the simulcast target ID returned when creating the simulcast target. Simulcast Target can only be deleted when the parent live stream is in idle state.',
    stainlessPath: '(resource) video.live_streams > (method) delete_simulcast_target',
    qualified: 'client.video.liveStreams.deleteSimulcastTarget',
    params: ['LIVE_STREAM_ID: string;', 'SIMULCAST_TARGET_ID: string;'],
    markdown:
      "## delete_simulcast_target\n\n`client.video.liveStreams.deleteSimulcastTarget(LIVE_STREAM_ID: string, SIMULCAST_TARGET_ID: string): void`\n\n**delete** `/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}`\n\nDelete the simulcast target using the simulcast target ID returned when creating the simulcast target. Simulcast Target can only be deleted when the parent live stream is in idle state.\n\n### Parameters\n\n- `LIVE_STREAM_ID: string`\n\n- `SIMULCAST_TARGET_ID: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nawait client.video.liveStreams.deleteSimulcastTarget('SIMULCAST_TARGET_ID', { LIVE_STREAM_ID: 'LIVE_STREAM_ID' })\n```",
  },
  {
    name: 'disable',
    endpoint: '/video/v1/live-streams/{LIVE_STREAM_ID}/disable',
    httpMethod: 'put',
    summary: 'Disable a live stream',
    description:
      'Disables a live stream, making it reject incoming RTMP streams until re-enabled. The API also ends the live stream recording immediately when active. Ending the live stream recording adds the `EXT-X-ENDLIST` tag to the HLS manifest which notifies the player that this live stream is over.\n\nMux also closes the encoder connection immediately. Any attempt from the encoder to re-establish connection will fail till the live stream is re-enabled.\n',
    stainlessPath: '(resource) video.live_streams > (method) disable',
    qualified: 'client.video.liveStreams.disable',
    params: ['LIVE_STREAM_ID: string;'],
    markdown:
      "## disable\n\n`client.video.liveStreams.disable(LIVE_STREAM_ID: string): void`\n\n**put** `/video/v1/live-streams/{LIVE_STREAM_ID}/disable`\n\nDisables a live stream, making it reject incoming RTMP streams until re-enabled. The API also ends the live stream recording immediately when active. Ending the live stream recording adds the `EXT-X-ENDLIST` tag to the HLS manifest which notifies the player that this live stream is over.\n\nMux also closes the encoder connection immediately. Any attempt from the encoder to re-establish connection will fail till the live stream is re-enabled.\n\n\n### Parameters\n\n- `LIVE_STREAM_ID: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nawait client.video.liveStreams.disable('LIVE_STREAM_ID')\n```",
  },
  {
    name: 'enable',
    endpoint: '/video/v1/live-streams/{LIVE_STREAM_ID}/enable',
    httpMethod: 'put',
    summary: 'Enable a live stream',
    description: 'Enables a live stream, allowing it to accept an incoming RTMP stream.',
    stainlessPath: '(resource) video.live_streams > (method) enable',
    qualified: 'client.video.liveStreams.enable',
    params: ['LIVE_STREAM_ID: string;'],
    markdown:
      "## enable\n\n`client.video.liveStreams.enable(LIVE_STREAM_ID: string): void`\n\n**put** `/video/v1/live-streams/{LIVE_STREAM_ID}/enable`\n\nEnables a live stream, allowing it to accept an incoming RTMP stream.\n\n### Parameters\n\n- `LIVE_STREAM_ID: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nawait client.video.liveStreams.enable('LIVE_STREAM_ID')\n```",
  },
  {
    name: 'reset_stream_key',
    endpoint: '/video/v1/live-streams/{LIVE_STREAM_ID}/reset-stream-key',
    httpMethod: 'post',
    summary: "Reset a live stream's stream key",
    description:
      'Reset a live stream key if you want to immediately stop the current stream key from working and create a new stream key that can be used for future broadcasts.',
    stainlessPath: '(resource) video.live_streams > (method) reset_stream_key',
    qualified: 'client.video.liveStreams.resetStreamKey',
    params: ['LIVE_STREAM_ID: string;'],
    response:
      "{ id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]; generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]; low_latency?: boolean; meta?: { title?: string; }; new_asset_settings?: object; passthrough?: string; playback_ids?: object[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: object[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }",
    markdown:
      "## reset_stream_key\n\n`client.video.liveStreams.resetStreamKey(LIVE_STREAM_ID: string): { id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: object[]; generated_subtitles?: object[]; low_latency?: boolean; meta?: object; new_asset_settings?: asset_options; passthrough?: string; playback_ids?: playback_id[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: simulcast_target[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }`\n\n**post** `/video/v1/live-streams/{LIVE_STREAM_ID}/reset-stream-key`\n\nReset a live stream key if you want to immediately stop the current stream key from working and create a new stream key that can be used for future broadcasts.\n\n### Parameters\n\n- `LIVE_STREAM_ID: string`\n\n### Returns\n\n- `{ id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]; generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]; low_latency?: boolean; meta?: { title?: string; }; new_asset_settings?: { advanced_playback_policies?: object[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: object[]; inputs?: object[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: object; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: playback_policy[]; playback_policy?: playback_policy[]; static_renditions?: object[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }; passthrough?: string; playback_ids?: { id: string; policy: playback_policy; drm_configuration_id?: string; }[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: { id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `latency_mode: 'low' | 'reduced' | 'standard'`\n  - `max_continuous_duration: number`\n  - `status: 'active' | 'idle' | 'disabled'`\n  - `stream_key: string`\n  - `active_asset_id?: string`\n  - `active_ingest_protocol?: 'rtmp' | 'srt'`\n  - `audio_only?: boolean`\n  - `embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]`\n  - `generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]`\n  - `low_latency?: boolean`\n  - `meta?: { title?: string; }`\n  - `new_asset_settings?: { advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; inputs?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: 'public' | 'signed' | 'drm'[]; playback_policy?: 'public' | 'signed' | 'drm'[]; static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }`\n  - `passthrough?: string`\n  - `playback_ids?: { id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }[]`\n  - `recent_asset_ids?: string[]`\n  - `reconnect_slate_url?: string`\n  - `reconnect_window?: number`\n  - `reduced_latency?: boolean`\n  - `simulcast_targets?: { id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }[]`\n  - `srt_passphrase?: string`\n  - `test?: boolean`\n  - `use_slate_for_standard_latency?: boolean`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst liveStream = await client.video.liveStreams.resetStreamKey('LIVE_STREAM_ID');\n\nconsole.log(liveStream);\n```",
  },
  {
    name: 'retrieve_playback_id',
    endpoint: '/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}',
    httpMethod: 'get',
    summary: 'Retrieve a live stream playback ID',
    description:
      "Fetches information about a live stream's playback ID, through which a viewer can watch the streamed content from this live stream.",
    stainlessPath: '(resource) video.live_streams > (method) retrieve_playback_id',
    qualified: 'client.video.liveStreams.retrievePlaybackID',
    params: ['LIVE_STREAM_ID: string;', 'PLAYBACK_ID: string;'],
    response: "{ id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }",
    markdown:
      "## retrieve_playback_id\n\n`client.video.liveStreams.retrievePlaybackID(LIVE_STREAM_ID: string, PLAYBACK_ID: string): { id: string; policy: playback_policy; drm_configuration_id?: string; }`\n\n**get** `/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}`\n\nFetches information about a live stream's playback ID, through which a viewer can watch the streamed content from this live stream.\n\n### Parameters\n\n- `LIVE_STREAM_ID: string`\n\n- `PLAYBACK_ID: string`\n\n### Returns\n\n- `{ id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }`\n\n  - `id: string`\n  - `policy: 'public' | 'signed' | 'drm'`\n  - `drm_configuration_id?: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst playbackID = await client.video.liveStreams.retrievePlaybackID('PLAYBACK_ID', { LIVE_STREAM_ID: 'LIVE_STREAM_ID' });\n\nconsole.log(playbackID);\n```",
  },
  {
    name: 'retrieve_simulcast_target',
    endpoint: '/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}',
    httpMethod: 'get',
    summary: 'Retrieve a live stream simulcast target',
    description:
      'Retrieves the details of the simulcast target created for the parent live stream. Supply the unique live stream ID and simulcast target ID that was returned in the response of create simulcast target request, and Mux will return the corresponding information.',
    stainlessPath: '(resource) video.live_streams > (method) retrieve_simulcast_target',
    qualified: 'client.video.liveStreams.retrieveSimulcastTarget',
    params: ['LIVE_STREAM_ID: string;', 'SIMULCAST_TARGET_ID: string;'],
    response:
      "{ id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }",
    markdown:
      "## retrieve_simulcast_target\n\n`client.video.liveStreams.retrieveSimulcastTarget(LIVE_STREAM_ID: string, SIMULCAST_TARGET_ID: string): { id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }`\n\n**get** `/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}`\n\nRetrieves the details of the simulcast target created for the parent live stream. Supply the unique live stream ID and simulcast target ID that was returned in the response of create simulcast target request, and Mux will return the corresponding information.\n\n### Parameters\n\n- `LIVE_STREAM_ID: string`\n\n- `SIMULCAST_TARGET_ID: string`\n\n### Returns\n\n- `{ id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }`\n\n  - `id: string`\n  - `status: 'idle' | 'starting' | 'broadcasting' | 'errored'`\n  - `url: string`\n  - `error_severity?: 'normal' | 'fatal'`\n  - `passthrough?: string`\n  - `stream_key?: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst simulcastTarget = await client.video.liveStreams.retrieveSimulcastTarget('SIMULCAST_TARGET_ID', { LIVE_STREAM_ID: 'LIVE_STREAM_ID' });\n\nconsole.log(simulcastTarget);\n```",
  },
  {
    name: 'update_embedded_subtitles',
    endpoint: '/video/v1/live-streams/{LIVE_STREAM_ID}/embedded-subtitles',
    httpMethod: 'put',
    summary: "Update a live stream's embedded subtitles",
    description:
      "Configures a live stream to receive embedded closed captions.\nThe resulting Asset's subtitle text track will have `closed_captions: true` set.\n",
    stainlessPath: '(resource) video.live_streams > (method) update_embedded_subtitles',
    qualified: 'client.video.liveStreams.updateEmbeddedSubtitles',
    params: [
      'LIVE_STREAM_ID: string;',
      "embedded_subtitles?: { language_channel?: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code?: string; name?: string; passthrough?: string; }[];",
    ],
    response:
      "{ id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]; generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]; low_latency?: boolean; meta?: { title?: string; }; new_asset_settings?: object; passthrough?: string; playback_ids?: object[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: object[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }",
    markdown:
      "## update_embedded_subtitles\n\n`client.video.liveStreams.updateEmbeddedSubtitles(LIVE_STREAM_ID: string, embedded_subtitles?: { language_channel?: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code?: string; name?: string; passthrough?: string; }[]): { id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: object[]; generated_subtitles?: object[]; low_latency?: boolean; meta?: object; new_asset_settings?: asset_options; passthrough?: string; playback_ids?: playback_id[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: simulcast_target[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }`\n\n**put** `/video/v1/live-streams/{LIVE_STREAM_ID}/embedded-subtitles`\n\nConfigures a live stream to receive embedded closed captions.\nThe resulting Asset's subtitle text track will have `closed_captions: true` set.\n\n\n### Parameters\n\n- `LIVE_STREAM_ID: string`\n\n- `embedded_subtitles?: { language_channel?: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code?: string; name?: string; passthrough?: string; }[]`\n  Describe the embedded closed caption contents of the incoming live stream.\n\n### Returns\n\n- `{ id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]; generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]; low_latency?: boolean; meta?: { title?: string; }; new_asset_settings?: { advanced_playback_policies?: object[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: object[]; inputs?: object[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: object; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: playback_policy[]; playback_policy?: playback_policy[]; static_renditions?: object[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }; passthrough?: string; playback_ids?: { id: string; policy: playback_policy; drm_configuration_id?: string; }[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: { id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `latency_mode: 'low' | 'reduced' | 'standard'`\n  - `max_continuous_duration: number`\n  - `status: 'active' | 'idle' | 'disabled'`\n  - `stream_key: string`\n  - `active_asset_id?: string`\n  - `active_ingest_protocol?: 'rtmp' | 'srt'`\n  - `audio_only?: boolean`\n  - `embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]`\n  - `generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]`\n  - `low_latency?: boolean`\n  - `meta?: { title?: string; }`\n  - `new_asset_settings?: { advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; inputs?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: 'public' | 'signed' | 'drm'[]; playback_policy?: 'public' | 'signed' | 'drm'[]; static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }`\n  - `passthrough?: string`\n  - `playback_ids?: { id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }[]`\n  - `recent_asset_ids?: string[]`\n  - `reconnect_slate_url?: string`\n  - `reconnect_window?: number`\n  - `reduced_latency?: boolean`\n  - `simulcast_targets?: { id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }[]`\n  - `srt_passphrase?: string`\n  - `test?: boolean`\n  - `use_slate_for_standard_latency?: boolean`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst liveStream = await client.video.liveStreams.updateEmbeddedSubtitles('LIVE_STREAM_ID');\n\nconsole.log(liveStream);\n```",
  },
  {
    name: 'update_generated_subtitles',
    endpoint: '/video/v1/live-streams/{LIVE_STREAM_ID}/generated-subtitles',
    httpMethod: 'put',
    summary: "Update a live stream's generated subtitles",
    description:
      "Updates a live stream's automatic-speech-recognition-generated subtitle configuration.\nAutomatic speech recognition subtitles can be removed by sending an empty array in the\nrequest payload.\n",
    stainlessPath: '(resource) video.live_streams > (method) update_generated_subtitles',
    qualified: 'client.video.liveStreams.updateGeneratedSubtitles',
    params: [
      'LIVE_STREAM_ID: string;',
      "generated_subtitles?: { language_code?: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name?: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[];",
    ],
    response:
      "{ id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]; generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]; low_latency?: boolean; meta?: { title?: string; }; new_asset_settings?: object; passthrough?: string; playback_ids?: object[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: object[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }",
    markdown:
      "## update_generated_subtitles\n\n`client.video.liveStreams.updateGeneratedSubtitles(LIVE_STREAM_ID: string, generated_subtitles?: { language_code?: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name?: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]): { id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: object[]; generated_subtitles?: object[]; low_latency?: boolean; meta?: object; new_asset_settings?: asset_options; passthrough?: string; playback_ids?: playback_id[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: simulcast_target[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }`\n\n**put** `/video/v1/live-streams/{LIVE_STREAM_ID}/generated-subtitles`\n\nUpdates a live stream's automatic-speech-recognition-generated subtitle configuration.\nAutomatic speech recognition subtitles can be removed by sending an empty array in the\nrequest payload.\n\n\n### Parameters\n\n- `LIVE_STREAM_ID: string`\n\n- `generated_subtitles?: { language_code?: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name?: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]`\n  Update automated speech recognition subtitle configuration for a live stream. At most one subtitle track is allowed.\n\n### Returns\n\n- `{ id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]; generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]; low_latency?: boolean; meta?: { title?: string; }; new_asset_settings?: { advanced_playback_policies?: object[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: object[]; inputs?: object[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: object; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: playback_policy[]; playback_policy?: playback_policy[]; static_renditions?: object[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }; passthrough?: string; playback_ids?: { id: string; policy: playback_policy; drm_configuration_id?: string; }[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: { id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `latency_mode: 'low' | 'reduced' | 'standard'`\n  - `max_continuous_duration: number`\n  - `status: 'active' | 'idle' | 'disabled'`\n  - `stream_key: string`\n  - `active_asset_id?: string`\n  - `active_ingest_protocol?: 'rtmp' | 'srt'`\n  - `audio_only?: boolean`\n  - `embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]`\n  - `generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]`\n  - `low_latency?: boolean`\n  - `meta?: { title?: string; }`\n  - `new_asset_settings?: { advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; inputs?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: 'public' | 'signed' | 'drm'[]; playback_policy?: 'public' | 'signed' | 'drm'[]; static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }`\n  - `passthrough?: string`\n  - `playback_ids?: { id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }[]`\n  - `recent_asset_ids?: string[]`\n  - `reconnect_slate_url?: string`\n  - `reconnect_window?: number`\n  - `reduced_latency?: boolean`\n  - `simulcast_targets?: { id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }[]`\n  - `srt_passphrase?: string`\n  - `test?: boolean`\n  - `use_slate_for_standard_latency?: boolean`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst liveStream = await client.video.liveStreams.updateGeneratedSubtitles('LIVE_STREAM_ID');\n\nconsole.log(liveStream);\n```",
  },
  {
    name: 'update_new_asset_settings_static_renditions',
    endpoint: '/video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions',
    httpMethod: 'put',
    summary: 'Update live stream static renditions for new assets',
    description:
      "Updates a live stream's static renditions settings for new assets. Further assets made via this live stream will create static renditions per the settings provided. You must provide all static renditions desired.",
    stainlessPath: '(resource) video.live_streams > (method) update_new_asset_settings_static_renditions',
    qualified: 'client.video.liveStreams.updateNewAssetSettingsStaticRenditions',
    params: [
      'LIVE_STREAM_ID: string;',
      "static_renditions: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[];",
    ],
    response:
      "{ id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]; generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]; low_latency?: boolean; meta?: { title?: string; }; new_asset_settings?: object; passthrough?: string; playback_ids?: object[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: object[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }",
    markdown:
      "## update_new_asset_settings_static_renditions\n\n`client.video.liveStreams.updateNewAssetSettingsStaticRenditions(LIVE_STREAM_ID: string, static_renditions: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]): { id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: object[]; generated_subtitles?: object[]; low_latency?: boolean; meta?: object; new_asset_settings?: asset_options; passthrough?: string; playback_ids?: playback_id[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: simulcast_target[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }`\n\n**put** `/video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions`\n\nUpdates a live stream's static renditions settings for new assets. Further assets made via this live stream will create static renditions per the settings provided. You must provide all static renditions desired.\n\n### Parameters\n\n- `LIVE_STREAM_ID: string`\n\n- `static_renditions: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]`\n\n### Returns\n\n- `{ id: string; created_at: string; latency_mode: 'low' | 'reduced' | 'standard'; max_continuous_duration: number; status: 'active' | 'idle' | 'disabled'; stream_key: string; active_asset_id?: string; active_ingest_protocol?: 'rtmp' | 'srt'; audio_only?: boolean; embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]; generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]; low_latency?: boolean; meta?: { title?: string; }; new_asset_settings?: { advanced_playback_policies?: object[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: object[]; inputs?: object[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: object; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: playback_policy[]; playback_policy?: playback_policy[]; static_renditions?: object[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }; passthrough?: string; playback_ids?: { id: string; policy: playback_policy; drm_configuration_id?: string; }[]; recent_asset_ids?: string[]; reconnect_slate_url?: string; reconnect_window?: number; reduced_latency?: boolean; simulcast_targets?: { id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }[]; srt_passphrase?: string; test?: boolean; use_slate_for_standard_latency?: boolean; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `latency_mode: 'low' | 'reduced' | 'standard'`\n  - `max_continuous_duration: number`\n  - `status: 'active' | 'idle' | 'disabled'`\n  - `stream_key: string`\n  - `active_asset_id?: string`\n  - `active_ingest_protocol?: 'rtmp' | 'srt'`\n  - `audio_only?: boolean`\n  - `embedded_subtitles?: { language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4'; language_code: string; name: string; passthrough?: string; }[]`\n  - `generated_subtitles?: { language_code: 'en' | 'en-US' | 'es' | 'fr' | 'de' | 'pt' | 'it'; name: string; passthrough?: string; transcription_vocabulary_ids?: string[]; }[]`\n  - `low_latency?: boolean`\n  - `meta?: { title?: string; }`\n  - `new_asset_settings?: { advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; inputs?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: 'public' | 'signed' | 'drm'[]; playback_policy?: 'public' | 'signed' | 'drm'[]; static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }`\n  - `passthrough?: string`\n  - `playback_ids?: { id: string; policy: 'public' | 'signed' | 'drm'; drm_configuration_id?: string; }[]`\n  - `recent_asset_ids?: string[]`\n  - `reconnect_slate_url?: string`\n  - `reconnect_window?: number`\n  - `reduced_latency?: boolean`\n  - `simulcast_targets?: { id: string; status: 'idle' | 'starting' | 'broadcasting' | 'errored'; url: string; error_severity?: 'normal' | 'fatal'; passthrough?: string; stream_key?: string; }[]`\n  - `srt_passphrase?: string`\n  - `test?: boolean`\n  - `use_slate_for_standard_latency?: boolean`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst liveStream = await client.video.liveStreams.updateNewAssetSettingsStaticRenditions('LIVE_STREAM_ID', { static_renditions: [{ resolution: 'audio-only' }, { resolution: 'highest' }] });\n\nconsole.log(liveStream);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/video/v1/playback-ids/{PLAYBACK_ID}',
    httpMethod: 'get',
    summary: 'Retrieve an asset or live stream ID',
    description: 'Retrieves the Identifier of the Asset or Live Stream associated with the Playback ID.',
    stainlessPath: '(resource) video.playback_ids > (method) retrieve',
    qualified: 'client.video.playbackIDs.retrieve',
    params: ['PLAYBACK_ID: string;'],
    response:
      "{ id: string; object: { id: string; type: 'asset' | 'live_stream'; }; policy: 'public' | 'signed' | 'drm'; }",
    markdown:
      "## retrieve\n\n`client.video.playbackIDs.retrieve(PLAYBACK_ID: string): { id: string; object: object; policy: playback_policy; }`\n\n**get** `/video/v1/playback-ids/{PLAYBACK_ID}`\n\nRetrieves the Identifier of the Asset or Live Stream associated with the Playback ID.\n\n### Parameters\n\n- `PLAYBACK_ID: string`\n\n### Returns\n\n- `{ id: string; object: { id: string; type: 'asset' | 'live_stream'; }; policy: 'public' | 'signed' | 'drm'; }`\n\n  - `id: string`\n  - `object: { id: string; type: 'asset' | 'live_stream'; }`\n  - `policy: 'public' | 'signed' | 'drm'`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst playbackID = await client.video.playbackIDs.retrieve('PLAYBACK_ID');\n\nconsole.log(playbackID);\n```",
  },
  {
    name: 'create',
    endpoint: '/video/v1/playback-restrictions',
    httpMethod: 'post',
    summary: 'Create a Playback Restriction',
    description: 'Create a new Playback Restriction.',
    stainlessPath: '(resource) video.playback_restrictions > (method) create',
    qualified: 'client.video.playbackRestrictions.create',
    params: [
      'referrer: { allowed_domains: string[]; allow_no_referrer?: boolean; };',
      'user_agent: { allow_high_risk_user_agent?: boolean; allow_no_user_agent?: boolean; };',
    ],
    response:
      '{ id: string; created_at: string; referrer: { allow_no_referrer?: boolean; allowed_domains?: string[]; }; updated_at: string; user_agent: { allow_high_risk_user_agent?: boolean; allow_no_user_agent?: boolean; }; }',
    markdown:
      '## create\n\n`client.video.playbackRestrictions.create(referrer: { allowed_domains: string[]; allow_no_referrer?: boolean; }, user_agent: { allow_high_risk_user_agent?: boolean; allow_no_user_agent?: boolean; }): { id: string; created_at: string; referrer: object; updated_at: string; user_agent: object; }`\n\n**post** `/video/v1/playback-restrictions`\n\nCreate a new Playback Restriction.\n\n### Parameters\n\n- `referrer: { allowed_domains: string[]; allow_no_referrer?: boolean; }`\n  A list of domains allowed to play your videos.\n  - `allowed_domains: string[]`\n    List of domains allowed to play videos. Possible values are\n  * `[]` Empty Array indicates deny video playback requests for all domains\n  * `["*"]` A Single Wildcard `*` entry means allow video playback requests from any domain\n  * `["*.example.com", "foo.com"]` A list of up to 10 domains or valid dns-style wildcards\n\n  - `allow_no_referrer?: boolean`\n    A boolean to determine whether to allow or deny HTTP requests without `Referer` HTTP request header. Playback requests coming from non-web/native applications like iOS, Android or smart TVs will not have a `Referer` HTTP header. Set this value to `true` to allow these playback requests.\n\n- `user_agent: { allow_high_risk_user_agent?: boolean; allow_no_user_agent?: boolean; }`\n  Rules that control what user agents are allowed to play your videos. Please see [Using User-Agent HTTP header for validation](https://docs.mux.com/guides/secure-video-playback#using-user-agent-http-header-for-validation) for more details on this feature.\n  - `allow_high_risk_user_agent?: boolean`\n    Whether or not to allow high risk user agents. The high risk user agents are defined by Mux.\n  - `allow_no_user_agent?: boolean`\n    Whether or not to allow views without a `User-Agent` HTTP request header.\n\n### Returns\n\n- `{ id: string; created_at: string; referrer: { allow_no_referrer?: boolean; allowed_domains?: string[]; }; updated_at: string; user_agent: { allow_high_risk_user_agent?: boolean; allow_no_user_agent?: boolean; }; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `referrer: { allow_no_referrer?: boolean; allowed_domains?: string[]; }`\n  - `updated_at: string`\n  - `user_agent: { allow_high_risk_user_agent?: boolean; allow_no_user_agent?: boolean; }`\n\n### Example\n\n```typescript\nimport Mux from \'@mux/mux-node\';\n\nconst client = new Mux();\n\nconst playbackRestriction = await client.video.playbackRestrictions.create({\n  referrer: { allowed_domains: [\'*.example.com\'] },\n  user_agent: {},\n});\n\nconsole.log(playbackRestriction);\n```',
  },
  {
    name: 'retrieve',
    endpoint: '/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}',
    httpMethod: 'get',
    summary: 'Retrieve a Playback Restriction',
    description: 'Retrieves a Playback Restriction associated with the unique identifier.',
    stainlessPath: '(resource) video.playback_restrictions > (method) retrieve',
    qualified: 'client.video.playbackRestrictions.retrieve',
    params: ['PLAYBACK_RESTRICTION_ID: string;'],
    response:
      '{ id: string; created_at: string; referrer: { allow_no_referrer?: boolean; allowed_domains?: string[]; }; updated_at: string; user_agent: { allow_high_risk_user_agent?: boolean; allow_no_user_agent?: boolean; }; }',
    markdown:
      "## retrieve\n\n`client.video.playbackRestrictions.retrieve(PLAYBACK_RESTRICTION_ID: string): { id: string; created_at: string; referrer: object; updated_at: string; user_agent: object; }`\n\n**get** `/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}`\n\nRetrieves a Playback Restriction associated with the unique identifier.\n\n### Parameters\n\n- `PLAYBACK_RESTRICTION_ID: string`\n\n### Returns\n\n- `{ id: string; created_at: string; referrer: { allow_no_referrer?: boolean; allowed_domains?: string[]; }; updated_at: string; user_agent: { allow_high_risk_user_agent?: boolean; allow_no_user_agent?: boolean; }; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `referrer: { allow_no_referrer?: boolean; allowed_domains?: string[]; }`\n  - `updated_at: string`\n  - `user_agent: { allow_high_risk_user_agent?: boolean; allow_no_user_agent?: boolean; }`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst playbackRestriction = await client.video.playbackRestrictions.retrieve('PLAYBACK_RESTRICTION_ID');\n\nconsole.log(playbackRestriction);\n```",
  },
  {
    name: 'list',
    endpoint: '/video/v1/playback-restrictions',
    httpMethod: 'get',
    summary: 'List Playback Restrictions',
    description: 'Returns a list of all Playback Restrictions.',
    stainlessPath: '(resource) video.playback_restrictions > (method) list',
    qualified: 'client.video.playbackRestrictions.list',
    params: ['limit?: number;', 'page?: number;'],
    response:
      '{ id: string; created_at: string; referrer: { allow_no_referrer?: boolean; allowed_domains?: string[]; }; updated_at: string; user_agent: { allow_high_risk_user_agent?: boolean; allow_no_user_agent?: boolean; }; }',
    markdown:
      "## list\n\n`client.video.playbackRestrictions.list(limit?: number, page?: number): { id: string; created_at: string; referrer: object; updated_at: string; user_agent: object; }`\n\n**get** `/video/v1/playback-restrictions`\n\nReturns a list of all Playback Restrictions.\n\n### Parameters\n\n- `limit?: number`\n  Number of items to include in the response\n\n- `page?: number`\n  Offset by this many pages, of the size of `limit`\n\n### Returns\n\n- `{ id: string; created_at: string; referrer: { allow_no_referrer?: boolean; allowed_domains?: string[]; }; updated_at: string; user_agent: { allow_high_risk_user_agent?: boolean; allow_no_user_agent?: boolean; }; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `referrer: { allow_no_referrer?: boolean; allowed_domains?: string[]; }`\n  - `updated_at: string`\n  - `user_agent: { allow_high_risk_user_agent?: boolean; allow_no_user_agent?: boolean; }`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\n// Automatically fetches more pages as needed.\nfor await (const playbackRestriction of client.video.playbackRestrictions.list()) {\n  console.log(playbackRestriction);\n}\n```",
  },
  {
    name: 'delete',
    endpoint: '/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}',
    httpMethod: 'delete',
    summary: 'Delete a Playback Restriction',
    description: 'Deletes a single Playback Restriction.',
    stainlessPath: '(resource) video.playback_restrictions > (method) delete',
    qualified: 'client.video.playbackRestrictions.delete',
    params: ['PLAYBACK_RESTRICTION_ID: string;'],
    markdown:
      "## delete\n\n`client.video.playbackRestrictions.delete(PLAYBACK_RESTRICTION_ID: string): void`\n\n**delete** `/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}`\n\nDeletes a single Playback Restriction.\n\n### Parameters\n\n- `PLAYBACK_RESTRICTION_ID: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nawait client.video.playbackRestrictions.delete('PLAYBACK_RESTRICTION_ID')\n```",
  },
  {
    name: 'update_referrer',
    endpoint: '/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/referrer',
    httpMethod: 'put',
    summary: 'Update the Referrer Playback Restriction',
    description:
      'Allows you to modify the list of domains or change how Mux validates playback requests without the `Referer` HTTP header. The Referrer restriction fully replaces the old list with this new list of domains.',
    stainlessPath: '(resource) video.playback_restrictions > (method) update_referrer',
    qualified: 'client.video.playbackRestrictions.updateReferrer',
    params: [
      'PLAYBACK_RESTRICTION_ID: string;',
      'allowed_domains: string[];',
      'allow_no_referrer?: boolean;',
    ],
    response:
      '{ id: string; created_at: string; referrer: { allow_no_referrer?: boolean; allowed_domains?: string[]; }; updated_at: string; user_agent: { allow_high_risk_user_agent?: boolean; allow_no_user_agent?: boolean; }; }',
    markdown:
      '## update_referrer\n\n`client.video.playbackRestrictions.updateReferrer(PLAYBACK_RESTRICTION_ID: string, allowed_domains: string[], allow_no_referrer?: boolean): { id: string; created_at: string; referrer: object; updated_at: string; user_agent: object; }`\n\n**put** `/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/referrer`\n\nAllows you to modify the list of domains or change how Mux validates playback requests without the `Referer` HTTP header. The Referrer restriction fully replaces the old list with this new list of domains.\n\n### Parameters\n\n- `PLAYBACK_RESTRICTION_ID: string`\n\n- `allowed_domains: string[]`\n  List of domains allowed to play videos. Possible values are\n  * `[]` Empty Array indicates deny video playback requests for all domains\n  * `["*"]` A Single Wildcard `*` entry means allow video playback requests from any domain\n  * `["*.example.com", "foo.com"]` A list of up to 10 domains or valid dns-style wildcards\n\n\n- `allow_no_referrer?: boolean`\n  A boolean to determine whether to allow or deny HTTP requests without `Referer` HTTP request header. Playback requests coming from non-web/native applications like iOS, Android or smart TVs will not have a `Referer` HTTP header. Set this value to `true` to allow these playback requests.\n\n### Returns\n\n- `{ id: string; created_at: string; referrer: { allow_no_referrer?: boolean; allowed_domains?: string[]; }; updated_at: string; user_agent: { allow_high_risk_user_agent?: boolean; allow_no_user_agent?: boolean; }; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `referrer: { allow_no_referrer?: boolean; allowed_domains?: string[]; }`\n  - `updated_at: string`\n  - `user_agent: { allow_high_risk_user_agent?: boolean; allow_no_user_agent?: boolean; }`\n\n### Example\n\n```typescript\nimport Mux from \'@mux/mux-node\';\n\nconst client = new Mux();\n\nconst playbackRestriction = await client.video.playbackRestrictions.updateReferrer(\'PLAYBACK_RESTRICTION_ID\', { allowed_domains: [\'*.example.com\'] });\n\nconsole.log(playbackRestriction);\n```',
  },
  {
    name: 'update_user_agent',
    endpoint: '/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/user_agent',
    httpMethod: 'put',
    summary: 'Update the User Agent Restriction',
    description:
      'Allows you to modify how Mux validates playback requests with different user agents.  Please see [Using User-Agent HTTP header for validation](https://docs.mux.com/guides/secure-video-playback#using-user-agent-http-header-for-validation) for more details on this feature.',
    stainlessPath: '(resource) video.playback_restrictions > (method) update_user_agent',
    qualified: 'client.video.playbackRestrictions.updateUserAgent',
    params: [
      'PLAYBACK_RESTRICTION_ID: string;',
      'allow_high_risk_user_agent: boolean;',
      'allow_no_user_agent: boolean;',
    ],
    response:
      '{ id: string; created_at: string; referrer: { allow_no_referrer?: boolean; allowed_domains?: string[]; }; updated_at: string; user_agent: { allow_high_risk_user_agent?: boolean; allow_no_user_agent?: boolean; }; }',
    markdown:
      "## update_user_agent\n\n`client.video.playbackRestrictions.updateUserAgent(PLAYBACK_RESTRICTION_ID: string, allow_high_risk_user_agent: boolean, allow_no_user_agent: boolean): { id: string; created_at: string; referrer: object; updated_at: string; user_agent: object; }`\n\n**put** `/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/user_agent`\n\nAllows you to modify how Mux validates playback requests with different user agents.  Please see [Using User-Agent HTTP header for validation](https://docs.mux.com/guides/secure-video-playback#using-user-agent-http-header-for-validation) for more details on this feature.\n\n### Parameters\n\n- `PLAYBACK_RESTRICTION_ID: string`\n\n- `allow_high_risk_user_agent: boolean`\n  Whether or not to allow high risk user agents. The high risk user agents are defined by Mux.\n\n- `allow_no_user_agent: boolean`\n  Whether or not to allow views without a `User-Agent` HTTP request header.\n\n### Returns\n\n- `{ id: string; created_at: string; referrer: { allow_no_referrer?: boolean; allowed_domains?: string[]; }; updated_at: string; user_agent: { allow_high_risk_user_agent?: boolean; allow_no_user_agent?: boolean; }; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `referrer: { allow_no_referrer?: boolean; allowed_domains?: string[]; }`\n  - `updated_at: string`\n  - `user_agent: { allow_high_risk_user_agent?: boolean; allow_no_user_agent?: boolean; }`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst playbackRestriction = await client.video.playbackRestrictions.updateUserAgent('PLAYBACK_RESTRICTION_ID', { allow_high_risk_user_agent: false, allow_no_user_agent: false });\n\nconsole.log(playbackRestriction);\n```",
  },
  {
    name: 'create',
    endpoint: '/video/v1/transcription-vocabularies',
    httpMethod: 'post',
    summary: 'Create a Transcription Vocabulary',
    description: 'Create a new Transcription Vocabulary.',
    stainlessPath: '(resource) video.transcription_vocabularies > (method) create',
    qualified: 'client.video.transcriptionVocabularies.create',
    params: ['phrases: string[];', 'name?: string;', 'passthrough?: string;'],
    response:
      '{ id: string; created_at: string; updated_at: string; name?: string; passthrough?: string; phrases?: string[]; }',
    markdown:
      "## create\n\n`client.video.transcriptionVocabularies.create(phrases: string[], name?: string, passthrough?: string): { id: string; created_at: string; updated_at: string; name?: string; passthrough?: string; phrases?: string[]; }`\n\n**post** `/video/v1/transcription-vocabularies`\n\nCreate a new Transcription Vocabulary.\n\n### Parameters\n\n- `phrases: string[]`\n  Phrases, individual words, or proper names to include in the Transcription Vocabulary. When the Transcription Vocabulary is attached to a live stream's `generated_subtitles`, the probability of successful speech recognition for these words or phrases is boosted.\n\n- `name?: string`\n  The user-supplied name of the Transcription Vocabulary.\n\n- `passthrough?: string`\n  Arbitrary user-supplied metadata set for the Transcription Vocabulary. Max 255 characters.\n\n### Returns\n\n- `{ id: string; created_at: string; updated_at: string; name?: string; passthrough?: string; phrases?: string[]; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `updated_at: string`\n  - `name?: string`\n  - `passthrough?: string`\n  - `phrases?: string[]`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst transcriptionVocabulary = await client.video.transcriptionVocabularies.create({ phrases: ['Mux', 'Live Stream', 'Playback ID', 'video encoding'] });\n\nconsole.log(transcriptionVocabulary);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}',
    httpMethod: 'get',
    summary: 'Retrieve a Transcription Vocabulary',
    description:
      'Retrieves the details of a Transcription Vocabulary that has previously been created. Supply the unique Transcription Vocabulary ID and Mux will return the corresponding Transcription Vocabulary information. The same information is returned when creating a Transcription Vocabulary.',
    stainlessPath: '(resource) video.transcription_vocabularies > (method) retrieve',
    qualified: 'client.video.transcriptionVocabularies.retrieve',
    params: ['TRANSCRIPTION_VOCABULARY_ID: string;'],
    response:
      '{ id: string; created_at: string; updated_at: string; name?: string; passthrough?: string; phrases?: string[]; }',
    markdown:
      "## retrieve\n\n`client.video.transcriptionVocabularies.retrieve(TRANSCRIPTION_VOCABULARY_ID: string): { id: string; created_at: string; updated_at: string; name?: string; passthrough?: string; phrases?: string[]; }`\n\n**get** `/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}`\n\nRetrieves the details of a Transcription Vocabulary that has previously been created. Supply the unique Transcription Vocabulary ID and Mux will return the corresponding Transcription Vocabulary information. The same information is returned when creating a Transcription Vocabulary.\n\n### Parameters\n\n- `TRANSCRIPTION_VOCABULARY_ID: string`\n\n### Returns\n\n- `{ id: string; created_at: string; updated_at: string; name?: string; passthrough?: string; phrases?: string[]; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `updated_at: string`\n  - `name?: string`\n  - `passthrough?: string`\n  - `phrases?: string[]`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst transcriptionVocabulary = await client.video.transcriptionVocabularies.retrieve('TRANSCRIPTION_VOCABULARY_ID');\n\nconsole.log(transcriptionVocabulary);\n```",
  },
  {
    name: 'update',
    endpoint: '/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}',
    httpMethod: 'put',
    summary: 'Update a Transcription Vocabulary',
    description:
      'Updates the details of a previously-created Transcription Vocabulary. Updates to Transcription Vocabularies are allowed while associated live streams are active. However, updates will not be applied to those streams while they are active.',
    stainlessPath: '(resource) video.transcription_vocabularies > (method) update',
    qualified: 'client.video.transcriptionVocabularies.update',
    params: [
      'TRANSCRIPTION_VOCABULARY_ID: string;',
      'phrases: string[];',
      'name?: string;',
      'passthrough?: string;',
    ],
    response:
      '{ id: string; created_at: string; updated_at: string; name?: string; passthrough?: string; phrases?: string[]; }',
    markdown:
      "## update\n\n`client.video.transcriptionVocabularies.update(TRANSCRIPTION_VOCABULARY_ID: string, phrases: string[], name?: string, passthrough?: string): { id: string; created_at: string; updated_at: string; name?: string; passthrough?: string; phrases?: string[]; }`\n\n**put** `/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}`\n\nUpdates the details of a previously-created Transcription Vocabulary. Updates to Transcription Vocabularies are allowed while associated live streams are active. However, updates will not be applied to those streams while they are active.\n\n### Parameters\n\n- `TRANSCRIPTION_VOCABULARY_ID: string`\n\n- `phrases: string[]`\n  Phrases, individual words, or proper names to include in the Transcription Vocabulary. When the Transcription Vocabulary is attached to a live stream's `generated_subtitles`, the probability of successful speech recognition for these words or phrases is boosted.\n\n- `name?: string`\n  The user-supplied name of the Transcription Vocabulary.\n\n- `passthrough?: string`\n  Arbitrary user-supplied metadata set for the Transcription Vocabulary. Max 255 characters.\n\n### Returns\n\n- `{ id: string; created_at: string; updated_at: string; name?: string; passthrough?: string; phrases?: string[]; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `updated_at: string`\n  - `name?: string`\n  - `passthrough?: string`\n  - `phrases?: string[]`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst transcriptionVocabulary = await client.video.transcriptionVocabularies.update('TRANSCRIPTION_VOCABULARY_ID', { phrases: ['Mux', 'Live Stream', 'RTMP', 'Stream Key'] });\n\nconsole.log(transcriptionVocabulary);\n```",
  },
  {
    name: 'list',
    endpoint: '/video/v1/transcription-vocabularies',
    httpMethod: 'get',
    summary: 'List Transcription Vocabularies',
    description: 'List all Transcription Vocabularies.',
    stainlessPath: '(resource) video.transcription_vocabularies > (method) list',
    qualified: 'client.video.transcriptionVocabularies.list',
    params: ['limit?: number;', 'page?: number;'],
    response:
      '{ id: string; created_at: string; updated_at: string; name?: string; passthrough?: string; phrases?: string[]; }',
    markdown:
      "## list\n\n`client.video.transcriptionVocabularies.list(limit?: number, page?: number): { id: string; created_at: string; updated_at: string; name?: string; passthrough?: string; phrases?: string[]; }`\n\n**get** `/video/v1/transcription-vocabularies`\n\nList all Transcription Vocabularies.\n\n### Parameters\n\n- `limit?: number`\n  Number of items to include in the response\n\n- `page?: number`\n  Offset by this many pages, of the size of `limit`\n\n### Returns\n\n- `{ id: string; created_at: string; updated_at: string; name?: string; passthrough?: string; phrases?: string[]; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `updated_at: string`\n  - `name?: string`\n  - `passthrough?: string`\n  - `phrases?: string[]`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\n// Automatically fetches more pages as needed.\nfor await (const transcriptionVocabulary of client.video.transcriptionVocabularies.list()) {\n  console.log(transcriptionVocabulary);\n}\n```",
  },
  {
    name: 'delete',
    endpoint: '/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}',
    httpMethod: 'delete',
    summary: 'Delete a Transcription Vocabulary',
    description:
      "Deletes a Transcription Vocabulary. The Transcription Vocabulary's ID will be disassociated from any live streams using it. Transcription Vocabularies can be deleted while associated live streams are active. However, the words and phrases in the deleted Transcription Vocabulary will remain attached to those streams while they are active.",
    stainlessPath: '(resource) video.transcription_vocabularies > (method) delete',
    qualified: 'client.video.transcriptionVocabularies.delete',
    params: ['TRANSCRIPTION_VOCABULARY_ID: string;'],
    markdown:
      "## delete\n\n`client.video.transcriptionVocabularies.delete(TRANSCRIPTION_VOCABULARY_ID: string): void`\n\n**delete** `/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}`\n\nDeletes a Transcription Vocabulary. The Transcription Vocabulary's ID will be disassociated from any live streams using it. Transcription Vocabularies can be deleted while associated live streams are active. However, the words and phrases in the deleted Transcription Vocabulary will remain attached to those streams while they are active.\n\n### Parameters\n\n- `TRANSCRIPTION_VOCABULARY_ID: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nawait client.video.transcriptionVocabularies.delete('TRANSCRIPTION_VOCABULARY_ID')\n```",
  },
  {
    name: 'create',
    endpoint: '/video/v1/uploads',
    httpMethod: 'post',
    summary: 'Create a new direct upload URL',
    description:
      'Creates a new direct upload, through which video content can be uploaded for ingest to Mux.',
    stainlessPath: '(resource) video.uploads > (method) create',
    qualified: 'client.video.uploads.create',
    params: [
      'cors_origin: string;',
      "new_asset_settings?: { advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; inputs?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: 'public' | 'signed' | 'drm'[]; playback_policy?: 'public' | 'signed' | 'drm'[]; static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; };",
      'test?: boolean;',
      'timeout?: number;',
    ],
    response:
      "{ id: string; cors_origin: string; status: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out'; timeout: number; url: string; asset_id?: string; error?: { message?: string; type?: string; }; new_asset_settings?: { advanced_playback_policies?: object[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: object[]; inputs?: object[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: object; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: playback_policy[]; playback_policy?: playback_policy[]; static_renditions?: object[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }; test?: boolean; }",
    markdown:
      "## create\n\n`client.video.uploads.create(cors_origin: string, new_asset_settings?: { advanced_playback_policies?: object[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: object[]; inputs?: object[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: object; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: playback_policy[]; playback_policy?: playback_policy[]; static_renditions?: object[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }, test?: boolean, timeout?: number): { id: string; cors_origin: string; status: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out'; timeout: number; url: string; asset_id?: string; error?: object; new_asset_settings?: asset_options; test?: boolean; }`\n\n**post** `/video/v1/uploads`\n\nCreates a new direct upload, through which video content can be uploaded for ingest to Mux.\n\n### Parameters\n\n- `cors_origin: string`\n  If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers.\n\n- `new_asset_settings?: { advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; inputs?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: 'public' | 'signed' | 'drm'[]; playback_policy?: 'public' | 'signed' | 'drm'[]; static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }`\n  - `advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]`\n    An array of playback policy objects that you want applied to this asset and available through `playback_ids`. `advanced_playback_policies` must be used instead of `playback_policies` when creating a DRM playback ID.\n\n  - `copy_overlays?: boolean`\n    If the created asset is a clip, this controls whether overlays are copied from the source asset.\n  - `encoding_tier?: 'smart' | 'baseline' | 'premium'`\n    This field is deprecated. Please use `video_quality` instead. The encoding tier informs the cost, quality, and available platform features for the asset. The default encoding tier for an account can be set in the Mux Dashboard. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)\n  - `input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]`\n    Deprecated. Use `inputs` instead, which accepts an identical type.\n  - `inputs?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]`\n    An array of objects that each describe an input file to be used to create the asset. As a shortcut, input can also be a string URL for a file when only one input file is used. See `input[].url` for requirements.\n  - `master_access?: 'none' | 'temporary'`\n    Specify what level (if any) of support for master access. Master access can be enabled temporarily for your asset to be downloaded. See the [Download your videos guide](https://docs.mux.com/guides/enable-static-mp4-renditions) for more information.\n  - `max_resolution_tier?: '1080p' | '1440p' | '2160p'`\n    Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. If not set, this defaults to `1080p`.\n  - `meta?: { creator_id?: string; external_id?: string; title?: string; }`\n    Customer provided metadata about this asset.\n\nNote: This metadata may be publicly available via the video player. Do not include PII or sensitive information.\n\n  - `mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'`\n    Deprecated. See the [Static Renditions API](https://www.mux.com/docs/guides/enable-static-mp4-renditions) for the updated API.\n\nSpecify what level of support for mp4 playback. You may not enable both `mp4_support` and  `static_renditions`.\n\n* The `capped-1080p` option produces a single MP4 file, called `capped-1080p.mp4`, with the video resolution capped at 1080p. This option produces an `audio.m4a` file for an audio-only asset.\n* The `audio-only` option produces a single M4A file, called `audio.m4a` for a video or an audio-only asset. MP4 generation will error when this option is specified for a video-only asset.\n* The `audio-only,capped-1080p` option produces both the `audio.m4a` and `capped-1080p.mp4` files. Only the `capped-1080p.mp4` file is produced for a video-only asset, while only the `audio.m4a` file is produced for an audio-only asset.\n\nThe `standard`(deprecated) option produces up to three MP4 files with different levels of resolution (`high.mp4`, `medium.mp4`, `low.mp4`, or `audio.m4a` for an audio-only asset).\n\nMP4 files are not produced for `none` (default).\n\nIn most cases you should use our default HLS-based streaming playback (`{playback_id}.m3u8`) which can automatically adjust to viewers' connection speeds, but an mp4 can be useful for some legacy devices or downloading for offline playback. See the [Download your videos guide](https://docs.mux.com/guides/enable-static-mp4-renditions) for more information.\n  - `normalize_audio?: boolean`\n    Normalize the audio track loudness level. This parameter is only applicable to on-demand (not live) assets.\n  - `passthrough?: string`\n    You can set this field to anything you want. It will be included in the asset details and related webhooks. If you're looking for more structured metadata, such as `title` or `external_id`, you can use the `meta` object instead. **Max: 255 characters**.\n  - `per_title_encode?: boolean`\n  - `playback_policies?: 'public' | 'signed' | 'drm'[]`\n    An array of playback policy names that you want applied to this asset and available through `playback_ids`. Options include:\n\n* `\"public\"` (anyone with the playback URL can stream the asset).\n* `\"signed\"` (an additional access token is required to play the asset).\n\nIf no `playback_policies` are set, the asset will have no playback IDs and will therefore not be playable. For simplicity, a single string name can be used in place of the array in the case of only one playback policy.\n\n  - `playback_policy?: 'public' | 'signed' | 'drm'[]`\n    Deprecated. Use `playback_policies` instead, which accepts an identical type.\n  - `static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]`\n    An array of static renditions to create for this asset. You may not enable both `static_renditions` and `mp4_support (the latter being deprecated)`\n  - `test?: boolean`\n    Marks the asset as a test asset when the value is set to true. A Test asset can help evaluate the Mux Video APIs without incurring any cost. There is no limit on number of test assets created. Test asset are watermarked with the Mux logo, limited to 10 seconds, deleted after 24 hrs.\n  - `video_quality?: 'basic' | 'plus' | 'premium'`\n    The video quality controls the cost, quality, and available platform features for the asset. The default video quality for an account can be set in the Mux Dashboard. This field replaces the deprecated `encoding_tier` value. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)\n\n- `test?: boolean`\n  Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset.\n\n- `timeout?: number`\n  Max time in seconds for the signed upload URL to be valid. If a successful upload has not occurred before the timeout limit, the direct upload is marked `timed_out`\n\n### Returns\n\n- `{ id: string; cors_origin: string; status: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out'; timeout: number; url: string; asset_id?: string; error?: { message?: string; type?: string; }; new_asset_settings?: { advanced_playback_policies?: object[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: object[]; inputs?: object[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: object; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: playback_policy[]; playback_policy?: playback_policy[]; static_renditions?: object[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }; test?: boolean; }`\n\n  - `id: string`\n  - `cors_origin: string`\n  - `status: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out'`\n  - `timeout: number`\n  - `url: string`\n  - `asset_id?: string`\n  - `error?: { message?: string; type?: string; }`\n  - `new_asset_settings?: { advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; inputs?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: 'public' | 'signed' | 'drm'[]; playback_policy?: 'public' | 'signed' | 'drm'[]; static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }`\n  - `test?: boolean`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst upload = await client.video.uploads.create({ cors_origin: 'https://example.com/' });\n\nconsole.log(upload);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/video/v1/uploads/{UPLOAD_ID}',
    httpMethod: 'get',
    summary: "Retrieve a single direct upload's info",
    description: 'Fetches information about a single direct upload in the current environment.',
    stainlessPath: '(resource) video.uploads > (method) retrieve',
    qualified: 'client.video.uploads.retrieve',
    params: ['UPLOAD_ID: string;'],
    response:
      "{ id: string; cors_origin: string; status: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out'; timeout: number; url: string; asset_id?: string; error?: { message?: string; type?: string; }; new_asset_settings?: { advanced_playback_policies?: object[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: object[]; inputs?: object[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: object; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: playback_policy[]; playback_policy?: playback_policy[]; static_renditions?: object[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }; test?: boolean; }",
    markdown:
      "## retrieve\n\n`client.video.uploads.retrieve(UPLOAD_ID: string): { id: string; cors_origin: string; status: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out'; timeout: number; url: string; asset_id?: string; error?: object; new_asset_settings?: asset_options; test?: boolean; }`\n\n**get** `/video/v1/uploads/{UPLOAD_ID}`\n\nFetches information about a single direct upload in the current environment.\n\n### Parameters\n\n- `UPLOAD_ID: string`\n\n### Returns\n\n- `{ id: string; cors_origin: string; status: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out'; timeout: number; url: string; asset_id?: string; error?: { message?: string; type?: string; }; new_asset_settings?: { advanced_playback_policies?: object[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: object[]; inputs?: object[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: object; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: playback_policy[]; playback_policy?: playback_policy[]; static_renditions?: object[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }; test?: boolean; }`\n\n  - `id: string`\n  - `cors_origin: string`\n  - `status: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out'`\n  - `timeout: number`\n  - `url: string`\n  - `asset_id?: string`\n  - `error?: { message?: string; type?: string; }`\n  - `new_asset_settings?: { advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; inputs?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: 'public' | 'signed' | 'drm'[]; playback_policy?: 'public' | 'signed' | 'drm'[]; static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }`\n  - `test?: boolean`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst upload = await client.video.uploads.retrieve('abcd1234');\n\nconsole.log(upload);\n```",
  },
  {
    name: 'list',
    endpoint: '/video/v1/uploads',
    httpMethod: 'get',
    summary: 'List direct uploads',
    description: 'Lists direct uploads in the current environment.',
    stainlessPath: '(resource) video.uploads > (method) list',
    qualified: 'client.video.uploads.list',
    params: ['limit?: number;', 'page?: number;'],
    response:
      "{ id: string; cors_origin: string; status: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out'; timeout: number; url: string; asset_id?: string; error?: { message?: string; type?: string; }; new_asset_settings?: { advanced_playback_policies?: object[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: object[]; inputs?: object[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: object; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: playback_policy[]; playback_policy?: playback_policy[]; static_renditions?: object[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }; test?: boolean; }",
    markdown:
      "## list\n\n`client.video.uploads.list(limit?: number, page?: number): { id: string; cors_origin: string; status: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out'; timeout: number; url: string; asset_id?: string; error?: object; new_asset_settings?: asset_options; test?: boolean; }`\n\n**get** `/video/v1/uploads`\n\nLists direct uploads in the current environment.\n\n### Parameters\n\n- `limit?: number`\n  Number of items to include in the response\n\n- `page?: number`\n  Offset by this many pages, of the size of `limit`\n\n### Returns\n\n- `{ id: string; cors_origin: string; status: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out'; timeout: number; url: string; asset_id?: string; error?: { message?: string; type?: string; }; new_asset_settings?: { advanced_playback_policies?: object[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: object[]; inputs?: object[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: object; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: playback_policy[]; playback_policy?: playback_policy[]; static_renditions?: object[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }; test?: boolean; }`\n\n  - `id: string`\n  - `cors_origin: string`\n  - `status: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out'`\n  - `timeout: number`\n  - `url: string`\n  - `asset_id?: string`\n  - `error?: { message?: string; type?: string; }`\n  - `new_asset_settings?: { advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; inputs?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: 'public' | 'signed' | 'drm'[]; playback_policy?: 'public' | 'signed' | 'drm'[]; static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }`\n  - `test?: boolean`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\n// Automatically fetches more pages as needed.\nfor await (const upload of client.video.uploads.list()) {\n  console.log(upload);\n}\n```",
  },
  {
    name: 'cancel',
    endpoint: '/video/v1/uploads/{UPLOAD_ID}/cancel',
    httpMethod: 'put',
    summary: 'Cancel a direct upload',
    description:
      'Cancels a direct upload and marks it as cancelled. If a pending upload finishes after this\nrequest, no asset will be created. This request will only succeed if the upload is still in\nthe `waiting` state.\n',
    stainlessPath: '(resource) video.uploads > (method) cancel',
    qualified: 'client.video.uploads.cancel',
    params: ['UPLOAD_ID: string;'],
    response:
      "{ id: string; cors_origin: string; status: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out'; timeout: number; url: string; asset_id?: string; error?: { message?: string; type?: string; }; new_asset_settings?: { advanced_playback_policies?: object[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: object[]; inputs?: object[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: object; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: playback_policy[]; playback_policy?: playback_policy[]; static_renditions?: object[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }; test?: boolean; }",
    markdown:
      "## cancel\n\n`client.video.uploads.cancel(UPLOAD_ID: string): { id: string; cors_origin: string; status: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out'; timeout: number; url: string; asset_id?: string; error?: object; new_asset_settings?: asset_options; test?: boolean; }`\n\n**put** `/video/v1/uploads/{UPLOAD_ID}/cancel`\n\nCancels a direct upload and marks it as cancelled. If a pending upload finishes after this\nrequest, no asset will be created. This request will only succeed if the upload is still in\nthe `waiting` state.\n\n\n### Parameters\n\n- `UPLOAD_ID: string`\n\n### Returns\n\n- `{ id: string; cors_origin: string; status: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out'; timeout: number; url: string; asset_id?: string; error?: { message?: string; type?: string; }; new_asset_settings?: { advanced_playback_policies?: object[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: object[]; inputs?: object[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: object; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: playback_policy[]; playback_policy?: playback_policy[]; static_renditions?: object[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }; test?: boolean; }`\n\n  - `id: string`\n  - `cors_origin: string`\n  - `status: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out'`\n  - `timeout: number`\n  - `url: string`\n  - `asset_id?: string`\n  - `error?: { message?: string; type?: string; }`\n  - `new_asset_settings?: { advanced_playback_policies?: { drm_configuration_id?: string; policy?: 'public' | 'signed' | 'drm'; }[]; copy_overlays?: boolean; encoding_tier?: 'smart' | 'baseline' | 'premium'; input?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; inputs?: { closed_captions?: boolean; end_time?: number; generated_subtitles?: { language_code?: string; name?: string; passthrough?: string; }[]; language_code?: string; name?: string; overlay_settings?: { height?: string; horizontal_align?: 'left' | 'center' | 'right'; horizontal_margin?: string; opacity?: string; vertical_align?: 'top' | 'middle' | 'bottom'; vertical_margin?: string; width?: string; }; passthrough?: string; start_time?: number; text_type?: 'subtitles'; type?: 'video' | 'audio' | 'text'; url?: string; }[]; master_access?: 'none' | 'temporary'; max_resolution_tier?: '1080p' | '1440p' | '2160p'; meta?: { creator_id?: string; external_id?: string; title?: string; }; mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p'; normalize_audio?: boolean; passthrough?: string; per_title_encode?: boolean; playback_policies?: 'public' | 'signed' | 'drm'[]; playback_policy?: 'public' | 'signed' | 'drm'[]; static_renditions?: { resolution: 'highest' | 'audio-only' | '2160p' | '1440p' | '1080p' | '720p' | '540p' | '480p' | '360p' | '270p'; passthrough?: string; }[]; test?: boolean; video_quality?: 'basic' | 'plus' | 'premium'; }`\n  - `test?: boolean`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst upload = await client.video.uploads.cancel('abcd1234');\n\nconsole.log(upload);\n```",
  },
  {
    name: 'create',
    endpoint: '/video/v1/web-inputs',
    httpMethod: 'post',
    summary: 'Create a new Web Input',
    description: 'Create a new Web Input',
    stainlessPath: '(resource) video.web_inputs > (method) create',
    qualified: 'client.video.webInputs.create',
    params: [
      'live_stream_id: string;',
      'url: string;',
      'id?: string;',
      'auto_launch?: boolean;',
      'created_at?: string;',
      'passthrough?: string;',
      "resolution?: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720';",
      "status?: 'idle' | 'launching' | 'streaming';",
      'timeout?: number;',
    ],
    response:
      "{ id: string; auto_launch: boolean; created_at: string; live_stream_id: string; resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720'; status: 'idle' | 'launching' | 'streaming'; url: string; passthrough?: string; timeout?: number; }",
    markdown:
      "## create\n\n`client.video.webInputs.create(live_stream_id: string, url: string, id?: string, auto_launch?: boolean, created_at?: string, passthrough?: string, resolution?: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720', status?: 'idle' | 'launching' | 'streaming', timeout?: number): { id: string; auto_launch: boolean; created_at: string; live_stream_id: string; resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720'; status: 'idle' | 'launching' | 'streaming'; url: string; passthrough?: string; timeout?: number; }`\n\n**post** `/video/v1/web-inputs`\n\nCreate a new Web Input\n\n### Parameters\n\n- `live_stream_id: string`\n  The Live Stream ID to broadcast this Web Input to\n\n- `url: string`\n  The URL for the Web Input to load.\n\n- `id?: string`\n  Unique identifier for the Web Input.\n\n- `auto_launch?: boolean`\n  When set to `true` the Web Input will automatically launch and start streaming immediately after creation\n\n- `created_at?: string`\n  Time the Web Input was created, defined as a Unix timestamp (seconds since epoch).\n\n- `passthrough?: string`\n  Arbitrary metadata that will be included in the Web Input details and related webhooks. Can be used to store your own ID for the Web Input. **Max: 255 characters**.\n\n- `resolution?: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720'`\n  The resolution of the viewport of the Web Input's browser instance. Defaults to 1920x1080 if not set.\n\n- `status?: 'idle' | 'launching' | 'streaming'`\n\n- `timeout?: number`\n  The number of seconds that the Web Input should stream for before automatically shutting down.\n\n### Returns\n\n- `{ id: string; auto_launch: boolean; created_at: string; live_stream_id: string; resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720'; status: 'idle' | 'launching' | 'streaming'; url: string; passthrough?: string; timeout?: number; }`\n\n  - `id: string`\n  - `auto_launch: boolean`\n  - `created_at: string`\n  - `live_stream_id: string`\n  - `resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720'`\n  - `status: 'idle' | 'launching' | 'streaming'`\n  - `url: string`\n  - `passthrough?: string`\n  - `timeout?: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst webInput = await client.video.webInputs.create({ live_stream_id: 'ZEBrNTpHC02iUah025KM3te6ylM7W4S4silsrFtUkn3Ag', url: 'https://example.com/hello.html' });\n\nconsole.log(webInput);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/video/v1/web-inputs/{WEB_INPUT_ID}',
    httpMethod: 'get',
    summary: 'Retrieve a Web Input',
    description: "Retrieve a single Web Input's info",
    stainlessPath: '(resource) video.web_inputs > (method) retrieve',
    qualified: 'client.video.webInputs.retrieve',
    params: ['WEB_INPUT_ID: string;'],
    response:
      "{ id: string; auto_launch: boolean; created_at: string; live_stream_id: string; resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720'; status: 'idle' | 'launching' | 'streaming'; url: string; passthrough?: string; timeout?: number; }",
    markdown:
      "## retrieve\n\n`client.video.webInputs.retrieve(WEB_INPUT_ID: string): { id: string; auto_launch: boolean; created_at: string; live_stream_id: string; resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720'; status: 'idle' | 'launching' | 'streaming'; url: string; passthrough?: string; timeout?: number; }`\n\n**get** `/video/v1/web-inputs/{WEB_INPUT_ID}`\n\nRetrieve a single Web Input's info\n\n### Parameters\n\n- `WEB_INPUT_ID: string`\n\n### Returns\n\n- `{ id: string; auto_launch: boolean; created_at: string; live_stream_id: string; resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720'; status: 'idle' | 'launching' | 'streaming'; url: string; passthrough?: string; timeout?: number; }`\n\n  - `id: string`\n  - `auto_launch: boolean`\n  - `created_at: string`\n  - `live_stream_id: string`\n  - `resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720'`\n  - `status: 'idle' | 'launching' | 'streaming'`\n  - `url: string`\n  - `passthrough?: string`\n  - `timeout?: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst webInput = await client.video.webInputs.retrieve('abcd1234');\n\nconsole.log(webInput);\n```",
  },
  {
    name: 'list',
    endpoint: '/video/v1/web-inputs',
    httpMethod: 'get',
    summary: 'List Web Inputs',
    description: 'List Web Inputs',
    stainlessPath: '(resource) video.web_inputs > (method) list',
    qualified: 'client.video.webInputs.list',
    params: ['limit?: number;', 'page?: number;'],
    response:
      "{ id: string; auto_launch: boolean; created_at: string; live_stream_id: string; resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720'; status: 'idle' | 'launching' | 'streaming'; url: string; passthrough?: string; timeout?: number; }",
    markdown:
      "## list\n\n`client.video.webInputs.list(limit?: number, page?: number): { id: string; auto_launch: boolean; created_at: string; live_stream_id: string; resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720'; status: 'idle' | 'launching' | 'streaming'; url: string; passthrough?: string; timeout?: number; }`\n\n**get** `/video/v1/web-inputs`\n\nList Web Inputs\n\n### Parameters\n\n- `limit?: number`\n  Number of items to include in the response\n\n- `page?: number`\n  Offset by this many pages, of the size of `limit`\n\n### Returns\n\n- `{ id: string; auto_launch: boolean; created_at: string; live_stream_id: string; resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720'; status: 'idle' | 'launching' | 'streaming'; url: string; passthrough?: string; timeout?: number; }`\n\n  - `id: string`\n  - `auto_launch: boolean`\n  - `created_at: string`\n  - `live_stream_id: string`\n  - `resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720'`\n  - `status: 'idle' | 'launching' | 'streaming'`\n  - `url: string`\n  - `passthrough?: string`\n  - `timeout?: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\n// Automatically fetches more pages as needed.\nfor await (const webInputListResponse of client.video.webInputs.list()) {\n  console.log(webInputListResponse);\n}\n```",
  },
  {
    name: 'delete',
    endpoint: '/video/v1/web-inputs/{WEB_INPUT_ID}',
    httpMethod: 'delete',
    summary: 'Delete a Web Input',
    description: 'Deletes a Web Input and all its data',
    stainlessPath: '(resource) video.web_inputs > (method) delete',
    qualified: 'client.video.webInputs.delete',
    params: ['WEB_INPUT_ID: string;'],
    markdown:
      "## delete\n\n`client.video.webInputs.delete(WEB_INPUT_ID: string): void`\n\n**delete** `/video/v1/web-inputs/{WEB_INPUT_ID}`\n\nDeletes a Web Input and all its data\n\n### Parameters\n\n- `WEB_INPUT_ID: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nawait client.video.webInputs.delete('abcd1234')\n```",
  },
  {
    name: 'launch',
    endpoint: '/video/v1/web-inputs/{WEB_INPUT_ID}/launch',
    httpMethod: 'put',
    summary: 'Launch a Web Input',
    description:
      'Launches the browsers instance, loads the URL specified, and then starts streaming to the specified Live Stream.',
    stainlessPath: '(resource) video.web_inputs > (method) launch',
    qualified: 'client.video.webInputs.launch',
    params: ['WEB_INPUT_ID: string;'],
    response: 'object',
    markdown:
      "## launch\n\n`client.video.webInputs.launch(WEB_INPUT_ID: string): object`\n\n**put** `/video/v1/web-inputs/{WEB_INPUT_ID}/launch`\n\nLaunches the browsers instance, loads the URL specified, and then starts streaming to the specified Live Stream.\n\n### Parameters\n\n- `WEB_INPUT_ID: string`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.video.webInputs.launch('abcd1234');\n\nconsole.log(response);\n```",
  },
  {
    name: 'reload',
    endpoint: '/video/v1/web-inputs/{WEB_INPUT_ID}/reload',
    httpMethod: 'put',
    summary: 'Reload a Web Input',
    description:
      'Reloads the page that a Web Input is displaying.\n\nNote: Using this when the Web Input is streaming will display the page reloading.\n',
    stainlessPath: '(resource) video.web_inputs > (method) reload',
    qualified: 'client.video.webInputs.reload',
    params: ['WEB_INPUT_ID: string;'],
    response: 'object',
    markdown:
      "## reload\n\n`client.video.webInputs.reload(WEB_INPUT_ID: string): object`\n\n**put** `/video/v1/web-inputs/{WEB_INPUT_ID}/reload`\n\nReloads the page that a Web Input is displaying.\n\nNote: Using this when the Web Input is streaming will display the page reloading.\n\n\n### Parameters\n\n- `WEB_INPUT_ID: string`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.video.webInputs.reload('abcd1234');\n\nconsole.log(response);\n```",
  },
  {
    name: 'shutdown',
    endpoint: '/video/v1/web-inputs/{WEB_INPUT_ID}/shutdown',
    httpMethod: 'put',
    summary: 'Shut down a Web Input',
    description:
      'Ends streaming to the specified Live Stream, and then shuts down the Web Input browser instance.',
    stainlessPath: '(resource) video.web_inputs > (method) shutdown',
    qualified: 'client.video.webInputs.shutdown',
    params: ['WEB_INPUT_ID: string;'],
    response: 'object',
    markdown:
      "## shutdown\n\n`client.video.webInputs.shutdown(WEB_INPUT_ID: string): object`\n\n**put** `/video/v1/web-inputs/{WEB_INPUT_ID}/shutdown`\n\nEnds streaming to the specified Live Stream, and then shuts down the Web Input browser instance.\n\n### Parameters\n\n- `WEB_INPUT_ID: string`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.video.webInputs.shutdown('abcd1234');\n\nconsole.log(response);\n```",
  },
  {
    name: 'update_url',
    endpoint: '/video/v1/web-inputs/{WEB_INPUT_ID}/url',
    httpMethod: 'put',
    summary: 'Update Web Input URL',
    description:
      'Changes the URL that a Web Input loads when it launches.\n\nNote: This can only be called when the Web Input is idle.\n',
    stainlessPath: '(resource) video.web_inputs > (method) update_url',
    qualified: 'client.video.webInputs.updateURL',
    params: ['WEB_INPUT_ID: string;', 'url: string;'],
    response:
      "{ id: string; auto_launch: boolean; created_at: string; live_stream_id: string; resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720'; status: 'idle' | 'launching' | 'streaming'; url: string; passthrough?: string; timeout?: number; }",
    markdown:
      "## update_url\n\n`client.video.webInputs.updateURL(WEB_INPUT_ID: string, url: string): { id: string; auto_launch: boolean; created_at: string; live_stream_id: string; resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720'; status: 'idle' | 'launching' | 'streaming'; url: string; passthrough?: string; timeout?: number; }`\n\n**put** `/video/v1/web-inputs/{WEB_INPUT_ID}/url`\n\nChanges the URL that a Web Input loads when it launches.\n\nNote: This can only be called when the Web Input is idle.\n\n\n### Parameters\n\n- `WEB_INPUT_ID: string`\n\n- `url: string`\n  The URL for the Web Input to load.\n\n### Returns\n\n- `{ id: string; auto_launch: boolean; created_at: string; live_stream_id: string; resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720'; status: 'idle' | 'launching' | 'streaming'; url: string; passthrough?: string; timeout?: number; }`\n\n  - `id: string`\n  - `auto_launch: boolean`\n  - `created_at: string`\n  - `live_stream_id: string`\n  - `resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720'`\n  - `status: 'idle' | 'launching' | 'streaming'`\n  - `url: string`\n  - `passthrough?: string`\n  - `timeout?: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.video.webInputs.updateURL('abcd1234', { url: 'https://example.com/hello-there.html' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/video/v1/drm-configurations/{DRM_CONFIGURATION_ID}',
    httpMethod: 'get',
    summary: 'Retrieve a DRM Configuration',
    description: 'Retrieves a single DRM Configuration.',
    stainlessPath: '(resource) video.drm_configurations > (method) retrieve',
    qualified: 'client.video.drmConfigurations.retrieve',
    params: ['DRM_CONFIGURATION_ID: string;'],
    response: '{ id: string; }',
    markdown:
      "## retrieve\n\n`client.video.drmConfigurations.retrieve(DRM_CONFIGURATION_ID: string): { id: string; }`\n\n**get** `/video/v1/drm-configurations/{DRM_CONFIGURATION_ID}`\n\nRetrieves a single DRM Configuration.\n\n### Parameters\n\n- `DRM_CONFIGURATION_ID: string`\n\n### Returns\n\n- `{ id: string; }`\n\n  - `id: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst drmConfiguration = await client.video.drmConfigurations.retrieve('DRM_CONFIGURATION_ID');\n\nconsole.log(drmConfiguration);\n```",
  },
  {
    name: 'list',
    endpoint: '/video/v1/drm-configurations',
    httpMethod: 'get',
    summary: 'List DRM Configurations',
    description: 'Returns a list of DRM Configurations',
    stainlessPath: '(resource) video.drm_configurations > (method) list',
    qualified: 'client.video.drmConfigurations.list',
    params: ['limit?: number;', 'page?: number;'],
    response: '{ id: string; }',
    markdown:
      "## list\n\n`client.video.drmConfigurations.list(limit?: number, page?: number): { id: string; }`\n\n**get** `/video/v1/drm-configurations`\n\nReturns a list of DRM Configurations\n\n### Parameters\n\n- `limit?: number`\n  Number of items to include in the response\n\n- `page?: number`\n  Offset by this many pages, of the size of `limit`\n\n### Returns\n\n- `{ id: string; }`\n\n  - `id: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\n// Automatically fetches more pages as needed.\nfor await (const drmConfiguration of client.video.drmConfigurations.list()) {\n  console.log(drmConfiguration);\n}\n```",
  },
  {
    name: 'animated',
    endpoint: '/{PLAYBACK_ID}/animated.{EXTENSION}',
    httpMethod: 'get',
    summary: 'Retrieve an animated image from a video',
    description:
      '[Fetch an animated GIF or WebP image](https://docs.mux.com/guides/get-images-from-a-video#get-an-animated-gif-from-a-video) from a video segment with optional transformations.',
    stainlessPath: '(resource) video.playback > (method) animated',
    qualified: 'client.video.playback.animated',
    params: [
      'PLAYBACK_ID: string;',
      "EXTENSION: 'gif' | 'webp';",
      'end?: number;',
      'fps?: number;',
      'height?: number;',
      'start?: number;',
      'TOKEN?: string;',
      'width?: number;',
    ],
    response: 'string',
    markdown:
      "## animated\n\n`client.video.playback.animated(PLAYBACK_ID: string, EXTENSION: 'gif' | 'webp', end?: number, fps?: number, height?: number, start?: number, TOKEN?: string, width?: number): string`\n\n**get** `/{PLAYBACK_ID}/animated.{EXTENSION}`\n\n[Fetch an animated GIF or WebP image](https://docs.mux.com/guides/get-images-from-a-video#get-an-animated-gif-from-a-video) from a video segment with optional transformations.\n\n### Parameters\n\n- `PLAYBACK_ID: string`\n\n- `EXTENSION: 'gif' | 'webp'`\n\n- `end?: number`\n  The time (in seconds) of the video timeline where the GIF ends. Defaults to 5 seconds after the start. Maximum total duration of GIF is limited to 10 seconds; minimum total duration of GIF is 250ms.\n\n- `fps?: number`\n  The frame rate of the generated GIF. Defaults to 15 fps. Max 30 fps.\n\n- `height?: number`\n  The height in pixels of the animated GIF. The default height is determined by preserving aspect ratio with the width provided. Maximum height is 640px.\n\n- `start?: number`\n  The time (in seconds) of the video timeline where the animated GIF should begin. Defaults to 0.\n\n- `TOKEN?: string`\n  Signed token (JWT) for [secure video playback](https://docs.mux.com/guides/secure-video-playback).\n\n- `width?: number`\n  The width in pixels of the animated GIF. Default is 320px, or if height is provided, the width is determined by preserving aspect ratio with the height. Max width is 640px.\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.video.playback.animated('gif', { PLAYBACK_ID: 'PLAYBACK_ID' });\n\nconsole.log(response);\n\nconst content = await response.blob()\nconsole.log(content)\n```",
  },
  {
    name: 'hls',
    endpoint: '/{PLAYBACK_ID}.m3u8',
    httpMethod: 'get',
    summary: 'Retrieve HLS manifest',
    description:
      'Fetch an HLS (HTTP Live Streaming) playlist for the specified video asset, with optional query parameters to [modify playback behavior](https://docs.mux.com/guides/modify-playback-behavior).',
    stainlessPath: '(resource) video.playback > (method) hls',
    qualified: 'client.video.playback.hls',
    params: [
      'PLAYBACK_ID: string;',
      'asset_end_time?: number;',
      'asset_start_time?: number;',
      'default_subtitles_lang?: string;',
      'exclude_pdt?: boolean;',
      "max_resolution?: '270p' | '360p' | '480p' | '540p' | '720p' | '1080p' | '1440p' | '2160p';",
      "min_resolution?: '270p' | '360p' | '480p' | '540p' | '720p' | '1080p' | '1440p' | '2160p';",
      'program_end_time?: number;',
      'program_start_time?: number;',
      'redundant_streams?: boolean;',
      "rendition_order?: 'desc';",
      'roku_trick_play?: boolean;',
      'TOKEN?: string;',
    ],
    response: 'string',
    markdown:
      "## hls\n\n`client.video.playback.hls(PLAYBACK_ID: string, asset_end_time?: number, asset_start_time?: number, default_subtitles_lang?: string, exclude_pdt?: boolean, max_resolution?: '270p' | '360p' | '480p' | '540p' | '720p' | '1080p' | '1440p' | '2160p', min_resolution?: '270p' | '360p' | '480p' | '540p' | '720p' | '1080p' | '1440p' | '2160p', program_end_time?: number, program_start_time?: number, redundant_streams?: boolean, rendition_order?: 'desc', roku_trick_play?: boolean, TOKEN?: string): string`\n\n**get** `/{PLAYBACK_ID}.m3u8`\n\nFetch an HLS (HTTP Live Streaming) playlist for the specified video asset, with optional query parameters to [modify playback behavior](https://docs.mux.com/guides/modify-playback-behavior).\n\n### Parameters\n\n- `PLAYBACK_ID: string`\n\n- `asset_end_time?: number`\n  Set the relative end time of the asset (in seconds) when using the [instant clipping feature](https://docs.mux.com/guides/create-instant-clips).\n\n- `asset_start_time?: number`\n  Set the relative start time of the asset (in seconds) when using the [instant clipping feature](https://docs.mux.com/guides/create-instant-clips).\n\n- `default_subtitles_lang?: string`\n  Set the [default subtitles/captions language](https://docs.mux.com/guides/add-subtitles-to-your-videos#showing-subtitles-by-default) (BCP47 compliant language code).\n\n- `exclude_pdt?: boolean`\n  If set to true, EXT-X-PROGRAM-DATE-TIME tags will be omitted from HLS manifests for assets from live streams.\n\n- `max_resolution?: '270p' | '360p' | '480p' | '540p' | '720p' | '1080p' | '1440p' | '2160p'`\n  Set the [maximum resolution](https://docs.mux.com/guides/control-playback-resolution#specify-maximum-resolution) of renditions included in the manifest.\n\n- `min_resolution?: '270p' | '360p' | '480p' | '540p' | '720p' | '1080p' | '1440p' | '2160p'`\n  Set the [minimum resolution](https://docs.mux.com/guides/control-playback-resolution#specify-minimum-resolution) of renditions included in the manifest.\n\n- `program_end_time?: number`\n  Set the end time of the asset created from a live stream when using the [instant clipping feature](https://docs.mux.com/guides/create-instant-clips). The timestamp should be provided as an epoch integer, and is compared to the program date time (PDT) generated by a live stream.\n\n- `program_start_time?: number`\n  Set the start time of the asset created from a live stream when using the [instant clipping feature](https://docs.mux.com/guides/create-instant-clips). The timestamp should be provided as an epoch integer, and is compared to the program date time (PDT) generated by a live stream.\n\n- `redundant_streams?: boolean`\n  Include [HLS redundant streams](https://docs.mux.com/guides/play-your-videos#add-delivery-redundancy-with-redundant-streams) in the manifest.\n\n- `rendition_order?: 'desc'`\n  Set the logic to [order renditions in the HLS manifest](https://www.mux.com/blog/more-tools-to-control-playback-behavior-min-resolution-and-rendition-order#rendition_order).\n\n- `roku_trick_play?: boolean`\n  Add support for [timeline hover previews on Roku devices](https://docs.mux.com/guides/create-timeline-hover-previews#roku-trick-play).\n\n- `TOKEN?: string`\n  Signed token (JWT) for [secure video playback](https://docs.mux.com/guides/secure-video-playback).\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.video.playback.hls('PLAYBACK_ID');\n\nconsole.log(response);\n\nconst content = await response.blob()\nconsole.log(content)\n```",
  },
  {
    name: 'static_rendition',
    endpoint: '/{PLAYBACK_ID}/{FILENAME}',
    httpMethod: 'get',
    summary: 'Retrieve a static rendition',
    description:
      'Fetch a static rendition (usually an MP4 or M4A file) of the specified video asset. [MP4 Support](https://docs.mux.com/guides/enable-static-mp4-renditions) must be enabled on the asset before using these URLs.',
    stainlessPath: '(resource) video.playback > (method) static_rendition',
    qualified: 'client.video.playback.staticRendition',
    params: [
      'PLAYBACK_ID: string;',
      "FILENAME: 'capped-1080p.mp4' | 'audio.m4a' | 'low.mp4' | 'medium.mp4' | 'high.mp4';",
      'TOKEN?: string;',
    ],
    response: 'string',
    markdown:
      "## static_rendition\n\n`client.video.playback.staticRendition(PLAYBACK_ID: string, FILENAME: 'capped-1080p.mp4' | 'audio.m4a' | 'low.mp4' | 'medium.mp4' | 'high.mp4', TOKEN?: string): string`\n\n**get** `/{PLAYBACK_ID}/{FILENAME}`\n\nFetch a static rendition (usually an MP4 or M4A file) of the specified video asset. [MP4 Support](https://docs.mux.com/guides/enable-static-mp4-renditions) must be enabled on the asset before using these URLs.\n\n### Parameters\n\n- `PLAYBACK_ID: string`\n\n- `FILENAME: 'capped-1080p.mp4' | 'audio.m4a' | 'low.mp4' | 'medium.mp4' | 'high.mp4'`\n\n- `TOKEN?: string`\n  Signed token (JWT) for [secure video playback](https://docs.mux.com/guides/secure-video-playback).\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.video.playback.staticRendition('capped-1080p.mp4', { PLAYBACK_ID: 'PLAYBACK_ID' });\n\nconsole.log(response);\n\nconst content = await response.blob()\nconsole.log(content)\n```",
  },
  {
    name: 'storyboard',
    endpoint: '/{PLAYBACK_ID}/storyboard.{EXTENSION}',
    httpMethod: 'get',
    summary: 'Retrieve a storyboard image for timeline hover previews',
    description:
      'Fetch a storyboard image composed of multiple thumbnails for use in [timeline hover previews](https://docs.mux.com/guides/create-timeline-hover-previews).',
    stainlessPath: '(resource) video.playback > (method) storyboard',
    qualified: 'client.video.playback.storyboard',
    params: [
      'PLAYBACK_ID: string;',
      "EXTENSION: 'jpg' | 'png' | 'webp';",
      'asset_end_time?: number;',
      'asset_start_time?: number;',
      'program_end_time?: number;',
      'program_start_time?: number;',
      'TOKEN?: string;',
    ],
    response: 'string',
    markdown:
      "## storyboard\n\n`client.video.playback.storyboard(PLAYBACK_ID: string, EXTENSION: 'jpg' | 'png' | 'webp', asset_end_time?: number, asset_start_time?: number, program_end_time?: number, program_start_time?: number, TOKEN?: string): string`\n\n**get** `/{PLAYBACK_ID}/storyboard.{EXTENSION}`\n\nFetch a storyboard image composed of multiple thumbnails for use in [timeline hover previews](https://docs.mux.com/guides/create-timeline-hover-previews).\n\n### Parameters\n\n- `PLAYBACK_ID: string`\n\n- `EXTENSION: 'jpg' | 'png' | 'webp'`\n\n- `asset_end_time?: number`\n  Set the relative end time of the asset (in seconds) when using the [instant clipping feature](https://docs.mux.com/guides/create-instant-clips).\n\n- `asset_start_time?: number`\n  Set the relative start time of the asset (in seconds) when using the [instant clipping feature](https://docs.mux.com/guides/create-instant-clips).\n\n- `program_end_time?: number`\n  Set the end time of the asset created from a live stream when using the [instant clipping feature](https://docs.mux.com/guides/create-instant-clips). The timestamp should be provided as an epoch integer, and is compared to the program date time (PDT) generated by a live stream.\n\n- `program_start_time?: number`\n  Set the start time of the asset created from a live stream when using the [instant clipping feature](https://docs.mux.com/guides/create-instant-clips). The timestamp should be provided as an epoch integer, and is compared to the program date time (PDT) generated by a live stream.\n\n- `TOKEN?: string`\n  Signed token (JWT) for [secure video playback](https://docs.mux.com/guides/secure-video-playback).\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.video.playback.storyboard('jpg', { PLAYBACK_ID: 'PLAYBACK_ID' });\n\nconsole.log(response);\n\nconst content = await response.blob()\nconsole.log(content)\n```",
  },
  {
    name: 'storyboard_meta',
    endpoint: '/{PLAYBACK_ID}/storyboard.json',
    httpMethod: 'get',
    summary: 'Retrieve storyboard metadata in JSON format',
    description:
      'Fetch metadata for the [storyboard image in JSON format](https://docs.mux.com/guides/create-timeline-hover-previews#json), detailing the coordinates and time ranges of each thumbnail.',
    stainlessPath: '(resource) video.playback > (method) storyboard_meta',
    qualified: 'client.video.playback.storyboardMeta',
    params: [
      'PLAYBACK_ID: string;',
      'asset_end_time?: number;',
      'asset_start_time?: number;',
      "format?: 'jpg' | 'png' | 'webp';",
      'program_end_time?: number;',
      'program_start_time?: number;',
      'TOKEN?: string;',
    ],
    response: 'string',
    markdown:
      "## storyboard_meta\n\n`client.video.playback.storyboardMeta(PLAYBACK_ID: string, asset_end_time?: number, asset_start_time?: number, format?: 'jpg' | 'png' | 'webp', program_end_time?: number, program_start_time?: number, TOKEN?: string): string`\n\n**get** `/{PLAYBACK_ID}/storyboard.json`\n\nFetch metadata for the [storyboard image in JSON format](https://docs.mux.com/guides/create-timeline-hover-previews#json), detailing the coordinates and time ranges of each thumbnail.\n\n### Parameters\n\n- `PLAYBACK_ID: string`\n\n- `asset_end_time?: number`\n  Set the relative end time of the asset (in seconds) when using the [instant clipping feature](https://docs.mux.com/guides/create-instant-clips).\n\n- `asset_start_time?: number`\n  Set the relative start time of the asset (in seconds) when using the [instant clipping feature](https://docs.mux.com/guides/create-instant-clips).\n\n- `format?: 'jpg' | 'png' | 'webp'`\n  The format of the storyboard image URL in the response. Can be either 'jpg', 'png', or 'webp'. Defaults to 'jpg'.\n\n- `program_end_time?: number`\n  Set the end time of the asset created from a live stream when using the [instant clipping feature](https://docs.mux.com/guides/create-instant-clips). The timestamp should be provided as an epoch integer, and is compared to the program date time (PDT) generated by a live stream.\n\n- `program_start_time?: number`\n  Set the start time of the asset created from a live stream when using the [instant clipping feature](https://docs.mux.com/guides/create-instant-clips). The timestamp should be provided as an epoch integer, and is compared to the program date time (PDT) generated by a live stream.\n\n- `TOKEN?: string`\n  Signed token (JWT) for [secure video playback](https://docs.mux.com/guides/secure-video-playback).\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.video.playback.storyboardMeta('PLAYBACK_ID');\n\nconsole.log(response);\n```",
  },
  {
    name: 'storyboard_vtt',
    endpoint: '/{PLAYBACK_ID}/storyboard.vtt',
    httpMethod: 'get',
    summary: 'Retrieve storyboard metadata in WebVTT format',
    description:
      'Fetch metadata for the [storyboard image in WebVTT format](https://docs.mux.com/guides/create-timeline-hover-previews#webvtt), detailing the coordinates and time ranges of each thumbnail.',
    stainlessPath: '(resource) video.playback > (method) storyboard_vtt',
    qualified: 'client.video.playback.storyboardVtt',
    params: [
      'PLAYBACK_ID: string;',
      'asset_end_time?: number;',
      'asset_start_time?: number;',
      'program_end_time?: number;',
      'program_start_time?: number;',
      'TOKEN?: string;',
    ],
    response: 'string',
    markdown:
      "## storyboard_vtt\n\n`client.video.playback.storyboardVtt(PLAYBACK_ID: string, asset_end_time?: number, asset_start_time?: number, program_end_time?: number, program_start_time?: number, TOKEN?: string): string`\n\n**get** `/{PLAYBACK_ID}/storyboard.vtt`\n\nFetch metadata for the [storyboard image in WebVTT format](https://docs.mux.com/guides/create-timeline-hover-previews#webvtt), detailing the coordinates and time ranges of each thumbnail.\n\n### Parameters\n\n- `PLAYBACK_ID: string`\n\n- `asset_end_time?: number`\n  Set the relative end time of the asset (in seconds) when using the [instant clipping feature](https://docs.mux.com/guides/create-instant-clips).\n\n- `asset_start_time?: number`\n  Set the relative start time of the asset (in seconds) when using the [instant clipping feature](https://docs.mux.com/guides/create-instant-clips).\n\n- `program_end_time?: number`\n  Set the end time of the asset created from a live stream when using the [instant clipping feature](https://docs.mux.com/guides/create-instant-clips). The timestamp should be provided as an epoch integer, and is compared to the program date time (PDT) generated by a live stream.\n\n- `program_start_time?: number`\n  Set the start time of the asset created from a live stream when using the [instant clipping feature](https://docs.mux.com/guides/create-instant-clips). The timestamp should be provided as an epoch integer, and is compared to the program date time (PDT) generated by a live stream.\n\n- `TOKEN?: string`\n  Signed token (JWT) for [secure video playback](https://docs.mux.com/guides/secure-video-playback).\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.video.playback.storyboardVtt('PLAYBACK_ID');\n\nconsole.log(response);\n```",
  },
  {
    name: 'thumbnail',
    endpoint: '/{PLAYBACK_ID}/thumbnail.{EXTENSION}',
    httpMethod: 'get',
    summary: 'Retrieve a video thumbnail',
    description:
      '[Fetch a thumbnail image from a video](https://docs.mux.com/guides/get-images-from-a-video) at a specified time with optional transformations.',
    stainlessPath: '(resource) video.playback > (method) thumbnail',
    qualified: 'client.video.playback.thumbnail',
    params: [
      'PLAYBACK_ID: string;',
      "EXTENSION: 'jpg' | 'png' | 'webp';",
      "fit_mode?: 'preserve' | 'stretch' | 'crop' | 'smartcrop' | 'pad';",
      'flip_h?: boolean;',
      'flip_v?: boolean;',
      'height?: number;',
      'latest?: boolean;',
      'program_time?: number;',
      'rotate?: 90 | 180 | 270;',
      'time?: number;',
      'TOKEN?: string;',
      'width?: number;',
    ],
    response: 'string',
    markdown:
      "## thumbnail\n\n`client.video.playback.thumbnail(PLAYBACK_ID: string, EXTENSION: 'jpg' | 'png' | 'webp', fit_mode?: 'preserve' | 'stretch' | 'crop' | 'smartcrop' | 'pad', flip_h?: boolean, flip_v?: boolean, height?: number, latest?: boolean, program_time?: number, rotate?: 90 | 180 | 270, time?: number, TOKEN?: string, width?: number): string`\n\n**get** `/{PLAYBACK_ID}/thumbnail.{EXTENSION}`\n\n[Fetch a thumbnail image from a video](https://docs.mux.com/guides/get-images-from-a-video) at a specified time with optional transformations.\n\n### Parameters\n\n- `PLAYBACK_ID: string`\n\n- `EXTENSION: 'jpg' | 'png' | 'webp'`\n\n- `fit_mode?: 'preserve' | 'stretch' | 'crop' | 'smartcrop' | 'pad'`\n  How to fit a thumbnail within the specified width + height.\n\n- `flip_h?: boolean`\n  Flip the image left-right after performing all other transformations.\n\n- `flip_v?: boolean`\n  Flip the image top-bottom after performing all other transformations.\n\n- `height?: number`\n  The height of the thumbnail (in pixels). Defaults to the height of the original video.\n\n- `latest?: boolean`\n  When set to `true`, pulls the latest thumbnail from the playback ID of an ongoing live stream. Can only be used with live streams. Can be used to build moderation and classification workflows, [see documentation for more details](https://mux.com/docs/guides/get-images-from-a-video#getting-the-latest-thumbnail-from-a-live-stream).\n\n- `program_time?: number`\n  Set the time of the thumbnail for an asset created from a live stream when using the [instant clipping feature](https://docs.mux.com/guides/create-instant-clips). The timestamp should be provided as an epoch integer, and is compared to the program date time (PDT) generated by a live stream.\n\n- `rotate?: 90 | 180 | 270`\n  Rotate the image clockwise by the given number of degrees.\n\n- `time?: number`\n  The time (in seconds) of the video timeline where the image should be pulled. Defaults to the middle of the original video.\n\n- `TOKEN?: string`\n  Signed token (JWT) for [secure video playback](https://docs.mux.com/guides/secure-video-playback).\n\n- `width?: number`\n  The width of the thumbnail (in pixels). Defaults to the width of the original video.\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.video.playback.thumbnail('jpg', { PLAYBACK_ID: 'PLAYBACK_ID' });\n\nconsole.log(response);\n\nconst content = await response.blob()\nconsole.log(content)\n```",
  },
  {
    name: 'track',
    endpoint: '/{PLAYBACK_ID}/text/{TRACK_ID}.vtt',
    httpMethod: 'get',
    summary: 'Retrieve a WebVTT file for a text track',
    description: 'Fetch a standalone WebVTT version of a text track from an asset.',
    stainlessPath: '(resource) video.playback > (method) track',
    qualified: 'client.video.playback.track',
    params: ['PLAYBACK_ID: string;', 'TRACK_ID: string;', 'TOKEN?: string;'],
    response: 'string',
    markdown:
      "## track\n\n`client.video.playback.track(PLAYBACK_ID: string, TRACK_ID: string, TOKEN?: string): string`\n\n**get** `/{PLAYBACK_ID}/text/{TRACK_ID}.vtt`\n\nFetch a standalone WebVTT version of a text track from an asset.\n\n### Parameters\n\n- `PLAYBACK_ID: string`\n\n- `TRACK_ID: string`\n\n- `TOKEN?: string`\n  Signed token (JWT) for [secure video playback](https://docs.mux.com/guides/secure-video-playback).\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.video.playback.track('TRACK_ID', { PLAYBACK_ID: 'PLAYBACK_ID' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'transcript',
    endpoint: '/{PLAYBACK_ID}/text/{TRACK_ID}.txt',
    httpMethod: 'get',
    summary: 'Retrieve a transcript',
    description:
      'Fetch a [transcript of an asset](https://docs.mux.com/guides/add-autogenerated-captions-and-use-transcripts#retrieve-a-transcript). This is only possible for assets with a text track generated using the [VOD generated captions feature](https://docs.mux.com/guides/add-autogenerated-captions-and-use-transcripts).',
    stainlessPath: '(resource) video.playback > (method) transcript',
    qualified: 'client.video.playback.transcript',
    params: ['PLAYBACK_ID: string;', 'TRACK_ID: string;', 'TOKEN?: string;'],
    response: 'string',
    markdown:
      "## transcript\n\n`client.video.playback.transcript(PLAYBACK_ID: string, TRACK_ID: string, TOKEN?: string): string`\n\n**get** `/{PLAYBACK_ID}/text/{TRACK_ID}.txt`\n\nFetch a [transcript of an asset](https://docs.mux.com/guides/add-autogenerated-captions-and-use-transcripts#retrieve-a-transcript). This is only possible for assets with a text track generated using the [VOD generated captions feature](https://docs.mux.com/guides/add-autogenerated-captions-and-use-transcripts).\n\n### Parameters\n\n- `PLAYBACK_ID: string`\n\n- `TRACK_ID: string`\n\n- `TOKEN?: string`\n  Signed token (JWT) for [secure video playback](https://docs.mux.com/guides/secure-video-playback).\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.video.playback.transcript('TRACK_ID', { PLAYBACK_ID: 'PLAYBACK_ID' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/data/v1/dimensions',
    httpMethod: 'get',
    summary: 'List Dimensions',
    description: 'List all available dimensions.\n\nNote: This API replaces the list-filters API call.\n',
    stainlessPath: '(resource) data.dimensions > (method) list',
    qualified: 'client.data.dimensions.list',
    response:
      '{ data: { advanced: string[]; basic: string[]; }; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## list\n\n`client.data.dimensions.list(): { data: object; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/dimensions`\n\nList all available dimensions.\n\nNote: This API replaces the list-filters API call.\n\n\n### Returns\n\n- `{ data: { advanced: string[]; basic: string[]; }; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { advanced: string[]; basic: string[]; }`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst dimensionsResponse = await client.data.dimensions.list();\n\nconsole.log(dimensionsResponse);\n```",
  },
  {
    name: 'list_trace_elements',
    endpoint: '/data/v1/dimensions/{DIMENSION_ID}/elements',
    httpMethod: 'get',
    summary: 'Lists elements for a trace dimension',
    description:
      'Lists the elements (values) for a trace dimension along with their total counts.\nThis endpoint is specifically designed for trace dimensions like video_cdn_trace\nthat contain arrays of values.\n',
    stainlessPath: '(resource) data.dimensions > (method) list_trace_elements',
    qualified: 'client.data.dimensions.listTraceElements',
    params: [
      'DIMENSION_ID: string;',
      'filters?: string[];',
      'limit?: number;',
      'metric_filters?: string[];',
      "order_by?: 'negative_impact' | 'value' | 'views' | 'field';",
      "order_direction?: 'asc' | 'desc';",
      'page?: number;',
      'timeframe?: string[];',
    ],
    response: '{ total_count: number; value: string; }',
    markdown:
      "## list_trace_elements\n\n`client.data.dimensions.listTraceElements(DIMENSION_ID: string, filters?: string[], limit?: number, metric_filters?: string[], order_by?: 'negative_impact' | 'value' | 'views' | 'field', order_direction?: 'asc' | 'desc', page?: number, timeframe?: string[]): { total_count: number; value: string; }`\n\n**get** `/data/v1/dimensions/{DIMENSION_ID}/elements`\n\nLists the elements (values) for a trace dimension along with their total counts.\nThis endpoint is specifically designed for trace dimensions like video_cdn_trace\nthat contain arrays of values.\n\n\n### Parameters\n\n- `DIMENSION_ID: string`\n\n- `filters?: string[]`\n  Filter results using key:value pairs. Must be provided as an array query string parameter.\n\n**Basic filtering:**\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n\n**For trace dimensions (like video_cdn_trace):**\n* `filters[]=+dimension:value` - Include rows where trace contains value\n* `filters[]=-dimension:value` - Exclude rows where trace contains value\n* `filters[]=dimension:[value1,value2]` - Exact trace match\n\n**Examples:**\n* `filters[]=country:US` - US views only\n* `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN\n\n\n- `limit?: number`\n  Number of items to include in the response\n\n- `metric_filters?: string[]`\n  Limit the results to rows that match inequality conditions from provided metric comparison clauses. Must be provided as an array query string parameter.\n\nPossible filterable metrics are the same as the set of metric ids, with the exceptions of `exits_before_video_start`, `unique_viewers`, `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.\n\nExample:\n\n  * `metric_filters[]=aggregate_startup_time>=1000`\n\n\n- `order_by?: 'negative_impact' | 'value' | 'views' | 'field'`\n  Value to order the results by\n\n- `order_direction?: 'asc' | 'desc'`\n  Sort order.\n\n- `page?: number`\n  Offset by this many pages, of the size of `limit`\n\n- `timeframe?: string[]`\n  Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n\n\n### Returns\n\n- `{ total_count: number; value: string; }`\n\n  - `total_count: number`\n  - `value: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\n// Automatically fetches more pages as needed.\nfor await (const dimensionValue of client.data.dimensions.listTraceElements('abcd1234')) {\n  console.log(dimensionValue);\n}\n```",
  },
  {
    name: 'list_values',
    endpoint: '/data/v1/dimensions/{DIMENSION_ID}',
    httpMethod: 'get',
    summary: 'Lists the values for a specific dimension',
    description:
      'Lists the values for a dimension along with a total count of related views.\n\nNote: This API replaces the list-filter-values API call.\n',
    stainlessPath: '(resource) data.dimensions > (method) list_values',
    qualified: 'client.data.dimensions.listValues',
    params: [
      'DIMENSION_ID: string;',
      'filters?: string[];',
      'limit?: number;',
      'metric_filters?: string[];',
      'page?: number;',
      'timeframe?: string[];',
    ],
    response: '{ total_count: number; value: string; }',
    markdown:
      "## list_values\n\n`client.data.dimensions.listValues(DIMENSION_ID: string, filters?: string[], limit?: number, metric_filters?: string[], page?: number, timeframe?: string[]): { total_count: number; value: string; }`\n\n**get** `/data/v1/dimensions/{DIMENSION_ID}`\n\nLists the values for a dimension along with a total count of related views.\n\nNote: This API replaces the list-filter-values API call.\n\n\n### Parameters\n\n- `DIMENSION_ID: string`\n\n- `filters?: string[]`\n  Filter results using key:value pairs. Must be provided as an array query string parameter.\n\n**Basic filtering:**\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n\n**For trace dimensions (like video_cdn_trace):**\n* `filters[]=+dimension:value` - Include rows where trace contains value\n* `filters[]=-dimension:value` - Exclude rows where trace contains value\n* `filters[]=dimension:[value1,value2]` - Exact trace match\n\n**Examples:**\n* `filters[]=country:US` - US views only\n* `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN\n\n\n- `limit?: number`\n  Number of items to include in the response\n\n- `metric_filters?: string[]`\n  Limit the results to rows that match inequality conditions from provided metric comparison clauses. Must be provided as an array query string parameter.\n\nPossible filterable metrics are the same as the set of metric ids, with the exceptions of `exits_before_video_start`, `unique_viewers`, `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.\n\nExample:\n\n  * `metric_filters[]=aggregate_startup_time>=1000`\n\n\n- `page?: number`\n  Offset by this many pages, of the size of `limit`\n\n- `timeframe?: string[]`\n  Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n\n\n### Returns\n\n- `{ total_count: number; value: string; }`\n\n  - `total_count: number`\n  - `value: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\n// Automatically fetches more pages as needed.\nfor await (const dimensionValue of client.data.dimensions.listValues('abcd1234')) {\n  console.log(dimensionValue);\n}\n```",
  },
  {
    name: 'list_dimensions',
    endpoint: '/data/v1/monitoring/dimensions',
    httpMethod: 'get',
    summary: 'List Monitoring Dimensions',
    description: 'Lists available monitoring dimensions.',
    stainlessPath: '(resource) data.monitoring > (method) list_dimensions',
    qualified: 'client.data.monitoring.listDimensions',
    response:
      '{ data: { display_name: string; name: string; }[]; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## list_dimensions\n\n`client.data.monitoring.listDimensions(): { data: object[]; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/monitoring/dimensions`\n\nLists available monitoring dimensions.\n\n### Returns\n\n- `{ data: { display_name: string; name: string; }[]; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { display_name: string; name: string; }[]`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.data.monitoring.listDimensions();\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/data/v1/monitoring/metrics',
    httpMethod: 'get',
    summary: 'List Monitoring Metrics',
    description: 'Lists available monitoring metrics.',
    stainlessPath: '(resource) data.monitoring.metrics > (method) list',
    qualified: 'client.data.monitoring.metrics.list',
    response:
      '{ data: { display_name: string; name: string; }[]; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## list\n\n`client.data.monitoring.metrics.list(): { data: object[]; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/monitoring/metrics`\n\nLists available monitoring metrics.\n\n### Returns\n\n- `{ data: { display_name: string; name: string; }[]; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { display_name: string; name: string; }[]`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst metrics = await client.data.monitoring.metrics.list();\n\nconsole.log(metrics);\n```",
  },
  {
    name: 'get_breakdown',
    endpoint: '/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown',
    httpMethod: 'get',
    summary: 'Get Monitoring Breakdown',
    description:
      'Gets breakdown information for a specific dimension and metric along with the number of concurrent viewers and negative impact score.',
    stainlessPath: '(resource) data.monitoring.metrics > (method) get_breakdown',
    qualified: 'client.data.monitoring.metrics.getBreakdown',
    params: [
      'MONITORING_METRIC_ID: string;',
      'dimension?: string;',
      'filters?: string[];',
      "order_by?: 'negative_impact' | 'value' | 'views' | 'field';",
      "order_direction?: 'asc' | 'desc';",
      'timestamp?: number;',
    ],
    response:
      '{ data: { concurrent_viewers: number; metric_value: number; negative_impact: number; starting_up_viewers: number; value: string; display_value?: string; }[]; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## get_breakdown\n\n`client.data.monitoring.metrics.getBreakdown(MONITORING_METRIC_ID: string, dimension?: string, filters?: string[], order_by?: 'negative_impact' | 'value' | 'views' | 'field', order_direction?: 'asc' | 'desc', timestamp?: number): { data: object[]; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown`\n\nGets breakdown information for a specific dimension and metric along with the number of concurrent viewers and negative impact score.\n\n### Parameters\n\n- `MONITORING_METRIC_ID: string`\n\n- `dimension?: string`\n  Dimension the specified value belongs to\n\n- `filters?: string[]`\n  Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.\n\nTo exclude rows that match a certain condition, prepend a `!` character to the dimension.\n\nPossible filter names are the same as returned by the List Monitoring Dimensions endpoint.\n\nExample:\n\n  * `filters[]=operating_system:windows&filters[]=!country:US`\n\n\n- `order_by?: 'negative_impact' | 'value' | 'views' | 'field'`\n  Value to order the results by\n\n- `order_direction?: 'asc' | 'desc'`\n  Sort order.\n\n- `timestamp?: number`\n  Timestamp to limit results by. This value must be provided as a unix timestamp. Defaults to the current unix timestamp.\n\n### Returns\n\n- `{ data: { concurrent_viewers: number; metric_value: number; negative_impact: number; starting_up_viewers: number; value: string; display_value?: string; }[]; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { concurrent_viewers: number; metric_value: number; negative_impact: number; starting_up_viewers: number; value: string; display_value?: string; }[]`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.data.monitoring.metrics.getBreakdown('current-concurrent-viewers');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_breakdown_timeseries',
    endpoint: '/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown-timeseries',
    httpMethod: 'get',
    summary: 'Get Monitoring Breakdown Timeseries',
    description:
      'Gets timeseries of breakdown information for a specific dimension and metric. Each datapoint in the response represents 5 seconds worth of data.',
    stainlessPath: '(resource) data.monitoring.metrics > (method) get_breakdown_timeseries',
    qualified: 'client.data.monitoring.metrics.getBreakdownTimeseries',
    params: [
      'MONITORING_METRIC_ID: string;',
      'dimension?: string;',
      'filters?: string[];',
      'limit?: number;',
      "order_by?: 'negative_impact' | 'value' | 'views' | 'field';",
      "order_direction?: 'asc' | 'desc';",
      'timeframe?: string[];',
    ],
    response:
      '{ data: { date: string; values: { concurrent_viewers: number; metric_value: number; starting_up_viewers: number; value: string; }[]; }[]; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## get_breakdown_timeseries\n\n`client.data.monitoring.metrics.getBreakdownTimeseries(MONITORING_METRIC_ID: string, dimension?: string, filters?: string[], limit?: number, order_by?: 'negative_impact' | 'value' | 'views' | 'field', order_direction?: 'asc' | 'desc', timeframe?: string[]): { data: object[]; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown-timeseries`\n\nGets timeseries of breakdown information for a specific dimension and metric. Each datapoint in the response represents 5 seconds worth of data.\n\n### Parameters\n\n- `MONITORING_METRIC_ID: string`\n\n- `dimension?: string`\n  Dimension the specified value belongs to\n\n- `filters?: string[]`\n  Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.\n\nTo exclude rows that match a certain condition, prepend a `!` character to the dimension.\n\nPossible filter names are the same as returned by the List Monitoring Dimensions endpoint.\n\nExample:\n\n  * `filters[]=operating_system:windows&filters[]=!country:US`\n\n\n- `limit?: number`\n  Number of items to include in each timestamp's `value` list.\n\nThe default is 10, and the maximum is 100.\n\n\n- `order_by?: 'negative_impact' | 'value' | 'views' | 'field'`\n  Value to order the results by\n\n- `order_direction?: 'asc' | 'desc'`\n  Sort order.\n\n- `timeframe?: string[]`\n  Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nThe default for this is the last 60 seconds of available data. Timeframes larger than 10 minutes are not allowed, and must be within the last 24 hours.\n\n\n### Returns\n\n- `{ data: { date: string; values: { concurrent_viewers: number; metric_value: number; starting_up_viewers: number; value: string; }[]; }[]; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { date: string; values: { concurrent_viewers: number; metric_value: number; starting_up_viewers: number; value: string; }[]; }[]`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.data.monitoring.metrics.getBreakdownTimeseries('current-concurrent-viewers');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_histogram_timeseries',
    endpoint: '/data/v1/monitoring/metrics/{MONITORING_HISTOGRAM_METRIC_ID}/histogram-timeseries',
    httpMethod: 'get',
    summary: 'Get Monitoring Histogram Timeseries',
    description: 'Gets histogram timeseries information for a specific metric.',
    stainlessPath: '(resource) data.monitoring.metrics > (method) get_histogram_timeseries',
    qualified: 'client.data.monitoring.metrics.getHistogramTimeseries',
    params: ["MONITORING_HISTOGRAM_METRIC_ID: 'video-startup-time';", 'filters?: string[];'],
    response:
      '{ data: { average: number; bucket_values: { count: number; percentage: number; }[]; max_percentage: number; median: number; p95: number; sum: number; timestamp: string; }[]; meta: { bucket_unit: string; buckets: { end: number; start: number; }[]; }; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## get_histogram_timeseries\n\n`client.data.monitoring.metrics.getHistogramTimeseries(MONITORING_HISTOGRAM_METRIC_ID: 'video-startup-time', filters?: string[]): { data: object[]; meta: object; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/monitoring/metrics/{MONITORING_HISTOGRAM_METRIC_ID}/histogram-timeseries`\n\nGets histogram timeseries information for a specific metric.\n\n### Parameters\n\n- `MONITORING_HISTOGRAM_METRIC_ID: 'video-startup-time'`\n\n- `filters?: string[]`\n  Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.\n\nTo exclude rows that match a certain condition, prepend a `!` character to the dimension.\n\nPossible filter names are the same as returned by the List Monitoring Dimensions endpoint.\n\nExample:\n\n  * `filters[]=operating_system:windows&filters[]=!country:US`\n\n\n### Returns\n\n- `{ data: { average: number; bucket_values: { count: number; percentage: number; }[]; max_percentage: number; median: number; p95: number; sum: number; timestamp: string; }[]; meta: { bucket_unit: string; buckets: { end: number; start: number; }[]; }; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { average: number; bucket_values: { count: number; percentage: number; }[]; max_percentage: number; median: number; p95: number; sum: number; timestamp: string; }[]`\n  - `meta: { bucket_unit: string; buckets: { end: number; start: number; }[]; }`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.data.monitoring.metrics.getHistogramTimeseries('video-startup-time');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_timeseries',
    endpoint: '/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/timeseries',
    httpMethod: 'get',
    summary: 'Get Monitoring Timeseries',
    description:
      'Gets Time series information for a specific metric along with the number of concurrent viewers.',
    stainlessPath: '(resource) data.monitoring.metrics > (method) get_timeseries',
    qualified: 'client.data.monitoring.metrics.getTimeseries',
    params: ['MONITORING_METRIC_ID: string;', 'filters?: string[];', 'timestamp?: number;'],
    response:
      '{ data: { concurrent_viewers: number; date: string; value: number; }[]; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## get_timeseries\n\n`client.data.monitoring.metrics.getTimeseries(MONITORING_METRIC_ID: string, filters?: string[], timestamp?: number): { data: object[]; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/timeseries`\n\nGets Time series information for a specific metric along with the number of concurrent viewers.\n\n### Parameters\n\n- `MONITORING_METRIC_ID: string`\n\n- `filters?: string[]`\n  Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.\n\nTo exclude rows that match a certain condition, prepend a `!` character to the dimension.\n\nPossible filter names are the same as returned by the List Monitoring Dimensions endpoint.\n\nExample:\n\n  * `filters[]=operating_system:windows&filters[]=!country:US`\n\n\n- `timestamp?: number`\n  Timestamp to use as the start of the timeseries data. This value must be provided as a unix timestamp. Defaults to 30 minutes ago.\n\n### Returns\n\n- `{ data: { concurrent_viewers: number; date: string; value: number; }[]; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { concurrent_viewers: number; date: string; value: number; }[]`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.data.monitoring.metrics.getTimeseries('current-concurrent-viewers');\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/data/v1/errors',
    httpMethod: 'get',
    summary: 'List Errors',
    description: 'Returns a list of errors.',
    stainlessPath: '(resource) data.errors > (method) list',
    qualified: 'client.data.errors.list',
    params: ['filters?: string[];', 'metric_filters?: string[];', 'timeframe?: string[];'],
    response:
      '{ data: { id: number; code: number; count: number; description: string; last_seen: string; message: string; notes: string; percentage: number; player_error_code: string; }[]; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## list\n\n`client.data.errors.list(filters?: string[], metric_filters?: string[], timeframe?: string[]): { data: object[]; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/errors`\n\nReturns a list of errors.\n\n### Parameters\n\n- `filters?: string[]`\n  Filter results using key:value pairs. Must be provided as an array query string parameter.\n\n**Basic filtering:**\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n\n**For trace dimensions (like video_cdn_trace):**\n* `filters[]=+dimension:value` - Include rows where trace contains value\n* `filters[]=-dimension:value` - Exclude rows where trace contains value\n* `filters[]=dimension:[value1,value2]` - Exact trace match\n\n**Examples:**\n* `filters[]=country:US` - US views only\n* `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN\n\n\n- `metric_filters?: string[]`\n  Limit the results to rows that match inequality conditions from provided metric comparison clauses. Must be provided as an array query string parameter.\n\nPossible filterable metrics are the same as the set of metric ids, with the exceptions of `exits_before_video_start`, `unique_viewers`, `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.\n\nExample:\n\n  * `metric_filters[]=aggregate_startup_time>=1000`\n\n\n- `timeframe?: string[]`\n  Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n\n\n### Returns\n\n- `{ data: { id: number; code: number; count: number; description: string; last_seen: string; message: string; notes: string; percentage: number; player_error_code: string; }[]; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { id: number; code: number; count: number; description: string; last_seen: string; message: string; notes: string; percentage: number; player_error_code: string; }[]`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst errorsResponse = await client.data.errors.list();\n\nconsole.log(errorsResponse);\n```",
  },
  {
    name: 'list_video_views',
    endpoint: '/data/v1/exports/views',
    httpMethod: 'get',
    summary: 'List available property view exports',
    description: 'Lists the available video view exports along with URLs to retrieve them.',
    stainlessPath: '(resource) data.exports > (method) list_video_views',
    qualified: 'client.data.exports.listVideoViews',
    response:
      '{ data: { export_date: string; files: { path: string; type: string; version: number; }[]; }[]; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## list_video_views\n\n`client.data.exports.listVideoViews(): { data: object[]; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/exports/views`\n\nLists the available video view exports along with URLs to retrieve them.\n\n### Returns\n\n- `{ data: { export_date: string; files: { path: string; type: string; version: number; }[]; }[]; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { export_date: string; files: { path: string; type: string; version: number; }[]; }[]`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst videoViewExportsResponse = await client.data.exports.listVideoViews();\n\nconsole.log(videoViewExportsResponse);\n```",
  },
  {
    name: 'list_values',
    endpoint: '/data/v1/filters/{FILTER_ID}',
    httpMethod: 'get',
    summary: 'Lists values for a specific filter',
    description:
      'The API has been replaced by the list-dimension-values API call.\n\nLists the values for a filter along with a total count of related views.\n',
    stainlessPath: '(resource) data.filters > (method) list_values',
    qualified: 'client.data.filters.listValues',
    params: [
      'FILTER_ID: string;',
      'filters?: string[];',
      'limit?: number;',
      'page?: number;',
      'timeframe?: string[];',
    ],
    response: '{ total_count: number; value: string; }',
    markdown:
      "## list_values\n\n`client.data.filters.listValues(FILTER_ID: string, filters?: string[], limit?: number, page?: number, timeframe?: string[]): { total_count: number; value: string; }`\n\n**get** `/data/v1/filters/{FILTER_ID}`\n\nThe API has been replaced by the list-dimension-values API call.\n\nLists the values for a filter along with a total count of related views.\n\n\n### Parameters\n\n- `FILTER_ID: string`\n\n- `filters?: string[]`\n  Filter results using key:value pairs. Must be provided as an array query string parameter.\n\n**Basic filtering:**\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n\n**For trace dimensions (like video_cdn_trace):**\n* `filters[]=+dimension:value` - Include rows where trace contains value\n* `filters[]=-dimension:value` - Exclude rows where trace contains value\n* `filters[]=dimension:[value1,value2]` - Exact trace match\n\n**Examples:**\n* `filters[]=country:US` - US views only\n* `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN\n\n\n- `limit?: number`\n  Number of items to include in the response\n\n- `page?: number`\n  Offset by this many pages, of the size of `limit`\n\n- `timeframe?: string[]`\n  Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n\n\n### Returns\n\n- `{ total_count: number; value: string; }`\n\n  - `total_count: number`\n  - `value: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\n// Automatically fetches more pages as needed.\nfor await (const filterValue of client.data.filters.listValues('abcd1234')) {\n  console.log(filterValue);\n}\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/data/v1/incidents/{INCIDENT_ID}',
    httpMethod: 'get',
    summary: 'Get an Incident',
    description: 'Returns the details of an incident.',
    stainlessPath: '(resource) data.incidents > (method) retrieve',
    qualified: 'client.data.incidents.retrieve',
    params: ['INCIDENT_ID: string;'],
    response:
      '{ data: { id: string; affected_views: number; affected_views_per_hour: number; affected_views_per_hour_on_open: number; breakdowns: object[]; description: string; error_description: string; impact: string; incident_key: string; measured_value: number; measured_value_on_close: number; measurement: string; notification_rules: object[]; notifications: object[]; resolved_at: string; sample_size: number; sample_size_unit: string; severity: string; started_at: string; status: string; threshold: number; }; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## retrieve\n\n`client.data.incidents.retrieve(INCIDENT_ID: string): { data: incident; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/incidents/{INCIDENT_ID}`\n\nReturns the details of an incident.\n\n### Parameters\n\n- `INCIDENT_ID: string`\n\n### Returns\n\n- `{ data: { id: string; affected_views: number; affected_views_per_hour: number; affected_views_per_hour_on_open: number; breakdowns: object[]; description: string; error_description: string; impact: string; incident_key: string; measured_value: number; measured_value_on_close: number; measurement: string; notification_rules: object[]; notifications: object[]; resolved_at: string; sample_size: number; sample_size_unit: string; severity: string; started_at: string; status: string; threshold: number; }; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { id: string; affected_views: number; affected_views_per_hour: number; affected_views_per_hour_on_open: number; breakdowns: { id: string; name: string; value: string; }[]; description: string; error_description: string; impact: string; incident_key: string; measured_value: number; measured_value_on_close: number; measurement: string; notification_rules: { id: string; action: string; property_id: string; rules: { id: string; name: string; value: string; }[]; status: string; }[]; notifications: { id: number; attempted_at: string; queued_at: string; }[]; resolved_at: string; sample_size: number; sample_size_unit: string; severity: string; started_at: string; status: string; threshold: number; }`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst incidentResponse = await client.data.incidents.retrieve('abcd1234');\n\nconsole.log(incidentResponse);\n```",
  },
  {
    name: 'list',
    endpoint: '/data/v1/incidents',
    httpMethod: 'get',
    summary: 'List Incidents',
    description: 'Returns a list of incidents.',
    stainlessPath: '(resource) data.incidents > (method) list',
    qualified: 'client.data.incidents.list',
    params: [
      'limit?: number;',
      "order_by?: 'negative_impact' | 'value' | 'views' | 'field';",
      "order_direction?: 'asc' | 'desc';",
      'page?: number;',
      "severity?: 'warning' | 'alert';",
      "status?: 'open' | 'closed' | 'expired';",
    ],
    response:
      '{ id: string; affected_views: number; affected_views_per_hour: number; affected_views_per_hour_on_open: number; breakdowns: { id: string; name: string; value: string; }[]; description: string; error_description: string; impact: string; incident_key: string; measured_value: number; measured_value_on_close: number; measurement: string; notification_rules: { id: string; action: string; property_id: string; rules: { id: string; name: string; value: string; }[]; status: string; }[]; notifications: { id: number; attempted_at: string; queued_at: string; }[]; resolved_at: string; sample_size: number; sample_size_unit: string; severity: string; started_at: string; status: string; threshold: number; }',
    markdown:
      "## list\n\n`client.data.incidents.list(limit?: number, order_by?: 'negative_impact' | 'value' | 'views' | 'field', order_direction?: 'asc' | 'desc', page?: number, severity?: 'warning' | 'alert', status?: 'open' | 'closed' | 'expired'): { id: string; affected_views: number; affected_views_per_hour: number; affected_views_per_hour_on_open: number; breakdowns: object[]; description: string; error_description: string; impact: string; incident_key: string; measured_value: number; measured_value_on_close: number; measurement: string; notification_rules: object[]; notifications: object[]; resolved_at: string; sample_size: number; sample_size_unit: string; severity: string; started_at: string; status: string; threshold: number; }`\n\n**get** `/data/v1/incidents`\n\nReturns a list of incidents.\n\n### Parameters\n\n- `limit?: number`\n  Number of items to include in the response\n\n- `order_by?: 'negative_impact' | 'value' | 'views' | 'field'`\n  Value to order the results by\n\n- `order_direction?: 'asc' | 'desc'`\n  Sort order.\n\n- `page?: number`\n  Offset by this many pages, of the size of `limit`\n\n- `severity?: 'warning' | 'alert'`\n  Severity to filter incidents by\n\n- `status?: 'open' | 'closed' | 'expired'`\n  Status to filter incidents by\n\n### Returns\n\n- `{ id: string; affected_views: number; affected_views_per_hour: number; affected_views_per_hour_on_open: number; breakdowns: { id: string; name: string; value: string; }[]; description: string; error_description: string; impact: string; incident_key: string; measured_value: number; measured_value_on_close: number; measurement: string; notification_rules: { id: string; action: string; property_id: string; rules: { id: string; name: string; value: string; }[]; status: string; }[]; notifications: { id: number; attempted_at: string; queued_at: string; }[]; resolved_at: string; sample_size: number; sample_size_unit: string; severity: string; started_at: string; status: string; threshold: number; }`\n\n  - `id: string`\n  - `affected_views: number`\n  - `affected_views_per_hour: number`\n  - `affected_views_per_hour_on_open: number`\n  - `breakdowns: { id: string; name: string; value: string; }[]`\n  - `description: string`\n  - `error_description: string`\n  - `impact: string`\n  - `incident_key: string`\n  - `measured_value: number`\n  - `measured_value_on_close: number`\n  - `measurement: string`\n  - `notification_rules: { id: string; action: string; property_id: string; rules: { id: string; name: string; value: string; }[]; status: string; }[]`\n  - `notifications: { id: number; attempted_at: string; queued_at: string; }[]`\n  - `resolved_at: string`\n  - `sample_size: number`\n  - `sample_size_unit: string`\n  - `severity: string`\n  - `started_at: string`\n  - `status: string`\n  - `threshold: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\n// Automatically fetches more pages as needed.\nfor await (const incident of client.data.incidents.list()) {\n  console.log(incident);\n}\n```",
  },
  {
    name: 'list_related',
    endpoint: '/data/v1/incidents/{INCIDENT_ID}/related',
    httpMethod: 'get',
    summary: 'List Related Incidents',
    description: 'Returns all the incidents that seem related to a specific incident.',
    stainlessPath: '(resource) data.incidents > (method) list_related',
    qualified: 'client.data.incidents.listRelated',
    params: [
      'INCIDENT_ID: string;',
      'limit?: number;',
      "order_by?: 'negative_impact' | 'value' | 'views' | 'field';",
      "order_direction?: 'asc' | 'desc';",
      'page?: number;',
    ],
    response:
      '{ id: string; affected_views: number; affected_views_per_hour: number; affected_views_per_hour_on_open: number; breakdowns: { id: string; name: string; value: string; }[]; description: string; error_description: string; impact: string; incident_key: string; measured_value: number; measured_value_on_close: number; measurement: string; notification_rules: { id: string; action: string; property_id: string; rules: { id: string; name: string; value: string; }[]; status: string; }[]; notifications: { id: number; attempted_at: string; queued_at: string; }[]; resolved_at: string; sample_size: number; sample_size_unit: string; severity: string; started_at: string; status: string; threshold: number; }',
    markdown:
      "## list_related\n\n`client.data.incidents.listRelated(INCIDENT_ID: string, limit?: number, order_by?: 'negative_impact' | 'value' | 'views' | 'field', order_direction?: 'asc' | 'desc', page?: number): { id: string; affected_views: number; affected_views_per_hour: number; affected_views_per_hour_on_open: number; breakdowns: object[]; description: string; error_description: string; impact: string; incident_key: string; measured_value: number; measured_value_on_close: number; measurement: string; notification_rules: object[]; notifications: object[]; resolved_at: string; sample_size: number; sample_size_unit: string; severity: string; started_at: string; status: string; threshold: number; }`\n\n**get** `/data/v1/incidents/{INCIDENT_ID}/related`\n\nReturns all the incidents that seem related to a specific incident.\n\n### Parameters\n\n- `INCIDENT_ID: string`\n\n- `limit?: number`\n  Number of items to include in the response\n\n- `order_by?: 'negative_impact' | 'value' | 'views' | 'field'`\n  Value to order the results by\n\n- `order_direction?: 'asc' | 'desc'`\n  Sort order.\n\n- `page?: number`\n  Offset by this many pages, of the size of `limit`\n\n### Returns\n\n- `{ id: string; affected_views: number; affected_views_per_hour: number; affected_views_per_hour_on_open: number; breakdowns: { id: string; name: string; value: string; }[]; description: string; error_description: string; impact: string; incident_key: string; measured_value: number; measured_value_on_close: number; measurement: string; notification_rules: { id: string; action: string; property_id: string; rules: { id: string; name: string; value: string; }[]; status: string; }[]; notifications: { id: number; attempted_at: string; queued_at: string; }[]; resolved_at: string; sample_size: number; sample_size_unit: string; severity: string; started_at: string; status: string; threshold: number; }`\n\n  - `id: string`\n  - `affected_views: number`\n  - `affected_views_per_hour: number`\n  - `affected_views_per_hour_on_open: number`\n  - `breakdowns: { id: string; name: string; value: string; }[]`\n  - `description: string`\n  - `error_description: string`\n  - `impact: string`\n  - `incident_key: string`\n  - `measured_value: number`\n  - `measured_value_on_close: number`\n  - `measurement: string`\n  - `notification_rules: { id: string; action: string; property_id: string; rules: { id: string; name: string; value: string; }[]; status: string; }[]`\n  - `notifications: { id: number; attempted_at: string; queued_at: string; }[]`\n  - `resolved_at: string`\n  - `sample_size: number`\n  - `sample_size_unit: string`\n  - `severity: string`\n  - `started_at: string`\n  - `status: string`\n  - `threshold: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\n// Automatically fetches more pages as needed.\nfor await (const incident of client.data.incidents.listRelated('abcd1234')) {\n  console.log(incident);\n}\n```",
  },
  {
    name: 'list',
    endpoint: '/data/v1/metrics/comparison',
    httpMethod: 'get',
    summary: 'List all metric values',
    description: 'List all of the values across every breakdown for a specific metric.',
    stainlessPath: '(resource) data.metrics > (method) list',
    qualified: 'client.data.metrics.list',
    params: [
      'dimension?: string;',
      'filters?: string[];',
      'metric_filters?: string[];',
      'timeframe?: string[];',
      'value?: string;',
    ],
    response:
      '{ data: { name: string; ended_views?: number; items?: { metric: string; name: string; type: string; value: number; measurement?: string; }[]; metric?: string; started_views?: number; total_playing_time?: number; type?: string; unique_viewers?: number; value?: number; view_count?: number; watch_time?: number; }[]; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## list\n\n`client.data.metrics.list(dimension?: string, filters?: string[], metric_filters?: string[], timeframe?: string[], value?: string): { data: object[]; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/metrics/comparison`\n\nList all of the values across every breakdown for a specific metric.\n\n### Parameters\n\n- `dimension?: string`\n  Dimension the specified value belongs to\n\n- `filters?: string[]`\n  Filter results using key:value pairs. Must be provided as an array query string parameter.\n\n**Basic filtering:**\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n\n**For trace dimensions (like video_cdn_trace):**\n* `filters[]=+dimension:value` - Include rows where trace contains value\n* `filters[]=-dimension:value` - Exclude rows where trace contains value\n* `filters[]=dimension:[value1,value2]` - Exact trace match\n\n**Examples:**\n* `filters[]=country:US` - US views only\n* `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN\n\n\n- `metric_filters?: string[]`\n  Limit the results to rows that match inequality conditions from provided metric comparison clauses. Must be provided as an array query string parameter.\n\nPossible filterable metrics are the same as the set of metric ids, with the exceptions of `exits_before_video_start`, `unique_viewers`, `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.\n\nExample:\n\n  * `metric_filters[]=aggregate_startup_time>=1000`\n\n\n- `timeframe?: string[]`\n  Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n\n\n- `value?: string`\n  Value to show all available metrics for\n\n### Returns\n\n- `{ data: { name: string; ended_views?: number; items?: { metric: string; name: string; type: string; value: number; measurement?: string; }[]; metric?: string; started_views?: number; total_playing_time?: number; type?: string; unique_viewers?: number; value?: number; view_count?: number; watch_time?: number; }[]; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { name: string; ended_views?: number; items?: { metric: string; name: string; type: string; value: number; measurement?: string; }[]; metric?: string; started_views?: number; total_playing_time?: number; type?: string; unique_viewers?: number; value?: number; view_count?: number; watch_time?: number; }[]`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst allMetricValuesResponse = await client.data.metrics.list();\n\nconsole.log(allMetricValuesResponse);\n```",
  },
  {
    name: 'get_insights',
    endpoint: '/data/v1/metrics/{METRIC_ID}/insights',
    httpMethod: 'get',
    summary: 'List Insights',
    description:
      'Returns a list of insights for a metric. These are the worst performing values across all breakdowns sorted by how much they negatively impact a specific metric.',
    stainlessPath: '(resource) data.metrics > (method) get_insights',
    qualified: 'client.data.metrics.getInsights',
    params: [
      'METRIC_ID: string;',
      'filters?: string[];',
      "measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum';",
      'metric_filters?: string[];',
      "order_direction?: 'asc' | 'desc';",
      'timeframe?: string[];',
    ],
    response:
      '{ data: { filter_column: string; filter_value: string; metric: number; negative_impact_score: number; total_playing_time: number; total_views: number; total_watch_time: number; }[]; meta: { aggregation?: string; granularity?: string; }; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## get_insights\n\n`client.data.metrics.getInsights(METRIC_ID: string, filters?: string[], measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum', metric_filters?: string[], order_direction?: 'asc' | 'desc', timeframe?: string[]): { data: object[]; meta: object; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/metrics/{METRIC_ID}/insights`\n\nReturns a list of insights for a metric. These are the worst performing values across all breakdowns sorted by how much they negatively impact a specific metric.\n\n### Parameters\n\n- `METRIC_ID: string`\n\n- `filters?: string[]`\n  Filter results using key:value pairs. Must be provided as an array query string parameter.\n\n**Basic filtering:**\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n\n**For trace dimensions (like video_cdn_trace):**\n* `filters[]=+dimension:value` - Include rows where trace contains value\n* `filters[]=-dimension:value` - Exclude rows where trace contains value\n* `filters[]=dimension:[value1,value2]` - Exact trace match\n\n**Examples:**\n* `filters[]=country:US` - US views only\n* `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN\n\n\n- `measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum'`\n  Measurement for the provided metric. If omitted, the default for the metric will be used.\nThe default measurement for each metric is:\n\"sum\" : `ad_attempt_count`, `ad_break_count`, `ad_break_error_count`, `ad_error_count`, `ad_impression_count`, `playing_time`\n\"median\" : `ad_preroll_startup_time`, `aggregate_startup_time`, `content_startup_time`, `max_downscale_percentage`, `max_upscale_percentage`, `page_load_time`, `player_average_live_latency`, `player_startup_time`, `rebuffer_count`, `rebuffer_duration`, `requests_for_first_preroll`, `video_startup_preroll_load_time`, `video_startup_preroll_request_time`, `video_startup_time`, `view_average_request_latency`, `view_average_request_throughput`, `view_max_request_latency`, `weighted_average_bitrate`\n\"avg\" : `ad_break_error_percentage`, `ad_error_percentage`, `ad_exit_before_start_count`, `ad_exit_before_start_percentage`, `ad_playback_failure_percentage`, `ad_startup_error_count`, `ad_startup_error_percentage`, `content_playback_failure_percentage`, `downscale_percentage`, `exits_before_video_start`, `playback_business_exception_percentage`, `playback_failure_percentage`, `playback_success_score`, `rebuffer_frequency`, `rebuffer_percentage`, `seek_latency`, `smoothness_score`, `startup_time_score`, `upscale_percentage`, `video_quality_score`, `video_startup_business_exception_percentage`, `video_startup_failure_percentage`, `view_dropped_percentage`, `viewer_experience_score`\n\"count\" : `started_views`, `unique_viewers`\n\n- `metric_filters?: string[]`\n  Limit the results to rows that match inequality conditions from provided metric comparison clauses. Must be provided as an array query string parameter.\n\nPossible filterable metrics are the same as the set of metric ids, with the exceptions of `exits_before_video_start`, `unique_viewers`, `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.\n\nExample:\n\n  * `metric_filters[]=aggregate_startup_time>=1000`\n\n\n- `order_direction?: 'asc' | 'desc'`\n  Sort order.\n\n- `timeframe?: string[]`\n  Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n\n\n### Returns\n\n- `{ data: { filter_column: string; filter_value: string; metric: number; negative_impact_score: number; total_playing_time: number; total_views: number; total_watch_time: number; }[]; meta: { aggregation?: string; granularity?: string; }; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { filter_column: string; filter_value: string; metric: number; negative_impact_score: number; total_playing_time: number; total_views: number; total_watch_time: number; }[]`\n  - `meta: { aggregation?: string; granularity?: string; }`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst insightsResponse = await client.data.metrics.getInsights('video_startup_time');\n\nconsole.log(insightsResponse);\n```",
  },
  {
    name: 'get_overall_values',
    endpoint: '/data/v1/metrics/{METRIC_ID}/overall',
    httpMethod: 'get',
    summary: 'Get Overall values',
    description:
      'Returns the overall value for a specific metric, as well as the total view count, watch time, and the Mux Global metric value for the metric.',
    stainlessPath: '(resource) data.metrics > (method) get_overall_values',
    qualified: 'client.data.metrics.getOverallValues',
    params: [
      'METRIC_ID: string;',
      'filters?: string[];',
      "measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum';",
      'metric_filters?: string[];',
      'timeframe?: string[];',
    ],
    response:
      '{ data: { global_value: number; total_playing_time: number; total_views: number; total_watch_time: number; value: number; }; meta: { aggregation?: string; granularity?: string; }; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## get_overall_values\n\n`client.data.metrics.getOverallValues(METRIC_ID: string, filters?: string[], measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum', metric_filters?: string[], timeframe?: string[]): { data: object; meta: object; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/metrics/{METRIC_ID}/overall`\n\nReturns the overall value for a specific metric, as well as the total view count, watch time, and the Mux Global metric value for the metric.\n\n### Parameters\n\n- `METRIC_ID: string`\n\n- `filters?: string[]`\n  Filter results using key:value pairs. Must be provided as an array query string parameter.\n\n**Basic filtering:**\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n\n**For trace dimensions (like video_cdn_trace):**\n* `filters[]=+dimension:value` - Include rows where trace contains value\n* `filters[]=-dimension:value` - Exclude rows where trace contains value\n* `filters[]=dimension:[value1,value2]` - Exact trace match\n\n**Examples:**\n* `filters[]=country:US` - US views only\n* `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN\n\n\n- `measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum'`\n  Measurement for the provided metric. If omitted, the default for the metric will be used.\nThe default measurement for each metric is:\n\"sum\" : `ad_attempt_count`, `ad_break_count`, `ad_break_error_count`, `ad_error_count`, `ad_impression_count`, `playing_time`\n\"median\" : `ad_preroll_startup_time`, `aggregate_startup_time`, `content_startup_time`, `max_downscale_percentage`, `max_upscale_percentage`, `page_load_time`, `player_average_live_latency`, `player_startup_time`, `rebuffer_count`, `rebuffer_duration`, `requests_for_first_preroll`, `video_startup_preroll_load_time`, `video_startup_preroll_request_time`, `video_startup_time`, `view_average_request_latency`, `view_average_request_throughput`, `view_max_request_latency`, `weighted_average_bitrate`\n\"avg\" : `ad_break_error_percentage`, `ad_error_percentage`, `ad_exit_before_start_count`, `ad_exit_before_start_percentage`, `ad_playback_failure_percentage`, `ad_startup_error_count`, `ad_startup_error_percentage`, `content_playback_failure_percentage`, `downscale_percentage`, `exits_before_video_start`, `playback_business_exception_percentage`, `playback_failure_percentage`, `playback_success_score`, `rebuffer_frequency`, `rebuffer_percentage`, `seek_latency`, `smoothness_score`, `startup_time_score`, `upscale_percentage`, `video_quality_score`, `video_startup_business_exception_percentage`, `video_startup_failure_percentage`, `view_dropped_percentage`, `viewer_experience_score`\n\"count\" : `started_views`, `unique_viewers`\n\n- `metric_filters?: string[]`\n  Limit the results to rows that match inequality conditions from provided metric comparison clauses. Must be provided as an array query string parameter.\n\nPossible filterable metrics are the same as the set of metric ids, with the exceptions of `exits_before_video_start`, `unique_viewers`, `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.\n\nExample:\n\n  * `metric_filters[]=aggregate_startup_time>=1000`\n\n\n- `timeframe?: string[]`\n  Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n\n\n### Returns\n\n- `{ data: { global_value: number; total_playing_time: number; total_views: number; total_watch_time: number; value: number; }; meta: { aggregation?: string; granularity?: string; }; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { global_value: number; total_playing_time: number; total_views: number; total_watch_time: number; value: number; }`\n  - `meta: { aggregation?: string; granularity?: string; }`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst overallValuesResponse = await client.data.metrics.getOverallValues('video_startup_time');\n\nconsole.log(overallValuesResponse);\n```",
  },
  {
    name: 'get_timeseries',
    endpoint: '/data/v1/metrics/{METRIC_ID}/timeseries',
    httpMethod: 'get',
    summary: 'Get metric timeseries data',
    description:
      'Returns timeseries data for a specific metric.\n\nEach interval represented in the data array contains an array with the following values:\n  * the first element is the interval time\n  * the second element is the calculated metric value\n  * the third element is the number of views in the interval that have a valid metric value\n',
    stainlessPath: '(resource) data.metrics > (method) get_timeseries',
    qualified: 'client.data.metrics.getTimeseries',
    params: [
      'METRIC_ID: string;',
      'filters?: string[];',
      "group_by?: 'minute' | 'ten_minutes' | 'hour' | 'day';",
      "measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum';",
      'metric_filters?: string[];',
      "order_direction?: 'asc' | 'desc';",
      'timeframe?: string[];',
    ],
    response:
      '{ data: string | number[][]; meta: { aggregation?: string; granularity?: string; }; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## get_timeseries\n\n`client.data.metrics.getTimeseries(METRIC_ID: string, filters?: string[], group_by?: 'minute' | 'ten_minutes' | 'hour' | 'day', measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum', metric_filters?: string[], order_direction?: 'asc' | 'desc', timeframe?: string[]): { data: string | number[][]; meta: object; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/metrics/{METRIC_ID}/timeseries`\n\nReturns timeseries data for a specific metric.\n\nEach interval represented in the data array contains an array with the following values:\n  * the first element is the interval time\n  * the second element is the calculated metric value\n  * the third element is the number of views in the interval that have a valid metric value\n\n\n### Parameters\n\n- `METRIC_ID: string`\n\n- `filters?: string[]`\n  Filter results using key:value pairs. Must be provided as an array query string parameter.\n\n**Basic filtering:**\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n\n**For trace dimensions (like video_cdn_trace):**\n* `filters[]=+dimension:value` - Include rows where trace contains value\n* `filters[]=-dimension:value` - Exclude rows where trace contains value\n* `filters[]=dimension:[value1,value2]` - Exact trace match\n\n**Examples:**\n* `filters[]=country:US` - US views only\n* `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN\n\n\n- `group_by?: 'minute' | 'ten_minutes' | 'hour' | 'day'`\n  Time granularity to group results by. If this value is omitted, a default granularity is chosen based on the timeframe.\n\nFor timeframes of less than 90 minutes, the default granularity is `minute`. Between 90 minutes and 6 hours, the default granularity is `ten_minutes`. Between 6 hours and 15 days inclusive, the default granularity is `hour`. The granularity of timeframes that exceed 15 days is `day`. This default behavior is subject to change; it is strongly suggested that you explicitly specify the granularity.\n\n- `measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum'`\n  Measurement for the provided metric. If omitted, the default for the metric will be used.\nThe default measurement for each metric is:\n\"sum\" : `ad_attempt_count`, `ad_break_count`, `ad_break_error_count`, `ad_error_count`, `ad_impression_count`, `playing_time`\n\"median\" : `ad_preroll_startup_time`, `aggregate_startup_time`, `content_startup_time`, `max_downscale_percentage`, `max_upscale_percentage`, `page_load_time`, `player_average_live_latency`, `player_startup_time`, `rebuffer_count`, `rebuffer_duration`, `requests_for_first_preroll`, `video_startup_preroll_load_time`, `video_startup_preroll_request_time`, `video_startup_time`, `view_average_request_latency`, `view_average_request_throughput`, `view_max_request_latency`, `weighted_average_bitrate`\n\"avg\" : `ad_break_error_percentage`, `ad_error_percentage`, `ad_exit_before_start_count`, `ad_exit_before_start_percentage`, `ad_playback_failure_percentage`, `ad_startup_error_count`, `ad_startup_error_percentage`, `content_playback_failure_percentage`, `downscale_percentage`, `exits_before_video_start`, `playback_business_exception_percentage`, `playback_failure_percentage`, `playback_success_score`, `rebuffer_frequency`, `rebuffer_percentage`, `seek_latency`, `smoothness_score`, `startup_time_score`, `upscale_percentage`, `video_quality_score`, `video_startup_business_exception_percentage`, `video_startup_failure_percentage`, `view_dropped_percentage`, `viewer_experience_score`\n\"count\" : `started_views`, `unique_viewers`\n\n- `metric_filters?: string[]`\n  Limit the results to rows that match inequality conditions from provided metric comparison clauses. Must be provided as an array query string parameter.\n\nPossible filterable metrics are the same as the set of metric ids, with the exceptions of `exits_before_video_start`, `unique_viewers`, `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.\n\nExample:\n\n  * `metric_filters[]=aggregate_startup_time>=1000`\n\n\n- `order_direction?: 'asc' | 'desc'`\n  Sort order.\n\n- `timeframe?: string[]`\n  Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n\n\n### Returns\n\n- `{ data: string | number[][]; meta: { aggregation?: string; granularity?: string; }; timeframe: number[]; total_row_count: number; }`\n\n  - `data: string | number[][]`\n  - `meta: { aggregation?: string; granularity?: string; }`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst metricTimeseriesDataResponse = await client.data.metrics.getTimeseries('video_startup_time');\n\nconsole.log(metricTimeseriesDataResponse);\n```",
  },
  {
    name: 'list_breakdown_values',
    endpoint: '/data/v1/metrics/{METRIC_ID}/breakdown',
    httpMethod: 'get',
    summary: 'List breakdown values',
    description: 'List the breakdown values for a specific metric.',
    stainlessPath: '(resource) data.metrics > (method) list_breakdown_values',
    qualified: 'client.data.metrics.listBreakdownValues',
    params: [
      'METRIC_ID: string;',
      'filters?: string[];',
      'group_by?: string;',
      'limit?: number;',
      "measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum';",
      'metric_filters?: string[];',
      "order_by?: 'negative_impact' | 'value' | 'views' | 'field';",
      "order_direction?: 'asc' | 'desc';",
      'page?: number;',
      'timeframe?: string[];',
    ],
    response:
      '{ field: string; negative_impact: number; total_playing_time: number; total_watch_time: number; value: number; views: number; }',
    markdown:
      "## list_breakdown_values\n\n`client.data.metrics.listBreakdownValues(METRIC_ID: string, filters?: string[], group_by?: string, limit?: number, measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum', metric_filters?: string[], order_by?: 'negative_impact' | 'value' | 'views' | 'field', order_direction?: 'asc' | 'desc', page?: number, timeframe?: string[]): { field: string; negative_impact: number; total_playing_time: number; total_watch_time: number; value: number; views: number; }`\n\n**get** `/data/v1/metrics/{METRIC_ID}/breakdown`\n\nList the breakdown values for a specific metric.\n\n### Parameters\n\n- `METRIC_ID: string`\n\n- `filters?: string[]`\n  Filter results using key:value pairs. Must be provided as an array query string parameter.\n\n**Basic filtering:**\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n\n**For trace dimensions (like video_cdn_trace):**\n* `filters[]=+dimension:value` - Include rows where trace contains value\n* `filters[]=-dimension:value` - Exclude rows where trace contains value\n* `filters[]=dimension:[value1,value2]` - Exact trace match\n\n**Examples:**\n* `filters[]=country:US` - US views only\n* `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN\n\n\n- `group_by?: string`\n  Breakdown value to group the results by\n\n- `limit?: number`\n  Number of items to include in the response\n\n- `measurement?: '95th' | 'median' | 'avg' | 'count' | 'sum'`\n  Measurement for the provided metric. If omitted, the default for the metric will be used.\nThe default measurement for each metric is:\n\"sum\" : `ad_attempt_count`, `ad_break_count`, `ad_break_error_count`, `ad_error_count`, `ad_impression_count`, `playing_time`\n\"median\" : `ad_preroll_startup_time`, `aggregate_startup_time`, `content_startup_time`, `max_downscale_percentage`, `max_upscale_percentage`, `page_load_time`, `player_average_live_latency`, `player_startup_time`, `rebuffer_count`, `rebuffer_duration`, `requests_for_first_preroll`, `video_startup_preroll_load_time`, `video_startup_preroll_request_time`, `video_startup_time`, `view_average_request_latency`, `view_average_request_throughput`, `view_max_request_latency`, `weighted_average_bitrate`\n\"avg\" : `ad_break_error_percentage`, `ad_error_percentage`, `ad_exit_before_start_count`, `ad_exit_before_start_percentage`, `ad_playback_failure_percentage`, `ad_startup_error_count`, `ad_startup_error_percentage`, `content_playback_failure_percentage`, `downscale_percentage`, `exits_before_video_start`, `playback_business_exception_percentage`, `playback_failure_percentage`, `playback_success_score`, `rebuffer_frequency`, `rebuffer_percentage`, `seek_latency`, `smoothness_score`, `startup_time_score`, `upscale_percentage`, `video_quality_score`, `video_startup_business_exception_percentage`, `video_startup_failure_percentage`, `view_dropped_percentage`, `viewer_experience_score`\n\"count\" : `started_views`, `unique_viewers`\n\n- `metric_filters?: string[]`\n  Limit the results to rows that match inequality conditions from provided metric comparison clauses. Must be provided as an array query string parameter.\n\nPossible filterable metrics are the same as the set of metric ids, with the exceptions of `exits_before_video_start`, `unique_viewers`, `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.\n\nExample:\n\n  * `metric_filters[]=aggregate_startup_time>=1000`\n\n\n- `order_by?: 'negative_impact' | 'value' | 'views' | 'field'`\n  Value to order the results by\n\n- `order_direction?: 'asc' | 'desc'`\n  Sort order.\n\n- `page?: number`\n  Offset by this many pages, of the size of `limit`\n\n- `timeframe?: string[]`\n  Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n\n\n### Returns\n\n- `{ field: string; negative_impact: number; total_playing_time: number; total_watch_time: number; value: number; views: number; }`\n\n  - `field: string`\n  - `negative_impact: number`\n  - `total_playing_time: number`\n  - `total_watch_time: number`\n  - `value: number`\n  - `views: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\n// Automatically fetches more pages as needed.\nfor await (const breakdownValue of client.data.metrics.listBreakdownValues('video_startup_time')) {\n  console.log(breakdownValue);\n}\n```",
  },
  {
    name: 'list_dimensions',
    endpoint: '/data/v1/realtime/dimensions',
    httpMethod: 'get',
    summary: 'List Real-Time Dimensions',
    description:
      'Lists available real-time dimensions. This API is now deprecated, please use the `List Monitoring Dimensions` API.',
    stainlessPath: '(resource) data.real_time > (method) list_dimensions',
    qualified: 'client.data.realTime.listDimensions',
    response:
      '{ data: { display_name: string; name: string; }[]; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## list_dimensions\n\n`client.data.realTime.listDimensions(): { data: object[]; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/realtime/dimensions`\n\nLists available real-time dimensions. This API is now deprecated, please use the `List Monitoring Dimensions` API.\n\n### Returns\n\n- `{ data: { display_name: string; name: string; }[]; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { display_name: string; name: string; }[]`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst realTimeDimensionsResponse = await client.data.realTime.listDimensions();\n\nconsole.log(realTimeDimensionsResponse);\n```",
  },
  {
    name: 'list_metrics',
    endpoint: '/data/v1/realtime/metrics',
    httpMethod: 'get',
    summary: 'List Real-Time Metrics',
    description:
      'Lists available real-time metrics. This API is now deprecated, please use the `List Monitoring Metrics` API.',
    stainlessPath: '(resource) data.real_time > (method) list_metrics',
    qualified: 'client.data.realTime.listMetrics',
    response:
      '{ data: { display_name: string; name: string; }[]; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## list_metrics\n\n`client.data.realTime.listMetrics(): { data: object[]; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/realtime/metrics`\n\nLists available real-time metrics. This API is now deprecated, please use the `List Monitoring Metrics` API.\n\n### Returns\n\n- `{ data: { display_name: string; name: string; }[]; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { display_name: string; name: string; }[]`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst realTimeMetricsResponse = await client.data.realTime.listMetrics();\n\nconsole.log(realTimeMetricsResponse);\n```",
  },
  {
    name: 'retrieve_breakdown',
    endpoint: '/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/breakdown',
    httpMethod: 'get',
    summary: 'Get Real-Time Breakdown',
    description:
      'Gets breakdown information for a specific dimension and metric along with the number of concurrent viewers and negative impact score. This API is now deprecated, please use the `Get Monitoring Breakdown` API.',
    stainlessPath: '(resource) data.real_time > (method) retrieve_breakdown',
    qualified: 'client.data.realTime.retrieveBreakdown',
    params: [
      'REALTIME_METRIC_ID: string;',
      'dimension?: string;',
      'filters?: string[];',
      "order_by?: 'negative_impact' | 'value' | 'views' | 'field';",
      "order_direction?: 'asc' | 'desc';",
      'timestamp?: number;',
    ],
    response:
      '{ data: { concurrent_viewers: number; metric_value: number; negative_impact: number; starting_up_viewers: number; value: string; display_value?: string; }[]; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## retrieve_breakdown\n\n`client.data.realTime.retrieveBreakdown(REALTIME_METRIC_ID: string, dimension?: string, filters?: string[], order_by?: 'negative_impact' | 'value' | 'views' | 'field', order_direction?: 'asc' | 'desc', timestamp?: number): { data: object[]; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/breakdown`\n\nGets breakdown information for a specific dimension and metric along with the number of concurrent viewers and negative impact score. This API is now deprecated, please use the `Get Monitoring Breakdown` API.\n\n### Parameters\n\n- `REALTIME_METRIC_ID: string`\n\n- `dimension?: string`\n  Dimension the specified value belongs to\n\n- `filters?: string[]`\n  Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.\n\nTo exclude rows that match a certain condition, prepend a `!` character to the dimension.\n\nPossible filter names are the same as returned by the List Monitoring Dimensions endpoint.\n\nExample:\n\n  * `filters[]=operating_system:windows&filters[]=!country:US`\n\n\n- `order_by?: 'negative_impact' | 'value' | 'views' | 'field'`\n  Value to order the results by\n\n- `order_direction?: 'asc' | 'desc'`\n  Sort order.\n\n- `timestamp?: number`\n  Timestamp to limit results by. This value must be provided as a unix timestamp. Defaults to the current unix timestamp.\n\n### Returns\n\n- `{ data: { concurrent_viewers: number; metric_value: number; negative_impact: number; starting_up_viewers: number; value: string; display_value?: string; }[]; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { concurrent_viewers: number; metric_value: number; negative_impact: number; starting_up_viewers: number; value: string; display_value?: string; }[]`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst realTimeBreakdownResponse = await client.data.realTime.retrieveBreakdown('current-concurrent-viewers');\n\nconsole.log(realTimeBreakdownResponse);\n```",
  },
  {
    name: 'retrieve_histogram_timeseries',
    endpoint: '/data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries',
    httpMethod: 'get',
    summary: 'Get Real-Time Histogram Timeseries',
    description:
      'Gets histogram timeseries information for a specific metric. This API is now deprecated, please use the `Get Monitoring Histogram Timeseries` API.',
    stainlessPath: '(resource) data.real_time > (method) retrieve_histogram_timeseries',
    qualified: 'client.data.realTime.retrieveHistogramTimeseries',
    params: ["REALTIME_HISTOGRAM_METRIC_ID: 'video-startup-time';", 'filters?: string[];'],
    response:
      '{ data: { average: number; bucket_values: { count: number; percentage: number; }[]; max_percentage: number; median: number; p95: number; sum: number; timestamp: string; }[]; meta: { bucket_unit: string; buckets: { end: number; start: number; }[]; }; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## retrieve_histogram_timeseries\n\n`client.data.realTime.retrieveHistogramTimeseries(REALTIME_HISTOGRAM_METRIC_ID: 'video-startup-time', filters?: string[]): { data: object[]; meta: object; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries`\n\nGets histogram timeseries information for a specific metric. This API is now deprecated, please use the `Get Monitoring Histogram Timeseries` API.\n\n### Parameters\n\n- `REALTIME_HISTOGRAM_METRIC_ID: 'video-startup-time'`\n\n- `filters?: string[]`\n  Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.\n\nTo exclude rows that match a certain condition, prepend a `!` character to the dimension.\n\nPossible filter names are the same as returned by the List Monitoring Dimensions endpoint.\n\nExample:\n\n  * `filters[]=operating_system:windows&filters[]=!country:US`\n\n\n### Returns\n\n- `{ data: { average: number; bucket_values: { count: number; percentage: number; }[]; max_percentage: number; median: number; p95: number; sum: number; timestamp: string; }[]; meta: { bucket_unit: string; buckets: { end: number; start: number; }[]; }; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { average: number; bucket_values: { count: number; percentage: number; }[]; max_percentage: number; median: number; p95: number; sum: number; timestamp: string; }[]`\n  - `meta: { bucket_unit: string; buckets: { end: number; start: number; }[]; }`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst realTimeHistogramTimeseriesResponse = await client.data.realTime.retrieveHistogramTimeseries('video-startup-time');\n\nconsole.log(realTimeHistogramTimeseriesResponse);\n```",
  },
  {
    name: 'retrieve_timeseries',
    endpoint: '/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/timeseries',
    httpMethod: 'get',
    summary: 'Get Real-Time Timeseries',
    description:
      'Gets Time series information for a specific metric along with the number of concurrent viewers. This API is now deprecated, please use the `Get Monitoring Timeseries` API.',
    stainlessPath: '(resource) data.real_time > (method) retrieve_timeseries',
    qualified: 'client.data.realTime.retrieveTimeseries',
    params: ['REALTIME_METRIC_ID: string;', 'filters?: string[];', 'timestamp?: number;'],
    response:
      '{ data: { concurrent_viewers: number; date: string; value: number; }[]; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## retrieve_timeseries\n\n`client.data.realTime.retrieveTimeseries(REALTIME_METRIC_ID: string, filters?: string[], timestamp?: number): { data: object[]; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/timeseries`\n\nGets Time series information for a specific metric along with the number of concurrent viewers. This API is now deprecated, please use the `Get Monitoring Timeseries` API.\n\n### Parameters\n\n- `REALTIME_METRIC_ID: string`\n\n- `filters?: string[]`\n  Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.\n\nTo exclude rows that match a certain condition, prepend a `!` character to the dimension.\n\nPossible filter names are the same as returned by the List Monitoring Dimensions endpoint.\n\nExample:\n\n  * `filters[]=operating_system:windows&filters[]=!country:US`\n\n\n- `timestamp?: number`\n  Timestamp to use as the start of the timeseries data. This value must be provided as a unix timestamp. Defaults to 30 minutes ago.\n\n### Returns\n\n- `{ data: { concurrent_viewers: number; date: string; value: number; }[]; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { concurrent_viewers: number; date: string; value: number; }[]`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst realTimeTimeseriesResponse = await client.data.realTime.retrieveTimeseries('current-concurrent-viewers');\n\nconsole.log(realTimeTimeseriesResponse);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/data/v1/video-views/{VIDEO_VIEW_ID}',
    httpMethod: 'get',
    summary: 'Get a Video View',
    description: 'Returns the details of a video view.',
    stainlessPath: '(resource) data.video_views > (method) retrieve',
    qualified: 'client.data.videoViews.retrieve',
    params: ['VIDEO_VIEW_ID: string;'],
    response: '{ data: object; timeframe: number[]; total_row_count: number; }',
    markdown:
      "## retrieve\n\n`client.data.videoViews.retrieve(VIDEO_VIEW_ID: string): { data: object; timeframe: number[]; total_row_count: number; }`\n\n**get** `/data/v1/video-views/{VIDEO_VIEW_ID}`\n\nReturns the details of a video view.\n\n### Parameters\n\n- `VIDEO_VIEW_ID: string`\n\n### Returns\n\n- `{ data: { id: string; ad_attempt_count: number; ad_break_count: number; ad_break_error_count: number; ad_break_error_percentage: string; ad_error_count: number; ad_error_percentage: string; ad_exit_before_start_count: number; ad_exit_before_start_percentage: string; ad_impression_count: number; ad_playback_failure_error_type_id: number; ad_preroll_startup_time: number; ad_startup_error_count: number; ad_startup_error_percentage: string; asn: number; asn_name: string; asset_id: string; audio_codec: string; audio_codec_initial: string; buffering_count: number; buffering_duration: number; buffering_rate: string; cdn: string; city: string; client_application_name: string; client_application_version: string; continent_code: string; country_code: string; country_name: string; custom_1: string; custom_10: string; custom_2: string; custom_3: string; custom_4: string; custom_5: string; custom_6: string; custom_7: string; custom_8: string; custom_9: string; environment_id: string; error_type_id: number; events: { details: object; event_time: number; name: string; playback_time: number; viewer_time: number; }[]; exit_before_video_start: boolean; experiment_name: string; inserted_at: string; isp: string; latitude: string; live_stream_id: string; live_stream_latency: number; long_rebuffering: boolean; long_resume: boolean; longitude: string; metro: string; mux_api_version: string; mux_embed: string; mux_embed_version: string; mux_viewer_id: string; page_load_time: number; page_type: string; page_url: string; platform_description: string; platform_summary: string; playback_business_exception_error_type_id: number; playback_failure: boolean; playback_failure_error_type_id: number; playback_id: string; playback_score: string; player_autoplay: boolean; player_error_code: string; player_error_message: string; player_height: number; player_instance_id: string; player_language: string; player_load_time: number; player_mux_plugin_name: string; player_mux_plugin_version: string; player_name: string; player_poster: string; player_preload: boolean; player_remote_played: boolean; player_software: string; player_software_version: string; player_source_domain: string; player_source_duration: number; player_source_height: number; player_source_host_name: string; player_source_stream_type: string; player_source_type: string; player_source_url: string; player_source_width: number; player_startup_time: number; player_version: string; player_view_count: number; player_width: number; preroll_ad_asset_hostname: string; preroll_ad_tag_hostname: string; preroll_played: boolean; preroll_requested: boolean; property_id: number; quality_score: string; rebuffer_percentage: string; rebuffering_score: string; region: string; rendition_change_count: number; rendition_downshift_count: number; rendition_upshift_count: number; requests_for_first_preroll: number; session_id: string; short_time: string; startup_score: string; sub_property_id: string; time_shift_enabled: boolean; time_to_first_frame: number; updated_at: string; used_captions: boolean; used_fullscreen: boolean; used_pip: boolean; video_affiliate: string; video_brand: string; video_cdn_trace: string[]; video_codec: string; video_codec_initial: string; video_content_type: string; video_creator_id: string; video_duration: number; video_dynamic_range_type: string; video_dynamic_range_type_initial: string; video_encoding_variant: string; video_id: string; video_language: string; video_producer: string; video_series: string; video_source_bitrate: number; video_source_bitrate_initial: number; video_source_fps: number; video_source_fps_initial: number; video_source_height: number; video_source_height_initial: number; video_source_width: number; video_source_width_initial: number; video_startup_business_exception_error_type_id: number; video_startup_failure: boolean; video_startup_preroll_load_time: number; video_startup_preroll_request_time: number; video_stream_type: string; video_title: string; video_variant_id: string; video_variant_name: string; view_average_request_latency: number; view_average_request_throughput: number; view_cdn_edge_pop: string; view_cdn_origin: string; view_content_startup_time: number; view_drm_level: string; view_drm_type: string; view_dropped: boolean; view_dropped_frame_count: number; view_end: string; view_error_id: number; view_has_ad: boolean; view_id: string; view_max_downscale_percentage: string; view_max_playhead_position: string; view_max_request_latency: number; view_max_upscale_percentage: string; view_playing_time: string; view_seek_count: number; view_seek_duration: number; view_session_id: string; view_start: string; view_total_content_playback_time: number; view_total_downscaling: string; view_total_upscaling: string; viewer_application_engine: string; viewer_application_name: string; viewer_application_version: string; viewer_connection_type: string; viewer_device_category: string; viewer_device_manufacturer: string; viewer_device_model: string; viewer_device_name: string; viewer_experience_score: string; viewer_os_architecture: string; viewer_os_family: string; viewer_os_version: string; viewer_plan: string; viewer_plan_category: string; viewer_plan_status: string; viewer_user_agent: string; viewer_user_id: string; watch_time: number; watched: boolean; weighted_average_bitrate: number; player_error_context?: string; }; timeframe: number[]; total_row_count: number; }`\n\n  - `data: { id: string; ad_attempt_count: number; ad_break_count: number; ad_break_error_count: number; ad_break_error_percentage: string; ad_error_count: number; ad_error_percentage: string; ad_exit_before_start_count: number; ad_exit_before_start_percentage: string; ad_impression_count: number; ad_playback_failure_error_type_id: number; ad_preroll_startup_time: number; ad_startup_error_count: number; ad_startup_error_percentage: string; asn: number; asn_name: string; asset_id: string; audio_codec: string; audio_codec_initial: string; buffering_count: number; buffering_duration: number; buffering_rate: string; cdn: string; city: string; client_application_name: string; client_application_version: string; continent_code: string; country_code: string; country_name: string; custom_1: string; custom_10: string; custom_2: string; custom_3: string; custom_4: string; custom_5: string; custom_6: string; custom_7: string; custom_8: string; custom_9: string; environment_id: string; error_type_id: number; events: { details: object; event_time: number; name: string; playback_time: number; viewer_time: number; }[]; exit_before_video_start: boolean; experiment_name: string; inserted_at: string; isp: string; latitude: string; live_stream_id: string; live_stream_latency: number; long_rebuffering: boolean; long_resume: boolean; longitude: string; metro: string; mux_api_version: string; mux_embed: string; mux_embed_version: string; mux_viewer_id: string; page_load_time: number; page_type: string; page_url: string; platform_description: string; platform_summary: string; playback_business_exception_error_type_id: number; playback_failure: boolean; playback_failure_error_type_id: number; playback_id: string; playback_score: string; player_autoplay: boolean; player_error_code: string; player_error_message: string; player_height: number; player_instance_id: string; player_language: string; player_load_time: number; player_mux_plugin_name: string; player_mux_plugin_version: string; player_name: string; player_poster: string; player_preload: boolean; player_remote_played: boolean; player_software: string; player_software_version: string; player_source_domain: string; player_source_duration: number; player_source_height: number; player_source_host_name: string; player_source_stream_type: string; player_source_type: string; player_source_url: string; player_source_width: number; player_startup_time: number; player_version: string; player_view_count: number; player_width: number; preroll_ad_asset_hostname: string; preroll_ad_tag_hostname: string; preroll_played: boolean; preroll_requested: boolean; property_id: number; quality_score: string; rebuffer_percentage: string; rebuffering_score: string; region: string; rendition_change_count: number; rendition_downshift_count: number; rendition_upshift_count: number; requests_for_first_preroll: number; session_id: string; short_time: string; startup_score: string; sub_property_id: string; time_shift_enabled: boolean; time_to_first_frame: number; updated_at: string; used_captions: boolean; used_fullscreen: boolean; used_pip: boolean; video_affiliate: string; video_brand: string; video_cdn_trace: string[]; video_codec: string; video_codec_initial: string; video_content_type: string; video_creator_id: string; video_duration: number; video_dynamic_range_type: string; video_dynamic_range_type_initial: string; video_encoding_variant: string; video_id: string; video_language: string; video_producer: string; video_series: string; video_source_bitrate: number; video_source_bitrate_initial: number; video_source_fps: number; video_source_fps_initial: number; video_source_height: number; video_source_height_initial: number; video_source_width: number; video_source_width_initial: number; video_startup_business_exception_error_type_id: number; video_startup_failure: boolean; video_startup_preroll_load_time: number; video_startup_preroll_request_time: number; video_stream_type: string; video_title: string; video_variant_id: string; video_variant_name: string; view_average_request_latency: number; view_average_request_throughput: number; view_cdn_edge_pop: string; view_cdn_origin: string; view_content_startup_time: number; view_drm_level: string; view_drm_type: string; view_dropped: boolean; view_dropped_frame_count: number; view_end: string; view_error_id: number; view_has_ad: boolean; view_id: string; view_max_downscale_percentage: string; view_max_playhead_position: string; view_max_request_latency: number; view_max_upscale_percentage: string; view_playing_time: string; view_seek_count: number; view_seek_duration: number; view_session_id: string; view_start: string; view_total_content_playback_time: number; view_total_downscaling: string; view_total_upscaling: string; viewer_application_engine: string; viewer_application_name: string; viewer_application_version: string; viewer_connection_type: string; viewer_device_category: string; viewer_device_manufacturer: string; viewer_device_model: string; viewer_device_name: string; viewer_experience_score: string; viewer_os_architecture: string; viewer_os_family: string; viewer_os_version: string; viewer_plan: string; viewer_plan_category: string; viewer_plan_status: string; viewer_user_agent: string; viewer_user_id: string; watch_time: number; watched: boolean; weighted_average_bitrate: number; player_error_context?: string; }`\n  - `timeframe: number[]`\n  - `total_row_count: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst videoViewResponse = await client.data.videoViews.retrieve('abcd1234');\n\nconsole.log(videoViewResponse);\n```",
  },
  {
    name: 'list',
    endpoint: '/data/v1/video-views',
    httpMethod: 'get',
    summary: 'List Video Views',
    description:
      'Returns a list of video views which match the filters and have a `view_end` within the specified timeframe.',
    stainlessPath: '(resource) data.video_views > (method) list',
    qualified: 'client.data.videoViews.list',
    params: [
      'error_id?: number;',
      'filters?: string[];',
      'limit?: number;',
      'metric_filters?: string[];',
      "order_direction?: 'asc' | 'desc';",
      'page?: number;',
      'timeframe?: string[];',
      'viewer_id?: string;',
    ],
    response:
      '{ id: string; country_code: string; error_type_id: number; playback_failure: boolean; player_error_code: string; player_error_message: string; total_row_count: number; video_title: string; view_end: string; view_start: string; viewer_application_name: string; viewer_experience_score: number; viewer_os_family: string; watch_time: number; }',
    markdown:
      "## list\n\n`client.data.videoViews.list(error_id?: number, filters?: string[], limit?: number, metric_filters?: string[], order_direction?: 'asc' | 'desc', page?: number, timeframe?: string[], viewer_id?: string): { id: string; country_code: string; error_type_id: number; playback_failure: boolean; player_error_code: string; player_error_message: string; total_row_count: number; video_title: string; view_end: string; view_start: string; viewer_application_name: string; viewer_experience_score: number; viewer_os_family: string; watch_time: number; }`\n\n**get** `/data/v1/video-views`\n\nReturns a list of video views which match the filters and have a `view_end` within the specified timeframe.\n\n### Parameters\n\n- `error_id?: number`\n  Filter video views by the provided error ID (as returned in the error_type_id field in the list video views endpoint). If you provide any as the error ID, this will filter the results to those with any error.\n\n- `filters?: string[]`\n  Filter results using key:value pairs. Must be provided as an array query string parameter.\n\n**Basic filtering:**\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n\n**For trace dimensions (like video_cdn_trace):**\n* `filters[]=+dimension:value` - Include rows where trace contains value\n* `filters[]=-dimension:value` - Exclude rows where trace contains value\n* `filters[]=dimension:[value1,value2]` - Exact trace match\n\n**Examples:**\n* `filters[]=country:US` - US views only\n* `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN\n\n\n- `limit?: number`\n  Number of items to include in the response\n\n- `metric_filters?: string[]`\n  Limit the results to rows that match inequality conditions from provided metric comparison clauses. Must be provided as an array query string parameter.\n\nPossible filterable metrics are the same as the set of metric ids, with the exceptions of `exits_before_video_start`, `unique_viewers`, `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.\n\nExample:\n\n  * `metric_filters[]=aggregate_startup_time>=1000`\n\n\n- `order_direction?: 'asc' | 'desc'`\n  Sort order.\n\n- `page?: number`\n  Offset by this many pages, of the size of `limit`\n\n- `timeframe?: string[]`\n  Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n\n\n- `viewer_id?: string`\n  Viewer ID to filter results by. This value may be provided by the integration, or may be created by Mux.\n\n### Returns\n\n- `{ id: string; country_code: string; error_type_id: number; playback_failure: boolean; player_error_code: string; player_error_message: string; total_row_count: number; video_title: string; view_end: string; view_start: string; viewer_application_name: string; viewer_experience_score: number; viewer_os_family: string; watch_time: number; }`\n\n  - `id: string`\n  - `country_code: string`\n  - `error_type_id: number`\n  - `playback_failure: boolean`\n  - `player_error_code: string`\n  - `player_error_message: string`\n  - `total_row_count: number`\n  - `video_title: string`\n  - `view_end: string`\n  - `view_start: string`\n  - `viewer_application_name: string`\n  - `viewer_experience_score: number`\n  - `viewer_os_family: string`\n  - `watch_time: number`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\n// Automatically fetches more pages as needed.\nfor await (const abridgedVideoView of client.data.videoViews.list()) {\n  console.log(abridgedVideoView);\n}\n```",
  },
  {
    name: 'create',
    endpoint: '/data/v1/annotations',
    httpMethod: 'post',
    summary: 'Create Annotation',
    description: 'Creates a new annotation.',
    stainlessPath: '(resource) data.annotations > (method) create',
    qualified: 'client.data.annotations.create',
    params: ['date: number;', 'note: string;', 'sub_property_id?: string;'],
    response: '{ id: string; date: string; note: string; sub_property_id?: string; }',
    markdown:
      "## create\n\n`client.data.annotations.create(date: number, note: string, sub_property_id?: string): { id: string; date: string; note: string; sub_property_id?: string; }`\n\n**post** `/data/v1/annotations`\n\nCreates a new annotation.\n\n### Parameters\n\n- `date: number`\n  Datetime when the annotation applies (Unix timestamp)\n\n- `note: string`\n  The annotation note content\n\n- `sub_property_id?: string`\n  Customer-defined sub-property identifier\n\n### Returns\n\n- `{ id: string; date: string; note: string; sub_property_id?: string; }`\n\n  - `id: string`\n  - `date: string`\n  - `note: string`\n  - `sub_property_id?: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst annotation = await client.data.annotations.create({ date: 1745438400, note: 'This is a note' });\n\nconsole.log(annotation);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/data/v1/annotations/{ANNOTATION_ID}',
    httpMethod: 'get',
    summary: 'Get Annotation',
    description: 'Returns the details of a specific annotation.',
    stainlessPath: '(resource) data.annotations > (method) retrieve',
    qualified: 'client.data.annotations.retrieve',
    params: ['ANNOTATION_ID: string;'],
    response: '{ id: string; date: string; note: string; sub_property_id?: string; }',
    markdown:
      "## retrieve\n\n`client.data.annotations.retrieve(ANNOTATION_ID: string): { id: string; date: string; note: string; sub_property_id?: string; }`\n\n**get** `/data/v1/annotations/{ANNOTATION_ID}`\n\nReturns the details of a specific annotation.\n\n### Parameters\n\n- `ANNOTATION_ID: string`\n\n### Returns\n\n- `{ id: string; date: string; note: string; sub_property_id?: string; }`\n\n  - `id: string`\n  - `date: string`\n  - `note: string`\n  - `sub_property_id?: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst annotation = await client.data.annotations.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(annotation);\n```",
  },
  {
    name: 'update',
    endpoint: '/data/v1/annotations/{ANNOTATION_ID}',
    httpMethod: 'patch',
    summary: 'Update Annotation',
    description: 'Updates an existing annotation.',
    stainlessPath: '(resource) data.annotations > (method) update',
    qualified: 'client.data.annotations.update',
    params: ['ANNOTATION_ID: string;', 'date: number;', 'note: string;', 'sub_property_id?: string;'],
    response: '{ id: string; date: string; note: string; sub_property_id?: string; }',
    markdown:
      "## update\n\n`client.data.annotations.update(ANNOTATION_ID: string, date: number, note: string, sub_property_id?: string): { id: string; date: string; note: string; sub_property_id?: string; }`\n\n**patch** `/data/v1/annotations/{ANNOTATION_ID}`\n\nUpdates an existing annotation.\n\n### Parameters\n\n- `ANNOTATION_ID: string`\n\n- `date: number`\n  Datetime when the annotation applies (Unix timestamp)\n\n- `note: string`\n  The annotation note content\n\n- `sub_property_id?: string`\n  Customer-defined sub-property identifier\n\n### Returns\n\n- `{ id: string; date: string; note: string; sub_property_id?: string; }`\n\n  - `id: string`\n  - `date: string`\n  - `note: string`\n  - `sub_property_id?: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst annotation = await client.data.annotations.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { date: 1745438400, note: 'This is a note' });\n\nconsole.log(annotation);\n```",
  },
  {
    name: 'list',
    endpoint: '/data/v1/annotations',
    httpMethod: 'get',
    summary: 'List Annotations',
    description: 'Returns a list of annotations.',
    stainlessPath: '(resource) data.annotations > (method) list',
    qualified: 'client.data.annotations.list',
    params: [
      'limit?: number;',
      "order_direction?: 'asc' | 'desc';",
      'page?: number;',
      'timeframe?: string[];',
    ],
    response: '{ id: string; date: string; note: string; sub_property_id?: string; }',
    markdown:
      "## list\n\n`client.data.annotations.list(limit?: number, order_direction?: 'asc' | 'desc', page?: number, timeframe?: string[]): { id: string; date: string; note: string; sub_property_id?: string; }`\n\n**get** `/data/v1/annotations`\n\nReturns a list of annotations.\n\n### Parameters\n\n- `limit?: number`\n  Number of items to include in the response\n\n- `order_direction?: 'asc' | 'desc'`\n  Sort order.\n\n- `page?: number`\n  Offset by this many pages, of the size of `limit`\n\n- `timeframe?: string[]`\n  Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n\n\n### Returns\n\n- `{ id: string; date: string; note: string; sub_property_id?: string; }`\n\n  - `id: string`\n  - `date: string`\n  - `note: string`\n  - `sub_property_id?: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\n// Automatically fetches more pages as needed.\nfor await (const annotation of client.data.annotations.list()) {\n  console.log(annotation);\n}\n```",
  },
  {
    name: 'delete',
    endpoint: '/data/v1/annotations/{ANNOTATION_ID}',
    httpMethod: 'delete',
    summary: 'Delete Annotation',
    description: 'Deletes an annotation.',
    stainlessPath: '(resource) data.annotations > (method) delete',
    qualified: 'client.data.annotations.delete',
    params: ['ANNOTATION_ID: string;'],
    markdown:
      "## delete\n\n`client.data.annotations.delete(ANNOTATION_ID: string): void`\n\n**delete** `/data/v1/annotations/{ANNOTATION_ID}`\n\nDeletes an annotation.\n\n### Parameters\n\n- `ANNOTATION_ID: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nawait client.data.annotations.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e')\n```",
  },
  {
    name: 'create',
    endpoint: '/system/v1/signing-keys',
    httpMethod: 'post',
    summary: 'Create a signing key',
    description:
      'Creates a new signing key pair. When creating a new signing key, the API will generate a 2048-bit RSA key-pair and return the private key and a generated key-id; the public key will be stored at Mux to validate signed tokens.',
    stainlessPath: '(resource) system.signing_keys > (method) create',
    qualified: 'client.system.signingKeys.create',
    response: '{ id: string; created_at: string; private_key?: string; }',
    markdown:
      "## create\n\n`client.system.signingKeys.create(): { id: string; created_at: string; private_key?: string; }`\n\n**post** `/system/v1/signing-keys`\n\nCreates a new signing key pair. When creating a new signing key, the API will generate a 2048-bit RSA key-pair and return the private key and a generated key-id; the public key will be stored at Mux to validate signed tokens.\n\n### Returns\n\n- `{ id: string; created_at: string; private_key?: string; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `private_key?: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst signingKey = await client.system.signingKeys.create();\n\nconsole.log(signingKey);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/system/v1/signing-keys/{SIGNING_KEY_ID}',
    httpMethod: 'get',
    summary: 'Retrieve a signing key',
    description:
      'Retrieves the details of a signing key that has previously\nbeen created. Supply the unique signing key ID that was returned from your\nprevious request, and Mux will return the corresponding signing key information.\n**The private key is not returned in this response.**\n',
    stainlessPath: '(resource) system.signing_keys > (method) retrieve',
    qualified: 'client.system.signingKeys.retrieve',
    params: ['SIGNING_KEY_ID: string;'],
    response: '{ id: string; created_at: string; private_key?: string; }',
    markdown:
      "## retrieve\n\n`client.system.signingKeys.retrieve(SIGNING_KEY_ID: string): { id: string; created_at: string; private_key?: string; }`\n\n**get** `/system/v1/signing-keys/{SIGNING_KEY_ID}`\n\nRetrieves the details of a signing key that has previously\nbeen created. Supply the unique signing key ID that was returned from your\nprevious request, and Mux will return the corresponding signing key information.\n**The private key is not returned in this response.**\n\n\n### Parameters\n\n- `SIGNING_KEY_ID: string`\n\n### Returns\n\n- `{ id: string; created_at: string; private_key?: string; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `private_key?: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst signingKey = await client.system.signingKeys.retrieve('SIGNING_KEY_ID');\n\nconsole.log(signingKey);\n```",
  },
  {
    name: 'list',
    endpoint: '/system/v1/signing-keys',
    httpMethod: 'get',
    summary: 'List signing keys',
    description: 'Returns a list of signing keys.',
    stainlessPath: '(resource) system.signing_keys > (method) list',
    qualified: 'client.system.signingKeys.list',
    params: ['limit?: number;', 'page?: number;'],
    response: '{ id: string; created_at: string; private_key?: string; }',
    markdown:
      "## list\n\n`client.system.signingKeys.list(limit?: number, page?: number): { id: string; created_at: string; private_key?: string; }`\n\n**get** `/system/v1/signing-keys`\n\nReturns a list of signing keys.\n\n### Parameters\n\n- `limit?: number`\n  Number of items to include in the response\n\n- `page?: number`\n  Offset by this many pages, of the size of `limit`\n\n### Returns\n\n- `{ id: string; created_at: string; private_key?: string; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `private_key?: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\n// Automatically fetches more pages as needed.\nfor await (const signingKey of client.system.signingKeys.list()) {\n  console.log(signingKey);\n}\n```",
  },
  {
    name: 'delete',
    endpoint: '/system/v1/signing-keys/{SIGNING_KEY_ID}',
    httpMethod: 'delete',
    summary: 'Delete a signing key',
    description:
      'Deletes an existing signing key. Use with caution, as this will invalidate any existing signatures and no JWTs can be signed using the key again.',
    stainlessPath: '(resource) system.signing_keys > (method) delete',
    qualified: 'client.system.signingKeys.delete',
    params: ['SIGNING_KEY_ID: string;'],
    markdown:
      "## delete\n\n`client.system.signingKeys.delete(SIGNING_KEY_ID: string): void`\n\n**delete** `/system/v1/signing-keys/{SIGNING_KEY_ID}`\n\nDeletes an existing signing key. Use with caution, as this will invalidate any existing signatures and no JWTs can be signed using the key again.\n\n### Parameters\n\n- `SIGNING_KEY_ID: string`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nawait client.system.signingKeys.delete('SIGNING_KEY_ID')\n```",
  },
  {
    name: 'whoami',
    endpoint: '/system/v1/whoami',
    httpMethod: 'get',
    summary: 'Retrieve information about your current access token.',
    description:
      'Retrieve information about your current access token, including organization, environment, and permissions. Note that this can only be access with an access token, and _all_ access tokens can access this route, regardless of what permissions they have assigned.',
    stainlessPath: '(resource) system.utilities > (method) whoami',
    qualified: 'client.system.utilities.whoami',
    response:
      '{ access_token_name: string; environment_id: string; environment_name: string; environment_type: string; organization_id: string; organization_name: string; permissions: string[]; }',
    markdown:
      "## whoami\n\n`client.system.utilities.whoami(): { access_token_name: string; environment_id: string; environment_name: string; environment_type: string; organization_id: string; organization_name: string; permissions: string[]; }`\n\n**get** `/system/v1/whoami`\n\nRetrieve information about your current access token, including organization, environment, and permissions. Note that this can only be access with an access token, and _all_ access tokens can access this route, regardless of what permissions they have assigned.\n\n### Returns\n\n- `{ access_token_name: string; environment_id: string; environment_name: string; environment_type: string; organization_id: string; organization_name: string; permissions: string[]; }`\n\n  - `access_token_name: string`\n  - `environment_id: string`\n  - `environment_name: string`\n  - `environment_type: string`\n  - `organization_id: string`\n  - `organization_name: string`\n  - `permissions: string[]`\n\n### Example\n\n```typescript\nimport Mux from '@mux/mux-node';\n\nconst client = new Mux();\n\nconst response = await client.system.utilities.whoami();\n\nconsole.log(response);\n```",
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
