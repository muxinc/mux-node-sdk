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
- <code><a href="./src/resources/video/assets.ts">AssetCreateStaticRenditionResponse</a></code>
- <code><a href="./src/resources/video/assets.ts">AssetGenerateSubtitlesResponse</a></code>
- <code><a href="./src/resources/video/assets.ts">AssetRetrieveInputInfoResponse</a></code>

Methods:

- <code title="post /video/v1/assets">client.video.assets.<a href="./src/resources/video/assets.ts">create</a>({ ...params }) -> Asset</code>
- <code title="get /video/v1/assets/{ASSET_ID}">client.video.assets.<a href="./src/resources/video/assets.ts">retrieve</a>(assetID) -> Asset</code>
- <code title="patch /video/v1/assets/{ASSET_ID}">client.video.assets.<a href="./src/resources/video/assets.ts">update</a>(assetID, { ...params }) -> Asset</code>
- <code title="get /video/v1/assets">client.video.assets.<a href="./src/resources/video/assets.ts">list</a>({ ...params }) -> AssetsCursorPage</code>
- <code title="delete /video/v1/assets/{ASSET_ID}">client.video.assets.<a href="./src/resources/video/assets.ts">delete</a>(assetID) -> void</code>
- <code title="post /video/v1/assets/{ASSET_ID}/playback-ids">client.video.assets.<a href="./src/resources/video/assets.ts">createPlaybackID</a>(assetID, { ...params }) -> PlaybackID</code>
- <code title="post /video/v1/assets/{ASSET_ID}/static-renditions">client.video.assets.<a href="./src/resources/video/assets.ts">createStaticRendition</a>(assetID, { ...params }) -> AssetCreateStaticRenditionResponse</code>
- <code title="post /video/v1/assets/{ASSET_ID}/tracks">client.video.assets.<a href="./src/resources/video/assets.ts">createTrack</a>(assetID, { ...params }) -> Track</code>
- <code title="delete /video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}">client.video.assets.<a href="./src/resources/video/assets.ts">deletePlaybackID</a>(playbackID, { ...params }) -> void</code>
- <code title="delete /video/v1/assets/{ASSET_ID}/static-renditions/{STATIC_RENDITION_ID}">client.video.assets.<a href="./src/resources/video/assets.ts">deleteStaticRendition</a>(staticRenditionID, { ...params }) -> void</code>
- <code title="delete /video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}">client.video.assets.<a href="./src/resources/video/assets.ts">deleteTrack</a>(trackID, { ...params }) -> void</code>
- <code title="post /video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}/generate-subtitles">client.video.assets.<a href="./src/resources/video/assets.ts">generateSubtitles</a>(trackID, { ...params }) -> AssetGenerateSubtitlesResponse</code>
- <code title="get /video/v1/assets/{ASSET_ID}/input-info">client.video.assets.<a href="./src/resources/video/assets.ts">retrieveInputInfo</a>(assetID) -> AssetRetrieveInputInfoResponse</code>
- <code title="get /video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}">client.video.assets.<a href="./src/resources/video/assets.ts">retrievePlaybackID</a>(playbackID, { ...params }) -> PlaybackID</code>
- <code title="put /video/v1/assets/{ASSET_ID}/master-access">client.video.assets.<a href="./src/resources/video/assets.ts">updateMasterAccess</a>(assetID, { ...params }) -> Asset</code>
- <code title="put /video/v1/assets/{ASSET_ID}/mp4-support">client.video.assets.<a href="./src/resources/video/assets.ts">updateMP4Support</a>(assetID, { ...params }) -> Asset</code>

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
- <code title="get /video/v1/live-streams/{LIVE_STREAM_ID}">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">retrieve</a>(liveStreamID) -> LiveStream</code>
- <code title="patch /video/v1/live-streams/{LIVE_STREAM_ID}">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">update</a>(liveStreamID, { ...params }) -> LiveStream</code>
- <code title="get /video/v1/live-streams">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">list</a>({ ...params }) -> LiveStreamsBasePage</code>
- <code title="delete /video/v1/live-streams/{LIVE_STREAM_ID}">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">delete</a>(liveStreamID) -> void</code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/complete">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">complete</a>(liveStreamID) -> void</code>
- <code title="post /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">createPlaybackID</a>(liveStreamID, { ...params }) -> PlaybackID</code>
- <code title="post /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">createSimulcastTarget</a>(liveStreamID, { ...params }) -> SimulcastTarget</code>
- <code title="delete /video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">deleteNewAssetSettingsStaticRenditions</a>(liveStreamID) -> void</code>
- <code title="delete /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">deletePlaybackID</a>(playbackID, { ...params }) -> void</code>
- <code title="delete /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">deleteSimulcastTarget</a>(simulcastTargetID, { ...params }) -> void</code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/disable">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">disable</a>(liveStreamID) -> void</code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/enable">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">enable</a>(liveStreamID) -> void</code>
- <code title="post /video/v1/live-streams/{LIVE_STREAM_ID}/reset-stream-key">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">resetStreamKey</a>(liveStreamID) -> LiveStream</code>
- <code title="get /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">retrievePlaybackID</a>(playbackID, { ...params }) -> PlaybackID</code>
- <code title="get /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">retrieveSimulcastTarget</a>(simulcastTargetID, { ...params }) -> SimulcastTarget</code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/embedded-subtitles">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">updateEmbeddedSubtitles</a>(liveStreamID, { ...params }) -> LiveStream</code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/generated-subtitles">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">updateGeneratedSubtitles</a>(liveStreamID, { ...params }) -> LiveStream</code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions">client.video.liveStreams.<a href="./src/resources/video/live-streams.ts">updateNewAssetSettingsStaticRenditions</a>(liveStreamID, { ...params }) -> LiveStream</code>

