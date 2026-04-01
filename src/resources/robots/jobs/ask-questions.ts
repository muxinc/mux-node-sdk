// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JobsAPI from './jobs';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Ask questions about a video and get structured answers.
 */
export class AskQuestions extends APIResource {
  /**
   * Creates a new job that uses AI to answer questions about a Mux Video asset.
   *
   * @example
   * ```ts
   * const askQuestionsJob =
   *   await client.robots.jobs.askQuestions.create({
   *     parameters: {
   *       asset_id: 'mux_asset_123abc',
   *       questions: [
   *         {
   *           question: 'Is there a person speaking on camera?',
   *         },
   *       ],
   *     },
   *   });
   * ```
   */
  create(body: AskQuestionCreateParams, options?: RequestOptions): APIPromise<AskQuestionsJob> {
    return (
      this._client.post('/robots/v1/jobs/ask-questions', {
        body,
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: AskQuestionsJob }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Retrieves the current status and results of an 'ask-questions' job.
   *
   * @example
   * ```ts
   * const askQuestionsJob =
   *   await client.robots.jobs.askQuestions.retrieve(
   *     'rjob_E6fdcD7d-cDdf-baAa-b31A-1ae5A92d336F',
   *   );
   * ```
   */
  retrieve(jobID: string, options?: RequestOptions): APIPromise<AskQuestionsJob> {
    return (
      this._client.get(path`/robots/v1/jobs/ask-questions/${jobID}`, {
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: AskQuestionsJob }>
    )._thenUnwrap((obj) => obj.data);
  }
}

export interface AskQuestionsJob {
  /**
   * Unique job identifier.
   */
  id: string;

  /**
   * Unix timestamp (seconds) when the job was created.
   */
  created_at: number;

  /**
   * Current job status.
   */
  status: JobsAPI.JobStatus;

  /**
   * Unix timestamp (seconds) when the job was last updated.
   */
  updated_at: number;

  workflow: 'ask-questions';

  /**
   * Error details. Present when status is 'errored'.
   */
  errors?: Array<JobsAPI.JobError>;

  /**
   * Workflow results. Present when status is 'completed'.
   */
  outputs?: AskQuestionsJobOutputs;

  parameters?: AskQuestionsJobParameters;

  /**
   * Arbitrary string supplied at creation, returned as-is.
   */
  passthrough?: string;

  /**
   * Related Mux resources linked to this job.
   */
  resources?: AskQuestionsJob.Resources;
}

export namespace AskQuestionsJob {
  /**
   * Related Mux resources linked to this job.
   */
  export interface Resources {
    /**
     * Mux assets associated with this job.
     */
    assets: Array<Resources.Asset>;
  }

  export namespace Resources {
    export interface Asset {
      /**
       * Mux asset ID.
       */
      id: string;

      /**
       * Hypermedia links for the asset.
       */
      _links: Asset._Links;

      /**
       * Mux asset metadata, if available.
       */
      meta?: Asset.Meta;

      /**
       * Passthrough string from the Mux asset.
       */
      passthrough?: string;
    }

    export namespace Asset {
      /**
       * Hypermedia links for the asset.
       */
      export interface _Links {
        self: _Links.Self;
      }

      export namespace _Links {
        export interface Self {
          /**
           * URL to the Mux asset resource.
           */
          href: string;
        }
      }

      /**
       * Mux asset metadata, if available.
       */
      export interface Meta {
        /**
         * Creator identifier from Mux metadata.
         */
        creator_id?: string;

        /**
         * External identifier from Mux metadata.
         */
        external_id?: string;

        /**
         * Asset title from Mux metadata.
         */
        title?: string;
      }
    }
  }
}

/**
 * Workflow results. Present when status is 'completed'.
 */
export interface AskQuestionsJobOutputs {
  /**
   * One answer per question, in the same order as the input questions.
   */
  answers: Array<AskQuestionsJobOutputs.Answer>;
}

export namespace AskQuestionsJobOutputs {
  export interface Answer {
    /**
     * The answer, constrained to one of the provided answer_options. Null when the
     * question was skipped.
     */
    answer: string | null;

    /**
     * Confidence score from 0.0 to 1.0. Values above 0.9 indicate clear, unambiguous
     * evidence; 0.7-0.9 strong evidence with minor ambiguity; 0.5-0.7 moderate
     * evidence; below 0.5 weak or uncertain evidence. Always 0 when skipped.
     */
    confidence: number;

    /**
     * The original question that was asked.
     */
    question: string;

    /**
     * Explanation citing specific visual or audio evidence from the video, or why the
     * question was skipped.
     */
    reasoning: string;

    /**
     * Whether the question was skipped due to irrelevance to the video content.
     */
    skipped: boolean;
  }
}

export interface AskQuestionsJobParameters {
  /**
   * The Mux asset ID of the video to analyze.
   */
  asset_id: string;

  /**
   * One or more questions to ask about the video. All questions are evaluated in a
   * single AI call for efficiency.
   */
  questions: Array<AskQuestionsJobParameters.Question>;

  /**
   * Allowed answer values the AI must choose from. Defaults to ["yes", "no"] if not
   * provided. Can be customized to any set of options, e.g. ["high", "medium",
   * "low"].
   */
  answer_options?: Array<string>;
}

export namespace AskQuestionsJobParameters {
  export interface Question {
    /**
     * The question to ask about the video content.
     */
    question: string;
  }
}

export interface AskQuestionCreateParams {
  parameters: AskQuestionsJobParameters;

  /**
   * Arbitrary string stored with the job and returned in responses. Useful for
   * correlating jobs with your own systems.
   */
  passthrough?: string;
}

export declare namespace AskQuestions {
  export {
    type AskQuestionsJob as AskQuestionsJob,
    type AskQuestionsJobOutputs as AskQuestionsJobOutputs,
    type AskQuestionsJobParameters as AskQuestionsJobParameters,
    type AskQuestionCreateParams as AskQuestionCreateParams,
  };
}
