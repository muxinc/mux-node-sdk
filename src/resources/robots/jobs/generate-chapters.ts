// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JobsAPI from './jobs';

export class GenerateChapters extends APIResource {}

export interface GenerateChaptersJob {
  /**
   * Unique job identifier.
   */
  id: string;

  /**
   * Unix timestamp (seconds) when the job was created.
   */
  created_at: number;

  parameters: GenerateChaptersJobParameters;

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

  workflow: 'generate-chapters';

  /**
   * Error details. Present when status is 'errored'.
   */
  errors?: Array<JobsAPI.JobError>;

  /**
   * Workflow results. Present when status is 'completed'.
   */
  outputs?: GenerateChaptersJobOutputs;

  /**
   * Arbitrary string supplied at creation, returned as-is.
   */
  passthrough?: string;

  /**
   * Related Mux resources linked to this job.
   */
  resources?: GenerateChaptersJob.Resources;
}

export namespace GenerateChaptersJob {
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
export interface GenerateChaptersJobOutputs {
  /**
   * Generated chapters, ordered by start time.
   */
  chapters: Array<GenerateChaptersJobOutputs.Chapter>;
}

export namespace GenerateChaptersJobOutputs {
  export interface Chapter {
    /**
     * Chapter start time in seconds. The first chapter always starts at 0.
     */
    start_time: number;

    /**
     * Concise chapter title.
     */
    title: string;
  }
}

export interface GenerateChaptersJobParameters {
  /**
   * The Mux asset ID of the video to generate chapters for.
   */
  asset_id: string;

  /**
   * BCP 47 language code of the caption track to analyze (e.g. "en", "fr"). When
   * omitted, the SDK prefers English if available.
   */
  language_code?: string;

  /**
   * BCP 47 language code for the output chapter titles. Auto-detected from the
   * transcript if omitted.
   */
  output_language_code?: string;

  /**
   * Override specific sections of the chapter generation prompt.
   */
  prompt_overrides?: GenerateChaptersJobParameters.PromptOverrides;
}

export namespace GenerateChaptersJobParameters {
  /**
   * Override specific sections of the chapter generation prompt.
   */
  export interface PromptOverrides {
    /**
     * Override the chapter density and timing constraints.
     */
    chapter_guidelines?: string;

    /**
     * Override the JSON output format instructions.
     */
    output_format?: string;

    /**
     * Override the core task instruction for chapter generation.
     */
    task?: string;

    /**
     * Override the chapter title style requirements.
     */
    title_guidelines?: string;
  }
}

export declare namespace GenerateChapters {
  export {
    type GenerateChaptersJob as GenerateChaptersJob,
    type GenerateChaptersJobOutputs as GenerateChaptersJobOutputs,
    type GenerateChaptersJobParameters as GenerateChaptersJobParameters,
  };
}
