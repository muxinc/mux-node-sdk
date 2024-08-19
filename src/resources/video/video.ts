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
  export import Asset = AssetsAPI.Asset;
  export import AssetOptions = AssetsAPI.AssetOptions;
  export import AssetResponse = AssetsAPI.AssetResponse;
  export import InputInfo = AssetsAPI.InputInfo;
  export import Track = AssetsAPI.Track;
  export import AssetGenerateSubtitlesResponse = AssetsAPI.AssetGenerateSubtitlesResponse;
  export import AssetRetrieveInputInfoResponse = AssetsAPI.AssetRetrieveInputInfoResponse;
  export import AssetsBasePage = AssetsAPI.AssetsBasePage;
  export import AssetCreateParams = AssetsAPI.AssetCreateParams;
  export import AssetUpdateParams = AssetsAPI.AssetUpdateParams;
  export import AssetListParams = AssetsAPI.AssetListParams;
  export import AssetCreatePlaybackIDParams = AssetsAPI.AssetCreatePlaybackIDParams;
  export import AssetCreateTrackParams = AssetsAPI.AssetCreateTrackParams;
  export import AssetGenerateSubtitlesParams = AssetsAPI.AssetGenerateSubtitlesParams;
  export import AssetUpdateMasterAccessParams = AssetsAPI.AssetUpdateMasterAccessParams;
  export import AssetUpdateMP4SupportParams = AssetsAPI.AssetUpdateMP4SupportParams;
  export import DeliveryUsage = DeliveryUsageAPI.DeliveryUsage;
  export import DeliveryReport = DeliveryUsageAPI.DeliveryReport;
  export import DeliveryReportsPageWithTotal = DeliveryUsageAPI.DeliveryReportsPageWithTotal;
  export import DeliveryUsageListParams = DeliveryUsageAPI.DeliveryUsageListParams;
  export import LiveStreams = LiveStreamsAPI.LiveStreams;
  export import LiveStream = LiveStreamsAPI.LiveStream;
  export import SimulcastTarget = LiveStreamsAPI.SimulcastTarget;
  export import LiveStreamsBasePage = LiveStreamsAPI.LiveStreamsBasePage;
  export import LiveStreamCreateParams = LiveStreamsAPI.LiveStreamCreateParams;
  export import LiveStreamUpdateParams = LiveStreamsAPI.LiveStreamUpdateParams;
  export import LiveStreamListParams = LiveStreamsAPI.LiveStreamListParams;
  export import LiveStreamCreatePlaybackIDParams = LiveStreamsAPI.LiveStreamCreatePlaybackIDParams;
  export import LiveStreamCreateSimulcastTargetParams = LiveStreamsAPI.LiveStreamCreateSimulcastTargetParams;
  export import LiveStreamUpdateEmbeddedSubtitlesParams = LiveStreamsAPI.LiveStreamUpdateEmbeddedSubtitlesParams;
  export import LiveStreamUpdateGeneratedSubtitlesParams = LiveStreamsAPI.LiveStreamUpdateGeneratedSubtitlesParams;
  export import PlaybackIDs = PlaybackIDsAPI.PlaybackIDs;
  export import PlaybackIDRetrieveResponse = PlaybackIDsAPI.PlaybackIDRetrieveResponse;
  export import PlaybackRestrictions = PlaybackRestrictionsAPI.PlaybackRestrictions;
  export import PlaybackRestriction = PlaybackRestrictionsAPI.PlaybackRestriction;
  export import PlaybackRestrictionResponse = PlaybackRestrictionsAPI.PlaybackRestrictionResponse;
  export import PlaybackRestrictionsBasePage = PlaybackRestrictionsAPI.PlaybackRestrictionsBasePage;
  export import PlaybackRestrictionCreateParams = PlaybackRestrictionsAPI.PlaybackRestrictionCreateParams;
  export import PlaybackRestrictionListParams = PlaybackRestrictionsAPI.PlaybackRestrictionListParams;
  export import PlaybackRestrictionUpdateReferrerParams = PlaybackRestrictionsAPI.PlaybackRestrictionUpdateReferrerParams;
  export import PlaybackRestrictionUpdateUserAgentParams = PlaybackRestrictionsAPI.PlaybackRestrictionUpdateUserAgentParams;
  export import TranscriptionVocabularies = TranscriptionVocabulariesAPI.TranscriptionVocabularies;
  export import TranscriptionVocabulary = TranscriptionVocabulariesAPI.TranscriptionVocabulary;
  export import TranscriptionVocabularyResponse = TranscriptionVocabulariesAPI.TranscriptionVocabularyResponse;
  export import TranscriptionVocabulariesBasePage = TranscriptionVocabulariesAPI.TranscriptionVocabulariesBasePage;
  export import TranscriptionVocabularyCreateParams = TranscriptionVocabulariesAPI.TranscriptionVocabularyCreateParams;
  export import TranscriptionVocabularyUpdateParams = TranscriptionVocabulariesAPI.TranscriptionVocabularyUpdateParams;
  export import TranscriptionVocabularyListParams = TranscriptionVocabulariesAPI.TranscriptionVocabularyListParams;
  export import Uploads = UploadsAPI.Uploads;
  export import Upload = UploadsAPI.Upload;
  export import UploadResponse = UploadsAPI.UploadResponse;
  export import UploadsBasePage = UploadsAPI.UploadsBasePage;
  export import UploadCreateParams = UploadsAPI.UploadCreateParams;
  export import UploadListParams = UploadsAPI.UploadListParams;
  export import WebInputs = WebInputsAPI.WebInputs;
  export import WebInputCreateResponse = WebInputsAPI.WebInputCreateResponse;
  export import WebInputRetrieveResponse = WebInputsAPI.WebInputRetrieveResponse;
  export import WebInputListResponse = WebInputsAPI.WebInputListResponse;
  export import WebInputLaunchResponse = WebInputsAPI.WebInputLaunchResponse;
  export import WebInputReloadResponse = WebInputsAPI.WebInputReloadResponse;
  export import WebInputShutdownResponse = WebInputsAPI.WebInputShutdownResponse;
  export import WebInputUpdateURLResponse = WebInputsAPI.WebInputUpdateURLResponse;
  export import WebInputListResponsesBasePage = WebInputsAPI.WebInputListResponsesBasePage;
  export import WebInputCreateParams = WebInputsAPI.WebInputCreateParams;
  export import WebInputListParams = WebInputsAPI.WebInputListParams;
  export import WebInputUpdateURLParams = WebInputsAPI.WebInputUpdateURLParams;
  export import DRMConfigurations = DRMConfigurationsAPI.DRMConfigurations;
  export import DRMConfiguration = DRMConfigurationsAPI.DRMConfiguration;
  export import DRMConfigurationsBasePage = DRMConfigurationsAPI.DRMConfigurationsBasePage;
  export import DRMConfigurationListParams = DRMConfigurationsAPI.DRMConfigurationListParams;
}
