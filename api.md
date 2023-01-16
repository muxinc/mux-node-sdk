# Video

## Assets

Models:

- <code><a href="./resources/video/assets.ts">Asset</a></code>
- <code><a href="./resources/video/assets.ts">AssetMasterParams</a></code>
- <code><a href="./resources/video/assets.ts">AssetMP4SupportParams</a></code>
- <code><a href="./resources/video/assets.ts">AssetResponse</a></code>
- <code><a href="./resources/video/assets.ts">Track</a></code>
- <code><a href="./resources/video/assets.ts">UpdateAssetParams</a></code>

Methods:

- <code title="post /video/v1/assets">client.video.assets.<a href="./resources/video/assets.ts">create</a>({ ...params }) -> Promise<Asset></code>
- <code title="get /video/v1/assets/{ASSET_ID}">client.video.assets.<a href="./resources/video/assets.ts">retrieve</a>(assetId) -> Promise<Asset></code>
- <code title="patch /video/v1/assets/{ASSET_ID}">client.video.assets.<a href="./resources/video/assets.ts">update</a>(assetId, { ...params }) -> Promise<Asset></code>
- <code title="get /video/v1/assets">client.video.assets.<a href="./resources/video/assets.ts">list</a>({ ...params }) -> Core.PagePromise<AssetsBasePage></code>
- <code title="delete /video/v1/assets/{ASSET_ID}">client.video.assets.<a href="./resources/video/assets.ts">del</a>(assetId) -> Promise<void></code>
- <code title="post /video/v1/assets/{ASSET_ID}/playback-ids">client.video.assets.<a href="./resources/video/assets.ts">createPlaybackId</a>(assetId, { ...params }) -> Promise<PlaybackId></code>
- <code title="post /video/v1/assets/{ASSET_ID}/tracks">client.video.assets.<a href="./resources/video/assets.ts">createTrack</a>(assetId, { ...params }) -> Promise<Track></code>
- <code title="delete /video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}">client.video.assets.<a href="./resources/video/assets.ts">deletePlaybackId</a>(assetId, playbackId) -> Promise<void></code>
- <code title="delete /video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}">client.video.assets.<a href="./resources/video/assets.ts">deleteTrack</a>(assetId, trackId) -> Promise<void></code>
- <code title="get /video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}">client.video.assets.<a href="./resources/video/assets.ts">retrievePlaybackId</a>(assetId, playbackId) -> Promise<PlaybackId></code>
- <code title="put /video/v1/assets/{ASSET_ID}/master-access">client.video.assets.<a href="./resources/video/assets.ts">updateMasterAccess</a>(assetId, { ...params }) -> Promise<Asset></code>
- <code title="put /video/v1/assets/{ASSET_ID}/mp4-support">client.video.assets.<a href="./resources/video/assets.ts">updateMP4Support</a>(assetId, { ...params }) -> Promise<Asset></code>

## DeliveryUsage

Models:

- <code><a href="./resources/video/delivery-usage.ts">DeliveryReport</a></code>

Methods:

- <code title="get /video/v1/delivery-usage">client.video.deliveryUsage.<a href="./resources/video/delivery-usage.ts">list</a>({ ...params }) -> Core.PagePromise<DeliveryReportsPageWithTotal></code>

## LiveStreams

Models:

- <code><a href="./resources/video/live-streams.ts">CreateLiveStreamParams</a></code>
- <code><a href="./resources/video/live-streams.ts">LiveStream</a></code>
- <code><a href="./resources/video/live-streams.ts">LiveStreamEmbeddedSubtitlesParams</a></code>
- <code><a href="./resources/video/live-streams.ts">LiveStreamGeneratedSubtitlesParams</a></code>
- <code><a href="./resources/video/live-streams.ts">PlaybackIdParams</a></code>
- <code><a href="./resources/video/live-streams.ts">UpdateLiveStreamParams</a></code>
- <code><a href="./resources/video/live-streams.ts">LiveStreamCompleteResponse</a></code>
- <code><a href="./resources/video/live-streams.ts">LiveStreamCreateSimulcastTargetResponse</a></code>
- <code><a href="./resources/video/live-streams.ts">LiveStreamDisableResponse</a></code>
- <code><a href="./resources/video/live-streams.ts">LiveStreamEnableResponse</a></code>

