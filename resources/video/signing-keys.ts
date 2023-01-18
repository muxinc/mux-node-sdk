// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { BasePage, BasePageParams } from '~/pagination';

export class SigningKeys extends APIResource {
  /**
   * Creates a new signing key pair. When creating a new signing key, the API will
   * generate a 2048-bit RSA key-pair and return the private key and a generated
   * key-id; the public key will be stored at Mux to validate signed tokens.
   */
  async create(options?: Core.RequestOptions): Promise<SigningKey> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.post('/video/v1/signing-keys', options)) as any;
    return response.data;
  }

  /**
   * Retrieves the details of a URL signing key that has previously been created.
   * Supply the unique signing key ID that was returned from your previous request,
   * and Mux will return the corresponding signing key information. **The private key
   * is not returned in this response.**
   */
  async retrieve(signingKeyId: string, options?: Core.RequestOptions): Promise<SigningKey> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.get(`/video/v1/signing-keys/${signingKeyId}`, options)) as any;
    return response.data;
  }

  /**
   * Returns a list of URL signing keys.
   */
  list(query?: SigningKeyListParams, options?: Core.RequestOptions): Core.PagePromise<SigningKeysBasePage>;
  list(options?: Core.RequestOptions): Core.PagePromise<SigningKeysBasePage>;
  list(
    query: SigningKeyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SigningKeysBasePage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/video/v1/signing-keys', SigningKeysBasePage, { query, ...options });
  }

  /**
   * Deletes an existing signing key. Use with caution, as this will invalidate any
   * existing signatures and no URLs can be signed using the key again.
   */
  del(signingKeyId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>> {
    return this.delete(`/video/v1/signing-keys/${signingKeyId}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }
}

export class SigningKeysBasePage extends BasePage<SigningKey> {}

export interface SigningKey {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created_at?: string;

  /**
   * Unique identifier for the Signing Key.
   */
  id?: string;

  /**
   * A Base64 encoded private key that can be used with the RS256 algorithm when
   * creating a [JWT](https://jwt.io/). **Note that this value is only returned once
   * when creating a URL signing key.**
   */
  private_key?: string;
}

export interface SigningKeyResponse {
  data?: SigningKey;
}

export interface SigningKeyListParams extends BasePageParams {}
