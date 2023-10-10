// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '@mux/mux-node/resource';
import * as SigningKeysAPI from '@mux/mux-node/resources/system/signing-keys';

export class System extends APIResource {
  signingKeys: SigningKeysAPI.SigningKeys = new SigningKeysAPI.SigningKeys(this.client);
}

export namespace System {
  export import SigningKeys = SigningKeysAPI.SigningKeys;
  export type SigningKey = SigningKeysAPI.SigningKey;
  export type SigningKeyResponse = SigningKeysAPI.SigningKeyResponse;
  export import SigningKeysBasePage = SigningKeysAPI.SigningKeysBasePage;
  export type SigningKeyListParams = SigningKeysAPI.SigningKeyListParams;
}
