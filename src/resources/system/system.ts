// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SigningKeysAPI from './signing-keys';

export class System extends APIResource {
  signingKeys: SigningKeysAPI.SigningKeys = new SigningKeysAPI.SigningKeys(this._client);
}

export namespace System {
  export import SigningKeys = SigningKeysAPI.SigningKeys;
  export import SigningKey = SigningKeysAPI.SigningKey;
  export import SigningKeyResponse = SigningKeysAPI.SigningKeyResponse;
  export import SigningKeysBasePage = SigningKeysAPI.SigningKeysBasePage;
  export import SigningKeyListParams = SigningKeysAPI.SigningKeyListParams;
}
