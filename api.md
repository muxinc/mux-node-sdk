# Shared

Types:

- <code><a href="./src/resources/shared.ts">PlaybackID</a></code>
- <code><a href="./src/resources/shared.ts">PlaybackPolicy</a></code>

# Video

## Assets

Types:

- <code><a href="./src/resources/video/assets.ts">Asset</a></code>
- <code><a href="./src/resources/video/assets.ts">AssetOptions</a></code>
- <code><a href="./src/resources/video/assets.ts">AssetResponse</a></code>
- <code><a href="./src/resources/video/assets.ts">InputInfo</a></code>
- <code><a href="./src/resources/video/assets.ts">Track</a></code>
- <code><a href="./src/resources/video/assets.ts">AssetRetrieveInputInfoResponse</a></code>

Methods:

- <code title="post /video/v1/assets">client.video.assets.<a href="./src/resources/video/assets.ts">create</a>({ ...params }) -> Asset</code>
- <code title="get /video/v1/assets/{ASSET_ID}">client.video.assets.<a href="./src/resources/video/assets.ts">retrieve</a>(assetId) -> Asset</code>
- <code title="patch /video/v1/assets/{ASSET_ID}">client.video.assets.<a href="./src/resources/video/assets.ts">update</a>(assetId, { ...params }) -> Asset</code>
- <code title="get /video/v1/assets">client.video.assets.<a href="./src/resources/video/assets.ts">list</a>({ ...params }) -> AssetsBasePage</code>
- <code title="delete /video/v1/assets/{ASSET_ID}">client.video.assets.<a href="./src/resources/video/assets.ts">delete</a>(assetId) -> void</code>
- <code title="post /video/v1/assets/{ASSET_ID}/playback-ids">client.video.assets.<a href="./src/resources/video/assets.ts">createPlaybackId</a>(assetId, { ...params }) -> PlaybackID</code>
- <code title="post /video/v1/assets/{ASSET_ID}/tracks">client.video.assets.<a href="./src/resources/video/assets.ts">createTrack</a>(assetId, { ...params }) -> Track</code>
- <code title="delete /video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}">client.video.assets.<a href="./src/resources/video/assets.ts">deletePlaybackId</a>(assetId, playbackId) -> void</code>
- <code title="delete /video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}">client.video.assets.<a href="./src/resources/video/assets.ts">deleteTrack</a>(assetId, trackId) -> void</code>
- <code title="post /video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}/generate-subtitles">client.video.assets.<a href="./src/resources/video/assets.ts">generateSubtitles</a>(assetId, trackId, { ...params }) -> Track</code>
- <code title="get /video/v1/assets/{ASSET_ID}/input-info">client.video.assets.<a href="./src/resources/video/assets.ts">retrieveInputInfo</a>(assetId) -> AssetRetrieveInputInfoResponse</code>
- <code title="get /video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}">client.video.assets.<a href="./src/resources/video/assets.ts">retrievePlaybackId</a>(assetId, playbackId) -> PlaybackID</code>
- <code title="put /video/v1/assets/{ASSET_ID}/master-access">client.video.assets.<a href="./src/resources/video/assets.ts">updateMasterAccess</a>(assetId, { ...params }) -> Asset</code>
- <code title="put /video/v1/assets/{ASSET_ID}/mp4-support">client.video.assets.<a href="./src/resources/video/assets.ts">updateMP4Support</a>(assetId, { ...params }) -> Asset</code>

## DeliveryUsage

Types:

- <code><a href="./src/resources/video/delivery-usage.ts">DeliveryReport</a></code>

Methods:

- <code title="get /video/v1/delivery-usage">client.video.deliveryUsage.<a href="./src/resources/video/delivery-usage.ts">list</a>({ ...params }) -> DeliveryReportsPageWithTotal</code>

## LiveStreams

Types:

- <code><a href="./src/resources/video/live-streams.ts">LiveStream</a></code>
- <code><a href="./src/resources/video/live-streams.ts">SimulcastTarget</a></code>

Methods:

- <code title="post /video/v1/live-streams">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">create</a>({ ...params }) -> LiveStream</code>
- <code title="get /video/v1/live-streams/{LIVE_STREAM_ID}">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">retrieve</a>(liveStreamId) -> LiveStream</code>
- <code title="patch /video/v1/live-streams/{LIVE_STREAM_ID}">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">update</a>(liveStreamId, { ...params }) -> LiveStream</code>
- <code title="get /video/v1/live-streams">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">list</a>({ ...params }) -> LiveStreamsBasePage</code>
- <code title="delete /video/v1/live-streams/{LIVE_STREAM_ID}">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">delete</a>(liveStreamId) -> void</code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/complete">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">complete</a>(liveStreamId) -> void</code>
- <code title="post /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">createPlaybackId</a>(liveStreamId, { ...params }) -> PlaybackID</code>
- <code title="post /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">createSimulcastTarget</a>(liveStreamId, { ...params }) -> SimulcastTarget</code>
- <code title="delete /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">deletePlaybackId</a>(liveStreamId, playbackId) -> void</code>
- <code title="delete /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">deleteSimulcastTarget</a>(liveStreamId, simulcastTargetId) -> void</code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/disable">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">disable</a>(liveStreamId) -> void</code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/enable">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">enable</a>(liveStreamId) -> void</code>
- <code title="post /video/v1/live-streams/{LIVE_STREAM_ID}/reset-stream-key">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">resetStreamKey</a>(liveStreamId) -> LiveStream</code>
- <code title="get /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">retrievePlaybackId</a>(liveStreamId, playbackId) -> PlaybackID</code>
- <code title="get /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">retrieveSimulcastTarget</a>(liveStreamId, simulcastTargetId) -> SimulcastTarget</code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/embedded-subtitles">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">updateEmbeddedSubtitles</a>(liveStreamId, { ...params }) -> LiveStream</code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/generated-subtitles">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">updateGeneratedSubtitles</a>(liveStreamId, { ...params }) -> LiveStream</code>

## PlaybackIDs

Types:

- <code><a href="./src/resources/video/playback-ids.ts">PlaybackIDRetrieveResponse</a></code>

Methods:

- <code title="get /video/v1/playback-ids/{PLAYBACK_ID}">client.video.playbackIds.<a href="./src/resources/video/playback-ids.ts">retrieve</a>(playbackId) -> PlaybackIDRetrieveResponse</code>

## PlaybackRestrictions

Types:

- <code><a href="./src/resources/video/playback-restrictions.ts">PlaybackRestriction</a></code>
- <code><a href="./src/resources/video/playback-restrictions.ts">PlaybackRestrictionResponse</a></code>

Methods:

- <code title="post /video/v1/playback-restrictions">client.video.playbackRestrictions.<a href="./src/resources/video/playback-restrictions.ts">create</a>({ ...params }) -> PlaybackRestriction</code>
- <code title="get /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}">client.video.playbackRestrictions.<a href="./src/resources/video/playback-restrictions.ts">retrieve</a>(playbackRestrictionId) -> PlaybackRestriction</code>
- <code title="get /video/v1/playback-restrictions">client.video.playbackRestrictions.<a href="./src/resources/video/playback-restrictions.ts">list</a>({ ...params }) -> PlaybackRestrictionsBasePage</code>
- <code title="delete /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}">client.video.playbackRestrictions.<a href="./src/resources/video/playback-restrictions.ts">delete</a>(playbackRestrictionId) -> void</code>
- <code title="put /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/referrer">client.video.playbackRestrictions.<a href="./src/resources/video/playback-restrictions.ts">updateReferrer</a>(playbackRestrictionId, { ...params }) -> PlaybackRestriction</code>
- <code title="put /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/user_agent">client.video.playbackRestrictions.<a href="./src/resources/video/playback-restrictions.ts">updateUserAgent</a>(playbackRestrictionId, { ...params }) -> PlaybackRestriction</code>

## Spaces

Types:

