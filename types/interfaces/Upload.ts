import { CreateAssetParams } from './CreateAssetParams';

export interface Upload {
  id: string;
  timeout: number;
  status: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out';
  new_asset_settings: CreateAssetParams;
  asset_id?: string;
  error?: {
    type?: string;
    message?: string;
  };
  cors_origin?: string;
  url: string;
  test?: boolean;
}
