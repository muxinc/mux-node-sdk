// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '@mux/mux-node/resource';
import crypto from 'crypto';
import { getHeader, HeadersLike } from '@mux/mux-node/core';
import * as WebhooksAPI from '@mux/mux-node/resources/webhooks';
import * as AssetsAPI from '@mux/mux-node/resources/video/assets';
import * as LiveStreamsAPI from '@mux/mux-node/resources/video/live-streams';
import * as SpacesAPI from '@mux/mux-node/resources/video/spaces';
import * as UploadsAPI from '@mux/mux-node/resources/video/uploads';

export class Webhooks extends APIResource {
  /**
   * Validates that the given payload was sent by Mux and parses the payload
   */
  unwrap(
    body: string,
    headers: HeadersLike,
    secret: string | undefined | null = this.client.webhookSecret,
  ): UnwrapWebhookEvent {
    this.verifySignature(body, headers, secret);
    const traverse = (value: unknown): unknown => {
      if (Array.isArray(value)) {
        return value.map(traverse);
      }
      if (value !== null && typeof value === 'object') {
        // Mux's webhook event types differ from the normal API calls as instead of an ISO 8601 string
        // we return { nanos: 123456, second: 1234 }. We transform those objects into ISO 8601 strings
        // to conform to the normal api call types.
        if ('nanos' in value && 'seconds' in value) {
          const timeObject = value as { nanos: number; seconds: number };
          const date = new Date((timeObject.nanos + timeObject.seconds * 1e6) / 1e3);
          return date.toISOString();
        }
        return Object.fromEntries(
          Object.entries(value).map(([key, subValue]) => {
            return [key, traverse(subValue)];
          }),
        );
      }
      return value;
    };
    return traverse(JSON.parse(body)) as UnwrapWebhookEvent;
  }

  private parseHeader(header: string, scheme: string) {
    if (typeof header !== 'string') {
      return null;
    }

    return header.split(',').reduce(
      (accum, item) => {
        const kv: string[] = item.split('=');

        if (kv[0] === 't') {
          /* eslint-disable no-param-reassign, prefer-destructuring */
          accum.timestamp = parseInt(kv[1]!, 10);
        }

        if (kv[0] === scheme && typeof kv[1] === 'string') {
          accum.signatures.push(kv[1]);
        }

        return accum;
      },
      {
        timestamp: -1,
        signatures: [] as string[],
      },
    );
  }

  /** Make an assertion, if not `true`, then throw. */
  private assert(expr: unknown, msg = ''): asserts expr {
    if (!expr) {
      throw new Error(msg);
    }
  }

  private computeSignature(payload: string, secret: string | Buffer) {
    return crypto.createHmac('sha256', secret).update(payload, 'utf8').digest('hex');
  }

  /** Compare to array buffers or data views in a way that timing based attacks
   * cannot gain information about the platform. */
  private timingSafeEqual(
    a: ArrayBufferView | ArrayBufferLike | DataView,
    b: ArrayBufferView | ArrayBufferLike | DataView,
  ): boolean {
    if (a.byteLength !== b.byteLength) {
      return false;
    }
    if (!(a instanceof DataView)) {
      a = new DataView(ArrayBuffer.isView(a) ? a.buffer : a);
    }
    if (!(b instanceof DataView)) {
      b = new DataView(ArrayBuffer.isView(b) ? b.buffer : b);
    }
    this.assert(a instanceof DataView);
    this.assert(b instanceof DataView);
    const length = a.byteLength;
    let out = 0;
    let i = -1;
    while (++i < length) {
      out |= a.getUint8(i) ^ b.getUint8(i);
    }
    return out === 0;
  }

