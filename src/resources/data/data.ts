// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DimensionsAPI from './dimensions';
import * as ErrorsAPI from './errors';
import * as ExportsAPI from './exports';
import * as FiltersAPI from './filters';
import * as IncidentsAPI from './incidents';
import * as MetricsAPI from './metrics';
import * as RealTimeAPI from './real-time';
import * as VideoViewsAPI from './video-views';
import * as MonitoringAPI from './monitoring/monitoring';

export class Data extends APIResource {
  dimensions: DimensionsAPI.Dimensions = new DimensionsAPI.Dimensions(this._client);
  monitoring: MonitoringAPI.Monitoring = new MonitoringAPI.Monitoring(this._client);
  errors: ErrorsAPI.Errors = new ErrorsAPI.Errors(this._client);
  exports: ExportsAPI.Exports = new ExportsAPI.Exports(this._client);
  filters: FiltersAPI.Filters = new FiltersAPI.Filters(this._client);
  incidents: IncidentsAPI.Incidents = new IncidentsAPI.Incidents(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);
  realTime: RealTimeAPI.RealTime = new RealTimeAPI.RealTime(this._client);
  videoViews: VideoViewsAPI.VideoViews = new VideoViewsAPI.VideoViews(this._client);
}

export namespace Data {
  export import Dimensions = DimensionsAPI.Dimensions;
  export type DimensionValue = DimensionsAPI.DimensionValue;
  export type DimensionsResponse = DimensionsAPI.DimensionsResponse;
  export import DimensionValuesBasePage = DimensionsAPI.DimensionValuesBasePage;
  export type DimensionListValuesParams = DimensionsAPI.DimensionListValuesParams;
  export import Monitoring = MonitoringAPI.Monitoring;
  export type MonitoringListDimensionsResponse = MonitoringAPI.MonitoringListDimensionsResponse;
  export import Errors = ErrorsAPI.Errors;
  export type ErrorsResponse = ErrorsAPI.ErrorsResponse;
  export type ErrorListParams = ErrorsAPI.ErrorListParams;
  export import Exports = ExportsAPI.Exports;
  export type ExportsResponse = ExportsAPI.ExportsResponse;
  export type VideoViewExportsResponse = ExportsAPI.VideoViewExportsResponse;
  export import Filters = FiltersAPI.Filters;
  export type FilterValue = FiltersAPI.FilterValue;
  export type FiltersResponse = FiltersAPI.FiltersResponse;
  export import FilterValuesBasePage = FiltersAPI.FilterValuesBasePage;
  export type FilterListValuesParams = FiltersAPI.FilterListValuesParams;
  export import Incidents = IncidentsAPI.Incidents;
  export type Incident = IncidentsAPI.Incident;
  export type IncidentResponse = IncidentsAPI.IncidentResponse;
  export import IncidentsBasePage = IncidentsAPI.IncidentsBasePage;
  export type IncidentListParams = IncidentsAPI.IncidentListParams;
  export type IncidentListRelatedParams = IncidentsAPI.IncidentListRelatedParams;
  export import Metrics = MetricsAPI.Metrics;
  export type AllMetricValuesResponse = MetricsAPI.AllMetricValuesResponse;
  export type BreakdownValue = MetricsAPI.BreakdownValue;
  export type InsightsResponse = MetricsAPI.InsightsResponse;
  export type MetricTimeseriesDataResponse = MetricsAPI.MetricTimeseriesDataResponse;
  export type OverallValuesResponse = MetricsAPI.OverallValuesResponse;
  export import BreakdownValuesBasePage = MetricsAPI.BreakdownValuesBasePage;
  export type MetricListParams = MetricsAPI.MetricListParams;
  export type MetricGetInsightsParams = MetricsAPI.MetricGetInsightsParams;
  export type MetricGetOverallValuesParams = MetricsAPI.MetricGetOverallValuesParams;
  export type MetricGetTimeseriesParams = MetricsAPI.MetricGetTimeseriesParams;
  export type MetricListBreakdownValuesParams = MetricsAPI.MetricListBreakdownValuesParams;
  export import RealTime = RealTimeAPI.RealTime;
  export type RealTimeBreakdownResponse = RealTimeAPI.RealTimeBreakdownResponse;
  export type RealTimeDimensionsResponse = RealTimeAPI.RealTimeDimensionsResponse;
  export type RealTimeHistogramTimeseriesResponse = RealTimeAPI.RealTimeHistogramTimeseriesResponse;
  export type RealTimeMetricsResponse = RealTimeAPI.RealTimeMetricsResponse;
  export type RealTimeTimeseriesResponse = RealTimeAPI.RealTimeTimeseriesResponse;
  export type RealTimeRetrieveBreakdownParams = RealTimeAPI.RealTimeRetrieveBreakdownParams;
  export type RealTimeRetrieveHistogramTimeseriesParams =
    RealTimeAPI.RealTimeRetrieveHistogramTimeseriesParams;
  export type RealTimeRetrieveTimeseriesParams = RealTimeAPI.RealTimeRetrieveTimeseriesParams;
  export import VideoViews = VideoViewsAPI.VideoViews;
  export type AbridgedVideoView = VideoViewsAPI.AbridgedVideoView;
  export type VideoViewResponse = VideoViewsAPI.VideoViewResponse;
  export import AbridgedVideoViewsBasePage = VideoViewsAPI.AbridgedVideoViewsBasePage;
  export type VideoViewListParams = VideoViewsAPI.VideoViewListParams;
}