Methods:

- <code title="post /video/v1/live-streams">client.video.liveStreams.<a href="./resources/video/live-streams.ts">create</a>({ ...params }) -> Promise<LiveStream></code>
- <code title="get /video/v1/live-streams/{LIVE_STREAM_ID}">client.video.liveStreams.<a href="./resources/video/live-streams.ts">retrieve</a>(liveStreamId) -> Promise<LiveStream></code>
- <code title="patch /video/v1/live-streams/{LIVE_STREAM_ID}">client.video.liveStreams.<a href="./resources/video/live-streams.ts">update</a>(liveStreamId, { ...params }) -> Promise<LiveStream></code>
- <code title="get /video/v1/live-streams">client.video.liveStreams.<a href="./resources/video/live-streams.ts">list</a>({ ...params }) -> Core.PagePromise<LiveStreamsBasePage></code>
- <code title="delete /video/v1/live-streams/{LIVE_STREAM_ID}">client.video.liveStreams.<a href="./resources/video/live-streams.ts">del</a>(liveStreamId) -> Promise<void></code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/complete">client.video.liveStreams.<a href="./resources/video/live-streams.ts">complete</a>(liveStreamId) -> Promise<LiveStreamCompleteResponse></code>
- <code title="post /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids">client.video.liveStreams.<a href="./resources/video/live-streams.ts">createPlaybackId</a>(liveStreamId, { ...params }) -> Promise<PlaybackId></code>
- <code title="post /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets">client.video.liveStreams.<a href="./resources/video/live-streams.ts">createSimulcastTarget</a>(liveStreamId, { ...params }) -> Promise<LiveStreamCreateSimulcastTargetResponse></code>
- <code title="delete /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}">client.video.liveStreams.<a href="./resources/video/live-streams.ts">deletePlaybackId</a>(liveStreamId, playbackId) -> Promise<void></code>
- <code title="delete /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}">client.video.liveStreams.<a href="./resources/video/live-streams.ts">deleteSimulcastTarget</a>(liveStreamId, simulcastTargetId) -> Promise<void></code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/disable">client.video.liveStreams.<a href="./resources/video/live-streams.ts">disable</a>(liveStreamId) -> Promise<LiveStreamDisableResponse></code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/enable">client.video.liveStreams.<a href="./resources/video/live-streams.ts">enable</a>(liveStreamId) -> Promise<LiveStreamEnableResponse></code>
- <code title="post /video/v1/live-streams/{LIVE_STREAM_ID}/reset-stream-key">client.video.liveStreams.<a href="./resources/video/live-streams.ts">resetStreamKey</a>(liveStreamId) -> Promise<LiveStream></code>
- <code title="get /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}">client.video.liveStreams.<a href="./resources/video/live-streams.ts">retrievePlaybackId</a>(liveStreamId, playbackId) -> Promise<PlaybackId></code>
- <code title="get /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}">client.video.liveStreams.<a href="./resources/video/live-streams.ts">retrieveSimulcastTarget</a>(liveStreamId, simulcastTargetId) -> Promise<LiveStreamCreateSimulcastTargetResponse></code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/embedded-subtitles">client.video.liveStreams.<a href="./resources/video/live-streams.ts">updateEmbeddedSubtitles</a>(liveStreamId, { ...params }) -> Promise<LiveStream></code>
- <code title="put /video/v1/live-streams/{LIVE_STREAM_ID}/generated-subtitles">client.video.liveStreams.<a href="./resources/video/live-streams.ts">updateGeneratedSubtitles</a>(liveStreamId, { ...params }) -> Promise<LiveStream></code>

## PlaybackIds

