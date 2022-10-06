// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { NoMorePages, NoMorePagesParams } from '~/pagination';
import * as Shared from '~/resources/shared';

export class Assets extends APIResource {
  /**
   * Create a new Mux Video asset.
   */
  create(body: AssetCreateParams, options?: Core.RequestOptions): Promise<Core.APIResponse<AssetResponse>> {
    return this.post('/video/v1/assets', { body, ...options });
  }

  /**
   * Retrieves the details of an asset that has previously been created. Supply the
   * unique asset ID that was returned from your previous request, and Mux will
   * return the corresponding asset information. The same information is returned
   * when creating an asset.
   */
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<AssetResponse>> {
    return this.get(`/video/v1/assets/${id}`, options);
  }

  /**
   * Updates the details of an already-created Asset with the provided Asset ID. This
   * currently supports only the `passthrough` field.
   */
  update(
    id: string,
    body: AssetUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AssetResponse>> {
    return this.patch(`/video/v1/assets/${id}`, { body, ...options });
  }

  /**
   * List all Mux assets.
   */
  list(query?: AssetListParams, options?: Core.RequestOptions): Core.PagePromise<AssetsNoMorePages>;
  list(options?: Core.RequestOptions): Core.PagePromise<AssetsNoMorePages>;
  list(
    query: AssetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AssetsNoMorePages> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/video/v1/assets', AssetsNoMorePages, { query, ...options });
  }

  /**
   * Deletes a video asset and all its data.
   */
  del(id: string, options?: Core.RequestOptions): Promise<void> {
    return this.delete(`/video/v1/assets/${id}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Creates a playback ID that can be used to stream the asset to a viewer.
   */
  createPlaybackId(
    id: string,
    body: AssetCreatePlaybackIdParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Shared.CreatePlaybackIdResponse>> {
    return this.post(`/video/v1/assets/${id}/playback-ids`, { body, ...options });
  }

  /**
   * Adds an asset track (for example, subtitles) to an asset.
   */
  createTrack(
    id: string,
    body: AssetCreateTrackParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<CreateTrackResponse>> {
    return this.post(`/video/v1/assets/${id}/tracks`, { body, ...options });
  }

  /**
   * Deletes a playback ID, rendering it nonfunctional for viewing an asset's video
   * content. Please note that deleting the playback ID removes access to the
   * underlying asset; a viewer who started playback before the playback ID was
   * deleted may be able to watch the entire video for a limited duration.
   */
  deletePlaybackId(assetId: string, id: string, options?: Core.RequestOptions): Promise<void> {
    return this.delete(`/video/v1/assets/${assetId}/playback-ids/${id}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Removes a text track from an asset. Audio and video tracks on assets cannot be
   * removed.
   */
  deleteTrack(assetId: string, id: string, options?: Core.RequestOptions): Promise<void> {
    return this.delete(`/video/v1/assets/${assetId}/tracks/${id}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Returns a list of the input objects that were used to create the asset along
   * with any settings that were applied to each input.
   */
  retrieveInputInfo(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<GetAssetInputInfoResponse>> {
    return this.get(`/video/v1/assets/${id}/input-info`, options);
  }

  /**
   * Retrieves information about the specified playback ID.
   */
  retrievePlaybackId(
    assetId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<GetAssetPlaybackIdResponse>> {
    return this.get(`/video/v1/assets/${assetId}/playback-ids/${id}`, options);
  }

  /**
   * Allows you to add temporary access to the master (highest-quality) version of
   * the asset in MP4 format. A URL will be created that can be used to download the
   * master version for 24 hours. After 24 hours Master Access will revert to "none".
   * This master version is not optimized for web and not meant to be streamed, only
   * downloaded for purposes like archiving or editing the video offline.
   */
  updateMasterAccess(
    id: string,
    body: AssetUpdateMasterAccessParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AssetResponse>> {
    return this.put(`/video/v1/assets/${id}/master-access`, { body, ...options });
  }

  /**
   * Allows you to add or remove mp4 support for assets that were created without it.
   * Currently there are two values supported in this request, `standard` and `none`.
   * `none` means that an asset _does not_ have mp4 support, so submitting a request
   * with `mp4_support` set to `none` will delete the mp4 assets from the asset in
   * question.
   */
  updateMp4Support(
    id: string,
    body: AssetUpdateMp4SupportParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AssetResponse>> {
    return this.put(`/video/v1/assets/${id}/mp4-support`, { body, ...options });
  }
}

export class AssetsNoMorePages extends NoMorePages<Shared.Asset> {}

export interface AssetResponse {
  data?: Shared.Asset;
}

export interface CreateTrackResponse {
  data?: CreateTrackResponse.Data;
}

export namespace CreateTrackResponse {
  export interface Data {
    /**
     * Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).
     * This parameter is only set for `text` type and `subtitles` text type tracks.
     */
    closed_captions?: boolean;

    /**
     * The duration in seconds of the track media. This parameter is not set for `text`
     * type tracks. This field is optional and may not be set. The top level `duration`
     * field of an asset will always be set.
     */
    duration?: number;

    /**
     * Unique identifier for the Track
     */
    id?: string;

    /**
     * The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47)
     * specification compliant value. For example, `en` for English or `en-US` for the
     * US version of English. This parameter is only set for `text` type and
     * `subtitles` text type tracks.
     */
    language_code?: string;

    /**
     * Only set for the `audio` type track.
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
     * The name of the track containing a human-readable description. The hls manifest
     * will associate a subtitle text track with this value. For example, the value is
     * "English" for subtitles text track for the `language_code` value of `en-US`.
     * This parameter is only set for `text` type and `subtitles` text type tracks.
     */
    name?: string;

    /**
     * Arbitrary user-supplied metadata set for the track either when creating the
     * asset or track. This parameter is only set for `text` type tracks. Max 255
     * characters.
     */
    passthrough?: string;

    /**
     * The status of the track. This parameter is only set for `text` type tracks.
     */
    status?: 'preparing' | 'ready' | 'errored';

    /**
     * The source of the text contained in a Track of type `text`. Valid `text_source`
     * values are listed below.
     *
     * - `uploaded`: Tracks uploaded to Mux as caption or subtitle files using the
     *   Create Asset Track API.
     * - `embedded`: Tracks extracted from an embedded stream of CEA-608 closed
     *   captions.
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
    text_source?: 'uploaded' | 'embedded' | 'generated_live' | 'generated_live_final';

    /**
     * This parameter is only set for `text` type tracks.
     */
    text_type?: 'subtitles';

    /**
     * The type of track
     */
    type?: 'video' | 'audio' | 'text';
  }
}

export interface GetAssetInputInfoResponse {
  data?: Array<GetAssetInputInfoResponse.Data>;
}

export namespace GetAssetInputInfoResponse {
  export interface Data {
    file?: Data.File;

    /**
     * An array of objects that each describe an input file to be used to create the
     * asset. As a shortcut, `input` can also be a string URL for a file when only one
     * input file is used. See `input[].url` for requirements.
     */
    settings?: Data.Settings;
  }

  export namespace Data {
    export interface Settings {
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
      overlay_settings?: Settings.OverlaySettings;

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

    export namespace Settings {
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

    export interface File {
      container_format?: string;

      tracks?: Array<File.Tracks>;
    }

    export namespace File {
      export interface Tracks {
        channels?: number;

        duration?: number;

        encoding?: string;

        frame_rate?: number;

        height?: number;

        sample_rate?: number;

        sample_size?: number;

        type?: string;

        width?: number;
      }
    }
  }
}

export interface GetAssetPlaybackIdResponse {
  data?: GetAssetPlaybackIdResponse.Data;
}

export namespace GetAssetPlaybackIdResponse {
  export interface Data {
    /**
     * Unique identifier for the PlaybackID
     */
    id?: string;

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
}

export interface UpdateAssetMasterRequest {
  /**
   * Add or remove access to the master version of the video.
   */
  master_access?: 'temporary' | 'none';
}

export interface UpdateAssetMp4SupportRequest {
  /**
   * String value for the level of mp4 support
   */
  mp4_support?: 'standard' | 'none';
}

export interface UpdateAssetRequest {
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

export interface AssetListParams extends NoMorePagesParams {
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

export interface AssetUpdateMp4SupportParams {
  /**
   * String value for the level of mp4 support
   */
  mp4_support?: 'standard' | 'none';
}
