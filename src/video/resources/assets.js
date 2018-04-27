/*!
 * Mux Assets
 * Copyright(c) 2018 Mux Inc.
 */

const api = require('../../utils/api');

/**
 * @private Base asset path for the Mux API
 * */
const PATH = '/video/v1/assets';

/**
 * @private
 * Build the base asset path for the Mux API
 * */
const buildBasePath = assetId => `${PATH}/${assetId}`;

/**
 * Assets Class - Provides access to the Mux Video Assets API
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Video } = muxClient;
 *
 * // Create an asset
 * Video.assets.create({input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'});
 */
class Assets {
  /**
   * @ignore
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
     *  @ignore
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
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Create an asset
   * Video.assets.create({input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'});
   *
   * @see https://docs.mux.com/v1/reference#create-an-asset
   */
  create(params) {
    if (!params) {
      return Promise.reject(new Error('Params are required for creating an asset'));
    }
    return api.post(PATH, params, this.requestOptions);
  }

  /**
   * Deletes a Mux asset
   * @param {string} assetId - The ID for the asset intended for deletion
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Delete an asset
   * Video.assets.deleteAsset(assetId);
   *
   * @see https://docs.mux.com/v1/reference#delete-an-asset
   */
  deleteAsset(assetId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to delete an asset'));
    }
    return api.del(buildBasePath(assetId), this.requestOptions);
  }

  /**
   * Get an asset
   * @param {string} assetId - The ID for the asset
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Get an asset
   * Video.assets.get(assetId);
   *
   * @see https://docs.mux.com/v1/reference#retrieve-an-asset
   */
  get(assetId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to get an asset'));
    }
    return api.get(buildBasePath(assetId), {}, this.requestOptions);
  }

  /**
   * Get input info for an asset
   * @param {string} assetId - The ID for the asset
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Get input info for an asset
   * Video.assets.inputInfo(assetId);
   *
   * @see https://docs.mux.com/v1/reference#retrieve-asset-input-info
   */
  inputInfo(assetId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to get input-info'));
    }
    return api.get(`${buildBasePath(assetId)}/input-info`, {}, this.requestOptions);
  }

  /**
   * List all assets for a Mux Environment (tied to your access token)
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // List all assets for a Mux Environment
   * Video.assets.list();
   *
   * @see https://docs.mux.com/v1/reference#list-assets
   */
  list() {
    return api.get(PATH, this.requestOptions);
  }
}

module.exports = Assets;
