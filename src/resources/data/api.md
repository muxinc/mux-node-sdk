# Data

## Dimensions

Types:

- <code><a href="./src/resources/data/dimensions.ts">DimensionValue</a></code>
- <code><a href="./src/resources/data/dimensions.ts">DimensionsResponse</a></code>

Methods:

- <code title="get /data/v1/dimensions">client.data.dimensions.<a href="./src/resources/data/dimensions.ts">list</a>() -> DimensionsResponse</code>
- <code title="get /data/v1/dimensions/{DIMENSION_ID}/elements">client.data.dimensions.<a href="./src/resources/data/dimensions.ts">listTraceElements</a>(dimensionID, { ...params }) -> DimensionValuesBasePage</code>
- <code title="get /data/v1/dimensions/{DIMENSION_ID}">client.data.dimensions.<a href="./src/resources/data/dimensions.ts">listValues</a>(dimensionID, { ...params }) -> DimensionValuesBasePage</code>

## Monitoring

Types:

- <code><a href="./src/resources/data/monitoring/monitoring.ts">MonitoringListDimensionsResponse</a></code>

Methods:

- <code title="get /data/v1/monitoring/dimensions">client.data.monitoring.<a href="./src/resources/data/monitoring/monitoring.ts">listDimensions</a>() -> MonitoringListDimensionsResponse</code>

### Metrics

Types:

- <code><a href="./src/resources/data/monitoring/metrics.ts">MetricListResponse</a></code>
- <code><a href="./src/resources/data/monitoring/metrics.ts">MetricGetBreakdownResponse</a></code>
- <code><a href="./src/resources/data/monitoring/metrics.ts">MetricGetBreakdownTimeseriesResponse</a></code>
- <code><a href="./src/resources/data/monitoring/metrics.ts">MetricGetHistogramTimeseriesResponse</a></code>
- <code><a href="./src/resources/data/monitoring/metrics.ts">MetricGetTimeseriesResponse</a></code>

Methods:

- <code title="get /data/v1/monitoring/metrics">client.data.monitoring.metrics.<a href="./src/resources/data/monitoring/metrics.ts">list</a>() -> MetricListResponse</code>
- <code title="get /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown">client.data.monitoring.metrics.<a href="./src/resources/data/monitoring/metrics.ts">getBreakdown</a>(monitoringMetricID, { ...params }) -> MetricGetBreakdownResponse</code>
- <code title="get /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown-timeseries">client.data.monitoring.metrics.<a href="./src/resources/data/monitoring/metrics.ts">getBreakdownTimeseries</a>(monitoringMetricID, { ...params }) -> MetricGetBreakdownTimeseriesResponse</code>
- <code title="get /data/v1/monitoring/metrics/{MONITORING_HISTOGRAM_METRIC_ID}/histogram-timeseries">client.data.monitoring.metrics.<a href="./src/resources/data/monitoring/metrics.ts">getHistogramTimeseries</a>(monitoringHistogramMetricID, { ...params }) -> MetricGetHistogramTimeseriesResponse</code>
- <code title="get /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/timeseries">client.data.monitoring.metrics.<a href="./src/resources/data/monitoring/metrics.ts">getTimeseries</a>(monitoringMetricID, { ...params }) -> MetricGetTimeseriesResponse</code>

## Errors

Types:

- <code><a href="./src/resources/data/errors.ts">ErrorsResponse</a></code>

Methods:

- <code title="get /data/v1/errors">client.data.errors.<a href="./src/resources/data/errors.ts">list</a>({ ...params }) -> ErrorsResponse</code>

## Exports

Types:

- <code><a href="./src/resources/data/exports.ts">ExportsResponse</a></code>
- <code><a href="./src/resources/data/exports.ts">VideoViewExportsResponse</a></code>

Methods:

- <code title="get /data/v1/exports/views">client.data.exports.<a href="./src/resources/data/exports.ts">listVideoViews</a>() -> VideoViewExportsResponse</code>

## Filters

Types:

- <code><a href="./src/resources/data/filters.ts">FilterValue</a></code>
- <code><a href="./src/resources/data/filters.ts">FiltersResponse</a></code>

Methods:

- <code title="get /data/v1/filters/{FILTER_ID}">client.data.filters.<a href="./src/resources/data/filters.ts">listValues</a>(filterID, { ...params }) -> FilterValuesBasePage</code>

## Incidents

Types:

- <code><a href="./src/resources/data/incidents.ts">Incident</a></code>
- <code><a href="./src/resources/data/incidents.ts">IncidentResponse</a></code>

Methods:

- <code title="get /data/v1/incidents/{INCIDENT_ID}">client.data.incidents.<a href="./src/resources/data/incidents.ts">retrieve</a>(incidentID) -> IncidentResponse</code>
- <code title="get /data/v1/incidents">client.data.incidents.<a href="./src/resources/data/incidents.ts">list</a>({ ...params }) -> IncidentsBasePage</code>
- <code title="get /data/v1/incidents/{INCIDENT_ID}/related">client.data.incidents.<a href="./src/resources/data/incidents.ts">listRelated</a>(incidentID, { ...params }) -> IncidentsBasePage</code>

## Metrics

Types:

