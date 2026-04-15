// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JobsAPI from './jobs';

export class FindKeyMoments extends APIResource {}

export interface FindKeyMomentsJob {
  /**
   * Unique job identifier.
   */
  id: string;

  /**
   * Unix timestamp (seconds) when the job was created.
   */
  created_at: number;

  parameters: FindKeyMomentsJobParameters;

  /**
   * Current job status.
   */
  status: JobsAPI.JobStatus;

  /**
   * Number of Mux AI units consumed by this job.
   */
  units_consumed: number;

  /**
   * Unix timestamp (seconds) when the job was last updated.
   */
  updated_at: number;

  workflow: 'find-key-moments';

  /**
   * Error details. Present when status is 'errored'.
   */
  errors?: Array<JobsAPI.JobError>;

  /**
   * Workflow results. Present when status is 'completed'.
   */
  outputs?: FindKeyMomentsJobOutputs;

  /**
   * Arbitrary string supplied at creation, returned as-is.
   */
  passthrough?: string;

  /**
   * Related Mux resources linked to this job.
   */
  resources?: FindKeyMomentsJob.Resources;
}

export namespace FindKeyMomentsJob {
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
export interface FindKeyMomentsJobOutputs {
  /**
   * Extracted key moments, ordered by position in the video.
   */
  moments: Array<FindKeyMomentsJobOutputs.Moment>;
}

export namespace FindKeyMomentsJobOutputs {
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

export interface FindKeyMomentsJobParameters {
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
  target_duration_ms?: FindKeyMomentsJobParameters.TargetDurationMs;
}

export namespace FindKeyMomentsJobParameters {
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

export declare namespace FindKeyMoments {
  export {
    type FindKeyMomentsJob as FindKeyMomentsJob,
    type FindKeyMomentsJobOutputs as FindKeyMomentsJobOutputs,
    type FindKeyMomentsJobParameters as FindKeyMomentsJobParameters,
  };
}
