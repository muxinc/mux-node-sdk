// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { PageWithTotal, type PageWithTotalParams } from '../../pagination';

export class DeliveryUsage extends APIResource {
  /**
   * Returns a list of delivery usage records and their associated Asset IDs or Live
   * Stream IDs.
   */
  list(
    query?: DeliveryUsageListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DeliveryReportsPageWithTotal, DeliveryReport>;
  list(options?: Core.RequestOptions): Core.PagePromise<DeliveryReportsPageWithTotal, DeliveryReport>;
  list(
    query: DeliveryUsageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DeliveryReportsPageWithTotal, DeliveryReport> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/video/v1/delivery-usage', DeliveryReportsPageWithTotal, {
      query,
      ...options,
    });
  }
}

export class DeliveryReportsPageWithTotal extends PageWithTotal<DeliveryReport> {}

export interface DeliveryReport {
  /**
   * The duration of the asset in seconds.
   */
  asset_duration: number;

  /**
   * @deprecated: This field is deprecated. Please use `asset_video_quality` instead.
   * The encoding tier that the asset was ingested at.
   * [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)
   */
  asset_encoding_tier: 'smart' | 'baseline' | 'premium';

  /**
   * Unique identifier for the asset.
   */
  asset_id: string;

  /**
   * The resolution tier that the asset was ingested at, affecting billing for ingest
   * & storage
   */
  asset_resolution_tier: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p';

  /**
   * The state of the asset.
   */
  asset_state: 'ready' | 'errored' | 'deleted';

  /**
   * Time at which the asset was created. Measured in seconds since the Unix epoch.
   */
  created_at: string;

  /**
   * Total number of delivered seconds during this time window.
   */
  delivered_seconds: number;

  /**
   * Seconds delivered broken into resolution tiers. Each tier will only be displayed
   * if there was content delivered in the tier.
   */
  delivered_seconds_by_resolution: DeliveryReport.DeliveredSecondsByResolution;

  /**
   * The video quality that the asset was ingested at. This field replaces
   * `asset_encoding_tier`.
   * [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)
   */
  asset_video_quality?: 'basic' | 'plus' | 'premium';

  /**
   * If exists, time at which the asset was deleted. Measured in seconds since the
   * Unix epoch.
   */
  deleted_at?: string;

  /**
   * Unique identifier for the live stream that created the asset.
   */
  live_stream_id?: string;

  /**
   * The `passthrough` value for the asset.
   */
  passthrough?: string;
}

export namespace DeliveryReport {
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

export interface DeliveryUsageListParams extends PageWithTotalParams {
  /**
   * Filter response to return delivery usage for this asset only. You cannot specify
   * both the `asset_id` and `live_stream_id` parameters together.
   */
  asset_id?: string;

  /**
   * Filter response to return delivery usage for assets for this live stream. You
   * cannot specify both the `asset_id` and `live_stream_id` parameters together.
   */
  live_stream_id?: string;

  /**
   * Time window to get delivery usage information. timeframe[0] indicates the start
   * time, timeframe[1] indicates the end time in seconds since the Unix epoch.
   * Default time window is 1 hour representing usage from 13th to 12th hour from
   * when the request is made.
   */
  timeframe?: Array<string>;
}

DeliveryUsage.DeliveryReportsPageWithTotal = DeliveryReportsPageWithTotal;

export declare namespace DeliveryUsage {
  export {
    type DeliveryReport as DeliveryReport,
    DeliveryReportsPageWithTotal as DeliveryReportsPageWithTotal,
    type DeliveryUsageListParams as DeliveryUsageListParams,
  };
}
