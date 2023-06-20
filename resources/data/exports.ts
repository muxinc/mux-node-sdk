// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as API from './';

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

export namespace Exports {
  export import ExportsResponse = API.ExportsResponse;
  export import VideoViewExportsResponse = API.VideoViewExportsResponse;
}
