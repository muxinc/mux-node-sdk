// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.video.assets.create',
    fullyQualifiedName: 'video.assets.create',
    httpMethod: 'post',
    httpPath: '/video/v1/assets',
  },
  {
    clientCallName: 'client.video.assets.retrieve',
    fullyQualifiedName: 'video.assets.retrieve',
    httpMethod: 'get',
    httpPath: '/video/v1/assets/{ASSET_ID}',
  },
  {
    clientCallName: 'client.video.assets.update',
    fullyQualifiedName: 'video.assets.update',
    httpMethod: 'patch',
    httpPath: '/video/v1/assets/{ASSET_ID}',
  },
  {
    clientCallName: 'client.video.assets.list',
    fullyQualifiedName: 'video.assets.list',
    httpMethod: 'get',
    httpPath: '/video/v1/assets',
  },
  {
    clientCallName: 'client.video.assets.delete',
    fullyQualifiedName: 'video.assets.delete',
    httpMethod: 'delete',
    httpPath: '/video/v1/assets/{ASSET_ID}',
  },
  {
    clientCallName: 'client.video.assets.createPlaybackID',
    fullyQualifiedName: 'video.assets.createPlaybackID',
    httpMethod: 'post',
    httpPath: '/video/v1/assets/{ASSET_ID}/playback-ids',
  },
  {
    clientCallName: 'client.video.assets.createStaticRendition',
    fullyQualifiedName: 'video.assets.createStaticRendition',
    httpMethod: 'post',
    httpPath: '/video/v1/assets/{ASSET_ID}/static-renditions',
  },
  {
    clientCallName: 'client.video.assets.createTrack',
    fullyQualifiedName: 'video.assets.createTrack',
    httpMethod: 'post',
    httpPath: '/video/v1/assets/{ASSET_ID}/tracks',
  },
  {
    clientCallName: 'client.video.assets.deletePlaybackID',
    fullyQualifiedName: 'video.assets.deletePlaybackID',
    httpMethod: 'delete',
    httpPath: '/video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}',
  },
  {
    clientCallName: 'client.video.assets.deleteStaticRendition',
    fullyQualifiedName: 'video.assets.deleteStaticRendition',
    httpMethod: 'delete',
    httpPath: '/video/v1/assets/{ASSET_ID}/static-renditions/{STATIC_RENDITION_ID}',
  },
  {
    clientCallName: 'client.video.assets.deleteTrack',
    fullyQualifiedName: 'video.assets.deleteTrack',
    httpMethod: 'delete',
    httpPath: '/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}',
  },
  {
    clientCallName: 'client.video.assets.generateSubtitles',
    fullyQualifiedName: 'video.assets.generateSubtitles',
    httpMethod: 'post',
    httpPath: '/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}/generate-subtitles',
  },
  {
    clientCallName: 'client.video.assets.retrieveInputInfo',
    fullyQualifiedName: 'video.assets.retrieveInputInfo',
    httpMethod: 'get',
    httpPath: '/video/v1/assets/{ASSET_ID}/input-info',
  },
  {
    clientCallName: 'client.video.assets.retrievePlaybackID',
    fullyQualifiedName: 'video.assets.retrievePlaybackID',
    httpMethod: 'get',
    httpPath: '/video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}',
  },
  {
    clientCallName: 'client.video.assets.updateMasterAccess',
    fullyQualifiedName: 'video.assets.updateMasterAccess',
    httpMethod: 'put',
    httpPath: '/video/v1/assets/{ASSET_ID}/master-access',
  },
  {
    clientCallName: 'client.video.assets.updateMP4Support',
    fullyQualifiedName: 'video.assets.updateMP4Support',
    httpMethod: 'put',
    httpPath: '/video/v1/assets/{ASSET_ID}/mp4-support',
  },
  {
    clientCallName: 'client.video.deliveryUsage.list',
    fullyQualifiedName: 'video.deliveryUsage.list',
    httpMethod: 'get',
    httpPath: '/video/v1/delivery-usage',
  },
  {
    clientCallName: 'client.video.liveStreams.create',
    fullyQualifiedName: 'video.liveStreams.create',
    httpMethod: 'post',
    httpPath: '/video/v1/live-streams',
  },
  {
    clientCallName: 'client.video.liveStreams.retrieve',
    fullyQualifiedName: 'video.liveStreams.retrieve',
    httpMethod: 'get',
    httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}',
  },
  {
    clientCallName: 'client.video.liveStreams.update',
    fullyQualifiedName: 'video.liveStreams.update',
    httpMethod: 'patch',
    httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}',
  },
  {
    clientCallName: 'client.video.liveStreams.list',
    fullyQualifiedName: 'video.liveStreams.list',
    httpMethod: 'get',
    httpPath: '/video/v1/live-streams',
  },
  {
    clientCallName: 'client.video.liveStreams.delete',
    fullyQualifiedName: 'video.liveStreams.delete',
    httpMethod: 'delete',
    httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}',
  },
  {
    clientCallName: 'client.video.liveStreams.complete',
    fullyQualifiedName: 'video.liveStreams.complete',
    httpMethod: 'put',
    httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/complete',
  },
  {
    clientCallName: 'client.video.liveStreams.createPlaybackID',
    fullyQualifiedName: 'video.liveStreams.createPlaybackID',
    httpMethod: 'post',
    httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids',
  },
  {
    clientCallName: 'client.video.liveStreams.createSimulcastTarget',
    fullyQualifiedName: 'video.liveStreams.createSimulcastTarget',
    httpMethod: 'post',
    httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets',
  },
  {
    clientCallName: 'client.video.liveStreams.deleteNewAssetSettingsStaticRenditions',
    fullyQualifiedName: 'video.liveStreams.deleteNewAssetSettingsStaticRenditions',
    httpMethod: 'delete',
    httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions',
  },
  {
    clientCallName: 'client.video.liveStreams.deletePlaybackID',
    fullyQualifiedName: 'video.liveStreams.deletePlaybackID',
    httpMethod: 'delete',
    httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}',
  },
  {
    clientCallName: 'client.video.liveStreams.deleteSimulcastTarget',
    fullyQualifiedName: 'video.liveStreams.deleteSimulcastTarget',
    httpMethod: 'delete',
    httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}',
  },
  {
    clientCallName: 'client.video.liveStreams.disable',
    fullyQualifiedName: 'video.liveStreams.disable',
    httpMethod: 'put',
    httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/disable',
  },
  {
    clientCallName: 'client.video.liveStreams.enable',
    fullyQualifiedName: 'video.liveStreams.enable',
    httpMethod: 'put',
    httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/enable',
  },
  {
    clientCallName: 'client.video.liveStreams.resetStreamKey',
    fullyQualifiedName: 'video.liveStreams.resetStreamKey',
    httpMethod: 'post',
    httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/reset-stream-key',
  },
  {
    clientCallName: 'client.video.liveStreams.retrievePlaybackID',
    fullyQualifiedName: 'video.liveStreams.retrievePlaybackID',
    httpMethod: 'get',
    httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}',
  },
  {
    clientCallName: 'client.video.liveStreams.retrieveSimulcastTarget',
    fullyQualifiedName: 'video.liveStreams.retrieveSimulcastTarget',
    httpMethod: 'get',
    httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}',
  },
  {
    clientCallName: 'client.video.liveStreams.updateEmbeddedSubtitles',
    fullyQualifiedName: 'video.liveStreams.updateEmbeddedSubtitles',
    httpMethod: 'put',
    httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/embedded-subtitles',
  },
  {
    clientCallName: 'client.video.liveStreams.updateGeneratedSubtitles',
    fullyQualifiedName: 'video.liveStreams.updateGeneratedSubtitles',
    httpMethod: 'put',
    httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/generated-subtitles',
  },
  {
    clientCallName: 'client.video.liveStreams.updateNewAssetSettingsStaticRenditions',
    fullyQualifiedName: 'video.liveStreams.updateNewAssetSettingsStaticRenditions',
    httpMethod: 'put',
    httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions',
  },
  {
    clientCallName: 'client.video.playbackIDs.retrieve',
    fullyQualifiedName: 'video.playbackIDs.retrieve',
    httpMethod: 'get',
    httpPath: '/video/v1/playback-ids/{PLAYBACK_ID}',
  },
  {
    clientCallName: 'client.video.playbackRestrictions.create',
    fullyQualifiedName: 'video.playbackRestrictions.create',
    httpMethod: 'post',
    httpPath: '/video/v1/playback-restrictions',
  },
  {
    clientCallName: 'client.video.playbackRestrictions.retrieve',
    fullyQualifiedName: 'video.playbackRestrictions.retrieve',
    httpMethod: 'get',
    httpPath: '/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}',
  },
  {
    clientCallName: 'client.video.playbackRestrictions.list',
    fullyQualifiedName: 'video.playbackRestrictions.list',
    httpMethod: 'get',
    httpPath: '/video/v1/playback-restrictions',
  },
  {
    clientCallName: 'client.video.playbackRestrictions.delete',
    fullyQualifiedName: 'video.playbackRestrictions.delete',
    httpMethod: 'delete',
    httpPath: '/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}',
  },
  {
    clientCallName: 'client.video.playbackRestrictions.updateReferrer',
    fullyQualifiedName: 'video.playbackRestrictions.updateReferrer',
    httpMethod: 'put',
    httpPath: '/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/referrer',
  },
  {
    clientCallName: 'client.video.playbackRestrictions.updateUserAgent',
    fullyQualifiedName: 'video.playbackRestrictions.updateUserAgent',
    httpMethod: 'put',
    httpPath: '/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/user_agent',
  },
  {
    clientCallName: 'client.video.transcriptionVocabularies.create',
    fullyQualifiedName: 'video.transcriptionVocabularies.create',
    httpMethod: 'post',
    httpPath: '/video/v1/transcription-vocabularies',
  },
  {
    clientCallName: 'client.video.transcriptionVocabularies.retrieve',
    fullyQualifiedName: 'video.transcriptionVocabularies.retrieve',
    httpMethod: 'get',
    httpPath: '/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}',
  },
  {
    clientCallName: 'client.video.transcriptionVocabularies.update',
    fullyQualifiedName: 'video.transcriptionVocabularies.update',
    httpMethod: 'put',
    httpPath: '/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}',
  },
  {
    clientCallName: 'client.video.transcriptionVocabularies.list',
    fullyQualifiedName: 'video.transcriptionVocabularies.list',
    httpMethod: 'get',
    httpPath: '/video/v1/transcription-vocabularies',
  },
  {
    clientCallName: 'client.video.transcriptionVocabularies.delete',
    fullyQualifiedName: 'video.transcriptionVocabularies.delete',
    httpMethod: 'delete',
    httpPath: '/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}',
  },
  {
    clientCallName: 'client.video.uploads.create',
    fullyQualifiedName: 'video.uploads.create',
    httpMethod: 'post',
    httpPath: '/video/v1/uploads',
  },
  {
    clientCallName: 'client.video.uploads.retrieve',
    fullyQualifiedName: 'video.uploads.retrieve',
    httpMethod: 'get',
    httpPath: '/video/v1/uploads/{UPLOAD_ID}',
  },
  {
    clientCallName: 'client.video.uploads.list',
    fullyQualifiedName: 'video.uploads.list',
    httpMethod: 'get',
    httpPath: '/video/v1/uploads',
  },
  {
    clientCallName: 'client.video.uploads.cancel',
    fullyQualifiedName: 'video.uploads.cancel',
    httpMethod: 'put',
    httpPath: '/video/v1/uploads/{UPLOAD_ID}/cancel',
  },
  {
    clientCallName: 'client.video.webInputs.create',
    fullyQualifiedName: 'video.webInputs.create',
    httpMethod: 'post',
    httpPath: '/video/v1/web-inputs',
  },
  {
    clientCallName: 'client.video.webInputs.retrieve',
    fullyQualifiedName: 'video.webInputs.retrieve',
    httpMethod: 'get',
    httpPath: '/video/v1/web-inputs/{WEB_INPUT_ID}',
  },
  {
    clientCallName: 'client.video.webInputs.list',
    fullyQualifiedName: 'video.webInputs.list',
    httpMethod: 'get',
    httpPath: '/video/v1/web-inputs',
  },
  {
    clientCallName: 'client.video.webInputs.delete',
    fullyQualifiedName: 'video.webInputs.delete',
    httpMethod: 'delete',
    httpPath: '/video/v1/web-inputs/{WEB_INPUT_ID}',
  },
  {
    clientCallName: 'client.video.webInputs.launch',
    fullyQualifiedName: 'video.webInputs.launch',
    httpMethod: 'put',
    httpPath: '/video/v1/web-inputs/{WEB_INPUT_ID}/launch',
  },
  {
    clientCallName: 'client.video.webInputs.reload',
    fullyQualifiedName: 'video.webInputs.reload',
    httpMethod: 'put',
    httpPath: '/video/v1/web-inputs/{WEB_INPUT_ID}/reload',
  },
  {
    clientCallName: 'client.video.webInputs.shutdown',
    fullyQualifiedName: 'video.webInputs.shutdown',
    httpMethod: 'put',
    httpPath: '/video/v1/web-inputs/{WEB_INPUT_ID}/shutdown',
  },
  {
    clientCallName: 'client.video.webInputs.updateURL',
    fullyQualifiedName: 'video.webInputs.updateURL',
    httpMethod: 'put',
    httpPath: '/video/v1/web-inputs/{WEB_INPUT_ID}/url',
  },
  {
    clientCallName: 'client.video.drmConfigurations.retrieve',
    fullyQualifiedName: 'video.drmConfigurations.retrieve',
    httpMethod: 'get',
    httpPath: '/video/v1/drm-configurations/{DRM_CONFIGURATION_ID}',
  },
  {
    clientCallName: 'client.video.drmConfigurations.list',
    fullyQualifiedName: 'video.drmConfigurations.list',
    httpMethod: 'get',
    httpPath: '/video/v1/drm-configurations',
  },
  {
    clientCallName: 'client.video.playback.animated',
    fullyQualifiedName: 'video.playback.animated',
    httpMethod: 'get',
    httpPath: '/{PLAYBACK_ID}/animated.{EXTENSION}',
  },
  {
    clientCallName: 'client.video.playback.hls',
    fullyQualifiedName: 'video.playback.hls',
    httpMethod: 'get',
    httpPath: '/{PLAYBACK_ID}.m3u8',
  },
  {
    clientCallName: 'client.video.playback.staticRendition',
    fullyQualifiedName: 'video.playback.staticRendition',
    httpMethod: 'get',
    httpPath: '/{PLAYBACK_ID}/{FILENAME}',
  },
  {
    clientCallName: 'client.video.playback.storyboard',
    fullyQualifiedName: 'video.playback.storyboard',
    httpMethod: 'get',
    httpPath: '/{PLAYBACK_ID}/storyboard.{EXTENSION}',
  },
  {
    clientCallName: 'client.video.playback.storyboardMeta',
    fullyQualifiedName: 'video.playback.storyboardMeta',
    httpMethod: 'get',
    httpPath: '/{PLAYBACK_ID}/storyboard.json',
  },
  {
    clientCallName: 'client.video.playback.storyboardVtt',
    fullyQualifiedName: 'video.playback.storyboardVtt',
    httpMethod: 'get',
    httpPath: '/{PLAYBACK_ID}/storyboard.vtt',
  },
  {
    clientCallName: 'client.video.playback.thumbnail',
    fullyQualifiedName: 'video.playback.thumbnail',
    httpMethod: 'get',
    httpPath: '/{PLAYBACK_ID}/thumbnail.{EXTENSION}',
  },
  {
    clientCallName: 'client.video.playback.track',
    fullyQualifiedName: 'video.playback.track',
    httpMethod: 'get',
    httpPath: '/{PLAYBACK_ID}/text/{TRACK_ID}.vtt',
  },
  {
    clientCallName: 'client.video.playback.transcript',
    fullyQualifiedName: 'video.playback.transcript',
    httpMethod: 'get',
    httpPath: '/{PLAYBACK_ID}/text/{TRACK_ID}.txt',
  },
  {
    clientCallName: 'client.data.dimensions.list',
    fullyQualifiedName: 'data.dimensions.list',
    httpMethod: 'get',
    httpPath: '/data/v1/dimensions',
  },
  {
    clientCallName: 'client.data.dimensions.listTraceElements',
    fullyQualifiedName: 'data.dimensions.listTraceElements',
    httpMethod: 'get',
    httpPath: '/data/v1/dimensions/{DIMENSION_ID}/elements',
  },
  {
    clientCallName: 'client.data.dimensions.listValues',
    fullyQualifiedName: 'data.dimensions.listValues',
    httpMethod: 'get',
    httpPath: '/data/v1/dimensions/{DIMENSION_ID}',
  },
  {
    clientCallName: 'client.data.monitoring.listDimensions',
    fullyQualifiedName: 'data.monitoring.listDimensions',
    httpMethod: 'get',
    httpPath: '/data/v1/monitoring/dimensions',
  },
  {
    clientCallName: 'client.data.monitoring.metrics.list',
    fullyQualifiedName: 'data.monitoring.metrics.list',
    httpMethod: 'get',
    httpPath: '/data/v1/monitoring/metrics',
  },
  {
    clientCallName: 'client.data.monitoring.metrics.getBreakdown',
    fullyQualifiedName: 'data.monitoring.metrics.getBreakdown',
    httpMethod: 'get',
    httpPath: '/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown',
  },
  {
    clientCallName: 'client.data.monitoring.metrics.getBreakdownTimeseries',
    fullyQualifiedName: 'data.monitoring.metrics.getBreakdownTimeseries',
    httpMethod: 'get',
    httpPath: '/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown-timeseries',
  },
  {
    clientCallName: 'client.data.monitoring.metrics.getHistogramTimeseries',
    fullyQualifiedName: 'data.monitoring.metrics.getHistogramTimeseries',
    httpMethod: 'get',
    httpPath: '/data/v1/monitoring/metrics/{MONITORING_HISTOGRAM_METRIC_ID}/histogram-timeseries',
  },
  {
    clientCallName: 'client.data.monitoring.metrics.getTimeseries',
    fullyQualifiedName: 'data.monitoring.metrics.getTimeseries',
    httpMethod: 'get',
    httpPath: '/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/timeseries',
  },
  {
    clientCallName: 'client.data.errors.list',
    fullyQualifiedName: 'data.errors.list',
    httpMethod: 'get',
    httpPath: '/data/v1/errors',
  },
  {
    clientCallName: 'client.data.exports.listVideoViews',
    fullyQualifiedName: 'data.exports.listVideoViews',
    httpMethod: 'get',
    httpPath: '/data/v1/exports/views',
  },
  {
    clientCallName: 'client.data.filters.listValues',
    fullyQualifiedName: 'data.filters.listValues',
    httpMethod: 'get',
    httpPath: '/data/v1/filters/{FILTER_ID}',
  },
  {
    clientCallName: 'client.data.incidents.retrieve',
    fullyQualifiedName: 'data.incidents.retrieve',
    httpMethod: 'get',
    httpPath: '/data/v1/incidents/{INCIDENT_ID}',
  },
  {
    clientCallName: 'client.data.incidents.list',
    fullyQualifiedName: 'data.incidents.list',
    httpMethod: 'get',
    httpPath: '/data/v1/incidents',
  },
  {
    clientCallName: 'client.data.incidents.listRelated',
    fullyQualifiedName: 'data.incidents.listRelated',
    httpMethod: 'get',
    httpPath: '/data/v1/incidents/{INCIDENT_ID}/related',
  },
  {
    clientCallName: 'client.data.metrics.list',
    fullyQualifiedName: 'data.metrics.list',
    httpMethod: 'get',
    httpPath: '/data/v1/metrics/comparison',
  },
  {
    clientCallName: 'client.data.metrics.getInsights',
    fullyQualifiedName: 'data.metrics.getInsights',
    httpMethod: 'get',
    httpPath: '/data/v1/metrics/{METRIC_ID}/insights',
  },
  {
    clientCallName: 'client.data.metrics.getOverallValues',
    fullyQualifiedName: 'data.metrics.getOverallValues',
    httpMethod: 'get',
    httpPath: '/data/v1/metrics/{METRIC_ID}/overall',
  },
  {
    clientCallName: 'client.data.metrics.getTimeseries',
    fullyQualifiedName: 'data.metrics.getTimeseries',
    httpMethod: 'get',
    httpPath: '/data/v1/metrics/{METRIC_ID}/timeseries',
  },
  {
    clientCallName: 'client.data.metrics.listBreakdownValues',
    fullyQualifiedName: 'data.metrics.listBreakdownValues',
    httpMethod: 'get',
    httpPath: '/data/v1/metrics/{METRIC_ID}/breakdown',
  },
  {
    clientCallName: 'client.data.realTime.listDimensions',
    fullyQualifiedName: 'data.realTime.listDimensions',
    httpMethod: 'get',
    httpPath: '/data/v1/realtime/dimensions',
  },
  {
    clientCallName: 'client.data.realTime.listMetrics',
    fullyQualifiedName: 'data.realTime.listMetrics',
    httpMethod: 'get',
    httpPath: '/data/v1/realtime/metrics',
  },
  {
    clientCallName: 'client.data.realTime.retrieveBreakdown',
    fullyQualifiedName: 'data.realTime.retrieveBreakdown',
    httpMethod: 'get',
    httpPath: '/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/breakdown',
  },
  {
    clientCallName: 'client.data.realTime.retrieveHistogramTimeseries',
    fullyQualifiedName: 'data.realTime.retrieveHistogramTimeseries',
    httpMethod: 'get',
    httpPath: '/data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries',
  },
  {
    clientCallName: 'client.data.realTime.retrieveTimeseries',
    fullyQualifiedName: 'data.realTime.retrieveTimeseries',
    httpMethod: 'get',
    httpPath: '/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/timeseries',
  },
  {
    clientCallName: 'client.data.videoViews.retrieve',
    fullyQualifiedName: 'data.videoViews.retrieve',
    httpMethod: 'get',
    httpPath: '/data/v1/video-views/{VIDEO_VIEW_ID}',
  },
  {
    clientCallName: 'client.data.videoViews.list',
    fullyQualifiedName: 'data.videoViews.list',
    httpMethod: 'get',
    httpPath: '/data/v1/video-views',
  },
  {
    clientCallName: 'client.data.annotations.create',
    fullyQualifiedName: 'data.annotations.create',
    httpMethod: 'post',
    httpPath: '/data/v1/annotations',
  },
  {
    clientCallName: 'client.data.annotations.retrieve',
    fullyQualifiedName: 'data.annotations.retrieve',
    httpMethod: 'get',
    httpPath: '/data/v1/annotations/{ANNOTATION_ID}',
  },
  {
    clientCallName: 'client.data.annotations.update',
    fullyQualifiedName: 'data.annotations.update',
    httpMethod: 'patch',
    httpPath: '/data/v1/annotations/{ANNOTATION_ID}',
  },
  {
    clientCallName: 'client.data.annotations.list',
    fullyQualifiedName: 'data.annotations.list',
    httpMethod: 'get',
    httpPath: '/data/v1/annotations',
  },
  {
    clientCallName: 'client.data.annotations.delete',
    fullyQualifiedName: 'data.annotations.delete',
    httpMethod: 'delete',
    httpPath: '/data/v1/annotations/{ANNOTATION_ID}',
  },
  {
    clientCallName: 'client.system.signingKeys.create',
    fullyQualifiedName: 'system.signingKeys.create',
    httpMethod: 'post',
    httpPath: '/system/v1/signing-keys',
  },
  {
    clientCallName: 'client.system.signingKeys.retrieve',
    fullyQualifiedName: 'system.signingKeys.retrieve',
    httpMethod: 'get',
    httpPath: '/system/v1/signing-keys/{SIGNING_KEY_ID}',
  },
  {
    clientCallName: 'client.system.signingKeys.list',
    fullyQualifiedName: 'system.signingKeys.list',
    httpMethod: 'get',
    httpPath: '/system/v1/signing-keys',
  },
  {
    clientCallName: 'client.system.signingKeys.delete',
    fullyQualifiedName: 'system.signingKeys.delete',
    httpMethod: 'delete',
    httpPath: '/system/v1/signing-keys/{SIGNING_KEY_ID}',
  },
  {
    clientCallName: 'client.system.utilities.whoami',
    fullyQualifiedName: 'system.utilities.whoami',
    httpMethod: 'get',
    httpPath: '/system/v1/whoami',
  },
  { clientCallName: 'client.webhooks.unwrap', fullyQualifiedName: 'webhooks.unwrap' },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
