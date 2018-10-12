/*!
 * Mux Assets
 * Copyright(c) 2018 Mux Inc.
 */
const Base = require('../../base');

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
class Assets extends Base {
  /**
   * Creates a Mux asset with the specified JSON parameters
   * @extends Base
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
   * @see https://docs.mux.com/reference#create-an-asset
   */
  create(params) {
    if (!params) {
      return Promise.reject(new Error('Params are required for creating an asset'));
    }

    return this.http.post(PATH, params);
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
   * Video.assets.remove(assetId);
   *
   * @see https://docs.mux.com/reference#delete-an-asset
   */
  remove(assetId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to delete an asset'));
    }
    return this.http.delete(buildBasePath(assetId));
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
   * @see https://docs.mux.com/reference#retrieve-an-asset
   */
  get(assetId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to get an asset'));
    }
    return this.http.get(buildBasePath(assetId));
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
   * @see https://docs.mux.com/reference#retrieve-asset-input-info
   */
  inputInfo(assetId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to get input-info'));
    }
    return this.http.get(`${buildBasePath(assetId)}/input-info`);
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
   * @see https://docs.mux.com/reference#list-assets
   */
  list(params) {
    return this.http.get(PATH, { params });
  }

  /**
   * Return an asset playback id
   * @param {string} assetId - The ID for the asset
   * @param {string} playbackId - The ID for the playbackId
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Retrieve an asset playbackId
   * Video.assets.playbackId(assetId, playbackId);
   *
   * @see https://docs.mux.com/v1/reference#retrieve-an-asset-playback-id
   */
  playbackId(assetId, playbackId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required'));
    }

    if (!playbackId) {
      return Promise.reject(new Error('A playback ID is required'));
    }
    return this.http.get(`${buildBasePath(assetId)}/playback-ids/${playbackId}`);
  }

  /**
   * Create an asset playback id
   * @param {string} assetId - The ID for the asset
   * @param {Object} params - Asset JSON parameters (e.g playback_policy)
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Create an asset playback ID
   * Video.assets.createPlaybackId(assetId, { policy: 'public' });
   *
   * @see https://docs.mux.com/v1/reference#add-an-asset-playback-id
   */
  createPlaybackId(assetId, params) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required'));
    }

    if (!params) {
      return Promise.reject(new Error('Playback ID params are required'));
    }
    return this.http.post(`${buildBasePath(assetId)}/playback-ids`, params);
  }

  /**
   * Delete an asset playback ID
   * @param {string} assetId - The ID for the asset
   * @param {string} playbackId - The ID for the asset playback ID to delete
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Delete an asset playback ID
   * Video.assets.deletePlaybackId(assetId, { policy: 'public' });
   *
   * @see https://docs.mux.com/v1/reference#delete-an-asset-playback-id
   */
  deletePlaybackId(assetId, playbackId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required'));
    }

    if (!playbackId) {
      return Promise.reject(new Error('A playback ID is required'));
    }
    return this.http.delete(`${buildBasePath(assetId)}/playback-ids/${playbackId}`);
  }
}

module.exports = Assets;
