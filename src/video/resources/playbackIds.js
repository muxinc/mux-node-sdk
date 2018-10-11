/*!
 * PlaybackIds
 * Copyright(c) 2018 Mux Inc.
 */
const Base = require('../../base');

/**
 * @private
 * Base playback ID path for the Mux API
 * */
const buildBasePath = assetId => `/video/v1/assets/${assetId}/playback-ids`;

/**
 * PlaybackIds Class - Provides access to the Mux Video PlaybackIds API
 *
 * @extends Base
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Video } = muxClient;
 *
 * // Create a playback Id for an asset
 * Video.playbackIds.create('assetId', { policy: 'public' });
 */
class PlaybackIds extends Base {
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
   * @see https://docs.mux.com/reference#add-an-asset-playback-id
   */
  create(assetId, params) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to create a playback ID'));
    }

    if (!params) {
      return Promise.reject(new Error('Playback ID params are required'));
    }
    return this.http.post(buildBasePath(assetId), { params });
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
   * @see https://docs.mux.com/reference#retrieve-an-asset-playback-id
   */
  get(assetId, playbackId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to get a playback ID'));
    }

    if (!playbackId) {
      return Promise.reject(new Error('A playback ID is required to get a playback ID'));
    }
    return this.http.get(`${buildBasePath(assetId)}/${playbackId}`);
  }

  /**
   * Deletes a playback ID
   * @param {string} assetId - The ID for the asset
   * @param {string} playbackId - The ID for the playback ID to delete
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Delete a playback ID
   * Video.playbackIds.deletePlaybackId(assetId, playbackId);
   *
   * @see https://docs.mux.com/reference#delete-an-asset-playback-id
   */
  deletePlaybackId(assetId, playbackId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to delete a playback ID'));
    }

    if (!playbackId) {
      return Promise.reject(new Error('A playback ID is required to delete a playback ID'));
    }
    return this.http.delete(`${buildBasePath(assetId)}/${playbackId}`);
  }
}


module.exports = PlaybackIds;