- <code><a href="./src/resources/video/spaces.ts">Broadcast</a></code>
- <code><a href="./src/resources/video/spaces.ts">BroadcastLayout</a></code>
- <code><a href="./src/resources/video/spaces.ts">BroadcastResolution</a></code>
- <code><a href="./src/resources/video/spaces.ts">BroadcastResponse</a></code>
- <code><a href="./src/resources/video/spaces.ts">BroadcastStatus</a></code>
- <code><a href="./src/resources/video/spaces.ts">Space</a></code>
- <code><a href="./src/resources/video/spaces.ts">SpaceResponse</a></code>
- <code><a href="./src/resources/video/spaces.ts">SpaceStatus</a></code>
- <code><a href="./src/resources/video/spaces.ts">SpaceType</a></code>

Methods:

- <code title="post /video/v1/spaces">client.video.spaces.<a href="./src/resources/video/spaces.ts">create</a>({ ...params }) -> Space</code>
- <code title="get /video/v1/spaces/{SPACE_ID}">client.video.spaces.<a href="./src/resources/video/spaces.ts">retrieve</a>(spaceId) -> Space</code>
- <code title="get /video/v1/spaces">client.video.spaces.<a href="./src/resources/video/spaces.ts">list</a>({ ...params }) -> SpacesBasePage</code>
- <code title="delete /video/v1/spaces/{SPACE_ID}">client.video.spaces.<a href="./src/resources/video/spaces.ts">delete</a>(spaceId) -> void</code>
- <code title="post /video/v1/spaces/{SPACE_ID}/broadcasts">client.video.spaces.<a href="./src/resources/video/spaces.ts">createBroadcast</a>(spaceId, { ...params }) -> Broadcast</code>
- <code title="delete /video/v1/spaces/{SPACE_ID}/broadcasts/{BROADCAST_ID}">client.video.spaces.<a href="./src/resources/video/spaces.ts">deleteBroadcast</a>(spaceId, broadcastId) -> void</code>
- <code title="get /video/v1/spaces/{SPACE_ID}/broadcasts/{BROADCAST_ID}">client.video.spaces.<a href="./src/resources/video/spaces.ts">retrieveBroadcast</a>(spaceId, broadcastId) -> Broadcast</code>
- <code title="post /video/v1/spaces/{SPACE_ID}/broadcasts/{BROADCAST_ID}/start">client.video.spaces.<a href="./src/resources/video/spaces.ts">startBroadcast</a>(spaceId, broadcastId) -> void</code>
- <code title="post /video/v1/spaces/{SPACE_ID}/broadcasts/{BROADCAST_ID}/stop">client.video.spaces.<a href="./src/resources/video/spaces.ts">stopBroadcast</a>(spaceId, broadcastId) -> void</code>

## TranscriptionVocabularies

Types:

- <code><a href="./src/resources/video/transcription-vocabularies.ts">TranscriptionVocabulary</a></code>
- <code><a href="./src/resources/video/transcription-vocabularies.ts">TranscriptionVocabularyResponse</a></code>

Methods:

- <code title="post /video/v1/transcription-vocabularies">client.video.transcriptionVocabularies.<a href="./src/resources/video/transcription-vocabularies.ts">create</a>({ ...params }) -> TranscriptionVocabulary</code>
- <code title="get /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}">client.video.transcriptionVocabularies.<a href="./src/resources/video/transcription-vocabularies.ts">retrieve</a>(transcriptionVocabularyId) -> TranscriptionVocabulary</code>
- <code title="put /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}">client.video.transcriptionVocabularies.<a href="./src/resources/video/transcription-vocabularies.ts">update</a>(transcriptionVocabularyId, { ...params }) -> TranscriptionVocabulary</code>
- <code title="get /video/v1/transcription-vocabularies">client.video.transcriptionVocabularies.<a href="./src/resources/video/transcription-vocabularies.ts">list</a>({ ...params }) -> TranscriptionVocabulariesBasePage</code>
- <code title="delete /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}">client.video.transcriptionVocabularies.<a href="./src/resources/video/transcription-vocabularies.ts">delete</a>(transcriptionVocabularyId) -> void</code>

