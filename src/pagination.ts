// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface PageWithTotalResponse<Item> {
  data: Array<Item>;

  total_row_count: number;

  timeframe: Array<number>;

  /**
   * Number of assets returned in this response. Default value is 100.
   */
  limit: number;
}

export interface PageWithTotalParams {
  page?: number;

  limit?: number;
}

export class PageWithTotal<Item> extends AbstractPage<Item> implements PageWithTotalResponse<Item> {
  data: Array<Item>;

  total_row_count: number;

  timeframe: Array<number>;

  /**
   * Number of assets returned in this response. Default value is 100.
   */
  limit: number;

  constructor(
    client: APIClient,
    response: Response,
    body: PageWithTotalResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.total_row_count = body.total_row_count || 0;
    this.timeframe = body.timeframe || [];
    this.limit = body.limit || 0;
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
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

    return { params: { page: currentPage + 1 } };
  }
}

export interface BasePageResponse<Item> {
  data: Array<Item>;
}

export interface BasePageParams {
  page?: number;

  limit?: number;
}

export class BasePage<Item> extends AbstractPage<Item> implements BasePageResponse<Item> {
  data: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: BasePageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
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
