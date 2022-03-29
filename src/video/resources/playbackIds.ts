/*!
 * Mux Assets
 * Copyright(c) 2018 Mux Inc.
 */
import { Base } from '../../base.js';
import { PlaybackIdentifier } from '../domain.js';

/**
 * @private Base playback ID path for the Mux API
 * */
const PATH = '/video/v1/playback-ids';

/**
 * @private
 * Build the base playback ID path for the Mux API
 * */
const buildBasePath = (playbackId: string) => `${PATH}/${playbackId}`;

/**
 * PlaybackIds Class - Provides access to the Mux Playback ID API
 *
 * @example
 * const { Video } = new Mux(accessToken, secret);
 *
 * // Retrieve an Asset or Live Stream  identifier associated with a Playback ID
 * Video.PlaybackIds.get(playbackId);
 */
export class PlaybackIds extends Base {
  /**
   * Retrieve an Asset or Live Stream  identifier associated with a Playback ID
   * @param {string} playbackId - The ID for playback
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Video } = new Mux(accessToken, secret);
   *
   * // Retrieve an Asset or Live Stream identifier associated with a Playback ID
   * Video.PlaybackIds.get(playbackId);
   *
   * @see https://docs.mux.com/api-reference/video#operation/get-asset-or-livestream-id
   */
  get(playbackId: string): Promise<PlaybackIdentifier> {
    if (!playbackId) {
      return Promise.reject(
        new Error(
          'An playback ID is required to get an asset or live stream identifier'
        )
      );
    }
    return this.http.get(buildBasePath(playbackId));
  }
}
