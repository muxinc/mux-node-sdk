/*!
 * Mux Data
 * Copyright(c) 2018 Mux Inc.
 */

const Base = require('../base');
const Errors = require('../../src/data/resources/errors');
const Exports = require('../../src/data/resources/exports');
const Filters = require('../../src/data/resources/filters');
const Incidents = require('../../src/data/resources/incidents');
const Metrics = require('../../src/data/resources/metrics');
const RealTime = require('../../src/data/resources/real_time');
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

    /** @type {Errors} */
    this.Errors = new Errors(this);

    /** @type {Exports} */
    this.Exports = new Exports(this);

    /** @type {Filters} */
    this.Filters = new Filters(this);

    /** @type {Incidents} */
    this.Incidents = new Incidents(this);

    /** @type {Metrics} */
    this.Metrics = new Metrics(this);

    /** @type {RealTime} */
    this.RealTime = new RealTime(this);

    /** @type {VideoViews} */
    this.VideoViews = new VideoViews(this);
  }
}

module.exports = Data;
