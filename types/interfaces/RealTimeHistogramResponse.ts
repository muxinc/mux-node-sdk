import { RealTimeHistogramValue } from './RealTimeHistogramValue';

export interface RealTimeHistogramResponse {
  total_row_count: null;
  timeframe: Array<number>;
  meta: {
    buckets: Array<{ start: number; end: number }>;
    bucket_unit: string;
  };
  data: Array<RealTimeHistogramValue>;
}
