/*!
 * Mux Signing Keys
 * Copyright(c) 2018 Mux Inc.
 */
import { Base } from '../../base';
import { SigningKey } from '../domain';
/**
 * Signing Key Class - Provides access to the Mux Video Signing Key API
 *
 * @example
 * const { Video } = new Mux(accessToken, secret);
 *
 * // Create a new signing key
 * Video.SigningKeys.create();
 */
export declare class SigningKeys extends Base {
    /**
     * Creates a new Signing Key that can be used with the JWT module to sign URLs.
     * @extends Base
     * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
     *
     * @example
     * const muxClient = new Mux(accessToken, secret);
     * const { Video } = muxClient;
     *
     * // Create a new signing key
     * Video.SigningKeys.create();
     *
     * @see https://docs.mux.com/api-reference/video#operation/create-url-signing-key
     */
    create(): Promise<SigningKey>;
    /**
     * Get a signing key. *Note* The private key is _not_ returned.
     * @param {string} keyId - The ID for the signing key
     * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
     *
     * @example
     * const { Video } = new Mux(accessToken, secret);
     *
     * // Get a signing key
     * Video.SigningKeys.get(keyId);
     *
     * @see https://docs.mux.com/api-reference/video#operation/get-url-signing-key
     */
    get(keyId: string): Promise<SigningKey>;
    /**
     * Delete a signing key
     * @param {string} keyId - The ID for the signing key
     * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
     *
     * @example
     * const { Video } = new Mux(accessToken, secret);
     *
     * // Delete a signing key
     * Video.SigningKeys.del(keyId);
     *
     * @see https://docs.mux.com/api-reference/video#operation/delete-url-signing-key
     */
    del(keyId: string): Promise<any>;
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
     * // List all signing keys
     * Video.SigningKeys.list();
     *
     * @see https://docs.mux.com/api-reference/video#operation/list-url-signing-keys
     */
    list(params?: {}): Promise<Array<SigningKey>>;
}
