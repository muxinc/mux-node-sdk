// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '@mux/mux-node/resource';
import { SigningKeys } from './signing-keys';
import * as API from './index';

export class System extends APIResource {
  signingKeys: SigningKeys = new SigningKeys(this.client);
}

export namespace System {
  export import SigningKeys = API.SigningKeys;
  export import SigningKey = API.SigningKey;
  export import SigningKeyResponse = API.SigningKeyResponse;
  export import SigningKeysBasePage = API.SigningKeysBasePage;
  export import SigningKeyListParams = API.SigningKeyListParams;
}