Models:

- <code><a href="./resources/video/playback-ids.ts">PlaybackIdRetrieveResponse</a></code>

Methods:

- <code title="get /video/v1/playback-ids/{PLAYBACK_ID}">client.video.playbackIds.<a href="./resources/video/playback-ids.ts">retrieve</a>(playbackId) -> Promise<PlaybackIdRetrieveResponse></code>

## PlaybackRestrictions

Models:

- <code><a href="./resources/video/playback-restrictions.ts">PlaybackRestriction</a></code>
- <code><a href="./resources/video/playback-restrictions.ts">PlaybackRestrictionParams</a></code>
- <code><a href="./resources/video/playback-restrictions.ts">PlaybackRestrictionResponse</a></code>

Methods:

- <code title="post /video/v1/playback-restrictions">client.video.playbackRestrictions.<a href="./resources/video/playback-restrictions.ts">create</a>({ ...params }) -> Promise<PlaybackRestriction></code>
- <code title="get /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}">client.video.playbackRestrictions.<a href="./resources/video/playback-restrictions.ts">retrieve</a>(playbackRestrictionId) -> Promise<PlaybackRestriction></code>
- <code title="get /video/v1/playback-restrictions">client.video.playbackRestrictions.<a href="./resources/video/playback-restrictions.ts">list</a>({ ...params }) -> Core.PagePromise<PlaybackRestrictionsBasePage></code>
- <code title="delete /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}">client.video.playbackRestrictions.<a href="./resources/video/playback-restrictions.ts">del</a>(playbackRestrictionId) -> Promise<void></code>
- <code title="put /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/referrer">client.video.playbackRestrictions.<a href="./resources/video/playback-restrictions.ts">updateReferrer</a>(playbackRestrictionId, { ...params }) -> Promise<PlaybackRestriction></code>

## SigningKeys

Models:

- <code><a href="./resources/video/signing-keys.ts">SigningKey</a></code>
- <code><a href="./resources/video/signing-keys.ts">SigningKeyResponse</a></code>

Methods:

- <code title="post /video/v1/signing-keys">client.video.signingKeys.<a href="./resources/video/signing-keys.ts">create</a>() -> Promise<SigningKey></code>
- <code title="get /video/v1/signing-keys/{SIGNING_KEY_ID}">client.video.signingKeys.<a href="./resources/video/signing-keys.ts">retrieve</a>(signingKeyId) -> Promise<SigningKey></code>
- <code title="get /video/v1/signing-keys">client.video.signingKeys.<a href="./resources/video/signing-keys.ts">list</a>({ ...params }) -> Core.PagePromise<SigningKeysBasePage></code>
- <code title="delete /video/v1/signing-keys/{SIGNING_KEY_ID}">client.video.signingKeys.<a href="./resources/video/signing-keys.ts">del</a>(signingKeyId) -> Promise<void></code>

## Spaces

Models:

- <code><a href="./resources/video/spaces.ts">Broadcast</a></code>
- <code><a href="./resources/video/spaces.ts">BroadcastLayout</a></code>
- <code><a href="./resources/video/spaces.ts">BroadcastResolution</a></code>
- <code><a href="./resources/video/spaces.ts">BroadcastResponse</a></code>
- <code><a href="./resources/video/spaces.ts">BroadcastStatus</a></code>
- <code><a href="./resources/video/spaces.ts">Space</a></code>
- <code><a href="./resources/video/spaces.ts">SpaceParams</a></code>
- <code><a href="./resources/video/spaces.ts">SpaceResponse</a></code>
- <code><a href="./resources/video/spaces.ts">SpaceStatus</a></code>
- <code><a href="./resources/video/spaces.ts">SpaceType</a></code>
- <code><a href="./resources/video/spaces.ts">SpaceStartBroadcastResponse</a></code>
- <code><a href="./resources/video/spaces.ts">SpaceStopBroadcastResponse</a></code>

Methods:

