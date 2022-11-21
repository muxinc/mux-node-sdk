import { Base } from '../../base.js';
import {
  CreatePlaybackRestrictionParams,
  PlaybackRestriction,
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
  ): Promise<PlaybackRestriction> {
    return this.http.post(PATH, restriction);
  }

  list(): Promise<Array<PlaybackRestriction>> {
    return this.http.get(PATH);
  }

  get(restrictionId: string): Promise<PlaybackRestriction> {
    return this.http.get(buildBasePath(restrictionId));
  }

  delete(restrictionId: string): Promise<PlaybackRestriction> {
    return this.http.delete(buildBasePath(restrictionId));
  }

  putReferrer(
    restrictionId: string,
    referrer: ReferrerDomainRestriction
  ): Promise<PlaybackRestriction> {
    return this.http.put(`${buildBasePath(restrictionId)}/referrer`, referrer);
  }
}
