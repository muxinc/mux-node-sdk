// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AskQuestionsAPI from './ask-questions';
import {
  AskQuestions,
  AskQuestionsJob,
  AskQuestionsJobOutputs,
  AskQuestionsJobParameters,
} from './ask-questions';
import * as FindKeyMomentsAPI from './find-key-moments';
import {
  FindKeyMoments,
  FindKeyMomentsJob,
  FindKeyMomentsJobOutputs,
  FindKeyMomentsJobParameters,
} from './find-key-moments';
import * as GenerateChaptersAPI from './generate-chapters';
import {
  GenerateChapters,
  GenerateChaptersJob,
  GenerateChaptersJobOutputs,
  GenerateChaptersJobParameters,
} from './generate-chapters';
import * as ModerateAPI from './moderate';
import { Moderate, ModerateJob, ModerateJobOutputs, ModerateJobParameters } from './moderate';
import * as SummarizeAPI from './summarize';
import { Summarize, SummarizeJob, SummarizeJobOutputs, SummarizeJobParameters } from './summarize';
import * as TranslateCaptionsAPI from './translate-captions';
import {
  TranslateCaptions,
  TranslateCaptionsJob,
  TranslateCaptionsJobOutputs,
  TranslateCaptionsJobParameters,
} from './translate-captions';

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
}

export interface JobError {
  /**
   * Human-readable public error message.
   */
  message: string;

  /**
   * Stable public error category identifier.
   */
  type: string;

  /**
   * Whether retrying this job may resolve the error.
   */
  retryable?: boolean;
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

Jobs.AskQuestions = AskQuestions;
Jobs.GenerateChapters = GenerateChapters;
Jobs.FindKeyMoments = FindKeyMoments;
Jobs.Moderate = Moderate;
Jobs.Summarize = Summarize;
Jobs.TranslateCaptions = TranslateCaptions;

export declare namespace Jobs {
  export { type JobError as JobError, type JobStatus as JobStatus, type JobSummary as JobSummary };

  export {
    AskQuestions as AskQuestions,
    type AskQuestionsJob as AskQuestionsJob,
    type AskQuestionsJobOutputs as AskQuestionsJobOutputs,
    type AskQuestionsJobParameters as AskQuestionsJobParameters,
  };

  export {
    GenerateChapters as GenerateChapters,
    type GenerateChaptersJob as GenerateChaptersJob,
    type GenerateChaptersJobOutputs as GenerateChaptersJobOutputs,
    type GenerateChaptersJobParameters as GenerateChaptersJobParameters,
  };

  export {
    FindKeyMoments as FindKeyMoments,
    type FindKeyMomentsJob as FindKeyMomentsJob,
    type FindKeyMomentsJobOutputs as FindKeyMomentsJobOutputs,
    type FindKeyMomentsJobParameters as FindKeyMomentsJobParameters,
  };

  export {
    Moderate as Moderate,
    type ModerateJob as ModerateJob,
    type ModerateJobOutputs as ModerateJobOutputs,
    type ModerateJobParameters as ModerateJobParameters,
  };

  export {
    Summarize as Summarize,
    type SummarizeJob as SummarizeJob,
    type SummarizeJobOutputs as SummarizeJobOutputs,
    type SummarizeJobParameters as SummarizeJobParameters,
  };

  export {
    TranslateCaptions as TranslateCaptions,
    type TranslateCaptionsJob as TranslateCaptionsJob,
    type TranslateCaptionsJobOutputs as TranslateCaptionsJobOutputs,
    type TranslateCaptionsJobParameters as TranslateCaptionsJobParameters,
  };
}