- <code title="post /video/v1/spaces">client.video.spaces.<a href="./resources/video/spaces.ts">create</a>({ ...params }) -> Promise<Space></code>
- <code title="get /video/v1/spaces/{SPACE_ID}">client.video.spaces.<a href="./resources/video/spaces.ts">retrieve</a>(spaceId) -> Promise<Space></code>
- <code title="get /video/v1/spaces">client.video.spaces.<a href="./resources/video/spaces.ts">list</a>({ ...params }) -> Core.PagePromise<SpacesBasePage></code>
- <code title="delete /video/v1/spaces/{SPACE_ID}">client.video.spaces.<a href="./resources/video/spaces.ts">del</a>(spaceId) -> Promise<void></code>
- <code title="post /video/v1/spaces/{SPACE_ID}/broadcasts">client.video.spaces.<a href="./resources/video/spaces.ts">createBroadcast</a>(spaceId, { ...params }) -> Promise<Broadcast></code>
- <code title="delete /video/v1/spaces/{SPACE_ID}/broadcasts/{BROADCAST_ID}">client.video.spaces.<a href="./resources/video/spaces.ts">deleteBroadcast</a>(spaceId, broadcastId) -> Promise<void></code>
- <code title="get /video/v1/spaces/{SPACE_ID}/broadcasts/{BROADCAST_ID}">client.video.spaces.<a href="./resources/video/spaces.ts">retrieveBroadcast</a>(spaceId, broadcastId) -> Promise<Broadcast></code>
- <code title="post /video/v1/spaces/{SPACE_ID}/broadcasts/{BROADCAST_ID}/start">client.video.spaces.<a href="./resources/video/spaces.ts">startBroadcast</a>(spaceId, broadcastId) -> Promise<SpaceStartBroadcastResponse></code>
- <code title="post /video/v1/spaces/{SPACE_ID}/broadcasts/{BROADCAST_ID}/stop">client.video.spaces.<a href="./resources/video/spaces.ts">stopBroadcast</a>(spaceId, broadcastId) -> Promise<SpaceStopBroadcastResponse></code>

## TranscriptionVocabularies

Models:

- <code><a href="./resources/video/transcription-vocabularies.ts">CreateTranscriptionVocabularyParams</a></code>
- <code><a href="./resources/video/transcription-vocabularies.ts">TranscriptionVocabulary</a></code>
- <code><a href="./resources/video/transcription-vocabularies.ts">TranscriptionVocabularyPhrase</a></code>
- <code><a href="./resources/video/transcription-vocabularies.ts">TranscriptionVocabularyResponse</a></code>
- <code><a href="./resources/video/transcription-vocabularies.ts">UpdateTranscriptionVocabularyParams</a></code>

Methods:

- <code title="post /video/v1/transcription-vocabularies">client.video.transcriptionVocabularies.<a href="./resources/video/transcription-vocabularies.ts">create</a>({ ...params }) -> Promise<TranscriptionVocabulary></code>
- <code title="get /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}">client.video.transcriptionVocabularies.<a href="./resources/video/transcription-vocabularies.ts">retrieve</a>(transcriptionVocabularyId) -> Promise<TranscriptionVocabulary></code>
- <code title="put /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}">client.video.transcriptionVocabularies.<a href="./resources/video/transcription-vocabularies.ts">update</a>(transcriptionVocabularyId, { ...params }) -> Promise<TranscriptionVocabulary></code>
- <code title="get /video/v1/transcription-vocabularies">client.video.transcriptionVocabularies.<a href="./resources/video/transcription-vocabularies.ts">list</a>({ ...params }) -> Core.PagePromise<TranscriptionVocabulariesBasePage></code>
- <code title="delete /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}">client.video.transcriptionVocabularies.<a href="./resources/video/transcription-vocabularies.ts">del</a>(transcriptionVocabularyId) -> Promise<void></code>

## Uploads

Models:

