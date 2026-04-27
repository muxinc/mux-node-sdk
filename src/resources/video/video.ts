// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssetsAPI from './assets';
import {
  Asset,
  AssetCreateParams,
  AssetCreatePlaybackIdParams,
  AssetCreateStaticRenditionParams,
  AssetCreateStaticRenditionResponse,
  AssetCreateTrackParams,
  AssetGenerateSubtitlesParams,
  AssetGenerateSubtitlesResponse,
  AssetListParams,
  AssetOptions,
  AssetResponse,
  AssetRetrieveInputInfoResponse,
  AssetUpdateMP4SupportParams,
  AssetUpdateMasterAccessParams,
  AssetUpdateParams,
  Assets,
  AssetsCursorPage,
  InputInfo,
  Track,
} from './assets';
import * as DeliveryUsageAPI from './delivery-usage';
import {
  DeliveryReport,
  DeliveryReportsPageWithTotal,
  DeliveryUsage,
  DeliveryUsageListParams,
} from './delivery-usage';
import * as DRMConfigurationsAPI from './drm-configurations';
import {
  DRMConfiguration,
  DRMConfigurationListParams,
  DRMConfigurations,
  DRMConfigurationsBasePage,
} from './drm-configurations';
import * as LiveStreamsAPI from './live-streams';
import {
  LiveStream,
  LiveStreamCreateParams,
  LiveStreamCreatePlaybackIdParams,
  LiveStreamCreateSimulcastTargetParams,
  LiveStreamListParams,
  LiveStreamUpdateEmbeddedSubtitlesParams,
  LiveStreamUpdateGeneratedSubtitlesParams,
  LiveStreamUpdateNewAssetSettingsStaticRenditionsParams,
  LiveStreamUpdateParams,
  LiveStreams,
  LiveStreamsBasePage,
  SimulcastTarget,
} from './live-streams';
import * as PlaybackAPI from './playback';
import {
  Playback,
  PlaybackAnimatedParams,
  PlaybackHlsParams,
  PlaybackStaticRenditionParams,
  PlaybackStoryboardMetaParams,
  PlaybackStoryboardMetaResponse,
  PlaybackStoryboardParams,
  PlaybackStoryboardVttParams,
  PlaybackStoryboardVttResponse,
  PlaybackThumbnailParams,
  PlaybackTrackParams,
  PlaybackTrackResponse,
  PlaybackTranscriptParams,
  PlaybackTranscriptResponse,
} from './playback';
import * as PlaybackIdsAPI from './playback-ids';
import { PlaybackIds, PlaybackIdsRetrieveResponse } from './playback-ids';
import * as PlaybackRestrictionsAPI from './playback-restrictions';
import {
  PlaybackRestriction,
  PlaybackRestrictionCreateParams,
  PlaybackRestrictionListParams,
  PlaybackRestrictionResponse,
  PlaybackRestrictionUpdateReferrerParams,
  PlaybackRestrictionUpdateUserAgentParams,
  PlaybackRestrictions,
  PlaybackRestrictionsBasePage,
} from './playback-restrictions';
import * as TranscriptionVocabulariesAPI from './transcription-vocabularies';
import {
  TranscriptionVocabularies,
  TranscriptionVocabulariesBasePage,
  TranscriptionVocabulary,
  TranscriptionVocabularyCreateParams,
  TranscriptionVocabularyListParams,
  TranscriptionVocabularyResponse,
  TranscriptionVocabularyUpdateParams,
} from './transcription-vocabularies';
import * as UploadsAPI from './uploads';
import {
  Upload,
  UploadCreateParams,
  UploadListParams,
  UploadResponse,
  Uploads,
  UploadsBasePage,
} from './uploads';

export class Video extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  deliveryUsage: DeliveryUsageAPI.DeliveryUsage = new DeliveryUsageAPI.DeliveryUsage(this._client);
  liveStreams: LiveStreamsAPI.LiveStreams = new LiveStreamsAPI.LiveStreams(this._client);
  playbackIds: PlaybackIdsAPI.PlaybackIds = new PlaybackIdsAPI.PlaybackIds(this._client);
  playbackRestrictions: PlaybackRestrictionsAPI.PlaybackRestrictions =
    new PlaybackRestrictionsAPI.PlaybackRestrictions(this._client);
  transcriptionVocabularies: TranscriptionVocabulariesAPI.TranscriptionVocabularies =
    new TranscriptionVocabulariesAPI.TranscriptionVocabularies(this._client);
  uploads: UploadsAPI.Uploads = new UploadsAPI.Uploads(this._client);
  drmConfigurations: DRMConfigurationsAPI.DRMConfigurations = new DRMConfigurationsAPI.DRMConfigurations(
    this._client,
  );
  playback: PlaybackAPI.Playback = new PlaybackAPI.Playback(this._client);
}

Video.Assets = Assets;
Video.DeliveryUsage = DeliveryUsage;
Video.LiveStreams = LiveStreams;
Video.PlaybackIds = PlaybackIds;
Video.PlaybackRestrictions = PlaybackRestrictions;
Video.TranscriptionVocabularies = TranscriptionVocabularies;
Video.Uploads = Uploads;
Video.DRMConfigurations = DRMConfigurations;
Video.Playback = Playback;

