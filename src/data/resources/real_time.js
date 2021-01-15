/*!
 * Mux Real-Time
 * Copyright(c) 2020 Mux Inc.
 */
const Base = require('../../base');

/**
 * @private Base real-time path for the Mux API
 * */
const PATH = '/data/v1/realtime';

/**
 * Real-Time Class - Provides access to the Mux Data Real-Time API
 *
 * @extends Base
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Data } = muxClient;
 *
 * // Returns a list of available real-time dimensions
 * Data.RealTime.dimensions();
 */
class RealTime extends Base {
  /**
   * List of available real-time dimensions
   *
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Returns a list of available real-time dimensions
   * Data.RealTime.dimensions();
   *
   * @see https://api-docs.mux.com/#real-time-get
   */
  dimensions() {
    return this.http.get(`${PATH}/dimensions`);
  }

  /**
   * List available real-time metrics
   *
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Returns a list of available real-time metrics
   * Data.RealTime.metrics();
   *
   * @see https://api-docs.mux.com/#real-time-get-1
   */
  metrics() {
    return this.http.get(`${PATH}/metrics`);
  }

  /**
   * Get breakdown information for a specific dimension and metric along with the number of concurrent viewers and negative impact score.
   *
   * @param {string} metricId - The metric name/id for see https://api-docs.mux.com/#real-time-get-1 for a list of all metric ids
   * @param {Object} params - example { dimension: 'asn', timestamp: 1547853000, filters: ['operating_system:windows', 'country:US'] }
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // List the breakdown information for current-concurrent-viewers by ASN for a specific time for the Windows operating system in the US
   * Data.RealTime.breakdown('current-concurrent-viewers', { dimension: 'asn', timestamp: 1547853000, filters: ['operating_system:windows', 'country:US'] });
   *
   * @see https://api-docs.mux.com/#real-time-get-2
   */
  breakdown(metricId, params) {
    if (!metricId) {
      throw new Error(
        'A metric Id is required for real-time breakdown information'
      );
    }

    if (!params || (params && !params.dimension)) {
      throw new Error(
        'The dimension query parameter is required for real-time breakdown information'
      );
    }
    return this.http.get(`${PATH}/metrics/${metricId}/breakdown`, { params });
  }

  /**
   * List histogram timeseries information for a specific metric
   *
   * @param {string} metricId - The metric name/id for see https://api-docs.mux.com/#real-time-get-1 for a list of all metric ids
   * @param {Object} params - example { filters: ['operating_system:windows', 'country:US'] }
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // List histogram timeseries information for video-startup-time for the Windows operating system in the US
   * Data.RealTime.histogramTimeseries('video-startup-time', { filters: ['operating_system:windows', 'country:US'] });
   *
   * @see https://api-docs.mux.com/#real-time-get-3
   */
  histogramTimeseries(metricId, params) {
    if (!metricId) {
      throw new Error(
        'A metric Id is required for real-time histogram timeseries information'
      );
    }
    return this.http.get(`${PATH}/metrics/${metricId}/histogram-timeseries`, {
      params,
    });
  }

  /**
   * List timeseries information for a specific metric along with the number of concurrent viewers.
   *
   * @param {string} metricId - The metric name/id for see https://api-docs.mux.com/#real-time-get-1 for a list of all metric ids
   * @param {Object} params - example { filters: ['operating_system:windows', 'country:US'] }
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // List timeseries information for the playback-failure-percentage metric along with the number of concurrent viewers for the Windows operating system in the US
   * Data.RealTime.timeseries('playback-failure-percentage', { filters: ['operating_system:windows', 'country:US'] });
   *
   * @see https://api-docs.mux.com/#real-time-get-3
   */
  timeseries(metricId, params) {
    if (!metricId) {
      throw new Error(
        'A metric Id is required for real-time timeseries information.'
      );
    }
    return this.http.get(`${PATH}/metrics/${metricId}/timeseries`, {
      params,
    });
  }
}
module.exports = RealTime;
