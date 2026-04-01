// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AskQuestionsAPI from './ask-questions';
import {
  AskQuestionCreateParams,
  AskQuestions,
  AskQuestionsJob,
  AskQuestionsJobOutputs,
  AskQuestionsJobParameters,
} from './ask-questions';
import * as FindKeyMomentsAPI from './find-key-moments';
import {
  FindKeyMomentCreateParams,
  FindKeyMoments,
  FindKeyMomentsJob,
  FindKeyMomentsJobOutputs,
  FindKeyMomentsJobParameters,
} from './find-key-moments';
import * as GenerateChaptersAPI from './generate-chapters';
import {
  GenerateChapterCreateParams,
  GenerateChapters,
  GenerateChaptersJob,
  GenerateChaptersJobOutputs,
  GenerateChaptersJobParameters,
} from './generate-chapters';
import * as ModerateAPI from './moderate';
import {
  Moderate,
  ModerateCreateParams,
  ModerateJob,
  ModerateJobOutputs,
  ModerateJobParameters,
} from './moderate';
import * as SummarizeAPI from './summarize';
import {
  Summarize,
  SummarizeCreateParams,
  SummarizeJob,
  SummarizeJobOutputs,
  SummarizeJobParameters,
} from './summarize';
import * as TranslateCaptionsAPI from './translate-captions';
import {
  TranslateCaptionCreateParams,
  TranslateCaptions,
  TranslateCaptionsJob,
  TranslateCaptionsJobOutputs,
  TranslateCaptionsJobParameters,
} from './translate-captions';
import { APIPromise } from '../../../core/api-promise';
import { BasePage, type BasePageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, cancel, and delete jobs across all workflows.
 */
export class Jobs extends APIResource {
  askQuestions: AskQuestionsAPI.AskQuestions = new AskQuestionsAPI.AskQuestions(this._client);
  generateChapters: GenerateChaptersAPI.GenerateChapters = new GenerateChaptersAPI.GenerateChapters(
    this._client,
  );
  findKeyMoments: FindKeyMomentsAPI.FindKeyMoments = new FindKeyMomentsAPI.FindKeyMoments(this._client);
  moderate: ModerateAPI.Moderate = new ModerateAPI.Moderate(this._client);
  summarize: SummarizeAPI.Summarize = new SummarizeAPI.Summarize(this._client);
  translateCaptions: TranslateCaptionsAPI.TranslateCaptions = new TranslateCaptionsAPI.TranslateCaptions(
    this._client,
  );

  /**
   * Returns a paginated list of Robots jobs, with optional filters for workflow,
   * status, and asset_id.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const jobSummary of client.robots.jobs.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: JobListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<JobSummariesBasePage, JobSummary> {
    return this._client.getAPIList('/robots/v1/jobs', BasePage<JobSummary>, {
      query,
      defaultBaseURL: 'https://api.mux.com',
      ...options,
    });
  }

  /**
   * Permanently deletes a job and its associated data.
   *
   * @example
   * ```ts
   * await client.robots.jobs.delete(
   *   'rjob_E6fdcD7d-cDdf-baAa-b31A-1ae5A92d336F',
   * );
   * ```
   */
  delete(jobID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/robots/v1/jobs/${jobID}`, {
      defaultBaseURL: 'https://api.mux.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Cancels a job that is currently pending or processing.
   *
   * @example
   * ```ts
   * const response = await client.robots.jobs.cancel(
   *   'rjob_E6fdcD7d-cDdf-baAa-b31A-1ae5A92d336F',
   * );
   * ```
   */
  cancel(jobID: string, options?: RequestOptions): APIPromise<JobCancelResponse> {
    return (
      this._client.post(path`/robots/v1/jobs/${jobID}/cancel`, {
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: JobCancelResponse }>
    )._thenUnwrap((obj) => obj.data);
  }
}

export type JobSummariesBasePage = BasePage<JobSummary>;

export interface JobError {
  /**
   * Human-readable error message.
   */
  message: string;

  /**
   * Error category identifier.
   */
  type: string;
}

/**
 * Current job status.
 */
export type JobStatus = 'pending' | 'processing' | 'completed' | 'errored' | 'cancelled';

export interface JobSummary {
  /**
   * Unique job identifier.
   */
  id: string;

  /**
   * Hypermedia links for this job.
   */
  _links: JobSummary._Links;

  /**
   * Unix timestamp (seconds) when the job was created.
   */
  created_at: number;

  /**
   * Current job status.
   */
  status: JobStatus;

  /**
   * Unix timestamp (seconds) when the job was last updated.
   */
  updated_at: number;

  /**
   * Workflow type that created this job.
   */
  workflow:
    | 'summarize'
    | 'moderate'
    | 'generate-chapters'
    | 'translate-captions'
    | 'ask-questions'
    | 'find-key-moments';
}

export namespace JobSummary {
  /**
   * Hypermedia links for this job.
   */
  export interface _Links {
    self: _Links.Self;
  }

  export namespace _Links {
    export interface Self {
      /**
       * URL to this resource.
       */
      href: string;
    }
  }
}

export type JobCancelResponse = unknown;

export interface JobListParams extends BasePageParams {
  /**
   * Filter by Mux asset ID
   */
  asset_id?: string;

  /**
   * Filter by job status
   */
  status?: JobStatus;

  /**
   * Filter by workflow name
   */
  workflow?:
    | 'summarize'
    | 'moderate'
    | 'generate-chapters'
    | 'translate-captions'
    | 'ask-questions'
    | 'find-key-moments';
}

Jobs.AskQuestions = AskQuestions;
Jobs.GenerateChapters = GenerateChapters;
Jobs.FindKeyMoments = FindKeyMoments;
Jobs.Moderate = Moderate;
Jobs.Summarize = Summarize;
Jobs.TranslateCaptions = TranslateCaptions;

export declare namespace Jobs {
  export {
    type JobError as JobError,
    type JobStatus as JobStatus,
    type JobSummary as JobSummary,
    type JobCancelResponse as JobCancelResponse,
    type JobSummariesBasePage as JobSummariesBasePage,
    type JobListParams as JobListParams,
  };

  export {
    AskQuestions as AskQuestions,
    type AskQuestionsJob as AskQuestionsJob,
    type AskQuestionsJobOutputs as AskQuestionsJobOutputs,
    type AskQuestionsJobParameters as AskQuestionsJobParameters,
    type AskQuestionCreateParams as AskQuestionCreateParams,
  };

  export {
    GenerateChapters as GenerateChapters,
    type GenerateChaptersJob as GenerateChaptersJob,
    type GenerateChaptersJobOutputs as GenerateChaptersJobOutputs,
    type GenerateChaptersJobParameters as GenerateChaptersJobParameters,
    type GenerateChapterCreateParams as GenerateChapterCreateParams,
  };

  export {
    FindKeyMoments as FindKeyMoments,
    type FindKeyMomentsJob as FindKeyMomentsJob,
    type FindKeyMomentsJobOutputs as FindKeyMomentsJobOutputs,
    type FindKeyMomentsJobParameters as FindKeyMomentsJobParameters,
    type FindKeyMomentCreateParams as FindKeyMomentCreateParams,
  };

  export {
    Moderate as Moderate,
    type ModerateJob as ModerateJob,
    type ModerateJobOutputs as ModerateJobOutputs,
    type ModerateJobParameters as ModerateJobParameters,
    type ModerateCreateParams as ModerateCreateParams,
  };

  export {
    Summarize as Summarize,
    type SummarizeJob as SummarizeJob,
    type SummarizeJobOutputs as SummarizeJobOutputs,
    type SummarizeJobParameters as SummarizeJobParameters,
    type SummarizeCreateParams as SummarizeCreateParams,
  };

  export {
    TranslateCaptions as TranslateCaptions,
    type TranslateCaptionsJob as TranslateCaptionsJob,
    type TranslateCaptionsJobOutputs as TranslateCaptionsJobOutputs,
    type TranslateCaptionsJobParameters as TranslateCaptionsJobParameters,
    type TranslateCaptionCreateParams as TranslateCaptionCreateParams,
  };
}
