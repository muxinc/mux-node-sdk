import { AssetMaster } from './AssetMaster';
import { AssetMasterAccess } from './AssetMasterAccess';
import { AssetMp4Support } from './AssetMp4Support';
import { PlaybackId } from './PlaybackId';
import { StaticRenditions } from './StaticRenditions';
import { Track } from './Track';
import { AssetError } from './AssetError';

export declare interface Asset {
  id: string;
  created_at: string;
  status: 'preparing' | 'ready' | 'errored';
  duration?: number;
  max_stored_resolution?: 'Audio-only' | 'SD' | 'HD' | 'FHD' | 'UHD';
  max_stored_frame_rate?: number;
  aspect_ratio?: string;
  per_title_encode?: boolean;
  is_live?: boolean;
  playback_ids?: Array<PlaybackId>;
  tracks?: Array<Track>;
  mp4_support: AssetMp4Support;
  static_renditions?: StaticRenditions;
  master_access: AssetMasterAccess;
  master?: AssetMaster;
  passthrough?: string;
  errors?: AssetError;
}
