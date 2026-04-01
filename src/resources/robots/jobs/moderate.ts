// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Analyze a video for inappropriate content.
 */
export class Moderate extends APIResource {
  /**
   * Creates a new job that uses AI to analyze a Mux Video asset for inappropriate
   * content.
   *
   * @example
   * ```ts
   * const moderate = await client.robots.jobs.moderate.create({
   *   parameters: { asset_id: 'mux_asset_123abc' },
   * });
   * ```
   */
  create(body: ModerateCreateParams, options?: RequestOptions): APIPromise<ModerateCreateResponse> {
    return (
      this._client.post('/robots/v1/jobs/moderate', {
        body,
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: ModerateCreateResponse }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Retrieves the current status and results of a 'moderate' job.
   *
   * @example
   * ```ts
   * const moderate = await client.robots.jobs.moderate.retrieve(
   *   'rjob_E6fdcD7d-cDdf-baAa-b31A-1ae5A92d336F',
   * );
   * ```
   */
  retrieve(jobID: string, options?: RequestOptions): APIPromise<ModerateRetrieveResponse> {
    return (
      this._client.get(path`/robots/v1/jobs/moderate/${jobID}`, {
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: ModerateRetrieveResponse }>
    )._thenUnwrap((obj) => obj.data);
  }
}

export interface ModerateCreateResponse {
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

  workflow: 'moderate';

  /**
   * Error details. Present when status is 'errored'.
   */
  errors?: Array<ModerateCreateResponse.Error>;

  /**
   * Workflow results. Present when status is 'completed'.
   */
  outputs?: ModerateCreateResponse.Outputs;

  parameters?: ModerateCreateResponse.Parameters;

  /**
   * Arbitrary string supplied at creation, returned as-is.
   */
  passthrough?: string;

  /**
   * Related Mux resources linked to this job.
   */
  resources?: ModerateCreateResponse.Resources;
}

export namespace ModerateCreateResponse {
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
     * True if any category's max score exceeds its configured threshold.
     */
    exceeds_threshold: boolean;

    /**
     * Highest scores across all thumbnails for each category.
     */
    max_scores: Outputs.MaxScores;

    /**
     * Per-thumbnail moderation scores.
     */
    thumbnail_scores: Array<Outputs.ThumbnailScore>;
  }

  export namespace Outputs {
    /**
     * Highest scores across all thumbnails for each category.
     */
    export interface MaxScores {
      sexual: number;

      violence: number;
    }

    export interface ThumbnailScore {
      /**
       * Sexual content score from 0.0 to 1.0.
       */
      sexual: number;

      /**
       * Violence content score from 0.0 to 1.0.
       */
      violence: number;
    }
  }

  export interface Parameters {
    /**
     * The Mux asset ID of the video to moderate.
     */
    asset_id: string;

    /**
     * Language code for transcript analysis on audio-only assets. Defaults to "en".
     */
    language_code?: string;

    /**
     * Maximum number of thumbnails to sample. When set, samples are distributed evenly
     * across the video with the first and last frames pinned.
     */
    max_samples?: number;

    /**
     * Interval in seconds between sampled thumbnails. Minimum 5.
     */
    sampling_interval?: number;

    /**
     * Score thresholds that determine whether content is flagged. Defaults to {sexual:
     * 0.7, violence: 0.8}.
     */
    thresholds?: Parameters.Thresholds;
  }

  export namespace Parameters {
    /**
     * Score thresholds that determine whether content is flagged. Defaults to {sexual:
     * 0.7, violence: 0.8}.
     */
    export interface Thresholds {
      /**
       * Score threshold for sexual content. Content scoring above this value triggers
       * exceeds_threshold.
       */
      sexual?: number;

      /**
       * Score threshold for violent content. Content scoring above this value triggers
       * exceeds_threshold.
       */
      violence?: number;
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

export interface ModerateRetrieveResponse {
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

  workflow: 'moderate';

  /**
   * Error details. Present when status is 'errored'.
   */
  errors?: Array<ModerateRetrieveResponse.Error>;

  /**
   * Workflow results. Present when status is 'completed'.
   */
  outputs?: ModerateRetrieveResponse.Outputs;

  parameters?: ModerateRetrieveResponse.Parameters;

  /**
   * Arbitrary string supplied at creation, returned as-is.
   */
  passthrough?: string;

  /**
   * Related Mux resources linked to this job.
   */
  resources?: ModerateRetrieveResponse.Resources;
}

export namespace ModerateRetrieveResponse {
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
     * True if any category's max score exceeds its configured threshold.
     */
    exceeds_threshold: boolean;

    /**
     * Highest scores across all thumbnails for each category.
     */
    max_scores: Outputs.MaxScores;

    /**
     * Per-thumbnail moderation scores.
     */
    thumbnail_scores: Array<Outputs.ThumbnailScore>;
  }

  export namespace Outputs {
    /**
     * Highest scores across all thumbnails for each category.
     */
    export interface MaxScores {
      sexual: number;

      violence: number;
    }

    export interface ThumbnailScore {
      /**
       * Sexual content score from 0.0 to 1.0.
       */
      sexual: number;

      /**
       * Violence content score from 0.0 to 1.0.
       */
      violence: number;
    }
  }

  export interface Parameters {
    /**
     * The Mux asset ID of the video to moderate.
     */
    asset_id: string;

    /**
     * Language code for transcript analysis on audio-only assets. Defaults to "en".
     */
    language_code?: string;

    /**
     * Maximum number of thumbnails to sample. When set, samples are distributed evenly
     * across the video with the first and last frames pinned.
     */
    max_samples?: number;

    /**
     * Interval in seconds between sampled thumbnails. Minimum 5.
     */
    sampling_interval?: number;

    /**
     * Score thresholds that determine whether content is flagged. Defaults to {sexual:
     * 0.7, violence: 0.8}.
     */
    thresholds?: Parameters.Thresholds;
  }

  export namespace Parameters {
    /**
     * Score thresholds that determine whether content is flagged. Defaults to {sexual:
     * 0.7, violence: 0.8}.
     */
    export interface Thresholds {
      /**
       * Score threshold for sexual content. Content scoring above this value triggers
       * exceeds_threshold.
       */
      sexual?: number;

      /**
       * Score threshold for violent content. Content scoring above this value triggers
       * exceeds_threshold.
       */
      violence?: number;
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

export interface ModerateCreateParams {
  parameters: ModerateCreateParams.Parameters;

  /**
   * Arbitrary string stored with the job and returned in responses. Useful for
   * correlating jobs with your own systems.
   */
  passthrough?: string;
}

export namespace ModerateCreateParams {
  export interface Parameters {
    /**
     * The Mux asset ID of the video to moderate.
     */
    asset_id: string;

    /**
     * Language code for transcript analysis on audio-only assets. Defaults to "en".
     */
    language_code?: string;

    /**
     * Maximum number of thumbnails to sample. When set, samples are distributed evenly
     * across the video with the first and last frames pinned.
     */
    max_samples?: number;

    /**
     * Interval in seconds between sampled thumbnails. Minimum 5.
     */
    sampling_interval?: number;

    /**
     * Score thresholds that determine whether content is flagged. Defaults to {sexual:
     * 0.7, violence: 0.8}.
     */
    thresholds?: Parameters.Thresholds;
  }

  export namespace Parameters {
    /**
     * Score thresholds that determine whether content is flagged. Defaults to {sexual:
     * 0.7, violence: 0.8}.
     */
    export interface Thresholds {
      /**
       * Score threshold for sexual content. Content scoring above this value triggers
       * exceeds_threshold.
       */
      sexual?: number;

      /**
       * Score threshold for violent content. Content scoring above this value triggers
       * exceeds_threshold.
       */
      violence?: number;
    }
  }
}

export declare namespace Moderate {
  export {
    type ModerateCreateResponse as ModerateCreateResponse,
    type ModerateRetrieveResponse as ModerateRetrieveResponse,
    type ModerateCreateParams as ModerateCreateParams,
  };
}
