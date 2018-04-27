/*!
 * Mux Metrics
 * Copyright(c) 2018 Mux Inc.
 */

const api = require('../../utils/api');

/**
 * @private Base metrics path for the Mux API
 * */
const PATH = '/data/v1/metrics';

/**
 * Metrics Class - Provides access to the Mux Data Metrics API
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Data } = muxClient;
 *
 * // List all of the values across every breakdown for a specific metric
 * Data.metrics.breakdown('aggregate_startup_time', queryParams);
 */
class Metrics {
  /**
   * @ignore
   * Metrics Constructor
   *
   * @param {string} accessToken - Mux API Access Token
   * @param {string} secret - Mux API Access Token secret
   * @constructor
   */
  constructor(accessToken, secret) {
    if (typeof accessToken === 'undefined') {
      throw new Error('API Access Token must be provided.');
    }

    if (typeof secret === 'undefined') {
      throw new Error('API secret key must be provided');
    }

    /**
     *  @ignore
     *  @type {Object} requestOptions - The HTTP request options for Mux Assets
     *  @property {string} requestOptions.auth.username - HTTP basic auth username (access token)
     *  @property {string} requestOptions.auth.password - HTTP basic auth password (secret)
     * */
    this.requestOptions = {
      auth: {
        username: accessToken,
        password: secret,
      },
    };
  }

  /**
   * List the breakdown values for a specific metric
   *
   * @param {string} metricId - The metric name/id for see https://api-docs.mux.com/#breakdown-get for a list of all metric ids
   * @param {Object} queryParams - example: {group_by: 'browser'}
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // List all of the values across every breakdown for a specific metric
   * Data.metrics.breakdown('aggregate_startup_time', {group_by: 'browser'});
   *
   * @see https://api-docs.mux.com/#breakdown-get
   */
  breakdown(metricId, queryParams) {
    return api.get(`${PATH}/${metricId}/breakdown`, queryParams, this.requestOptions);
  }

  /**
   * List the breakdown values for a specific metric
   *
   * @param {Object} queryParams -
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // List the breakdown values for a specific metric
   * Data.metrics.comparison(queryParams);
   *
   * @see https://api-docs.mux.com/#comparison-get
   */
  comparison(queryParams) {
    return api.get(`${PATH}/comparison`, queryParams, this.requestOptions);
  }

  /**
   * Returns a list of insights for a metric. These are the worst performing values across all
   * breakdowns sorted by how much they negatively impact a specific metric.
   *
   * @param {string} metricId - The metric name/id for see https://api-docs.mux.com/#breakdown-get for a list of all metric ids
   * @param {Object} queryParams -
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Get a list of insights for a metric
   * Data.metrics.insights('aggregate_startup_time', queryParams);
   *
   * @see https://api-docs.mux.com/#insight-get
   */
  insights(metricId, queryParams) {
    return api.get(`${PATH}/${metricId}/insights`, queryParams, this.requestOptions);
  }

  /**
   * Returns the overall value for a specific metric, as well as the total view count,
   * watch time, and the Mux Global metric value for the metric.
   *
   * @param {string} metricId - The metric name/id for see https://api-docs.mux.com/#overall-get for a list of all metric ids
   * @param {Object} queryParams -
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Get the overall value for a specific metric
   * Data.metrics.overall('aggregate_startup_time', queryParams);
   *
   * @see https://api-docs.mux.com/#overall-get
   */
  overall(metricId, queryParams) {
    return api.get(`${PATH}/${metricId}/overall`, queryParams, this.requestOptions);
  }

  /**
   * Returns timeseries data for a specific metric
   *
   * @param {string} metricId - The metric name/id for see https://api-docs.mux.com/#timeseries for a list of all metric ids
   * @param {Object} queryParams -
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Get timeseries data for a specific metric
   * Data.metrics.timeseries('aggregate_startup_time', queryParams);
   *
   * @see https://api-docs.mux.com/#timeseries
   */
  timeseries(metricId, queryParams) {
    return api.get(`${PATH}/${metricId}/timeseries`, queryParams, this.requestOptions);
  }
}

module.exports = Metrics;
