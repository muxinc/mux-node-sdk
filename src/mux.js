/*!
 * mux
 * Copyright(c) 2018 Mux Inc.
 */

const video = require('./video/video');

/**
 * Mux Class - Provides access to the Mux Video and Mux Data API
 *
 * @type {Video}
 * @property {Video} Mux.Video provides access to the Mux Video API
 * @example
 * const MuxVideo = new Mux.Video(accessToken, secret);
 *
 * // Create an asset
 * MuxVideo.assets.create({input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'});
 *
 * // Create a playback Id for an asset
 * MuxVideo.playbackIds.create('assetId', { policy: 'public' });
 */
class Mux {
  /**
   * Provides access to the Mux Video API
   * @type {Video}
   */
  static get Video() { return video; }
}

module.exports = Mux;
