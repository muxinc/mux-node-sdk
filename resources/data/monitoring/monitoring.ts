// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { Metrics } from './metrics';

export class Monitoring extends APIResource {
  metrics: Metrics = new Metrics(this.client);

  /**
   * Lists available monitoring dimensions.
   */
  listDimensions(options?: Core.RequestOptions): Promise<Core.APIResponse<MonitoringListDimensionsResponse>> {
    return this.get('/data/v1/monitoring/dimensions', options);
  }
}

export interface MonitoringListDimensionsResponse {
  data: Array<MonitoringListDimensionsResponse.Data>;

  timeframe: Array<number>;

  total_row_count: number;
}

export namespace MonitoringListDimensionsResponse {
  export interface Data {
    display_name?: string;

    name?: string;
  }
}
