// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Generate chapters for a video.
 */
export class GenerateChapters extends APIResource {
  /**
   * Creates a new job that uses AI to generate chapters for a Mux Video asset.
   *
   * @example
   * ```ts
   * const generateChaptersJob =
   *   await client.robots.jobs.generateChapters.create({
   *     parameters: { asset_id: 'mux_asset_123abc' },
   *   });
   * ```
   */
  create(body: GenerateChapterCreateParams, options?: RequestOptions): APIPromise<GenerateChaptersJob> {
    return (
      this._client.post('/robots/v1/jobs/generate-chapters', {
        body,
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: GenerateChaptersJob }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Retrieves the current status and results of a 'generate-chapters' job.
   *
   * @example
   * ```ts
   * const generateChaptersJob =
   *   await client.robots.jobs.generateChapters.retrieve(
   *     'rjob_E6fdcD7d-cDdf-baAa-b31A-1ae5A92d336F',
   *   );
   * ```
   */
  retrieve(jobID: string, options?: RequestOptions): APIPromise<GenerateChaptersJob> {
    return (
      this._client.get(path`/robots/v1/jobs/generate-chapters/${jobID}`, {
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: GenerateChaptersJob }>
    )._thenUnwrap((obj) => obj.data);
  }
}

export interface GenerateChaptersJob {
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

  workflow: 'generate-chapters';

  /**
   * Error details. Present when status is 'errored'.
   */
  errors?: Array<GenerateChaptersJob.Error>;

  /**
   * Workflow results. Present when status is 'completed'.
   */
  outputs?: GenerateChaptersJob.Outputs;

  parameters?: GenerateChaptersJob.Parameters;

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
     * Generated chapters, ordered by start time.
     */
    chapters: Array<Outputs.Chapter>;
  }

  export namespace Outputs {
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

  export interface Parameters {
    /**
     * The Mux asset ID of the video to generate chapters for.
     */
    asset_id: string;

    /**
     * BCP 47 language code of the caption track to analyze. Defaults to "en".
     */
    from_language_code?: string;

    /**
     * Override specific sections of the chapter generation prompt.
     */
    prompt_overrides?: Parameters.PromptOverrides;

    /**
     * BCP 47 language code for the output chapter titles. Auto-detected from the
     * transcript if omitted.
     */
    to_language_code?: string;
  }

  export namespace Parameters {
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

export interface GenerateChapterCreateParams {
  parameters: GenerateChapterCreateParams.Parameters;

  /**
   * Arbitrary string stored with the job and returned in responses. Useful for
   * correlating jobs with your own systems.
   */
  passthrough?: string;
}

export namespace GenerateChapterCreateParams {
  export interface Parameters {
    /**
     * The Mux asset ID of the video to generate chapters for.
     */
    asset_id: string;

    /**
     * BCP 47 language code of the caption track to analyze. Defaults to "en".
     */
    from_language_code?: string;

    /**
     * Override specific sections of the chapter generation prompt.
     */
    prompt_overrides?: Parameters.PromptOverrides;

    /**
     * BCP 47 language code for the output chapter titles. Auto-detected from the
     * transcript if omitted.
     */
    to_language_code?: string;
  }

  export namespace Parameters {
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
}

export declare namespace GenerateChapters {
  export {
    type GenerateChaptersJob as GenerateChaptersJob,
    type GenerateChapterCreateParams as GenerateChapterCreateParams,
  };
}
