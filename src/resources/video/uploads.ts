// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AssetsAPI from './assets';
import { BasePage, type BasePageParams } from '../../pagination';

export class Uploads extends APIResource {
  /**
   * Creates a new direct upload, through which video content can be uploaded for
   * ingest to Mux.
   */
  create(body: UploadCreateParams, options?: Core.RequestOptions): Core.APIPromise<Upload> {
    return (
      this._client.post('/video/v1/uploads', { body, ...options }) as Core.APIPromise<{ data: Upload }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Fetches information about a single direct upload in the current environment.
   */
  retrieve(uploadId: string, options?: Core.RequestOptions): Core.APIPromise<Upload> {
    return (
      this._client.get(`/video/v1/uploads/${uploadId}`, options) as Core.APIPromise<{ data: Upload }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Lists direct uploads in the current environment.
   */
  list(query?: UploadListParams, options?: Core.RequestOptions): Core.PagePromise<UploadsBasePage, Upload>;
  list(options?: Core.RequestOptions): Core.PagePromise<UploadsBasePage, Upload>;
  list(
    query: UploadListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<UploadsBasePage, Upload> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/video/v1/uploads', UploadsBasePage, { query, ...options });
  }

  /**
   * Cancels a direct upload and marks it as cancelled. If a pending upload finishes
   * after this request, no asset will be created. This request will only succeed if
   * the upload is still in the `waiting` state.
   */
  cancel(uploadId: string, options?: Core.RequestOptions): Core.APIPromise<Upload> {
    return (
      this._client.put(`/video/v1/uploads/${uploadId}/cancel`, options) as Core.APIPromise<{ data: Upload }>
    )._thenUnwrap((obj) => obj.data);
  }
}

export class UploadsBasePage extends BasePage<Upload> {}

export interface Upload {
  /**
   * Unique identifier for the Direct Upload.
   */
  id: string;

  /**
   * If the upload URL will be used in a browser, you must specify the origin in
   * order for the signed URL to have the correct CORS headers.
   */
  cors_origin: string;

  status: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out';

  /**
   * Max time in seconds for the signed upload URL to be valid. If a successful
   * upload has not occurred before the timeout limit, the direct upload is marked
   * `timed_out`
   */
  timeout: number;

  /**
   * The URL to upload the associated source media to.
   */
  url: string;

  /**
   * Only set once the upload is in the `asset_created` state.
   */
  asset_id?: string;

  /**
   * Only set if an error occurred during asset creation.
   */
  error?: Upload.Error;

  new_asset_settings?: AssetsAPI.AssetOptions;

  /**
   * Indicates if this is a test Direct Upload, in which case the Asset that gets
   * created will be a `test` Asset.
   */
  test?: boolean;
}

export namespace Upload {
  /**
   * Only set if an error occurred during asset creation.
   */
  export interface Error {
    /**
     * Human readable error message
     */
    message?: string;

    /**
     * Label for the specific error
     */
    type?: string;
  }
}

export interface UploadResponse {
  data: Upload;
}

export interface UploadCreateParams {
  /**
   * If the upload URL will be used in a browser, you must specify the origin in
   * order for the signed URL to have the correct CORS headers.
   */
  cors_origin: string;

  new_asset_settings?: AssetsAPI.AssetOptions;

  /**
   * Indicates if this is a test Direct Upload, in which case the Asset that gets
   * created will be a `test` Asset.
   */
  test?: boolean;

  /**
   * Max time in seconds for the signed upload URL to be valid. If a successful
   * upload has not occurred before the timeout limit, the direct upload is marked
   * `timed_out`
   */
  timeout?: number;
}

export interface UploadListParams extends BasePageParams {}

Uploads.UploadsBasePage = UploadsBasePage;

export declare namespace Uploads {
  export {
    type Upload as Upload,
    type UploadResponse as UploadResponse,
    UploadsBasePage as UploadsBasePage,
    type UploadCreateParams as UploadCreateParams,
    type UploadListParams as UploadListParams,
  };
}
