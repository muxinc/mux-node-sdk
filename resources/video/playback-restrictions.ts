// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as API from './';
import { BasePage, BasePageParams } from '~/pagination';

export class PlaybackRestrictions extends APIResource {
  /**
   * Create a new Playback Restriction.
   */
  async create(
    body: PlaybackRestrictionCreateParams,
    options?: Core.RequestOptions,
  ): Promise<PlaybackRestriction> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.post('/video/v1/playback-restrictions', { body, ...options })) as any;
    return response.data;
  }

  /**
   * Retrieves a Playback Restriction associated with the unique identifier.
   */
  async retrieve(playbackRestrictionId: string, options?: Core.RequestOptions): Promise<PlaybackRestriction> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.get(
      `/video/v1/playback-restrictions/${playbackRestrictionId}`,
      options,
    )) as any;
    return response.data;
  }

  /**
   * Returns a list of all Playback Restrictions.
   */
  list(
    query?: PlaybackRestrictionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlaybackRestrictionsBasePage>;
  list(options?: Core.RequestOptions): Core.PagePromise<PlaybackRestrictionsBasePage>;
  list(
    query: PlaybackRestrictionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlaybackRestrictionsBasePage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/video/v1/playback-restrictions', PlaybackRestrictionsBasePage, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a single Playback Restriction.
   */
  del(
    playbackRestrictionId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    return this.delete(`/video/v1/playback-restrictions/${playbackRestrictionId}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Allows you to modify the list of domains or change how Mux validates playback
   * requests without the `Referer` HTTP header. The Referrer restriction fully
   * replaces the old list with this new list of domains.
   */
  async updateReferrer(
    playbackRestrictionId: string,
    body: PlaybackRestrictionUpdateReferrerParams,
    options?: Core.RequestOptions,
  ): Promise<PlaybackRestriction> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.put(`/video/v1/playback-restrictions/${playbackRestrictionId}/referrer`, {
      body,
      ...options,
    })) as any;
    return response.data;
  }
}

export class PlaybackRestrictionsBasePage extends BasePage<PlaybackRestriction> {}

export interface PlaybackRestriction {
  /**
   * Unique identifier for the Playback Restriction. Max 255 characters.
   */
  id?: string;

  /**
   * Time the Playback Restriction was created, defined as a Unix timestamp (seconds
   * since epoch).
   */
  created_at?: string;

  /**
   * A list of domains allowed to play your videos.
   */
  referrer?: PlaybackRestriction.Referrer;

  /**
   * Time the Playback Restriction was last updated, defined as a Unix timestamp
   * (seconds since epoch).
   */
  updated_at?: string;
}

export namespace PlaybackRestriction {
  /**
   * A list of domains allowed to play your videos.
   */
  export interface Referrer {
    /**
     * A boolean to determine whether to allow or deny HTTP requests without `Referer`
     * HTTP request header. Playback requests coming from non-web/native applications
     * like iOS, Android or smart TVs will not have a `Referer` HTTP header. Set this
     * value to `true` to allow these playback requests.
     */
    allow_no_referrer?: boolean;

    /**
     * List of domains allowed to play videos. Possible values are
     *
     * - `[]` Empty Array indicates deny video playback requests for all domains
     * - `["*"]` A Single Wildcard `*` entry means allow video playback requests from
     *   any domain
     * - `["*.example.com", "foo.com"]` A list of up to 10 domains or valid dns-style
     *   wildcards
     */
    allowed_domains?: Array<string>;
  }
}

export interface PlaybackRestrictionResponse {
  data: PlaybackRestriction;
}

export interface PlaybackRestrictionCreateParams {
  /**
   * A list of domains allowed to play your videos.
   */
  referrer?: PlaybackRestrictionCreateParams.Referrer;
}

export namespace PlaybackRestrictionCreateParams {
  /**
   * A list of domains allowed to play your videos.
   */
  export interface Referrer {
    /**
     * A boolean to determine whether to allow or deny HTTP requests without `Referer`
     * HTTP request header. Playback requests coming from non-web/native applications
     * like iOS, Android or smart TVs will not have a `Referer` HTTP header. Set this
     * value to `true` to allow these playback requests.
     */
    allow_no_referrer?: boolean;

    /**
     * List of domains allowed to play videos. Possible values are
     *
     * - `[]` Empty Array indicates deny video playback requests for all domains
     * - `["*"]` A Single Wildcard `*` entry means allow video playback requests from
     *   any domain
     * - `["*.example.com", "foo.com"]` A list of up to 10 domains or valid dns-style
     *   wildcards
     */
    allowed_domains?: Array<string>;
  }
}

export interface PlaybackRestrictionListParams extends BasePageParams {}

export interface PlaybackRestrictionUpdateReferrerParams {
  /**
   * A boolean to determine whether to allow or deny HTTP requests without `Referer`
   * HTTP request header. Playback requests coming from non-web/native applications
   * like iOS, Android or smart TVs will not have a `Referer` HTTP header. Set this
   * value to `true` to allow these playback requests.
   */
  allow_no_referrer?: boolean;

  /**
   * List of domains allowed to play videos. Possible values are
   *
   * - `[]` Empty Array indicates deny video playback requests for all domains
   * - `["*"]` A Single Wildcard `*` entry means allow video playback requests from
   *   any domain
   * - `["*.example.com", "foo.com"]` A list of up to 10 domains or valid dns-style
   *   wildcards
   */
  allowed_domains?: Array<string>;
}

export namespace PlaybackRestrictions {
  export import PlaybackRestriction = API.PlaybackRestriction;
  export import PlaybackRestrictionResponse = API.PlaybackRestrictionResponse;
  export import PlaybackRestrictionsBasePage = API.PlaybackRestrictionsBasePage;
  export import PlaybackRestrictionCreateParams = API.PlaybackRestrictionCreateParams;
  export import PlaybackRestrictionListParams = API.PlaybackRestrictionListParams;
  export import PlaybackRestrictionUpdateReferrerParams = API.PlaybackRestrictionUpdateReferrerParams;
}
