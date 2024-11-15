// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Exports extends APIResource {
  /**
   * Lists the available video view exports along with URLs to retrieve them.
   */
  listVideoViews(options?: Core.RequestOptions): Core.APIPromise<VideoViewExportsResponse> {
    return this._client.get('/data/v1/exports/views', options);
  }
}

export interface ExportsResponse {
  data: Array<string>;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export interface VideoViewExportsResponse {
  data: Array<VideoViewExportsResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number | null;
}

export namespace VideoViewExportsResponse {
  export interface Data {
    export_date: string;

    files: Array<Data.File>;
  }

  export namespace Data {
    export interface File {
      path: string;

      type: string;

      version: number;
    }
  }
}

export declare namespace Exports {
  export {
    type ExportsResponse as ExportsResponse,
    type VideoViewExportsResponse as VideoViewExportsResponse,
  };
}