  /**
   * Validates whether or not the webhook payload was sent by Mux.
   *
   * If it was not sent by Mux then an error will be raised.
   */
  verifySignature(
    body: string,
    headers: HeadersLike,
    secret: string | undefined | null = this.client.webhookSecret,
  ): void {
    if (!secret) {
      throw new Error(
        "The webhook secret must either be set using the env var, MUX_WEBHOOK_SECRET, on the client class, Mux({ webhookSecret: '123' }), or passed to this function",
      );
    }

    const header = getHeader(headers, 'mux-signature');
    if (!header) {
      throw new Error('Could not find a mux-signature header');
    }

    if (typeof body !== 'string') {
      throw new Error(
        'Webhook body must be passed as the raw JSON string sent from the server (do not parse it first).',
      );
    }

    const details = this.parseHeader(header, 'v1');
    if (!details || details.timestamp === -1) {
      throw new Error('Unable to extract timestamp and signatures from header');
    }

    if (!details.signatures.length) {
      throw new Error('No v1 signatures found');
    }

    const expectedSignature = this.computeSignature(`${details.timestamp}.${body}`, secret);

    const encoder = new TextEncoder();
    const signatureFound = !!details.signatures.filter((sig) =>
      this.timingSafeEqual(encoder.encode(sig), encoder.encode(expectedSignature)),
    ).length;

    if (!signatureFound) {
      throw new Error('No signatures found matching the expected signature for payload.');
    }

    const timestampAge = Math.floor(Date.now() / 1000) - details.timestamp;

    const tolerance = 300; // 5 minutes
    if (timestampAge > tolerance) {
      throw new Error('Webhook timestamp is too old');
    }
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

  accessor?: string | null;

  accessor_source?: string | null;

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

export interface VideoAssetWarningWebhookEvent extends BaseWebhookEvent {
  data: AssetsAPI.Asset;

  type: 'video.asset.warning';
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

export interface VideoSpaceCreatedWebhookEvent extends BaseWebhookEvent {
  data: SpacesAPI.Space;

  type: 'video.space.created';
}

export interface VideoSpaceDeletedWebhookEvent extends BaseWebhookEvent {
  data: SpacesAPI.Space;

  type: 'video.space.deleted';
}

export interface VideoSpaceActiveWebhookEvent extends BaseWebhookEvent {
  data: SpacesAPI.Space;

  type: 'video.space.active';
}

export interface VideoSpaceIdleWebhookEvent extends BaseWebhookEvent {
  data: SpacesAPI.Space;

  type: 'video.space.idle';
}

export interface VideoSpaceUpdatedWebhookEvent extends BaseWebhookEvent {
  data: SpacesAPI.Space;

  type: 'video.space.updated';
}

export interface VideoSpaceBroadcastCreatedWebhookEvent extends BaseWebhookEvent {
  data: SpacesAPI.Broadcast;

  type: 'video.space.broadcast.created';
}

export interface VideoSpaceBroadcastIdleWebhookEvent extends BaseWebhookEvent {
  data: SpacesAPI.Broadcast;

  type: 'video.space.broadcast.idle';
}

export interface VideoSpaceBroadcastActiveWebhookEvent extends BaseWebhookEvent {
  data: SpacesAPI.Broadcast;

  type: 'video.space.broadcast.active';
}

export interface VideoSpaceBroadcastDeletedWebhookEvent extends BaseWebhookEvent {
  data: SpacesAPI.Broadcast;

  type: 'video.space.broadcast.deleted';
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
  | VideoAssetWarningWebhookEvent
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
  | VideoSpaceCreatedWebhookEvent
  | VideoSpaceDeletedWebhookEvent
  | VideoSpaceActiveWebhookEvent
  | VideoSpaceIdleWebhookEvent
  | VideoSpaceUpdatedWebhookEvent
  | VideoSpaceBroadcastCreatedWebhookEvent
  | VideoSpaceBroadcastIdleWebhookEvent
  | VideoSpaceBroadcastActiveWebhookEvent
  | VideoSpaceBroadcastDeletedWebhookEvent
  | VideoDeliveryHighTrafficWebhookEvent;

export namespace Webhooks {
  export import BaseWebhookEvent = WebhooksAPI.BaseWebhookEvent;
  export import VideoAssetCreatedWebhookEvent = WebhooksAPI.VideoAssetCreatedWebhookEvent;
  export import VideoAssetReadyWebhookEvent = WebhooksAPI.VideoAssetReadyWebhookEvent;
  export import VideoAssetErroredWebhookEvent = WebhooksAPI.VideoAssetErroredWebhookEvent;
  export import VideoAssetUpdatedWebhookEvent = WebhooksAPI.VideoAssetUpdatedWebhookEvent;
  export import VideoAssetDeletedWebhookEvent = WebhooksAPI.VideoAssetDeletedWebhookEvent;
  export import VideoAssetLiveStreamCompletedWebhookEvent = WebhooksAPI.VideoAssetLiveStreamCompletedWebhookEvent;
  export import VideoAssetStaticRenditionsReadyWebhookEvent = WebhooksAPI.VideoAssetStaticRenditionsReadyWebhookEvent;
  export import VideoAssetStaticRenditionsPreparingWebhookEvent = WebhooksAPI.VideoAssetStaticRenditionsPreparingWebhookEvent;
  export import VideoAssetStaticRenditionsDeletedWebhookEvent = WebhooksAPI.VideoAssetStaticRenditionsDeletedWebhookEvent;
  export import VideoAssetStaticRenditionsErroredWebhookEvent = WebhooksAPI.VideoAssetStaticRenditionsErroredWebhookEvent;
  export import VideoAssetMasterReadyWebhookEvent = WebhooksAPI.VideoAssetMasterReadyWebhookEvent;
  export import VideoAssetMasterPreparingWebhookEvent = WebhooksAPI.VideoAssetMasterPreparingWebhookEvent;
  export import VideoAssetMasterDeletedWebhookEvent = WebhooksAPI.VideoAssetMasterDeletedWebhookEvent;
  export import VideoAssetMasterErroredWebhookEvent = WebhooksAPI.VideoAssetMasterErroredWebhookEvent;
  export import VideoAssetTrackCreatedWebhookEvent = WebhooksAPI.VideoAssetTrackCreatedWebhookEvent;
  export import VideoAssetTrackReadyWebhookEvent = WebhooksAPI.VideoAssetTrackReadyWebhookEvent;
  export import VideoAssetTrackErroredWebhookEvent = WebhooksAPI.VideoAssetTrackErroredWebhookEvent;
  export import VideoAssetTrackDeletedWebhookEvent = WebhooksAPI.VideoAssetTrackDeletedWebhookEvent;
  export import VideoAssetWarningWebhookEvent = WebhooksAPI.VideoAssetWarningWebhookEvent;
  export import VideoUploadAssetCreatedWebhookEvent = WebhooksAPI.VideoUploadAssetCreatedWebhookEvent;
  export import VideoUploadCancelledWebhookEvent = WebhooksAPI.VideoUploadCancelledWebhookEvent;
  export import VideoUploadCreatedWebhookEvent = WebhooksAPI.VideoUploadCreatedWebhookEvent;
  export import VideoUploadErroredWebhookEvent = WebhooksAPI.VideoUploadErroredWebhookEvent;
  export import VideoLiveStreamCreatedWebhookEvent = WebhooksAPI.VideoLiveStreamCreatedWebhookEvent;
  export import VideoLiveStreamConnectedWebhookEvent = WebhooksAPI.VideoLiveStreamConnectedWebhookEvent;
  export import VideoLiveStreamRecordingWebhookEvent = WebhooksAPI.VideoLiveStreamRecordingWebhookEvent;
  export import VideoLiveStreamActiveWebhookEvent = WebhooksAPI.VideoLiveStreamActiveWebhookEvent;
  export import VideoLiveStreamDisconnectedWebhookEvent = WebhooksAPI.VideoLiveStreamDisconnectedWebhookEvent;
  export import VideoLiveStreamIdleWebhookEvent = WebhooksAPI.VideoLiveStreamIdleWebhookEvent;
  export import VideoLiveStreamUpdatedWebhookEvent = WebhooksAPI.VideoLiveStreamUpdatedWebhookEvent;
  export import VideoLiveStreamEnabledWebhookEvent = WebhooksAPI.VideoLiveStreamEnabledWebhookEvent;
  export import VideoLiveStreamDisabledWebhookEvent = WebhooksAPI.VideoLiveStreamDisabledWebhookEvent;
  export import VideoLiveStreamDeletedWebhookEvent = WebhooksAPI.VideoLiveStreamDeletedWebhookEvent;
  export import VideoLiveStreamWarningWebhookEvent = WebhooksAPI.VideoLiveStreamWarningWebhookEvent;
  export import VideoLiveStreamSimulcastTargetCreatedWebhookEvent = WebhooksAPI.VideoLiveStreamSimulcastTargetCreatedWebhookEvent;
  export import VideoLiveStreamSimulcastTargetIdleWebhookEvent = WebhooksAPI.VideoLiveStreamSimulcastTargetIdleWebhookEvent;
  export import VideoLiveStreamSimulcastTargetStartingWebhookEvent = WebhooksAPI.VideoLiveStreamSimulcastTargetStartingWebhookEvent;
  export import VideoLiveStreamSimulcastTargetBroadcastingWebhookEvent = WebhooksAPI.VideoLiveStreamSimulcastTargetBroadcastingWebhookEvent;
  export import VideoLiveStreamSimulcastTargetErroredWebhookEvent = WebhooksAPI.VideoLiveStreamSimulcastTargetErroredWebhookEvent;
  export import VideoLiveStreamSimulcastTargetDeletedWebhookEvent = WebhooksAPI.VideoLiveStreamSimulcastTargetDeletedWebhookEvent;
  export import VideoLiveStreamSimulcastTargetUpdatedWebhookEvent = WebhooksAPI.VideoLiveStreamSimulcastTargetUpdatedWebhookEvent;
  export import VideoSpaceCreatedWebhookEvent = WebhooksAPI.VideoSpaceCreatedWebhookEvent;
  export import VideoSpaceDeletedWebhookEvent = WebhooksAPI.VideoSpaceDeletedWebhookEvent;
  export import VideoSpaceActiveWebhookEvent = WebhooksAPI.VideoSpaceActiveWebhookEvent;
  export import VideoSpaceIdleWebhookEvent = WebhooksAPI.VideoSpaceIdleWebhookEvent;
  export import VideoSpaceUpdatedWebhookEvent = WebhooksAPI.VideoSpaceUpdatedWebhookEvent;
  export import VideoSpaceBroadcastCreatedWebhookEvent = WebhooksAPI.VideoSpaceBroadcastCreatedWebhookEvent;
  export import VideoSpaceBroadcastIdleWebhookEvent = WebhooksAPI.VideoSpaceBroadcastIdleWebhookEvent;
  export import VideoSpaceBroadcastActiveWebhookEvent = WebhooksAPI.VideoSpaceBroadcastActiveWebhookEvent;
  export import VideoSpaceBroadcastDeletedWebhookEvent = WebhooksAPI.VideoSpaceBroadcastDeletedWebhookEvent;
  export import VideoDeliveryHighTrafficWebhookEvent = WebhooksAPI.VideoDeliveryHighTrafficWebhookEvent;
  export import UnwrapWebhookEvent = WebhooksAPI.UnwrapWebhookEvent;
}
