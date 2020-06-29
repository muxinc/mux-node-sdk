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
 * const { Video } = new Mux(accessToken, secret);
 *
 * // Create an asset
 * Video.Assets.create({input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'});
 */
class Assets extends Base {
  /**
   * Creates a Mux asset with the specified JSON parameters
   * @param {Object} params - Asset JSON parameters (e.g input)
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Video } = new Mux(accessToken, secret);
   *
   * // Create an asset
   * Video.Assets.create({input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'});
   *
   * @see https://docs.mux.com/reference#create-an-asset
   */
  create(params) {
    if (!params) {
      return Promise.reject(
        new Error('Params are required for creating an asset')
      );
    }

    return this.http.post(PATH, params);
  }

  /**
   * Deletes a Mux asset
   * @param {string} assetId - The ID for the asset intended for deletion
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Video } = new Mux(accessToken, secret);
   *
   * // Delete an asset
   * Video.Assets.del(assetId);
   *
   * @see https://docs.mux.com/reference#delete-an-asset
   */
  del(assetId) {
    if (!assetId) {
      return Promise.reject(
        new Error('An asset ID is required to delete an asset')
      );
    }
    return this.http.delete(buildBasePath(assetId));
  }

  /**
   * Get an asset
   * @param {string} assetId - The ID for the asset
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Video } = new Mux(accessToken, secret);
   *
   * // Get an asset
   * Video.Assets.get(assetId);
   *
   * @see https://docs.mux.com/reference#retrieve-an-asset
   */
  get(assetId) {
    if (!assetId) {
      return Promise.reject(
        new Error('An asset ID is required to get an asset')
      );
    }
    return this.http.get(buildBasePath(assetId));
  }

  /**
   * Get input info for an asset
   * @param {string} assetId - The ID for the asset
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Video } = new Mux(accessToken, secret);
   *
   * // Get input info for an asset
   * Video.Assets.inputInfo(assetId);
   *
   * @see https://docs.mux.com/reference#retrieve-asset-input-info
   */
  inputInfo(assetId) {
    if (!assetId) {
      return Promise.reject(
        new Error('An asset ID is required to get input-info')
      );
    }
    return this.http.get(`${buildBasePath(assetId)}/input-info`);
  }

  /**
   * List all assets for a Mux Environment (tied to your access token)
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Video } = new Mux(accessToken, secret);
   *
   * // List all assets for a Mux Environment
   * Video.Assets.list();
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
   * const { Video } = new Mux(accessToken, secret);
   *
   * // Retrieve an asset playbackId
   * Video.Assets.playbackId(assetId, playbackId);
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
    return this.http.get(
      `${buildBasePath(assetId)}/playback-ids/${playbackId}`
    );
  }

  /**
   * Create an asset playback id
   * @param {string} assetId - The ID for the asset
   * @param {Object} params - Asset JSON parameters (e.g playback_policy)
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Video } = new Mux(accessToken, secret);
   *
   * // Create an asset playback ID
   * Video.Assets.createPlaybackId(assetId, { policy: 'public' });
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
   * const { Video } = new Mux(accessToken, secret);
   *
   * // Delete an asset playback ID
   * Video.Assets.deletePlaybackId(assetId, { policy: 'public' });
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
    return this.http.delete(
      `${buildBasePath(assetId)}/playback-ids/${playbackId}`
    );
  }

  /**
   * Create a subtitle text track
   * @param {string} assetId - The ID for the asset
   * @param {Object} params - subtitle text track JSON parameters
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Video } = new Mux(accessToken, secret);
   *
   * // Create an asset text track
   * Video.Assets.createTrack(assetId, {
   *   url: "https://example.com/myVIdeo_en.srt",
   *   type: "text",
   *   text_type: "subtitles",
   *   language_code: "en-US",
   * });
   *
   * @see https://docs.mux.com/reference#create-a-subtitle-text-track
   */
  createTrack(assetId, params) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required'));
    }

    if (!params) {
      return Promise.reject(new Error('Text track params are required'));
    }
    return this.http.post(`${buildBasePath(assetId)}/tracks`, params);
  }

  /**
   * Delete an asset text track
   * @param {string} assetId - The ID for the asset
   * @param {string} trackId - The ID for the asset text track to delete
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Video } = new Mux(accessToken, secret);
   *
   * // Delete an asset text track
   * Video.Assets.deleteTrack(assetId, trackId);
   *
   * @see https://docs.mux.com/reference#delete-a-subtitle-text-track
   */
  deleteTrack(assetId, trackId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required'));
    }

    if (!trackId) {
      return Promise.reject(new Error('A track ID is required'));
    }
    return this.http.delete(`${buildBasePath(assetId)}/tracks/${trackId}`);
  }

  /**
   * Update mp4 support for an asset
   * @param {Object} params - mp4 support JSON parameters
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Video } = new Mux(accessToken, secret);
   *
   * // Updates mp4 support for an asset
   * Video.Assets.updateMp4Support(assetId, {mp4_support: "standard"});
   *
   * @see https://docs.mux.com/reference#update-mp4-support
   */
  updateMp4Support(assetId, params) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required'));
    }

    if (!(params && params.mp4_support)) {
      return Promise.reject(new Error('params.mp4_support is required'));
    }
    return this.http.put(`${buildBasePath(assetId)}/mp4-support`, params);
  }

  /**
   * Update master access for an asset
   * @param {Object} params - master access JSON parameters
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Video } = new Mux(accessToken, secret);
   *
   * // Update master access for an asset
   * Video.Assets.updateMasterAccess(assetId, {master_access: "temporary"});
   *
   * @see https://docs.mux.com/reference#update-master-access
   */
  updateMasterAccess(assetId, params) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required'));
    }

    if (!(params && params.master_access)) {
      return Promise.reject(new Error('params.master_access is required'));
    }
    return this.http.put(`${buildBasePath(assetId)}/master-access`, params);
  }
}

module.exports = Assets;
