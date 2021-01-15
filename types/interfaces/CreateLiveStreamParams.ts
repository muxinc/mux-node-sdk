import { PlaybackIdPolicy } from './PlaybackIdPolicy';
import { SimulcastTargetParams } from './SimulcastTargetParams';
import { CreateAssetParams } from './CreateAssetParams';

export interface CreateLiveStreamParams {
  reconnect_window?: number;
  playback_policy?: PlaybackIdPolicy | Array<PlaybackIdPolicy>;
  new_asset_settings?: Partial<CreateAssetParams>;
  passthrough?: string;
  reduced_latency?: boolean;
  simulcast_targets?: Array<SimulcastTargetParams>;
  test?: boolean;
}
