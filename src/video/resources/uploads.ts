/*!
 * Mux Assets
 * Copyright(c) 2018 Mux Inc.
 */
import { Base } from '../../base.js';
import { CreateUploadParams, ListUploadParams, Upload } from '../domain.js';

/**
 * @private Base asset path for the Mux API
 * */
const PATH = '/video/v1/uploads';

/**
 * @private
 * Build the base asset path for the Mux API
 * */
const buildBasePath = (uploadId: string) => `${PATH}/${uploadId}`;

/**
 * Uploads Class - Provides access to the Mux Video Uploads API
 *
 * @example
 * const { Video } = new Mux(accessToken, secret);
 *
 * // Create an upload
 * Video.Uploads.create({ new_asset_settings: { playback_policy: 'public' } });
 */
export class Uploads extends Base {
  /**
   * Creates a direct upload with the specified JSON parameters
   * @extends Base
   * @param {Object} params - Upload JSON parameters (e.g timeout)
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * // Create a new upload
   * const upload = await Video.Uploads.create({new_asset_settings: {playback_policy: 'public'}});
   * // Now push a file to the URL returned.
   * fs.createReadStream(pathToFile).pipe(request.put(upload.url))
   *
   * @see https://docs.mux.com/api-reference/video#operation/create-direct-upload
   */
  create(params: CreateUploadParams): Promise<Upload> {
    if (!params) {
      return Promise.reject(
        new Error('Params are required for creating a direct upload')
      );
    }

    return this.http.post(PATH, params);
  }

  /**
   * Cancels an upload
   * @param {string} uploadId - The ID for the upload intended for cancellation
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Video } = new Mux(accessToken, secret);
   *
   * // Cancels an upload
   * Video.Uploads.cancel(uploadId);
   *
   * @see https://docs.mux.com/api-reference/video#operation/cancel-direct-upload
   */
  cancel(uploadId: string): Promise<any> {
    if (!uploadId) {
      return Promise.reject(new Error('An upload ID is required'));
    }
    return this.http.put(`${buildBasePath(uploadId)}/cancel`);
  }

  /**
   * Get an upload
   * @param {string} uploadId - The ID for the upload
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Video } = new Mux(accessToken, secret);
   *
   * // Get an upload
   * Video.Uploads.get(uploadId);
   *
   * @see https://docs.mux.com/api-reference/video#operation/get-direct-upload
   */
  get(uploadId: string): Promise<Upload> {
    if (!uploadId) {
      return Promise.reject(
        new Error('An upload ID is required to get an asset')
      );
    }
    return this.http.get(buildBasePath(uploadId));
  }

  /**
   * List all uploads
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Video } = new Mux(accessToken, secret);
   *
   * // List all uploads
   * Video.Uploads.list();
   *
   * @see https://docs.mux.com/api-reference/video#operation/list-direct-uploads
   */
  list(params: ListUploadParams): Promise<Array<Upload>> {
    return this.http.get(PATH, { params });
  }
}
