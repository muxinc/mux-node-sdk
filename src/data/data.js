/*!
 * Mux Data
 * Copyright(c) 2018 Mux Inc.
 */

const Base = require('../base');
const Metrics = require('../../src/data/resources/metrics');
const Errors = require('../../src/data/resources/errors');
const Filters = require('../../src/data/resources/filters');
const Exports = require('../../src/data/resources/exports');
const VideoViews = require('../../src/data/resources/video_views');
const Incidents = require('../../src/data/resources/incidents');

/**
 * @ignore
 * @extends Base
 * Data Class - Provides access to the Mux Data API
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Data } = muxClient;
 *
 */
class Data extends Base {
  /**
   * Data Constructor
   *
   * @param {string} accessToken - Mux API Access Token
   * @param {string} secret - Mux API secret
   * @constructor
   */
  constructor(...params) {
    super(...params);

    /** @type {Metrics} */
    this.Metrics = new Metrics(this);

    /** @type {Errors} */
    this.Errors = new Errors(this);

    /** @type {Filters} */
    this.Filters = new Filters(this);

    /** @type {Exports} */
    this.Exports = new Exports(this);

    /** @type {VideoViews} */
    this.VideoViews = new VideoViews(this);

    /** @type {Incidents} */
    this.Incidents = new Incidents(this);
  }
}

module.exports = Data;