## Uploads

Types:

- <code><a href="./src/resources/video/uploads.ts">Upload</a></code>
- <code><a href="./src/resources/video/uploads.ts">UploadResponse</a></code>

Methods:

- <code title="post /video/v1/uploads">client.video.uploads.<a href="./src/resources/video/uploads.ts">create</a>({ ...params }) -> Upload</code>
- <code title="get /video/v1/uploads/{UPLOAD_ID}">client.video.uploads.<a href="./src/resources/video/uploads.ts">retrieve</a>(uploadId) -> Upload</code>
- <code title="get /video/v1/uploads">client.video.uploads.<a href="./src/resources/video/uploads.ts">list</a>({ ...params }) -> UploadsBasePage</code>
- <code title="put /video/v1/uploads/{UPLOAD_ID}/cancel">client.video.uploads.<a href="./src/resources/video/uploads.ts">cancel</a>(uploadId) -> Upload</code>

## WebInputs

Types:

- <code><a href="./src/resources/video/web-inputs.ts">WebInputCreateResponse</a></code>
- <code><a href="./src/resources/video/web-inputs.ts">WebInputRetrieveResponse</a></code>
- <code><a href="./src/resources/video/web-inputs.ts">WebInputListResponse</a></code>
- <code><a href="./src/resources/video/web-inputs.ts">WebInputLaunchResponse</a></code>
- <code><a href="./src/resources/video/web-inputs.ts">WebInputReloadResponse</a></code>
- <code><a href="./src/resources/video/web-inputs.ts">WebInputShutdownResponse</a></code>
- <code><a href="./src/resources/video/web-inputs.ts">WebInputUpdateURLResponse</a></code>

Methods:

- <code title="post /video/v1/web-inputs">client.video.webInputs.<a href="./src/resources/video/web-inputs.ts">create</a>({ ...params }) -> WebInputCreateResponse</code>
- <code title="get /video/v1/web-inputs/{WEB_INPUT_ID}">client.video.webInputs.<a href="./src/resources/video/web-inputs.ts">retrieve</a>(webInputId) -> WebInputRetrieveResponse</code>
- <code title="get /video/v1/web-inputs">client.video.webInputs.<a href="./src/resources/video/web-inputs.ts">list</a>({ ...params }) -> WebInputListResponsesBasePage</code>
- <code title="delete /video/v1/web-inputs/{WEB_INPUT_ID}">client.video.webInputs.<a href="./src/resources/video/web-inputs.ts">delete</a>(webInputId) -> void</code>
- <code title="put /video/v1/web-inputs/{WEB_INPUT_ID}/launch">client.video.webInputs.<a href="./src/resources/video/web-inputs.ts">launch</a>(webInputId) -> WebInputLaunchResponse</code>
- <code title="put /video/v1/web-inputs/{WEB_INPUT_ID}/reload">client.video.webInputs.<a href="./src/resources/video/web-inputs.ts">reload</a>(webInputId) -> WebInputReloadResponse</code>
- <code title="put /video/v1/web-inputs/{WEB_INPUT_ID}/shutdown">client.video.webInputs.<a href="./src/resources/video/web-inputs.ts">shutdown</a>(webInputId) -> WebInputShutdownResponse</code>
- <code title="put /video/v1/web-inputs/{WEB_INPUT_ID}/url">client.video.webInputs.<a href="./src/resources/video/web-inputs.ts">updateURL</a>(webInputId, { ...params }) -> WebInputUpdateURLResponse</code>

# Data

## Dimensions

Types:

- <code><a href="./src/resources/data/dimensions.ts">DimensionValue</a></code>
- <code><a href="./src/resources/data/dimensions.ts">DimensionsResponse</a></code>

Methods:

