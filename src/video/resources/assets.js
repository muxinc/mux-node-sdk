/*!
 * mux
 * Copyright(c) 2018 Mux Inc.
 */

const api = require('../../utils/api');

const PATH = '/video/v1/assets';
const buildBasePath = assetId => `${PATH}/${assetId}`;

/**
 * Assets Class - Provides access to the Mux Video Assets API
 *
 * @example
 * const MuxVideo = new Mux.Video(accessToken, secret);
 *
 * // Create an asset
 * MuxVideo.assets.create({input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'});
 *
 * // Create a playback Id for an asset
 * MuxVideo.playbackIds.create('assetId', { policy: 'public' });
 */
class Assets {
  /**
   * Assets Constructor
   *
   * @param {string} accessToken - Mux API Access Token
   * @param {string} secret - Mux API Access Token secret
   * @constructor
   */
  constructor(accessToken, secret) {
    if (typeof accessToken === 'undefined') {
      throw new Error('API Access Token must be provided.');
    }

    if (typeof secret === 'undefined') {
      throw new Error('API secret key must be provided');
    }

    /**
     *  @type {Object} requestOptions - The HTTP request options for Mux Assets
     *  @property {string} requestOptions.auth.username - HTTP basic auth username (access token)
     *  @property {string} requestOptions.auth.password - HTTP basic auth password (secret)
     * */
    this.requestOptions = {
      auth: {
        username: accessToken,
        password: secret,
      },
    };
  }

  /**
   * Creates a Mux asset with the specified JSON parameters
   * @param {Object} params - Asset JSON parameters (e.g input)
   * @returns {Promise}
   *
   * @example
   * const MuxVideo = new Mux.Video(accessToken, secret);
   *
   * // Create an asset
   * MuxVideo.assets.create({input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'});
   */
  create(params) {
    if (!params) {
      return Promise.reject(new Error('Params are required for creating an asset'));
    }
    return api.post(PATH, params, this.requestOptions);
  }

  /**
   *
   * @param {string} assetId
   * @returns {Promise}
   */
  deleteAsset(assetId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to delete an asset'));
    }
    return api.del(buildBasePath(assetId), this.requestOptions);
  }

  /**
   *
   * @param {string} assetId
   * @returns {*}
   */
  get(assetId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to get an asset'));
    }
    return api.get(buildBasePath(assetId), this.requestOptions);
  }

  /**
   *
   * @param {string} assetId
   * @returns {Promise}
   */
  inputInfo(assetId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to get input-info'));
    }
    return api.get(`${buildBasePath(assetId)}/input-info`, this.requestOptions);
  }

  /**
   *
   * @returns {Promise}
   */
  list() {
    return api.get(PATH, this.requestOptions);
  }
}

module.exports = Assets;
