// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Workflows.
 */
export class Workflows extends APIResource {
  /**
   * List all available workflows
   *
   * @example
   * ```ts
   * const workflows = await client.robots.workflows.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<WorkflowListResponse> {
    return (
      this._client.get('/robots/v1/workflows', {
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: WorkflowListResponse }>
    )._thenUnwrap((obj) => obj.data);
  }
}

export type WorkflowListResponse = Array<WorkflowListResponse.WorkflowListResponseItem>;

export namespace WorkflowListResponse {
  export interface WorkflowListResponseItem {
    /**
     * Unique identifier for the workflow
     */
    id: string;

    /**
     * Hypermedia action links
     */
    _links: WorkflowListResponseItem._Links;

    /**
     * What this workflow does
     */
    description: string;

    /**
     * Categorization tags
     */
    tags: Array<string>;

    /**
     * Human-readable workflow title
     */
    title: string;

    /**
     * Workflow type
     */
    type: 'prebuilt';
  }

  export namespace WorkflowListResponseItem {
    /**
     * Hypermedia action links
     */
    export interface _Links {
      create_job: _Links.CreateJob;

      get_job: _Links.GetJob;
    }

    export namespace _Links {
      export interface CreateJob {
        href: string;

        method: 'POST';
      }

      export interface GetJob {
        href: string;

        method: 'GET';
      }
    }
  }
}

export declare namespace Workflows {
  export { type WorkflowListResponse as WorkflowListResponse };
}
