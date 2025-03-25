// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as AssetsAPI from './video/assets';
import * as LiveStreamsAPI from './video/live-streams';
import * as UploadsAPI from './video/uploads';

export class Webhooks extends APIResource {
  unwrap(body: string): UnwrapWebhookEvent {
    return JSON.parse(body) as UnwrapWebhookEvent;
  }
}

export interface BaseWebhookEvent {
  /**
   * Unique identifier for the event
   */
  id: string;

  /**
   * Attempts for sending out the webhook event
   */
  attempts: Array<BaseWebhookEvent.Attempt>;

  /**
   * Time the event was created
   */
  created_at: string;

  data: unknown;

  environment: BaseWebhookEvent.Environment;

  object: BaseWebhookEvent.Object;

  type: string;

  /**
   * @deprecated
   */
  accessor?: string | null;

  /**
   * @deprecated
   */
  accessor_source?: string | null;

  /**
   * @deprecated
   */
  request_id?: string | null;
}

export namespace BaseWebhookEvent {
  export interface Attempt {
    /**
     * Unique identifier for the webhook attempt
     */
    id?: string;

    /**
     * URL address for the webhook attempt
     */
    address?: string;

    /**
     * Time the webhook request was attempted
     */
    created_at?: string;

    /**
     * Max attempts number for the webhook attempt
     */
    max_attempts?: number;

    /**
     * HTTP response body for the webhook attempt
     */
    response_body?: string | null;

    /**
     * HTTP response headers for the webhook attempt
     */
    response_headers?: unknown;

    /**
     * HTTP response status code for the webhook attempt
     */
    response_status_code?: number;

    /**
     * Unique identifier for the webhook
     */
    webhook_id?: number;
  }

  export interface Environment {
    /**
     * Unique identifier for the environment
     */
    id: string;

    /**
     * Name for the environment
     */
    name: string;
  }

  export interface Object {
    id: string;

    type: string;
  }
}

export interface VideoAssetCreatedWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.created';
}

export interface VideoAssetReadyWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.ready';
}

export interface VideoAssetErroredWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.errored';
}

export interface VideoAssetUpdatedWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.updated';
}

export interface VideoAssetDeletedWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.deleted';
}

export interface VideoAssetLiveStreamCompletedWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.live_stream_completed';
}

export interface VideoAssetStaticRenditionsReadyWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.static_renditions.ready';
}

export interface VideoAssetStaticRenditionsPreparingWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.static_renditions.preparing';
}

export interface VideoAssetStaticRenditionsDeletedWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.static_renditions.deleted';
}

export interface VideoAssetStaticRenditionsErroredWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.static_renditions.errored';
}

export interface VideoAssetMasterReadyWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.master.ready';
}

export interface VideoAssetMasterPreparingWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.master.preparing';
}

export interface VideoAssetMasterDeletedWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.master.deleted';
}

export interface VideoAssetMasterErroredWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.master.errored';
}

export interface VideoAssetTrackCreatedWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Track;

  type: 'video.asset.track.created';
}

export interface VideoAssetTrackReadyWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Track;

  type: 'video.asset.track.ready';
}

export interface VideoAssetTrackErroredWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Track;

  type: 'video.asset.track.errored';
}

export interface VideoAssetTrackDeletedWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Track;

  type: 'video.asset.track.deleted';
}

export interface VideoAssetStaticRenditionCreatedWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.static_rendition.created';
}

export interface VideoAssetStaticRenditionReadyWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.static_rendition.ready';
}

export interface VideoAssetStaticRenditionErroredWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.static_rendition.errored';
}

export interface VideoAssetStaticRenditionDeletedWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.static_rendition.deleted';
}

export interface VideoAssetStaticRenditionSkippedWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.static_rendition.skipped';
}

export interface VideoAssetWarningWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.warning';
}

export interface VideoAssetNonStandardInputDetectedWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.non_standard_input_detected';
}

export interface VideoUploadAssetCreatedWebhookEvent extends BaseWebhookEvent {
  data: UploadsAPI.Upload;

  type: 'video.upload.asset_created';
}