export declare namespace Video {
  export {
    Assets as Assets,
    type Asset as Asset,
    type AssetOptions as AssetOptions,
    type AssetResponse as AssetResponse,
    type InputInfo as InputInfo,
    type Track as Track,
    type AssetCreateStaticRenditionResponse as AssetCreateStaticRenditionResponse,
    type AssetGenerateSubtitlesResponse as AssetGenerateSubtitlesResponse,
    type AssetRetrieveInputInfoResponse as AssetRetrieveInputInfoResponse,
    type AssetsCursorPage as AssetsCursorPage,
    type AssetCreateParams as AssetCreateParams,
    type AssetUpdateParams as AssetUpdateParams,
    type AssetListParams as AssetListParams,
    type AssetCreatePlaybackIdParams as AssetCreatePlaybackIdParams,
    type AssetCreateStaticRenditionParams as AssetCreateStaticRenditionParams,
    type AssetCreateTrackParams as AssetCreateTrackParams,
    type AssetGenerateSubtitlesParams as AssetGenerateSubtitlesParams,
    type AssetUpdateMasterAccessParams as AssetUpdateMasterAccessParams,
    type AssetUpdateMP4SupportParams as AssetUpdateMP4SupportParams,
  };

  export {
    DeliveryUsage as DeliveryUsage,
    type DeliveryReport as DeliveryReport,
    type DeliveryReportsPageWithTotal as DeliveryReportsPageWithTotal,
    type DeliveryUsageListParams as DeliveryUsageListParams,
  };

  export {
    LiveStreams as LiveStreams,
    type LiveStream as LiveStream,
    type SimulcastTarget as SimulcastTarget,
    type LiveStreamsBasePage as LiveStreamsBasePage,
    type LiveStreamCreateParams as LiveStreamCreateParams,
    type LiveStreamUpdateParams as LiveStreamUpdateParams,
    type LiveStreamListParams as LiveStreamListParams,
    type LiveStreamCreatePlaybackIdParams as LiveStreamCreatePlaybackIdParams,
    type LiveStreamCreateSimulcastTargetParams as LiveStreamCreateSimulcastTargetParams,
    type LiveStreamUpdateEmbeddedSubtitlesParams as LiveStreamUpdateEmbeddedSubtitlesParams,
    type LiveStreamUpdateGeneratedSubtitlesParams as LiveStreamUpdateGeneratedSubtitlesParams,
    type LiveStreamUpdateNewAssetSettingsStaticRenditionsParams as LiveStreamUpdateNewAssetSettingsStaticRenditionsParams,
  };

  export { PlaybackIds as PlaybackIds, type PlaybackIdsRetrieveResponse as PlaybackIdsRetrieveResponse };

  export {
    PlaybackRestrictions as PlaybackRestrictions,
    type PlaybackRestriction as PlaybackRestriction,
    type PlaybackRestrictionResponse as PlaybackRestrictionResponse,
    type PlaybackRestrictionsBasePage as PlaybackRestrictionsBasePage,
    type PlaybackRestrictionCreateParams as PlaybackRestrictionCreateParams,
    type PlaybackRestrictionListParams as PlaybackRestrictionListParams,
    type PlaybackRestrictionUpdateReferrerParams as PlaybackRestrictionUpdateReferrerParams,
    type PlaybackRestrictionUpdateUserAgentParams as PlaybackRestrictionUpdateUserAgentParams,
  };

  export {
    TranscriptionVocabularies as TranscriptionVocabularies,
    type TranscriptionVocabulary as TranscriptionVocabulary,
    type TranscriptionVocabularyResponse as TranscriptionVocabularyResponse,
    type TranscriptionVocabulariesBasePage as TranscriptionVocabulariesBasePage,
    type TranscriptionVocabularyCreateParams as TranscriptionVocabularyCreateParams,
    type TranscriptionVocabularyUpdateParams as TranscriptionVocabularyUpdateParams,
    type TranscriptionVocabularyListParams as TranscriptionVocabularyListParams,
  };

  export {
    Uploads as Uploads,
    type Upload as Upload,
    type UploadResponse as UploadResponse,
    type UploadsBasePage as UploadsBasePage,
    type UploadCreateParams as UploadCreateParams,
    type UploadListParams as UploadListParams,
  };

  export {
    DRMConfigurations as DRMConfigurations,
    type DRMConfiguration as DRMConfiguration,
    type DRMConfigurationsBasePage as DRMConfigurationsBasePage,
    type DRMConfigurationListParams as DRMConfigurationListParams,
  };

  export {
    Playback as Playback,
    type PlaybackStoryboardMetaResponse as PlaybackStoryboardMetaResponse,
    type PlaybackStoryboardVttResponse as PlaybackStoryboardVttResponse,
    type PlaybackTrackResponse as PlaybackTrackResponse,
    type PlaybackTranscriptResponse as PlaybackTranscriptResponse,
    type PlaybackAnimatedParams as PlaybackAnimatedParams,
    type PlaybackHlsParams as PlaybackHlsParams,
    type PlaybackStaticRenditionParams as PlaybackStaticRenditionParams,
    type PlaybackStoryboardParams as PlaybackStoryboardParams,
    type PlaybackStoryboardMetaParams as PlaybackStoryboardMetaParams,
    type PlaybackStoryboardVttParams as PlaybackStoryboardVttParams,
    type PlaybackThumbnailParams as PlaybackThumbnailParams,
    type PlaybackTrackParams as PlaybackTrackParams,
    type PlaybackTranscriptParams as PlaybackTranscriptParams,
  };
}
