export interface MetricsBreakdownQueryParams {
  group_by: string;
  measurement?: '95th' | 'median' | 'avg';
  filters?: Array<string>;
  limit?: number;
  page?: number;
  order_by?: 'negative_impact' | 'value' | 'views' | 'field';
  order_direction?: 'asc' | 'desc';
  timeframe?: Array<string>;
}
