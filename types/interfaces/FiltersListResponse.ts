export interface FiltersListResponse {
  total_row_count: null;
  timeframe: Array<number>;
  data: {
    basic: Array<string>;
    advanced: Array<string>;
  };
}
