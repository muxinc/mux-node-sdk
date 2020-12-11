export interface DeliveryReport {
  live_stream_id?: string;
  asset_id: string;
  passthrough?: string;
  created_at: string;
  asset_state: string;
  asset_duration: number;
  delivered_seconds: number;
}
