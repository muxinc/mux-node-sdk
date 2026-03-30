// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AskQuestionsAPI from './ask-questions';
import {
  AskQuestionCreateParams,
  AskQuestionCreateResponse,
  AskQuestionRetrieveResponse,
  AskQuestions,
} from './ask-questions';
import * as FindKeyMomentsAPI from './find-key-moments';
import {
  FindKeyMomentCreateParams,
  FindKeyMomentCreateResponse,
  FindKeyMomentRetrieveResponse,
  FindKeyMoments,
} from './find-key-moments';
import * as GenerateChaptersAPI from './generate-chapters';
import {
  GenerateChapterCreateParams,
  GenerateChapterCreateResponse,
  GenerateChapterRetrieveResponse,
  GenerateChapters,
} from './generate-chapters';
import * as ModerateAPI from './moderate';
import { Moderate, ModerateCreateParams, ModerateCreateResponse, ModerateRetrieveResponse } from './moderate';
import * as SummarizeAPI from './summarize';
import {
  Summarize,
  SummarizeCreateParams,
  SummarizeCreateResponse,
  SummarizeRetrieveResponse,
} from './summarize';
import * as TranslateCaptionsAPI from './translate-captions';
import {
  TranslateCaptionCreateParams,
  TranslateCaptionCreateResponse,
  TranslateCaptionRetrieveResponse,
  TranslateCaptions,
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
   * for await (const jobListResponse of client.robots.jobs.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: JobListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<JobListResponsesBasePage, JobListResponse> {
    return this._client.getAPIList('/robots/v1/jobs', BasePage<JobListResponse>, {
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

export type JobListResponsesBasePage = BasePage<JobListResponse>;

export interface JobListResponse {
  /**
   * Unique job identifier.
   */
  id: string;

  /**
   * Hypermedia links for this job.
   */
  _links: JobListResponse._Links;

  /**
   * Unix timestamp (seconds) when the job was created.
   */
  created_at: number;

  /**
   * Current job status.
   */
  status: 'pending' | 'processing' | 'completed' | 'errored' | 'cancelled';

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

export namespace JobListResponse {
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
  status?: 'pending' | 'processing' | 'completed' | 'errored' | 'cancelled';

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
    type JobListResponse as JobListResponse,
    type JobCancelResponse as JobCancelResponse,
    type JobListResponsesBasePage as JobListResponsesBasePage,
    type JobListParams as JobListParams,
  };

  export {
    AskQuestions as AskQuestions,
    type AskQuestionCreateResponse as AskQuestionCreateResponse,
    type AskQuestionRetrieveResponse as AskQuestionRetrieveResponse,
    type AskQuestionCreateParams as AskQuestionCreateParams,
  };

  export {
    GenerateChapters as GenerateChapters,
    type GenerateChapterCreateResponse as GenerateChapterCreateResponse,
    type GenerateChapterRetrieveResponse as GenerateChapterRetrieveResponse,
    type GenerateChapterCreateParams as GenerateChapterCreateParams,
  };

  export {
    FindKeyMoments as FindKeyMoments,
    type FindKeyMomentCreateResponse as FindKeyMomentCreateResponse,
    type FindKeyMomentRetrieveResponse as FindKeyMomentRetrieveResponse,
    type FindKeyMomentCreateParams as FindKeyMomentCreateParams,
  };

  export {
    Moderate as Moderate,
    type ModerateCreateResponse as ModerateCreateResponse,
    type ModerateRetrieveResponse as ModerateRetrieveResponse,
    type ModerateCreateParams as ModerateCreateParams,
  };

  export {
    Summarize as Summarize,
    type SummarizeCreateResponse as SummarizeCreateResponse,
    type SummarizeRetrieveResponse as SummarizeRetrieveResponse,
    type SummarizeCreateParams as SummarizeCreateParams,
  };

  export {
    TranslateCaptions as TranslateCaptions,
    type TranslateCaptionCreateResponse as TranslateCaptionCreateResponse,
    type TranslateCaptionRetrieveResponse as TranslateCaptionRetrieveResponse,
    type TranslateCaptionCreateParams as TranslateCaptionCreateParams,
  };
}
