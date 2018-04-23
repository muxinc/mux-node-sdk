/*!
 * mux
 * Copyright(c) 2018 Mux Inc.
 */

import Assets from './resources/Assets';
import PlaybackIds from './resources/PlaybackIds';

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
