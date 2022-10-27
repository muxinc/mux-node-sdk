// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { BasePage, BasePageParams } from '~/pagination';
import * as Shared from '~/resources/shared';

export class Uploads extends APIResource {
  /**
   * Creates a new direct upload, through which video content can be uploaded for
   * ingest to Mux.
   */
  async create(body: UploadCreateParams, options?: Core.RequestOptions): Promise<Upload> {
    const response = await this.post<any, any>('/video/v1/uploads', { body, ...options });
    return response.data;
  }

  /**
   * Fetches information about a single direct upload in the current environment.
   */
  async retrieve(uploadId: string, options?: Core.RequestOptions): Promise<Upload> {
    const response = await this.get<any, any>(`/video/v1/uploads/${uploadId}`, options);
    return response.data;
  }

  /**
   * Lists currently extant direct uploads in the current environment.
   */
  list(query?: UploadListParams, options?: Core.RequestOptions): Core.PagePromise<UploadsBasePage>;
  list(options?: Core.RequestOptions): Core.PagePromise<UploadsBasePage>;
  list(
    query: UploadListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<UploadsBasePage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/video/v1/uploads', UploadsBasePage, { query, ...options });
  }

  /**
   * Cancels a direct upload and marks it as cancelled. If a pending upload finishes
   * after this request, no asset will be created. This request will only succeed if
   * the upload is still in the `waiting` state.
   */
  async cancel(uploadId: string, options?: Core.RequestOptions): Promise<Upload> {
    const response = await this.put<any, any>(`/video/v1/uploads/${uploadId}/cancel`, options);
    return response.data;
  }
}

export class UploadsBasePage extends BasePage<Upload> {}

export interface Upload {
  /**
   * Only set once the upload is in the `asset_created` state.
   */
  asset_id?: string;

  /**
   * If the upload URL will be used in a browser, you must specify the origin in
   * order for the signed URL to have the correct CORS headers.
   */
  cors_origin?: string;

  /**
   * Only set if an error occurred during asset creation.
   */
  error?: Upload.Error;

  /**
   * Unique identifier for the Direct Upload.
   */
  id?: string;

  new_asset_settings?: Shared.Asset;

  status?: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out';

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

  /**
   * The URL to upload the associated source media to.
   */
  url?: string;
}

export namespace Upload {
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

export interface UploadParams {
  new_asset_settings: Shared.CreateAssetParams;

  /**
   * If the upload URL will be used in a browser, you must specify the origin in
   * order for the signed URL to have the correct CORS headers.
   */
  cors_origin?: string;

  test?: boolean;

  /**
   * Max time in seconds for the signed upload URL to be valid. If a successful
   * upload has not occurred before the timeout limit, the direct upload is marked
   * `timed_out`
   */
  timeout?: number;
}

export interface UploadResponse {
  data?: Upload;
}

export interface UploadCreateParams {
  new_asset_settings: Shared.CreateAssetParams;

  /**
   * If the upload URL will be used in a browser, you must specify the origin in
   * order for the signed URL to have the correct CORS headers.
   */
  cors_origin?: string;

  test?: boolean;

  /**
   * Max time in seconds for the signed upload URL to be valid. If a successful
   * upload has not occurred before the timeout limit, the direct upload is marked
   * `timed_out`
   */
  timeout?: number;
}

export interface UploadListParams extends BasePageParams {}