export interface VideoUploadCancelledWebhookEvent extends BaseWebhookEvent {
  data: UploadsAPI.Upload;

  type: 'video.upload.cancelled';
}

export interface VideoUploadCreatedWebhookEvent extends BaseWebhookEvent {
  data: UploadsAPI.Upload;

  type: 'video.upload.created';
}

export interface VideoUploadErroredWebhookEvent extends BaseWebhookEvent {
  data: UploadsAPI.Upload;

  type: 'video.upload.errored';
}

export interface VideoLiveStreamCreatedWebhookEvent extends BaseWebhookEvent {
  data: LiveStreamsAPI.LiveStream;

  type: 'video.live_stream.created';
}

export interface VideoLiveStreamConnectedWebhookEvent extends BaseWebhookEvent {
  data: LiveStreamsAPI.LiveStream;

  type: 'video.live_stream.connected';
}

export interface VideoLiveStreamRecordingWebhookEvent extends BaseWebhookEvent {
  data: LiveStreamsAPI.LiveStream;

  type: 'video.live_stream.recording';
}

export interface VideoLiveStreamActiveWebhookEvent extends BaseWebhookEvent {
  data: LiveStreamsAPI.LiveStream;

  type: 'video.live_stream.active';
}

export interface VideoLiveStreamDisconnectedWebhookEvent extends BaseWebhookEvent {
  data: LiveStreamsAPI.LiveStream;

  type: 'video.live_stream.disconnected';
}

export interface VideoLiveStreamIdleWebhookEvent extends BaseWebhookEvent {
  data: LiveStreamsAPI.LiveStream;

  type: 'video.live_stream.idle';
}

export interface VideoLiveStreamUpdatedWebhookEvent extends BaseWebhookEvent {
  data: LiveStreamsAPI.LiveStream;

  type: 'video.live_stream.updated';
}

export interface VideoLiveStreamEnabledWebhookEvent extends BaseWebhookEvent {
  data: LiveStreamsAPI.LiveStream;

  type: 'video.live_stream.enabled';
}

export interface VideoLiveStreamDisabledWebhookEvent extends BaseWebhookEvent {
  data: LiveStreamsAPI.LiveStream;

  type: 'video.live_stream.disabled';
}

export interface VideoLiveStreamDeletedWebhookEvent extends BaseWebhookEvent {
  data: LiveStreamsAPI.LiveStream;

  type: 'video.live_stream.deleted';
}

export interface VideoLiveStreamWarningWebhookEvent extends BaseWebhookEvent {
  data: LiveStreamsAPI.LiveStream;

  type: 'video.live_stream.warning';
}

export interface VideoLiveStreamSimulcastTargetCreatedWebhookEvent extends BaseWebhookEvent {
  data: LiveStreamsAPI.SimulcastTarget;

  type: 'video.live_stream.simulcast_target.created';
}

export interface VideoLiveStreamSimulcastTargetIdleWebhookEvent extends BaseWebhookEvent {
  data: LiveStreamsAPI.SimulcastTarget;

  type: 'video.live_stream.simulcast_target.idle';
}

export interface VideoLiveStreamSimulcastTargetStartingWebhookEvent extends BaseWebhookEvent {
  data: LiveStreamsAPI.SimulcastTarget;

  type: 'video.live_stream.simulcast_target.starting';
}

export interface VideoLiveStreamSimulcastTargetBroadcastingWebhookEvent extends BaseWebhookEvent {
  data: LiveStreamsAPI.SimulcastTarget;

  type: 'video.live_stream.simulcast_target.broadcasting';
}

export interface VideoLiveStreamSimulcastTargetErroredWebhookEvent extends BaseWebhookEvent {
  data: LiveStreamsAPI.SimulcastTarget;

  type: 'video.live_stream.simulcast_target.errored';
}

export interface VideoLiveStreamSimulcastTargetDeletedWebhookEvent extends BaseWebhookEvent {
  data: LiveStreamsAPI.SimulcastTarget;

  type: 'video.live_stream.simulcast_target.deleted';
}

export interface VideoLiveStreamSimulcastTargetUpdatedWebhookEvent extends BaseWebhookEvent {
  data: LiveStreamsAPI.SimulcastTarget;

