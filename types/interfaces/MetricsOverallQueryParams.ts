export interface MetricsOverallQueryParams {
  timeframe?: Array<string>;
  filters?: Array<string>;
  measurement?: '95th' | 'median' | 'avg';
}