## PlaybackIDs

Types:

- <code><a href="./src/resources/video/playback-ids.ts">PlaybackIDRetrieveResponse</a></code>

Methods:

- <code title="get /video/v1/playback-ids/{PLAYBACK_ID}">client.video.playbackIDs.<a href="./src/resources/video/playback-ids.ts">retrieve</a>(playbackID) -> PlaybackIDRetrieveResponse</code>

## PlaybackRestrictions

Types:

- <code><a href="./src/resources/video/playback-restrictions.ts">PlaybackRestriction</a></code>
- <code><a href="./src/resources/video/playback-restrictions.ts">PlaybackRestrictionResponse</a></code>

Methods:

- <code title="post /video/v1/playback-restrictions">client.video.playbackRestrictions.<a href="./src/resources/video/playback-restrictions.ts">create</a>({ ...params }) -> PlaybackRestriction</code>
- <code title="get /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}">client.video.playbackRestrictions.<a href="./src/resources/video/playback-restrictions.ts">retrieve</a>(playbackRestrictionID) -> PlaybackRestriction</code>
- <code title="get /video/v1/playback-restrictions">client.video.playbackRestrictions.<a href="./src/resources/video/playback-restrictions.ts">list</a>({ ...params }) -> PlaybackRestrictionsBasePage</code>
- <code title="delete /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}">client.video.playbackRestrictions.<a href="./src/resources/video/playback-restrictions.ts">delete</a>(playbackRestrictionID) -> void</code>
- <code title="put /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/referrer">client.video.playbackRestrictions.<a href="./src/resources/video/playback-restrictions.ts">updateReferrer</a>(playbackRestrictionID, { ...params }) -> PlaybackRestriction</code>
- <code title="put /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/user_agent">client.video.playbackRestrictions.<a href="./src/resources/video/playback-restrictions.ts">updateUserAgent</a>(playbackRestrictionID, { ...params }) -> PlaybackRestriction</code>

## TranscriptionVocabularies

Types:

- <code><a href="./src/resources/video/transcription-vocabularies.ts">TranscriptionVocabulary</a></code>
- <code><a href="./src/resources/video/transcription-vocabularies.ts">TranscriptionVocabularyResponse</a></code>

Methods:

- <code title="post /video/v1/transcription-vocabularies">client.video.transcriptionVocabularies.<a href="./src/resources/video/transcription-vocabularies.ts">create</a>({ ...params }) -> TranscriptionVocabulary</code>
- <code title="get /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}">client.video.transcriptionVocabularies.<a href="./src/resources/video/transcription-vocabularies.ts">retrieve</a>(transcriptionVocabularyID) -> TranscriptionVocabulary</code>
- <code title="put /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}">client.video.transcriptionVocabularies.<a href="./src/resources/video/transcription-vocabularies.ts">update</a>(transcriptionVocabularyID, { ...params }) -> TranscriptionVocabulary</code>
- <code title="get /video/v1/transcription-vocabularies">client.video.transcriptionVocabularies.<a href="./src/resources/video/transcription-vocabularies.ts">list</a>({ ...params }) -> TranscriptionVocabulariesBasePage</code>
- <code title="delete /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}">client.video.transcriptionVocabularies.<a href="./src/resources/video/transcription-vocabularies.ts">delete</a>(transcriptionVocabularyID) -> void</code>

## Uploads

Types:

- <code><a href="./src/resources/video/uploads.ts">Upload</a></code>
- <code><a href="./src/resources/video/uploads.ts">UploadResponse</a></code>

Methods:

- <code title="post /video/v1/uploads">client.video.uploads.<a href="./src/resources/video/uploads.ts">create</a>({ ...params }) -> Upload</code>
- <code title="get /video/v1/uploads/{UPLOAD_ID}">client.video.uploads.<a href="./src/resources/video/uploads.ts">retrieve</a>(uploadID) -> Upload</code>
- <code title="get /video/v1/uploads">client.video.uploads.<a href="./src/resources/video/uploads.ts">list</a>({ ...params }) -> UploadsBasePage</code>
- <code title="put /video/v1/uploads/{UPLOAD_ID}/cancel">client.video.uploads.<a href="./src/resources/video/uploads.ts">cancel</a>(uploadID) -> Upload</code>

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
- <code title="get /video/v1/web-inputs/{WEB_INPUT_ID}">client.video.webInputs.<a href="./src/resources/video/web-inputs.ts">retrieve</a>(webInputID) -> WebInputRetrieveResponse</code>
- <code title="get /video/v1/web-inputs">client.video.webInputs.<a href="./src/resources/video/web-inputs.ts">list</a>({ ...params }) -> WebInputListResponsesBasePage</code>
- <code title="delete /video/v1/web-inputs/{WEB_INPUT_ID}">client.video.webInputs.<a href="./src/resources/video/web-inputs.ts">delete</a>(webInputID) -> void</code>
- <code title="put /video/v1/web-inputs/{WEB_INPUT_ID}/launch">client.video.webInputs.<a href="./src/resources/video/web-inputs.ts">launch</a>(webInputID) -> WebInputLaunchResponse</code>
- <code title="put /video/v1/web-inputs/{WEB_INPUT_ID}/reload">client.video.webInputs.<a href="./src/resources/video/web-inputs.ts">reload</a>(webInputID) -> WebInputReloadResponse</code>
- <code title="put /video/v1/web-inputs/{WEB_INPUT_ID}/shutdown">client.video.webInputs.<a href="./src/resources/video/web-inputs.ts">shutdown</a>(webInputID) -> WebInputShutdownResponse</code>
- <code title="put /video/v1/web-inputs/{WEB_INPUT_ID}/url">client.video.webInputs.<a href="./src/resources/video/web-inputs.ts">updateURL</a>(webInputID, { ...params }) -> WebInputUpdateURLResponse</code>

## DRMConfigurations

Types:

- <code><a href="./src/resources/video/drm-configurations.ts">DRMConfiguration</a></code>

Methods:

- <code title="get /video/v1/drm-configurations/{DRM_CONFIGURATION_ID}">client.video.drmConfigurations.<a href="./src/resources/video/drm-configurations.ts">retrieve</a>(drmConfigurationID) -> DRMConfiguration</code>
- <code title="get /video/v1/drm-configurations">client.video.drmConfigurations.<a href="./src/resources/video/drm-configurations.ts">list</a>({ ...params }) -> DRMConfigurationsBasePage</code>

## Playback

Types:

- <code><a href="./src/resources/video/playback.ts">PlaybackStoryboardMetaResponse</a></code>
- <code><a href="./src/resources/video/playback.ts">PlaybackStoryboardVttResponse</a></code>
- <code><a href="./src/resources/video/playback.ts">PlaybackTrackResponse</a></code>
- <code><a href="./src/resources/video/playback.ts">PlaybackTranscriptResponse</a></code>

Methods:

- <code title="get /{PLAYBACK_ID}/animated.{EXTENSION}">client.video.playback.<a href="./src/resources/video/playback.ts">animated</a>(extension, { ...params }) -> Response</code>
- <code title="get /{PLAYBACK_ID}.m3u8">client.video.playback.<a href="./src/resources/video/playback.ts">hls</a>(playbackID, { ...params }) -> Response</code>
- <code title="get /{PLAYBACK_ID}/{FILENAME}">client.video.playback.<a href="./src/resources/video/playback.ts">staticRendition</a>(filename, { ...params }) -> Response</code>
- <code title="get /{PLAYBACK_ID}/storyboard.{EXTENSION}">client.video.playback.<a href="./src/resources/video/playback.ts">storyboard</a>(extension, { ...params }) -> Response</code>
- <code title="get /{PLAYBACK_ID}/storyboard.json">client.video.playback.<a href="./src/resources/video/playback.ts">storyboardMeta</a>(playbackID, { ...params }) -> string</code>
- <code title="get /{PLAYBACK_ID}/storyboard.vtt">client.video.playback.<a href="./src/resources/video/playback.ts">storyboardVtt</a>(playbackID, { ...params }) -> string</code>
- <code title="get /{PLAYBACK_ID}/thumbnail.{EXTENSION}">client.video.playback.<a href="./src/resources/video/playback.ts">thumbnail</a>(extension, { ...params }) -> Response</code>
- <code title="get /{PLAYBACK_ID}/text/{TRACK_ID}.vtt">client.video.playback.<a href="./src/resources/video/playback.ts">track</a>(trackID, { ...params }) -> string</code>
- <code title="get /{PLAYBACK_ID}/text/{TRACK_ID}.txt">client.video.playback.<a href="./src/resources/video/playback.ts">transcript</a>(trackID, { ...params }) -> string</code>

# Data

## Dimensions

Types:

- <code><a href="./src/resources/data/dimensions.ts">DimensionValue</a></code>
- <code><a href="./src/resources/data/dimensions.ts">DimensionsResponse</a></code>

Methods:

- <code title="get /data/v1/dimensions">client.data.dimensions.<a href="./src/resources/data/dimensions.ts">list</a>() -> DimensionsResponse</code>
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

# System

## SigningKeys

Types:

- <code><a href="./src/resources/system/signing-keys.ts">SigningKey</a></code>
- <code><a href="./src/resources/system/signing-keys.ts">SigningKeyResponse</a></code>

Methods:

- <code title="post /system/v1/signing-keys">client.system.signingKeys.<a href="./src/resources/system/signing-keys.ts">create</a>() -> SigningKey</code>
- <code title="get /system/v1/signing-keys/{SIGNING_KEY_ID}">client.system.signingKeys.<a href="./src/resources/system/signing-keys.ts">retrieve</a>(signingKeyID) -> SigningKey</code>
- <code title="get /system/v1/signing-keys">client.system.signingKeys.<a href="./src/resources/system/signing-keys.ts">list</a>({ ...params }) -> SigningKeysBasePage</code>
- <code title="delete /system/v1/signing-keys/{SIGNING_KEY_ID}">client.system.signingKeys.<a href="./src/resources/system/signing-keys.ts">delete</a>(signingKeyID) -> void</code>

## Utilities

Types:

- <code><a href="./src/resources/system/utilities.ts">WhoamiResponse</a></code>
- <code><a href="./src/resources/system/utilities.ts">UtilityWhoamiResponse</a></code>

Methods:

- <code title="get /system/v1/whoami">client.system.utilities.<a href="./src/resources/system/utilities.ts">whoami</a>() -> UtilityWhoamiResponse</code>

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
- <code><a href="./src/resources/webhooks.ts">VideoAssetStaticRenditionCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetStaticRenditionReadyWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetStaticRenditionErroredWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetStaticRenditionDeletedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetStaticRenditionSkippedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetWarningWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VideoAssetNonStandardInputDetectedWebhookEvent</a></code>
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
- <code><a href="./src/resources/webhooks.ts">VideoDeliveryHighTrafficWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">UnwrapWebhookEvent</a></code>

Methods:

- <code>client.webhooks.<a href="./src/resources/webhooks.ts">unwrap</a>(body) -> void</code>
