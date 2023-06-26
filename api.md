# Video

## Assets

Models:

- <code><a href="./resources/video/assets.ts">Asset</a></code>
- <code><a href="./resources/video/assets.ts">AssetResponse</a></code>
- <code><a href="./resources/video/assets.ts">Track</a></code>

Methods:

- <code title="post /video/v1/assets">client.video.assets.<a href="./resources/video/assets.ts">create</a>({ ...params }) -> Asset</code>
- <code title="get /video/v1/assets/{ASSET_ID}">client.video.assets.<a href="./resources/video/assets.ts">retrieve</a>(assetId) -> Asset</code>
- <code title="patch /video/v1/assets/{ASSET_ID}">client.video.assets.<a href="./resources/video/assets.ts">update</a>(assetId, { ...params }) -> Asset</code>
- <code title="get /video/v1/assets">client.video.assets.<a href="./resources/video/assets.ts">list</a>({ ...params }) -> AssetsBasePage</code>
- <code title="delete /video/v1/assets/{ASSET_ID}">client.video.assets.<a href="./resources/video/assets.ts">del</a>(assetId) -> Promise<void></code>
- <code title="post /video/v1/assets/{ASSET_ID}/playback-ids">client.video.assets.<a href="./resources/video/assets.ts">createPlaybackId</a>(assetId, { ...params }) -> PlaybackID</code>
- <code title="post /video/v1/assets/{ASSET_ID}/tracks">client.video.assets.<a href="./resources/video/assets.ts">createTrack</a>(assetId, { ...params }) -> Track</code>
- <code title="delete /video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}">client.video.assets.<a href="./resources/video/assets.ts">deletePlaybackId</a>(assetId, playbackId) -> Promise<void></code>
- <code title="delete /video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}">client.video.assets.<a href="./resources/video/assets.ts">deleteTrack</a>(assetId, trackId) -> Promise<void></code>
- <code title="get /video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}">client.video.assets.<a href="./resources/video/assets.ts">retrievePlaybackId</a>(assetId, playbackId) -> PlaybackID</code>
- <code title="put /video/v1/assets/{ASSET_ID}/master-access">client.video.assets.<a href="./resources/video/assets.ts">updateMasterAccess</a>(assetId, { ...params }) -> Asset</code>
- <code title="put /video/v1/assets/{ASSET_ID}/mp4-support">client.video.assets.<a href="./resources/video/assets.ts">updateMP4Support</a>(assetId, { ...params }) -> Asset</code>

## DeliveryUsage

Models:

- <code><a href="./resources/video/delivery-usage.ts">DeliveryReport</a></code>

Methods:

- <code title="get /video/v1/delivery-usage">client.video.deliveryUsage.<a href="./resources/video/delivery-usage.ts">list</a>({ ...params }) -> DeliveryReportsPageWithTotal</code>

## LiveStreams

Models:

- <code><a href="./resources/video/live-streams.ts">LiveStream</a></code>
- <code><a href="./resources/video/live-streams.ts">SimulcastTarget</a></code>

Methods:

- <code title="post /video/v1/live-streams">client.video.liveStreams.<a href="./resources/video/live-streams.ts">create</a>({ ...params }) -> LiveStream</code>
- <code title="get /video/v1/live-streams/{LIVE_STREAM_ID}">client.video.liveStreams.<a href="./resources/video/live-streams.ts">retrieve</a>(liveStreamId) -> LiveStream</code>
- <code title="patch /video/v1/live-streams/{LIVE_STREAM_ID}">client.video.liveStreams.<a href="./resources/video/live-streams.ts">update</a>(liveStreamId, { ...params }) -> LiveStream</code>
- <code title="get /video/v1/live-streams">client.video.liveStreams.<a href="./resources/video/live-streams.ts">list</a>({ ...params }) -> LiveStreamsBasePage</code>
- <code title="delete /video/v1/live-streams/{LIVE_STREAM_ID}">client.video.liveStreams.<a href="./resources/video/live-streams.ts">del</a>(liveStreamId) -> Promise<void></code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/complete">client.video.liveStreams.<a href="./resources/video/live-streams.ts">complete</a>(liveStreamId) -> Promise<void></code>
- <code title="post /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids">client.video.liveStreams.<a href="./resources/video/live-streams.ts">createPlaybackId</a>(liveStreamId, { ...params }) -> PlaybackID</code>
- <code title="post /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets">client.video.liveStreams.<a href="./resources/video/live-streams.ts">createSimulcastTarget</a>(liveStreamId, { ...params }) -> SimulcastTarget</code>
- <code title="delete /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}">client.video.liveStreams.<a href="./resources/video/live-streams.ts">deletePlaybackId</a>(liveStreamId, playbackId) -> Promise<void></code>
- <code title="delete /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}">client.video.liveStreams.<a href="./resources/video/live-streams.ts">deleteSimulcastTarget</a>(liveStreamId, simulcastTargetId) -> Promise<void></code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/disable">client.video.liveStreams.<a href="./resources/video/live-streams.ts">disable</a>(liveStreamId) -> Promise<void></code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/enable">client.video.liveStreams.<a href="./resources/video/live-streams.ts">enable</a>(liveStreamId) -> Promise<void></code>
- <code title="post /video/v1/live-streams/{LIVE_STREAM_ID}/reset-stream-key">client.video.liveStreams.<a href="./resources/video/live-streams.ts">resetStreamKey</a>(liveStreamId) -> LiveStream</code>
- <code title="get /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}">client.video.liveStreams.<a href="./resources/video/live-streams.ts">retrievePlaybackId</a>(liveStreamId, playbackId) -> PlaybackID</code>
- <code title="get /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}">client.video.liveStreams.<a href="./resources/video/live-streams.ts">retrieveSimulcastTarget</a>(liveStreamId, simulcastTargetId) -> SimulcastTarget</code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/embedded-subtitles">client.video.liveStreams.<a href="./resources/video/live-streams.ts">updateEmbeddedSubtitles</a>(liveStreamId, { ...params }) -> LiveStream</code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/generated-subtitles">client.video.liveStreams.<a href="./resources/video/live-streams.ts">updateGeneratedSubtitles</a>(liveStreamId, { ...params }) -> LiveStream</code>

## PlaybackIDs

Models:

- <code><a href="./resources/video/playback-ids.ts">PlaybackIDRetrieveResponse</a></code>

Methods:

- <code title="get /video/v1/playback-ids/{PLAYBACK_ID}">client.video.playbackIds.<a href="./resources/video/playback-ids.ts">retrieve</a>(playbackId) -> PlaybackIDRetrieveResponse</code>

## PlaybackRestrictions

Models:

- <code><a href="./resources/video/playback-restrictions.ts">PlaybackRestriction</a></code>
- <code><a href="./resources/video/playback-restrictions.ts">PlaybackRestrictionResponse</a></code>

Methods:

- <code title="post /video/v1/playback-restrictions">client.video.playbackRestrictions.<a href="./resources/video/playback-restrictions.ts">create</a>({ ...params }) -> PlaybackRestriction</code>
- <code title="get /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}">client.video.playbackRestrictions.<a href="./resources/video/playback-restrictions.ts">retrieve</a>(playbackRestrictionId) -> PlaybackRestriction</code>
- <code title="get /video/v1/playback-restrictions">client.video.playbackRestrictions.<a href="./resources/video/playback-restrictions.ts">list</a>({ ...params }) -> PlaybackRestrictionsBasePage</code>
- <code title="delete /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}">client.video.playbackRestrictions.<a href="./resources/video/playback-restrictions.ts">del</a>(playbackRestrictionId) -> Promise<void></code>
- <code title="put /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/referrer">client.video.playbackRestrictions.<a href="./resources/video/playback-restrictions.ts">updateReferrer</a>(playbackRestrictionId, { ...params }) -> PlaybackRestriction</code>

## Spaces

Models:

- <code><a href="./resources/video/spaces.ts">Broadcast</a></code>
- <code><a href="./resources/video/spaces.ts">BroadcastLayout</a></code>
- <code><a href="./resources/video/spaces.ts">BroadcastResolution</a></code>
- <code><a href="./resources/video/spaces.ts">BroadcastResponse</a></code>
- <code><a href="./resources/video/spaces.ts">BroadcastStatus</a></code>
- <code><a href="./resources/video/spaces.ts">Space</a></code>
- <code><a href="./resources/video/spaces.ts">SpaceResponse</a></code>
- <code><a href="./resources/video/spaces.ts">SpaceStatus</a></code>
- <code><a href="./resources/video/spaces.ts">SpaceType</a></code>

Methods:

