// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { MorePages, MorePagesParams } from '~/pagination';

export class DeliveryUsageResource extends APIResource {
  /**
   * Returns a list of delivery usage records and their associated Asset IDs or Live
   * Stream IDs.
   */
  list(
    query?: DeliveryUsageListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DeliveryReportsMorePages>;
  list(options?: Core.RequestOptions): Core.PagePromise<DeliveryReportsMorePages>;
  list(
    query: DeliveryUsageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DeliveryReportsMorePages> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/video/v1/delivery-usage', DeliveryReportsMorePages, { query, ...options });
  }
}

export class DeliveryReportsMorePages extends MorePages<DeliveryReport> {}

export interface DeliveryReport {
  /**
   * The duration of the asset in seconds.
   */
  asset_duration?: number;

  /**
   * Unique identifier for the asset.
   */
  asset_id?: string;

  /**
   * The state of the asset.
   */
  asset_state?: 'ready' | 'errored' | 'deleted';

  /**
   * Time at which the asset was created. Measured in seconds since the Unix epoch.
   */
  created_at?: string;

  /**
   * If exists, time at which the asset was deleted. Measured in seconds since the
   * Unix epoch.
   */
  deleted_at?: string;

  /**
   * Total number of delivered seconds during this time window.
   */
  delivered_seconds?: number;

  /**
   * Unique identifier for the live stream that created the asset.
   */
  live_stream_id?: string;

  /**
   * The `passthrough` value for the asset.
   */
  passthrough?: string;
}

export interface DeliveryUsageListParams extends MorePagesParams {
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
  'timeframe[]'?: Array<string>;
}
