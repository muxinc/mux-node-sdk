// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { SigningKeys } from './signing-keys';

export class System extends APIResource {
  signingKeys: SigningKeys = new SigningKeys(this.client);
}
