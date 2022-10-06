// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { NoMorePages, NoMorePagesParams } from '~/pagination';

export class PlaybackRestrictions extends APIResource {
  /**
   * Create a new Playback Restriction.
   */
  create(
    body: PlaybackRestrictionCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<PlaybackRestrictionResponse>> {
    return this.post('/video/v1/playback-restrictions', { body, ...options });
  }

  /**
   * Retrieves a Playback Restriction associated with the unique identifier.
   */
  retrieve(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<PlaybackRestrictionResponse>> {
    return this.get(`/video/v1/playback-restrictions/${id}`, options);
  }

  /**
   * Returns a list of all Playback Restrictions.
   */
  list(
    query?: PlaybackRestrictionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlaybackRestrictionsNoMorePages>;
  list(options?: Core.RequestOptions): Core.PagePromise<PlaybackRestrictionsNoMorePages>;
  list(
    query: PlaybackRestrictionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlaybackRestrictionsNoMorePages> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/video/v1/playback-restrictions', PlaybackRestrictionsNoMorePages, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a single Playback Restriction.
   */
  del(id: string, options?: Core.RequestOptions): Promise<void> {
    return this.delete(`/video/v1/playback-restrictions/${id}`, {
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
    id: string,
    body: PlaybackRestrictionUpdateReferrerParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<PlaybackRestrictionResponse>> {
    return this.put(`/video/v1/playback-restrictions/${id}/referrer`, { body, ...options });
  }
}

export class PlaybackRestrictionsNoMorePages extends NoMorePages<PlaybackRestriction> {}

export interface CreatePlaybackRestrictionRequest {
  /**
   * A list of domains allowed to play your videos.
   */
  referrer?: CreatePlaybackRestrictionRequest.Referrer;
}

export namespace CreatePlaybackRestrictionRequest {
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

export interface PlaybackRestriction {
  /**
   * Time the Playback Restriction was created, defined as a Unix timestamp (seconds
   * since epoch).
   */
  created_at?: string;

  /**
   * Unique identifier for the Playback Restriction. Max 255 characters.
   */
  id?: string;

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
  data?: PlaybackRestriction;
}

export interface PlaybackRestrictionCreateParams {
  /**
   * A list of domains allowed to play your videos.
   */
  referrer?: PlaybackRestrictionCreateParams.Referrer;
}

export namespace PlaybackRestrictionCreateParams {
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

export interface PlaybackRestrictionListParams extends NoMorePagesParams {}

export type PlaybackRestrictionUpdateReferrerParams =
  PlaybackRestrictionUpdateReferrerParams.ReferrerDomainRestriction;

export namespace PlaybackRestrictionUpdateReferrerParams {
  export interface ReferrerDomainRestriction {
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
