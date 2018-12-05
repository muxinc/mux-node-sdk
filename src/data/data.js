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
    this.metrics = this.Metrics;

    /** @type {Errors} */
    this.Errors = new Errors(this);
    this.errors = this.Errors;

    /** @type {Filters} */
    this.Filters = new Filters(this);
    this.filters = this.Filters;

    /** @type {Exports} */
    this.Exports = new Exports(this);
    this.exports = this.Exports;

    /** @type {VideoViews} */
    this.VideoViews = new VideoViews(this);
    this.videoViews = this.VideoViews;
  }
}

module.exports = Data;
