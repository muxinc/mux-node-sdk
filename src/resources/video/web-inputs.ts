// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { BasePage, type BasePageParams } from '../../pagination';

export class WebInputs extends APIResource {
  /**
   * Create a new Web Input
   */
  create(body: WebInputCreateParams, options?: Core.RequestOptions): Core.APIPromise<WebInputCreateResponse> {
    return (
      this._client.post('/video/v1/web-inputs', { body, ...options }) as Core.APIPromise<{
        data: WebInputCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Retrieve a single Web Input's info
   */
  retrieve(webInputId: string, options?: Core.RequestOptions): Core.APIPromise<WebInputRetrieveResponse> {
    return (
      this._client.get(`/video/v1/web-inputs/${webInputId}`, options) as Core.APIPromise<{
        data: WebInputRetrieveResponse;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * List Web Inputs
   */
  list(
    query?: WebInputListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<WebInputListResponsesBasePage, WebInputListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<WebInputListResponsesBasePage, WebInputListResponse>;
  list(
    query: WebInputListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<WebInputListResponsesBasePage, WebInputListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/video/v1/web-inputs', WebInputListResponsesBasePage, {
      query,
      ...options,
    });
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
  launch(webInputId: string, options?: Core.RequestOptions): Core.APIPromise<WebInputLaunchResponse> {
    return (
      this._client.put(`/video/v1/web-inputs/${webInputId}/launch`, options) as Core.APIPromise<{
        data: WebInputLaunchResponse;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Reloads the page that a Web Input is displaying.
   *
   * Note: Using this when the Web Input is streaming will display the page
   * reloading.
   */
  reload(webInputId: string, options?: Core.RequestOptions): Core.APIPromise<WebInputReloadResponse> {
    return (
      this._client.put(`/video/v1/web-inputs/${webInputId}/reload`, options) as Core.APIPromise<{
        data: WebInputReloadResponse;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Ends streaming to the specified Live Stream, and then shuts down the Web Input
   * browser instance.
   */
  shutdown(webInputId: string, options?: Core.RequestOptions): Core.APIPromise<WebInputShutdownResponse> {
    return (
      this._client.put(`/video/v1/web-inputs/${webInputId}/shutdown`, options) as Core.APIPromise<{
        data: WebInputShutdownResponse;
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
    body: WebInputUpdateURLParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebInputUpdateURLResponse> {
    return (
      this._client.put(`/video/v1/web-inputs/${webInputId}/url`, { body, ...options }) as Core.APIPromise<{
        data: WebInputUpdateURLResponse;
      }>
    )._thenUnwrap((obj) => obj.data);
  }
}

export class WebInputListResponsesBasePage extends BasePage<WebInputListResponse> {}

export interface WebInputCreateResponse {
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

export interface WebInputRetrieveResponse {
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

export interface WebInputListResponse {
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

export type WebInputLaunchResponse = unknown;

export type WebInputReloadResponse = unknown;

export type WebInputShutdownResponse = unknown;

export interface WebInputUpdateURLResponse {
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

export interface WebInputCreateParams {
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

export interface WebInputListParams extends BasePageParams {}

export interface WebInputUpdateURLParams {
  /**
   * The URL for the Web Input to load.
   */
  url: string;
}

WebInputs.WebInputListResponsesBasePage = WebInputListResponsesBasePage;

export declare namespace WebInputs {
  export {
    type WebInputCreateResponse as WebInputCreateResponse,
    type WebInputRetrieveResponse as WebInputRetrieveResponse,
    type WebInputListResponse as WebInputListResponse,
    type WebInputLaunchResponse as WebInputLaunchResponse,
    type WebInputReloadResponse as WebInputReloadResponse,
    type WebInputShutdownResponse as WebInputShutdownResponse,
    type WebInputUpdateURLResponse as WebInputUpdateURLResponse,
    WebInputListResponsesBasePage as WebInputListResponsesBasePage,
    type WebInputCreateParams as WebInputCreateParams,
    type WebInputListParams as WebInputListParams,
    type WebInputUpdateURLParams as WebInputUpdateURLParams,
  };
}
