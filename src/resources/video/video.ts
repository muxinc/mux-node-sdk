// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '@mux/mux-node/resource';
import * as AssetsAPI from '@mux/mux-node/resources/video/assets';
import * as DeliveryUsageAPI from '@mux/mux-node/resources/video/delivery-usage';
import * as LiveStreamsAPI from '@mux/mux-node/resources/video/live-streams';
import * as PlaybackIDsAPI from '@mux/mux-node/resources/video/playback-ids';
import * as PlaybackRestrictionsAPI from '@mux/mux-node/resources/video/playback-restrictions';
import * as SpacesAPI from '@mux/mux-node/resources/video/spaces';
import * as TranscriptionVocabulariesAPI from '@mux/mux-node/resources/video/transcription-vocabularies';
import * as UploadsAPI from '@mux/mux-node/resources/video/uploads';

export class Video extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  deliveryUsage: DeliveryUsageAPI.DeliveryUsage = new DeliveryUsageAPI.DeliveryUsage(this._client);
  liveStreams: LiveStreamsAPI.LiveStreams = new LiveStreamsAPI.LiveStreams(this._client);
  playbackIds: PlaybackIDsAPI.PlaybackIDs = new PlaybackIDsAPI.PlaybackIDs(this._client);
  playbackRestrictions: PlaybackRestrictionsAPI.PlaybackRestrictions =
    new PlaybackRestrictionsAPI.PlaybackRestrictions(this._client);
  spaces: SpacesAPI.Spaces = new SpacesAPI.Spaces(this._client);
  transcriptionVocabularies: TranscriptionVocabulariesAPI.TranscriptionVocabularies =
    new TranscriptionVocabulariesAPI.TranscriptionVocabularies(this._client);
  uploads: UploadsAPI.Uploads = new UploadsAPI.Uploads(this._client);
}

export namespace Video {
  export import Assets = AssetsAPI.Assets;
  export import Asset = AssetsAPI.Asset;
  export import AssetOptions = AssetsAPI.AssetOptions;
  export import AssetResponse = AssetsAPI.AssetResponse;
  export import InputInfo = AssetsAPI.InputInfo;
  export import Track = AssetsAPI.Track;
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
  export import Spaces = SpacesAPI.Spaces;
  export import Broadcast = SpacesAPI.Broadcast;
  export import BroadcastLayout = SpacesAPI.BroadcastLayout;
  export import BroadcastResolution = SpacesAPI.BroadcastResolution;
  export import BroadcastResponse = SpacesAPI.BroadcastResponse;
  export import BroadcastStatus = SpacesAPI.BroadcastStatus;
  export import Space = SpacesAPI.Space;
  export import SpaceResponse = SpacesAPI.SpaceResponse;
  export import SpaceStatus = SpacesAPI.SpaceStatus;
  export import SpaceType = SpacesAPI.SpaceType;
  export import SpacesBasePage = SpacesAPI.SpacesBasePage;
  export import SpaceCreateParams = SpacesAPI.SpaceCreateParams;
  export import SpaceListParams = SpacesAPI.SpaceListParams;
  export import SpaceCreateBroadcastParams = SpacesAPI.SpaceCreateBroadcastParams;
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
}
