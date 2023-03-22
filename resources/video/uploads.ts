// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as Assets from '~/resources/video/assets';
import * as Shared from '~/resources/shared';
import { BasePage, BasePageParams } from '~/pagination';

export class Uploads extends APIResource {
  /**
   * Creates a new direct upload, through which video content can be uploaded for
   * ingest to Mux.
   */
  async create(body: UploadCreateParams, options?: Core.RequestOptions): Promise<Upload> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.post('/video/v1/uploads', { body, ...options })) as any;
    return response.data;
  }

  /**
   * Fetches information about a single direct upload in the current environment.
   */
  async retrieve(uploadId: string, options?: Core.RequestOptions): Promise<Upload> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.get(`/video/v1/uploads/${uploadId}`, options)) as any;
    return response.data;
  }

  /**
   * Lists currently extant direct uploads in the current environment.
   */
  list(query?: UploadListParams, options?: Core.RequestOptions): Core.PagePromise<UploadsBasePage>;
  list(options?: Core.RequestOptions): Core.PagePromise<UploadsBasePage>;
  list(
    query: UploadListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<UploadsBasePage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/video/v1/uploads', UploadsBasePage, { query, ...options });
  }

  /**
   * Cancels a direct upload and marks it as cancelled. If a pending upload finishes
   * after this request, no asset will be created. This request will only succeed if
   * the upload is still in the `waiting` state.
   */
  async cancel(uploadId: string, options?: Core.RequestOptions): Promise<Upload> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.put(`/video/v1/uploads/${uploadId}/cancel`, options)) as any;
    return response.data;
  }
}

export class UploadsBasePage extends BasePage<Upload> {}

export interface Upload {
  /**
   * Only set once the upload is in the `asset_created` state.
   */
  asset_id?: string;

  /**
   * If the upload URL will be used in a browser, you must specify the origin in
   * order for the signed URL to have the correct CORS headers.
   */
  cors_origin?: string;

  /**
   * Only set if an error occurred during asset creation.
   */
  error?: Upload.Error;

  /**
   * Unique identifier for the Direct Upload.
   */
  id?: string;

  new_asset_settings?: Assets.Asset;

  status?: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out';

  /**
   * Indicates if this is a test Direct Upload, in which case the Asset that gets
   * created will be a `test` Asset.
   */
  test?: boolean;

  /**
   * Max time in seconds for the signed upload URL to be valid. If a successful
   * upload has not occurred before the timeout limit, the direct upload is marked
   * `timed_out`
   */
  timeout?: number;

  /**
   * The URL to upload the associated source media to.
   */
  url?: string;
}

export namespace Upload {
  export interface Error {
    /**
     * Human readable error message
     */
    message?: string;

    /**
     * Label for the specific error
     */
    type?: string;
  }
}

export interface UploadParams {
  new_asset_settings: UploadParams.NewAssetSettings;

  /**
   * If the upload URL will be used in a browser, you must specify the origin in
   * order for the signed URL to have the correct CORS headers.
   */
  cors_origin?: string;

  test?: boolean;

  /**
   * Max time in seconds for the signed upload URL to be valid. If a successful
   * upload has not occurred before the timeout limit, the direct upload is marked
   * `timed_out`
   */
  timeout?: number;
}

export namespace UploadParams {
  export interface NewAssetSettings {
    /**
     * An array of objects that each describe an input file to be used to create the
     * asset. As a shortcut, input can also be a string URL for a file when only one
     * input file is used. See `input[].url` for requirements.
     */
    input?: Array<NewAssetSettings.Input>;

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
    playback_policy?: Array<Shared.PlaybackPolicy>;

    /**
     * Marks the asset as a test asset when the value is set to true. A Test asset can
     * help evaluate the Mux Video APIs without incurring any cost. There is no limit
     * on number of test assets created. Test asset are watermarked with the Mux logo,
     * limited to 10 seconds, deleted after 24 hrs.
     */
    test?: boolean;
  }

  export namespace NewAssetSettings {
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
}

export interface UploadResponse {
  data: Upload;
}

export interface UploadCreateParams {
  new_asset_settings: UploadCreateParams.NewAssetSettings;

  /**
   * If the upload URL will be used in a browser, you must specify the origin in
   * order for the signed URL to have the correct CORS headers.
   */
  cors_origin?: string;

  test?: boolean;

  /**
   * Max time in seconds for the signed upload URL to be valid. If a successful
   * upload has not occurred before the timeout limit, the direct upload is marked
   * `timed_out`
   */
  timeout?: number;
}

export namespace UploadCreateParams {
  export interface NewAssetSettings {
    /**
     * An array of objects that each describe an input file to be used to create the
     * asset. As a shortcut, input can also be a string URL for a file when only one
     * input file is used. See `input[].url` for requirements.
     */
    input?: Array<NewAssetSettings.Input>;

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
    playback_policy?: Array<Shared.PlaybackPolicy>;

    /**
     * Marks the asset as a test asset when the value is set to true. A Test asset can
     * help evaluate the Mux Video APIs without incurring any cost. There is no limit
     * on number of test assets created. Test asset are watermarked with the Mux logo,
     * limited to 10 seconds, deleted after 24 hrs.
     */
    test?: boolean;
  }

  export namespace NewAssetSettings {
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
}

export interface UploadListParams extends BasePageParams {}
