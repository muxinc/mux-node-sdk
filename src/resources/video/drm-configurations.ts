// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@mux/mux-node/core';
import { APIResource } from '@mux/mux-node/resource';
import { isRequestOptions } from '@mux/mux-node/core';
import * as DrmConfigurationsAPI from '@mux/mux-node/resources/video/drm-configurations';
import { BasePage, type BasePageParams } from '@mux/mux-node/pagination';

export class DrmConfigurations extends APIResource {
  /**
   * Retrieves a single DRM Configuration.
   */
  retrieve(drmConfigurationId: string, options?: Core.RequestOptions): Core.APIPromise<DrmConfiguration> {
    return (
      this._client.get(`/video/v1/drm-configurations/${drmConfigurationId}`, options) as Core.APIPromise<{
        data: DrmConfiguration;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Returns a list of DRM Configurations
   */
  list(
    query?: DrmConfigurationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DrmConfigurationsBasePage, DrmConfiguration>;
  list(options?: Core.RequestOptions): Core.PagePromise<DrmConfigurationsBasePage, DrmConfiguration>;
  list(
    query: DrmConfigurationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DrmConfigurationsBasePage, DrmConfiguration> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/video/v1/drm-configurations', DrmConfigurationsBasePage, {
      query,
      ...options,
    });
  }
}

export class DrmConfigurationsBasePage extends BasePage<DrmConfiguration> {}

export interface DrmConfiguration {
  /**
   * Unique identifier for the DRM Configuration. Max 255 characters.
   */
  id: string;
}

export interface DrmConfigurationListParams extends BasePageParams {}

export namespace DrmConfigurations {
  export import DrmConfiguration = DrmConfigurationsAPI.DrmConfiguration;
  export import DrmConfigurationsBasePage = DrmConfigurationsAPI.DrmConfigurationsBasePage;
  export import DrmConfigurationListParams = DrmConfigurationsAPI.DrmConfigurationListParams;
}
