import { Asset } from './Asset';
import { PlaybackId } from './PlaybackId';
import { SimulcastTarget } from './SimulcastTarget';

export interface LiveStream {
  id?: string;
  created_at?: string;
  stream_key?: string;
  active_asset_id?: string;
  recent_asset_ids?: Array<string>;
  status?: string;
  playback_ids?: Array<PlaybackId>;
  new_asset_settings?: Asset;
  passthrough?: string;
  reconnect_window?: number;
  reduced_latency?: boolean;
  simulcast_targets?: Array<SimulcastTarget>;
  test?: boolean;
}