- <code title="get /data/v1/dimensions">client.data.dimensions.<a href="./src/resources/data/dimensions.ts">list</a>() -> DimensionsResponse</code>
- <code title="get /data/v1/dimensions/{DIMENSION_ID}">client.data.dimensions.<a href="./src/resources/data/dimensions.ts">listValues</a>(dimensionId, { ...params }) -> DimensionValuesBasePage</code>

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
- <code title="get /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown">client.data.monitoring.metrics.<a href="./src/resources/data/monitoring/metrics.ts">getBreakdown</a>(monitoringMetricId, { ...params }) -> MetricGetBreakdownResponse</code>
- <code title="get /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown-timeseries">client.data.monitoring.metrics.<a href="./src/resources/data/monitoring/metrics.ts">getBreakdownTimeseries</a>(monitoringMetricId, { ...params }) -> MetricGetBreakdownTimeseriesResponse</code>
- <code title="get /data/v1/monitoring/metrics/{MONITORING_HISTOGRAM_METRIC_ID}/histogram-timeseries">client.data.monitoring.metrics.<a href="./src/resources/data/monitoring/metrics.ts">getHistogramTimeseries</a>(monitoringHistogramMetricId, { ...params }) -> MetricGetHistogramTimeseriesResponse</code>
- <code title="get /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/timeseries">client.data.monitoring.metrics.<a href="./src/resources/data/monitoring/metrics.ts">getTimeseries</a>(monitoringMetricId, { ...params }) -> MetricGetTimeseriesResponse</code>

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

- <code title="get /data/v1/filters/{FILTER_ID}">client.data.filters.<a href="./src/resources/data/filters.ts">listValues</a>(filterId, { ...params }) -> FilterValuesBasePage</code>

## Incidents

Types:

- <code><a href="./src/resources/data/incidents.ts">Incident</a></code>
- <code><a href="./src/resources/data/incidents.ts">IncidentResponse</a></code>

Methods:

- <code title="get /data/v1/incidents/{INCIDENT_ID}">client.data.incidents.<a href="./src/resources/data/incidents.ts">retrieve</a>(incidentId) -> IncidentResponse</code>
- <code title="get /data/v1/incidents">client.data.incidents.<a href="./src/resources/data/incidents.ts">list</a>({ ...params }) -> IncidentsBasePage</code>
- <code title="get /data/v1/incidents/{INCIDENT_ID}/related">client.data.incidents.<a href="./src/resources/data/incidents.ts">listRelated</a>(incidentId, { ...params }) -> IncidentsBasePage</code>

## Metrics

Types:

- <code><a href="./src/resources/data/metrics.ts">AllMetricValuesResponse</a></code>
- <code><a href="./src/resources/data/metrics.ts">BreakdownValue</a></code>
- <code><a href="./src/resources/data/metrics.ts">InsightsResponse</a></code>
- <code><a href="./src/resources/data/metrics.ts">MetricTimeseriesDataResponse</a></code>
- <code><a href="./src/resources/data/metrics.ts">OverallValuesResponse</a></code>

Methods:

- <code title="get /data/v1/metrics/comparison">client.data.metrics.<a href="./src/resources/data/metrics.ts">list</a>({ ...params }) -> AllMetricValuesResponse</code>
- <code title="get /data/v1/metrics/{METRIC_ID}/insights">client.data.metrics.<a href="./src/resources/data/metrics.ts">getInsights</a>(metricId, { ...params }) -> InsightsResponse</code>
- <code title="get /data/v1/metrics/{METRIC_ID}/overall">client.data.metrics.<a href="./src/resources/data/metrics.ts">getOverallValues</a>(metricId, { ...params }) -> OverallValuesResponse</code>
- <code title="get /data/v1/metrics/{METRIC_ID}/timeseries">client.data.metrics.<a href="./src/resources/data/metrics.ts">getTimeseries</a>(metricId, { ...params }) -> MetricTimeseriesDataResponse</code>
- <code title="get /data/v1/metrics/{METRIC_ID}/breakdown">client.data.metrics.<a href="./src/resources/data/metrics.ts">listBreakdownValues</a>(metricId, { ...params }) -> BreakdownValuesBasePage</code>

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
- <code title="get /data/v1/realtime/metrics/{REALTIME_METRIC_ID}/breakdown">client.data.realTime.<a href="./src/resources/data/real-time.ts">retrieveBreakdown</a>(realtimeMetricId, { ...params }) -> RealTimeBreakdownResponse</code>
- <code title="get /data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries">client.data.realTime.<a href="./src/resources/data/real-time.ts">retrieveHistogramTimeseries</a>(realtimeHistogramMetricId, { ...params }) -> RealTimeHistogramTimeseriesResponse</code>
- <code title="get /data/v1/realtime/metrics/{REALTIME_METRIC_ID}/timeseries">client.data.realTime.<a href="./src/resources/data/real-time.ts">retrieveTimeseries</a>(realtimeMetricId, { ...params }) -> RealTimeTimeseriesResponse</code>

