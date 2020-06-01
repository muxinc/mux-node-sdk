export interface FilterQueryParams {
  filterId: string;
  limit?: number;
  page?: number;
  filters?: Array<string>;
  timeframe?: Array<string>;
}