  type: 'video.live_stream.simulcast_target.updated';
}

export interface VideoDeliveryHighTrafficWebhookEvent extends BaseWebhookEvent {
  data: VideoDeliveryHighTrafficWebhookEvent.Data;

  type: 'video.delivery.high_traffic';
}

export namespace VideoDeliveryHighTrafficWebhookEvent {
  export interface Data {
    id?: string;

    data?: Array<Data.Data>;

    /**
     * Current threshold set for alerting
     */
    threshold?: number;

    timeframe?: Array<number>;
  }

  export namespace Data {
    export interface Data {
      /**
       * The duration of the asset in seconds.
       */
      asset_duration?: number;

      /**
       * @deprecated This field is deprecated. Please use `asset_video_quality` instead.
       * The encoding tier that the asset was ingested at.
       * [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)
       */
      asset_encoding_tier?: 'smart' | 'baseline' | 'premium';

      /**
       * Unique identifier for the asset.
       */
      asset_id?: string;

      /**
       * The resolution tier that the asset was ingested at, affecting billing for ingest
       * & storage
       */
      asset_resolution_tier?: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p';

      /**
       * The state of the asset.
       */
      asset_state?: 'ready' | 'errored' | 'deleted';

      /**
       * The video quality that the asset was ingested at. This field replaces
       * `asset_encoding_tier`.
       * [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)
       */
      asset_video_quality?: 'basic' | 'plus' | 'premium';

      /**
       * Time at which the asset was created. Measured in seconds since the Unix epoch.
       */
      created_at?: number;

      /**
       * If exists, time at which the asset was deleted. Measured in seconds since the
       * Unix epoch.
       */
      deleted_at?: number;

      /**
       * Total number of delivered seconds during this time window.
       */
      delivered_seconds?: number;

      /**
       * Seconds delivered broken into resolution tiers. Each tier will only be displayed
       * if there was content delivered in the tier.
       */
      delivered_seconds_by_resolution?: Data.DeliveredSecondsByResolution;

      /**
       * Unique identifier for the live stream that created the asset.
       */
      live_stream_id?: string;

      /**
       * The `passthrough` value for the asset.
       */
      passthrough?: string;
    }

    export namespace Data {
      /**
       * Seconds delivered broken into resolution tiers. Each tier will only be displayed
       * if there was content delivered in the tier.
       */
      export interface DeliveredSecondsByResolution {
        /**
         * Total number of delivered seconds during this time window that had a resolution
         * larger than the 720p tier but less than or equal to the 1440p tier (over 921,600
         * and <= 2,073,600 pixels total).
         */
        tier_1080p?: number;

        /**
         * Total number of delivered seconds during this time window that had a resolution
         * larger than the 1080p tier but less than or equal to the 2160p tier (over
         * 2,073,600 and <= 4,194,304 pixels total).
         */
        tier_1440p?: number;

        /**
         * Total number of delivered seconds during this time window that had a resolution
         * larger than the 1440p tier (over 4,194,304 pixels total).
         */
        tier_2160p?: number;

        /**
         * Total number of delivered seconds during this time window that had a resolution
         * within the 720p tier (up to 921,600 pixels total, based on typical 1280x720).
         */
        tier_720p?: number;

        /**
         * Total number of delivered seconds during this time window that had a resolution
         * of audio only.
         */
        tier_audio_only?: number;
      }
    }
  }
}

