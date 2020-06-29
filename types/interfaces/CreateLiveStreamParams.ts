import { PlaybackIdPolicy } from './PlaybackIdPolicy';
import { SimulcastTargetParams } from './SimulcastTargetParams';

export interface CreateLiveStreamParams {
  reconnect_window?: number;
  playback_policy?: PlaybackIdPolicy | Array<PlaybackIdPolicy>;
  new_asset_settings?: any;
  passthrough?: string;
  reduced_latency?: boolean;
  simulcast_targets?: Array<SimulcastTargetParams>;
  test?: boolean;
}
