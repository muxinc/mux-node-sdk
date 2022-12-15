// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { BasePage, BasePageParams } from '~/pagination';
import * as Shared from '~/resources/shared';

export class Assets extends APIResource {
  /**
   * Create a new Mux Video asset.
   */
  async create(body: AssetCreateParams, options?: Core.RequestOptions): Promise<Asset> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.post('/video/v1/assets', { body, ...options })) as any;
    return response.data;
  }

  /**
   * Retrieves the details of an asset that has previously been created. Supply the
   * unique asset ID that was returned from your previous request, and Mux will
   * return the corresponding asset information. The same information is returned
   * when creating an asset.
   */
  async retrieve(assetId: string, options?: Core.RequestOptions): Promise<Asset> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.get(`/video/v1/assets/${assetId}`, options)) as any;
    return response.data;
  }

  /**
   * Updates the details of an already-created Asset with the provided Asset ID. This
   * currently supports only the `passthrough` field.
   */
  async update(assetId: string, body: AssetUpdateParams, options?: Core.RequestOptions): Promise<Asset> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.patch(`/video/v1/assets/${assetId}`, { body, ...options })) as any;
    return response.data;
  }

  /**
   * List all Mux assets.
   */
  list(query?: AssetListParams, options?: Core.RequestOptions): Core.PagePromise<AssetsBasePage>;
  list(options?: Core.RequestOptions): Core.PagePromise<AssetsBasePage>;
  list(
    query: AssetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AssetsBasePage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/video/v1/assets', AssetsBasePage, { query, ...options });
  }

  /**
   * Deletes a video asset and all its data.
   */
  del(assetId: string, options?: Core.RequestOptions): Promise<void> {
    return this.delete(`/video/v1/assets/${assetId}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Creates a playback ID that can be used to stream the asset to a viewer.
   */
  async createPlaybackId(
    assetId: string,
    body: AssetCreatePlaybackIdParams,
    options?: Core.RequestOptions,
  ): Promise<Shared.PlaybackId> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.post(`/video/v1/assets/${assetId}/playback-ids`, {
      body,
      ...options,
    })) as any;
    return response.data;
  }

  /**
   * Adds an asset track (for example, subtitles) to an asset.
   */
  async createTrack(
    assetId: string,
    body: AssetCreateTrackParams,
    options?: Core.RequestOptions,
  ): Promise<Shared.Track> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.post(`/video/v1/assets/${assetId}/tracks`, { body, ...options })) as any;
    return response.data;
  }

  /**
   * Deletes a playback ID, rendering it nonfunctional for viewing an asset's video
   * content. Please note that deleting the playback ID removes access to the
   * underlying asset; a viewer who started playback before the playback ID was
   * deleted may be able to watch the entire video for a limited duration.
   */
  deletePlaybackId(assetId: string, playbackId: string, options?: Core.RequestOptions): Promise<void> {
    return this.delete(`/video/v1/assets/${assetId}/playback-ids/${playbackId}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Removes a text track from an asset. Audio and video tracks on assets cannot be
   * removed.
   */
  deleteTrack(assetId: string, trackId: string, options?: Core.RequestOptions): Promise<void> {
    return this.delete(`/video/v1/assets/${assetId}/tracks/${trackId}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Retrieves information about the specified playback ID.
   */
  async retrievePlaybackId(
    assetId: string,
    playbackId: string,
    options?: Core.RequestOptions,
  ): Promise<Shared.PlaybackId> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.get(
      `/video/v1/assets/${assetId}/playback-ids/${playbackId}`,
      options,
    )) as any;
    return response.data;
  }

  /**
   * Allows you to add temporary access to the master (highest-quality) version of
   * the asset in MP4 format. A URL will be created that can be used to download the
   * master version for 24 hours. After 24 hours Master Access will revert to "none".
   * This master version is not optimized for web and not meant to be streamed, only
   * downloaded for purposes like archiving or editing the video offline.
   */
  async updateMasterAccess(
    assetId: string,
    body: AssetUpdateMasterAccessParams,
    options?: Core.RequestOptions,
  ): Promise<Asset> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.put(`/video/v1/assets/${assetId}/master-access`, {
      body,
      ...options,
    })) as any;
    return response.data;
  }

  /**
   * Allows you to add or remove mp4 support for assets that were created without it.
   * Currently there are two values supported in this request, `standard` and `none`.
   * `none` means that an asset _does not_ have mp4 support, so submitting a request
   * with `mp4_support` set to `none` will delete the mp4 assets from the asset in
   * question.
   */
  async updateMP4Support(
    assetId: string,
    body: AssetUpdateMP4SupportParams,
    options?: Core.RequestOptions,
  ): Promise<Asset> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.put(`/video/v1/assets/${assetId}/mp4-support`, { body, ...options })) as any;
    return response.data;
  }
}

export class AssetsBasePage extends BasePage<Asset> {}

export interface Asset {
  /**
   * The aspect ratio of the asset in the form of `width:height`, for example `16:9`.
   */
  aspect_ratio?: string;

  /**
   * Time the Asset was created, defined as a Unix timestamp (seconds since epoch).
   */
  created_at?: string;

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
   * Unique identifier for the Asset. Max 255 characters.
   */
  id?: string;

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
   * Master MP4 file when ready. This object does not exist if `master_acess` is set
   * to `none` and when the temporary URL expires.
   */
  master?: Asset.Master;

  master_access?: 'temporary' | 'none';

  /**
   * The maximum frame rate that has been stored for the asset. The asset may be
   * delivered at lower frame rates depending on the device and bandwidth, however it
   * cannot be delivered at a higher value than is stored. This field may return -1
   * if the frame rate of the input cannot be reliably determined.
   */
  max_stored_frame_rate?: number;

  /**
   * The maximum resolution that has been stored for the asset. The asset may be
   * delivered at lower resolutions depending on the device and bandwidth, however it
   * cannot be delivered at a higher value than is stored.
   */
  max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD';

  mp4_support?: 'standard' | 'none';

  /**
   * An object containing one or more reasons the input file is non-standard. See
   * [the guide on minimizing processing time](https://docs.mux.com/guides/video/minimize-processing-time)
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

  per_title_encode?: boolean;

  /**
   * An array of Playback ID objects. Use these to create HLS playback URLs. See
   * [Play your videos](https://docs.mux.com/guides/video/play-your-videos) for more
   * details.
   */
  playback_ids?: Array<Shared.PlaybackId>;

  /**
   * An array of individual live stream recording sessions. A recording session is
   * created on each encoder connection during the live stream. Additionally any time
   * slate media is inserted during brief interruptions in the live stream media or
   * times when the live streaming software disconnects, a recording session
   * representing the slate media will be added with a "slate" type.
   */
  recording_times?: Array<Asset.RecordingTimes>;

  /**
   * Asset Identifier of the video used as the source for creating the clip.
   */
  source_asset_id?: string;

  /**
   * An object containing the current status of any static renditions (mp4s). The
   * object does not exist if no static renditions have been requested. See
   * [Download your videos](https://docs.mux.com/guides/video/download-your-videos)
   * for more information.
   */
  static_renditions?: Asset.StaticRenditions;

  /**
   * The status of the asset.
   */
  status?: 'preparing' | 'ready' | 'errored';

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
  tracks?: Array<Shared.Track>;

  /**
   * Unique identifier for the Direct Upload. This is an optional parameter added
   * when the asset is created from a direct upload.
   */
  upload_id?: string;
}

export namespace Asset {
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

  export interface Master {
    status?: 'ready' | 'preparing' | 'errored';

    /**
     * The temporary URL to the master version of the video, as an MP4 file. This URL
     * will expire after 24 hours.
     */
    url?: string;
  }

  export interface StaticRenditions {
    /**
     * Array of file objects.
     */
    files?: Array<StaticRenditions.Files>;

    /**
     * Indicates the status of downloadable MP4 versions of this asset.
     */
    status?: 'ready' | 'preparing' | 'disabled' | 'errored';
  }

  export namespace StaticRenditions {
    export interface Files {
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

      name?: 'low.mp4' | 'medium.mp4' | 'high.mp4' | 'audio.m4a';

      /**
       * The width of the static rendition's file in pixels
       */
      width?: number;
    }
  }

  export interface RecordingTimes {
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
}

export interface AssetMasterParams {
  /**
   * Add or remove access to the master version of the video.
   */
  master_access?: 'temporary' | 'none';
}

export interface AssetMP4SupportParams {
  /**
   * String value for the level of mp4 support
   */
  mp4_support?: 'standard' | 'none';
}

export interface AssetResponse {
  data?: Asset;
}

export interface UpdateAssetParams {
  /**
   * Arbitrary metadata set for the Asset. Max 255 characters. In order to clear this
   * value, the field should be included with an empty string value.
   */
  passthrough?: string;
}

export interface AssetCreateParams {
  /**
   * An array of objects that each describe an input file to be used to create the
   * asset. As a shortcut, input can also be a string URL for a file when only one
   * input file is used. See `input[].url` for requirements.
   */
  input?: Array<AssetCreateParams.Input>;

  /**
   * Specify what level (if any) of support for master access. Master access can be
   * enabled temporarily for your asset to be downloaded. See the
   * [Download your videos guide](/guides/video/download-your-videos) for more
   * information.
   */
  master_access?: 'none' | 'temporary';

  /**
   * Specify what level (if any) of support for mp4 playback. In most cases you
   * should use our default HLS-based streaming playback ({playback_id}.m3u8) which
   * can automatically adjust to viewers' connection speeds, but an mp4 can be useful
   * for some legacy devices or downloading for offline playback. See the
   * [Download your videos guide](/guides/video/download-your-videos) for more
   * information.
   */
  mp4_support?: 'none' | 'standard';

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
   * available through `playback_ids`. Options include: `"public"` (anyone with the
   * playback URL can stream the asset). And `"signed"` (an additional access token
   * is required to play the asset). If no playback_policy is set, the asset will
   * have no playback IDs and will therefore not be playable. For simplicity, a
   * single string name can be used in place of the array in the case of only one
   * playback policy.
   */
  playback_policy?: Array<'public' | 'signed'>;

  /**
   * Marks the asset as a test asset when the value is set to true. A Test asset can
   * help evaluate the Mux Video APIs without incurring any cost. There is no limit
   * on number of test assets created. Test asset are watermarked with the Mux logo,
   * limited to 10 seconds, deleted after 24 hrs.
   */
  test?: boolean;
}

export namespace AssetCreateParams {
  export interface Input {
    /**
     * Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).
     * This optional parameter should be used for `text` type and subtitles `text` type
     * tracks.
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
     * The language code value must be a valid
     * [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value. For
     * example, en for English or en-US for the US version of English. This parameter
     * is required for text type and subtitles text type track.
     */
    language_code?: string;

    /**
     * The name of the track containing a human-readable description. This value must
     * be unique across all text type and subtitles `text` type tracks. The hls
     * manifest will associate a subtitle text track with this value. For example, the
     * value should be "English" for subtitles text track with language_code as en.
     * This optional parameter should be used only for `text` type and subtitles `text`
     * type tracks. If this parameter is not included, Mux will auto-populate based on
     * the `input[].language_code` value.
     */
    name?: string;

    /**
     * An object that describes how the image file referenced in URL should be placed
     * over the video (i.e. watermarking). Ensure that the URL is active and persists
     * the entire lifespan of the video object.
     */
    overlay_settings?: Input.OverlaySettings;

    /**
     * This optional parameter should be used for `text` type and subtitles `text` type
     * tracks.
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
     * - For subtitles text tracks, the URL is the location of subtitle/captions file.
     *   Mux supports [SubRip Text (SRT)](https://en.wikipedia.org/wiki/SubRip) and
     *   [Web Video Text Tracks](https://www.w3.org/TR/webvtt1/) format for ingesting
     *   Subtitles and Closed Captions.
     * - For Watermarking or Overlay, the URL is the location of the watermark image.
     * - When creating clips from existing Mux assets, the URL is defined with
     *   `mux://assets/{asset_id}` template where `asset_id` is the Asset Identifier
     *   for creating the clip from.
     */
    url?: string;
  }

  export namespace Input {
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

export interface AssetCreatePlaybackIdParams {
  /**
   * - `public` playback IDs are accessible by constructing an HLS URL like
   *   `https://stream.mux.com/${PLAYBACK_ID}`
   *
   * - `signed` playback IDs should be used with tokens
   *   `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. See
   *   [Secure video playback](https://docs.mux.com/guides/video/secure-video-playback)
   *   for details about creating tokens.
   */
  policy?: 'public' | 'signed';
}

export interface AssetCreateTrackParams {
  /**
   * The language code value must be a valid BCP 47 specification compliant value.
   * For example, en for English or en-US for the US version of English.
   */
  language_code: string;

  text_type: 'subtitles';

  type: 'text';

  url: string;

  /**
   * Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).
   */
  closed_captions?: boolean;

  /**
   * The name of the track containing a human-readable description. This value must
   * be unique across all the text type and subtitles text type tracks. HLS manifest
   * will associate subtitle text track with this value. For example, set the value
   * to "English" for subtitles text track with language_code as en-US. If this
   * parameter is not included, Mux will auto-populate based on the language_code
   * value.
   */
  name?: string;

  /**
   * Arbitrary user-supplied metadata set for the track either when creating the
   * asset or track.
   */
  passthrough?: string;
}

export interface AssetUpdateMasterAccessParams {
  /**
   * Add or remove access to the master version of the video.
   */
  master_access?: 'temporary' | 'none';
}

export interface AssetUpdateMP4SupportParams {
  /**
   * String value for the level of mp4 support
   */
  mp4_support?: 'standard' | 'none';
}
