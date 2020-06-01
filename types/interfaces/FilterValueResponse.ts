import { FilterValue } from './FilterValue';

export interface FilterValueResponse {
  data: Array<FilterValue>;
  total_row_count: number;
  timeframe: Array<number>;
}
