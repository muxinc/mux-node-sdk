// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AssetsAPI from './assets';
import * as DeliveryUsageAPI from './delivery-usage';
import * as DRMConfigurationsAPI from './drm-configurations';
import * as LiveStreamsAPI from './live-streams';
import * as PlaybackIDsAPI from './playback-ids';
import * as PlaybackRestrictionsAPI from './playback-restrictions';
import * as TranscriptionVocabulariesAPI from './transcription-vocabularies';
import * as UploadsAPI from './uploads';
import * as WebInputsAPI from './web-inputs';

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

export namespace Video {
  export import Assets = AssetsAPI.Assets;
  export type Asset = AssetsAPI.Asset;
  export type AssetOptions = AssetsAPI.AssetOptions;
  export type AssetResponse = AssetsAPI.AssetResponse;
  export type InputInfo = AssetsAPI.InputInfo;
  export type Track = AssetsAPI.Track;
  export type AssetGenerateSubtitlesResponse = AssetsAPI.AssetGenerateSubtitlesResponse;
  export type AssetRetrieveInputInfoResponse = AssetsAPI.AssetRetrieveInputInfoResponse;
  export import AssetsBasePage = AssetsAPI.AssetsBasePage;
  export type AssetCreateParams = AssetsAPI.AssetCreateParams;
  export type AssetUpdateParams = AssetsAPI.AssetUpdateParams;
  export type AssetListParams = AssetsAPI.AssetListParams;
  export type AssetCreatePlaybackIDParams = AssetsAPI.AssetCreatePlaybackIDParams;
  export type AssetCreateTrackParams = AssetsAPI.AssetCreateTrackParams;
  export type AssetGenerateSubtitlesParams = AssetsAPI.AssetGenerateSubtitlesParams;
  export type AssetUpdateMasterAccessParams = AssetsAPI.AssetUpdateMasterAccessParams;
  export type AssetUpdateMP4SupportParams = AssetsAPI.AssetUpdateMP4SupportParams;
  export import DeliveryUsage = DeliveryUsageAPI.DeliveryUsage;
  export type DeliveryReport = DeliveryUsageAPI.DeliveryReport;
  export import DeliveryReportsPageWithTotal = DeliveryUsageAPI.DeliveryReportsPageWithTotal;
  export type DeliveryUsageListParams = DeliveryUsageAPI.DeliveryUsageListParams;
  export import LiveStreams = LiveStreamsAPI.LiveStreams;
  export type LiveStream = LiveStreamsAPI.LiveStream;
  export type SimulcastTarget = LiveStreamsAPI.SimulcastTarget;
  export import LiveStreamsBasePage = LiveStreamsAPI.LiveStreamsBasePage;
  export type LiveStreamCreateParams = LiveStreamsAPI.LiveStreamCreateParams;
  export type LiveStreamUpdateParams = LiveStreamsAPI.LiveStreamUpdateParams;
  export type LiveStreamListParams = LiveStreamsAPI.LiveStreamListParams;
  export type LiveStreamCreatePlaybackIDParams = LiveStreamsAPI.LiveStreamCreatePlaybackIDParams;
  export type LiveStreamCreateSimulcastTargetParams = LiveStreamsAPI.LiveStreamCreateSimulcastTargetParams;
  export type LiveStreamUpdateEmbeddedSubtitlesParams =
    LiveStreamsAPI.LiveStreamUpdateEmbeddedSubtitlesParams;
  export type LiveStreamUpdateGeneratedSubtitlesParams =
    LiveStreamsAPI.LiveStreamUpdateGeneratedSubtitlesParams;
  export import PlaybackIDs = PlaybackIDsAPI.PlaybackIDs;
  export type PlaybackIDRetrieveResponse = PlaybackIDsAPI.PlaybackIDRetrieveResponse;
  export import PlaybackRestrictions = PlaybackRestrictionsAPI.PlaybackRestrictions;
  export type PlaybackRestriction = PlaybackRestrictionsAPI.PlaybackRestriction;
  export type PlaybackRestrictionResponse = PlaybackRestrictionsAPI.PlaybackRestrictionResponse;
  export import PlaybackRestrictionsBasePage = PlaybackRestrictionsAPI.PlaybackRestrictionsBasePage;
  export type PlaybackRestrictionCreateParams = PlaybackRestrictionsAPI.PlaybackRestrictionCreateParams;
  export type PlaybackRestrictionListParams = PlaybackRestrictionsAPI.PlaybackRestrictionListParams;
  export type PlaybackRestrictionUpdateReferrerParams =
    PlaybackRestrictionsAPI.PlaybackRestrictionUpdateReferrerParams;
  export type PlaybackRestrictionUpdateUserAgentParams =
    PlaybackRestrictionsAPI.PlaybackRestrictionUpdateUserAgentParams;
  export import TranscriptionVocabularies = TranscriptionVocabulariesAPI.TranscriptionVocabularies;
  export type TranscriptionVocabulary = TranscriptionVocabulariesAPI.TranscriptionVocabulary;
  export type TranscriptionVocabularyResponse = TranscriptionVocabulariesAPI.TranscriptionVocabularyResponse;
  export import TranscriptionVocabulariesBasePage = TranscriptionVocabulariesAPI.TranscriptionVocabulariesBasePage;
  export type TranscriptionVocabularyCreateParams =
    TranscriptionVocabulariesAPI.TranscriptionVocabularyCreateParams;
  export type TranscriptionVocabularyUpdateParams =
    TranscriptionVocabulariesAPI.TranscriptionVocabularyUpdateParams;
  export type TranscriptionVocabularyListParams =
    TranscriptionVocabulariesAPI.TranscriptionVocabularyListParams;
  export import Uploads = UploadsAPI.Uploads;
  export type Upload = UploadsAPI.Upload;
  export type UploadResponse = UploadsAPI.UploadResponse;
  export import UploadsBasePage = UploadsAPI.UploadsBasePage;
  export type UploadCreateParams = UploadsAPI.UploadCreateParams;
  export type UploadListParams = UploadsAPI.UploadListParams;
  export import WebInputs = WebInputsAPI.WebInputs;
  export type WebInputCreateResponse = WebInputsAPI.WebInputCreateResponse;
  export type WebInputRetrieveResponse = WebInputsAPI.WebInputRetrieveResponse;
  export type WebInputListResponse = WebInputsAPI.WebInputListResponse;
  export type WebInputLaunchResponse = WebInputsAPI.WebInputLaunchResponse;
  export type WebInputReloadResponse = WebInputsAPI.WebInputReloadResponse;
  export type WebInputShutdownResponse = WebInputsAPI.WebInputShutdownResponse;
  export type WebInputUpdateURLResponse = WebInputsAPI.WebInputUpdateURLResponse;
  export import WebInputListResponsesBasePage = WebInputsAPI.WebInputListResponsesBasePage;
  export type WebInputCreateParams = WebInputsAPI.WebInputCreateParams;
  export type WebInputListParams = WebInputsAPI.WebInputListParams;
  export type WebInputUpdateURLParams = WebInputsAPI.WebInputUpdateURLParams;
  export import DRMConfigurations = DRMConfigurationsAPI.DRMConfigurations;
  export type DRMConfiguration = DRMConfigurationsAPI.DRMConfiguration;
  export import DRMConfigurationsBasePage = DRMConfigurationsAPI.DRMConfigurationsBasePage;
  export type DRMConfigurationListParams = DRMConfigurationsAPI.DRMConfigurationListParams;
}
