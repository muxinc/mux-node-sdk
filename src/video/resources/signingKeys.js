/*!
 * Mux Signing Keys
 * Copyright(c) 2018 Mux Inc.
 */
const Base = require('../../base');

/**
 * @private Base signing-key path for the Mux API
 * */
const PATH = '/video/v1/signing-keys';

/**
 * @private
 * Build the base asset path for the Mux API
 * */
const buildBasePath = keyId => `${PATH}/${keyId}`;

/**
 * Signing Key Class - Provides access to the Mux Video Signing Key API
 *
 * @example
 * const { Video } = new Mux(accessToken, secret);
 *
 * // Create a new signing key
 * Video.SigningKeys.create();
 */
class SigningKeys extends Base {
  /**
   * Creates a new Signing Key that can be used with the JWT module to sign URLs.
   * @extends Base
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Video } = muxClient;
   *
   * const signingKey = await Video.SigningKeys.create();
   *
   * @see https://docs.mux.com/v1/reference#url-signing-keys
   */
  create() {
    return this.http.post(PATH, {});
  }

  /**
   * Get a signing key. *Note* The private key is _not_ returned.
   * @param {string} keyId - The ID for the signing key
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Video } = new Mux(accessToken, secret);
   *
   * // Get an asset
   * Video.SigningKeys.get(keyId);
   *
   * @see https://docs.mux.com/v1/reference#retrieve-a-url-signing-key
   */
  get(keyId) {
    if (!keyId) {
      return Promise.reject(new Error('An signing key ID is required.'));
    }
    return this.http.get(buildBasePath(keyId));
  }

  /**
   * Delete a signing key
   * @param {string} keyId - The ID for the signing key
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Video } = new Mux(accessToken, secret);
   *
   * // Get an asset
   * Video.SigningKeys.del(keyId);
   *
   * @see https://docs.mux.com/v1/reference#delete-a-url-signing-key
   */
  del(keyId) {
    if (!keyId) {
      return Promise.reject(new Error('An signing key ID is required.'));
    }
    return this.http.delete(buildBasePath(keyId));
  }

  /**
   * List signing keys
   * @param {string} keyId - The ID for the signing key
   * @param {object} params - Object to include as query params
   * @param {number} params.limit - Number of signing keys to return in the response
   * @param {number} params.page - Page of signing keys to return (limit * page)
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Video } = new Mux(accessToken, secret);
   *
   * // Get an asset
   * Video.SigningKeys.list();
   *
   * @see https://docs.mux.com/v1/reference#list-url-signing-keys
   */
  list(params = {}) {
    return this.http.get(PATH, { params });
  }
}

module.exports = SigningKeys;