export type UnwrapWebhookEvent =
  | VideoAssetCreatedWebhookEvent
  | VideoAssetReadyWebhookEvent
  | VideoAssetErroredWebhookEvent
  | VideoAssetUpdatedWebhookEvent
  | VideoAssetDeletedWebhookEvent
  | VideoAssetLiveStreamCompletedWebhookEvent
  | VideoAssetStaticRenditionsReadyWebhookEvent
  | VideoAssetStaticRenditionsPreparingWebhookEvent
  | VideoAssetStaticRenditionsDeletedWebhookEvent
  | VideoAssetStaticRenditionsErroredWebhookEvent
  | VideoAssetMasterReadyWebhookEvent
  | VideoAssetMasterPreparingWebhookEvent
  | VideoAssetMasterDeletedWebhookEvent
  | VideoAssetMasterErroredWebhookEvent
  | VideoAssetTrackCreatedWebhookEvent
  | VideoAssetTrackReadyWebhookEvent
  | VideoAssetTrackErroredWebhookEvent
  | VideoAssetTrackDeletedWebhookEvent
  | VideoAssetStaticRenditionCreatedWebhookEvent
  | VideoAssetStaticRenditionReadyWebhookEvent
  | VideoAssetStaticRenditionErroredWebhookEvent
  | VideoAssetStaticRenditionDeletedWebhookEvent
  | VideoAssetStaticRenditionSkippedWebhookEvent
  | VideoAssetWarningWebhookEvent
  | VideoAssetNonStandardInputDetectedWebhookEvent
  | VideoUploadAssetCreatedWebhookEvent
  | VideoUploadCancelledWebhookEvent
  | VideoUploadCreatedWebhookEvent
  | VideoUploadErroredWebhookEvent
  | VideoLiveStreamCreatedWebhookEvent
  | VideoLiveStreamConnectedWebhookEvent
  | VideoLiveStreamRecordingWebhookEvent
  | VideoLiveStreamActiveWebhookEvent
  | VideoLiveStreamDisconnectedWebhookEvent
  | VideoLiveStreamIdleWebhookEvent
  | VideoLiveStreamUpdatedWebhookEvent
  | VideoLiveStreamEnabledWebhookEvent
  | VideoLiveStreamDisabledWebhookEvent
  | VideoLiveStreamDeletedWebhookEvent
  | VideoLiveStreamWarningWebhookEvent
  | VideoLiveStreamSimulcastTargetCreatedWebhookEvent
  | VideoLiveStreamSimulcastTargetIdleWebhookEvent
  | VideoLiveStreamSimulcastTargetStartingWebhookEvent
  | VideoLiveStreamSimulcastTargetBroadcastingWebhookEvent
  | VideoLiveStreamSimulcastTargetErroredWebhookEvent
  | VideoLiveStreamSimulcastTargetDeletedWebhookEvent
  | VideoLiveStreamSimulcastTargetUpdatedWebhookEvent
  | VideoDeliveryHighTrafficWebhookEvent;

