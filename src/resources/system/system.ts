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
import * as UtilitiesAPI from './utilities';
import { Utilities, UtilityWhoamiResponse, WhoamiResponse } from './utilities';

export class System extends APIResource {
  signingKeys: SigningKeysAPI.SigningKeys = new SigningKeysAPI.SigningKeys(this._client);
  utilities: UtilitiesAPI.Utilities = new UtilitiesAPI.Utilities(this._client);
}

System.SigningKeys = SigningKeys;
System.SigningKeysBasePage = SigningKeysBasePage;
System.Utilities = Utilities;

export declare namespace System {
  export {
    SigningKeys as SigningKeys,
    type SigningKey as SigningKey,
    type SigningKeyResponse as SigningKeyResponse,
    SigningKeysBasePage as SigningKeysBasePage,
    type SigningKeyListParams as SigningKeyListParams,
  };

  export {
    Utilities as Utilities,
    type WhoamiResponse as WhoamiResponse,
    type UtilityWhoamiResponse as UtilityWhoamiResponse,
  };
}
