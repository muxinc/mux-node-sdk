// File generated from our OpenAPI spec by Stainless.

import * as Core from '@mux/mux-node/core';
import { APIResource } from '@mux/mux-node/resource';
import { isRequestOptions } from '@mux/mux-node/core';
import * as SigningKeysAPI from '@mux/mux-node/resources/system/signing-keys';
import { BasePage, type BasePageParams } from '@mux/mux-node/pagination';

export class SigningKeys extends APIResource {
  /**
   * Creates a new signing key pair. When creating a new signing key, the API will
   * generate a 2048-bit RSA key-pair and return the private key and a generated
   * key-id; the public key will be stored at Mux to validate signed tokens.
   */
  create(options?: Core.RequestOptions): Core.APIPromise<SigningKey> {
    return (
      this._client.post('/system/v1/signing-keys', options) as Core.APIPromise<{ data: SigningKey }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Retrieves the details of a signing key that has previously been created. Supply
   * the unique signing key ID that was returned from your previous request, and Mux
   * will return the corresponding signing key information. **The private key is not
   * returned in this response.**
   */
  retrieve(signingKeyId: string, options?: Core.RequestOptions): Core.APIPromise<SigningKey> {
    return (
      this._client.get(`/system/v1/signing-keys/${signingKeyId}`, options) as Core.APIPromise<{
        data: SigningKey;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Returns a list of signing keys.
   */
  list(
    query?: SigningKeyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SigningKeysBasePage, SigningKey>;
  list(options?: Core.RequestOptions): Core.PagePromise<SigningKeysBasePage, SigningKey>;
  list(
    query: SigningKeyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SigningKeysBasePage, SigningKey> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/system/v1/signing-keys', SigningKeysBasePage, { query, ...options });
  }

  /**
   * Deletes an existing signing key. Use with caution, as this will invalidate any
   * existing signatures and no JWTs can be signed using the key again.
   */
  delete(signingKeyId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/system/v1/signing-keys/${signingKeyId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class SigningKeysBasePage extends BasePage<SigningKey> {}

export interface SigningKey {
  /**
   * Unique identifier for the Signing Key.
   */
  id: string;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created_at: string;

  /**
   * A Base64 encoded private key that can be used with the RS256 algorithm when
   * creating a [JWT](https://jwt.io/). **Note that this value is only returned once
   * when creating a URL signing key.**
   */
  private_key?: string;
}

export interface SigningKeyResponse {
  data: SigningKey;
}

export interface SigningKeyListParams extends BasePageParams {}

export namespace SigningKeys {
  export import SigningKey = SigningKeysAPI.SigningKey;
  export import SigningKeyResponse = SigningKeysAPI.SigningKeyResponse;
  export import SigningKeysBasePage = SigningKeysAPI.SigningKeysBasePage;
  export import SigningKeyListParams = SigningKeysAPI.SigningKeyListParams;
}
