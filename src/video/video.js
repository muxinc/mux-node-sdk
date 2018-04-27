/*!
 * mux
 * Copyright(c) 2018 Mux Inc.
 */

const Assets = require('./resources/assets');
const PlaybackIds = require('./resources/playbackIds');

/**
 * @ignore
 * Video Class - Provides access to the Mux Video API
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Video } = muxClient;
 *
 * // Create an asset
 * Video.assets.create({input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'});
 *
 * // Create a playback Id for an asset
 * Video.playbackIds.create('assetId', { policy: 'public' });
 */
class Video {
  /**
   * Video Constructor
   *
   * @param {string} accessToken - Mux API Access Token
   * @param {string} secret - Mux API secret
   * @constructor
   */
  constructor(accessToken, secret) {
    if (typeof accessToken === 'undefined') {
      throw new Error('API Access Token must be provided.');
    }

    if (typeof secret === 'undefined') {
      throw new Error('API secret key must be provided');
    }

    /** @type {Assets} */
    this.assets = new Assets(accessToken, secret);

    /** @type {PlaybackIds} */
    this.playbackIds = new PlaybackIds(accessToken, secret);
  }
}

module.exports = Video;
