export interface FilterQueryParams {
  filter_id: string;
  limit?: number;
  page?: number;
  filters?: Array<string>;
  timeframe?: Array<string>;
}
