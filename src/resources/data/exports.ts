// File generated from our OpenAPI spec by Stainless.

import * as Core from '@mux/mux-node/core';
import { APIResource } from '@mux/mux-node/resource';
import * as API from './index';

export class Exports extends APIResource {
  /**
   * Lists the available video view exports along with URLs to retrieve them.
   */
  listVideoViews(options?: Core.RequestOptions): Promise<Core.APIResponse<VideoViewExportsResponse>> {
    return this.get('/data/v1/exports/views', options);
  }
}

export interface ExportsResponse {
  data: Array<string>;

  timeframe: Array<number>;

  total_row_count: number;
}

export interface VideoViewExportsResponse {
  data: Array<VideoViewExportsResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number;
}

export namespace VideoViewExportsResponse {
  export interface Data {
    export_date?: string;

    files?: Array<Data.File>;
  }

  export namespace Data {
    export interface File {
      path?: string;

      type?: string;

      version?: number;
    }
  }
}

export namespace Exports {
  export import ExportsResponse = API.ExportsResponse;
  export import VideoViewExportsResponse = API.VideoViewExportsResponse;
}
