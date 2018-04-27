/*!
 * mux
 * Copyright(c) 2018 Mux Inc.
 */

const Metrics = require('../../src/data/resources/metrics');
/**
 * @ignore
 * Data Class - Provides access to the Mux Data API
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Data } = muxClient;
 *
 */
class Data {
  /**
   * Data Constructor
   *
   * @param {string} accessToken - Mux API Access Token
   * @param {string} secret - Mux API secret
   * @constructor
   */
  constructor(accessToken, secret) {
    if (typeof accessToken === 'undefined') {
      throw new Error('API Access Token must be provided.');
    }

    if (typeof secret === 'undefined') {
      throw new Error('API secret key must be provided');
    }

    this.Metrics = new Metrics(accessToken, secret);
  }
}

module.exports = Data;
