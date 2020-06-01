import { Insight } from './Insight';

export interface MetricsInsightsResponse {
  data?: Array<Insight>;
  total_row_count?: number;
  timeframe?: Array<number>;
}
