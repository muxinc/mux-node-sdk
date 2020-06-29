import { Metric } from './Metric';

export interface MetricsComparisonValue {
  watch_time?: number;
  view_count?: number;
  name?: string;
  value?: number;
  metric?: string;
  items?: Array<Metric>;
}
