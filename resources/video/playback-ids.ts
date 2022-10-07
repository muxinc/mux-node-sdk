// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class PlaybackIds extends APIResource {
  /**
   * Retrieves the Identifier of the Asset or Live Stream associated with the
   * Playback ID.
   */
  retrieve(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<GetAssetOrLiveStreamIdResponse>> {
    return this.get(`/video/v1/playback-ids/${id}`, options);
  }
}

export interface GetAssetOrLiveStreamIdResponse {
  data?: GetAssetOrLiveStreamIdResponse.Data;
}

export namespace GetAssetOrLiveStreamIdResponse {
  export interface Data {
    /**
     * The Playback ID used to retrieve the corresponding asset or the live stream ID
     */
    id?: string;

    /**
     * Describes the Asset or LiveStream object associated with the playback ID.
     */
    object?: Data.Object;

    /**
     * - `public` playback IDs are accessible by constructing an HLS URL like
     *   `https://stream.mux.com/${PLAYBACK_ID}`
     *
     * - `signed` playback IDs should be used with tokens
     *   `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. See
     *   [Secure video playback](https://docs.mux.com/guides/video/secure-video-playback)
     *   for details about creating tokens.
     */
    policy?: 'public' | 'signed';
  }

  export namespace Data {
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
}
