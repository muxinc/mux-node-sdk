import { Base } from '../../base.js';
import {
  CreatePlaybackRestrictionParams,
  ListPlaybackRestrictionsResponse,
  PlaybackRestrictionResponse,
  ReferrerDomainRestriction,
} from '../domain.js';

/**
 * @private Base playback restriction path for the Mux API
 * */
const PATH = '/video/v1/playback-restrictions';

/**
 * @private
 * Build the base playback restriction path for the Mux API
 * */
const buildBasePath = (restrictionId: string) => `${PATH}/${restrictionId}`;

export class PlaybackRestrictions extends Base {
  create(
    restriction: CreatePlaybackRestrictionParams
  ): Promise<PlaybackRestrictionResponse> {
    return this.http.post(PATH, restriction);
  }

  list(): Promise<ListPlaybackRestrictionsResponse> {
    return this.http.get(PATH);
  }

  get(restrictionId: string): Promise<PlaybackRestrictionResponse> {
    return this.http.get(buildBasePath(restrictionId));
  }

  delete(restrictionId: string): Promise<PlaybackRestrictionResponse> {
    return this.http.delete(buildBasePath(restrictionId));
  }

  putReferrer(
    restrictionId: string,
    referrer: ReferrerDomainRestriction
  ): Promise<PlaybackRestrictionResponse> {
    return this.http.put(`${buildBasePath(restrictionId)}/referrer`, referrer);
  }
}
