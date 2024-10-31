// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MetricsAPI from './metrics';
import {
  MetricGetBreakdownParams,
  MetricGetBreakdownResponse,
  MetricGetBreakdownTimeseriesParams,
  MetricGetBreakdownTimeseriesResponse,
  MetricGetHistogramTimeseriesParams,
  MetricGetHistogramTimeseriesResponse,
  MetricGetTimeseriesParams,
  MetricGetTimeseriesResponse,
  MetricListResponse,
  Metrics,
} from './metrics';

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

Monitoring.Metrics = Metrics;

export declare namespace Monitoring {
  export { type MonitoringListDimensionsResponse as MonitoringListDimensionsResponse };

  export {
    Metrics as Metrics,
    type MetricListResponse as MetricListResponse,
    type MetricGetBreakdownResponse as MetricGetBreakdownResponse,
    type MetricGetBreakdownTimeseriesResponse as MetricGetBreakdownTimeseriesResponse,
    type MetricGetHistogramTimeseriesResponse as MetricGetHistogramTimeseriesResponse,
    type MetricGetTimeseriesResponse as MetricGetTimeseriesResponse,
    type MetricGetBreakdownParams as MetricGetBreakdownParams,
    type MetricGetBreakdownTimeseriesParams as MetricGetBreakdownTimeseriesParams,
    type MetricGetHistogramTimeseriesParams as MetricGetHistogramTimeseriesParams,
    type MetricGetTimeseriesParams as MetricGetTimeseriesParams,
  };
}
