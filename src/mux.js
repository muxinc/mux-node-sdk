/*!
 * Mux
 * Copyright(c) 2018 Mux Inc.
 */

const Video = require('./video/video');
const Data = require('./data/data');

/**
 * Mux Class - Provides access to the Mux Video and Mux Data API
 *
 * @type {Video}
 * @property {Video} Mux.Video provides access to the Mux Video API
 * @type {Data}
 * @property {Data} Mux.Data provides access to the Mux Data API
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Video, Data } = muxClient;
 *
 * // Create an asset
 * Video.assets.create({input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'});
 *
 * // Create a playback Id for an asset
 * Video.playbackIds.create(assetId, { policy: 'public' });
 *
 * // List all of the values across every breakdown for the `aggregate_startup_time` metric
 * Data.metrics.breakdown('aggregate_startup_time', {group_by: 'browser'});
 */
class Mux {
  /**
   * Mux Constructor
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

    /** @type {Video} */
    this.Video = new Video(accessToken, secret);
    /** @type {Data} */
    this.Data = new Data(accessToken, secret);
  }
}

module.exports = Mux;
