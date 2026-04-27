// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobsAPI from './jobs/jobs';
import { JobError, JobListParams, JobStatus, JobSummariesBasePage, JobSummary, Jobs } from './jobs/jobs';

export class RobotsPreview extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

RobotsPreview.Jobs = Jobs;

export declare namespace RobotsPreview {
  export {
    Jobs as Jobs,
    type JobError as JobError,
    type JobStatus as JobStatus,
    type JobSummary as JobSummary,
    type JobSummariesBasePage as JobSummariesBasePage,
    type JobListParams as JobListParams,
  };
}
