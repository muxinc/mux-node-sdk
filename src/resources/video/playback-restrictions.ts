// File generated from our OpenAPI spec by Stainless.

import * as Core from '@mux/mux-node/core';
import { APIResource } from '@mux/mux-node/resource';
import { isRequestOptions } from '@mux/mux-node/core';
import * as PlaybackRestrictionsAPI from '@mux/mux-node/resources/video/playback-restrictions';
import { BasePage, type BasePageParams } from '@mux/mux-node/pagination';

export class PlaybackRestrictions extends APIResource {
  /**
   * Create a new Playback Restriction.
   */
  create(
    body: PlaybackRestrictionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlaybackRestriction> {
    return (
      this._client.post('/video/v1/playback-restrictions', { body, ...options }) as Core.APIPromise<{
        data: PlaybackRestriction;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Retrieves a Playback Restriction associated with the unique identifier.
   */
  retrieve(
    playbackRestrictionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlaybackRestriction> {
    return (
      this._client.get(
        `/video/v1/playback-restrictions/${playbackRestrictionId}`,
        options,
      ) as Core.APIPromise<{ data: PlaybackRestriction }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Returns a list of all Playback Restrictions.
   */
  list(
    query?: PlaybackRestrictionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlaybackRestrictionsBasePage, PlaybackRestriction>;
  list(options?: Core.RequestOptions): Core.PagePromise<PlaybackRestrictionsBasePage, PlaybackRestriction>;
  list(
    query: PlaybackRestrictionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlaybackRestrictionsBasePage, PlaybackRestriction> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/video/v1/playback-restrictions', PlaybackRestrictionsBasePage, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a single Playback Restriction.
   */
  delete(playbackRestrictionId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/video/v1/playback-restrictions/${playbackRestrictionId}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Allows you to modify the list of domains or change how Mux validates playback
   * requests without the `Referer` HTTP header. The Referrer restriction fully
   * replaces the old list with this new list of domains.
   */
  updateReferrer(
    playbackRestrictionId: string,
    body: PlaybackRestrictionUpdateReferrerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlaybackRestriction> {
    return (
      this._client.put(`/video/v1/playback-restrictions/${playbackRestrictionId}/referrer`, {
        body,
        ...options,
      }) as Core.APIPromise<{ data: PlaybackRestriction }>
    )._thenUnwrap((obj) => obj.data);
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
  export import PlaybackRestriction = PlaybackRestrictionsAPI.PlaybackRestriction;
  export import PlaybackRestrictionResponse = PlaybackRestrictionsAPI.PlaybackRestrictionResponse;
  export import PlaybackRestrictionsBasePage = PlaybackRestrictionsAPI.PlaybackRestrictionsBasePage;
  export import PlaybackRestrictionCreateParams = PlaybackRestrictionsAPI.PlaybackRestrictionCreateParams;
  export import PlaybackRestrictionListParams = PlaybackRestrictionsAPI.PlaybackRestrictionListParams;
  export import PlaybackRestrictionUpdateReferrerParams = PlaybackRestrictionsAPI.PlaybackRestrictionUpdateReferrerParams;
}
