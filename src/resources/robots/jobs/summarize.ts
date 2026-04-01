// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Generate a title, description, and tags for a video.
 */
export class Summarize extends APIResource {
  /**
   * Creates a new job that uses AI to generate a title, description, and tags for a
   * Mux Video asset.
   *
   * @example
   * ```ts
   * const summarize = await client.robots.jobs.summarize.create(
   *   { parameters: { asset_id: 'mux_asset_123abc' } },
   * );
   * ```
   */
  create(body: SummarizeCreateParams, options?: RequestOptions): APIPromise<SummarizeCreateResponse> {
    return (
      this._client.post('/robots/v1/jobs/summarize', {
        body,
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: SummarizeCreateResponse }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Retrieves the current status and results of a 'summarize' job.
   *
   * @example
   * ```ts
   * const summarize =
   *   await client.robots.jobs.summarize.retrieve(
   *     'rjob_E6fdcD7d-cDdf-baAa-b31A-1ae5A92d336F',
   *   );
   * ```
   */
  retrieve(jobID: string, options?: RequestOptions): APIPromise<SummarizeRetrieveResponse> {
    return (
      this._client.get(path`/robots/v1/jobs/summarize/${jobID}`, {
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: SummarizeRetrieveResponse }>
    )._thenUnwrap((obj) => obj.data);
  }
}

export interface SummarizeCreateResponse {
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

  workflow: 'summarize';

  /**
   * Error details. Present when status is 'errored'.
   */
  errors?: Array<SummarizeCreateResponse.Error>;

  /**
   * Workflow results. Present when status is 'completed'.
   */
  outputs?: SummarizeCreateResponse.Outputs;

  parameters?: SummarizeCreateResponse.Parameters;

  /**
   * Arbitrary string supplied at creation, returned as-is.
   */
  passthrough?: string;

  /**
   * Related Mux resources linked to this job.
   */
  resources?: SummarizeCreateResponse.Resources;
}

export namespace SummarizeCreateResponse {
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
     * Generated description of the video content (typically 2-4 sentences).
     */
    description: string;

    /**
     * Generated keyword tags for the video.
     */
    tags: Array<string>;

    /**
     * Generated title capturing the essence of the video.
     */
    title: string;
  }

  export interface Parameters {
    /**
     * The Mux asset ID of the video to summarize.
     */
    asset_id: string;

    /**
     * Desired description length in characters.
     */
    description_length?: number;

    /**
     * Override specific sections of the summarization prompt.
     */
    prompt_overrides?: Parameters.PromptOverrides;

    /**
     * Desired number of tags to generate. Defaults to 10.
     */
    tag_count?: number;

    /**
     * Desired title length in characters.
     */
    title_length?: number;

    /**
     * Tone for the generated summary. "neutral" for straightforward analysis,
     * "playful" for witty and conversational, "professional" for executive-level
     * reporting.
     */
    tone?: 'neutral' | 'playful' | 'professional';
  }

  export namespace Parameters {
    /**
     * Override specific sections of the summarization prompt.
     */
    export interface PromptOverrides {
      /**
       * Override the description generation requirements.
       */
      description?: string;

      /**
       * Override the keyword/tag extraction requirements.
       */
      keywords?: string;

      /**
       * Override the quality standards for analysis.
       */
      quality_guidelines?: string;

      /**
       * Override the core task instruction for summarization.
       */
      task?: string;

      /**
       * Override the title generation requirements.
       */
      title?: string;
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
}

export interface SummarizeRetrieveResponse {
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

  workflow: 'summarize';

  /**
   * Error details. Present when status is 'errored'.
   */
  errors?: Array<SummarizeRetrieveResponse.Error>;

  /**
   * Workflow results. Present when status is 'completed'.
   */
  outputs?: SummarizeRetrieveResponse.Outputs;

  parameters?: SummarizeRetrieveResponse.Parameters;

  /**
   * Arbitrary string supplied at creation, returned as-is.
   */
  passthrough?: string;

  /**
   * Related Mux resources linked to this job.
   */
  resources?: SummarizeRetrieveResponse.Resources;
}

export namespace SummarizeRetrieveResponse {
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
     * Generated description of the video content (typically 2-4 sentences).
     */
    description: string;

    /**
     * Generated keyword tags for the video.
     */
    tags: Array<string>;

    /**
     * Generated title capturing the essence of the video.
     */
    title: string;
  }

  export interface Parameters {
    /**
     * The Mux asset ID of the video to summarize.
     */
    asset_id: string;

    /**
     * Desired description length in characters.
     */
    description_length?: number;

    /**
     * Override specific sections of the summarization prompt.
     */
    prompt_overrides?: Parameters.PromptOverrides;

    /**
     * Desired number of tags to generate. Defaults to 10.
     */
    tag_count?: number;

    /**
     * Desired title length in characters.
     */
    title_length?: number;

    /**
     * Tone for the generated summary. "neutral" for straightforward analysis,
     * "playful" for witty and conversational, "professional" for executive-level
     * reporting.
     */
    tone?: 'neutral' | 'playful' | 'professional';
  }

  export namespace Parameters {
    /**
     * Override specific sections of the summarization prompt.
     */
    export interface PromptOverrides {
      /**
       * Override the description generation requirements.
       */
      description?: string;

      /**
       * Override the keyword/tag extraction requirements.
       */
      keywords?: string;

      /**
       * Override the quality standards for analysis.
       */
      quality_guidelines?: string;

      /**
       * Override the core task instruction for summarization.
       */
      task?: string;

      /**
       * Override the title generation requirements.
       */
      title?: string;
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
}

export interface SummarizeCreateParams {
  parameters: SummarizeCreateParams.Parameters;

  /**
   * Arbitrary string stored with the job and returned in responses. Useful for
   * correlating jobs with your own systems.
   */
  passthrough?: string;
}

export namespace SummarizeCreateParams {
  export interface Parameters {
    /**
     * The Mux asset ID of the video to summarize.
     */
    asset_id: string;

    /**
     * Desired description length in characters.
     */
    description_length?: number;

    /**
     * Override specific sections of the summarization prompt.
     */
    prompt_overrides?: Parameters.PromptOverrides;

    /**
     * Desired number of tags to generate. Defaults to 10.
     */
    tag_count?: number;

    /**
     * Desired title length in characters.
     */
    title_length?: number;

    /**
     * Tone for the generated summary. "neutral" for straightforward analysis,
     * "playful" for witty and conversational, "professional" for executive-level
     * reporting.
     */
    tone?: 'neutral' | 'playful' | 'professional';
  }

  export namespace Parameters {
    /**
     * Override specific sections of the summarization prompt.
     */
    export interface PromptOverrides {
      /**
       * Override the description generation requirements.
       */
      description?: string;

      /**
       * Override the keyword/tag extraction requirements.
       */
      keywords?: string;

      /**
       * Override the quality standards for analysis.
       */
      quality_guidelines?: string;

      /**
       * Override the core task instruction for summarization.
       */
      task?: string;

      /**
       * Override the title generation requirements.
       */
      title?: string;
    }
  }
}

export declare namespace Summarize {
  export {
    type SummarizeCreateResponse as SummarizeCreateResponse,
    type SummarizeRetrieveResponse as SummarizeRetrieveResponse,
    type SummarizeCreateParams as SummarizeCreateParams,
  };
}
