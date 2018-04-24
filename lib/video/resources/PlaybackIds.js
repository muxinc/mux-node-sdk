/*!
 * mux
 * Copyright(c) 2018 Mux Inc.
 */

const { get, del } = require('../../utils/api');

const buildBasePath = assetId => `/video/v1/${assetId}/playback-ids`;

/**
 * Mux class
 * @class
 */
class PlaybackIds {
  constructor(config) {
    if (config.apiKey === undefined) {
      throw new Error('API key must be provided.');
    }

    if (config.secret === undefined) {
      throw new Error('API secret key must be provided');
    }

    this.requestOptions = {
      auth: {
        username: config.apiKey,
        password: config.secret,
      },
    };
  }

  get(assetId) {
    return get(buildBasePath(assetId), this.requestOptions);
  }

  del(assetId) {
    return del(`${buildBasePath(assetId)}/playback-id`, this.requestOptions);
  }
}


module.exports = PlaybackIds;