- <code><a href="./src/resources/data/metrics.ts">AllMetricValuesResponse</a></code>
- <code><a href="./src/resources/data/metrics.ts">BreakdownValue</a></code>
- <code><a href="./src/resources/data/metrics.ts">InsightsResponse</a></code>
- <code><a href="./src/resources/data/metrics.ts">MetricTimeseriesDataResponse</a></code>
- <code><a href="./src/resources/data/metrics.ts">OverallValuesResponse</a></code>

Methods:

- <code title="get /data/v1/metrics/comparison">client.data.metrics.<a href="./src/resources/data/metrics.ts">list</a>({ ...params }) -> AllMetricValuesResponse</code>
- <code title="get /data/v1/metrics/{METRIC_ID}/insights">client.data.metrics.<a href="./src/resources/data/metrics.ts">getInsights</a>(metricID, { ...params }) -> InsightsResponse</code>
- <code title="get /data/v1/metrics/{METRIC_ID}/overall">client.data.metrics.<a href="./src/resources/data/metrics.ts">getOverallValues</a>(metricID, { ...params }) -> OverallValuesResponse</code>
- <code title="get /data/v1/metrics/{METRIC_ID}/timeseries">client.data.metrics.<a href="./src/resources/data/metrics.ts">getTimeseries</a>(metricID, { ...params }) -> MetricTimeseriesDataResponse</code>
- <code title="get /data/v1/metrics/{METRIC_ID}/breakdown">client.data.metrics.<a href="./src/resources/data/metrics.ts">listBreakdownValues</a>(metricID, { ...params }) -> BreakdownValuesBasePage</code>

## RealTime

Types:

- <code><a href="./src/resources/data/real-time.ts">RealTimeBreakdownResponse</a></code>
- <code><a href="./src/resources/data/real-time.ts">RealTimeDimensionsResponse</a></code>
- <code><a href="./src/resources/data/real-time.ts">RealTimeHistogramTimeseriesResponse</a></code>
- <code><a href="./src/resources/data/real-time.ts">RealTimeMetricsResponse</a></code>
- <code><a href="./src/resources/data/real-time.ts">RealTimeTimeseriesResponse</a></code>

Methods:

- <code title="get /data/v1/realtime/dimensions">client.data.realTime.<a href="./src/resources/data/real-time.ts">listDimensions</a>() -> RealTimeDimensionsResponse</code>
- <code title="get /data/v1/realtime/metrics">client.data.realTime.<a href="./src/resources/data/real-time.ts">listMetrics</a>() -> RealTimeMetricsResponse</code>
- <code title="get /data/v1/realtime/metrics/{REALTIME_METRIC_ID}/breakdown">client.data.realTime.<a href="./src/resources/data/real-time.ts">retrieveBreakdown</a>(realtimeMetricID, { ...params }) -> RealTimeBreakdownResponse</code>
- <code title="get /data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries">client.data.realTime.<a href="./src/resources/data/real-time.ts">retrieveHistogramTimeseries</a>(realtimeHistogramMetricID, { ...params }) -> RealTimeHistogramTimeseriesResponse</code>
- <code title="get /data/v1/realtime/metrics/{REALTIME_METRIC_ID}/timeseries">client.data.realTime.<a href="./src/resources/data/real-time.ts">retrieveTimeseries</a>(realtimeMetricID, { ...params }) -> RealTimeTimeseriesResponse</code>

## VideoViews

Types:

- <code><a href="./src/resources/data/video-views.ts">AbridgedVideoView</a></code>
- <code><a href="./src/resources/data/video-views.ts">VideoViewResponse</a></code>

Methods:

- <code title="get /data/v1/video-views/{VIDEO_VIEW_ID}">client.data.videoViews.<a href="./src/resources/data/video-views.ts">retrieve</a>(videoViewID) -> VideoViewResponse</code>
- <code title="get /data/v1/video-views">client.data.videoViews.<a href="./src/resources/data/video-views.ts">list</a>({ ...params }) -> AbridgedVideoViewsBasePage</code>

## Annotations

Types:

- <code><a href="./src/resources/data/annotations.ts">Annotation</a></code>
- <code><a href="./src/resources/data/annotations.ts">AnnotationInput</a></code>
- <code><a href="./src/resources/data/annotations.ts">AnnotationResponse</a></code>
- <code><a href="./src/resources/data/annotations.ts">ListAnnotationsResponse</a></code>

Methods:

- <code title="post /data/v1/annotations">client.data.annotations.<a href="./src/resources/data/annotations.ts">create</a>({ ...params }) -> Annotation</code>
- <code title="get /data/v1/annotations/{ANNOTATION_ID}">client.data.annotations.<a href="./src/resources/data/annotations.ts">retrieve</a>(annotationID) -> Annotation</code>
- <code title="patch /data/v1/annotations/{ANNOTATION_ID}">client.data.annotations.<a href="./src/resources/data/annotations.ts">update</a>(annotationID, { ...params }) -> Annotation</code>
- <code title="get /data/v1/annotations">client.data.annotations.<a href="./src/resources/data/annotations.ts">list</a>({ ...params }) -> AnnotationsBasePage</code>
- <code title="delete /data/v1/annotations/{ANNOTATION_ID}">client.data.annotations.<a href="./src/resources/data/annotations.ts">delete</a>(annotationID) -> void</code>
