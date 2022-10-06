// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { Assets } from './assets';
import { DeliveryUsageResource } from './delivery-usage';
import { LiveStreams } from './live-streams';
import { PlaybackIds } from './playback-ids';
import { PlaybackRestrictions } from './playback-restrictions';
import { SigningKeys } from './signing-keys';
import { Spaces } from './spaces';
import { TranscriptionVocabularies } from './transcription-vocabularies';
import { Uploads } from './uploads';

export class VideoResource extends APIResource {
  assets: Assets = new Assets(this.client);
  deliveryUsage: DeliveryUsageResource = new DeliveryUsageResource(this.client);
  liveStreams: LiveStreams = new LiveStreams(this.client);
  playbackIds: PlaybackIds = new PlaybackIds(this.client);
  playbackRestrictions: PlaybackRestrictions = new PlaybackRestrictions(this.client);
  signingKeys: SigningKeys = new SigningKeys(this.client);
  spaces: Spaces = new Spaces(this.client);
  transcriptionVocabularies: TranscriptionVocabularies = new TranscriptionVocabularies(this.client);
  uploads: Uploads = new Uploads(this.client);
}
