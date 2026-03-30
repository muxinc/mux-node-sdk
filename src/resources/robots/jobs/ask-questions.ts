// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
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
   * const askQuestion =
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
  create(body: AskQuestionCreateParams, options?: RequestOptions): APIPromise<AskQuestionCreateResponse> {
    return (
      this._client.post('/robots/v1/jobs/ask-questions', {
        body,
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: AskQuestionCreateResponse }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Retrieves the current status and results of an 'ask-questions' job.
   *
   * @example
   * ```ts
   * const askQuestion =
   *   await client.robots.jobs.askQuestions.retrieve(
   *     'rjob_E6fdcD7d-cDdf-baAa-b31A-1ae5A92d336F',
   *   );
   * ```
   */
  retrieve(jobID: string, options?: RequestOptions): APIPromise<AskQuestionRetrieveResponse> {
    return (
      this._client.get(path`/robots/v1/jobs/ask-questions/${jobID}`, {
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: AskQuestionRetrieveResponse }>
    )._thenUnwrap((obj) => obj.data);
  }
}

export interface AskQuestionCreateResponse {
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
  status: 'pending' | 'processing' | 'completed' | 'errored' | 'cancelled';

  /**
   * Unix timestamp (seconds) when the job was last updated.
   */
  updated_at: number;

  workflow: 'ask-questions';

  /**
   * Error details. Present when status is 'errored'.
   */
  errors?: Array<AskQuestionCreateResponse.Error>;

  /**
   * Workflow results. Present when status is 'completed'.
   */
  outputs?: AskQuestionCreateResponse.Outputs;

  parameters?: AskQuestionCreateResponse.Parameters;

  /**
   * Arbitrary string supplied at creation, returned as-is.
   */
  passthrough?: string;

  /**
   * Related Mux resources linked to this job.
   */
  resources?: AskQuestionCreateResponse.Resources;

  /**
   * Token usage breakdown. Present when status is 'completed'.
   */
  usage?: AskQuestionCreateResponse.Usage;
}

export namespace AskQuestionCreateResponse {
  export interface Error {
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
   * Workflow results. Present when status is 'completed'.
   */
  export interface Outputs {
    /**
     * One answer per question, in the same order as the input questions.
     */
    answers: Array<Outputs.Answer>;
  }

  export namespace Outputs {
    export interface Answer {
      /**
       * The answer, constrained to one of the provided answer_options.
       */
      answer: string;

      /**
       * Confidence score from 0.0 to 1.0. Values above 0.9 indicate clear, unambiguous
       * evidence; 0.7-0.9 strong evidence with minor ambiguity; 0.5-0.7 moderate
       * evidence; below 0.5 weak or uncertain evidence.
       */
      confidence: number;

      /**
       * The original question that was asked.
       */
      question: string;

      /**
       * Explanation citing specific visual or audio evidence from the video.
       */
      reasoning: string;
    }
  }

  export interface Parameters {
    /**
     * All asset identifiers associated with this job.
     */
    asset_ids: Array<string>;

    /**
     * One or more questions to ask about the video. All questions are evaluated in a
     * single AI call for efficiency.
     */
    questions: Array<Parameters.Question>;

    /**
     * Allowed answer values the AI must choose from. Defaults to ["yes", "no"] if not
     * provided. Can be customized to any set of options, e.g. ["high", "medium",
     * "low"].
     */
    answer_options?: Array<string>;
  }

  export namespace Parameters {
    export interface Question {
      /**
       * The question to ask about the video content.
       */
      question: string;
    }
  }

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

  /**
   * Token usage breakdown. Present when status is 'completed'.
   */
  export interface Usage {
    /**
     * Input tokens served from cache, reducing cost.
     */
    cached_input_tokens?: number;

    /**
     * Number of tokens in the input prompt (text + image).
     */
    input_tokens?: number;

    /**
     * Number of tokens generated in the output.
     */
    output_tokens?: number;

    /**
     * Tokens used for chain-of-thought reasoning, if applicable.
     */
    reasoning_tokens?: number;

    /**
     * Total tokens consumed (input + output).
     */
    total_tokens?: number;
  }
}

export interface AskQuestionRetrieveResponse {
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
  status: 'pending' | 'processing' | 'completed' | 'errored' | 'cancelled';

  /**
   * Unix timestamp (seconds) when the job was last updated.
   */
  updated_at: number;

  workflow: 'ask-questions';

  /**
   * Error details. Present when status is 'errored'.
   */
  errors?: Array<AskQuestionRetrieveResponse.Error>;

  /**
   * Workflow results. Present when status is 'completed'.
   */
  outputs?: AskQuestionRetrieveResponse.Outputs;

  parameters?: AskQuestionRetrieveResponse.Parameters;

  /**
   * Arbitrary string supplied at creation, returned as-is.
   */
  passthrough?: string;

  /**
   * Related Mux resources linked to this job.
   */
  resources?: AskQuestionRetrieveResponse.Resources;

  /**
   * Token usage breakdown. Present when status is 'completed'.
   */
  usage?: AskQuestionRetrieveResponse.Usage;
}

export namespace AskQuestionRetrieveResponse {
  export interface Error {
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
   * Workflow results. Present when status is 'completed'.
   */
  export interface Outputs {
    /**
     * One answer per question, in the same order as the input questions.
     */
    answers: Array<Outputs.Answer>;
  }

  export namespace Outputs {
    export interface Answer {
      /**
       * The answer, constrained to one of the provided answer_options.
       */
      answer: string;

      /**
       * Confidence score from 0.0 to 1.0. Values above 0.9 indicate clear, unambiguous
       * evidence; 0.7-0.9 strong evidence with minor ambiguity; 0.5-0.7 moderate
       * evidence; below 0.5 weak or uncertain evidence.
       */
      confidence: number;

      /**
       * The original question that was asked.
       */
      question: string;

      /**
       * Explanation citing specific visual or audio evidence from the video.
       */
      reasoning: string;
    }
  }

  export interface Parameters {
    /**
     * All asset identifiers associated with this job.
     */
    asset_ids: Array<string>;

    /**
     * One or more questions to ask about the video. All questions are evaluated in a
     * single AI call for efficiency.
     */
    questions: Array<Parameters.Question>;

    /**
     * Allowed answer values the AI must choose from. Defaults to ["yes", "no"] if not
     * provided. Can be customized to any set of options, e.g. ["high", "medium",
     * "low"].
     */
    answer_options?: Array<string>;
  }

  export namespace Parameters {
    export interface Question {
      /**
       * The question to ask about the video content.
       */
      question: string;
    }
  }

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

  /**
   * Token usage breakdown. Present when status is 'completed'.
   */
  export interface Usage {
    /**
     * Input tokens served from cache, reducing cost.
     */
    cached_input_tokens?: number;

    /**
     * Number of tokens in the input prompt (text + image).
     */
    input_tokens?: number;

    /**
     * Number of tokens generated in the output.
     */
    output_tokens?: number;

    /**
     * Tokens used for chain-of-thought reasoning, if applicable.
     */
    reasoning_tokens?: number;

    /**
     * Total tokens consumed (input + output).
     */
    total_tokens?: number;
  }
}

export interface AskQuestionCreateParams {
  parameters: AskQuestionCreateParams.Parameters;

  /**
   * Arbitrary string stored with the job and returned in responses. Useful for
   * correlating jobs with your own systems.
   */
  passthrough?: string;
}

export namespace AskQuestionCreateParams {
  export interface Parameters {
    /**
     * The Mux asset ID of the video to analyze.
     */
    asset_id: string;

    /**
     * One or more questions to ask about the video. All questions are evaluated in a
     * single AI call for efficiency.
     */
    questions: Array<Parameters.Question>;

    /**
     * Allowed answer values the AI must choose from. Defaults to ["yes", "no"] if not
     * provided. Can be customized to any set of options, e.g. ["high", "medium",
     * "low"].
     */
    answer_options?: Array<string>;
  }

  export namespace Parameters {
    export interface Question {
      /**
       * The question to ask about the video content.
       */
      question: string;
    }
  }
}

export declare namespace AskQuestions {
  export {
    type AskQuestionCreateResponse as AskQuestionCreateResponse,
    type AskQuestionRetrieveResponse as AskQuestionRetrieveResponse,
    type AskQuestionCreateParams as AskQuestionCreateParams,
  };
}
