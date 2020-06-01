import { ViewError } from './ViewError';

export interface ErrorsResponse {
  data: Array<ViewError>;
  total_row_count?: number;
  timeframe: Array<number>;
}
