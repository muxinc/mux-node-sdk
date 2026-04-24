// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Operations related to the manipulation of playback IDs, through which users are able to stream videos and live streams from Mux.
 */
export class PlaybackIds extends APIResource {
  /**
   * Retrieves the Identifier of the Asset or Live Stream associated with the
   * Playback ID.
   *
   * @example
   * ```ts
   * const playbackIds = await client.video.playbackIds.retrieve(
   *   'PLAYBACK_ID',
   * );
   * ```
   */
  retrieve(playbackId: string, options?: RequestOptions): APIPromise<PlaybackIdsRetrieveResponse> {
    return (this._client.get(path`/video/v1/playback-ids/${playbackId}`, { defaultBaseURL: 'https://api.mux.com', ...options }) as APIPromise<{ data: PlaybackIdsRetrieveResponse }>)._thenUnwrap((obj) => obj.data);
  }
}

export interface PlaybackIdsRetrieveResponse {
  /**
   * The Playback ID used to retrieve the corresponding asset or the live stream ID
   */
  id: string;

  /**
   * Describes the Asset or LiveStream object associated with the playback ID.
   */
  object: PlaybackIdsRetrieveResponse.Object;

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
  policy: Shared.PlaybackPolicy;
}

export namespace PlaybackIdsRetrieveResponse {
  /**
   * Describes the Asset or LiveStream object associated with the playback ID.
   */
  export interface Object {
    /**
     * The identifier of the object.
     */
    id: string;

    /**
     * Identifies the object type associated with the playback ID.
     */
    type: 'asset' | 'live_stream';
  }
}

export declare namespace PlaybackIds {
  export {
    type PlaybackIdsRetrieveResponse as PlaybackIdsRetrieveResponse
  };
}
