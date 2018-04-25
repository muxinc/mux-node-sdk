/*!
 * mux
 * Copyright(c) 2018 Mux Inc.
 */

const { get, del, post } = require('../../utils/api');

const buildBasePath = assetId => `/video/v1/assets/${assetId}/playback-ids`;

/**
 * Mux class
 * @example
 * const PlaybackIds = new PlaybackIds(config);
 * @interface
 */
export default class PlaybackIds {
  /**
   * this is constructor description.
   * @param {Object} config.
   */
  constructor(config) {
    if (typeof config.apiKey === 'undefined') {
      throw new Error('API key must be provided.');
    }

    if (typeof config.secret === 'undefined') {
      throw new Error('API secret key must be provided');
    }

    this.requestOptions = {
      auth: {
        username: config.apiKey,
        password: config.secret,
      },
    };
  }

  /**
   *
   * @param assetId
   * @returns {*}
   */
  create(assetId) {
    if (!assetId) {
      return Promise.reject(new Error('An asset ID is required to create a playbackId'));
    }
    return post(buildBasePath(assetId), { policy: 'public' }, this.requestOptions);
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
    return get(`${buildBasePath(assetId)}/${playbackId}`, this.requestOptions);
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
    return del(`${buildBasePath(assetId)}/${playbackId}`, this.requestOptions);
  }
}

