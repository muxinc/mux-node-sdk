import { MetricsComparisonValue } from './MetricsComparisonValue';

export interface MetricsComparisonResponse {
  data?: Array<MetricsComparisonValue>;
  total_row_count?: number;
  timeframe?: Array<number>;
}
