// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WorkflowsAPI from './workflows';
import { Workflows } from './workflows';
import * as JobsAPI from './jobs/jobs';
import {
  JobCancelResponse,
  JobListParams,
  JobListResponse,
  JobListResponsesBasePage,
  Jobs,
} from './jobs/jobs';

export class Robots extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  workflows: WorkflowsAPI.Workflows = new WorkflowsAPI.Workflows(this._client);
}

Robots.Jobs = Jobs;
Robots.Workflows = Workflows;

export declare namespace Robots {
  export {
    Jobs as Jobs,
    type JobListResponse as JobListResponse,
    type JobCancelResponse as JobCancelResponse,
    type JobListResponsesBasePage as JobListResponsesBasePage,
    type JobListParams as JobListParams,
  };

  export { Workflows as Workflows };
}
