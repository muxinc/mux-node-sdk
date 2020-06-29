export interface RealTimeHistogramValue {
  timestamp: string;
  sum: number;
  p95: number;
  median: number;
  max_percentage: number;
  average: number;
  bucket_values: Array<{
    percentage: number;
    count: number;
  }>;
}
