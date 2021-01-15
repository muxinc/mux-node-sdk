export interface MetricsTimeseriesQueryParams {
  filters?: Array<string>;
  timeframe?: Array<string>;
  measurement?: '95th' | 'median' | 'avg';
  group_by?: string;
}
