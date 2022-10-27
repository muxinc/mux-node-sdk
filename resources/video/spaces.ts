// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { BasePage, BasePageParams } from '~/pagination';
import * as Shared from '~/resources/shared';

export class Spaces extends APIResource {
  /**
   * Create a new space. Spaces are used to build
   * [real-time video applications.](https://mux.com/real-time-video)
   */
  async create(body: SpaceCreateParams, options?: Core.RequestOptions): Promise<Space> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.post('/video/v1/spaces', { body, ...options })) as any;
    return response.data;
  }

  /**
   * Retrieves the details of a space that has previously been created. Supply the
   * unique space ID that was returned from your create space request, and Mux will
   * return the information about the corresponding space. The same information is
   * returned when creating a space.
   */
  async retrieve(spaceId: string, options?: Core.RequestOptions): Promise<Space> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.get(`/video/v1/spaces/${spaceId}`, options)) as any;
    return response.data;
  }

  /**
   * List all spaces in the current enviroment.
   */
  list(query?: SpaceListParams, options?: Core.RequestOptions): Core.PagePromise<SpacesBasePage>;
  list(options?: Core.RequestOptions): Core.PagePromise<SpacesBasePage>;
  list(
    query: SpaceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SpacesBasePage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/video/v1/spaces', SpacesBasePage, { query, ...options });
  }

  /**
   * Deletes a space. Spaces can only be deleted when `idle`.
   */
  del(spaceId: string, options?: Core.RequestOptions): Promise<void> {
    return this.delete(`/video/v1/spaces/${spaceId}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Creates a new broadcast. Broadcasts are used to create composited versions of
   * your space, which can be broadcast to live streams. **Note:** By default only a
   * single broadcast destination can be specified. Contact Mux support if you need
   * more.
   */
  async createBroadcast(
    spaceId: string,
    body: SpaceCreateBroadcastParams,
    options?: Core.RequestOptions,
  ): Promise<Broadcast> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.post(`/video/v1/spaces/${spaceId}/broadcasts`, { body, ...options })) as any;
    return response.data;
  }

  /**
   * Deletes a single broadcast of a specific space. Broadcasts can only be deleted
   * when `idle`.
   */
  deleteBroadcast(spaceId: string, broadcastId: string, options?: Core.RequestOptions): Promise<void> {
    return this.delete(`/video/v1/spaces/${spaceId}/broadcasts/${broadcastId}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Retrieves the details of a broadcast of a specific space.
   */
  async retrieveBroadcast(
    spaceId: string,
    broadcastId: string,
    options?: Core.RequestOptions,
  ): Promise<Broadcast> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.get(
      `/video/v1/spaces/${spaceId}/broadcasts/${broadcastId}`,
      options,
    )) as any;
    return response.data;
  }

  /**
   * Starts broadcasting a space to the associated destination. Broadcasts can only
   * be started when the space is `active` (when there are participants connected).
   */
  async startBroadcast(
    spaceId: string,
    broadcastId: string,
    options?: Core.RequestOptions,
  ): Promise<SpaceStartBroadcastResponse> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.post(
      `/video/v1/spaces/${spaceId}/broadcasts/${broadcastId}/start`,
      options,
    )) as any;
    return response.data;
  }

  /**
   * Stops broadcasting a space, causing the destination live stream to become idle.
   * This API also automatically calls `complete` on the destination live stream.
   * Broadcasts are also automatically stopped when a space becomes idle.
   */
  async stopBroadcast(
    spaceId: string,
    broadcastId: string,
    options?: Core.RequestOptions,
  ): Promise<SpaceStopBroadcastResponse> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.post(
      `/video/v1/spaces/${spaceId}/broadcasts/${broadcastId}/stop`,
      options,
    )) as any;
    return response.data;
  }
}

export class SpacesBasePage extends BasePage<Space> {}

export interface Broadcast {
  /**
   * Unique identifier for the broadcast. Max 255 characters.
   */
  id: string;

  /**
   * The layout used when broadcasting the space. Defaults to `gallery` if not set.
   */
  layout: 'gallery' | 'active-speaker';

  /**
   * The ID of the live stream that the broadcast will be sent to.
   */
  live_stream_id: string;

  /**
   * The resolution of the composited video sent to the live stream. Defaults to
   * `1920x1080` if not set.
   */
  resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720';

