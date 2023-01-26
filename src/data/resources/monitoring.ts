/*!
 * Mux Monitoring
 * Copyright(c) 2020 Mux Inc.
 */
import { Base } from '../../base.js';
import {
  MonitoringBreakdownQueryParams,
  MonitoringBreakdownResponse,
  MonitoringDimensionsResponse,
  MonitoringHistogramQueryParams,
  MonitoringHistogramResponse,
  MonitoringMetricsResponse,
  MonitoringTimeseriesParams,
  MonitoringTimeseriesResponse,
} from '../domain.js';

/**
 * @private Base monitoring path for the Mux API
 * */
const PATH = '/data/v1/monitoring';

/**
 * Monitoring Class - Provides access to the Mux Data Monitoring API
 *
 * @extends Base
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Data } = muxClient;
 *
 * // Returns a list of available monitoring dimensions
 * Data.Monitoring.dimensions();
 */
export class Monitoring extends Base {
  /**
   * List of available monitoring dimensions
   *
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Returns a list of available monitoring dimensions
   * Data.Monitoring.dimensions();
   *
   * @see https://docs.mux.com/api-reference/data#operation/list-monitoring-dimensions
   */
  dimensions(): Promise<MonitoringDimensionsResponse> {
    return this.http.get(`${PATH}/dimensions`);
  }

  /**
   * List available monitoring metrics
   *
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Returns a list of available monitoring metrics
   * Data.Monitoring.metrics();
   *
   * @see https://docs.mux.com/api-reference/data#operation/list-monitoring-metrics
   */
  metrics(): Promise<MonitoringMetricsResponse> {
    return this.http.get(`${PATH}/metrics`);
  }

  /**
   * Get breakdown information for a specific dimension and metric along with the number of concurrent viewers and negative impact score.
   *
   * @param {string} metricId - The metric name/id for see https://api-docs.mux.com/#monitoring-get-1 for a list of all metric ids
   * @param {Object} params - example { dimension: 'asn', timestamp: 1547853000, filters: ['operating_system:windows', 'country:US'] }
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // List the breakdown information for current-concurrent-viewers by ASN for a specific time for the Windows operating system in the US
   * Data.Monitoring.breakdown('current-concurrent-viewers', { dimension: 'asn', timestamp: 1547853000, filters: ['operating_system:windows', 'country:US'] });
   *
   * @see https://docs.mux.com/api-reference/data#operation/get-monitoring-breakdown
   */
  breakdown(
    metricId: string,
    params?: MonitoringBreakdownQueryParams
  ): Promise<MonitoringBreakdownResponse> {
    if (!metricId) {
      throw new Error(
        'A metric Id is required for monitoring breakdown information'
      );
    }

    if (!params || (params && !params.dimension)) {
      throw new Error(
        'The dimension query parameter is required for monitoring breakdown information'
      );
    }
    return this.http.get(`${PATH}/metrics/${metricId}/breakdown`, { params });
  }

  /**
   * List histogram timeseries information for a specific metric
   *
   * @param {string} metricId - The metric name/id for see https://api-docs.mux.com/#monitoring-get-1 for a list of all metric ids
   * @param {Object} params - example { filters: ['operating_system:windows', 'country:US'] }
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // List histogram timeseries information for video-startup-time for the Windows operating system in the US
   * Data.Monitoring.histogramTimeseries('video-startup-time', { filters: ['operating_system:windows', 'country:US'] });
   *
   * @see https://docs.mux.com/api-reference/data#operation/get-monitoring-histogram-timeseries
   */
  histogramTimeseries(
    metricId: string,
    params?: MonitoringHistogramQueryParams
  ): Promise<MonitoringHistogramResponse> {
    if (!metricId) {
      throw new Error(
        'A metric Id is required for monitoring histogram timeseries information'
      );
    }
    return this.http.get(`${PATH}/metrics/${metricId}/histogram-timeseries`, {
      params,
    });
  }

  /**
   * List timeseries information for a specific metric along with the number of concurrent viewers.
   *
   * @param {string} metricId - The metric name/id for see https://api-docs.mux.com/#monitoring-get-1 for a list of all metric ids
   * @param {Object} params - example { filters: ['operating_system:windows', 'country:US'] }
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // List timeseries information for the playback-failure-percentage metric along with the number of concurrent viewers for the Windows operating system in the US
   * Data.Monitoring.timeseries('playback-failure-percentage', { filters: ['operating_system:windows', 'country:US'] });
   *
   * @see https://docs.mux.com/api-reference/data#operation/get-monitoring-timeseries
   */
  timeseries(
    metricId: string,
    params?: MonitoringTimeseriesParams
  ): Promise<MonitoringTimeseriesResponse> {
    if (!metricId) {
      throw new Error(
        'A metric Id is required for monitoring timeseries information.'
      );
    }
    return this.http.get(`${PATH}/metrics/${metricId}/timeseries`, {
      params,
    });
  }
}
