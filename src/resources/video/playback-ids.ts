// File generated from our OpenAPI spec by Stainless.

import * as Core from '@mux/mux-node/core';
import { APIResource } from '@mux/mux-node/resource';
import * as Shared from '@mux/mux-node/resources/shared';
import * as API from './';

export class PlaybackIDs extends APIResource {
  /**
   * Retrieves the Identifier of the Asset or Live Stream associated with the
   * Playback ID.
   */
  async retrieve(playbackId: string, options?: Core.RequestOptions): Promise<PlaybackIDRetrieveResponse> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.get(`/video/v1/playback-ids/${playbackId}`, options)) as any;
    return response.data;
  }
}

export interface PlaybackIDRetrieveResponse {
  /**
   * The Playback ID used to retrieve the corresponding asset or the live stream ID
   */
  id?: string;

  /**
   * Describes the Asset or LiveStream object associated with the playback ID.
   */
  object?: PlaybackIDRetrieveResponse.Object;

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

export namespace PlaybackIDRetrieveResponse {
  /**
   * Describes the Asset or LiveStream object associated with the playback ID.
   */
  export interface Object {
    /**
     * The identifier of the object.
     */
    id?: string;

    /**
     * Identifies the object type associated with the playback ID.
     */
    type?: 'asset' | 'live_stream';
  }
}

export namespace PlaybackIDs {
  export import PlaybackIDRetrieveResponse = API.PlaybackIDRetrieveResponse;
}
