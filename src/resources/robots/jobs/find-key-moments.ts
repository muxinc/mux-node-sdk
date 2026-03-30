// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Identify key moments in a video.
 */
export class FindKeyMoments extends APIResource {
  /**
   * Creates a new job that uses AI to identify key moments in a Mux Video asset.
   *
   * @example
   * ```ts
   * const findKeyMoment =
   *   await client.robots.jobs.findKeyMoments.create({
   *     parameters: { asset_id: 'mux_asset_123abc' },
   *   });
   * ```
   */
  create(body: FindKeyMomentCreateParams, options?: RequestOptions): APIPromise<FindKeyMomentCreateResponse> {
    return (
      this._client.post('/robots/v1/jobs/find-key-moments', {
        body,
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: FindKeyMomentCreateResponse }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Retrieves the current status and results of a 'find-key-moments' job.
   *
   * @example
   * ```ts
   * const findKeyMoment =
   *   await client.robots.jobs.findKeyMoments.retrieve(
   *     'rjob_E6fdcD7d-cDdf-baAa-b31A-1ae5A92d336F',
   *   );
   * ```
   */
  retrieve(jobID: string, options?: RequestOptions): APIPromise<FindKeyMomentRetrieveResponse> {
    return (
      this._client.get(path`/robots/v1/jobs/find-key-moments/${jobID}`, {
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: FindKeyMomentRetrieveResponse }>
    )._thenUnwrap((obj) => obj.data);
  }
}

export interface FindKeyMomentCreateResponse {
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

  workflow: 'find-key-moments';

  /**
   * Error details. Present when status is 'errored'.
   */
  errors?: Array<FindKeyMomentCreateResponse.Error>;

  /**
   * Workflow results. Present when status is 'completed'.
   */
  outputs?: FindKeyMomentCreateResponse.Outputs;

  parameters?: FindKeyMomentCreateResponse.Parameters;

  /**
   * Arbitrary string supplied at creation, returned as-is.
   */
  passthrough?: string;

  /**
   * Related Mux resources linked to this job.
   */
  resources?: FindKeyMomentCreateResponse.Resources;

  /**
   * Token usage breakdown. Present when status is 'completed'.
   */
  usage?: FindKeyMomentCreateResponse.Usage;
}

export namespace FindKeyMomentCreateResponse {
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
     * Extracted key moments, ordered by position in the video.
     */
    moments: Array<Outputs.Moment>;
  }

  export namespace Outputs {
    export interface Moment {
      /**
       * One-sentence summary of what is being said during the moment.
       */
      audible_narrative: string;

      /**
       * Contiguous transcript segments that comprise this moment.
       */
      cues: Array<Moment.Cue>;

      /**
       * Moment end time in milliseconds.
       */
      end_ms: number;

      /**
       * Multi-word descriptive phrases (2-5 words each) capturing key audible concepts.
       */
      notable_audible_concepts: Array<string>;

      /**
       * Weighted quality score from 0.0 to 1.0 based on hook strength, clarity,
       * emotional intensity, novelty, and soundbite quality.
       */
      overall_score: number;

      /**
       * Moment start time in milliseconds.
       */
      start_ms: number;

      /**
       * Short catchy title for the moment (3-8 words).
       */
      title: string;

      /**
       * Scored visual concepts extracted from sampled frames. Present for video assets
       * only.
       */
      notable_visual_concepts?: Array<Moment.NotableVisualConcept>;

      /**
       * One-sentence summary of what is visually happening. Present for video assets
       * only.
       */
      visual_narrative?: string;
    }

    export namespace Moment {
      export interface Cue {
        /**
         * Cue end time in milliseconds.
         */
        end_ms: number;

        /**
         * Cue start time in milliseconds.
         */
        start_ms: number;

        /**
         * Transcript text for this cue.
         */
        text: string;
      }

      export interface NotableVisualConcept {
        /**
         * Multi-word visual concept (2-5 words).
         */
        concept: string;

        /**
         * Brief explanation of the relevance score.
         */
        rationale: string;

        /**
         * Relevance score from 0.0 to 1.0 measuring how closely the visual concept relates
         * to the audible narrative.
         */
        score: number;
      }
    }
  }

  export interface Parameters {
    /**
     * All asset identifiers associated with this job.
     */
    asset_ids: Array<string>;

    /**
     * Maximum number of key moments to extract. Defaults to 5.
     */
    max_moments?: number;

    /**
     * Preferred highlight duration range in milliseconds. When provided, the model
     * will aim to select moments within this range.
     */
    target_duration_ms?: Parameters.TargetDurationMs;
  }

  export namespace Parameters {
    /**
     * Preferred highlight duration range in milliseconds. When provided, the model
     * will aim to select moments within this range.
     */
    export interface TargetDurationMs {
      /**
       * Preferred maximum highlight duration in milliseconds.
       */
      max: number;

      /**
       * Preferred minimum highlight duration in milliseconds.
       */
      min: number;
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

export interface FindKeyMomentRetrieveResponse {
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

  workflow: 'find-key-moments';

  /**
   * Error details. Present when status is 'errored'.
   */
  errors?: Array<FindKeyMomentRetrieveResponse.Error>;

  /**
   * Workflow results. Present when status is 'completed'.
   */
  outputs?: FindKeyMomentRetrieveResponse.Outputs;

  parameters?: FindKeyMomentRetrieveResponse.Parameters;

  /**
   * Arbitrary string supplied at creation, returned as-is.
   */
  passthrough?: string;

  /**
   * Related Mux resources linked to this job.
   */
  resources?: FindKeyMomentRetrieveResponse.Resources;

  /**
   * Token usage breakdown. Present when status is 'completed'.
   */
  usage?: FindKeyMomentRetrieveResponse.Usage;
}

export namespace FindKeyMomentRetrieveResponse {
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
     * Extracted key moments, ordered by position in the video.
     */
    moments: Array<Outputs.Moment>;
  }

  export namespace Outputs {
    export interface Moment {
      /**
       * One-sentence summary of what is being said during the moment.
       */
      audible_narrative: string;

      /**
       * Contiguous transcript segments that comprise this moment.
       */
      cues: Array<Moment.Cue>;

      /**
       * Moment end time in milliseconds.
       */
      end_ms: number;

      /**
       * Multi-word descriptive phrases (2-5 words each) capturing key audible concepts.
       */
      notable_audible_concepts: Array<string>;

      /**
       * Weighted quality score from 0.0 to 1.0 based on hook strength, clarity,
       * emotional intensity, novelty, and soundbite quality.
       */
      overall_score: number;

      /**
       * Moment start time in milliseconds.
       */
      start_ms: number;

      /**
       * Short catchy title for the moment (3-8 words).
       */
      title: string;

      /**
       * Scored visual concepts extracted from sampled frames. Present for video assets
       * only.
       */
      notable_visual_concepts?: Array<Moment.NotableVisualConcept>;

      /**
       * One-sentence summary of what is visually happening. Present for video assets
       * only.
       */
      visual_narrative?: string;
    }

    export namespace Moment {
      export interface Cue {
        /**
         * Cue end time in milliseconds.
         */
        end_ms: number;

        /**
         * Cue start time in milliseconds.
         */
        start_ms: number;

        /**
         * Transcript text for this cue.
         */
        text: string;
      }

      export interface NotableVisualConcept {
        /**
         * Multi-word visual concept (2-5 words).
         */
        concept: string;

        /**
         * Brief explanation of the relevance score.
         */
        rationale: string;

        /**
         * Relevance score from 0.0 to 1.0 measuring how closely the visual concept relates
         * to the audible narrative.
         */
        score: number;
      }
    }
  }

  export interface Parameters {
    /**
     * All asset identifiers associated with this job.
     */
    asset_ids: Array<string>;

    /**
     * Maximum number of key moments to extract. Defaults to 5.
     */
    max_moments?: number;

    /**
     * Preferred highlight duration range in milliseconds. When provided, the model
     * will aim to select moments within this range.
     */
    target_duration_ms?: Parameters.TargetDurationMs;
  }

  export namespace Parameters {
    /**
     * Preferred highlight duration range in milliseconds. When provided, the model
     * will aim to select moments within this range.
     */
    export interface TargetDurationMs {
      /**
       * Preferred maximum highlight duration in milliseconds.
       */
      max: number;

      /**
       * Preferred minimum highlight duration in milliseconds.
       */
      min: number;
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

export interface FindKeyMomentCreateParams {
  parameters: FindKeyMomentCreateParams.Parameters;

  /**
   * Arbitrary string stored with the job and returned in responses. Useful for
   * correlating jobs with your own systems.
   */
  passthrough?: string;
}

export namespace FindKeyMomentCreateParams {
  export interface Parameters {
    /**
     * The Mux asset ID of the video to analyze.
     */
    asset_id: string;

    /**
     * Maximum number of key moments to extract. Defaults to 5.
     */
    max_moments?: number;

    /**
     * Preferred highlight duration range in milliseconds. When provided, the model
     * will aim to select moments within this range.
     */
    target_duration_ms?: Parameters.TargetDurationMs;
  }

  export namespace Parameters {
    /**
     * Preferred highlight duration range in milliseconds. When provided, the model
     * will aim to select moments within this range.
     */
    export interface TargetDurationMs {
      /**
       * Preferred maximum highlight duration in milliseconds.
       */
      max: number;

      /**
       * Preferred minimum highlight duration in milliseconds.
       */
      min: number;
    }
  }
}

export declare namespace FindKeyMoments {
  export {
    type FindKeyMomentCreateResponse as FindKeyMomentCreateResponse,
    type FindKeyMomentRetrieveResponse as FindKeyMomentRetrieveResponse,
    type FindKeyMomentCreateParams as FindKeyMomentCreateParams,
  };
}
