// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AssetsAPI from './assets';
import {
  Asset,
  AssetCreateParams,
  AssetCreatePlaybackIDParams,
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
  AssetsBasePage,
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
  LiveStreamCreatePlaybackIDParams,
  LiveStreamCreateSimulcastTargetParams,
  LiveStreamListParams,
  LiveStreamUpdateEmbeddedSubtitlesParams,
  LiveStreamUpdateGeneratedSubtitlesParams,
  LiveStreamUpdateParams,
  LiveStreams,
  LiveStreamsBasePage,
  SimulcastTarget,
} from './live-streams';
import * as PlaybackIDsAPI from './playback-ids';
import { PlaybackIDRetrieveResponse, PlaybackIDs } from './playback-ids';
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
import * as WebInputsAPI from './web-inputs';
import {
  WebInputCreateParams,
  WebInputCreateResponse,
  WebInputLaunchResponse,
  WebInputListParams,
  WebInputListResponse,
  WebInputListResponsesBasePage,
  WebInputReloadResponse,
  WebInputRetrieveResponse,
  WebInputShutdownResponse,
  WebInputUpdateURLParams,
  WebInputUpdateURLResponse,
  WebInputs,
} from './web-inputs';

export class Video extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  deliveryUsage: DeliveryUsageAPI.DeliveryUsage = new DeliveryUsageAPI.DeliveryUsage(this._client);
  liveStreams: LiveStreamsAPI.LiveStreams = new LiveStreamsAPI.LiveStreams(this._client);
  playbackIds: PlaybackIDsAPI.PlaybackIDs = new PlaybackIDsAPI.PlaybackIDs(this._client);
  playbackRestrictions: PlaybackRestrictionsAPI.PlaybackRestrictions =
    new PlaybackRestrictionsAPI.PlaybackRestrictions(this._client);
  transcriptionVocabularies: TranscriptionVocabulariesAPI.TranscriptionVocabularies =
    new TranscriptionVocabulariesAPI.TranscriptionVocabularies(this._client);
  uploads: UploadsAPI.Uploads = new UploadsAPI.Uploads(this._client);
  webInputs: WebInputsAPI.WebInputs = new WebInputsAPI.WebInputs(this._client);
  drmConfigurations: DRMConfigurationsAPI.DRMConfigurations = new DRMConfigurationsAPI.DRMConfigurations(
    this._client,
  );
}

Video.Assets = Assets;
Video.AssetsBasePage = AssetsBasePage;
Video.DeliveryUsage = DeliveryUsage;
Video.DeliveryReportsPageWithTotal = DeliveryReportsPageWithTotal;
Video.LiveStreams = LiveStreams;
Video.LiveStreamsBasePage = LiveStreamsBasePage;
Video.PlaybackIDs = PlaybackIDs;
Video.PlaybackRestrictions = PlaybackRestrictions;
Video.PlaybackRestrictionsBasePage = PlaybackRestrictionsBasePage;
Video.TranscriptionVocabularies = TranscriptionVocabularies;
Video.TranscriptionVocabulariesBasePage = TranscriptionVocabulariesBasePage;
Video.Uploads = Uploads;
Video.UploadsBasePage = UploadsBasePage;
Video.WebInputs = WebInputs;
Video.WebInputListResponsesBasePage = WebInputListResponsesBasePage;
Video.DRMConfigurations = DRMConfigurations;
Video.DRMConfigurationsBasePage = DRMConfigurationsBasePage;

export declare namespace Video {
  export {
    Assets as Assets,
    type Asset as Asset,
    type AssetOptions as AssetOptions,
    type AssetResponse as AssetResponse,
    type InputInfo as InputInfo,
    type Track as Track,
    type AssetGenerateSubtitlesResponse as AssetGenerateSubtitlesResponse,
    type AssetRetrieveInputInfoResponse as AssetRetrieveInputInfoResponse,
    AssetsBasePage as AssetsBasePage,
    type AssetCreateParams as AssetCreateParams,
    type AssetUpdateParams as AssetUpdateParams,
    type AssetListParams as AssetListParams,
    type AssetCreatePlaybackIDParams as AssetCreatePlaybackIDParams,
    type AssetCreateTrackParams as AssetCreateTrackParams,
    type AssetGenerateSubtitlesParams as AssetGenerateSubtitlesParams,
    type AssetUpdateMasterAccessParams as AssetUpdateMasterAccessParams,
    type AssetUpdateMP4SupportParams as AssetUpdateMP4SupportParams,
  };