- <code title="post /video/v1/spaces">client.video.spaces.<a href="./resources/video/spaces.ts">create</a>({ ...params }) -> Space</code>
- <code title="get /video/v1/spaces/{SPACE_ID}">client.video.spaces.<a href="./resources/video/spaces.ts">retrieve</a>(spaceId) -> Space</code>
- <code title="get /video/v1/spaces">client.video.spaces.<a href="./resources/video/spaces.ts">list</a>({ ...params }) -> SpacesBasePage</code>
- <code title="delete /video/v1/spaces/{SPACE_ID}">client.video.spaces.<a href="./resources/video/spaces.ts">del</a>(spaceId) -> Promise<void></code>
- <code title="post /video/v1/spaces/{SPACE_ID}/broadcasts">client.video.spaces.<a href="./resources/video/spaces.ts">createBroadcast</a>(spaceId, { ...params }) -> Broadcast</code>
- <code title="delete /video/v1/spaces/{SPACE_ID}/broadcasts/{BROADCAST_ID}">client.video.spaces.<a href="./resources/video/spaces.ts">deleteBroadcast</a>(spaceId, broadcastId) -> Promise<void></code>
- <code title="get /video/v1/spaces/{SPACE_ID}/broadcasts/{BROADCAST_ID}">client.video.spaces.<a href="./resources/video/spaces.ts">retrieveBroadcast</a>(spaceId, broadcastId) -> Broadcast</code>
- <code title="post /video/v1/spaces/{SPACE_ID}/broadcasts/{BROADCAST_ID}/start">client.video.spaces.<a href="./resources/video/spaces.ts">startBroadcast</a>(spaceId, broadcastId) -> Promise<void></code>
- <code title="post /video/v1/spaces/{SPACE_ID}/broadcasts/{BROADCAST_ID}/stop">client.video.spaces.<a href="./resources/video/spaces.ts">stopBroadcast</a>(spaceId, broadcastId) -> Promise<void></code>

## TranscriptionVocabularies

Models:

- <code><a href="./resources/video/transcription-vocabularies.ts">TranscriptionVocabulary</a></code>
- <code><a href="./resources/video/transcription-vocabularies.ts">TranscriptionVocabularyPhrase</a></code>
- <code><a href="./resources/video/transcription-vocabularies.ts">TranscriptionVocabularyResponse</a></code>

Methods:

- <code title="post /video/v1/transcription-vocabularies">client.video.transcriptionVocabularies.<a href="./resources/video/transcription-vocabularies.ts">create</a>({ ...params }) -> TranscriptionVocabulary</code>
- <code title="get /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}">client.video.transcriptionVocabularies.<a href="./resources/video/transcription-vocabularies.ts">retrieve</a>(transcriptionVocabularyId) -> TranscriptionVocabulary</code>
- <code title="put /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}">client.video.transcriptionVocabularies.<a href="./resources/video/transcription-vocabularies.ts">update</a>(transcriptionVocabularyId, { ...params }) -> TranscriptionVocabulary</code>
- <code title="get /video/v1/transcription-vocabularies">client.video.transcriptionVocabularies.<a href="./resources/video/transcription-vocabularies.ts">list</a>({ ...params }) -> TranscriptionVocabulariesBasePage</code>
- <code title="delete /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}">client.video.transcriptionVocabularies.<a href="./resources/video/transcription-vocabularies.ts">del</a>(transcriptionVocabularyId) -> Promise<void></code>

## Uploads

Models:

- <code><a href="./resources/video/uploads.ts">Upload</a></code>
- <code><a href="./resources/video/uploads.ts">UploadResponse</a></code>

Methods:

- <code title="post /video/v1/uploads">client.video.uploads.<a href="./resources/video/uploads.ts">create</a>({ ...params }) -> Upload</code>
- <code title="get /video/v1/uploads/{UPLOAD_ID}">client.video.uploads.<a href="./resources/video/uploads.ts">retrieve</a>(uploadId) -> Upload</code>
- <code title="get /video/v1/uploads">client.video.uploads.<a href="./resources/video/uploads.ts">list</a>({ ...params }) -> UploadsBasePage</code>
- <code title="put /video/v1/uploads/{UPLOAD_ID}/cancel">client.video.uploads.<a href="./resources/video/uploads.ts">cancel</a>(uploadId) -> Upload</code>

# Data

## Dimensions

Models:

- <code><a href="./resources/data/dimensions.ts">DimensionValue</a></code>
- <code><a href="./resources/data/dimensions.ts">DimensionsResponse</a></code>

Methods:

- <code title="get /data/v1/dimensions">client.data.dimensions.<a href="./resources/data/dimensions.ts">list</a>() -> DimensionsResponse</code>
- <code title="get /data/v1/dimensions/{DIMENSION_ID}">client.data.dimensions.<a href="./resources/data/dimensions.ts">listValues</a>(dimensionId, { ...params }) -> DimensionValuesBasePage</code>

