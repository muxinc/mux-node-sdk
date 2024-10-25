// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MonitoringAPI from './monitoring';
import * as MetricsAPI from './metrics';

export class Monitoring extends APIResource {
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);

  /**
   * Lists available monitoring dimensions.
   */
  listDimensions(options?: Core.RequestOptions): Core.APIPromise<MonitoringListDimensionsResponse> {
    return this._client.get('/data/v1/monitoring/dimensions', options);
  }
}

export interface MonitoringListDimensionsResponse {
  data: Array<MonitoringListDimensionsResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export namespace MonitoringListDimensionsResponse {
  export interface Data {
    display_name: string;

    name: string;
  }
}

export namespace Monitoring {
  export type MonitoringListDimensionsResponse = MonitoringAPI.MonitoringListDimensionsResponse;
  export import Metrics = MetricsAPI.Metrics;
  export type MetricListResponse = MetricsAPI.MetricListResponse;
  export type MetricGetBreakdownResponse = MetricsAPI.MetricGetBreakdownResponse;
  export type MetricGetBreakdownTimeseriesResponse = MetricsAPI.MetricGetBreakdownTimeseriesResponse;
  export type MetricGetHistogramTimeseriesResponse = MetricsAPI.MetricGetHistogramTimeseriesResponse;
  export type MetricGetTimeseriesResponse = MetricsAPI.MetricGetTimeseriesResponse;
  export type MetricGetBreakdownParams = MetricsAPI.MetricGetBreakdownParams;
  export type MetricGetBreakdownTimeseriesParams = MetricsAPI.MetricGetBreakdownTimeseriesParams;
  export type MetricGetHistogramTimeseriesParams = MetricsAPI.MetricGetHistogramTimeseriesParams;
  export type MetricGetTimeseriesParams = MetricsAPI.MetricGetTimeseriesParams;
}
