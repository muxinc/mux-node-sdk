// File generated from our OpenAPI spec by Stainless.

import * as Core from '@mux/mux-node/core';
import { APIResource } from '@mux/mux-node/resource';
import { isRequestOptions } from '@mux/mux-node/core';
import * as AssetsAPI from '@mux/mux-node/resources/web-inputs/assets';
import { BasePage, type BasePageParams } from '@mux/mux-node/pagination';

export class Assets extends APIResource {
  /**
   * Create a new Web Input
   */
  create(body: AssetCreateParams, options?: Core.RequestOptions): Core.APIPromise<AssetCreateResponse> {
    return (
      this._client.post('/video/v1/web-inputs', { body, ...options }) as Core.APIPromise<{
        data: AssetCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Retrieve a single Web Input's info
   */
  retrieve(webInputId: string, options?: Core.RequestOptions): Core.APIPromise<AssetRetrieveResponse> {
    return (
      this._client.get(`/video/v1/web-inputs/${webInputId}`, options) as Core.APIPromise<{
        data: AssetRetrieveResponse;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * List Web Inputs
   */
  list(
    query?: AssetListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AssetListResponsesBasePage, AssetListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<AssetListResponsesBasePage, AssetListResponse>;
  list(
    query: AssetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AssetListResponsesBasePage, AssetListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/video/v1/web-inputs', AssetListResponsesBasePage, { query, ...options });
  }

  /**
   * Deletes a Web Input and all its data
   */
  delete(webInputId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/video/v1/web-inputs/${webInputId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Launches the browsers instance, loads the URL specified, and then starts
   * streaming to the specified Live Stream.
   */
  launch(webInputId: string, options?: Core.RequestOptions): Core.APIPromise<AssetLaunchResponse> {
    return (
      this._client.put(`/video/v1/web-inputs/${webInputId}/launch`, options) as Core.APIPromise<{
        data: AssetLaunchResponse;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Reloads the page that a Web Input is displaying.
   *
   * Note: Using this when the Web Input is streaming will display the page
   * reloading.
   */
  reload(webInputId: string, options?: Core.RequestOptions): Core.APIPromise<AssetReloadResponse> {
    return (
      this._client.put(`/video/v1/web-inputs/${webInputId}/reload`, options) as Core.APIPromise<{
        data: AssetReloadResponse;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Ends streaming to the specified Live Stream, and then shuts down the Web Input
   * browser instance.
   */
  shutdown(webInputId: string, options?: Core.RequestOptions): Core.APIPromise<AssetShutdownResponse> {
    return (
      this._client.put(`/video/v1/web-inputs/${webInputId}/shutdown`, options) as Core.APIPromise<{
        data: AssetShutdownResponse;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Changes the URL that a Web Input loads when it launches.
   *
   * Note: This can only be called when the Web Input is idle.
   */
  updateURL(
    webInputId: string,
    body: AssetUpdateURLParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetUpdateURLResponse> {
    return (
      this._client.put(`/video/v1/web-inputs/${webInputId}/url`, { body, ...options }) as Core.APIPromise<{
        data: AssetUpdateURLResponse;
      }>
    )._thenUnwrap((obj) => obj.data);
  }
}

export class AssetListResponsesBasePage extends BasePage<AssetListResponse> {}

export interface AssetCreateResponse {
  /**
   * Unique identifier for the Web Input.
   */
  id: string;

  /**
   * When set to `true` the Web Input will automatically launch and start streaming
   * immediately after creation
   */
  auto_launch: boolean;

  /**
   * Time the Web Input was created, defined as a Unix timestamp (seconds since
   * epoch).
   */
  created_at: string;

  /**
   * The Live Stream ID to broadcast this Web Input to
   */
  live_stream_id: string;

  /**
   * The resolution of the viewport of the Web Input's browser instance. Defaults to
   * 1920x1080 if not set.
   */
  resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720';

  status: 'idle' | 'launching' | 'streaming';

  /**
   * The URL for the Web Input to load.
   */
  url: string;

  /**
   * Arbitrary metadata that will be included in the Web Input details and related
   * webhooks. Can be used to store your own ID for the Web Input. **Max: 255
   * characters**.
   */
  passthrough?: string;

  /**
   * The number of seconds that the Web Input should stream for before automatically
   * shutting down.
   */
  timeout?: number;
}

export interface AssetRetrieveResponse {
  /**
   * Unique identifier for the Web Input.
   */
  id: string;

  /**
   * When set to `true` the Web Input will automatically launch and start streaming
   * immediately after creation
   */
  auto_launch: boolean;

  /**
   * Time the Web Input was created, defined as a Unix timestamp (seconds since
   * epoch).
   */
  created_at: string;

  /**
   * The Live Stream ID to broadcast this Web Input to
   */
  live_stream_id: string;

  /**
   * The resolution of the viewport of the Web Input's browser instance. Defaults to
   * 1920x1080 if not set.
   */
  resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720';

  status: 'idle' | 'launching' | 'streaming';

  /**
   * The URL for the Web Input to load.
   */
  url: string;

  /**
   * Arbitrary metadata that will be included in the Web Input details and related
   * webhooks. Can be used to store your own ID for the Web Input. **Max: 255
   * characters**.
   */
  passthrough?: string;

  /**
   * The number of seconds that the Web Input should stream for before automatically
   * shutting down.
   */
  timeout?: number;
}

export interface AssetListResponse {
  /**
   * Unique identifier for the Web Input.
   */
  id: string;

  /**
   * When set to `true` the Web Input will automatically launch and start streaming
   * immediately after creation
   */
  auto_launch: boolean;

  /**
   * Time the Web Input was created, defined as a Unix timestamp (seconds since
   * epoch).
   */
  created_at: string;

  /**
   * The Live Stream ID to broadcast this Web Input to
   */
  live_stream_id: string;

  /**
   * The resolution of the viewport of the Web Input's browser instance. Defaults to
   * 1920x1080 if not set.
   */
  resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720';

  status: 'idle' | 'launching' | 'streaming';

  /**
   * The URL for the Web Input to load.
   */
  url: string;

  /**
   * Arbitrary metadata that will be included in the Web Input details and related
   * webhooks. Can be used to store your own ID for the Web Input. **Max: 255
   * characters**.
   */
  passthrough?: string;

  /**
   * The number of seconds that the Web Input should stream for before automatically
   * shutting down.
   */
  timeout?: number;
}

export type AssetLaunchResponse = unknown;

export type AssetReloadResponse = unknown;

export type AssetShutdownResponse = unknown;

export interface AssetUpdateURLResponse {
  /**
   * Unique identifier for the Web Input.
   */
  id: string;

  /**
   * When set to `true` the Web Input will automatically launch and start streaming
   * immediately after creation
   */
  auto_launch: boolean;

  /**
   * Time the Web Input was created, defined as a Unix timestamp (seconds since
   * epoch).
   */
  created_at: string;

  /**
   * The Live Stream ID to broadcast this Web Input to
   */
  live_stream_id: string;

  /**
   * The resolution of the viewport of the Web Input's browser instance. Defaults to
   * 1920x1080 if not set.
   */
  resolution: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720';

  status: 'idle' | 'launching' | 'streaming';

  /**
   * The URL for the Web Input to load.
   */
  url: string;

  /**
   * Arbitrary metadata that will be included in the Web Input details and related
   * webhooks. Can be used to store your own ID for the Web Input. **Max: 255
   * characters**.
   */
  passthrough?: string;

  /**
   * The number of seconds that the Web Input should stream for before automatically
   * shutting down.
   */
  timeout?: number;
}

export interface AssetCreateParams {
  /**
   * The Live Stream ID to broadcast this Web Input to
   */
  live_stream_id: string;

  /**
   * The URL for the Web Input to load.
   */
  url: string;

  /**
   * Unique identifier for the Web Input.
   */
  id?: string;

  /**
   * When set to `true` the Web Input will automatically launch and start streaming
   * immediately after creation
   */
  auto_launch?: boolean;

  /**
   * Time the Web Input was created, defined as a Unix timestamp (seconds since
   * epoch).
   */
  created_at?: string;

  /**
   * Arbitrary metadata that will be included in the Web Input details and related
   * webhooks. Can be used to store your own ID for the Web Input. **Max: 255
   * characters**.
   */
  passthrough?: string;

  /**
   * The resolution of the viewport of the Web Input's browser instance. Defaults to
   * 1920x1080 if not set.
   */
  resolution?: '1920x1080' | '1280x720' | '1080x1920' | '720x1280' | '1080x1080' | '720x720';

  status?: 'idle' | 'launching' | 'streaming';

  /**
   * The number of seconds that the Web Input should stream for before automatically
   * shutting down.
   */
  timeout?: number;
}

export interface AssetListParams extends BasePageParams {}

export interface AssetUpdateURLParams {
  /**
   * The URL for the Web Input to load.
   */
  url: string;
}

export namespace Assets {
  export import AssetCreateResponse = AssetsAPI.AssetCreateResponse;
  export import AssetRetrieveResponse = AssetsAPI.AssetRetrieveResponse;
  export import AssetListResponse = AssetsAPI.AssetListResponse;
  export import AssetLaunchResponse = AssetsAPI.AssetLaunchResponse;
  export import AssetReloadResponse = AssetsAPI.AssetReloadResponse;
  export import AssetShutdownResponse = AssetsAPI.AssetShutdownResponse;
  export import AssetUpdateURLResponse = AssetsAPI.AssetUpdateURLResponse;
  export import AssetListResponsesBasePage = AssetsAPI.AssetListResponsesBasePage;
  export import AssetCreateParams = AssetsAPI.AssetCreateParams;
  export import AssetListParams = AssetsAPI.AssetListParams;
  export import AssetUpdateURLParams = AssetsAPI.AssetUpdateURLParams;
}
