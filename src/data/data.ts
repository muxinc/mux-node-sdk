/*!
 * Mux Data
 * Copyright(c) 2018 Mux Inc.
 */

const Base = require('../base');
const Errors = require('./resources/errors');
const Exports = require('./resources/exports');
const Filters = require('./resources/filters');
const Incidents = require('./resources/incidents');
const Metrics = require('./resources/metrics');
const RealTime = require('./resources/real_time');
const VideoViews = require('./resources/video_views');

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
