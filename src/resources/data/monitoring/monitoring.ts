// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@mux/mux-node/core';
import { APIResource } from '@mux/mux-node/resource';
import * as MonitoringAPI from '@mux/mux-node/resources/data/monitoring/monitoring';
import * as MetricsAPI from '@mux/mux-node/resources/data/monitoring/metrics';

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
  export import MonitoringListDimensionsResponse = MonitoringAPI.MonitoringListDimensionsResponse;
  export import Metrics = MetricsAPI.Metrics;
  export import MetricListResponse = MetricsAPI.MetricListResponse;
  export import MetricGetBreakdownResponse = MetricsAPI.MetricGetBreakdownResponse;
  export import MetricGetBreakdownTimeseriesResponse = MetricsAPI.MetricGetBreakdownTimeseriesResponse;
  export import MetricGetHistogramTimeseriesResponse = MetricsAPI.MetricGetHistogramTimeseriesResponse;
  export import MetricGetTimeseriesResponse = MetricsAPI.MetricGetTimeseriesResponse;
  export import MetricGetBreakdownParams = MetricsAPI.MetricGetBreakdownParams;
  export import MetricGetBreakdownTimeseriesParams = MetricsAPI.MetricGetBreakdownTimeseriesParams;
  export import MetricGetHistogramTimeseriesParams = MetricsAPI.MetricGetHistogramTimeseriesParams;
  export import MetricGetTimeseriesParams = MetricsAPI.MetricGetTimeseriesParams;
}
