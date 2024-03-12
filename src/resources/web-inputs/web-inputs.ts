// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '@mux/mux-node/resource';
import * as AssetsAPI from '@mux/mux-node/resources/web-inputs/assets';

export class WebInputs extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
}

export namespace WebInputs {
  export import Assets = AssetsAPI.Assets;
  export import AssetCreateResponse = AssetsAPI.AssetCreateResponse;
  export import AssetRetrieveResponse = AssetsAPI.AssetRetrieveResponse;
  export import AssetListResponse = AssetsAPI.AssetListResponse;
  export import AssetLaunchResponse = AssetsAPI.AssetLaunchResponse;
  export import AssetReloadResponse = AssetsAPI.AssetReloadResponse;
  export import AssetShutdownResponse = AssetsAPI.AssetShutdownResponse;
  export import AssetUpdateURLResponse = AssetsAPI.AssetUpdateURLResponse;
  export import AssetListResponsesBasePage = AssetsAPI.AssetListResponsesBasePage;
  export import AssetCreateParams = AssetsAPI.AssetCreateParams;
  export import AssetListParams = AssetsAPI.AssetListParams;
  export import AssetUpdateURLParams = AssetsAPI.AssetUpdateURLParams;
}