- <code><a href="./resources/video/uploads.ts">Upload</a></code>
- <code><a href="./resources/video/uploads.ts">UploadParams</a></code>
- <code><a href="./resources/video/uploads.ts">UploadResponse</a></code>

Methods:

- <code title="post /video/v1/uploads">client.video.uploads.<a href="./resources/video/uploads.ts">create</a>({ ...params }) -> Promise<Upload></code>
- <code title="get /video/v1/uploads/{UPLOAD_ID}">client.video.uploads.<a href="./resources/video/uploads.ts">retrieve</a>(uploadId) -> Promise<Upload></code>
- <code title="get /video/v1/uploads">client.video.uploads.<a href="./resources/video/uploads.ts">list</a>({ ...params }) -> Core.PagePromise<UploadsBasePage></code>
- <code title="put /video/v1/uploads/{UPLOAD_ID}/cancel">client.video.uploads.<a href="./resources/video/uploads.ts">cancel</a>(uploadId) -> Promise<Upload></code>

# Data

## Dimensions

Models:

- <code><a href="./resources/data/dimensions.ts">DimensionValue</a></code>
- <code><a href="./resources/data/dimensions.ts">DimensionsResponse</a></code>

Methods:

- <code title="get /data/v1/dimensions">client.data.dimensions.<a href="./resources/data/dimensions.ts">list</a>() -> Promise<Core.APIResponse<DimensionsResponse>></code>
- <code title="get /data/v1/dimensions/{DIMENSION_ID}">client.data.dimensions.<a href="./resources/data/dimensions.ts">listValues</a>(dimensionId, { ...params }) -> Core.PagePromise<DimensionValuesBasePage></code>

## Errors

Models:

- <code><a href="./resources/data/errors.ts">ErrorsResponse</a></code>

Methods:

- <code title="get /data/v1/errors">client.data.errors.<a href="./resources/data/errors.ts">list</a>({ ...params }) -> Promise<Core.APIResponse<ErrorsResponse>></code>

## Exports

Models:

- <code><a href="./resources/data/exports.ts">ExportsResponse</a></code>
- <code><a href="./resources/data/exports.ts">VideoViewExportsResponse</a></code>

Methods:

- <code title="get /data/v1/exports/views">client.data.exports.<a href="./resources/data/exports.ts">listVideoViews</a>() -> Promise<Core.APIResponse<VideoViewExportsResponse>></code>

## Filters

Models:

- <code><a href="./resources/data/filters.ts">FilterValue</a></code>
- <code><a href="./resources/data/filters.ts">FiltersResponse</a></code>

Methods:

- <code title="get /data/v1/filters/{FILTER_ID}">client.data.filters.<a href="./resources/data/filters.ts">listValues</a>(filterId, { ...params }) -> Core.PagePromise<FilterValuesBasePage></code>

## Incidents

Models:

- <code><a href="./resources/data/incidents.ts">Incident</a></code>
- <code><a href="./resources/data/incidents.ts">IncidentResponse</a></code>

Methods:

- <code title="get /data/v1/incidents/{INCIDENT_ID}">client.data.incidents.<a href="./resources/data/incidents.ts">retrieve</a>(incidentId) -> Promise<Core.APIResponse<IncidentResponse>></code>
- <code title="get /data/v1/incidents">client.data.incidents.<a href="./resources/data/incidents.ts">list</a>({ ...params }) -> Core.PagePromise<IncidentsBasePage></code>
- <code title="get /data/v1/incidents/{INCIDENT_ID}/related">client.data.incidents.<a href="./resources/data/incidents.ts">listRelated</a>(incidentId, { ...params }) -> Core.PagePromise<IncidentsBasePage></code>

## Metrics

Models:

- <code><a href="./resources/data/metrics.ts">AllMetricValuesResponse</a></code>
- <code><a href="./resources/data/metrics.ts">BreakdownValue</a></code>
- <code><a href="./resources/data/metrics.ts">InsightsResponse</a></code>
- <code><a href="./resources/data/metrics.ts">MetricTimeseriesDataResponse</a></code>
- <code><a href="./resources/data/metrics.ts">OverallValuesResponse</a></code>