## Monitoring

Models:

- <code><a href="./resources/data/monitoring/monitoring.ts">MonitoringListDimensionsResponse</a></code>

Methods:

- <code title="get /data/v1/monitoring/dimensions">client.data.monitoring.<a href="./resources/data/monitoring/monitoring.ts">listDimensions</a>() -> MonitoringListDimensionsResponse</code>

### Metrics

Models:

- <code><a href="./resources/data/monitoring/metrics.ts">MetricListResponse</a></code>
- <code><a href="./resources/data/monitoring/metrics.ts">MetricGetBreakdownResponse</a></code>
- <code><a href="./resources/data/monitoring/metrics.ts">MetricGetBreakdownTimeseriesResponse</a></code>
- <code><a href="./resources/data/monitoring/metrics.ts">MetricGetHistogramTimeseriesResponse</a></code>
- <code><a href="./resources/data/monitoring/metrics.ts">MetricGetTimeseriesResponse</a></code>

Methods:

- <code title="get /data/v1/monitoring/metrics">client.data.monitoring.metrics.<a href="./resources/data/monitoring/metrics.ts">list</a>() -> MetricListResponse</code>
- <code title="get /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown">client.data.monitoring.metrics.<a href="./resources/data/monitoring/metrics.ts">getBreakdown</a>(monitoringMetricId, { ...params }) -> MetricGetBreakdownResponse</code>
- <code title="get /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown-timeseries">client.data.monitoring.metrics.<a href="./resources/data/monitoring/metrics.ts">getBreakdownTimeseries</a>(monitoringMetricId, { ...params }) -> MetricGetBreakdownTimeseriesResponse</code>
- <code title="get /data/v1/monitoring/metrics/{MONITORING_HISTOGRAM_METRIC_ID}/histogram-timeseries">client.data.monitoring.metrics.<a href="./resources/data/monitoring/metrics.ts">getHistogramTimeseries</a>(monitoringHistogramMetricId, { ...params }) -> MetricGetHistogramTimeseriesResponse</code>
- <code title="get /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/timeseries">client.data.monitoring.metrics.<a href="./resources/data/monitoring/metrics.ts">getTimeseries</a>(monitoringMetricId, { ...params }) -> MetricGetTimeseriesResponse</code>

## Errors

Models:

- <code><a href="./resources/data/errors.ts">ErrorsResponse</a></code>

Methods:

- <code title="get /data/v1/errors">client.data.errors.<a href="./resources/data/errors.ts">list</a>({ ...params }) -> ErrorsResponse</code>

## Exports

Models:

- <code><a href="./resources/data/exports.ts">ExportsResponse</a></code>
- <code><a href="./resources/data/exports.ts">VideoViewExportsResponse</a></code>

Methods:

- <code title="get /data/v1/exports/views">client.data.exports.<a href="./resources/data/exports.ts">listVideoViews</a>() -> VideoViewExportsResponse</code>

## Filters

Models:

- <code><a href="./resources/data/filters.ts">FilterValue</a></code>
- <code><a href="./resources/data/filters.ts">FiltersResponse</a></code>

Methods:

- <code title="get /data/v1/filters/{FILTER_ID}">client.data.filters.<a href="./resources/data/filters.ts">listValues</a>(filterId, { ...params }) -> FilterValuesBasePage</code>

## Incidents

Models:

- <code><a href="./resources/data/incidents.ts">Incident</a></code>
- <code><a href="./resources/data/incidents.ts">IncidentResponse</a></code>

Methods:

- <code title="get /data/v1/incidents/{INCIDENT_ID}">client.data.incidents.<a href="./resources/data/incidents.ts">retrieve</a>(incidentId) -> IncidentResponse</code>
- <code title="get /data/v1/incidents">client.data.incidents.<a href="./resources/data/incidents.ts">list</a>({ ...params }) -> IncidentsBasePage</code>
- <code title="get /data/v1/incidents/{INCIDENT_ID}/related">client.data.incidents.<a href="./resources/data/incidents.ts">listRelated</a>(incidentId, { ...params }) -> IncidentsBasePage</code>

## Metrics

Models:

- <code><a href="./resources/data/metrics.ts">AllMetricValuesResponse</a></code>
- <code><a href="./resources/data/metrics.ts">BreakdownValue</a></code>
- <code><a href="./resources/data/metrics.ts">InsightsResponse</a></code>
- <code><a href="./resources/data/metrics.ts">MetricTimeseriesDataResponse</a></code>
- <code><a href="./resources/data/metrics.ts">OverallValuesResponse</a></code>

