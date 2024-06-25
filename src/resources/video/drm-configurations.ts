// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@mux/mux-node/resource';
import { isRequestOptions } from '@mux/mux-node/core';
import * as Core from '@mux/mux-node/core';
import * as DRMConfigurationsAPI from '@mux/mux-node/resources/video/drm-configurations';
import { BasePage, type BasePageParams } from '@mux/mux-node/pagination';

export class DRMConfigurations extends APIResource {
  /**
   * Retrieves a single DRM Configuration.
   */
  retrieve(drmConfigurationId: string, options?: Core.RequestOptions): Core.APIPromise<DRMConfiguration> {
    return (
      this._client.get(`/video/v1/drm-configurations/${drmConfigurationId}`, options) as Core.APIPromise<{
        data: DRMConfiguration;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Returns a list of DRM Configurations
   */
  list(
    query?: DRMConfigurationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DRMConfigurationsBasePage, DRMConfiguration>;
  list(options?: Core.RequestOptions): Core.PagePromise<DRMConfigurationsBasePage, DRMConfiguration>;
  list(
    query: DRMConfigurationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DRMConfigurationsBasePage, DRMConfiguration> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/video/v1/drm-configurations', DRMConfigurationsBasePage, {
      query,
      ...options,
    });
  }
}

export class DRMConfigurationsBasePage extends BasePage<DRMConfiguration> {}

export interface DRMConfiguration {
  /**
   * Unique identifier for the DRM Configuration. Max 255 characters.
   */
  id: string;
}

export interface DRMConfigurationListParams extends BasePageParams {}

export namespace DRMConfigurations {
  export import DRMConfiguration = DRMConfigurationsAPI.DRMConfiguration;
  export import DRMConfigurationsBasePage = DRMConfigurationsAPI.DRMConfigurationsBasePage;
  export import DRMConfigurationListParams = DRMConfigurationsAPI.DRMConfigurationListParams;
}