Methods:

- <code title="get /data/v1/metrics/comparison">client.data.metrics.<a href="./resources/data/metrics.ts">list</a>({ ...params }) -> Promise<Core.APIResponse<AllMetricValuesResponse>></code>
- <code title="get /data/v1/metrics/{METRIC_ID}/breakdown">client.data.metrics.<a href="./resources/data/metrics.ts">listBreakdown</a>(metricId, { ...params }) -> Core.PagePromise<BreakdownValuesBasePage></code>
- <code title="get /data/v1/metrics/{METRIC_ID}/insights">client.data.metrics.<a href="./resources/data/metrics.ts">listInsights</a>(metricId, { ...params }) -> Promise<Core.APIResponse<InsightsResponse>></code>
- <code title="get /data/v1/metrics/{METRIC_ID}/overall">client.data.metrics.<a href="./resources/data/metrics.ts">retrieveOverall</a>(metricId, { ...params }) -> Promise<Core.APIResponse<OverallValuesResponse>></code>
- <code title="get /data/v1/metrics/{METRIC_ID}/timeseries">client.data.metrics.<a href="./resources/data/metrics.ts">retrieveTimeseries</a>(metricId, { ...params }) -> Promise<Core.APIResponse<MetricTimeseriesDataResponse>></code>

## RealTime

Models:

- <code><a href="./resources/data/real-time.ts">RealTimeBreakdownResponse</a></code>
- <code><a href="./resources/data/real-time.ts">RealTimeDimensionsResponse</a></code>
- <code><a href="./resources/data/real-time.ts">RealTimeHistogramTimeseriesResponse</a></code>
- <code><a href="./resources/data/real-time.ts">RealTimeMetricsResponse</a></code>
- <code><a href="./resources/data/real-time.ts">RealTimeTimeseriesResponse</a></code>

Methods:

- <code title="get /data/v1/realtime/dimensions">client.data.realTime.<a href="./resources/data/real-time.ts">listDimensions</a>() -> Promise<Core.APIResponse<RealTimeDimensionsResponse>></code>
- <code title="get /data/v1/realtime/metrics">client.data.realTime.<a href="./resources/data/real-time.ts">listMetrics</a>() -> Promise<Core.APIResponse<RealTimeMetricsResponse>></code>
- <code title="get /data/v1/realtime/metrics/{REALTIME_METRIC_ID}/breakdown">client.data.realTime.<a href="./resources/data/real-time.ts">retrieveBreakdown</a>(realtimeMetricId, { ...params }) -> Promise<Core.APIResponse<RealTimeBreakdownResponse>></code>
- <code title="get /data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries">client.data.realTime.<a href="./resources/data/real-time.ts">retrieveHistogramTimeseries</a>(realtimeHistogramMetricId, { ...params }) -> Promise<Core.APIResponse<RealTimeHistogramTimeseriesResponse>></code>
- <code title="get /data/v1/realtime/metrics/{REALTIME_METRIC_ID}/timeseries">client.data.realTime.<a href="./resources/data/real-time.ts">retrieveTimeseries</a>(realtimeMetricId, { ...params }) -> Promise<Core.APIResponse<RealTimeTimeseriesResponse>></code>

## VideoViews

Models:

- <code><a href="./resources/data/video-views.ts">AbridgedVideoView</a></code>
- <code><a href="./resources/data/video-views.ts">VideoViewResponse</a></code>

Methods:

- <code title="get /data/v1/video-views/{VIDEO_VIEW_ID}">client.data.videoViews.<a href="./resources/data/video-views.ts">retrieve</a>(videoViewId) -> Promise<Core.APIResponse<VideoViewResponse>></code>
- <code title="get /data/v1/video-views">client.data.videoViews.<a href="./resources/data/video-views.ts">list</a>({ ...params }) -> Core.PagePromise<AbridgedVideoViewsBasePage></code>
