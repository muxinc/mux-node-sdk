// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { Dimensions } from './dimensions';
import { Monitoring } from './monitoring/monitoring';
import { Errors } from './errors';
import { Exports } from './exports';
import { Filters } from './filters';
import { Incidents } from './incidents';
import { Metrics } from './metrics';
import { RealTime } from './real-time';
import { VideoViews } from './video-views';

export class Data extends APIResource {
  dimensions: Dimensions = new Dimensions(this.client);
  monitoring: Monitoring = new Monitoring(this.client);
  errors: Errors = new Errors(this.client);
  exports: Exports = new Exports(this.client);
  filters: Filters = new Filters(this.client);
  incidents: Incidents = new Incidents(this.client);
  metrics: Metrics = new Metrics(this.client);
  realTime: RealTime = new RealTime(this.client);
  videoViews: VideoViews = new VideoViews(this.client);
}
