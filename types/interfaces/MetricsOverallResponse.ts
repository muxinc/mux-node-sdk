import { MetricsOverallValue } from './MetricsOverallValue';

export interface MetricsOverallResponse {
  data?: MetricsOverallValue;
  total_row_count?: number;
  timeframe?: Array<number>;
}
