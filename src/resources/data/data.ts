// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '@mux/mux-node/resource';
import { Dimensions } from './dimensions';
import { Monitoring } from './monitoring/monitoring';
import { Errors } from './errors';
import { Exports } from './exports';
import { Filters } from './filters';
import { Incidents } from './incidents';
import { Metrics } from './metrics';
import { RealTime } from './real-time';
import { VideoViews } from './video-views';
import * as API from './index';

export class Data extends APIResource {
  dimensions: Dimensions = new Dimensions(this.client);
  monitoring: Monitoring = new Monitoring(this.client);
  errors: Errors = new Errors(this.client);
  exports: Exports = new Exports(this.client);
  filters: Filters = new Filters(this.client);
  incidents: Incidents = new Incidents(this.client);
  metrics: Metrics = new Metrics(this.client);
  realTime: RealTime = new RealTime(this.client);
  videoViews: VideoViews = new VideoViews(this.client);
}

export namespace Data {
  export import Dimensions = API.Dimensions;
  export import DimensionValue = API.DimensionValue;
  export import DimensionsResponse = API.DimensionsResponse;
  export import DimensionValuesBasePage = API.DimensionValuesBasePage;
  export import DimensionListValuesParams = API.DimensionListValuesParams;

  export import Monitoring = API.Monitoring;
  export import MonitoringListDimensionsResponse = API.MonitoringListDimensionsResponse;

  export import Errors = API.Errors;
  export import ErrorsResponse = API.ErrorsResponse;
  export import ErrorListParams = API.ErrorListParams;

  export import Exports = API.Exports;
  export import ExportsResponse = API.ExportsResponse;
  export import VideoViewExportsResponse = API.VideoViewExportsResponse;

  export import Filters = API.Filters;
  export import FilterValue = API.FilterValue;
  export import FiltersResponse = API.FiltersResponse;
  export import FilterValuesBasePage = API.FilterValuesBasePage;
  export import FilterListValuesParams = API.FilterListValuesParams;

  export import Incidents = API.Incidents;
  export import Incident = API.Incident;
  export import IncidentResponse = API.IncidentResponse;
  export import IncidentsBasePage = API.IncidentsBasePage;
  export import IncidentListParams = API.IncidentListParams;
  export import IncidentListRelatedParams = API.IncidentListRelatedParams;

  export import Metrics = API.Metrics;
  export import AllMetricValuesResponse = API.AllMetricValuesResponse;
  export import BreakdownValue = API.BreakdownValue;
  export import InsightsResponse = API.InsightsResponse;
  export import MetricTimeseriesDataResponse = API.MetricTimeseriesDataResponse;
  export import OverallValuesResponse = API.OverallValuesResponse;
  export import BreakdownValuesBasePage = API.BreakdownValuesBasePage;
  export import MetricListParams = API.MetricListParams;
  export import MetricGetInsightsParams = API.MetricGetInsightsParams;
  export import MetricGetOverallValuesParams = API.MetricGetOverallValuesParams;
  export import MetricGetTimeseriesParams = API.MetricGetTimeseriesParams;
  export import MetricListBreakdownValuesParams = API.MetricListBreakdownValuesParams;

  export import RealTime = API.RealTime;
  export import RealTimeBreakdownResponse = API.RealTimeBreakdownResponse;
  export import RealTimeDimensionsResponse = API.RealTimeDimensionsResponse;
  export import RealTimeHistogramTimeseriesResponse = API.RealTimeHistogramTimeseriesResponse;
  export import RealTimeMetricsResponse = API.RealTimeMetricsResponse;
  export import RealTimeTimeseriesResponse = API.RealTimeTimeseriesResponse;
  export import RealTimeRetrieveBreakdownParams = API.RealTimeRetrieveBreakdownParams;
  export import RealTimeRetrieveHistogramTimeseriesParams = API.RealTimeRetrieveHistogramTimeseriesParams;
  export import RealTimeRetrieveTimeseriesParams = API.RealTimeRetrieveTimeseriesParams;

  export import VideoViews = API.VideoViews;
  export import AbridgedVideoView = API.AbridgedVideoView;
  export import VideoViewResponse = API.VideoViewResponse;
  export import AbridgedVideoViewsBasePage = API.AbridgedVideoViewsBasePage;
  export import VideoViewListParams = API.VideoViewListParams;
}
