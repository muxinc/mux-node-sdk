// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobsAPI from './jobs/jobs';
import { JobCancelResponse, JobListParams, JobSummariesBasePage, JobSummary, Jobs } from './jobs/jobs';

export class Robots extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

Robots.Jobs = Jobs;

export declare namespace Robots {
  export {
    Jobs as Jobs,
    type JobSummary as JobSummary,
    type JobCancelResponse as JobCancelResponse,
    type JobSummariesBasePage as JobSummariesBasePage,
    type JobListParams as JobListParams,
  };
}
