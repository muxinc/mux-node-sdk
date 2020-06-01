import { Incident } from './Incident';

export interface IncidentsResponse {
  total_row_count?: number;
  timeframe?: Array<number>;
  data: Array<Incident>;
}
