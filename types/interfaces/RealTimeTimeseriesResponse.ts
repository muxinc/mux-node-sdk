export interface RealTimeTimeseriesResponse {
  total_row_count: null;
  timeframe: Array<number>;
  data: Array<{
    value: number;
    date: string;
    concurrent_viewers: number;
  }>;
}
