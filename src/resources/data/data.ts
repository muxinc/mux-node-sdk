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
  export import DimensionValue = DimensionsAPI.DimensionValue;
  export import DimensionsResponse = DimensionsAPI.DimensionsResponse;
  export import DimensionValuesBasePage = DimensionsAPI.DimensionValuesBasePage;
  export import DimensionListValuesParams = DimensionsAPI.DimensionListValuesParams;
  export import Monitoring = MonitoringAPI.Monitoring;
  export import MonitoringListDimensionsResponse = MonitoringAPI.MonitoringListDimensionsResponse;
  export import Errors = ErrorsAPI.Errors;
  export import ErrorsResponse = ErrorsAPI.ErrorsResponse;
  export import ErrorListParams = ErrorsAPI.ErrorListParams;
  export import Exports = ExportsAPI.Exports;
  export import ExportsResponse = ExportsAPI.ExportsResponse;
  export import VideoViewExportsResponse = ExportsAPI.VideoViewExportsResponse;
  export import Filters = FiltersAPI.Filters;
  export import FilterValue = FiltersAPI.FilterValue;
  export import FiltersResponse = FiltersAPI.FiltersResponse;
  export import FilterValuesBasePage = FiltersAPI.FilterValuesBasePage;
  export import FilterListValuesParams = FiltersAPI.FilterListValuesParams;
  export import Incidents = IncidentsAPI.Incidents;
  export import Incident = IncidentsAPI.Incident;
  export import IncidentResponse = IncidentsAPI.IncidentResponse;
  export import IncidentsBasePage = IncidentsAPI.IncidentsBasePage;
  export import IncidentListParams = IncidentsAPI.IncidentListParams;
  export import IncidentListRelatedParams = IncidentsAPI.IncidentListRelatedParams;
  export import Metrics = MetricsAPI.Metrics;
  export import AllMetricValuesResponse = MetricsAPI.AllMetricValuesResponse;
  export import BreakdownValue = MetricsAPI.BreakdownValue;
  export import InsightsResponse = MetricsAPI.InsightsResponse;
  export import MetricTimeseriesDataResponse = MetricsAPI.MetricTimeseriesDataResponse;
  export import OverallValuesResponse = MetricsAPI.OverallValuesResponse;
  export import BreakdownValuesBasePage = MetricsAPI.BreakdownValuesBasePage;
  export import MetricListParams = MetricsAPI.MetricListParams;
  export import MetricGetInsightsParams = MetricsAPI.MetricGetInsightsParams;
  export import MetricGetOverallValuesParams = MetricsAPI.MetricGetOverallValuesParams;
  export import MetricGetTimeseriesParams = MetricsAPI.MetricGetTimeseriesParams;
  export import MetricListBreakdownValuesParams = MetricsAPI.MetricListBreakdownValuesParams;
  export import RealTime = RealTimeAPI.RealTime;
  export import RealTimeBreakdownResponse = RealTimeAPI.RealTimeBreakdownResponse;
  export import RealTimeDimensionsResponse = RealTimeAPI.RealTimeDimensionsResponse;
  export import RealTimeHistogramTimeseriesResponse = RealTimeAPI.RealTimeHistogramTimeseriesResponse;
  export import RealTimeMetricsResponse = RealTimeAPI.RealTimeMetricsResponse;
  export import RealTimeTimeseriesResponse = RealTimeAPI.RealTimeTimeseriesResponse;
  export import RealTimeRetrieveBreakdownParams = RealTimeAPI.RealTimeRetrieveBreakdownParams;
  export import RealTimeRetrieveHistogramTimeseriesParams = RealTimeAPI.RealTimeRetrieveHistogramTimeseriesParams;
  export import RealTimeRetrieveTimeseriesParams = RealTimeAPI.RealTimeRetrieveTimeseriesParams;
  export import VideoViews = VideoViewsAPI.VideoViews;
  export import AbridgedVideoView = VideoViewsAPI.AbridgedVideoView;
  export import VideoViewResponse = VideoViewsAPI.VideoViewResponse;
  export import AbridgedVideoViewsBasePage = VideoViewsAPI.AbridgedVideoViewsBasePage;
  export import VideoViewListParams = VideoViewsAPI.VideoViewListParams;
}
