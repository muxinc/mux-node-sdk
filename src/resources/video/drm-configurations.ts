// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { BasePage, type BasePageParams } from '../../pagination';

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

DRMConfigurations.DRMConfigurationsBasePage = DRMConfigurationsBasePage;

export declare namespace DRMConfigurations {
  export {
    type DRMConfiguration as DRMConfiguration,
    DRMConfigurationsBasePage as DRMConfigurationsBasePage,
    type DRMConfigurationListParams as DRMConfigurationListParams,
  };
}
