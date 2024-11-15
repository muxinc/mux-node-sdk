// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SigningKeysAPI from './signing-keys';
import {
  SigningKey,
  SigningKeyListParams,
  SigningKeyResponse,
  SigningKeys,
  SigningKeysBasePage,
} from './signing-keys';

export class System extends APIResource {
  signingKeys: SigningKeysAPI.SigningKeys = new SigningKeysAPI.SigningKeys(this._client);
}

System.SigningKeys = SigningKeys;
System.SigningKeysBasePage = SigningKeysBasePage;

export declare namespace System {
  export {
    SigningKeys as SigningKeys,
    type SigningKey as SigningKey,
    type SigningKeyResponse as SigningKeyResponse,
    SigningKeysBasePage as SigningKeysBasePage,
    type SigningKeyListParams as SigningKeyListParams,
  };
}
