/*!
 * Mux Metrics
 * Copyright(c) 2018 Mux Inc.
 */
import { Base } from '../../base';
import { RequestOptions } from '../../RequestOptions';

/**
 * @private Base metrics path for the Mux API
 * */
const PATH = '/data/v1/metrics';

export interface Metric {
  value?: number;
  type?: string;
  name?: string;
  metric?: string;
  measurement?: string;
}

export interface Insight {
  total_watch_time?: number;
  total_views?: number;
  negative_impact_score?: number;
  metric?: number;
  filter_value?: string;
  filter_column?: string;
}

export interface MetricsOverallValue {
  value?: number;
  total_watch_time?: number;
  total_views?: number;
  global_value?: number;
}


export interface MetricsBreakdownValue {
  views?: number;
  value?: number;
  total_watch_time?: number;
  negative_impact?: number;
  field?: string;
}

export interface MetricsComparisonValue {
  watch_time?: number;
  view_count?: number;
  name?: string;
  value?: number;
  metric?: string;
  items?: Array<Metric>;
}

export interface MetricsBreakdownQueryParams {
  group_by: string;
  measurement?: '95th' | 'median' | 'avg';
  filters?: Array<string>;
  limit?: number;
  page?: number;
  order_by?: 'negative_impact' | 'value' | 'views' | 'field';
  order_direction?: 'asc' | 'desc';
  timeframe?: Array<string>;
}

export interface MetricsComparisonQueryParams {
  value: string;
  dimension?: string;
  filters?: Array<string>;
  timeframe?: Array<string>;
}

export interface MetricsInsightsQueryParams {
  measurement?: string;
  order_direction?: string;
  timeframe?: Array<string>;
}

export interface MetricsOverallQueryParams {
  timeframe?: Array<string>;
  filters?: Array<string>;
  measurement?: '95th' | 'median' | 'avg';
}

export interface MetricsTimeseriesQueryParams {
  filters?: Array<string>;
  timeframe?: Array<string>;
  measurement?: '95th' | 'median' | 'avg';
  group_by?: string;
}

export declare interface MetricsBreakdownResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: Array<MetricsBreakdownValue>;
}

export declare interface MetricsComparisonResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: Array<MetricsComparisonValue>;
}

export declare interface MetricsInsightsResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: Array<Insight>;
}

export declare interface MetricsOverallResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: MetricsOverallValue;
}

export declare interface MetricsTimeseriesResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: Array<Array<string>>;
}



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
export class Metrics extends Base {
  constructor(base: Base)
  constructor(config: RequestOptions)
  constructor(accessToken: string, secret: string, config: RequestOptions)
  constructor(accessTokenOrConfigOrBase: string | RequestOptions | Base, secret?: string, config?: RequestOptions) {
    if (accessTokenOrConfigOrBase instanceof Base) {
      super(accessTokenOrConfigOrBase);
    } else if (typeof accessTokenOrConfigOrBase === 'object') {
      super(accessTokenOrConfigOrBase);
    } else {
      super(accessTokenOrConfigOrBase, secret!, config!);
    }
  }

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
   * @see https://docs.mux.com/api-reference/data#operation/list-breakdown-values
   */
  breakdown(
    metricId: string,
    params?: MetricsBreakdownQueryParams,
  ): Promise<MetricsBreakdownResponse> {
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
   * @see https://docs.mux.com/api-reference/data#operation/list-all-metric-values
   */
  comparison(
    params?: MetricsComparisonQueryParams,
  ): Promise<MetricsComparisonResponse> {
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
   * @see https://docs.mux.com/api-reference/data#operation/list-insights
   */
  insights(
    metricId: string,
    params?: MetricsInsightsQueryParams,
  ): Promise<MetricsInsightsResponse> {
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
   * @see https://docs.mux.com/api-reference/data#operation/get-overall-values
   */
  overall(
    metricId: string,
    params?: MetricsOverallQueryParams,
  ): Promise<MetricsOverallResponse> {
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
   * @see https://docs.mux.com/api-reference/data#operation/get-metric-timeseries-data
   */
  timeseries(
    metricId: string,
    params?: MetricsTimeseriesQueryParams,
  ): Promise<MetricsTimeseriesResponse> {
    if (!metricId) {
      throw new Error('A metric Id is required for timeseries metrics.');
    }
    return this.http.get(`${PATH}/${metricId}/timeseries`, { params });
  }
}
