export interface RealTimeMetricsResponse {
  total_row_count: null;
  timeframe: Array<number>;
  data: Array<{
    name: string;
    display_name: string;
  }>;
}
