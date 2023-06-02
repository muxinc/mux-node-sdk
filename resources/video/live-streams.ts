// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as Shared from '~/resources/shared';
import { BasePage, BasePageParams } from '~/pagination';

export class LiveStreams extends APIResource {
  /**
   * Creates a new live stream. Once created, an encoder can connect to Mux via the
   * specified stream key and begin streaming to an audience.
   */
  async create(body: LiveStreamCreateParams, options?: Core.RequestOptions): Promise<LiveStream> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.post('/video/v1/live-streams', { body, ...options })) as any;
    return response.data;
  }

  /**
   * Retrieves the details of a live stream that has previously been created. Supply
   * the unique live stream ID that was returned from your previous request, and Mux
   * will return the corresponding live stream information. The same information is
   * returned when creating a live stream.
   */
  async retrieve(liveStreamId: string, options?: Core.RequestOptions): Promise<LiveStream> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.get(`/video/v1/live-streams/${liveStreamId}`, options)) as any;
    return response.data;
  }

  /**
   * Updates the parameters of a previously-created live stream. This currently
   * supports a subset of variables. Supply the live stream ID and the updated
   * parameters and Mux will return the corresponding live stream information. The
   * information returned will be the same after update as for subsequent get live
   * stream requests.
   */
  async update(
    liveStreamId: string,
    body: LiveStreamUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<LiveStream> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.patch(`/video/v1/live-streams/${liveStreamId}`, {
      body,
      ...options,
    })) as any;
    return response.data;
  }

  /**
   * Lists the live streams that currently exist in the current environment.
   */
  list(query?: LiveStreamListParams, options?: Core.RequestOptions): Core.PagePromise<LiveStreamsBasePage>;
  list(options?: Core.RequestOptions): Core.PagePromise<LiveStreamsBasePage>;
  list(
    query: LiveStreamListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LiveStreamsBasePage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/video/v1/live-streams', LiveStreamsBasePage, { query, ...options });
  }

  /**
   * Deletes a live stream from the current environment. If the live stream is
   * currently active and being streamed to, ingest will be terminated and the
   * encoder will be disconnected.
   */
  del(liveStreamId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>> {
    return this.delete(`/video/v1/live-streams/${liveStreamId}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * (Optional) End the live stream recording immediately instead of waiting for the
   * reconnect_window. `EXT-X-ENDLIST` tag is added to the HLS manifest which
   * notifies the player that this live stream is over.
   *
   * Mux does not close the encoder connection immediately. Encoders are often
   * configured to re-establish connections immediately which would result in a new
   * recorded asset. For this reason, Mux waits for 60s before closing the connection
   * with the encoder. This 60s timeframe is meant to give encoder operators a chance
   * to disconnect from their end.
   */
  complete(liveStreamId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>> {
    return this.put(`/video/v1/live-streams/${liveStreamId}/complete`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Create a new playback ID for this live stream, through which a viewer can watch
   * the streamed content of the live stream.
   */
  async createPlaybackId(
    liveStreamId: string,
    body: LiveStreamCreatePlaybackIDParams,
    options?: Core.RequestOptions,
  ): Promise<Shared.PlaybackID> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.post(`/video/v1/live-streams/${liveStreamId}/playback-ids`, {
      body,
      ...options,
    })) as any;
    return response.data;
  }

  /**
   * Create a simulcast target for the parent live stream. Simulcast target can only
   * be created when the parent live stream is in idle state. Only one simulcast
   * target can be created at a time with this API.
   */
  async createSimulcastTarget(
    liveStreamId: string,
    body: LiveStreamCreateSimulcastTargetParams,
    options?: Core.RequestOptions,
  ): Promise<LiveStreamCreateSimulcastTargetResponse> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.post(`/video/v1/live-streams/${liveStreamId}/simulcast-targets`, {
      body,
      ...options,
    })) as any;
    return response.data;
  }

  /**
   * Deletes the playback ID for the live stream. This will not disable ingest (as
   * the live stream still exists). New attempts to play back the live stream will
   * fail immediately. However, current viewers will be able to continue watching the
   * stream for some period of time.
   */
  deletePlaybackId(
    liveStreamId: string,
    playbackId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    return this.delete(`/video/v1/live-streams/${liveStreamId}/playback-ids/${playbackId}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Delete the simulcast target using the simulcast target ID returned when creating
   * the simulcast target. Simulcast Target can only be deleted when the parent live
   * stream is in idle state.
   */
  deleteSimulcastTarget(
    liveStreamId: string,
    simulcastTargetId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    return this.delete(`/video/v1/live-streams/${liveStreamId}/simulcast-targets/${simulcastTargetId}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Disables a live stream, making it reject incoming RTMP streams until re-enabled.
   * The API also ends the live stream recording immediately when active. Ending the
   * live stream recording adds the `EXT-X-ENDLIST` tag to the HLS manifest which
   * notifies the player that this live stream is over.
   *
   * Mux also closes the encoder connection immediately. Any attempt from the encoder
   * to re-establish connection will fail till the live stream is re-enabled.
   */
  disable(liveStreamId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>> {
    return this.put(`/video/v1/live-streams/${liveStreamId}/disable`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Enables a live stream, allowing it to accept an incoming RTMP stream.
   */
  enable(liveStreamId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>> {
    return this.put(`/video/v1/live-streams/${liveStreamId}/enable`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Reset a live stream key if you want to immediately stop the current stream key
   * from working and create a new stream key that can be used for future broadcasts.
   */
  async resetStreamKey(liveStreamId: string, options?: Core.RequestOptions): Promise<LiveStream> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.post(
      `/video/v1/live-streams/${liveStreamId}/reset-stream-key`,
      options,
    )) as any;
    return response.data;
  }

  /**
   * Fetches information about a live stream's playback ID, through which a viewer
   * can watch the streamed content from this live stream.
   */
  async retrievePlaybackId(
    liveStreamId: string,
    playbackId: string,
    options?: Core.RequestOptions,
  ): Promise<Shared.PlaybackID> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.get(
      `/video/v1/live-streams/${liveStreamId}/playback-ids/${playbackId}`,
      options,
    )) as any;
    return response.data;
  }

  /**
   * Retrieves the details of the simulcast target created for the parent live
   * stream. Supply the unique live stream ID and simulcast target ID that was
   * returned in the response of create simulcast target request, and Mux will return
   * the corresponding information.
   */
  async retrieveSimulcastTarget(
    liveStreamId: string,
    simulcastTargetId: string,
    options?: Core.RequestOptions,
  ): Promise<LiveStreamCreateSimulcastTargetResponse> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.get(
      `/video/v1/live-streams/${liveStreamId}/simulcast-targets/${simulcastTargetId}`,
      options,
    )) as any;
    return response.data;
  }

  /**
   * Configures a live stream to receive embedded closed captions. The resulting
   * Asset's subtitle text track will have `closed_captions: true` set.
   */
  async updateEmbeddedSubtitles(
    liveStreamId: string,
    body: LiveStreamUpdateEmbeddedSubtitlesParams,
    options?: Core.RequestOptions,
  ): Promise<LiveStream> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.put(`/video/v1/live-streams/${liveStreamId}/embedded-subtitles`, {
      body,
      ...options,
    })) as any;
    return response.data;
  }

  /**
   * Updates a live stream's automatic-speech-recognition-generated subtitle
   * configuration. Automatic speech recognition subtitles can be removed by sending
   * an empty array in the request payload.
   */
  async updateGeneratedSubtitles(
    liveStreamId: string,
    body: LiveStreamUpdateGeneratedSubtitlesParams,
    options?: Core.RequestOptions,
  ): Promise<LiveStream> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.put(`/video/v1/live-streams/${liveStreamId}/generated-subtitles`, {
      body,
      ...options,
    })) as any;
    return response.data;
  }
}

export class LiveStreamsBasePage extends BasePage<LiveStream> {}

export interface LiveStream {
  /**
   * The Asset that is currently being created if there is an active broadcast.
   */
  active_asset_id?: string;

  /**
   * The live stream only processes the audio track if the value is set to true. Mux
   * drops the video track if broadcasted.
   */
  audio_only?: boolean;

  /**
   * Time the Live Stream was created, defined as a Unix timestamp (seconds since
   * epoch).
   */
  created_at?: string;

  /**
   * Describes the embedded closed caption configuration of the incoming live stream.
   */
  embedded_subtitles?: Array<LiveStream.EmbeddedSubtitles>;

  /**
   * Configure the incoming live stream to include subtitles created with automatic
   * speech recognition. Each Asset created from a live stream with
   * `generated_subtitles` configured will automatically receive two text tracks. The
   * first of these will have a `text_source` value of `generated_live`, and will be
   * available with `ready` status as soon as the stream is live. The second text
   * track will have a `text_source` value of `generated_live_final` and will contain
   * subtitles with improved accuracy, timing, and formatting. However,
   * `generated_live_final` tracks will not be available in `ready` status until the
   * live stream ends. If an Asset has both `generated_live` and
   * `generated_live_final` tracks that are `ready`, then only the
   * `generated_live_final` track will be included during playback.
   */
  generated_subtitles?: Array<LiveStream.GeneratedSubtitles>;

  /**
   * Unique identifier for the Live Stream. Max 255 characters.
   */
  id?: string;

  /**
   * Latency is the time from when the streamer transmits a frame of video to when
   * you see it in the player. Set this as an alternative to setting low latency or
   * reduced latency flags. The Low Latency value is a beta feature. Read more here:
   * https://mux.com/blog/introducing-low-latency-live-streaming/
   */
  latency_mode?: 'low' | 'reduced' | 'standard';

  /**
   * This field is deprecated. Please use latency_mode instead. Latency is the time
   * from when the streamer transmits a frame of video to when you see it in the
   * player. Setting this option will enable compatibility with the LL-HLS
   * specification for low-latency streaming. This typically has lower latency than
   * Reduced Latency streams, and cannot be combined with Reduced Latency.
   */
  low_latency?: boolean;

  /**
   * The time in seconds a live stream may be continuously active before being
   * disconnected. Defaults to 12 hours.
   */
  max_continuous_duration?: number;

  new_asset_settings?: LiveStream.NewAssetSettings;

  /**
   * Arbitrary user-supplied metadata set for the asset. Max 255 characters.
   */
  passthrough?: string;

  /**
   * An array of Playback ID objects. Use these to create HLS playback URLs. See
   * [Play your videos](https://docs.mux.com/guides/video/play-your-videos) for more
   * details.
   */
  playback_ids?: Array<Shared.PlaybackID>;

  /**
   * An array of strings with the most recent Asset IDs that were created from this
   * Live Stream. The most recently generated Asset ID is the last entry in the list.
   */
  recent_asset_ids?: Array<string>;

  /**
   * The URL of the image file that Mux should download and use as slate media during
   * interruptions of the live stream media. This file will be downloaded each time a
   * new recorded asset is created from the live stream. If this is not set, the
   * default slate media will be used.
   */
  reconnect_slate_url?: string;

  /**
   * When live streaming software disconnects from Mux, either intentionally or due
   * to a drop in the network, the Reconnect Window is the time in seconds that Mux
   * should wait for the streaming software to reconnect before considering the live
   * stream finished and completing the recorded asset. **Max**: 1800s (30 minutes).
   *
   * If not specified directly, Standard Latency streams have a Reconnect Window of
   * 60 seconds; Reduced and Low Latency streams have a default of 0 seconds, or no
   * Reconnect Window. For that reason, we suggest specifying a value other than zero
   * for Reduced and Low Latency streams.
   *
   * Reduced and Low Latency streams with a Reconnect Window greater than zero will
   * insert slate media into the recorded asset while waiting for the streaming
   * software to reconnect or when there are brief interruptions in the live stream
   * media. When using a Reconnect Window setting higher than 60 seconds with a
   * Standard Latency stream, we highly recommend enabling slate with the
   * `use_slate_for_standard_latency` option.
   */
  reconnect_window?: number;

  /**
   * This field is deprecated. Please use latency_mode instead. Latency is the time
   * from when the streamer transmits a frame of video to when you see it in the
   * player. Set this if you want lower latency for your live stream. See the
   * [Reduce live stream latency guide](https://docs.mux.com/guides/video/reduce-live-stream-latency)
   * to understand the tradeoffs.
   */
  reduced_latency?: boolean;

  /**
   * Each Simulcast Target contains configuration details to broadcast (or
   * "restream") a live stream to a third-party streaming service.
   * [See the Stream live to 3rd party platforms guide](https://docs.mux.com/guides/video/stream-live-to-3rd-party-platforms).
   */
  simulcast_targets?: Array<LiveStreamCreateSimulcastTargetResponse>;

  /**
   * `idle` indicates that there is no active broadcast. `active` indicates that
   * there is an active broadcast and `disabled` status indicates that no future RTMP
   * streams can be published.
   */
  status?: 'active' | 'idle' | 'disabled';

  /**
   * Unique key used for streaming to a Mux RTMP endpoint. This should be considered
   * as sensitive as credentials, anyone with this stream key can begin streaming.
   */
  stream_key?: string;

  /**
   * True means this live stream is a test live stream. Test live streams can be used
   * to help evaluate the Mux Video APIs for free. There is no limit on the number of
   * test live streams, but they are watermarked with the Mux logo, and limited to 5
   * minutes. The test live stream is disabled after the stream is active for 5 mins
   * and the recorded asset also deleted after 24 hours.
   */
  test?: boolean;

  /**
   * By default, Standard Latency live streams do not have slate media inserted while
   * waiting for live streaming software to reconnect to Mux. Setting this to true
   * enables slate insertion on a Standard Latency stream.
   */
  use_slate_for_standard_latency?: boolean;
}

export namespace LiveStream {
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
    /**
     * An array of objects that each describe an input file to be used to create the
     * asset. As a shortcut, `input` can also be a string URL for a file when only one
     * input file is used. See `input[].url` for requirements.
     */
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

  export interface EmbeddedSubtitles {
    /**
     * CEA-608 caption channel to read data from.
     */
    language_channel?: 'cc1' | 'cc2' | 'cc3' | 'cc4';

    /**
     * The language of the closed caption stream. Value must be BCP 47 compliant.
     */
    language_code?: string;

    /**
     * A name for this live stream closed caption track.
     */
    name?: string;

    /**
     * Arbitrary user-supplied metadata set for the live stream closed caption track.
     * Max 255 characters.
     */
    passthrough?: string;
  }

  export interface GeneratedSubtitles {
    /**
     * The language to generate subtitles in.
     */
    language_code?: 'en' | 'en-US';

    /**
     * A name for this live stream subtitle track.
     */
    name?: string;

    /**
     * Arbitrary metadata set for the live stream subtitle track. Max 255 characters.
     */
    passthrough?: string;

    /**
     * Unique identifiers for existing Transcription Vocabularies to use while
     * generating subtitles for the live stream. If the Transcription Vocabularies
     * provided collectively have more than 1000 phrases, only the first 1000 phrases
     * will be included.
     */
    transcription_vocabulary_ids?: Array<string>;
  }
}

export interface LiveStreamCreateSimulcastTargetResponse {
  /**
   * ID of the Simulcast Target
   */
  id?: string;

  /**
   * Arbitrary user-supplied metadata set when creating a simulcast target.
   */
  passthrough?: string;

  /**
   * The current status of the simulcast target. See Statuses below for detailed
   * description.
   *
   * - `idle`: Default status. When the parent live stream is in disconnected status,
   *   simulcast targets will be idle state.
   * - `starting`: The simulcast target transitions into this state when the parent
   *   live stream transition into connected state.
   * - `broadcasting`: The simulcast target has successfully connected to the third
   *   party live streaming service and is pushing video to that service.
   * - `errored`: The simulcast target encountered an error either while attempting
   *   to connect to the third party live streaming service, or mid-broadcasting.
   *   Compared to other errored statuses in the Mux Video API, a simulcast may
   *   transition back into the broadcasting state if a connection with the service
   *   can be re-established.
   */
  status?: 'idle' | 'starting' | 'broadcasting' | 'errored';

  /**
   * Stream Key represents an stream identifier for the third party live streaming
   * service to simulcast the parent live stream too.
   */
  stream_key?: string;

  /**
   * RTMP hostname including the application name for the third party live streaming
   * service.
   */
  url?: string;
}

export interface LiveStreamCreateParams {
  /**
   * Force the live stream to only process the audio track when the value is set to
   * true. Mux drops the video track if broadcasted.
   */
  audio_only?: boolean;

  /**
   * Describe the embedded closed caption contents of the incoming live stream.
   */
  embedded_subtitles?: Array<LiveStreamCreateParams.EmbeddedSubtitles>;

  /**
   * Configure the incoming live stream to include subtitles created with automatic
   * speech recognition. Each Asset created from a live stream with
   * `generated_subtitles` configured will automatically receive two text tracks. The
   * first of these will have a `text_source` value of `generated_live`, and will be
   * available with `ready` status as soon as the stream is live. The second text
   * track will have a `text_source` value of `generated_live_final` and will contain
   * subtitles with improved accuracy, timing, and formatting. However,
   * `generated_live_final` tracks will not be available in `ready` status until the
   * live stream ends. If an Asset has both `generated_live` and
   * `generated_live_final` tracks that are `ready`, then only the
   * `generated_live_final` track will be included during playback.
   */
  generated_subtitles?: Array<LiveStreamCreateParams.GeneratedSubtitles>;

  /**
   * Latency is the time from when the streamer transmits a frame of video to when
   * you see it in the player. Set this as an alternative to setting low latency or
   * reduced latency flags. The Low Latency value is a beta feature. Read more here:
   * https://mux.com/blog/introducing-low-latency-live-streaming/
   */
  latency_mode?: 'low' | 'reduced' | 'standard';

  /**
   * This field is deprecated. Please use latency_mode instead. Latency is the time
   * from when the streamer transmits a frame of video to when you see it in the
   * player. Setting this option will enable compatibility with the LL-HLS
   * specification for low-latency streaming. This typically has lower latency than
   * Reduced Latency streams, and cannot be combined with Reduced Latency.
   */
  low_latency?: boolean;

  /**
   * The time in seconds a live stream may be continuously active before being
   * disconnected. Defaults to 12 hours.
   */
  max_continuous_duration?: number;

  new_asset_settings?: LiveStreamCreateParams.NewAssetSettings;

  passthrough?: string;

  playback_policy?: Array<Shared.PlaybackPolicy>;

  /**
   * The URL of the image file that Mux should download and use as slate media during
   * interruptions of the live stream media. This file will be downloaded each time a
   * new recorded asset is created from the live stream. If this is not set, the
   * default slate media will be used.
   */
  reconnect_slate_url?: string;

  /**
   * When live streaming software disconnects from Mux, either intentionally or due
   * to a drop in the network, the Reconnect Window is the time in seconds that Mux
   * should wait for the streaming software to reconnect before considering the live
   * stream finished and completing the recorded asset. Defaults to 60 seconds on the
   * API if not specified.
   *
   * If not specified directly, Standard Latency streams have a Reconnect Window of
   * 60 seconds; Reduced and Low Latency streams have a default of 0 seconds, or no
   * Reconnect Window. For that reason, we suggest specifying a value other than zero
   * for Reduced and Low Latency streams.
   *
   * Reduced and Low Latency streams with a Reconnect Window greater than zero will
   * insert slate media into the recorded asset while waiting for the streaming
   * software to reconnect or when there are brief interruptions in the live stream
   * media. When using a Reconnect Window setting higher than 60 seconds with a
   * Standard Latency stream, we highly recommend enabling slate with the
   * `use_slate_for_standard_latency` option.
   */
  reconnect_window?: number;

  /**
   * This field is deprecated. Please use latency_mode instead. Latency is the time
   * from when the streamer transmits a frame of video to when you see it in the
   * player. Set this if you want lower latency for your live stream. Read more here:
   * https://mux.com/blog/reduced-latency-for-mux-live-streaming-now-available/
   */
  reduced_latency?: boolean;

  simulcast_targets?: Array<LiveStreamCreateParams.SimulcastTargets>;

  /**
   * Marks the live stream as a test live stream when the value is set to true. A
   * test live stream can help evaluate the Mux Video APIs without incurring any
   * cost. There is no limit on number of test live streams created. Test live
   * streams are watermarked with the Mux logo and limited to 5 minutes. The test
   * live stream is disabled after the stream is active for 5 mins and the recorded
   * asset also deleted after 24 hours.
   */
  test?: boolean;

  /**
   * By default, Standard Latency live streams do not have slate media inserted while
   * waiting for live streaming software to reconnect to Mux. Setting this to true
   * enables slate insertion on a Standard Latency stream.
   */
  use_slate_for_standard_latency?: boolean;
}

export namespace LiveStreamCreateParams {
  export interface EmbeddedSubtitles {
    /**
     * CEA-608 caption channel to read data from.
     */
    language_channel?: 'cc1' | 'cc2' | 'cc3' | 'cc4';

    /**
     * The language of the closed caption stream. Value must be BCP 47 compliant.
     */
    language_code?: string;

    /**
     * A name for this live stream closed caption track.
     */
    name?: string;

    /**
     * Arbitrary user-supplied metadata set for the live stream closed caption track.
     * Max 255 characters.
     */
    passthrough?: string;
  }

  export interface GeneratedSubtitles {
    /**
     * The language to generate subtitles in.
     */
    language_code?: 'en' | 'en-US';

    /**
     * A name for this live stream subtitle track.
     */
    name?: string;

    /**
     * Arbitrary metadata set for the live stream subtitle track. Max 255 characters.
     */
    passthrough?: string;

    /**
     * Unique identifiers for existing Transcription Vocabularies to use while
     * generating subtitles for the live stream. If the Transcription Vocabularies
     * provided collectively have more than 1000 phrases, only the first 1000 phrases
     * will be included.
     */
    transcription_vocabulary_ids?: Array<string>;
  }

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
    /**
     * An array of objects that each describe an input file to be used to create the
     * asset. As a shortcut, `input` can also be a string URL for a file when only one
     * input file is used. See `input[].url` for requirements.
     */
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

  export interface SimulcastTargets {
    /**
     * RTMP hostname including application name for the third party live streaming
     * service. Example: `rtmp://live.example.com/app`.
     */
    url: string;

    /**
     * Arbitrary user-supplied metadata set by you when creating a simulcast target.
     */
    passthrough?: string;

    /**
     * Stream Key represents a stream identifier on the third party live streaming
     * service to send the parent live stream to.
     */
    stream_key?: string;
  }
}

export interface LiveStreamUpdateParams {
  /**
   * Latency is the time from when the streamer transmits a frame of video to when
   * you see it in the player. Set this as an alternative to setting low latency or
   * reduced latency flags. The Low Latency value is a beta feature. Read more here:
   * https://mux.com/blog/introducing-low-latency-live-streaming/
   */
  latency_mode?: 'low' | 'reduced' | 'standard';

  /**
   * The time in seconds a live stream may be continuously active before being
   * disconnected. Defaults to 12 hours.
   */
  max_continuous_duration?: number;

  /**
   * Arbitrary user-supplied metadata set for the live stream. Max 255 characters. In
   * order to clear this value, the field should be included with an empty-string
   * value.
   */
  passthrough?: string;

  /**
   * The URL of the image file that Mux should download and use as slate media during
   * interruptions of the live stream media. This file will be downloaded each time a
   * new recorded asset is created from the live stream. Set this to a blank string
   * to clear the value so that the default slate media will be used.
   */
  reconnect_slate_url?: string;

  /**
   * When live streaming software disconnects from Mux, either intentionally or due
   * to a drop in the network, the Reconnect Window is the time in seconds that Mux
   * should wait for the streaming software to reconnect before considering the live
   * stream finished and completing the recorded asset.
   *
   * If not specified directly, Standard Latency streams have a Reconnect Window of
   * 60 seconds; Reduced and Low Latency streams have a default of 0 seconds, or no
   * Reconnect Window. For that reason, we suggest specifying a value other than zero
   * for Reduced and Low Latency streams.
   *
   * Reduced and Low Latency streams with a Reconnect Window greater than zero will
   * insert slate media into the recorded asset while waiting for the streaming
   * software to reconnect or when there are brief interruptions in the live stream
   * media. When using a Reconnect Window setting higher than 60 seconds with a
   * Standard Latency stream, we highly recommend enabling slate with the
   * `use_slate_for_standard_latency` option.
   */
  reconnect_window?: number;

  /**
   * By default, Standard Latency live streams do not have slate media inserted while
   * waiting for live streaming software to reconnect to Mux. Setting this to true
   * enables slate insertion on a Standard Latency stream.
   */
  use_slate_for_standard_latency?: boolean;
}

export interface LiveStreamListParams extends BasePageParams {
  /**
   * Filter response to return live streams with the specified status only
   */
  status?: 'active' | 'idle' | 'disabled';

  /**
   * Filter response to return live stream for this stream key only
   */
  stream_key?: string;
}

export interface LiveStreamCreatePlaybackIDParams {
  /**
   * - `public` playback IDs are accessible by constructing an HLS URL like
   *   `https://stream.mux.com/${PLAYBACK_ID}`
   *
   * - `signed` playback IDs should be used with tokens
   *   `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. See
   *   [Secure video playback](https://docs.mux.com/guides/video/secure-video-playback)
   *   for details about creating tokens.
   */
  policy?: Shared.PlaybackPolicy;
}

export interface LiveStreamCreateSimulcastTargetParams {
  /**
   * RTMP hostname including application name for the third party live streaming
   * service. Example: `rtmp://live.example.com/app`.
   */
  url: string;

  /**
   * Arbitrary user-supplied metadata set by you when creating a simulcast target.
   */
  passthrough?: string;

  /**
   * Stream Key represents a stream identifier on the third party live streaming
   * service to send the parent live stream to.
   */
  stream_key?: string;
}

export interface LiveStreamUpdateEmbeddedSubtitlesParams {
  /**
   * Describe the embedded closed caption contents of the incoming live stream.
   */
  embedded_subtitles?: Array<LiveStreamUpdateEmbeddedSubtitlesParams.EmbeddedSubtitles>;
}

export namespace LiveStreamUpdateEmbeddedSubtitlesParams {
  export interface EmbeddedSubtitles {
    /**
     * CEA-608 caption channel to read data from.
     */
    language_channel?: 'cc1' | 'cc2' | 'cc3' | 'cc4';

    /**
     * The language of the closed caption stream. Value must be BCP 47 compliant.
     */
    language_code?: string;

    /**
     * A name for this live stream closed caption track.
     */
    name?: string;

    /**
     * Arbitrary user-supplied metadata set for the live stream closed caption track.
     * Max 255 characters.
     */
    passthrough?: string;
  }
}

export interface LiveStreamUpdateGeneratedSubtitlesParams {
  /**
   * Update automated speech recognition subtitle configuration for a live stream. At
   * most one subtitle track is allowed.
   */
  generated_subtitles?: Array<LiveStreamUpdateGeneratedSubtitlesParams.GeneratedSubtitles>;
}

export namespace LiveStreamUpdateGeneratedSubtitlesParams {
  export interface GeneratedSubtitles {
    /**
     * The language to generate subtitles in.
     */
    language_code?: 'en' | 'en-US';

    /**
     * A name for this live stream subtitle track.
     */
    name?: string;

    /**
     * Arbitrary metadata set for the live stream subtitle track. Max 255 characters.
     */
    passthrough?: string;

    /**
     * Unique identifiers for existing Transcription Vocabularies to use while
     * generating subtitles for the live stream. If the Transcription Vocabularies
     * provided collectively have more than 1000 phrases, only the first 1000 phrases
     * will be included.
     */
    transcription_vocabulary_ids?: Array<string>;
  }
}
