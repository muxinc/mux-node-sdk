// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SigningKeysAPI from './signing-keys';

export class System extends APIResource {
  signingKeys: SigningKeysAPI.SigningKeys = new SigningKeysAPI.SigningKeys(this._client);
}

export namespace System {
  export import SigningKeys = SigningKeysAPI.SigningKeys;
  export type SigningKey = SigningKeysAPI.SigningKey;
  export type SigningKeyResponse = SigningKeysAPI.SigningKeyResponse;
  export import SigningKeysBasePage = SigningKeysAPI.SigningKeysBasePage;
  export type SigningKeyListParams = SigningKeysAPI.SigningKeyListParams;
}
