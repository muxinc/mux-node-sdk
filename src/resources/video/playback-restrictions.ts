// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { BasePage, type BasePageParams } from '../../pagination';

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
      headers: { Accept: '*/*', ...options?.headers },
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

  /**
   * Allows you to modify how Mux validates playback requests with different user
   * agents. Please see
   * [Using User-Agent HTTP header for validation](https://docs.mux.com/guides/secure-video-playback#using-user-agent-http-header-for-validation)
   * for more details on this feature.
   */
  updateUserAgent(
    playbackRestrictionId: string,
    body: PlaybackRestrictionUpdateUserAgentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlaybackRestriction> {
    return (
      this._client.put(`/video/v1/playback-restrictions/${playbackRestrictionId}/user_agent`, {
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
  id: string;

  /**
   * Time the Playback Restriction was created, defined as a Unix timestamp (seconds
   * since epoch).
   */
  created_at: string;

  /**
   * A list of domains allowed to play your videos.
   */
  referrer: PlaybackRestriction.Referrer;

  /**
   * Time the Playback Restriction was last updated, defined as a Unix timestamp
   * (seconds since epoch).
   */
  updated_at: string;

  /**
   * Rules that control what user agents are allowed to play your videos. Please see
   * [Using User-Agent HTTP header for validation](https://docs.mux.com/guides/secure-video-playback#using-user-agent-http-header-for-validation)
   * for more details on this feature.
   */
  user_agent: PlaybackRestriction.UserAgent;
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

  /**
   * Rules that control what user agents are allowed to play your videos. Please see
   * [Using User-Agent HTTP header for validation](https://docs.mux.com/guides/secure-video-playback#using-user-agent-http-header-for-validation)
   * for more details on this feature.
   */
  export interface UserAgent {
    /**
     * Whether or not to allow high risk user agents. The high risk user agents are
     * defined by Mux.
     */
    allow_high_risk_user_agent?: boolean;

    /**
     * Whether or not to allow views without a `User-Agent` HTTP request header.
     */
    allow_no_user_agent?: boolean;
  }
}

export interface PlaybackRestrictionResponse {
  data: PlaybackRestriction;
}

export interface PlaybackRestrictionCreateParams {
  /**
   * A list of domains allowed to play your videos.
   */
  referrer: PlaybackRestrictionCreateParams.Referrer;

  /**
   * Rules that control what user agents are allowed to play your videos. Please see
   * [Using User-Agent HTTP header for validation](https://docs.mux.com/guides/secure-video-playback#using-user-agent-http-header-for-validation)
   * for more details on this feature.
   */
  user_agent: PlaybackRestrictionCreateParams.UserAgent;
}

export namespace PlaybackRestrictionCreateParams {
  /**
   * A list of domains allowed to play your videos.
   */
  export interface Referrer {
    /**
     * List of domains allowed to play videos. Possible values are
     *
     * - `[]` Empty Array indicates deny video playback requests for all domains
     * - `["*"]` A Single Wildcard `*` entry means allow video playback requests from
     *   any domain
     * - `["*.example.com", "foo.com"]` A list of up to 10 domains or valid dns-style
     *   wildcards
     */
    allowed_domains: Array<string>;

    /**
     * A boolean to determine whether to allow or deny HTTP requests without `Referer`
     * HTTP request header. Playback requests coming from non-web/native applications
     * like iOS, Android or smart TVs will not have a `Referer` HTTP header. Set this
     * value to `true` to allow these playback requests.
     */
    allow_no_referrer?: boolean;
  }

  /**
   * Rules that control what user agents are allowed to play your videos. Please see
   * [Using User-Agent HTTP header for validation](https://docs.mux.com/guides/secure-video-playback#using-user-agent-http-header-for-validation)
   * for more details on this feature.
   */
  export interface UserAgent {
    /**
     * Whether or not to allow high risk user agents. The high risk user agents are
     * defined by Mux.
     */
    allow_high_risk_user_agent?: boolean;

    /**
     * Whether or not to allow views without a `User-Agent` HTTP request header.
     */
    allow_no_user_agent?: boolean;
  }
}

export interface PlaybackRestrictionListParams extends BasePageParams {}

export interface PlaybackRestrictionUpdateReferrerParams {
  /**
   * List of domains allowed to play videos. Possible values are
   *
   * - `[]` Empty Array indicates deny video playback requests for all domains
   * - `["*"]` A Single Wildcard `*` entry means allow video playback requests from
   *   any domain
   * - `["*.example.com", "foo.com"]` A list of up to 10 domains or valid dns-style
   *   wildcards
   */
  allowed_domains: Array<string>;

  /**
   * A boolean to determine whether to allow or deny HTTP requests without `Referer`
   * HTTP request header. Playback requests coming from non-web/native applications
   * like iOS, Android or smart TVs will not have a `Referer` HTTP header. Set this
   * value to `true` to allow these playback requests.
   */
  allow_no_referrer?: boolean;
}

export interface PlaybackRestrictionUpdateUserAgentParams {
  /**
   * Whether or not to allow high risk user agents. The high risk user agents are
   * defined by Mux.
   */
  allow_high_risk_user_agent: boolean;

  /**
   * Whether or not to allow views without a `User-Agent` HTTP request header.
   */
  allow_no_user_agent: boolean;
}

PlaybackRestrictions.PlaybackRestrictionsBasePage = PlaybackRestrictionsBasePage;

export declare namespace PlaybackRestrictions {
  export {
    type PlaybackRestriction as PlaybackRestriction,
    type PlaybackRestrictionResponse as PlaybackRestrictionResponse,
    PlaybackRestrictionsBasePage as PlaybackRestrictionsBasePage,
    type PlaybackRestrictionCreateParams as PlaybackRestrictionCreateParams,
    type PlaybackRestrictionListParams as PlaybackRestrictionListParams,
    type PlaybackRestrictionUpdateReferrerParams as PlaybackRestrictionUpdateReferrerParams,
    type PlaybackRestrictionUpdateUserAgentParams as PlaybackRestrictionUpdateUserAgentParams,
  };
}
