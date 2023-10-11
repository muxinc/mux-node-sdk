// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '@mux/mux-node/resource';
import * as SigningKeysAPI from '@mux/mux-node/resources/system/signing-keys';

export class System extends APIResource {
  signingKeys: SigningKeysAPI.SigningKeys = new SigningKeysAPI.SigningKeys(this.client);
}

export namespace System {
  export import SigningKeys = SigningKeysAPI.SigningKeys;
  export import SigningKey = SigningKeysAPI.SigningKey;
  export import SigningKeyResponse = SigningKeysAPI.SigningKeyResponse;
  export import SigningKeysBasePage = SigningKeysAPI.SigningKeysBasePage;
  export import SigningKeyListParams = SigningKeysAPI.SigningKeyListParams;
}
