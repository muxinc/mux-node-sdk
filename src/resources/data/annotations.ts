// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { BasePage, type BasePageParams } from '../../pagination';

export class Annotations extends APIResource {
  /**
   * Creates a new annotation.
   *
   * @example
   * ```ts
   * const annotation = await client.data.annotations.create({
   *   date: 1745438400,
   *   note: 'This is a note',
   *   sub_property_id: '123456',
   * });
   * ```
   */
  create(body: AnnotationCreateParams, options?: Core.RequestOptions): Core.APIPromise<Annotation> {
    return (
      this._client.post('/data/v1/annotations', { body, ...options }) as Core.APIPromise<{ data: Annotation }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Returns the details of a specific annotation.
   *
   * @example
   * ```ts
   * const annotation = await client.data.annotations.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(annotationId: string, options?: Core.RequestOptions): Core.APIPromise<Annotation> {
    return (
      this._client.get(`/data/v1/annotations/${annotationId}`, options) as Core.APIPromise<{
        data: Annotation;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Updates an existing annotation.
   *
   * @example
   * ```ts
   * const annotation = await client.data.annotations.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     date: 1745438400,
   *     note: 'This is a note',
   *     sub_property_id: '123456',
   *   },
   * );
   * ```
   */
  update(
    annotationId: string,
    body: AnnotationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Annotation> {
    return (
      this._client.patch(`/data/v1/annotations/${annotationId}`, { body, ...options }) as Core.APIPromise<{
        data: Annotation;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Returns a list of annotations.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const annotation of client.data.annotations.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: AnnotationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AnnotationsBasePage, Annotation>;
  list(options?: Core.RequestOptions): Core.PagePromise<AnnotationsBasePage, Annotation>;
  list(
    query: AnnotationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AnnotationsBasePage, Annotation> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/data/v1/annotations', AnnotationsBasePage, { query, ...options });
  }

  /**
   * Deletes an annotation.
   *
   * @example
   * ```ts
   * await client.data.annotations.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(annotationId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/data/v1/annotations/${annotationId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class AnnotationsBasePage extends BasePage<Annotation> {}

export interface Annotation {
  /**
   * Unique identifier for the annotation
   */
  id: string;

  /**
   * Datetime when the annotation applies
   */
  date: string;

  /**
   * The annotation note content
   */
  note: string;

  /**
   * Customer-defined sub-property identifier
   */
  sub_property_id?: string | null;
}

export interface AnnotationInput {
  /**
   * Datetime when the annotation applies (Unix timestamp)
   */
  date: number;

  /**
   * The annotation note content
   */
  note: string;

  /**
   * Customer-defined sub-property identifier
   */
  sub_property_id?: string;
}

export interface AnnotationResponse {
  data: Annotation;
}

export interface ListAnnotationsResponse {
  data: Array<Annotation>;

  /**
   * Total number of annotations available
   */
  total_row_count: number;

  /**
   * Start and end unix timestamps for the data range
   */
  timeframe?: Array<number>;
}

export interface AnnotationCreateParams {
  /**
   * Datetime when the annotation applies (Unix timestamp)
   */
  date: number;

  /**
   * The annotation note content
   */
  note: string;

  /**
   * Customer-defined sub-property identifier
   */
  sub_property_id?: string;
}

export interface AnnotationUpdateParams {
  /**
   * Datetime when the annotation applies (Unix timestamp)
   */
  date: number;

  /**
   * The annotation note content
   */
  note: string;

  /**
   * Customer-defined sub-property identifier
   */
  sub_property_id?: string;
}

export interface AnnotationListParams extends BasePageParams {
  /**
   * Sort order.
   */
  order_direction?: 'asc' | 'desc';

  /**
   * Timeframe window to limit results by. Must be provided as an array query string
   * parameter (e.g. timeframe[]=).
   *
   * Accepted formats are...
   *
   * - array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`
   * - duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`
   */
  timeframe?: Array<string>;
}

Annotations.AnnotationsBasePage = AnnotationsBasePage;

export declare namespace Annotations {
  export {
    type Annotation as Annotation,
    type AnnotationInput as AnnotationInput,
    type AnnotationResponse as AnnotationResponse,
    type ListAnnotationsResponse as ListAnnotationsResponse,
    AnnotationsBasePage as AnnotationsBasePage,
    type AnnotationCreateParams as AnnotationCreateParams,
    type AnnotationUpdateParams as AnnotationUpdateParams,
    type AnnotationListParams as AnnotationListParams,
  };
}
