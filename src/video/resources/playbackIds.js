/*!
 * PlaybackIds
 * Copyright(c) 2018 Mux Inc.
 */

const api = require('../../utils/api');

/**
 * @private
 * Base playback ID path for the Mux API
 * */
const buildBasePath = assetId => `/video/v1/assets/${assetId}/playback-ids`;

/**
 * PlaybackIds Class - Provides access to the Mux Video PlaybackIds API
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Video } = muxClient;
 *
 * // Create a playback Id for an asset
 * Video.playbackIds.create('assetId', { policy: 'public' });
 */
class PlaybackIds {
  /**
   * @ignore
   * PlaybackIds Constructor
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
   * Creates a playback ID for a Mux asset with the specified JSON parameters
   * @param {string} assetId - Asset ID for the asset to create the playback ID for
   * @param {Object} params - Playback ID JSON parameters (e.g policy)
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Create a playback Id for an asset
   * Video.playbackIds.create('assetId', { policy: 'public' });
   *
   * @see https://docs.mux.com/v1/reference#add-an-asset-playback-id
   */
  create(assetId, params) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to create a playback ID'));
    }

    if (!params) {
      return Promise.reject(new Error('Playback ID params are required'));
    }
    return api.post(buildBasePath(assetId), params, this.requestOptions);
  }

  /**
   * Get a playbackId
   * @param {string} assetId - The ID for the asset
   * @param {string} playbackId - The ID for the playback ID to get the playback ID information for
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Get an asset
   * Video.playbackIds.get(assetId, playbackId);
   *
   * @see https://docs.mux.com/v1/reference#retrieve-an-asset-playback-id
   */
  get(assetId, playbackId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to get a playback ID'));
    }

    if (!playbackId) {
      return Promise.reject(new Error('A playback ID is required to get a playback ID'));
    }
    return api.get(`${buildBasePath(assetId)}/${playbackId}`, this.requestOptions);
  }

  /**
   * Deletes a playback ID
   * @param {string} assetId - The ID for the asset
   * @param {string} playbackId - The ID for the playback ID to get the playback ID information for
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Delete a playback ID
   * Video.playbackIds.deletePlaybackId(assetId, playbackId);
   *
   * @see https://docs.mux.com/v1/reference#delete-an-asset-playback-id
   */
  deletePlaybackId(assetId, playbackId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to delete a playback ID'));
    }

    if (!playbackId) {
      return Promise.reject(new Error('A playback ID is required to delete a playback ID'));
    }
    return api.del(`${buildBasePath(assetId)}/${playbackId}`, this.requestOptions);
  }
}


module.exports = PlaybackIds;
