// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'mux/resource';
import { Assets } from './assets';
import { DeliveryUsage } from './delivery-usage';
import { LiveStreams } from './live-streams';
import { PlaybackIDs } from './playback-ids';
import { PlaybackRestrictions } from './playback-restrictions';
import { Spaces } from './spaces';
import { TranscriptionVocabularies } from './transcription-vocabularies';
import { Uploads } from './uploads';
import * as API from './';

export class Video extends APIResource {
  assets: Assets = new Assets(this.client);
  deliveryUsage: DeliveryUsage = new DeliveryUsage(this.client);
  liveStreams: LiveStreams = new LiveStreams(this.client);
  playbackIds: PlaybackIDs = new PlaybackIDs(this.client);
  playbackRestrictions: PlaybackRestrictions = new PlaybackRestrictions(this.client);
  spaces: Spaces = new Spaces(this.client);
  transcriptionVocabularies: TranscriptionVocabularies = new TranscriptionVocabularies(this.client);
  uploads: Uploads = new Uploads(this.client);
}

export namespace Video {
  export import Assets = API.Assets;
  export import Asset = API.Asset;
  export import AssetResponse = API.AssetResponse;
  export import Track = API.Track;
  export import AssetsBasePage = API.AssetsBasePage;
  export import AssetCreateParams = API.AssetCreateParams;
  export import AssetUpdateParams = API.AssetUpdateParams;
  export import AssetListParams = API.AssetListParams;
  export import AssetCreatePlaybackIDParams = API.AssetCreatePlaybackIDParams;
  export import AssetCreateTrackParams = API.AssetCreateTrackParams;
  export import AssetUpdateMasterAccessParams = API.AssetUpdateMasterAccessParams;
  export import AssetUpdateMP4SupportParams = API.AssetUpdateMP4SupportParams;

  export import DeliveryUsage = API.DeliveryUsage;
  export import DeliveryReport = API.DeliveryReport;
  export import DeliveryReportsPageWithTotal = API.DeliveryReportsPageWithTotal;
  export import DeliveryUsageListParams = API.DeliveryUsageListParams;

  export import LiveStreams = API.LiveStreams;
  export import LiveStream = API.LiveStream;
  export import SimulcastTarget = API.SimulcastTarget;
  export import LiveStreamsBasePage = API.LiveStreamsBasePage;
  export import LiveStreamCreateParams = API.LiveStreamCreateParams;
  export import LiveStreamUpdateParams = API.LiveStreamUpdateParams;
  export import LiveStreamListParams = API.LiveStreamListParams;
  export import LiveStreamCreatePlaybackIDParams = API.LiveStreamCreatePlaybackIDParams;
  export import LiveStreamCreateSimulcastTargetParams = API.LiveStreamCreateSimulcastTargetParams;
  export import LiveStreamUpdateEmbeddedSubtitlesParams = API.LiveStreamUpdateEmbeddedSubtitlesParams;
  export import LiveStreamUpdateGeneratedSubtitlesParams = API.LiveStreamUpdateGeneratedSubtitlesParams;

  export import PlaybackIDs = API.PlaybackIDs;
  export import PlaybackIDRetrieveResponse = API.PlaybackIDRetrieveResponse;

  export import PlaybackRestrictions = API.PlaybackRestrictions;
  export import PlaybackRestriction = API.PlaybackRestriction;
  export import PlaybackRestrictionResponse = API.PlaybackRestrictionResponse;
  export import PlaybackRestrictionsBasePage = API.PlaybackRestrictionsBasePage;
  export import PlaybackRestrictionCreateParams = API.PlaybackRestrictionCreateParams;
  export import PlaybackRestrictionListParams = API.PlaybackRestrictionListParams;
  export import PlaybackRestrictionUpdateReferrerParams = API.PlaybackRestrictionUpdateReferrerParams;

  export import Spaces = API.Spaces;
  export import Broadcast = API.Broadcast;
  export import BroadcastLayout = API.BroadcastLayout;
  export import BroadcastResolution = API.BroadcastResolution;
  export import BroadcastResponse = API.BroadcastResponse;
  export import BroadcastStatus = API.BroadcastStatus;
  export import Space = API.Space;
  export import SpaceResponse = API.SpaceResponse;
  export import SpaceStatus = API.SpaceStatus;
  export import SpaceType = API.SpaceType;
  export import SpacesBasePage = API.SpacesBasePage;
  export import SpaceCreateParams = API.SpaceCreateParams;
  export import SpaceListParams = API.SpaceListParams;
  export import SpaceCreateBroadcastParams = API.SpaceCreateBroadcastParams;

  export import TranscriptionVocabularies = API.TranscriptionVocabularies;
  export import TranscriptionVocabulary = API.TranscriptionVocabulary;
  export import TranscriptionVocabularyPhrase = API.TranscriptionVocabularyPhrase;
  export import TranscriptionVocabularyResponse = API.TranscriptionVocabularyResponse;
  export import TranscriptionVocabulariesBasePage = API.TranscriptionVocabulariesBasePage;
  export import TranscriptionVocabularyCreateParams = API.TranscriptionVocabularyCreateParams;
  export import TranscriptionVocabularyUpdateParams = API.TranscriptionVocabularyUpdateParams;
  export import TranscriptionVocabularyListParams = API.TranscriptionVocabularyListParams;

  export import Uploads = API.Uploads;
  export import Upload = API.Upload;
  export import UploadResponse = API.UploadResponse;
  export import UploadsBasePage = API.UploadsBasePage;
  export import UploadCreateParams = API.UploadCreateParams;
  export import UploadListParams = API.UploadListParams;
}
