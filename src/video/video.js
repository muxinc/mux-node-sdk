/*!
 * mux
 * Copyright(c) 2018 Mux Inc.
 */

const Assets = require('./resources/assets');
const PlaybackIds = require('./resources/playbackIds');

/**
 *
 */
class Video {
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

    this.assets = new Assets(apiKey, secret);
    this.playbackIds = new PlaybackIds(apiKey, secret);
  }
}

module.exports = Video;
