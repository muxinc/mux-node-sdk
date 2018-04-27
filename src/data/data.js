/*!
 * Mux Data
 * Copyright(c) 2018 Mux Inc.
 */

const Metrics = require('../../src/data/resources/metrics');
const Errors = require('../../src/data/resources/errors');
const Filters = require('../../src/data/resources/filters');
const Exports = require('../../src/data/resources/exports');
const VideoViews = require('../../src/data/resources/video_views');

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

    this.metrics = new Metrics(accessToken, secret);
    this.errors = new Errors(accessToken, secret);
    this.filters = new Filters(accessToken, secret);
    this.exports = new Exports(accessToken, secret);
    this.videoViews = new VideoViews(accessToken, secret);
  }
}

module.exports = Data;
