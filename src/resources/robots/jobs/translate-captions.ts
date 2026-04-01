// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Translate captions from one language to another.
 */
export class TranslateCaptions extends APIResource {
  /**
   * Creates a new job that translates captions on a Mux Video asset from one
   * language to another.
   *
   * @example
   * ```ts
   * const translateCaption =
   *   await client.robots.jobs.translateCaptions.create({
   *     parameters: {
   *       asset_id: 'mux_asset_123abc',
   *       from_language_code: 'en',
   *       to_language_code: 'es',
   *     },
   *   });
   * ```
   */
  create(
    body: TranslateCaptionCreateParams,
    options?: RequestOptions,
  ): APIPromise<TranslateCaptionCreateResponse> {
    return (
      this._client.post('/robots/v1/jobs/translate-captions', {
        body,
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: TranslateCaptionCreateResponse }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Retrieves the current status and results of a 'translate-captions' job.
   *
   * @example
   * ```ts
   * const translateCaption =
   *   await client.robots.jobs.translateCaptions.retrieve(
   *     'rjob_E6fdcD7d-cDdf-baAa-b31A-1ae5A92d336F',
   *   );
   * ```
   */
  retrieve(jobID: string, options?: RequestOptions): APIPromise<TranslateCaptionRetrieveResponse> {
    return (
      this._client.get(path`/robots/v1/jobs/translate-captions/${jobID}`, {
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: TranslateCaptionRetrieveResponse }>
    )._thenUnwrap((obj) => obj.data);
  }
}

export interface TranslateCaptionCreateResponse {
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

  workflow: 'translate-captions';

  /**
   * Error details. Present when status is 'errored'.
   */
  errors?: Array<TranslateCaptionCreateResponse.Error>;

  /**
   * Workflow results. Present when status is 'completed'.
   */
  outputs?: TranslateCaptionCreateResponse.Outputs;

  parameters?: TranslateCaptionCreateResponse.Parameters;

  /**
   * Arbitrary string supplied at creation, returned as-is.
   */
  passthrough?: string;

  /**
   * Related Mux resources linked to this job.
   */
  resources?: TranslateCaptionCreateResponse.Resources;
}

export namespace TranslateCaptionCreateResponse {
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
     * Temporary pre-signed URL to download the translated VTT file. Present when
     * upload_to_mux is true.
     */
    temporary_vtt_url?: string;

    /**
     * Mux text track ID of the uploaded translated captions. Present when
     * upload_to_mux is true.
     */
    uploaded_track_id?: string;
  }

  export interface Parameters {
    /**
     * The Mux asset ID of the video whose captions will be translated.
     */
    asset_id: string;

    /**
     * ISO 639-1 source language code (e.g. "en", "fr").
     */
    from_language_code: string;

    /**
     * ISO 639-1 target language code (e.g. "es", "ja").
     */
    to_language_code: string;

    /**
     * Whether to upload the translated VTT and attach it as a text track on the Mux
     * asset. Defaults to true.
     */
    upload_to_mux?: boolean;
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

export interface TranslateCaptionRetrieveResponse {
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

  workflow: 'translate-captions';

  /**
   * Error details. Present when status is 'errored'.
   */
  errors?: Array<TranslateCaptionRetrieveResponse.Error>;

  /**
   * Workflow results. Present when status is 'completed'.
   */
  outputs?: TranslateCaptionRetrieveResponse.Outputs;

  parameters?: TranslateCaptionRetrieveResponse.Parameters;

  /**
   * Arbitrary string supplied at creation, returned as-is.
   */
  passthrough?: string;

  /**
   * Related Mux resources linked to this job.
   */
  resources?: TranslateCaptionRetrieveResponse.Resources;
}

export namespace TranslateCaptionRetrieveResponse {
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
     * Temporary pre-signed URL to download the translated VTT file. Present when
     * upload_to_mux is true.
     */
    temporary_vtt_url?: string;

    /**
     * Mux text track ID of the uploaded translated captions. Present when
     * upload_to_mux is true.
     */
    uploaded_track_id?: string;
  }

  export interface Parameters {
    /**
     * The Mux asset ID of the video whose captions will be translated.
     */
    asset_id: string;

    /**
     * ISO 639-1 source language code (e.g. "en", "fr").
     */
    from_language_code: string;

    /**
     * ISO 639-1 target language code (e.g. "es", "ja").
     */
    to_language_code: string;

    /**
     * Whether to upload the translated VTT and attach it as a text track on the Mux
     * asset. Defaults to true.
     */
    upload_to_mux?: boolean;
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

export interface TranslateCaptionCreateParams {
  parameters: TranslateCaptionCreateParams.Parameters;

  /**
   * Arbitrary string stored with the job and returned in responses. Useful for
   * correlating jobs with your own systems.
   */
  passthrough?: string;
}

export namespace TranslateCaptionCreateParams {
  export interface Parameters {
    /**
     * The Mux asset ID of the video whose captions will be translated.
     */
    asset_id: string;

    /**
     * ISO 639-1 source language code (e.g. "en", "fr").
     */
    from_language_code: string;

    /**
     * ISO 639-1 target language code (e.g. "es", "ja").
     */
    to_language_code: string;

    /**
     * Whether to upload the translated VTT and attach it as a text track on the Mux
     * asset. Defaults to true.
     */
    upload_to_mux?: boolean;
  }
}

export declare namespace TranslateCaptions {
  export {
    type TranslateCaptionCreateResponse as TranslateCaptionCreateResponse,
    type TranslateCaptionRetrieveResponse as TranslateCaptionRetrieveResponse,
    type TranslateCaptionCreateParams as TranslateCaptionCreateParams,
  };
}
