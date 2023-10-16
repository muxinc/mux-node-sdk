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
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this.client);
  deliveryUsage: DeliveryUsageAPI.DeliveryUsage = new DeliveryUsageAPI.DeliveryUsage(this.client);
  liveStreams: LiveStreamsAPI.LiveStreams = new LiveStreamsAPI.LiveStreams(this.client);
  playbackIds: PlaybackIDsAPI.PlaybackIDs = new PlaybackIDsAPI.PlaybackIDs(this.client);
  playbackRestrictions: PlaybackRestrictionsAPI.PlaybackRestrictions =
    new PlaybackRestrictionsAPI.PlaybackRestrictions(this.client);
  spaces: SpacesAPI.Spaces = new SpacesAPI.Spaces(this.client);
  transcriptionVocabularies: TranscriptionVocabulariesAPI.TranscriptionVocabularies =
    new TranscriptionVocabulariesAPI.TranscriptionVocabularies(this.client);
  uploads: UploadsAPI.Uploads = new UploadsAPI.Uploads(this.client);
}

export namespace Video {
  export import Assets = AssetsAPI.Assets;
  export type Asset = AssetsAPI.Asset;
  export type AssetResponse = AssetsAPI.AssetResponse;
  export type InputInfo = AssetsAPI.InputInfo;
  export type Track = AssetsAPI.Track;
  export type AssetRetrieveInputInfoResponse = AssetsAPI.AssetRetrieveInputInfoResponse;
  export import AssetsBasePage = AssetsAPI.AssetsBasePage;
  export type AssetCreateParams = AssetsAPI.AssetCreateParams;
  export type AssetUpdateParams = AssetsAPI.AssetUpdateParams;
  export type AssetListParams = AssetsAPI.AssetListParams;
  export type AssetCreatePlaybackIDParams = AssetsAPI.AssetCreatePlaybackIDParams;
  export type AssetCreateTrackParams = AssetsAPI.AssetCreateTrackParams;
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
  export import Spaces = SpacesAPI.Spaces;
  export type Broadcast = SpacesAPI.Broadcast;
  export type BroadcastLayout = SpacesAPI.BroadcastLayout;
  export type BroadcastResolution = SpacesAPI.BroadcastResolution;
  export type BroadcastResponse = SpacesAPI.BroadcastResponse;
  export type BroadcastStatus = SpacesAPI.BroadcastStatus;
  export type Space = SpacesAPI.Space;
  export type SpaceResponse = SpacesAPI.SpaceResponse;
  export type SpaceStatus = SpacesAPI.SpaceStatus;
  export type SpaceType = SpacesAPI.SpaceType;
  export import SpacesBasePage = SpacesAPI.SpacesBasePage;
  export type SpaceCreateParams = SpacesAPI.SpaceCreateParams;
  export type SpaceListParams = SpacesAPI.SpaceListParams;
  export type SpaceCreateBroadcastParams = SpacesAPI.SpaceCreateBroadcastParams;
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
}
