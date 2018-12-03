/*!
 * Mux
 * Copyright(c) 2018 Mux Inc.
 */

const Base = require('./base');
const Video = require('./video/video');
const Data = require('./data/data');

/**
 * Mux Class - Provides access to the Mux Video and Mux Data API
 *
 * @extends Base
 * @type {Video}
 * @property {Video} Mux.Video provides access to the Mux Video API
 * @type {Data}
 * @property {Data} Mux.Data provides access to the Mux Data API
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Video, Data } = muxClient;
 *
 * // Create an asset
 * let assetId;
 * Video.assets.create({input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'});
 *   .then((res) => {
 *     const { data } = res.data;
 *     assetId = data.id;
 *   });
 *
 * // Create a playback Id for an asset
 * Video.playbackIds.create(assetId, { policy: 'public' });
 *
 * // List all of the values across every breakdown for the `aggregate_startup_time` metric
 * Data.metrics.breakdown('aggregate_startup_time', { group_by: 'browser' });
 */
class Mux extends Base {
  /**
   * Mux Constructor
   *
   * @param {string=process.env.MUX_TOKEN_ID} accessToken - Mux API Access Token
   * @param {string=process.env.MUX_TOKEN_SECRET} secret - Mux API secret
   * @param {object} options - Optional configuration object
   * @param {string='https://api.mux.com'} options.baseUrl - Change the base URL for API requests.
   * @constructor
   */
  constructor(accessTokenOrConfig, secret, config) {
    super(accessTokenOrConfig, secret, config);

    /** @type {Video} */
    this.Video = new Video(this);

    /** @type {Data} */
    this.Data = new Data(this);
  }
}

module.exports = Mux;
