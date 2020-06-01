import { MetricsBreakdownValue } from './MetricsBreakdownValue';

export interface MetricsBreakdownResponse {
  data?: Array<MetricsBreakdownValue>;
  total_row_count?: number;
  timeframe?: Array<number>;
}
