/*!
 * Mux Video
 * Copyright(c) 2018 Mux Inc.
 */

import Assets from './resources/assets';
import Base from '../base';
import LiveStreams from './resources/liveStreams';
import Uploads from './resources/uploads';
import SigningKeys from './resources/signingKeys';
import DeliveryUsage from './resources/deliveryUsage';

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
export default class Video extends Base {
  /** @type {Assets} */
  Assets = new Assets(this);

  /** @type {LiveStreams} */
  LiveStreams = new LiveStreams(this);

  /** @Type {Uploads} */
  Uploads = new Uploads(this);

  /** @Type {SigningKeys} */
  SigningKeys = new SigningKeys(this);

  /** @Type {DeliveryUsage} */
  DeliveryUsage = new DeliveryUsage(this);

/**
 * Video Constructor
 *
 * @param {string} accessToken - Mux API Access Token
 * @param {string} secret - Mux API secret
 * @constructor
 */
  constructor(...params) {
    super(...params);
  }
}