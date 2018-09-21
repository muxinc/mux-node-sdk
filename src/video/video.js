/*!
 * Mux Video
 * Copyright(c) 2018 Mux Inc.
 */

const Assets = require('./resources/assets');
const Base = require('../base');
const PlaybackIds = require('./resources/playbackIds');
const LiveStreams = require('./resources/liveStreams');

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
class Video extends Base {
  /**
   * Video Constructor
   *
   * @param {string} accessToken - Mux API Access Token
   * @param {string} secret - Mux API secret
   * @constructor
   */
  constructor(...params) {
    super(...params);

    /** @type {Assets} */
    this.assets = new Assets(this);

    /** @type {PlaybackIds} */
    this.playbackIds = new PlaybackIds(this);

    /** @type {LiveStreams} */
    this.liveStreams = new LiveStreams(this);
  }
}

module.exports = Video;
