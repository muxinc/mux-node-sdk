/*!
 * mux
 * Copyright(c) 2018 Mux Inc.
 */

const { get, del, post } = require('../../utils/api');

const buildBasePath = assetId => `/video/v1/assets/${assetId}/playback-ids`;

/**
 * Mux class
 * @class
 */
class PlaybackIds {
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

  create(assetId) {
    return post(buildBasePath(assetId), { policy: 'public' }, this.requestOptions);
  }

  get(assetId, playbackId) {
    return get(`${buildBasePath(assetId)}/${playbackId}`, this.requestOptions);
  }

  del(assetId, playbackId) {
    return del(`${buildBasePath(assetId)}/${playbackId}`, this.requestOptions);
  }
}


module.exports = PlaybackIds;
