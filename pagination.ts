// File generated from our OpenAPI spec by Stainless.
import { AbstractPage, APIResponse, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface PageWithTotalResponse<Item> {
  data: Array<Item>;

  total_row_count?: number;
}

export interface PageWithTotalParams {
  /**
   * Number of items to include in the response
   */
  limit?: number;

  /**
   * Offset by this many pages, of the size of `limit`
   */
  page?: number;
}

export class PageWithTotal<Item> extends AbstractPage<Item> implements PageWithTotalResponse<Item> {
  data: Array<Item>;

  total_row_count: number;

  constructor(
    client: APIClient,
    response: APIResponse<PageWithTotalResponse<Item>>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.data = response.data || [];
    this.total_row_count = response.total_row_count || 0;
  }

  getPaginatedItems(): Item[] {
    return this.data;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageWithTotalParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const query = this.options.query as PageWithTotalParams;
    const currentPage = query?.page ?? 1;
    if (currentPage >= this.total_row_count) return null;

    return { params: { page: currentPage + 1 } };
  }
}

export interface BasePageResponse<Item> {
  data: Array<Item>;
}

export interface BasePageParams {
  /**
   * Number of items to include in the response
   */
  limit?: number;

  /**
   * Offset by this many pages, of the size of `limit`
   */
  page?: number;
}

export class BasePage<Item> extends AbstractPage<Item> implements BasePageResponse<Item> {
  data: Array<Item>;

  constructor(
    client: APIClient,
    response: APIResponse<BasePageResponse<Item>>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.data = response.data || [];
  }

  getPaginatedItems(): Item[] {
    return this.data;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<BasePageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const query = this.options.query as BasePageParams;
    const currentPage = query?.page ?? 1;
    return { params: { page: currentPage + 1 } };
  }
}