Methods:

- <code title="get /data/v1/metrics/comparison">client.data.metrics.<a href="./resources/data/metrics.ts">list</a>({ ...params }) -> AllMetricValuesResponse</code>
- <code title="get /data/v1/metrics/{METRIC_ID}/insights">client.data.metrics.<a href="./resources/data/metrics.ts">getInsights</a>(metricId, { ...params }) -> InsightsResponse</code>
- <code title="get /data/v1/metrics/{METRIC_ID}/overall">client.data.metrics.<a href="./resources/data/metrics.ts">getOverallValues</a>(metricId, { ...params }) -> OverallValuesResponse</code>
- <code title="get /data/v1/metrics/{METRIC_ID}/timeseries">client.data.metrics.<a href="./resources/data/metrics.ts">getTimeseries</a>(metricId, { ...params }) -> MetricTimeseriesDataResponse</code>
- <code title="get /data/v1/metrics/{METRIC_ID}/breakdown">client.data.metrics.<a href="./resources/data/metrics.ts">listBreakdownValues</a>(metricId, { ...params }) -> BreakdownValuesBasePage</code>

## RealTime

Models:

- <code><a href="./resources/data/real-time.ts">RealTimeBreakdownResponse</a></code>
- <code><a href="./resources/data/real-time.ts">RealTimeDimensionsResponse</a></code>
- <code><a href="./resources/data/real-time.ts">RealTimeHistogramTimeseriesResponse</a></code>
- <code><a href="./resources/data/real-time.ts">RealTimeMetricsResponse</a></code>
- <code><a href="./resources/data/real-time.ts">RealTimeTimeseriesResponse</a></code>

Methods:

- <code title="get /data/v1/realtime/dimensions">client.data.realTime.<a href="./resources/data/real-time.ts">listDimensions</a>() -> RealTimeDimensionsResponse</code>
- <code title="get /data/v1/realtime/metrics">client.data.realTime.<a href="./resources/data/real-time.ts">listMetrics</a>() -> RealTimeMetricsResponse</code>
- <code title="get /data/v1/realtime/metrics/{REALTIME_METRIC_ID}/breakdown">client.data.realTime.<a href="./resources/data/real-time.ts">retrieveBreakdown</a>(realtimeMetricId, { ...params }) -> RealTimeBreakdownResponse</code>
- <code title="get /data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries">client.data.realTime.<a href="./resources/data/real-time.ts">retrieveHistogramTimeseries</a>(realtimeHistogramMetricId, { ...params }) -> RealTimeHistogramTimeseriesResponse</code>
- <code title="get /data/v1/realtime/metrics/{REALTIME_METRIC_ID}/timeseries">client.data.realTime.<a href="./resources/data/real-time.ts">retrieveTimeseries</a>(realtimeMetricId, { ...params }) -> RealTimeTimeseriesResponse</code>

## VideoViews

Models:

- <code><a href="./resources/data/video-views.ts">AbridgedVideoView</a></code>
- <code><a href="./resources/data/video-views.ts">VideoViewResponse</a></code>

Methods:

- <code title="get /data/v1/video-views/{VIDEO_VIEW_ID}">client.data.videoViews.<a href="./resources/data/video-views.ts">retrieve</a>(videoViewId) -> VideoViewResponse</code>
- <code title="get /data/v1/video-views">client.data.videoViews.<a href="./resources/data/video-views.ts">list</a>({ ...params }) -> AbridgedVideoViewsBasePage</code>

# System

## SigningKeys

Models:

- <code><a href="./resources/system/signing-keys.ts">SigningKey</a></code>
- <code><a href="./resources/system/signing-keys.ts">SigningKeyResponse</a></code>

Methods:

- <code title="post /system/v1/signing-keys">client.system.signingKeys.<a href="./resources/system/signing-keys.ts">create</a>() -> SigningKey</code>
- <code title="get /system/v1/signing-keys/{SIGNING_KEY_ID}">client.system.signingKeys.<a href="./resources/system/signing-keys.ts">retrieve</a>(signingKeyId) -> SigningKey</code>
- <code title="get /system/v1/signing-keys">client.system.signingKeys.<a href="./resources/system/signing-keys.ts">list</a>({ ...params }) -> SigningKeysBasePage</code>
- <code title="delete /system/v1/signing-keys/{SIGNING_KEY_ID}">client.system.signingKeys.<a href="./resources/system/signing-keys.ts">del</a>(signingKeyId) -> Promise<void></code>
