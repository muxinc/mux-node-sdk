// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SigningKeysAPI from './signing-keys';
import {
  SigningKey,
  SigningKeyListParams,
  SigningKeyResponse,
  SigningKeys,
  SigningKeysBasePage,
} from './signing-keys';
import * as UsageExportsAPI from './usage-exports';
import {
  UsageExport,
  UsageExportListParams,
  UsageExports,
  UsageExportsMeta,
  UsageExportsResponse,
} from './usage-exports';
import * as UtilitiesAPI from './utilities';
import { Utilities, UtilityWhoamiResponse, WhoamiResponse } from './utilities';
import * as WebhooksAPI from './webhooks';
import {
  Webhook,
  WebhookCreateParams,
  WebhookListParams,
  WebhookResponse,
  WebhookUpdateParams,
  Webhooks,
  WebhooksBasePage,
} from './webhooks';

export class System extends APIResource {
  signingKeys: SigningKeysAPI.SigningKeys = new SigningKeysAPI.SigningKeys(this._client);
  utilities: UtilitiesAPI.Utilities = new UtilitiesAPI.Utilities(this._client);
  usageExports: UsageExportsAPI.UsageExports = new UsageExportsAPI.UsageExports(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
}

System.SigningKeys = SigningKeys;
System.Utilities = Utilities;
System.UsageExports = UsageExports;
System.Webhooks = Webhooks;

export declare namespace System {
  export {
    SigningKeys as SigningKeys,
    type SigningKey as SigningKey,
    type SigningKeyResponse as SigningKeyResponse,
    type SigningKeysBasePage as SigningKeysBasePage,
    type SigningKeyListParams as SigningKeyListParams,
  };

  export {
    Utilities as Utilities,
    type WhoamiResponse as WhoamiResponse,
    type UtilityWhoamiResponse as UtilityWhoamiResponse,
  };

  export {
    UsageExports as UsageExports,
    type UsageExport as UsageExport,
    type UsageExportsMeta as UsageExportsMeta,
    type UsageExportsResponse as UsageExportsResponse,
    type UsageExportListParams as UsageExportListParams,
  };

  export {
    Webhooks as Webhooks,
    type Webhook as Webhook,
    type WebhookResponse as WebhookResponse,
    type WebhooksBasePage as WebhooksBasePage,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookListParams as WebhookListParams,
    type WebhookUpdateParams as WebhookUpdateParams,
  };
}
