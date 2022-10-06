// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class Exports extends APIResource {
  /**
   * The API has been replaced by the list-exports-views API call.
   *
   * Lists the available video view exports along with URLs to retrieve them.
   */
  list(options?: Core.RequestOptions): Promise<Core.APIResponse<ListExportsResponse>> {
    return this.get('/data/v1/exports', options);
  }

  /**
   * Lists the available video view exports along with URLs to retrieve them.
   */
  listVideoViews(options?: Core.RequestOptions): Promise<Core.APIResponse<ListVideoViewExportsResponse>> {
    return this.get('/data/v1/exports/views', options);
  }
}

export interface ListExportsResponse {
  data?: Array<string>;

  timeframe?: Array<number>;

  total_row_count?: number;
}

export interface ListVideoViewExportsResponse {
  data?: Array<ListVideoViewExportsResponse.Data>;

  timeframe?: Array<number>;

  total_row_count?: number;
}

export namespace ListVideoViewExportsResponse {
  export interface Data {
    export_date?: string;

    files?: Array<Data.Files>;
  }

  export namespace Data {
    export interface Files {
      path?: string;

      type?: string;

      version?: number;
    }
  }
}