  export {
    DeliveryUsage as DeliveryUsage,
    type DeliveryReport as DeliveryReport,
    DeliveryReportsPageWithTotal as DeliveryReportsPageWithTotal,
    type DeliveryUsageListParams as DeliveryUsageListParams,
  };

  export {
    LiveStreams as LiveStreams,
    type LiveStream as LiveStream,
    type SimulcastTarget as SimulcastTarget,
    LiveStreamsBasePage as LiveStreamsBasePage,
    type LiveStreamCreateParams as LiveStreamCreateParams,
    type LiveStreamUpdateParams as LiveStreamUpdateParams,
    type LiveStreamListParams as LiveStreamListParams,
    type LiveStreamCreatePlaybackIDParams as LiveStreamCreatePlaybackIDParams,
    type LiveStreamCreateSimulcastTargetParams as LiveStreamCreateSimulcastTargetParams,
    type LiveStreamUpdateEmbeddedSubtitlesParams as LiveStreamUpdateEmbeddedSubtitlesParams,
    type LiveStreamUpdateGeneratedSubtitlesParams as LiveStreamUpdateGeneratedSubtitlesParams,
  };

  export { PlaybackIDs as PlaybackIDs, type PlaybackIDRetrieveResponse as PlaybackIDRetrieveResponse };

  export {
    PlaybackRestrictions as PlaybackRestrictions,
    type PlaybackRestriction as PlaybackRestriction,
    type PlaybackRestrictionResponse as PlaybackRestrictionResponse,
    PlaybackRestrictionsBasePage as PlaybackRestrictionsBasePage,
    type PlaybackRestrictionCreateParams as PlaybackRestrictionCreateParams,
    type PlaybackRestrictionListParams as PlaybackRestrictionListParams,
    type PlaybackRestrictionUpdateReferrerParams as PlaybackRestrictionUpdateReferrerParams,
    type PlaybackRestrictionUpdateUserAgentParams as PlaybackRestrictionUpdateUserAgentParams,
  };

  export {
    TranscriptionVocabularies as TranscriptionVocabularies,
    type TranscriptionVocabulary as TranscriptionVocabulary,
    type TranscriptionVocabularyResponse as TranscriptionVocabularyResponse,
    TranscriptionVocabulariesBasePage as TranscriptionVocabulariesBasePage,
    type TranscriptionVocabularyCreateParams as TranscriptionVocabularyCreateParams,
    type TranscriptionVocabularyUpdateParams as TranscriptionVocabularyUpdateParams,
    type TranscriptionVocabularyListParams as TranscriptionVocabularyListParams,
  };

  export {
    Uploads as Uploads,
    type Upload as Upload,
    type UploadResponse as UploadResponse,
    UploadsBasePage as UploadsBasePage,
    type UploadCreateParams as UploadCreateParams,
    type UploadListParams as UploadListParams,
  };

  export {
    WebInputs as WebInputs,
    type WebInputCreateResponse as WebInputCreateResponse,
    type WebInputRetrieveResponse as WebInputRetrieveResponse,
    type WebInputListResponse as WebInputListResponse,
    type WebInputLaunchResponse as WebInputLaunchResponse,
    type WebInputReloadResponse as WebInputReloadResponse,
    type WebInputShutdownResponse as WebInputShutdownResponse,
    type WebInputUpdateURLResponse as WebInputUpdateURLResponse,
    WebInputListResponsesBasePage as WebInputListResponsesBasePage,
    type WebInputCreateParams as WebInputCreateParams,
    type WebInputListParams as WebInputListParams,
    type WebInputUpdateURLParams as WebInputUpdateURLParams,
  };

  export {
    DRMConfigurations as DRMConfigurations,
    type DRMConfiguration as DRMConfiguration,
    DRMConfigurationsBasePage as DRMConfigurationsBasePage,
    type DRMConfigurationListParams as DRMConfigurationListParams,
  };
}
