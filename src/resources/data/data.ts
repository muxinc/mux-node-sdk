// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DimensionsAPI from './dimensions';
import {
  DimensionListValuesParams,
  DimensionValue,
  DimensionValuesBasePage,
  Dimensions,
  DimensionsResponse,
} from './dimensions';
import * as ErrorsAPI from './errors';
import { ErrorListParams, Errors, ErrorsResponse } from './errors';
import * as ExportsAPI from './exports';
import { Exports, ExportsResponse, VideoViewExportsResponse } from './exports';
import * as FiltersAPI from './filters';
import {
  FilterListValuesParams,
  FilterValue,
  FilterValuesBasePage,
  Filters,
  FiltersResponse,
} from './filters';
import * as IncidentsAPI from './incidents';
import {
  Incident,
  IncidentListParams,
  IncidentListRelatedParams,
  IncidentResponse,
  Incidents,
  IncidentsBasePage,
} from './incidents';
import * as MetricsAPI from './metrics';
import {
  AllMetricValuesResponse,
  BreakdownValue,
  BreakdownValuesBasePage,
  InsightsResponse,
  MetricGetInsightsParams,
  MetricGetOverallValuesParams,
  MetricGetTimeseriesParams,
  MetricListBreakdownValuesParams,
  MetricListParams,
  MetricTimeseriesDataResponse,
  Metrics,
  OverallValuesResponse,
} from './metrics';
import * as RealTimeAPI from './real-time';
import {
  RealTime,
  RealTimeBreakdownResponse,
  RealTimeDimensionsResponse,
  RealTimeHistogramTimeseriesResponse,
  RealTimeMetricsResponse,
  RealTimeRetrieveBreakdownParams,
  RealTimeRetrieveHistogramTimeseriesParams,
  RealTimeRetrieveTimeseriesParams,
  RealTimeTimeseriesResponse,
} from './real-time';
import * as VideoViewsAPI from './video-views';
import {
  AbridgedVideoView,
  AbridgedVideoViewsBasePage,
  VideoViewListParams,
  VideoViewResponse,
  VideoViews,
} from './video-views';
import * as MonitoringAPI from './monitoring/monitoring';
import { Monitoring, MonitoringListDimensionsResponse } from './monitoring/monitoring';

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

Data.Dimensions = Dimensions;
Data.DimensionValuesBasePage = DimensionValuesBasePage;
Data.Monitoring = Monitoring;
Data.Errors = Errors;
Data.Exports = Exports;
Data.Filters = Filters;
Data.FilterValuesBasePage = FilterValuesBasePage;
Data.Incidents = Incidents;
Data.IncidentsBasePage = IncidentsBasePage;
Data.Metrics = Metrics;
Data.BreakdownValuesBasePage = BreakdownValuesBasePage;
Data.RealTime = RealTime;
Data.VideoViews = VideoViews;
Data.AbridgedVideoViewsBasePage = AbridgedVideoViewsBasePage;

export declare namespace Data {
  export {
    Dimensions as Dimensions,
    type DimensionValue as DimensionValue,
    type DimensionsResponse as DimensionsResponse,
    DimensionValuesBasePage as DimensionValuesBasePage,
    type DimensionListValuesParams as DimensionListValuesParams,
  };

  export {
    Monitoring as Monitoring,
    type MonitoringListDimensionsResponse as MonitoringListDimensionsResponse,
  };

  export { Errors as Errors, type ErrorsResponse as ErrorsResponse, type ErrorListParams as ErrorListParams };

  export {
    Exports as Exports,
    type ExportsResponse as ExportsResponse,
    type VideoViewExportsResponse as VideoViewExportsResponse,
  };

  export {
    Filters as Filters,
    type FilterValue as FilterValue,
    type FiltersResponse as FiltersResponse,
    FilterValuesBasePage as FilterValuesBasePage,
    type FilterListValuesParams as FilterListValuesParams,
  };

  export {
    Incidents as Incidents,
    type Incident as Incident,
    type IncidentResponse as IncidentResponse,
    IncidentsBasePage as IncidentsBasePage,
    type IncidentListParams as IncidentListParams,
    type IncidentListRelatedParams as IncidentListRelatedParams,
  };

  export {
    Metrics as Metrics,
    type AllMetricValuesResponse as AllMetricValuesResponse,
    type BreakdownValue as BreakdownValue,
    type InsightsResponse as InsightsResponse,
    type MetricTimeseriesDataResponse as MetricTimeseriesDataResponse,
    type OverallValuesResponse as OverallValuesResponse,
    BreakdownValuesBasePage as BreakdownValuesBasePage,
    type MetricListParams as MetricListParams,
    type MetricGetInsightsParams as MetricGetInsightsParams,
    type MetricGetOverallValuesParams as MetricGetOverallValuesParams,
    type MetricGetTimeseriesParams as MetricGetTimeseriesParams,
    type MetricListBreakdownValuesParams as MetricListBreakdownValuesParams,
  };

  export {
    RealTime as RealTime,
    type RealTimeBreakdownResponse as RealTimeBreakdownResponse,
    type RealTimeDimensionsResponse as RealTimeDimensionsResponse,
    type RealTimeHistogramTimeseriesResponse as RealTimeHistogramTimeseriesResponse,
    type RealTimeMetricsResponse as RealTimeMetricsResponse,
    type RealTimeTimeseriesResponse as RealTimeTimeseriesResponse,
    type RealTimeRetrieveBreakdownParams as RealTimeRetrieveBreakdownParams,
    type RealTimeRetrieveHistogramTimeseriesParams as RealTimeRetrieveHistogramTimeseriesParams,
    type RealTimeRetrieveTimeseriesParams as RealTimeRetrieveTimeseriesParams,
  };

  export {
    VideoViews as VideoViews,
    type AbridgedVideoView as AbridgedVideoView,
    type VideoViewResponse as VideoViewResponse,
    AbridgedVideoViewsBasePage as AbridgedVideoViewsBasePage,
    type VideoViewListParams as VideoViewListParams,
  };
}
