// File generated from our OpenAPI spec by Stainless.
import { AbstractPage, APIResponse, APIClient, FinalRequestOptions } from './core';

export interface MorePagesResponse<Item> {
  data: Array<Item>;

  total_row_count?: number;
}

export interface MorePagesParams {
  /**
   * Number of items to include in the response
   */
  limit?: number;

  /**
   * Offset by this many pages, of the size of `limit`
   */
  page?: number;
}

export class MorePages<Item> extends AbstractPage<Item> implements MorePagesResponse<Item> {
  data: Array<Item>;

  total_row_count: number;

  constructor(
    client: APIClient,
    response: APIResponse<MorePagesResponse<Item>>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.data = response.data || [];
    this.total_row_count = response.total_row_count || 0;
  }

  getPaginatedItems(): Item[] {
    return this.data;
  }

  nextPageParams(): Partial<MorePagesParams> | null {
    const query = this.options.query as MorePagesParams;
    const currentPage = query?.page ?? 1;
    if (currentPage >= this.total_row_count) return null;

    return { page: currentPage + 1 };
  }
}

export interface NoMorePagesResponse<Item> {
  data: Array<Item>;
}

export interface NoMorePagesParams {
  /**
   * Number of items to include in the response
   */
  limit?: number;

  /**
   * Offset by this many pages, of the size of `limit`
   */
  page?: number;
}

export class NoMorePages<Item> extends AbstractPage<Item> implements NoMorePagesResponse<Item> {
  data: Array<Item>;

  constructor(
    client: APIClient,
    response: APIResponse<NoMorePagesResponse<Item>>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.data = response.data || [];
  }

  getPaginatedItems(): Item[] {
    return this.data;
  }

  nextPageParams(): Partial<NoMorePagesParams> | null {
    const query = this.options.query as NoMorePagesParams;
    const currentPage = query?.page ?? 1;
    return { page: currentPage + 1 };
  }
}
