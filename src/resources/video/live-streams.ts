// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as AssetsAPI from './assets';
import { BasePage, type BasePageParams } from '../../pagination';

export class LiveStreams extends APIResource {
  /**
   * Creates a new live stream. Once created, an encoder can connect to Mux via the
   * specified stream key and begin streaming to an audience.
   */
  create(body: LiveStreamCreateParams, options?: Core.RequestOptions): Core.APIPromise<LiveStream> {
    return (
      this._client.post('/video/v1/live-streams', { body, ...options }) as Core.APIPromise<{
        data: LiveStream;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Retrieves the details of a live stream that has previously been created. Supply
   * the unique live stream ID that was returned from your previous request, and Mux
   * will return the corresponding live stream information. The same information is
   * returned when creating a live stream.
   */
  retrieve(liveStreamId: string, options?: Core.RequestOptions): Core.APIPromise<LiveStream> {
    return (
      this._client.get(`/video/v1/live-streams/${liveStreamId}`, options) as Core.APIPromise<{
        data: LiveStream;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Updates the parameters of a previously-created live stream. This currently
   * supports a subset of variables. Supply the live stream ID and the updated
   * parameters and Mux will return the corresponding live stream information. The
   * information returned will be the same after update as for subsequent get live
   * stream requests.
   */
  update(
    liveStreamId: string,
    body: LiveStreamUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LiveStream> {
    return (
      this._client.patch(`/video/v1/live-streams/${liveStreamId}`, { body, ...options }) as Core.APIPromise<{
        data: LiveStream;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Lists the live streams that currently exist in the current environment.
   */
  list(
    query?: LiveStreamListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LiveStreamsBasePage, LiveStream>;
  list(options?: Core.RequestOptions): Core.PagePromise<LiveStreamsBasePage, LiveStream>;
  list(
    query: LiveStreamListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LiveStreamsBasePage, LiveStream> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/video/v1/live-streams', LiveStreamsBasePage, { query, ...options });
  }

  /**
   * Deletes a live stream from the current environment. If the live stream is
   * currently active and being streamed to, ingest will be terminated and the
   * encoder will be disconnected.
   */
  delete(liveStreamId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/video/v1/live-streams/${liveStreamId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
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
  complete(liveStreamId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/video/v1/live-streams/${liveStreamId}/complete`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Create a new playback ID for this live stream, through which a viewer can watch
   * the streamed content of the live stream.
   */
  createPlaybackId(
    liveStreamId: string,
    body: LiveStreamCreatePlaybackIDParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.PlaybackID> {
    return (
      this._client.post(`/video/v1/live-streams/${liveStreamId}/playback-ids`, {
        body,
        ...options,
      }) as Core.APIPromise<{ data: Shared.PlaybackID }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Create a simulcast target for the parent live stream. Simulcast target can only
   * be created when the parent live stream is in idle state. Only one simulcast
   * target can be created at a time with this API.
   */
  createSimulcastTarget(
    liveStreamId: string,
    body: LiveStreamCreateSimulcastTargetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SimulcastTarget> {
    return (
      this._client.post(`/video/v1/live-streams/${liveStreamId}/simulcast-targets`, {
        body,
        ...options,
      }) as Core.APIPromise<{ data: SimulcastTarget }>
    )._thenUnwrap((obj) => obj.data);
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
  ): Core.APIPromise<void> {
    return this._client.delete(`/video/v1/live-streams/${liveStreamId}/playback-ids/${playbackId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
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
  ): Core.APIPromise<void> {
    return this._client.delete(
      `/video/v1/live-streams/${liveStreamId}/simulcast-targets/${simulcastTargetId}`,
      { ...options, headers: { Accept: '*/*', ...options?.headers } },
    );
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
  disable(liveStreamId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/video/v1/live-streams/${liveStreamId}/disable`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Enables a live stream, allowing it to accept an incoming RTMP stream.
   */
  enable(liveStreamId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/video/v1/live-streams/${liveStreamId}/enable`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Reset a live stream key if you want to immediately stop the current stream key
   * from working and create a new stream key that can be used for future broadcasts.
   */
  resetStreamKey(liveStreamId: string, options?: Core.RequestOptions): Core.APIPromise<LiveStream> {
    return (
      this._client.post(
        `/video/v1/live-streams/${liveStreamId}/reset-stream-key`,
        options,
      ) as Core.APIPromise<{ data: LiveStream }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Fetches information about a live stream's playback ID, through which a viewer
   * can watch the streamed content from this live stream.
   */
  retrievePlaybackId(
    liveStreamId: string,
    playbackId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.PlaybackID> {
    return (
      this._client.get(
        `/video/v1/live-streams/${liveStreamId}/playback-ids/${playbackId}`,
        options,
      ) as Core.APIPromise<{ data: Shared.PlaybackID }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Retrieves the details of the simulcast target created for the parent live
   * stream. Supply the unique live stream ID and simulcast target ID that was
   * returned in the response of create simulcast target request, and Mux will return
   * the corresponding information.
   */
  retrieveSimulcastTarget(
    liveStreamId: string,
    simulcastTargetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SimulcastTarget> {
    return (
      this._client.get(
        `/video/v1/live-streams/${liveStreamId}/simulcast-targets/${simulcastTargetId}`,
        options,
      ) as Core.APIPromise<{ data: SimulcastTarget }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Configures a live stream to receive embedded closed captions. The resulting
   * Asset's subtitle text track will have `closed_captions: true` set.
   */
  updateEmbeddedSubtitles(
    liveStreamId: string,
    body: LiveStreamUpdateEmbeddedSubtitlesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LiveStream> {
    return (
      this._client.put(`/video/v1/live-streams/${liveStreamId}/embedded-subtitles`, {
        body,
        ...options,
      }) as Core.APIPromise<{ data: LiveStream }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Updates a live stream's automatic-speech-recognition-generated subtitle
   * configuration. Automatic speech recognition subtitles can be removed by sending
   * an empty array in the request payload.
   */
  updateGeneratedSubtitles(
    liveStreamId: string,
    body: LiveStreamUpdateGeneratedSubtitlesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LiveStream> {
    return (
      this._client.put(`/video/v1/live-streams/${liveStreamId}/generated-subtitles`, {
        body,
        ...options,
      }) as Core.APIPromise<{ data: LiveStream }>
    )._thenUnwrap((obj) => obj.data);
  }
}

export class LiveStreamsBasePage extends BasePage<LiveStream> {}

export interface LiveStream {
  /**
   * Unique identifier for the Live Stream. Max 255 characters.
   */
  id: string;

  /**
   * Time the Live Stream was created, defined as a Unix timestamp (seconds since
   * epoch).
   */
  created_at: string;

  /**
   * Latency is the time from when the streamer transmits a frame of video to when
   * you see it in the player. Set this as an alternative to setting low latency or
   * reduced latency flags.
   */
  latency_mode: 'low' | 'reduced' | 'standard';

  /**
   * The time in seconds a live stream may be continuously active before being
   * disconnected. Defaults to 12 hours.
   */
  max_continuous_duration: number;

  /**
   * `idle` indicates that there is no active broadcast. `active` indicates that
   * there is an active broadcast and `disabled` status indicates that no future RTMP
   * streams can be published.
   */
  status: 'active' | 'idle' | 'disabled';

  /**
   * Unique key used for streaming to a Mux RTMP endpoint. This should be considered
   * as sensitive as credentials, anyone with this stream key can begin streaming.
   */
  stream_key: string;

  /**
   * The Asset that is currently being created if there is an active broadcast.
   */
  active_asset_id?: string;

  /**
   * The protocol used for the active ingest stream. This is only set when the live
   * stream is active.
   */
  active_ingest_protocol?: 'rtmp' | 'srt';

  /**
   * The live stream only processes the audio track if the value is set to true. Mux
   * drops the video track if broadcasted.
   */
  audio_only?: boolean;

  /**
   * Describes the embedded closed caption configuration of the incoming live stream.
   */
  embedded_subtitles?: Array<LiveStream.EmbeddedSubtitle>;

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
  generated_subtitles?: Array<LiveStream.GeneratedSubtitle>;

  /**
   * @deprecated This field is deprecated. Please use `latency_mode` instead. Latency
   * is the time from when the streamer transmits a frame of video to when you see it
   * in the player. Setting this option will enable compatibility with the LL-HLS
   * specification for low-latency streaming. This typically has lower latency than
   * Reduced Latency streams, and cannot be combined with Reduced Latency.
   */
  low_latency?: boolean;

  new_asset_settings?: AssetsAPI.AssetOptions;

  /**
   * Arbitrary user-supplied metadata set for the asset. Max 255 characters.
   */
  passthrough?: string;

  /**
   * An array of Playback ID objects. Use these to create HLS playback URLs. See
   * [Play your videos](https://docs.mux.com/guides/play-your-videos) for more
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
   * @deprecated This field is deprecated. Please use `latency_mode` instead. Latency
   * is the time from when the streamer transmits a frame of video to when you see it
   * in the player. Set this if you want lower latency for your live stream. See the
   * [Reduce live stream latency guide](https://docs.mux.com/guides/reduce-live-stream-latency)
   * to understand the tradeoffs.
   */
  reduced_latency?: boolean;

  /**
   * Each Simulcast Target contains configuration details to broadcast (or
   * "restream") a live stream to a third-party streaming service.
   * [See the Stream live to 3rd party platforms guide](https://docs.mux.com/guides/stream-live-to-3rd-party-platforms).
   */
  simulcast_targets?: Array<SimulcastTarget>;

  /**
   * Unique key used for encrypting a stream to a Mux SRT endpoint.
   */
  srt_passphrase?: string;

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
  export interface EmbeddedSubtitle {
    /**
     * CEA-608 caption channel to read data from.
     */
    language_channel: 'cc1' | 'cc2' | 'cc3' | 'cc4';

    /**
     * The language of the closed caption stream. Value must be BCP 47 compliant.
     */
    language_code: string;

    /**
     * A name for this live stream closed caption track.
     */
    name: string;

    /**
     * Arbitrary user-supplied metadata set for the live stream closed caption track.
     * Max 255 characters.
     */
    passthrough?: string;
  }

  export interface GeneratedSubtitle {
    /**
     * The language to generate subtitles in.
     */
    language_code: 'en' | 'en-US';

    /**
     * A name for this live stream subtitle track.
     */
    name: string;

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

export interface SimulcastTarget {
  /**
   * ID of the Simulcast Target
   */
  id: string;

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
   *   When a simulcast target has this status it will have an `error_severity` field
   *   with more details about the error.
   */
  status: 'idle' | 'starting' | 'broadcasting' | 'errored';

  /**
   * The RTMP(s) or SRT endpoint for a simulcast destination.
   *
   * - For RTMP(s) destinations, this should include the application name for the
   *   third party live streaming service, for example:
   *   `rtmp://live.example.com/app`.
   * - For SRT destinations, this should be a fully formed SRT connection string, for
   *   example:
   *   `srt://srt-live.example.com:1234?streamid={stream_key}&passphrase={srt_passphrase}`.
   *
   * Note: SRT simulcast targets can only be used when an source is connected over
   * SRT.
   */
  url: string;

  /**
   * The severity of the error encountered by the simulcast target. This field is
   * only set when the simulcast target is in the `errored` status. See the values of
   * severities below and their descriptions.
   *
   * - `normal`: The simulcast target encountered an error either while attempting to
   *   connect to the third party live streaming service, or mid-broadcasting. A
   *   simulcast may transition back into the broadcasting state if a connection with
   *   the service can be re-established.
   * - `fatal`: The simulcast target is incompatible with the current input to the
   *   parent live stream. No further attempts to this simulcast target will be made
   *   for the current live stream asset.
   */
  error_severity?: 'normal' | 'fatal';

  /**
   * Arbitrary user-supplied metadata set when creating a simulcast target.
   */
  passthrough?: string;

  /**
   * Stream Key represents a stream identifier on the third party live streaming
   * service to send the parent live stream to. Only used for RTMP(s) simulcast
   * destinations.
   */
  stream_key?: string;
}

export interface LiveStreamCreateParams {
  /**
   * An array of playback policy objects that you want applied on this live stream
   * and available through `playback_ids`. `advanced_playback_policies` must be used
   * instead of `playback_policies` when creating a DRM playback ID.
   */
  advanced_playback_policies?: Array<LiveStreamCreateParams.AdvancedPlaybackPolicy>;

  /**
   * Force the live stream to only process the audio track when the value is set to
   * true. Mux drops the video track if broadcasted.
   */
  audio_only?: boolean;

  /**
   * Describe the embedded closed caption contents of the incoming live stream.
   */
  embedded_subtitles?: Array<LiveStreamCreateParams.EmbeddedSubtitle>;

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
  generated_subtitles?: Array<LiveStreamCreateParams.GeneratedSubtitle>;

  /**
   * Latency is the time from when the streamer transmits a frame of video to when
   * you see it in the player. Set this as an alternative to setting low latency or
   * reduced latency flags.
   */
  latency_mode?: 'low' | 'reduced' | 'standard';

  /**
   * This field is deprecated. Please use `latency_mode` instead. Latency is the time
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

  new_asset_settings?: AssetsAPI.AssetOptions;

  passthrough?: string;

  /**
   * An array of playback policy names that you want applied to this live stream and
   * available through `playback_ids`. Options include:
   *
   * - `"public"` (anyone with the playback URL can stream the live stream).
   * - `"signed"` (an additional access token is required to play the live stream).
   *
   * If no `playback_policies` is set, the live stream will have no playback IDs and
   * will therefore not be playable. For simplicity, a single string name can be used
   * in place of the array in the case of only one playback policy.
   */
  playback_policies?: Array<Shared.PlaybackPolicy>;

  /**
   * Deprecated. Use `playback_policies` instead, which accepts an identical type.
   */
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
   * This field is deprecated. Please use `latency_mode` instead. Latency is the time
   * from when the streamer transmits a frame of video to when you see it in the
   * player. Set this if you want lower latency for your live stream. Read more here:
   * https://mux.com/blog/reduced-latency-for-mux-live-streaming-now-available/
   */
  reduced_latency?: boolean;

  simulcast_targets?: Array<LiveStreamCreateParams.SimulcastTarget>;

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

  export interface EmbeddedSubtitle {
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

  export interface GeneratedSubtitle {
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

  export interface SimulcastTarget {
    /**
     * The RTMP(s) or SRT endpoint for a simulcast destination.
     *
     * - For RTMP(s) destinations, this should include the application name for the
     *   third party live streaming service, for example:
     *   `rtmp://live.example.com/app`.
     * - For SRT destinations, this should be a fully formed SRT connection string, for
     *   example:
     *   `srt://srt-live.example.com:1234?streamid={stream_key}&passphrase={srt_passphrase}`.
     *
     * Note: SRT simulcast targets can only be used when an source is connected over
     * SRT.
     */
    url: string;

    /**
     * Arbitrary user-supplied metadata set by you when creating a simulcast target.
     */
    passthrough?: string;

    /**
     * Stream Key represents a stream identifier on the third party live streaming
     * service to send the parent live stream to. Only used for RTMP(s) simulcast
     * destinations.
     */
    stream_key?: string;
  }
}

export interface LiveStreamUpdateParams {
  /**
   * Latency is the time from when the streamer transmits a frame of video to when
   * you see it in the player. Set this as an alternative to setting low latency or
   * reduced latency flags.
   */
  latency_mode?: 'low' | 'reduced' | 'standard';

  /**
   * The time in seconds a live stream may be continuously active before being
   * disconnected. Defaults to 12 hours.
   */
  max_continuous_duration?: number;

  /**
   * Updates the new asset settings to use to generate a new asset for this live
   * stream. Only the `mp4_support`, `master_access`, and `video_quality` settings
   * may be updated.
   */
  new_asset_settings?: LiveStreamUpdateParams.NewAssetSettings;

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

export namespace LiveStreamUpdateParams {
  /**
   * Updates the new asset settings to use to generate a new asset for this live
   * stream. Only the `mp4_support`, `master_access`, and `video_quality` settings
   * may be updated.
   */
  export interface NewAssetSettings {
    /**
     * Add or remove access to the master version of the video.
     */
    master_access?: 'temporary' | 'none';

    /**
     * Customer provided metadata about this asset.
     *
     * Note: This metadata may be publicly available via the video player. Do not
     * include PII or sensitive information.
     */
    meta?: NewAssetSettings.Meta;

    /**
     * @deprecated Deprecated. See the
     * [Static Renditions API](https://www.mux.com/docs/guides/enable-static-mp4-renditions#during-live-stream-creation)
     * for the updated API. Specify what level of support for mp4 playback should be
     * added to new assets generated from this live stream.
     *
     * - The `none` option disables MP4 support for new assets. MP4 files will not be
     *   produced for an asset generated from this live stream.
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
     * - The `standard`(deprecated) option produces up to three MP4 files with
     *   different levels of resolution (`high.mp4`, `medium.mp4`, `low.mp4`, or
     *   `audio.m4a` for an audio-only asset).
     */
    mp4_support?: 'none' | 'standard' | 'capped-1080p' | 'audio-only' | 'audio-only,capped-1080p';

    /**
     * The video quality controls the cost, quality, and available platform features
     * for the asset.
     * [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)
     */
    video_quality?: 'plus' | 'premium';
  }

  export namespace NewAssetSettings {
    /**
     * Customer provided metadata about this asset.
     *
     * Note: This metadata may be publicly available via the video player. Do not
     * include PII or sensitive information.
     */
    export interface Meta {
      /**
       * This is an identifier you provide to keep track of the creator of the asset. Max
       * 128 code points.
       */
      creator_id?: string;

      /**
       * This is an identifier you provide to link the asset to your own data. Max 128
       * code points.
       */
      external_id?: string;

      /**
       * The asset title. Max 512 code points.
       */
      title?: string;
    }
  }
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

export interface LiveStreamCreateSimulcastTargetParams {
  /**
   * The RTMP(s) or SRT endpoint for a simulcast destination.
   *
   * - For RTMP(s) destinations, this should include the application name for the
   *   third party live streaming service, for example:
   *   `rtmp://live.example.com/app`.
   * - For SRT destinations, this should be a fully formed SRT connection string, for
   *   example:
   *   `srt://srt-live.example.com:1234?streamid={stream_key}&passphrase={srt_passphrase}`.
   *
   * Note: SRT simulcast targets can only be used when an source is connected over
   * SRT.
   */
  url: string;

  /**
   * Arbitrary user-supplied metadata set by you when creating a simulcast target.
   */
  passthrough?: string;

  /**
   * Stream Key represents a stream identifier on the third party live streaming
   * service to send the parent live stream to. Only used for RTMP(s) simulcast
   * destinations.
   */
  stream_key?: string;
}

export interface LiveStreamUpdateEmbeddedSubtitlesParams {
  /**
   * Describe the embedded closed caption contents of the incoming live stream.
   */
  embedded_subtitles?: Array<LiveStreamUpdateEmbeddedSubtitlesParams.EmbeddedSubtitle>;
}

export namespace LiveStreamUpdateEmbeddedSubtitlesParams {
  export interface EmbeddedSubtitle {
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
  generated_subtitles?: Array<LiveStreamUpdateGeneratedSubtitlesParams.GeneratedSubtitle>;
}

export namespace LiveStreamUpdateGeneratedSubtitlesParams {
  export interface GeneratedSubtitle {
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

LiveStreams.LiveStreamsBasePage = LiveStreamsBasePage;

export declare namespace LiveStreams {
  export {
    type LiveStream as LiveStream,
    type SimulcastTarget as SimulcastTarget,
    LiveStreamsBasePage as LiveStreamsBasePage,
    type LiveStreamCreateParams as LiveStreamCreateParams,
    type LiveStreamUpdateParams as LiveStreamUpdateParams,
    type LiveStreamListParams as LiveStreamListParams,
    type LiveStreamCreatePlaybackIDParams as LiveStreamCreatePlaybackIDParams,
    type LiveStreamCreateSimulcastTargetParams as LiveStreamCreateSimulcastTargetParams,
    type LiveStreamUpdateEmbeddedSubtitlesParams as LiveStreamUpdateEmbeddedSubtitlesParams,
    type LiveStreamUpdateGeneratedSubtitlesParams as LiveStreamUpdateGeneratedSubtitlesParams,
  };
}