## VideoViews

Types:

- <code><a href="./src/resources/data/video-views.ts">AbridgedVideoView</a></code>
- <code><a href="./src/resources/data/video-views.ts">VideoViewResponse</a></code>

Methods:

- <code title="get /data/v1/video-views/{VIDEO_VIEW_ID}">client.data.videoViews.<a href="./src/resources/data/video-views.ts">retrieve</a>(videoViewId) -> VideoViewResponse</code>
- <code title="get /data/v1/video-views">client.data.videoViews.<a href="./src/resources/data/video-views.ts">list</a>({ ...params }) -> AbridgedVideoViewsBasePage</code>

# System

## SigningKeys

Types:

- <code><a href="./src/resources/system/signing-keys.ts">SigningKey</a></code>
- <code><a href="./src/resources/system/signing-keys.ts">SigningKeyResponse</a></code>

Methods:

- <code title="post /system/v1/signing-keys">client.system.signingKeys.<a href="./src/resources/system/signing-keys.ts">create</a>() -> SigningKey</code>
- <code title="get /system/v1/signing-keys/{SIGNING_KEY_ID}">client.system.signingKeys.<a href="./src/resources/system/signing-keys.ts">retrieve</a>(signingKeyId) -> SigningKey</code>
- <code title="get /system/v1/signing-keys">client.system.signingKeys.<a href="./src/resources/system/signing-keys.ts">list</a>({ ...params }) -> SigningKeysBasePage</code>
- <code title="delete /system/v1/signing-keys/{SIGNING_KEY_ID}">client.system.signingKeys.<a href="./src/resources/system/signing-keys.ts">delete</a>(signingKeyId) -> void</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">BaseWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetReadyWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetErroredWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetUpdatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetDeletedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetLiveStreamCompletedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetStaticRenditionsReadyWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetStaticRenditionsPreparingWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetStaticRenditionsDeletedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetStaticRenditionsErroredWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetMasterReadyWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetMasterPreparingWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetMasterDeletedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetMasterErroredWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetTrackCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetTrackReadyWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetTrackErroredWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetTrackDeletedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetWarningWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoUploadAssetCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoUploadCancelledWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoUploadCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoUploadErroredWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoLiveStreamCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoLiveStreamConnectedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoLiveStreamRecordingWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoLiveStreamActiveWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoLiveStreamDisconnectedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoLiveStreamIdleWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoLiveStreamUpdatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoLiveStreamEnabledWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoLiveStreamDisabledWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoLiveStreamDeletedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoLiveStreamWarningWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoLiveStreamSimulcastTargetCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoLiveStreamSimulcastTargetIdleWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoLiveStreamSimulcastTargetStartingWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoLiveStreamSimulcastTargetBroadcastingWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoLiveStreamSimulcastTargetErroredWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoLiveStreamSimulcastTargetDeletedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoLiveStreamSimulcastTargetUpdatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoSpaceCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoSpaceDeletedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoSpaceActiveWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoSpaceIdleWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoSpaceUpdatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoSpaceBroadcastCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoSpaceBroadcastIdleWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoSpaceBroadcastActiveWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoSpaceBroadcastDeletedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoDeliveryHighTrafficWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">UnwrapWebhookEvent</a></code>

Methods:
