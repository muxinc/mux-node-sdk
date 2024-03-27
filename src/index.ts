// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from './core';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as qs from 'qs';
import * as Pagination from '@mux/mux-node/pagination';
import * as API from '@mux/mux-node/resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['MUX_TOKEN_ID'].
   */
  tokenId?: string | undefined;

  /**
   * Defaults to process.env['MUX_TOKEN_SECRET'].
   */
  tokenSecret?: string | undefined;

  /**
   * Defaults to process.env['MUX_WEBHOOK_SECRET'].
   */
  webhookSecret?: string | null | undefined;

  /**
   * Defaults to process.env['MUX_SIGNING_KEY'].
   */
  jwtSigningKey?: string | null | undefined;

  /**
   * Defaults to process.env['MUX_PRIVATE_KEY'].
   */
  jwtPrivateKey?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['MUX_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/** API Client for interfacing with the Mux API. */
export class Mux extends Core.APIClient {
  tokenId: string;
  tokenSecret: string;
  webhookSecret: string | null;
  jwtSigningKey: string | null;
  jwtPrivateKey: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Mux API.
   *
   * @param {string | undefined} [opts.tokenId=process.env['MUX_TOKEN_ID'] ?? undefined]
   * @param {string | undefined} [opts.tokenSecret=process.env['MUX_TOKEN_SECRET'] ?? undefined]
   * @param {string | null | undefined} [opts.webhookSecret=process.env['MUX_WEBHOOK_SECRET'] ?? null]
   * @param {string | null | undefined} [opts.jwtSigningKey=process.env['MUX_SIGNING_KEY'] ?? null]
   * @param {string | null | undefined} [opts.jwtPrivateKey=process.env['MUX_PRIVATE_KEY'] ?? null]
   * @param {string} [opts.baseURL=process.env['MUX_BASE_URL'] ?? https://api.mux.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('MUX_BASE_URL'),
    tokenId = Core.readEnv('MUX_TOKEN_ID'),
    tokenSecret = Core.readEnv('MUX_TOKEN_SECRET'),
    webhookSecret = Core.readEnv('MUX_WEBHOOK_SECRET') ?? null,
    jwtSigningKey = Core.readEnv('MUX_SIGNING_KEY') ?? null,
    jwtPrivateKey = Core.readEnv('MUX_PRIVATE_KEY') ?? null,
    ...opts
  }: ClientOptions = {}) {
    if (tokenId === undefined) {
      throw new Errors.MuxError(
        "The MUX_TOKEN_ID environment variable is missing or empty; either provide it, or instantiate the Mux client with an tokenId option, like new Mux({ tokenId: 'my token id' }).",
      );
    }
    if (tokenSecret === undefined) {
      throw new Errors.MuxError(
        "The MUX_TOKEN_SECRET environment variable is missing or empty; either provide it, or instantiate the Mux client with an tokenSecret option, like new Mux({ tokenSecret: 'my secret' }).",
      );
    }

    const options: ClientOptions = {
      tokenId,
      tokenSecret,
      webhookSecret,
      jwtSigningKey,
      jwtPrivateKey,
      ...opts,
      baseURL: baseURL || `https://api.mux.com`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this._options = options;

    this.tokenId = tokenId;
    this.tokenSecret = tokenSecret;
    this.webhookSecret = webhookSecret;
    this.jwtSigningKey = jwtSigningKey;
    this.jwtPrivateKey = jwtPrivateKey;
  }

  video: API.Video = new API.Video(this);
  webInputs: API.WebInputs = new API.WebInputs(this);
  data: API.Data = new API.Data(this);
  system: API.System = new API.System(this);
  webhooks: API.Webhooks = new API.Webhooks(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    if (!this.tokenId) {
      return {};
    }

    if (!this.tokenSecret) {
      return {};
    }

    const credentials = `${this.tokenId}:${this.tokenSecret}`;
    const Authorization = `Basic ${Core.toBase64(credentials)}`;
    return { Authorization };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'brackets' });
  }

  static Mux = this;

  static MuxError = Errors.MuxError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;
}

export const {
  MuxError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Mux {
  // Helper functions
  export import toFile = Uploads.toFile;
  export import fileFromPath = Uploads.fileFromPath;

  export import RequestOptions = Core.RequestOptions;

  export import PageWithTotal = Pagination.PageWithTotal;
  export import PageWithTotalParams = Pagination.PageWithTotalParams;
  export import PageWithTotalResponse = Pagination.PageWithTotalResponse;

  export import BasePage = Pagination.BasePage;
  export import BasePageParams = Pagination.BasePageParams;
  export import BasePageResponse = Pagination.BasePageResponse;

  export import Video = API.Video;

  export import WebInputs = API.WebInputs;

  export import Data = API.Data;

  export import System = API.System;

  export import Webhooks = API.Webhooks;
  export import BaseWebhookEvent = API.BaseWebhookEvent;
  export import VideoAssetCreatedWebhookEvent = API.VideoAssetCreatedWebhookEvent;
  export import VideoAssetReadyWebhookEvent = API.VideoAssetReadyWebhookEvent;
  export import VideoAssetErroredWebhookEvent = API.VideoAssetErroredWebhookEvent;
  export import VideoAssetUpdatedWebhookEvent = API.VideoAssetUpdatedWebhookEvent;
  export import VideoAssetDeletedWebhookEvent = API.VideoAssetDeletedWebhookEvent;
  export import VideoAssetLiveStreamCompletedWebhookEvent = API.VideoAssetLiveStreamCompletedWebhookEvent;
  export import VideoAssetStaticRenditionsReadyWebhookEvent = API.VideoAssetStaticRenditionsReadyWebhookEvent;
  export import VideoAssetStaticRenditionsPreparingWebhookEvent = API.VideoAssetStaticRenditionsPreparingWebhookEvent;
  export import VideoAssetStaticRenditionsDeletedWebhookEvent = API.VideoAssetStaticRenditionsDeletedWebhookEvent;
  export import VideoAssetStaticRenditionsErroredWebhookEvent = API.VideoAssetStaticRenditionsErroredWebhookEvent;
  export import VideoAssetMasterReadyWebhookEvent = API.VideoAssetMasterReadyWebhookEvent;
  export import VideoAssetMasterPreparingWebhookEvent = API.VideoAssetMasterPreparingWebhookEvent;
  export import VideoAssetMasterDeletedWebhookEvent = API.VideoAssetMasterDeletedWebhookEvent;
  export import VideoAssetMasterErroredWebhookEvent = API.VideoAssetMasterErroredWebhookEvent;
  export import VideoAssetTrackCreatedWebhookEvent = API.VideoAssetTrackCreatedWebhookEvent;
  export import VideoAssetTrackReadyWebhookEvent = API.VideoAssetTrackReadyWebhookEvent;
  export import VideoAssetTrackErroredWebhookEvent = API.VideoAssetTrackErroredWebhookEvent;
  export import VideoAssetTrackDeletedWebhookEvent = API.VideoAssetTrackDeletedWebhookEvent;
  export import VideoAssetWarningWebhookEvent = API.VideoAssetWarningWebhookEvent;
  export import VideoUploadAssetCreatedWebhookEvent = API.VideoUploadAssetCreatedWebhookEvent;
  export import VideoUploadCancelledWebhookEvent = API.VideoUploadCancelledWebhookEvent;
  export import VideoUploadCreatedWebhookEvent = API.VideoUploadCreatedWebhookEvent;
  export import VideoUploadErroredWebhookEvent = API.VideoUploadErroredWebhookEvent;
  export import VideoLiveStreamCreatedWebhookEvent = API.VideoLiveStreamCreatedWebhookEvent;
  export import VideoLiveStreamConnectedWebhookEvent = API.VideoLiveStreamConnectedWebhookEvent;
  export import VideoLiveStreamRecordingWebhookEvent = API.VideoLiveStreamRecordingWebhookEvent;
  export import VideoLiveStreamActiveWebhookEvent = API.VideoLiveStreamActiveWebhookEvent;
  export import VideoLiveStreamDisconnectedWebhookEvent = API.VideoLiveStreamDisconnectedWebhookEvent;
  export import VideoLiveStreamIdleWebhookEvent = API.VideoLiveStreamIdleWebhookEvent;
  export import VideoLiveStreamUpdatedWebhookEvent = API.VideoLiveStreamUpdatedWebhookEvent;
  export import VideoLiveStreamEnabledWebhookEvent = API.VideoLiveStreamEnabledWebhookEvent;
  export import VideoLiveStreamDisabledWebhookEvent = API.VideoLiveStreamDisabledWebhookEvent;
  export import VideoLiveStreamDeletedWebhookEvent = API.VideoLiveStreamDeletedWebhookEvent;
  export import VideoLiveStreamWarningWebhookEvent = API.VideoLiveStreamWarningWebhookEvent;
  export import VideoLiveStreamSimulcastTargetCreatedWebhookEvent = API.VideoLiveStreamSimulcastTargetCreatedWebhookEvent;
  export import VideoLiveStreamSimulcastTargetIdleWebhookEvent = API.VideoLiveStreamSimulcastTargetIdleWebhookEvent;
  export import VideoLiveStreamSimulcastTargetStartingWebhookEvent = API.VideoLiveStreamSimulcastTargetStartingWebhookEvent;
  export import VideoLiveStreamSimulcastTargetBroadcastingWebhookEvent = API.VideoLiveStreamSimulcastTargetBroadcastingWebhookEvent;
  export import VideoLiveStreamSimulcastTargetErroredWebhookEvent = API.VideoLiveStreamSimulcastTargetErroredWebhookEvent;
  export import VideoLiveStreamSimulcastTargetDeletedWebhookEvent = API.VideoLiveStreamSimulcastTargetDeletedWebhookEvent;
  export import VideoLiveStreamSimulcastTargetUpdatedWebhookEvent = API.VideoLiveStreamSimulcastTargetUpdatedWebhookEvent;
  export import VideoSpaceCreatedWebhookEvent = API.VideoSpaceCreatedWebhookEvent;
  export import VideoSpaceDeletedWebhookEvent = API.VideoSpaceDeletedWebhookEvent;
  export import VideoSpaceActiveWebhookEvent = API.VideoSpaceActiveWebhookEvent;
  export import VideoSpaceIdleWebhookEvent = API.VideoSpaceIdleWebhookEvent;
  export import VideoSpaceUpdatedWebhookEvent = API.VideoSpaceUpdatedWebhookEvent;
  export import VideoSpaceBroadcastCreatedWebhookEvent = API.VideoSpaceBroadcastCreatedWebhookEvent;
  export import VideoSpaceBroadcastIdleWebhookEvent = API.VideoSpaceBroadcastIdleWebhookEvent;
  export import VideoSpaceBroadcastActiveWebhookEvent = API.VideoSpaceBroadcastActiveWebhookEvent;
  export import VideoSpaceBroadcastDeletedWebhookEvent = API.VideoSpaceBroadcastDeletedWebhookEvent;
  export import VideoDeliveryHighTrafficWebhookEvent = API.VideoDeliveryHighTrafficWebhookEvent;
  export import UnwrapWebhookEvent = API.UnwrapWebhookEvent;

  export import PlaybackID = API.PlaybackID;
  export import PlaybackPolicy = API.PlaybackPolicy;
}

export default Mux;
