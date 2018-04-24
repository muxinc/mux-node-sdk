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

    this.assets = new Assets(apiKey, secret);
    this.playbackIds = new PlaybackIds(apiKey, secret);
  }
}

module.exports = Mux;
