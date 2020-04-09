/*!
 * Mux Video
 * Copyright(c) 2018 Mux Inc.
 */

const Assets = require('./resources/assets');
const Base = require('../base');
const LiveStreams = require('./resources/liveStreams');
const Uploads = require('./resources/uploads');
const SigningKeys = require('./resources/signingKeys');
const DeliveryUsage = require('./resources/deliveryUsage');

/**
 * @ignore
 * @extends Base
 * Video Class - Provides access to the Mux Video API
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Video } = muxClient;
 *
 * // Create an asset
 * Video.Assets.create({input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'});
 *
 * // Create an asset playback ID
 * Video.Assets.createPlaybackId(assetId, { policy: 'public' });
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
    this.Assets = new Assets(this);

    /** @type {LiveStreams} */
    this.LiveStreams = new LiveStreams(this);

    /** @Type {Uploads} */
    this.Uploads = new Uploads(this);

    /** @Type {SigningKeys} */
    this.SigningKeys = new SigningKeys(this);

    /** @Type {DeliveryUsage} */
    this.DeliveryUsage = new DeliveryUsage(this);
  }
}

module.exports = Video;