export declare namespace Webhooks {
  export {
    type BaseWebhookEvent as BaseWebhookEvent,
    type VideoAssetCreatedWebhookEvent as VideoAssetCreatedWebhookEvent,
    type VideoAssetReadyWebhookEvent as VideoAssetReadyWebhookEvent,
    type VideoAssetErroredWebhookEvent as VideoAssetErroredWebhookEvent,
    type VideoAssetUpdatedWebhookEvent as VideoAssetUpdatedWebhookEvent,
    type VideoAssetDeletedWebhookEvent as VideoAssetDeletedWebhookEvent,
    type VideoAssetLiveStreamCompletedWebhookEvent as VideoAssetLiveStreamCompletedWebhookEvent,
    type VideoAssetStaticRenditionsReadyWebhookEvent as VideoAssetStaticRenditionsReadyWebhookEvent,
    type VideoAssetStaticRenditionsPreparingWebhookEvent as VideoAssetStaticRenditionsPreparingWebhookEvent,
    type VideoAssetStaticRenditionsDeletedWebhookEvent as VideoAssetStaticRenditionsDeletedWebhookEvent,
    type VideoAssetStaticRenditionsErroredWebhookEvent as VideoAssetStaticRenditionsErroredWebhookEvent,
    type VideoAssetMasterReadyWebhookEvent as VideoAssetMasterReadyWebhookEvent,
    type VideoAssetMasterPreparingWebhookEvent as VideoAssetMasterPreparingWebhookEvent,
    type VideoAssetMasterDeletedWebhookEvent as VideoAssetMasterDeletedWebhookEvent,
    type VideoAssetMasterErroredWebhookEvent as VideoAssetMasterErroredWebhookEvent,
    type VideoAssetTrackCreatedWebhookEvent as VideoAssetTrackCreatedWebhookEvent,
    type VideoAssetTrackReadyWebhookEvent as VideoAssetTrackReadyWebhookEvent,
    type VideoAssetTrackErroredWebhookEvent as VideoAssetTrackErroredWebhookEvent,
    type VideoAssetTrackDeletedWebhookEvent as VideoAssetTrackDeletedWebhookEvent,
    type VideoAssetStaticRenditionCreatedWebhookEvent as VideoAssetStaticRenditionCreatedWebhookEvent,
    type VideoAssetStaticRenditionReadyWebhookEvent as VideoAssetStaticRenditionReadyWebhookEvent,
    type VideoAssetStaticRenditionErroredWebhookEvent as VideoAssetStaticRenditionErroredWebhookEvent,
    type VideoAssetStaticRenditionDeletedWebhookEvent as VideoAssetStaticRenditionDeletedWebhookEvent,
    type VideoAssetStaticRenditionSkippedWebhookEvent as VideoAssetStaticRenditionSkippedWebhookEvent,
    type VideoAssetWarningWebhookEvent as VideoAssetWarningWebhookEvent,
    type VideoAssetNonStandardInputDetectedWebhookEvent as VideoAssetNonStandardInputDetectedWebhookEvent,
    type VideoUploadAssetCreatedWebhookEvent as VideoUploadAssetCreatedWebhookEvent,
    type VideoUploadCancelledWebhookEvent as VideoUploadCancelledWebhookEvent,
    type VideoUploadCreatedWebhookEvent as VideoUploadCreatedWebhookEvent,
    type VideoUploadErroredWebhookEvent as VideoUploadErroredWebhookEvent,
    type VideoLiveStreamCreatedWebhookEvent as VideoLiveStreamCreatedWebhookEvent,
    type VideoLiveStreamConnectedWebhookEvent as VideoLiveStreamConnectedWebhookEvent,
    type VideoLiveStreamRecordingWebhookEvent as VideoLiveStreamRecordingWebhookEvent,
    type VideoLiveStreamActiveWebhookEvent as VideoLiveStreamActiveWebhookEvent,
    type VideoLiveStreamDisconnectedWebhookEvent as VideoLiveStreamDisconnectedWebhookEvent,
    type VideoLiveStreamIdleWebhookEvent as VideoLiveStreamIdleWebhookEvent,
    type VideoLiveStreamUpdatedWebhookEvent as VideoLiveStreamUpdatedWebhookEvent,
    type VideoLiveStreamEnabledWebhookEvent as VideoLiveStreamEnabledWebhookEvent,
    type VideoLiveStreamDisabledWebhookEvent as VideoLiveStreamDisabledWebhookEvent,
    type VideoLiveStreamDeletedWebhookEvent as VideoLiveStreamDeletedWebhookEvent,
    type VideoLiveStreamWarningWebhookEvent as VideoLiveStreamWarningWebhookEvent,
    type VideoLiveStreamSimulcastTargetCreatedWebhookEvent as VideoLiveStreamSimulcastTargetCreatedWebhookEvent,
    type VideoLiveStreamSimulcastTargetIdleWebhookEvent as VideoLiveStreamSimulcastTargetIdleWebhookEvent,
    type VideoLiveStreamSimulcastTargetStartingWebhookEvent as VideoLiveStreamSimulcastTargetStartingWebhookEvent,
    type VideoLiveStreamSimulcastTargetBroadcastingWebhookEvent as VideoLiveStreamSimulcastTargetBroadcastingWebhookEvent,
    type VideoLiveStreamSimulcastTargetErroredWebhookEvent as VideoLiveStreamSimulcastTargetErroredWebhookEvent,
    type VideoLiveStreamSimulcastTargetDeletedWebhookEvent as VideoLiveStreamSimulcastTargetDeletedWebhookEvent,
    type VideoLiveStreamSimulcastTargetUpdatedWebhookEvent as VideoLiveStreamSimulcastTargetUpdatedWebhookEvent,
    type VideoDeliveryHighTrafficWebhookEvent as VideoDeliveryHighTrafficWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
  };
}
