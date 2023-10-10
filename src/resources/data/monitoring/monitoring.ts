// File generated from our OpenAPI spec by Stainless.

import * as Core from '@mux/mux-node/core';
import { APIResource } from '@mux/mux-node/resource';
import * as MonitoringAPI from '@mux/mux-node/resources/data/monitoring/monitoring';
import * as MetricsAPI from '@mux/mux-node/resources/data/monitoring/metrics';

export class Monitoring extends APIResource {
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this.client);

  /**
   * Lists available monitoring dimensions.
   */
  listDimensions(options?: Core.RequestOptions): Core.APIPromise<MonitoringListDimensionsResponse> {
    return this.get('/data/v1/monitoring/dimensions', options);
  }
}

export interface MonitoringListDimensionsResponse {
  data: Array<MonitoringListDimensionsResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number;
}

export namespace MonitoringListDimensionsResponse {
  export interface Data {
    display_name?: string;

    name?: string;
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
