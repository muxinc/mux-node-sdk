export interface VideoViewsQueryParams {
  limit?: number;
  page?: number;
  error_id?: number;
  order_direction?: 'asc' | 'desc';
  filters?: Array<string>;
  timeframe?: Array<string>;
  viewer_id?: string;
}
