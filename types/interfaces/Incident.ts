export interface Incident {
  id: string;
  threshold?: number;
  status: string;
  started_at: string;
  severity?: string;
  sample_size_unit?: string;
  sample_size?: number;
  resolved_at?: string;
  notifications?: Array<any>;
  notification_rules?: Array<any>;
  measurement?: string;
  measured_value_on_close?: number;
  measured_value?: number;
  incident_key?: string;
  impact?: string;
  error_description?: string;
  description?: string;
  breakdowns?: Array<any>;
  affected_views_per_hour_on_open?: number;
  affected_views_per_hour?: number;
  affected_views?: number;
}
