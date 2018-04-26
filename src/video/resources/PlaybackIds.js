/*!
 * mux
 * Copyright(c) 2018 Mux Inc.
 */

const api = require('../../utils/api');

const buildBasePath = assetId => `/video/v1/assets/${assetId}/playback-ids`;

/**
 * Mux class
 * @example
 * const PlaybackIds = new PlaybackIds(config);
 * @interface
 */
class PlaybackIds {
  /**
   *
   * @param apiKey
   * @param secret
   */
  constructor(apiKey, secret) {
    if (typeof apiKey === 'undefined') {
      throw new Error('API key must be provided.');
    }

    if (typeof secret === 'undefined') {
      throw new Error('API secret key must be provided');
    }

    this.requestOptions = {
      auth: {
        username: apiKey,
        password: secret,
      },
    };
  }

  /**
   *
   * @param assetId
   * @param params
   * @returns {*}
   */
  create(assetId, params) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to create a playbackId'));
    }

    if (!params) {
      return Promise.reject(new Error('PlaybackId params are required'));
    }
    return api.post(buildBasePath(assetId), params, this.requestOptions);
  }

  /**
   *
   * @param assetId
   * @param playbackId
   * @returns {*}
   */
  get(assetId, playbackId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to get a playbackId'));
    }

    if (!playbackId) {
      return Promise.reject(new Error('A playbackId is required to get a playbackId'));
    }
    return api.get(`${buildBasePath(assetId)}/${playbackId}`, this.requestOptions);
  }

  /**
   *
   * @param assetId
   * @param playbackId
   * @returns {*}
   */
  deletePlaybackId(assetId, playbackId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to delete a playbackId'));
    }

    if (!playbackId) {
      return Promise.reject(new Error('A playbackId is required to delete a playbackId'));
    }
    return api.del(`${buildBasePath(assetId)}/${playbackId}`, this.requestOptions);
  }
}


module.exports = PlaybackIds;
