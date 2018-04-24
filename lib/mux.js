/*!
 * mux
 * Copyright(c) 2018 Mux Inc.
 */

const Assets = require('./resources/Assets');
const PlaybackIds = require('./resources/PlaybackIds');

/**
 * Mux class
 * @class
 */
class Mux {
  constructor(apiKey, secret) {
    if (apiKey === undefined) {
      throw new Error('API key must be provided.');
    }

    if (secret === undefined) {
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

module.exports = Mux;
