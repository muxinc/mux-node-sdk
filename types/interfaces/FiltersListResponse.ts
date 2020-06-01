export interface FiltersListResponse {
  data: {
    basic: Array<string>;
    advanced: Array<string>;
  };
  total_row_count?: number;
  timeframe?: Array<number>;
}
