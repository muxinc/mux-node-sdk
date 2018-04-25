/*!
 * mux
 * Copyright(c) 2018 Mux Inc.
 */

const Assets = require('./resources/Assets');
const PlaybackIds = require('./resources/PlaybackIds');

/**
 *
 */
export default class Video {
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

    const config = {
      apiKey,
      secret,
    };

    this.assets = new Assets(config);
    this.playbackIds = new PlaybackIds(config);
  }
}
