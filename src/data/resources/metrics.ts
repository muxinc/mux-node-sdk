/*!
 * Mux Metrics
 * Copyright(c) 2018 Mux Inc.
 */
const Base = require('../../base');

/**
 * @private Base metrics path for the Mux API
 * */
const PATH = '/data/v1/metrics';

/**
 * Metrics Class - Provides access to the Mux Data Metrics API
 *
 * @extends Base
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Data } = muxClient;
 *
 * // List all of the values across every breakdown for a specific metric grouped by operating system
 * Data.Metrics.breakdown('aggregate_startup_time', { group_by: 'operating_system' });
 */
class Metrics extends Base {
  /**
   * List the breakdown values for a specific metric
   *
   * @param {string} metricId - The metric name/id for see https://api-docs.mux.com/#breakdown-get for a list of all metric ids
   * @param {Object} params - example: {group_by: 'browser'}
   * NOTE: the group_by query parameter is required
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // List all of the values across every breakdown for a specific metric grouped by browser
   * Data.Metrics.breakdown('aggregate_startup_time', { group_by: 'browser' });
   *
   * @see https://api-docs.mux.com/#breakdown-get
   */
  breakdown(metricId, params) {
    return this.http.get(`${PATH}/${metricId}/breakdown`, { params });
  }

  /**
   * List all of the values across every breakdown for a specific metric
   *
   * @param {Object} params - example { value: 'safari', timeframe: '24:hours', dimension: 'cdn' }
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // List the breakdown values for a specific metric within the last 24 hours
   * Data.Metrics.comparison({ value: 'safari', timeframe: '24:hours', dimension: 'cdn' });
   * Note: the value query parameter is required
   *
   * @see https://api-docs.mux.com/#comparison-get
   */
  comparison(params) {
    if (!params || (params && !params.value)) {
      throw new Error(
        'The value query parameter is required for comparing metrics'
      );
    }
    return this.http.get(`${PATH}/comparison`, { params });
  }

  /**
   * Returns a list of insights for a metric. These are the worst performing values across all
   * breakdowns sorted by how much they negatively impact a specific metric.
   *
   * @param {string} metricId - The metric name/id for see https://api-docs.mux.com/#breakdown-get for a list of all metric ids
   * @param {Object} [params] - example { measurement: 'median', order_direction: 'desc' }
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Get a list of insights for a metric measured by median and ordered descending
   * Data.Metrics.insights('aggregate_startup_time', { measurement: 'median', order_direction: 'desc' });
   *
   * @see https://api-docs.mux.com/#insight-get
   */
  insights(metricId, params) {
    if (!metricId) {
      throw new Error('A metric Id is required for insight metrics.');
    }
    return this.http.get(`${PATH}/${metricId}/insights`, { params });
  }

  /**
   * Returns the overall value for a specific metric, as well as the total view count,
   * watch time, and the Mux Global metric value for the metric.
   *
   * @param {string} metricId - The metric name/id for see https://api-docs.mux.com/#overall-get for a list of all metric ids
   * @param {Object} [params] - example { timeframe: ['7:days'], filters: ['operating_system:windows'] }
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Get the overall value for a specific metric within the past 7 days
   * Data.Metrics.overall('aggregate_startup_time', { timeframe: ['7:days'] });
   *
   * @see https://api-docs.mux.com/#overall-get
   */
  overall(metricId, params) {
    if (!metricId) {
      throw new Error('A metric Id is required for overall metrics.');
    }
    return this.http.get(`${PATH}/${metricId}/overall`, { params });
  }

  /**
   * Returns timeseries data for a specific metric
   *
   * @param {string} metricId - The metric name/id for see https://api-docs.mux.com/#timeseries for a list of all metric ids
   * @param {Object} [params] - example { timeframe: ['7:days'], filters: ['operating_system:windows'] }
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Get timeseries data for a specific metric within the past 7 days
   * Data.Metrics.timeseries('aggregate_startup_time', { timeframe: ['7:days'] });
   *
   * @see https://api-docs.mux.com/#timeseries
   */
  timeseries(metricId, params) {
    if (!metricId) {
      throw new Error('A metric Id is required for timeseries metrics.');
    }
    return this.http.get(`${PATH}/${metricId}/timeseries`, { params });
  }
}

module.exports = Metrics;
