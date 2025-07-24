// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Utilities extends APIResource {
  /**
   * Retrieve information about your current access token, including organization,
   * environment, and permissions. Note that this can only be access with an access
   * token, and _all_ access tokens can access this route, regardless of what
   * permissions they have assigned.
   */
  whoami(options?: Core.RequestOptions): Core.APIPromise<UtilityWhoamiResponse> {
    return (
      this._client.get('/system/v1/whoami', {
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as Core.APIPromise<{ data: UtilityWhoamiResponse }>
    )._thenUnwrap((obj) => obj.data);
  }
}

export interface WhoamiResponse {
  data: UtilityWhoamiResponse;
}

export interface UtilityWhoamiResponse {
  access_token_name: string;

  environment_id: string;

  environment_name: string;

  environment_type: string;

  organization_id: string;

  organization_name: string;

  permissions: Array<string>;
}

export declare namespace Utilities {
  export { type WhoamiResponse as WhoamiResponse, type UtilityWhoamiResponse as UtilityWhoamiResponse };
}
