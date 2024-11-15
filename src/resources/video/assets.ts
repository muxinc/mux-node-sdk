// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import { BasePage, type BasePageParams } from '../../pagination';

export class Assets extends APIResource {
  /**
   * Create a new Mux Video asset.
   */
  create(body: AssetCreateParams, options?: Core.RequestOptions): Core.APIPromise<Asset> {
    return (
      this._client.post('/video/v1/assets', { body, ...options }) as Core.APIPromise<{ data: Asset }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Retrieves the details of an asset that has previously been created. Supply the
   * unique asset ID that was returned from your previous request, and Mux will
   * return the corresponding asset information. The same information is returned
   * when creating an asset.
   */
  retrieve(assetId: string, options?: Core.RequestOptions): Core.APIPromise<Asset> {
    return (
      this._client.get(`/video/v1/assets/${assetId}`, options) as Core.APIPromise<{ data: Asset }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Updates the details of an already-created Asset with the provided Asset ID. This
   * currently supports only the `passthrough` field.
   */
  update(assetId: string, body: AssetUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Asset> {
    return (
      this._client.patch(`/video/v1/assets/${assetId}`, { body, ...options }) as Core.APIPromise<{
        data: Asset;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * List all Mux assets.
   */
  list(query?: AssetListParams, options?: Core.RequestOptions): Core.PagePromise<AssetsBasePage, Asset>;
  list(options?: Core.RequestOptions): Core.PagePromise<AssetsBasePage, Asset>;
  list(
    query: AssetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AssetsBasePage, Asset> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/video/v1/assets', AssetsBasePage, { query, ...options });
  }

  /**
   * Deletes a video asset and all its data.
   */
  delete(assetId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/video/v1/assets/${assetId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Creates a playback ID that can be used to stream the asset to a viewer.
   */
  createPlaybackId(
    assetId: string,
    body: AssetCreatePlaybackIDParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.PlaybackID> {
    return (
      this._client.post(`/video/v1/assets/${assetId}/playback-ids`, { body, ...options }) as Core.APIPromise<{
        data: Shared.PlaybackID;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Adds an asset track (for example, subtitles, or an alternate audio track) to an
   * asset.
   */
  createTrack(
    assetId: string,
    body: AssetCreateTrackParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Track> {
    return (
      this._client.post(`/video/v1/assets/${assetId}/tracks`, { body, ...options }) as Core.APIPromise<{
        data: Track;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Deletes a playback ID, rendering it nonfunctional for viewing an asset's video
   * content. Please note that deleting the playback ID removes access to the
   * underlying asset; a viewer who started playback before the playback ID was
   * deleted may be able to watch the entire video for a limited duration.
   */
  deletePlaybackId(
    assetId: string,
    playbackId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(`/video/v1/assets/${assetId}/playback-ids/${playbackId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Removes a text track from an asset. Audio and video tracks on assets cannot be
   * removed.
   */
  deleteTrack(assetId: string, trackId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/video/v1/assets/${assetId}/tracks/${trackId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Generates subtitles (captions) for a given audio track. This API can be used for
   * up to 7 days after an asset is created.
   */
  generateSubtitles(
    assetId: string,
    trackId: string,
    body: AssetGenerateSubtitlesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetGenerateSubtitlesResponse> {
    return (
      this._client.post(`/video/v1/assets/${assetId}/tracks/${trackId}/generate-subtitles`, {
        body,
        ...options,
      }) as Core.APIPromise<{ data: AssetGenerateSubtitlesResponse }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Returns a list of the input objects that were used to create the asset along
   * with any settings that were applied to each input.
   */
  retrieveInputInfo(
    assetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetRetrieveInputInfoResponse> {
    return (
      this._client.get(`/video/v1/assets/${assetId}/input-info`, options) as Core.APIPromise<{
        data: AssetRetrieveInputInfoResponse;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Retrieves information about the specified playback ID.
   */
  retrievePlaybackId(
    assetId: string,
    playbackId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.PlaybackID> {
    return (
      this._client.get(`/video/v1/assets/${assetId}/playback-ids/${playbackId}`, options) as Core.APIPromise<{
        data: Shared.PlaybackID;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Allows you to add temporary access to the master (highest-quality) version of
   * the asset in MP4 format. A URL will be created that can be used to download the
   * master version for 24 hours. After 24 hours Master Access will revert to "none".
   * This master version is not optimized for web and not meant to be streamed, only
   * downloaded for purposes like archiving or editing the video offline.
   */
  updateMasterAccess(
    assetId: string,
    body: AssetUpdateMasterAccessParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Asset> {
    return (
      this._client.put(`/video/v1/assets/${assetId}/master-access`, { body, ...options }) as Core.APIPromise<{
        data: Asset;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Allows you to add or remove mp4 support for assets that were created without it.
   * The values supported are `capped-1080p`, `audio-only`,
   * `audio-only,capped-1080p`, `standard`(deprecated), and `none`. `none` means that
   * an asset _does not_ have mp4 support, so submitting a request with `mp4_support`
   * set to `none` will delete the mp4 assets from the asset in question.
   */
  updateMP4Support(
    assetId: string,
    body: AssetUpdateMP4SupportParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Asset> {
    return (
      this._client.put(`/video/v1/assets/${assetId}/mp4-support`, { body, ...options }) as Core.APIPromise<{
        data: Asset;
      }>
    )._thenUnwrap((obj) => obj.data);
  }
}

export class AssetsBasePage extends BasePage<Asset> {}

export interface Asset {
  /**
   * Unique identifier for the Asset. Max 255 characters.
   */
  id: string;

  /**
   * Time the Asset was created, defined as a Unix timestamp (seconds since epoch).
   */
  created_at: string;

  /**
   * @deprecated: This field is deprecated. Please use `video_quality` instead. The
   * encoding tier informs the cost, quality, and available platform features for the
   * asset. The default encoding tier for an account can be set in the Mux Dashboard.
   * [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)
   */
  encoding_tier: 'smart' | 'baseline' | 'premium';

  master_access: 'temporary' | 'none';

  /**
   * Max resolution tier can be used to control the maximum `resolution_tier` your
   * asset is encoded, stored, and streamed at. If not set, this defaults to `1080p`.
   */
  max_resolution_tier: '1080p' | '1440p' | '2160p';

  mp4_support: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p';

  /**
   * The status of the asset.
   */
  status: 'preparing' | 'ready' | 'errored';

  /**
   * The aspect ratio of the asset in the form of `width:height`, for example `16:9`.
   */
  aspect_ratio?: string;

  /**
   * The duration of the asset in seconds (max duration for a single asset is 12
   * hours).
   */
  duration?: number;

  /**
   * Object that describes any errors that happened when processing this asset.
   */
  errors?: Asset.Errors;

  /**
   * The type of ingest used to create the asset.
   */
  ingest_type?: 'on_demand_url' | 'on_demand_direct_upload' | 'on_demand_clip' | 'live_rtmp' | 'live_srt';

  /**
   * Indicates whether the live stream that created this asset is currently `active`
   * and not in `idle` state. This is an optional parameter added when the asset is
   * created from a live stream.
   */
  is_live?: boolean;

  /**
   * Unique identifier for the live stream. This is an optional parameter added when
   * the asset is created from a live stream.
   */
  live_stream_id?: string;

  /**
   * An object containing the current status of Master Access and the link to the
   * Master MP4 file when ready. This object does not exist if `master_access` is set
   * to `none` and when the temporary URL expires.
   */
  master?: Asset.Master;

  /**
   * The maximum frame rate that has been stored for the asset. The asset may be
   * delivered at lower frame rates depending on the device and bandwidth, however it
   * cannot be delivered at a higher value than is stored. This field may return -1
   * if the frame rate of the input cannot be reliably determined.
   */
  max_stored_frame_rate?: number;

  /**
   * @deprecated: This field is deprecated. Please use `resolution_tier` instead. The
   * maximum resolution that has been stored for the asset. The asset may be
   * delivered at lower resolutions depending on the device and bandwidth, however it
   * cannot be delivered at a higher value than is stored.
   */
  max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD';

  /**
   * An object containing one or more reasons the input file is non-standard. See
   * [the guide on minimizing processing time](https://docs.mux.com/guides/minimize-processing-time)
   * for more information on what a standard input is defined as. This object only
   * exists on on-demand assets that have non-standard inputs, so if missing you can
   * assume the input qualifies as standard.
   */
  non_standard_input_reasons?: Asset.NonStandardInputReasons;

  /**
   * Normalize the audio track loudness level. This parameter is only applicable to
   * on-demand (not live) assets.
   */
  normalize_audio?: boolean;

  /**
   * Arbitrary user-supplied metadata set for the asset. Max 255 characters.
   */
  passthrough?: string;

  /**
   * @deprecated
   */
  per_title_encode?: boolean;

  /**
   * An array of Playback ID objects. Use these to create HLS playback URLs. See
   * [Play your videos](https://docs.mux.com/guides/play-your-videos) for more
   * details.
   */
  playback_ids?: Array<Shared.PlaybackID>;

  /**
   * An array of individual live stream recording sessions. A recording session is
   * created on each encoder connection during the live stream. Additionally any time
   * slate media is inserted during brief interruptions in the live stream media or
   * times when the live streaming software disconnects, a recording session
   * representing the slate media will be added with a "slate" type.
   */
  recording_times?: Array<Asset.RecordingTime>;

  /**
   * The resolution tier that the asset was ingested at, affecting billing for ingest
   * & storage. This field also represents the highest resolution tier that the
   * content can be delivered at, however the actual resolution may be lower
   * depending on the device, bandwidth, and exact resolution of the uploaded asset.
   */
  resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p';

  /**
   * Asset Identifier of the video used as the source for creating the clip.
   */
  source_asset_id?: string;

  /**
   * An object containing the current status of any static renditions (mp4s). The
   * object does not exist if no static renditions have been requested. See
   * [Download your videos](https://docs.mux.com/guides/enable-static-mp4-renditions)
   * for more information.
   */
  static_renditions?: Asset.StaticRenditions;

  /**
   * True means this live stream is a test asset. A test asset can help evaluate the
   * Mux Video APIs without incurring any cost. There is no limit on number of test
   * assets created. Test assets are watermarked with the Mux logo, limited to 10
   * seconds, and deleted after 24 hrs.
   */
  test?: boolean;

  /**
   * The individual media tracks that make up an asset.
   */
  tracks?: Array<Track>;

  /**
   * Unique identifier for the Direct Upload. This is an optional parameter added
   * when the asset is created from a direct upload.
   */
  upload_id?: string;

  /**
   * The video quality controls the cost, quality, and available platform features
   * for the asset. The default video quality for an account can be set in the Mux
   * Dashboard. This field replaces the deprecated `encoding_tier` value.
   * [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)
   */
  video_quality?: 'basic' | 'plus' | 'premium';
}

export namespace Asset {
  /**
   * Object that describes any errors that happened when processing this asset.
   */
  export interface Errors {
    /**
     * Error messages with more details.
     */
    messages?: Array<string>;

    /**
     * The type of error that occurred for this asset.
     */
    type?: string;
  }

  /**
   * An object containing the current status of Master Access and the link to the
   * Master MP4 file when ready. This object does not exist if `master_access` is set
   * to `none` and when the temporary URL expires.
   */
  export interface Master {
    status?: 'ready' | 'preparing' | 'errored';

    /**
     * The temporary URL to the master version of the video, as an MP4 file. This URL
     * will expire after 24 hours.
     */
    url?: string;
  }

  /**
   * An object containing one or more reasons the input file is non-standard. See
   * [the guide on minimizing processing time](https://docs.mux.com/guides/minimize-processing-time)
   * for more information on what a standard input is defined as. This object only
   * exists on on-demand assets that have non-standard inputs, so if missing you can
   * assume the input qualifies as standard.
   */
  export interface NonStandardInputReasons {
    /**
     * The audio codec used on the input file. Non-AAC audio codecs are non-standard.
     */
    audio_codec?: string;

    /**
     * Audio Edit List reason indicates that the input file's audio track contains a
     * complex Edit Decision List.
     */
    audio_edit_list?: 'non-standard';

    /**
     * The video pixel aspect ratio of the input file.
     */
    pixel_aspect_ratio?: string;

    /**
     * A catch-all reason when the input file in created with non-standard encoding
     * parameters.
     */
    unexpected_media_file_parameters?: 'non-standard';

    /**
     * The video pixel format, as a string, returned by libav. Considered non-standard
     * if not one of yuv420p or yuvj420p.
     */
    unsupported_pixel_format?: string;

    /**
     * The video bitrate of the input file is `high`. This parameter is present when
     * the average bitrate of any key frame interval (also known as Group of Pictures
     * or GOP) is higher than what's considered standard which typically is 16 Mbps.
     */
    video_bitrate?: 'high';

    /**
     * The video codec used on the input file. For example, the input file encoded with
     * `hevc` video codec is non-standard and the value of this parameter is `hevc`.
     */
    video_codec?: string;

    /**
     * Video Edit List reason indicates that the input file's video track contains a
     * complex Edit Decision List.
     */
    video_edit_list?: 'non-standard';

    /**
     * The video frame rate of the input file. Video with average frames per second
     * (fps) less than 5 or greater than 120 is non-standard. A `-1` frame rate value
     * indicates Mux could not determine the frame rate of the video track.
     */
    video_frame_rate?: string;

    /**
     * The video key frame Interval (also called as Group of Picture or GOP) of the
     * input file is `high`. This parameter is present when the gop is greater than 20
     * seconds.
     */
    video_gop_size?: 'high';

    /**
     * The video resolution of the input file. Video resolution higher than 2048 pixels
     * on any one dimension (height or width) is considered non-standard, The
     * resolution value is presented as `width` x `height` in pixels.
     */
    video_resolution?: string;
  }

  export interface RecordingTime {
    /**
     * The duration of the live stream recorded. The time value is in seconds.
     */
    duration?: number;

    /**
     * The time at which the recording for the live stream started. The time value is
     * Unix epoch time represented in ISO 8601 format.
     */
    started_at?: string;

    /**
     * The type of media represented by the recording session, either `content` for
     * normal stream content or `slate` for slate media inserted during stream
     * interruptions.
     */
    type?: 'content' | 'slate';
  }

  /**
   * An object containing the current status of any static renditions (mp4s). The
   * object does not exist if no static renditions have been requested. See
   * [Download your videos](https://docs.mux.com/guides/enable-static-mp4-renditions)
   * for more information.
   */
  export interface StaticRenditions {
    /**
     * Array of file objects.
     */
    files?: Array<StaticRenditions.File>;

    /**
     * Indicates the status of downloadable MP4 versions of this asset.
     */
    status?: 'ready' | 'preparing' | 'disabled' | 'errored';
  }

  export namespace StaticRenditions {
    export interface File {
      /**
       * The bitrate in bits per second
       */
      bitrate?: number;

      /**
       * Extension of the static rendition file
       */
      ext?: 'mp4' | 'm4a';

      /**
       * The file size in bytes
       */
      filesize?: string;

      /**
       * The height of the static rendition's file in pixels
       */
      height?: number;

      name?: 'low.mp4' | 'medium.mp4' | 'high.mp4' | 'audio.m4a' | 'capped-1080p.mp4';

      /**
       * The width of the static rendition's file in pixels
       */
      width?: number;
    }
  }
}

export interface AssetOptions {
  /**
   * An array of playback policy objects that you want applied to this asset and
   * available through `playback_ids`. `advanced_playback_policies` must be used
   * instead of `playback_policy` when creating a DRM playback ID.
   */
  advanced_playback_policies?: Array<AssetOptions.AdvancedPlaybackPolicy>;

  /**
   * @deprecated: This field is deprecated. Please use `video_quality` instead. The
   * encoding tier informs the cost, quality, and available platform features for the
   * asset. The default encoding tier for an account can be set in the Mux Dashboard.
   * [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)
   */
  encoding_tier?: 'smart' | 'baseline' | 'premium';

  /**
   * An array of objects that each describe an input file to be used to create the
   * asset. As a shortcut, input can also be a string URL for a file when only one
   * input file is used. See `input[].url` for requirements.
   */
  input?: Array<AssetOptions.Input>;

  /**
   * Specify what level (if any) of support for master access. Master access can be
   * enabled temporarily for your asset to be downloaded. See the
   * [Download your videos guide](https://docs.mux.com/guides/enable-static-mp4-renditions)
   * for more information.
   */
  master_access?: 'none' | 'temporary';

  /**
   * Max resolution tier can be used to control the maximum `resolution_tier` your
   * asset is encoded, stored, and streamed at. If not set, this defaults to `1080p`.
   */
  max_resolution_tier?: '1080p' | '1440p' | '2160p';

  /**
   * Specify what level of support for mp4 playback.
   *
   * - The `capped-1080p` option produces a single MP4 file, called
   *   `capped-1080p.mp4`, with the video resolution capped at 1080p. This option
   *   produces an `audio.m4a` file for an audio-only asset.
   * - The `audio-only` option produces a single M4A file, called `audio.m4a` for a
   *   video or an audio-only asset. MP4 generation will error when this option is
   *   specified for a video-only asset.
   * - The `audio-only,capped-1080p` option produces both the `audio.m4a` and
   *   `capped-1080p.mp4` files. Only the `capped-1080p.mp4` file is produced for a
   *   video-only asset, while only the `audio.m4a` file is produced for an
   *   audio-only asset.
   *
   * The `standard`(deprecated) option produces up to three MP4 files with different
   * levels of resolution (`high.mp4`, `medium.mp4`, `low.mp4`, or `audio.m4a` for an
   * audio-only asset).
   *
   * MP4 files are not produced for `none` (default).
   *
   * In most cases you should use our default HLS-based streaming playback
   * (`{playback_id}.m3u8`) which can automatically adjust to viewers' connection
   * speeds, but an mp4 can be useful for some legacy devices or downloading for
   * offline playback. See the
   * [Download your videos guide](https://docs.mux.com/guides/enable-static-mp4-renditions)
   * for more information.
   */
  mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p';

  /**
   * Normalize the audio track loudness level. This parameter is only applicable to
   * on-demand (not live) assets.
   */
  normalize_audio?: boolean;

  /**
   * Arbitrary user-supplied metadata that will be included in the asset details and
   * related webhooks. Can be used to store your own ID for a video along with the
   * asset. **Max: 255 characters**.
   */
  passthrough?: string;

  /**
   * @deprecated
   */
  per_title_encode?: boolean;

  /**
   * An array of playback policy names that you want applied to this asset and
   * available through `playback_ids`. Options include:
   *
   * - `"public"` (anyone with the playback URL can stream the asset).
   * - `"signed"` (an additional access token is required to play the asset).
   *
   * If no `playback_policy` is set, the asset will have no playback IDs and will
   * therefore not be playable. For simplicity, a single string name can be used in
   * place of the array in the case of only one playback policy.
   */
  playback_policy?: Array<Shared.PlaybackPolicy>;

  /**
   * Marks the asset as a test asset when the value is set to true. A Test asset can
   * help evaluate the Mux Video APIs without incurring any cost. There is no limit
   * on number of test assets created. Test asset are watermarked with the Mux logo,
   * limited to 10 seconds, deleted after 24 hrs.
   */
  test?: boolean;

  /**
   * The video quality controls the cost, quality, and available platform features
   * for the asset. The default video quality for an account can be set in the Mux
   * Dashboard. This field replaces the deprecated `encoding_tier` value.
   * [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)
   */
  video_quality?: 'basic' | 'plus' | 'premium';
}

export namespace AssetOptions {
  export interface AdvancedPlaybackPolicy {
    /**
     * The DRM configuration used by this playback ID. Must only be set when `policy`
     * is set to `drm`.
     */
    drm_configuration_id?: string;

    /**
     * - `public` playback IDs are accessible by constructing an HLS URL like
     *   `https://stream.mux.com/${PLAYBACK_ID}`
     *
     * - `signed` playback IDs should be used with tokens
     *   `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. See
     *   [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for
     *   details about creating tokens.
     *
     * - `drm` playback IDs are protected with DRM technologies.
     *   [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).
     */
    policy?: Shared.PlaybackPolicy;
  }

  /**
   * An array of objects that each describe an input file to be used to create the
   * asset. As a shortcut, `input` can also be a string URL for a file when only one
   * input file is used. See `input[].url` for requirements.
   */
  export interface Input {
    /**
     * Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).
     * This optional parameter should be used for tracks with `type` of `text` and
     * `text_type` set to `subtitles`.
     */
    closed_captions?: boolean;

    /**
     * The time offset in seconds from the beginning of the video, indicating the
     * clip's ending marker. The default value is the duration of the video when not
     * included. This parameter is only applicable for creating clips when `input.url`
     * has `mux://assets/{asset_id}` format.
     */
    end_time?: number;

    /**
     * Generate subtitle tracks using automatic speech recognition with this
     * configuration. This may only be provided for the first input object (the main
     * input file). For direct uploads, this first input should omit the url parameter,
     * as the main input file is provided via the direct upload. This will create
     * subtitles based on the audio track ingested from that main input file. Note that
     * subtitle generation happens after initial ingest, so the generated tracks will
     * be in the `preparing` state when the asset transitions to `ready`.
     */
    generated_subtitles?: Array<Input.GeneratedSubtitle>;

    /**
     * The language code value must be a valid
     * [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value. For
     * example, `en` for English or `en-US` for the US version of English. This
     * parameter is required for `text` and `audio` track types.
     */
    language_code?: string;

    /**
     * The name of the track containing a human-readable description. This value must
     * be unique within each group of `text` or `audio` track types. The HLS manifest
     * will associate a subtitle text track with this value. For example, the value
     * should be "English" for a subtitle text track with `language_code` set to `en`.
     * This optional parameter should be used only for `text` and `audio` type tracks.
     * This parameter can be optionally provided for the first video input to denote
     * the name of the muxed audio track if present. If this parameter is not included,
     * Mux will auto-populate based on the `input[].language_code` value.
     */
    name?: string;

    /**
     * An object that describes how the image file referenced in URL should be placed
     * over the video (i.e. watermarking). Ensure that the URL is active and persists
     * the entire lifespan of the video object.
     */
    overlay_settings?: Input.OverlaySettings;

    /**
     * This optional parameter should be used tracks with `type` of `text` and
     * `text_type` set to `subtitles`.
     */
    passthrough?: string;

    /**
     * The time offset in seconds from the beginning of the video indicating the clip's
     * starting marker. The default value is 0 when not included. This parameter is
     * only applicable for creating clips when `input.url` has
     * `mux://assets/{asset_id}` format.
     */
    start_time?: number;

    /**
     * Type of text track. This parameter only supports subtitles value. For more
     * information on Subtitles / Closed Captions,
     * [see this blog post](https://mux.com/blog/subtitles-captions-webvtt-hls-and-those-magic-flags/).
     * This parameter is required for `text` type tracks.
     */
    text_type?: 'subtitles';

    /**
     * This parameter is required for `text` type tracks.
     */
    type?: 'video' | 'audio' | 'text';

    /**
     * The URL of the file that Mux should download and use.
     *
     * - For the main input file, this should be the URL to the muxed file for Mux to
     *   download, for example an MP4, MOV, MKV, or TS file. Mux supports most
     *   audio/video file formats and codecs, but for fastest processing, you should
     *   [use standard inputs wherever possible](https://docs.mux.com/guides/minimize-processing-time).
     * - For `audio` tracks, the URL is the location of the audio file for Mux to
     *   download, for example an M4A, WAV, or MP3 file. Mux supports most audio file
     *   formats and codecs, but for fastest processing, you should
     *   [use standard inputs wherever possible](https://docs.mux.com/guides/minimize-processing-time).
     * - For `text` tracks, the URL is the location of subtitle/captions file. Mux
     *   supports [SubRip Text (SRT)](https://en.wikipedia.org/wiki/SubRip) and
     *   [Web Video Text Tracks](https://www.w3.org/TR/webvtt1/) formats for ingesting
     *   Subtitles and Closed Captions.
     * - For Watermarking or Overlay, the URL is the location of the watermark image.
     *   The maximum size is 4096x4096.
     * - When creating clips from existing Mux assets, the URL is defined with
     *   `mux://assets/{asset_id}` template where `asset_id` is the Asset Identifier
     *   for creating the clip from. The url property may be omitted on the first input
     *   object when providing asset settings for LiveStream and Upload objects, in
     *   order to configure settings related to the primary (live stream or direct
     *   upload) input.
     */
    url?: string;
  }

  export namespace Input {
    export interface GeneratedSubtitle {
      /**
       * The language to generate subtitles in.
       */
      language_code?:
        | 'en'
        | 'es'
        | 'it'
        | 'pt'
        | 'de'
        | 'fr'
        | 'pl'
        | 'ru'
        | 'nl'
        | 'ca'
        | 'tr'
        | 'sv'
        | 'uk'
        | 'no'
        | 'fi'
        | 'sk'
        | 'el'
        | 'cs'
        | 'hr'
        | 'da'
        | 'ro'
        | 'bg';

      /**
       * A name for this subtitle track.
       */
      name?: string;

      /**
       * Arbitrary metadata set for the subtitle track. Max 255 characters.
       */
      passthrough?: string;
    }

    /**
     * An object that describes how the image file referenced in URL should be placed
     * over the video (i.e. watermarking). Ensure that the URL is active and persists
     * the entire lifespan of the video object.
     */
    export interface OverlaySettings {
      /**
       * How tall the overlay should appear. Can be expressed as a percent ("10%") or as
       * a pixel value ("100px"). If both width and height are left blank the height will
       * be the true pixels of the image, applied as if the video has been scaled to fit
       * a 1920x1080 frame. If width is supplied with no height, the height will scale
       * proportionally to the width.
       */
      height?: string;

      /**
       * Where the horizontal positioning of the overlay/watermark should begin from.
       */
      horizontal_align?: 'left' | 'center' | 'right';

      /**
       * The distance from the horizontal_align starting point and the image's closest
       * edge. Can be expressed as a percent ("10%") or as a pixel value ("100px").
       * Negative values will move the overlay offscreen. In the case of 'center', a
       * positive value will shift the image towards the right and and a negative value
       * will shift it towards the left.
       */
      horizontal_margin?: string;

      /**
       * How opaque the overlay should appear, expressed as a percent. (Default 100%)
       */
      opacity?: string;

      /**
       * Where the vertical positioning of the overlay/watermark should begin from.
       * Defaults to `"top"`
       */
      vertical_align?: 'top' | 'middle' | 'bottom';

      /**
       * The distance from the vertical_align starting point and the image's closest
       * edge. Can be expressed as a percent ("10%") or as a pixel value ("100px").
       * Negative values will move the overlay offscreen. In the case of 'middle', a
       * positive value will shift the overlay towards the bottom and and a negative
       * value will shift it towards the top.
       */
      vertical_margin?: string;

      /**
       * How wide the overlay should appear. Can be expressed as a percent ("10%") or as
       * a pixel value ("100px"). If both width and height are left blank the width will
       * be the true pixels of the image, applied as if the video has been scaled to fit
       * a 1920x1080 frame. If height is supplied with no width, the width will scale
       * proportionally to the height.
       */
      width?: string;
    }
  }
}

export interface AssetResponse {
  data: Asset;
}

export interface InputInfo {
  file?: InputInfo.File;

  /**
   * An array of objects that each describe an input file to be used to create the
   * asset. As a shortcut, `input` can also be a string URL for a file when only one
   * input file is used. See `input[].url` for requirements.
   */
  settings?: InputInfo.Settings;
}

export namespace InputInfo {
  export interface File {
    container_format?: string;

    tracks?: Array<File.Track>;
  }

  export namespace File {
    export interface Track {
      type: string;

      channels?: number;

      duration?: number;

      encoding?: string;

      frame_rate?: number;

      height?: number;

      sample_rate?: number;

      sample_size?: number;

      width?: number;
    }
  }

  /**
   * An array of objects that each describe an input file to be used to create the
   * asset. As a shortcut, `input` can also be a string URL for a file when only one
   * input file is used. See `input[].url` for requirements.
   */
  export interface Settings {
    /**
     * Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).
     * This optional parameter should be used for tracks with `type` of `text` and
     * `text_type` set to `subtitles`.
     */
    closed_captions?: boolean;

    /**
     * The time offset in seconds from the beginning of the video, indicating the
     * clip's ending marker. The default value is the duration of the video when not
     * included. This parameter is only applicable for creating clips when `input.url`
     * has `mux://assets/{asset_id}` format.
     */
    end_time?: number;

    /**
     * Generate subtitle tracks using automatic speech recognition with this
     * configuration. This may only be provided for the first input object (the main
     * input file). For direct uploads, this first input should omit the url parameter,
     * as the main input file is provided via the direct upload. This will create
     * subtitles based on the audio track ingested from that main input file. Note that
     * subtitle generation happens after initial ingest, so the generated tracks will
     * be in the `preparing` state when the asset transitions to `ready`.
     */
    generated_subtitles?: Array<Settings.GeneratedSubtitle>;

    /**
     * The language code value must be a valid
     * [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value. For
     * example, `en` for English or `en-US` for the US version of English. This
     * parameter is required for `text` and `audio` track types.
     */
    language_code?: string;

    /**
     * The name of the track containing a human-readable description. This value must
     * be unique within each group of `text` or `audio` track types. The HLS manifest
     * will associate a subtitle text track with this value. For example, the value
     * should be "English" for a subtitle text track with `language_code` set to `en`.
     * This optional parameter should be used only for `text` and `audio` type tracks.
     * This parameter can be optionally provided for the first video input to denote
     * the name of the muxed audio track if present. If this parameter is not included,
     * Mux will auto-populate based on the `input[].language_code` value.
     */
    name?: string;

    /**
     * An object that describes how the image file referenced in URL should be placed
     * over the video (i.e. watermarking). Ensure that the URL is active and persists
     * the entire lifespan of the video object.
     */
    overlay_settings?: Settings.OverlaySettings;

    /**
     * This optional parameter should be used tracks with `type` of `text` and
     * `text_type` set to `subtitles`.
     */
    passthrough?: string;

    /**
     * The time offset in seconds from the beginning of the video indicating the clip's
     * starting marker. The default value is 0 when not included. This parameter is
     * only applicable for creating clips when `input.url` has
     * `mux://assets/{asset_id}` format.
     */
    start_time?: number;

    /**
     * Type of text track. This parameter only supports subtitles value. For more
     * information on Subtitles / Closed Captions,
     * [see this blog post](https://mux.com/blog/subtitles-captions-webvtt-hls-and-those-magic-flags/).
     * This parameter is required for `text` type tracks.
     */
    text_type?: 'subtitles';

    /**
     * This parameter is required for `text` type tracks.
     */
    type?: 'video' | 'audio' | 'text';

    /**
     * The URL of the file that Mux should download and use.
     *
     * - For the main input file, this should be the URL to the muxed file for Mux to
     *   download, for example an MP4, MOV, MKV, or TS file. Mux supports most
     *   audio/video file formats and codecs, but for fastest processing, you should
     *   [use standard inputs wherever possible](https://docs.mux.com/guides/minimize-processing-time).
     * - For `audio` tracks, the URL is the location of the audio file for Mux to
     *   download, for example an M4A, WAV, or MP3 file. Mux supports most audio file
     *   formats and codecs, but for fastest processing, you should
     *   [use standard inputs wherever possible](https://docs.mux.com/guides/minimize-processing-time).
     * - For `text` tracks, the URL is the location of subtitle/captions file. Mux
     *   supports [SubRip Text (SRT)](https://en.wikipedia.org/wiki/SubRip) and
     *   [Web Video Text Tracks](https://www.w3.org/TR/webvtt1/) formats for ingesting
     *   Subtitles and Closed Captions.
     * - For Watermarking or Overlay, the URL is the location of the watermark image.
     *   The maximum size is 4096x4096.
     * - When creating clips from existing Mux assets, the URL is defined with
     *   `mux://assets/{asset_id}` template where `asset_id` is the Asset Identifier
     *   for creating the clip from. The url property may be omitted on the first input
     *   object when providing asset settings for LiveStream and Upload objects, in
     *   order to configure settings related to the primary (live stream or direct
     *   upload) input.
     */
    url?: string;
  }

  export namespace Settings {
    export interface GeneratedSubtitle {
      /**
       * The language to generate subtitles in.
       */
      language_code?:
        | 'en'
        | 'es'
        | 'it'
        | 'pt'
        | 'de'
        | 'fr'
        | 'pl'
        | 'ru'
        | 'nl'
        | 'ca'
        | 'tr'
        | 'sv'
        | 'uk'
        | 'no'
        | 'fi'
        | 'sk'
        | 'el'
        | 'cs'
        | 'hr'
        | 'da'
        | 'ro'
        | 'bg';

      /**
       * A name for this subtitle track.
       */
      name?: string;

      /**
       * Arbitrary metadata set for the subtitle track. Max 255 characters.
       */
      passthrough?: string;
    }

    /**
     * An object that describes how the image file referenced in URL should be placed
     * over the video (i.e. watermarking). Ensure that the URL is active and persists
     * the entire lifespan of the video object.
     */
    export interface OverlaySettings {
      /**
       * How tall the overlay should appear. Can be expressed as a percent ("10%") or as
       * a pixel value ("100px"). If both width and height are left blank the height will
       * be the true pixels of the image, applied as if the video has been scaled to fit
       * a 1920x1080 frame. If width is supplied with no height, the height will scale
       * proportionally to the width.
       */
      height?: string;

      /**
       * Where the horizontal positioning of the overlay/watermark should begin from.
       */
      horizontal_align?: 'left' | 'center' | 'right';

      /**
       * The distance from the horizontal_align starting point and the image's closest
       * edge. Can be expressed as a percent ("10%") or as a pixel value ("100px").
       * Negative values will move the overlay offscreen. In the case of 'center', a
       * positive value will shift the image towards the right and and a negative value
       * will shift it towards the left.
       */
      horizontal_margin?: string;

      /**
       * How opaque the overlay should appear, expressed as a percent. (Default 100%)
       */
      opacity?: string;

      /**
       * Where the vertical positioning of the overlay/watermark should begin from.
       * Defaults to `"top"`
       */
      vertical_align?: 'top' | 'middle' | 'bottom';

      /**
       * The distance from the vertical_align starting point and the image's closest
       * edge. Can be expressed as a percent ("10%") or as a pixel value ("100px").
       * Negative values will move the overlay offscreen. In the case of 'middle', a
       * positive value will shift the overlay towards the bottom and and a negative
       * value will shift it towards the top.
       */
      vertical_margin?: string;

      /**
       * How wide the overlay should appear. Can be expressed as a percent ("10%") or as
       * a pixel value ("100px"). If both width and height are left blank the width will
       * be the true pixels of the image, applied as if the video has been scaled to fit
       * a 1920x1080 frame. If height is supplied with no width, the width will scale
       * proportionally to the height.
       */
      width?: string;
    }
  }
}

export interface Track {
  /**
   * Unique identifier for the Track
   */
  id?: string;

  /**
   * Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).
   * This parameter is only set tracks where `type` is `text` and `text_type` is
   * `subtitles`.
   */
  closed_captions?: boolean;

  /**
   * The duration in seconds of the track media. This parameter is not set for `text`
   * type tracks. This field is optional and may not be set. The top level `duration`
   * field of an asset will always be set.
   */
  duration?: number;

  /**
   * The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47)
   * specification compliant value. For example, `en` for English or `en-US` for the
   * US version of English. This parameter is only set for `text` and `audio` track
   * types.
   */
  language_code?: string;

  /**
   * @deprecated: Only set for the `audio` type track.
   */
  max_channel_layout?: string;

  /**
   * The maximum number of audio channels the track supports. Only set for the
   * `audio` type track.
   */
  max_channels?: number;

  /**
   * The maximum frame rate available for the track. Only set for the `video` type
   * track. This field may return `-1` if the frame rate of the input cannot be
   * reliably determined.
   */
  max_frame_rate?: number;

  /**
   * The maximum height in pixels available for the track. Only set for the `video`
   * type track.
   */
  max_height?: number;

  /**
   * The maximum width in pixels available for the track. Only set for the `video`
   * type track.
   */
  max_width?: number;

  /**
   * The name of the track containing a human-readable description. The HLS manifest
   * will associate a subtitle `text` or `audio` track with this value. For example,
   * the value should be "English" for a subtitle text track for the `language_code`
   * value of `en-US`. This parameter is only set for `text` and `audio` track types.
   */
  name?: string;

  /**
   * Arbitrary user-supplied metadata set for the track either when creating the
   * asset or track. This parameter is only set for `text` type tracks. Max 255
   * characters.
   */
  passthrough?: string;

  /**
   * For an audio track, indicates that this is the primary audio track, ingested
   * from the main input for this asset. The primary audio track cannot be deleted.
   */
  primary?: boolean;

  /**
   * The status of the track. This parameter is only set for `text` type tracks.
   */
  status?: 'preparing' | 'ready' | 'errored' | 'deleted';

  /**
   * The source of the text contained in a Track of type `text`. Valid `text_source`
   * values are listed below.
   *
   * - `uploaded`: Tracks uploaded to Mux as caption or subtitle files using the
   *   Create Asset Track API.
   * - `embedded`: Tracks extracted from an embedded stream of CEA-608 closed
   *   captions.
   * - `generated_vod`: Tracks generated by automatic speech recognition on an
   *   on-demand asset.
   * - `generated_live`: Tracks generated by automatic speech recognition on a live
   *   stream configured with `generated_subtitles`. If an Asset has both
   *   `generated_live` and `generated_live_final` tracks that are `ready`, then only
   *   the `generated_live_final` track will be included during playback.
   * - `generated_live_final`: Tracks generated by automatic speech recognition on a
   *   live stream using `generated_subtitles`. The accuracy, timing, and formatting
   *   of these subtitles is improved compared to the corresponding `generated_live`
   *   tracks. However, `generated_live_final` tracks will not be available in
   *   `ready` status until the live stream ends. If an Asset has both
   *   `generated_live` and `generated_live_final` tracks that are `ready`, then only
   *   the `generated_live_final` track will be included during playback.
   */
  text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final' | 'generated_vod';

  /**
   * This parameter is only set for `text` type tracks.
   */
  text_type?: 'subtitles';

  /**
   * The type of track
   */
  type?: 'video' | 'audio' | 'text';
}

export type AssetGenerateSubtitlesResponse = Array<Track>;

export type AssetRetrieveInputInfoResponse = Array<InputInfo>;

export interface AssetCreateParams {
  /**
   * An array of objects that each describe an input file to be used to create the
   * asset. As a shortcut, input can also be a string URL for a file when only one
   * input file is used. See `input[].url` for requirements.
   */
  input: Array<AssetCreateParams.Input>;

  /**
   * An array of playback policy objects that you want applied to this asset and
   * available through `playback_ids`. `advanced_playback_policies` must be used
   * instead of `playback_policy` when creating a DRM playback ID.
   */
  advanced_playback_policies?: Array<AssetCreateParams.AdvancedPlaybackPolicy>;

  /**
   * This field is deprecated. Please use `video_quality` instead. The encoding tier
   * informs the cost, quality, and available platform features for the asset. The
   * default encoding tier for an account can be set in the Mux Dashboard.
   * [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)
   */
  encoding_tier?: 'smart' | 'baseline' | 'premium';

  /**
   * Specify what level (if any) of support for master access. Master access can be
   * enabled temporarily for your asset to be downloaded. See the
   * [Download your videos guide](https://docs.mux.com/guides/enable-static-mp4-renditions)
   * for more information.
   */
  master_access?: 'none' | 'temporary';

  /**
   * Max resolution tier can be used to control the maximum `resolution_tier` your
   * asset is encoded, stored, and streamed at. If not set, this defaults to `1080p`.
   */
  max_resolution_tier?: '1080p' | '1440p' | '2160p';

  /**
   * Specify what level of support for mp4 playback.
   *
   * - The `capped-1080p` option produces a single MP4 file, called
   *   `capped-1080p.mp4`, with the video resolution capped at 1080p. This option
   *   produces an `audio.m4a` file for an audio-only asset.
   * - The `audio-only` option produces a single M4A file, called `audio.m4a` for a
   *   video or an audio-only asset. MP4 generation will error when this option is
   *   specified for a video-only asset.
   * - The `audio-only,capped-1080p` option produces both the `audio.m4a` and
   *   `capped-1080p.mp4` files. Only the `capped-1080p.mp4` file is produced for a
   *   video-only asset, while only the `audio.m4a` file is produced for an
   *   audio-only asset.
   *
   * The `standard`(deprecated) option produces up to three MP4 files with different
   * levels of resolution (`high.mp4`, `medium.mp4`, `low.mp4`, or `audio.m4a` for an
   * audio-only asset).
   *
   * MP4 files are not produced for `none` (default).
   *
   * In most cases you should use our default HLS-based streaming playback
   * (`{playback_id}.m3u8`) which can automatically adjust to viewers' connection
   * speeds, but an mp4 can be useful for some legacy devices or downloading for
   * offline playback. See the
   * [Download your videos guide](https://docs.mux.com/guides/enable-static-mp4-renditions)
   * for more information.
   */
  mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p';

  /**
   * Normalize the audio track loudness level. This parameter is only applicable to
   * on-demand (not live) assets.
   */
  normalize_audio?: boolean;

  /**
   * Arbitrary user-supplied metadata that will be included in the asset details and
   * related webhooks. Can be used to store your own ID for a video along with the
   * asset. **Max: 255 characters**.
   */
  passthrough?: string;

  per_title_encode?: boolean;

  /**
   * An array of playback policy names that you want applied to this asset and
   * available through `playback_ids`. Options include:
   *
   * - `"public"` (anyone with the playback URL can stream the asset).
   * - `"signed"` (an additional access token is required to play the asset).
   *
   * If no `playback_policy` is set, the asset will have no playback IDs and will
   * therefore not be playable. For simplicity, a single string name can be used in
   * place of the array in the case of only one playback policy.
   */
  playback_policy?: Array<Shared.PlaybackPolicy>;

  /**
   * Marks the asset as a test asset when the value is set to true. A Test asset can
   * help evaluate the Mux Video APIs without incurring any cost. There is no limit
   * on number of test assets created. Test asset are watermarked with the Mux logo,
   * limited to 10 seconds, deleted after 24 hrs.
   */
  test?: boolean;

  /**
   * The video quality controls the cost, quality, and available platform features
   * for the asset. The default video quality for an account can be set in the Mux
   * Dashboard. This field replaces the deprecated `encoding_tier` value.
   * [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)
   */
  video_quality?: 'basic' | 'plus' | 'premium';
}

export namespace AssetCreateParams {
  /**
   * An array of objects that each describe an input file to be used to create the
   * asset. As a shortcut, `input` can also be a string URL for a file when only one
   * input file is used. See `input[].url` for requirements.
   */
  export interface Input {
    /**
     * Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).
     * This optional parameter should be used for tracks with `type` of `text` and
     * `text_type` set to `subtitles`.
     */
    closed_captions?: boolean;

    /**
     * The time offset in seconds from the beginning of the video, indicating the
     * clip's ending marker. The default value is the duration of the video when not
     * included. This parameter is only applicable for creating clips when `input.url`
     * has `mux://assets/{asset_id}` format.
     */
    end_time?: number;

    /**
     * Generate subtitle tracks using automatic speech recognition with this
     * configuration. This may only be provided for the first input object (the main
     * input file). For direct uploads, this first input should omit the url parameter,
     * as the main input file is provided via the direct upload. This will create
     * subtitles based on the audio track ingested from that main input file. Note that
     * subtitle generation happens after initial ingest, so the generated tracks will
     * be in the `preparing` state when the asset transitions to `ready`.
     */
    generated_subtitles?: Array<Input.GeneratedSubtitle>;

    /**
     * The language code value must be a valid
     * [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value. For
     * example, `en` for English or `en-US` for the US version of English. This
     * parameter is required for `text` and `audio` track types.
     */
    language_code?: string;

    /**
     * The name of the track containing a human-readable description. This value must
     * be unique within each group of `text` or `audio` track types. The HLS manifest
     * will associate a subtitle text track with this value. For example, the value
     * should be "English" for a subtitle text track with `language_code` set to `en`.
     * This optional parameter should be used only for `text` and `audio` type tracks.
     * This parameter can be optionally provided for the first video input to denote
     * the name of the muxed audio track if present. If this parameter is not included,
     * Mux will auto-populate based on the `input[].language_code` value.
     */
    name?: string;

    /**
     * An object that describes how the image file referenced in URL should be placed
     * over the video (i.e. watermarking). Ensure that the URL is active and persists
     * the entire lifespan of the video object.
     */
    overlay_settings?: Input.OverlaySettings;

    /**
     * This optional parameter should be used tracks with `type` of `text` and
     * `text_type` set to `subtitles`.
     */
    passthrough?: string;

    /**
     * The time offset in seconds from the beginning of the video indicating the clip's
     * starting marker. The default value is 0 when not included. This parameter is
     * only applicable for creating clips when `input.url` has
     * `mux://assets/{asset_id}` format.
     */
    start_time?: number;

    /**
     * Type of text track. This parameter only supports subtitles value. For more
     * information on Subtitles / Closed Captions,
     * [see this blog post](https://mux.com/blog/subtitles-captions-webvtt-hls-and-those-magic-flags/).
     * This parameter is required for `text` type tracks.
     */
    text_type?: 'subtitles';

    /**
     * This parameter is required for `text` type tracks.
     */
    type?: 'video' | 'audio' | 'text';

    /**
     * The URL of the file that Mux should download and use.
     *
     * - For the main input file, this should be the URL to the muxed file for Mux to
     *   download, for example an MP4, MOV, MKV, or TS file. Mux supports most
     *   audio/video file formats and codecs, but for fastest processing, you should
     *   [use standard inputs wherever possible](https://docs.mux.com/guides/minimize-processing-time).
     * - For `audio` tracks, the URL is the location of the audio file for Mux to
     *   download, for example an M4A, WAV, or MP3 file. Mux supports most audio file
     *   formats and codecs, but for fastest processing, you should
     *   [use standard inputs wherever possible](https://docs.mux.com/guides/minimize-processing-time).
     * - For `text` tracks, the URL is the location of subtitle/captions file. Mux
     *   supports [SubRip Text (SRT)](https://en.wikipedia.org/wiki/SubRip) and
     *   [Web Video Text Tracks](https://www.w3.org/TR/webvtt1/) formats for ingesting
     *   Subtitles and Closed Captions.
     * - For Watermarking or Overlay, the URL is the location of the watermark image.
     *   The maximum size is 4096x4096.
     * - When creating clips from existing Mux assets, the URL is defined with
     *   `mux://assets/{asset_id}` template where `asset_id` is the Asset Identifier
     *   for creating the clip from. The url property may be omitted on the first input
     *   object when providing asset settings for LiveStream and Upload objects, in
     *   order to configure settings related to the primary (live stream or direct
     *   upload) input.
     */
    url?: string;
  }

  export namespace Input {
    export interface GeneratedSubtitle {
      /**
       * The language to generate subtitles in.
       */
      language_code?:
        | 'en'
        | 'es'
        | 'it'
        | 'pt'
        | 'de'
        | 'fr'
        | 'pl'
        | 'ru'
        | 'nl'
        | 'ca'
        | 'tr'
        | 'sv'
        | 'uk'
        | 'no'
        | 'fi'
        | 'sk'
        | 'el'
        | 'cs'
        | 'hr'
        | 'da'
        | 'ro'
        | 'bg';

      /**
       * A name for this subtitle track.
       */
      name?: string;

      /**
       * Arbitrary metadata set for the subtitle track. Max 255 characters.
       */
      passthrough?: string;
    }

    /**
     * An object that describes how the image file referenced in URL should be placed
     * over the video (i.e. watermarking). Ensure that the URL is active and persists
     * the entire lifespan of the video object.
     */
    export interface OverlaySettings {
      /**
       * How tall the overlay should appear. Can be expressed as a percent ("10%") or as
       * a pixel value ("100px"). If both width and height are left blank the height will
       * be the true pixels of the image, applied as if the video has been scaled to fit
       * a 1920x1080 frame. If width is supplied with no height, the height will scale
       * proportionally to the width.
       */
      height?: string;

      /**
       * Where the horizontal positioning of the overlay/watermark should begin from.
       */
      horizontal_align?: 'left' | 'center' | 'right';

      /**
       * The distance from the horizontal_align starting point and the image's closest
       * edge. Can be expressed as a percent ("10%") or as a pixel value ("100px").
       * Negative values will move the overlay offscreen. In the case of 'center', a
       * positive value will shift the image towards the right and and a negative value
       * will shift it towards the left.
       */
      horizontal_margin?: string;

      /**
       * How opaque the overlay should appear, expressed as a percent. (Default 100%)
       */
      opacity?: string;

      /**
       * Where the vertical positioning of the overlay/watermark should begin from.
       * Defaults to `"top"`
       */
      vertical_align?: 'top' | 'middle' | 'bottom';

      /**
       * The distance from the vertical_align starting point and the image's closest
       * edge. Can be expressed as a percent ("10%") or as a pixel value ("100px").
       * Negative values will move the overlay offscreen. In the case of 'middle', a
       * positive value will shift the overlay towards the bottom and and a negative
       * value will shift it towards the top.
       */
      vertical_margin?: string;

      /**
       * How wide the overlay should appear. Can be expressed as a percent ("10%") or as
       * a pixel value ("100px"). If both width and height are left blank the width will
       * be the true pixels of the image, applied as if the video has been scaled to fit
       * a 1920x1080 frame. If height is supplied with no width, the width will scale
       * proportionally to the height.
       */
      width?: string;
    }
  }

  export interface AdvancedPlaybackPolicy {
    /**
     * The DRM configuration used by this playback ID. Must only be set when `policy`
     * is set to `drm`.
     */
    drm_configuration_id?: string;

    /**
     * - `public` playback IDs are accessible by constructing an HLS URL like
     *   `https://stream.mux.com/${PLAYBACK_ID}`
     *
     * - `signed` playback IDs should be used with tokens
     *   `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. See
     *   [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for
     *   details about creating tokens.
     *
     * - `drm` playback IDs are protected with DRM technologies.
     *   [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).
     */
    policy?: Shared.PlaybackPolicy;
  }
}

export interface AssetUpdateParams {
  /**
   * Arbitrary metadata set for the Asset. Max 255 characters. In order to clear this
   * value, the field should be included with an empty string value.
   */
  passthrough?: string;
}

export interface AssetListParams extends BasePageParams {
  /**
   * Filter response to return all the assets for this live stream only
   */
  live_stream_id?: string;

  /**
   * Filter response to return an asset created from this direct upload only
   */
  upload_id?: string;
}

export interface AssetCreatePlaybackIDParams {
  /**
   * The DRM configuration used by this playback ID. Must only be set when `policy`
   * is set to `drm`.
   */
  drm_configuration_id?: string;

  /**
   * - `public` playback IDs are accessible by constructing an HLS URL like
   *   `https://stream.mux.com/${PLAYBACK_ID}`
   *
   * - `signed` playback IDs should be used with tokens
   *   `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. See
   *   [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for
   *   details about creating tokens.
   *
   * - `drm` playback IDs are protected with DRM technologies.
   *   [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).
   */
  policy?: Shared.PlaybackPolicy;
}

export interface AssetCreateTrackParams {
  /**
   * The language code value must be a valid BCP 47 specification compliant value.
   * For example, en for English or en-US for the US version of English.
   */
  language_code: string;

  type: 'text' | 'audio';

  /**
   * The URL of the file that Mux should download and use.
   *
   * - For `audio` tracks, the URL is the location of the audio file for Mux to
   *   download, for example an M4A, WAV, or MP3 file. Mux supports most audio file
   *   formats and codecs, but for fastest processing, you should
   *   [use standard inputs wherever possible](https://docs.mux.com/guides/minimize-processing-time).
   * - For `text` tracks, the URL is the location of subtitle/captions file. Mux
   *   supports [SubRip Text (SRT)](https://en.wikipedia.org/wiki/SubRip) and
   *   [Web Video Text Tracks](https://www.w3.org/TR/webvtt1/) formats for ingesting
   *   Subtitles and Closed Captions.
   */
  url: string;

  /**
   * Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).
   */
  closed_captions?: boolean;

  /**
   * The name of the track containing a human-readable description. This value must
   * be unique within each group of `text` or `audio` track types. The HLS manifest
   * will associate the `text` or `audio` track with this value. For example, set the
   * value to "English" for subtitles text track with `language_code` as en-US. If
   * this parameter is not included, Mux will auto-populate a value based on the
   * `language_code` value.
   */
  name?: string;

  /**
   * Arbitrary user-supplied metadata set for the track either when creating the
   * asset or track.
   */
  passthrough?: string;

  text_type?: 'subtitles';
}

export interface AssetGenerateSubtitlesParams {
  /**
   * Generate subtitle tracks using automatic speech recognition with this
   * configuration.
   */
  generated_subtitles: Array<AssetGenerateSubtitlesParams.GeneratedSubtitle>;
}

export namespace AssetGenerateSubtitlesParams {
  export interface GeneratedSubtitle {
    /**
     * The language to generate subtitles in.
     */
    language_code?:
      | 'en'
      | 'es'
      | 'it'
      | 'pt'
      | 'de'
      | 'fr'
      | 'pl'
      | 'ru'
      | 'nl'
      | 'ca'
      | 'tr'
      | 'sv'
      | 'uk'
      | 'no'
      | 'fi'
      | 'sk'
      | 'el'
      | 'cs'
      | 'hr'
      | 'da'
      | 'ro'
      | 'bg';

    /**
     * A name for this subtitle track.
     */
    name?: string;

    /**
     * Arbitrary metadata set for the subtitle track. Max 255 characters.
     */
    passthrough?: string;
  }
}

export interface AssetUpdateMasterAccessParams {
  /**
   * Add or remove access to the master version of the video.
   */
  master_access: 'temporary' | 'none';
}

export interface AssetUpdateMP4SupportParams {
  /**
   * Specify what level of support for mp4 playback.
   *
   * - The `capped-1080p` option produces a single MP4 file, called
   *   `capped-1080p.mp4`, with the video resolution capped at 1080p. This option
   *   produces an `audio.m4a` file for an audio-only asset.
   * - The `audio-only` option produces a single M4A file, called `audio.m4a` for a
   *   video or an audio-only asset. MP4 generation will error when this option is
   *   specified for a video-only asset.
   * - The `audio-only,capped-1080p` option produces both the `audio.m4a` and
   *   `capped-1080p.mp4` files. Only the `capped-1080p.mp4` file is produced for a
   *   video-only asset, while only the `audio.m4a` file is produced for an
   *   audio-only asset.
   *
   * The `standard`(deprecated) option produces up to three MP4 files with different
   * levels of resolution (`high.mp4`, `medium.mp4`, `low.mp4`, or `audio.m4a` for an
   * audio-only asset).
   *
   * `none` will delete the MP4s from the asset in question.
   */
  mp4_support: 'standard' | 'none' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p';
}

Assets.AssetsBasePage = AssetsBasePage;

export declare namespace Assets {
  export {
    type Asset as Asset,
    type AssetOptions as AssetOptions,
    type AssetResponse as AssetResponse,
    type InputInfo as InputInfo,
    type Track as Track,
    type AssetGenerateSubtitlesResponse as AssetGenerateSubtitlesResponse,
    type AssetRetrieveInputInfoResponse as AssetRetrieveInputInfoResponse,
    AssetsBasePage as AssetsBasePage,
    type AssetCreateParams as AssetCreateParams,
    type AssetUpdateParams as AssetUpdateParams,
    type AssetListParams as AssetListParams,
    type AssetCreatePlaybackIDParams as AssetCreatePlaybackIDParams,
    type AssetCreateTrackParams as AssetCreateTrackParams,
    type AssetGenerateSubtitlesParams as AssetGenerateSubtitlesParams,
    type AssetUpdateMasterAccessParams as AssetUpdateMasterAccessParams,
    type AssetUpdateMP4SupportParams as AssetUpdateMP4SupportParams,
  };
}