  /**
   * The status of the broadcast. You can start and stop broadcasts with the `start`
   * and `stop` APIs.
   */
  status: 'idle' | 'active';

  /**
   * URL of an image to display as the background of the broadcast. Its dimensions
   * should match the provided resolution.
   */
  background?: string;

  /**
   * Arbitrary user-supplied metadata that will be included in the broadcast details
   * and related webhooks. Max: 255 characters.
   */
  passthrough?: string;
}

/**
 * The layout used when broadcasting the space. Defaults to `gallery` if not set.
 */

/**
 * The resolution of the composited video sent to the live stream. Defaults to
 * `1920x1080` if not set.
 */

export interface BroadcastResponse {
  data: Broadcast;
}

/**
 * The status of the broadcast. You can start and stop broadcasts with the `start`
 * and `stop` APIs.
 */

export interface Space {
  /**
   * Time the space was created, defined as a Unix timestamp (seconds since epoch).
   */
  created_at: string;

  /**
   * Unique identifier for the space. Max 255 characters.
   */
  id: string;

  /**
   * The status of the space. Spaces are `idle` when there are no participants
   * connected, and `active` when there are participants connected.
   */
  status: 'idle' | 'active';

  /**
   * Specify the network architecture of the space. In `server` spaces, all video
   * travels through Mux's video infrastructure. Defaults to `server` if not set.
   */
  type: 'server';

  /**
   * Unique identifier for the current lifecycle of the space. Only set when the
   * space is `active` and is set to a new value each time the space transitions from
   * `idle` to `active`. This value is useful for logging and debugging issues. Max
   * 255 characters.
   */
  active_session_id?: string;

  /**
   * An array of broadcast destinations.
   */
  broadcasts?: Array<Broadcast>;

  /**
   * Arbitrary user-supplied metadata that will be included in the space details and
   * related webhooks. Max: 255 characters.
   */
  passthrough?: string;
}

export interface SpaceParams {
  /**
   * An array of broadcast destinations you want to stream the space to. **Note:** By
   * default only a single broadcast destination can be specified. Contact Mux
   * support if you need more.
   */
  broadcasts?: Array<Shared.CreateBroadcastParams>;

  /**
   * Arbitrary user-supplied metadata that will be included in the space details and
   * related webhooks. Max: 255 characters.
   */
  passthrough?: string;

  /**
   * Specify the network architecture of the space. In `server` spaces, all video
   * travels through Mux's video infrastructure. Defaults to `server` if not set.
   */
  type?: 'server';
}

export interface SpaceResponse {
  data: Space;
}

/**
 * The status of the space. Spaces are `idle` when there are no participants
 * connected, and `active` when there are participants connected.
 */

/**
 * Specify the network architecture of the space. In `server` spaces, all video
 * travels through Mux's video infrastructure. Defaults to `server` if not set.
 */

type SpaceStartBroadcastResponse = Record<string, Record<string, unknown>>;

type SpaceStopBroadcastResponse = Record<string, Record<string, unknown>>;

export interface SpaceCreateParams {
  /**
   * An array of broadcast destinations you want to stream the space to. **Note:** By
   * default only a single broadcast destination can be specified. Contact Mux
   * support if you need more.
   */
  broadcasts?: Array<Shared.CreateBroadcastParams>;

  /**
   * Arbitrary user-supplied metadata that will be included in the space details and
   * related webhooks. Max: 255 characters.
   */
  passthrough?: string;

  /**
   * Specify the network architecture of the space. In `server` spaces, all video
   * travels through Mux's video infrastructure. Defaults to `server` if not set.
   */
  type?: 'server';
}

export interface SpaceListParams extends BasePageParams {}

export interface SpaceCreateBroadcastParams {
  /**
   * The ID of the live stream that you want to broadcast to.
   */
  live_stream_id: string;

  /**
   * URL of an image to display as the background of the broadcast. Its dimensions
   * should match the provided resolution.
   */
  background?: string;

  /**
   * The layout used when broadcasting the space. Defaults to `gallery` if not set.
   */
  layout?: 'gallery' | 'active-speaker';

  /**
   * Arbitrary user-supplied metadata that will be included in the broadcast details
   * and related webhooks. Max: 255 characters.
   */
  passthrough?: string;

  /**
   * The resolution of the composited video sent to the live stream. Defaults to
   * `1920x1080` if not set.
   */
  resolution?: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720';
}
