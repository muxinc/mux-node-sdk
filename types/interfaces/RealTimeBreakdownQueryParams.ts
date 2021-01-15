export interface RealTimeBreakdownQueryParams {
  dimension: string;
  timestamp?: number;
  filters?: Array<string>;
  order_by?:
    | 'value'
    | 'negative_impact'
    | 'metric_value'
    | 'concurrent_viewers';
  order_direction?: 'asc' | 'desc';
}
