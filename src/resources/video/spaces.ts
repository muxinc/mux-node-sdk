// File generated from our OpenAPI spec by Stainless.

import * as Core from '@mux/mux-node/core';
import { APIResource } from '@mux/mux-node/resource';
import { isRequestOptions } from '@mux/mux-node/core';
import * as SpacesAPI from '@mux/mux-node/resources/video/spaces';
import { BasePage, type BasePageParams } from '@mux/mux-node/pagination';

export class Spaces extends APIResource {
  /**
   * Create a new space. Spaces are used to build
   * [real-time video applications.](https://mux.com/real-time-video)
   *
   * @deprecated Mux Real-Time Video has been sunset and is unavailable for new usage.
   * Existing access will end on December 31, 2023.
   * We [recommend migrating your application to our partner, LiveKit](https://livekit.io/mux-livekit).
   */
  create(body: SpaceCreateParams, options?: Core.RequestOptions): Core.APIPromise<Space> {
    return (
      this._client.post('/video/v1/spaces', { body, ...options }) as Core.APIPromise<{ data: Space }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Retrieves the details of a space that has previously been created. Supply the
   * unique space ID that was returned from your create space request, and Mux will
   * return the information about the corresponding space. The same information is
   * returned when creating a space.
   *
   * @deprecated Mux Real-Time Video has been sunset and is unavailable for new usage.
   * Existing access will end on December 31, 2023.
   * We [recommend migrating your application to our partner, LiveKit](https://livekit.io/mux-livekit).
   */
  retrieve(spaceId: string, options?: Core.RequestOptions): Core.APIPromise<Space> {
    return (
      this._client.get(`/video/v1/spaces/${spaceId}`, options) as Core.APIPromise<{ data: Space }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * List all spaces in the current enviroment.
   *
   * @deprecated Mux Real-Time Video has been sunset and is unavailable for new usage.
   * Existing access will end on December 31, 2023.
   * We [recommend migrating your application to our partner, LiveKit](https://livekit.io/mux-livekit).
   */
  list(query?: SpaceListParams, options?: Core.RequestOptions): Core.PagePromise<SpacesBasePage, Space>;
  list(options?: Core.RequestOptions): Core.PagePromise<SpacesBasePage, Space>;
  list(
    query: SpaceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SpacesBasePage, Space> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/video/v1/spaces', SpacesBasePage, { query, ...options });
  }

  /**
   * Deletes a space. Spaces can only be deleted when `idle`.
   *
   * @deprecated Mux Real-Time Video has been sunset and is unavailable for new usage.
   * Existing access will end on December 31, 2023.
   * We [recommend migrating your application to our partner, LiveKit](https://livekit.io/mux-livekit).
   */
  delete(spaceId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/video/v1/spaces/${spaceId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Creates a new broadcast. Broadcasts are used to create composited versions of
   * your space, which can be broadcast to live streams. **Note:** By default only a
   * single broadcast destination can be specified. Contact Mux support if you need
   * more.
   *
   * @deprecated Mux Real-Time Video has been sunset and is unavailable for new usage.
   * Existing access will end on December 31, 2023.
   * We [recommend migrating your application to our partner, LiveKit](https://livekit.io/mux-livekit).
   */
  createBroadcast(
    spaceId: string,
    body: SpaceCreateBroadcastParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Broadcast> {
    return (
      this._client.post(`/video/v1/spaces/${spaceId}/broadcasts`, { body, ...options }) as Core.APIPromise<{
        data: Broadcast;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Deletes a single broadcast of a specific space. Broadcasts can only be deleted
   * when `idle`.
   *
   * @deprecated Mux Real-Time Video has been sunset and is unavailable for new usage.
   * Existing access will end on December 31, 2023.
   * We [recommend migrating your application to our partner, LiveKit](https://livekit.io/mux-livekit).
   */
  deleteBroadcast(
    spaceId: string,
    broadcastId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(`/video/v1/spaces/${spaceId}/broadcasts/${broadcastId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieves the details of a broadcast of a specific space.
   *
   * @deprecated Mux Real-Time Video has been sunset and is unavailable for new usage.
   * Existing access will end on December 31, 2023.
   * We [recommend migrating your application to our partner, LiveKit](https://livekit.io/mux-livekit).
   */
  retrieveBroadcast(
    spaceId: string,
    broadcastId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Broadcast> {
    return (
      this._client.get(`/video/v1/spaces/${spaceId}/broadcasts/${broadcastId}`, options) as Core.APIPromise<{
        data: Broadcast;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Starts broadcasting a space to the associated destination. Broadcasts can only
   * be started when the space is `active` (when there are participants connected).
   *
   * @deprecated Mux Real-Time Video has been sunset and is unavailable for new usage.
   * Existing access will end on December 31, 2023.
   * We [recommend migrating your application to our partner, LiveKit](https://livekit.io/mux-livekit).
   */
  startBroadcast(spaceId: string, broadcastId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/video/v1/spaces/${spaceId}/broadcasts/${broadcastId}/start`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Stops broadcasting a space, causing the destination live stream to become idle.
   * This API also automatically calls `complete` on the destination live stream.
   * Broadcasts are also automatically stopped when a space becomes idle.
   *
   * @deprecated Mux Real-Time Video has been sunset and is unavailable for new usage.
   * Existing access will end on December 31, 2023.
   * We [recommend migrating your application to our partner, LiveKit](https://livekit.io/mux-livekit).
   */
  stopBroadcast(spaceId: string, broadcastId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/video/v1/spaces/${spaceId}/broadcasts/${broadcastId}/stop`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class SpacesBasePage extends BasePage<Space> {}

export interface Broadcast {
  /**
   * Unique identifier for the broadcast. Max 255 characters.
   */
  id: string;

  /**
   * The layout used when broadcasting the space.
   *
   * The `gallery` layout will show participants in a grid that automatically resizes
   * each participant’s stream to best fit up to 10 participants in the window. The
   * `active-speaker` layout will show only the current active speaker, without a
   * border. The `crop` layout uses as much of the available space as possible to
   * show the participant's stream.
   *
   * Defaults to `gallery` if not set.
   */
  layout: BroadcastLayout;

  /**
   * The ID of the live stream that the broadcast will be sent to.
   */
  live_stream_id: string;

  /**
   * The resolution of the composited video sent to the live stream. Defaults to
   * `1920x1080` if not set.
   */
  resolution: BroadcastResolution;

  /**
   * The status of the broadcast. You can start and stop broadcasts with the `start`
   * and `stop` APIs.
   */
  status: BroadcastStatus;

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
 * The layout used when broadcasting the space.
 *
 * The `gallery` layout will show participants in a grid that automatically resizes
 * each participant’s stream to best fit up to 10 participants in the window. The
 * `active-speaker` layout will show only the current active speaker, without a
 * border. The `crop` layout uses as much of the available space as possible to
 * show the participant's stream.
 *
 * Defaults to `gallery` if not set.
 */
export type BroadcastLayout = 'gallery' | 'active-speaker' | 'crop';

/**
 * The resolution of the composited video sent to the live stream. Defaults to
 * `1920x1080` if not set.
 */
export type BroadcastResolution =
  | '1920x1080'
  | '1280x720'
  | '1080x1920'
  | '720x1280'
  | '1080x1080'
  | '720x720';

export interface BroadcastResponse {
  data: Broadcast;
}

/**
 * The status of the broadcast. You can start and stop broadcasts with the `start`
 * and `stop` APIs.
 */
export type BroadcastStatus = 'idle' | 'active';

export interface Space {
  /**
   * Unique identifier for the space. Max 255 characters.
   */
  id: string;

  /**
   * Time the space was created, defined as a Unix timestamp (seconds since epoch).
   */
  created_at: string;

  /**
   * The status of the space. Spaces are `idle` when there are no participants
   * connected, and `active` when there are participants connected.
   */
  status: SpaceStatus;

  /**
   * Specify the network architecture of the space. In `server` spaces, all video
   * travels through Mux's video infrastructure. Defaults to `server` if not set.
   */
  type: SpaceType;

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

export interface SpaceResponse {
  data: Space;
}

/**
 * The status of the space. Spaces are `idle` when there are no participants
 * connected, and `active` when there are participants connected.
 */
export type SpaceStatus = 'idle' | 'active';

/**
 * Specify the network architecture of the space. In `server` spaces, all video
 * travels through Mux's video infrastructure. Defaults to `server` if not set.
 */
export type SpaceType = 'server';

export interface SpaceCreateParams {
  /**
   * An array of broadcast destinations you want to stream the space to. **Note:** By
   * default only a single broadcast destination can be specified. Contact Mux
   * support if you need more.
   */
  broadcasts?: Array<SpaceCreateParams.Broadcast>;

  /**
   * Arbitrary user-supplied metadata that will be included in the space details and
   * related webhooks. Max: 255 characters.
   */
  passthrough?: string;

  /**
   * Specify the network architecture of the space. In `server` spaces, all video
   * travels through Mux's video infrastructure. Defaults to `server` if not set.
   */
  type?: SpaceType;
}

export namespace SpaceCreateParams {
  export interface Broadcast {
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
     * The layout used when broadcasting the space.
     *
     * The `gallery` layout will show participants in a grid that automatically resizes
     * each participant’s stream to best fit up to 10 participants in the window. The
     * `active-speaker` layout will show only the current active speaker, without a
     * border. The `crop` layout uses as much of the available space as possible to
     * show the participant's stream.
     *
     * Defaults to `gallery` if not set.
     */
    layout?: SpacesAPI.BroadcastLayout;

    /**
     * Arbitrary user-supplied metadata that will be included in the broadcast details
     * and related webhooks. Max: 255 characters.
     */
    passthrough?: string;

    /**
     * The resolution of the composited video sent to the live stream. Defaults to
     * `1920x1080` if not set.
     */
    resolution?: SpacesAPI.BroadcastResolution;
  }
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
   * The layout used when broadcasting the space.
   *
   * The `gallery` layout will show participants in a grid that automatically resizes
   * each participant’s stream to best fit up to 10 participants in the window. The
   * `active-speaker` layout will show only the current active speaker, without a
   * border. The `crop` layout uses as much of the available space as possible to
   * show the participant's stream.
   *
   * Defaults to `gallery` if not set.
   */
  layout?: BroadcastLayout;

  /**
   * Arbitrary user-supplied metadata that will be included in the broadcast details
   * and related webhooks. Max: 255 characters.
   */
  passthrough?: string;

  /**
   * The resolution of the composited video sent to the live stream. Defaults to
   * `1920x1080` if not set.
   */
  resolution?: BroadcastResolution;
}

export namespace Spaces {
  export import Broadcast = SpacesAPI.Broadcast;
  export import BroadcastLayout = SpacesAPI.BroadcastLayout;
  export import BroadcastResolution = SpacesAPI.BroadcastResolution;
  export import BroadcastResponse = SpacesAPI.BroadcastResponse;
  export import BroadcastStatus = SpacesAPI.BroadcastStatus;
  export import Space = SpacesAPI.Space;
  export import SpaceResponse = SpacesAPI.SpaceResponse;
  export import SpaceStatus = SpacesAPI.SpaceStatus;
  export import SpaceType = SpacesAPI.SpaceType;
  export import SpacesBasePage = SpacesAPI.SpacesBasePage;
  export import SpaceCreateParams = SpacesAPI.SpaceCreateParams;
  export import SpaceListParams = SpacesAPI.SpaceListParams;
  export import SpaceCreateBroadcastParams = SpacesAPI.SpaceCreateBroadcastParams;
}
