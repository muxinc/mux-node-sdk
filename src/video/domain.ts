export type PlaybackIdPolicy = 'public' | 'signed';
export type AssetMp4Support = 'none' | 'standard';
export type AssetMasterAccess = 'none' | 'temporary';
export type TrackStatus = 'preparing' | 'ready' | 'errored';

export interface SigningKey {
  id: string;
  created_at: string;
  private_key?: string;
}

export interface Identifier {
  type: 'asset' | 'live_stream';
  id: string;
}

export interface PlaybackIdentifier {
  policy: 'public' | 'signed';
  object: Identifier;
  id: string;
}

export interface PlaybackId {
  id: string;
  policy: 'public' | 'signed';
}

export interface AudioTrack {
  id: string;
  passthrough: string;
  status: TrackStatus;
  type: 'audio';
  duration: number;
  max_channels: number;
  max_channel_layout: string;
}

export interface TextTrack {
  id: string;
  passthrough: string;
  status: TrackStatus;
  type: 'text';
  text_type: 'subtitles';
  language_code: string;
  closed_captions: boolean;
  name: string;
}

export interface VideoTrack {
  id: string;
  passthrough: string;
  status: TrackStatus;
  type: 'video';
  duration: number;
  max_width: number;
  max_height: number;
  max_frame_rate: number;
}

export type Track = VideoTrack | AudioTrack | TextTrack;

export interface InputOverlaySettings {
  vertical_align?: 'top' | 'middle' | 'bottom';
  vertical_margin?: string;
  horizontal_align?: 'left' | 'center' | 'right';
  horizontal_margin?: string;
  width?: string;
  height?: string;
  opacity?: string;
}

export interface InputSettings {
  url: string;
  start_time?: number;
  end_time?: number;
  overlay_settings?: InputOverlaySettings;
  type?: 'video' | 'audio' | 'text';
  text_type?: 'subtitles';
  language_code?: string;
  name?: string;
  closed_captions?: boolean;
  passthrough?: string;
}

export interface CreateAssetParams {
  input: string | Array<InputSettings>;
  playback_policy?: PlaybackIdPolicy | Array<PlaybackIdPolicy>;
  passthrough?: string;
  mp4_support?: AssetMp4Support;
  normalize_audio?: boolean;
  test?: boolean;
  master_access?: AssetMasterAccess;
  per_title_encode?: boolean;
}

export interface StaticRendition {
  name: 'low.mp4' | 'medium.mp4' | 'high.mp4';
  ext: 'mp4';
  height: number;
  width: number;
  bitrate: number;
  filesize: number;
}

export interface StaticRenditions {
  status: 'ready' | 'preparing' | 'errored';
  files: Array<StaticRendition>;
}

export declare interface AssetMaster {
  status: 'ready' | 'preparing' | 'errored';
  url: string;
}

export declare interface AssetError {
  type: 'invalid_input' | string;
  messages: Array<string>;
}

export interface Asset {
  id: string;
  created_at: string;
  status: 'preparing' | 'ready' | 'errored';
  duration?: number;
  max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD';
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

export interface InputTrack {
  type?: string;
  duration?: number;
  encoding?: string;
  width?: number;
  height?: number;
  frame_rate?: number;
  sample_rate?: number;
  sample_size?: number;
  channels?: number;
}

export interface InputFile {
  container_format?: string;
  tracks?: Array<InputTrack>;
}

export interface InputInfo {
  settings: InputOverlaySettings;
  file: InputFile;
}

export interface ListAssetParams {
  limit?: number;
  page?: number;
  live_stream_id?: string;
  upload_id?: string;
}

export interface CreatePlaybackIdParams {
  policy: PlaybackIdPolicy;
}

export interface CreateTrackParams {
  url: string;
  type: 'text';
  text_type: 'subtitles';
  language_code: string;
  name?: string;
  closed_captions?: boolean;
  passthrough?: string;
}

export interface UpdateMp4SupportParams {
  mp4_support: AssetMp4Support;
}

export interface UpdateMasterAccessParams {
  master_access: AssetMasterAccess;
}

export interface ListDeliveryUsageParams {
  limit?: number;
  page?: number;
  asset_id?: string;
  timeframe: Array<number>;
}

export interface DeliveryReport {
  live_stream_id?: string;
  asset_id: string;
  passthrough?: string;
  created_at: string;
  asset_state: string;
  asset_duration: number;
  delivered_seconds: number;
}

export interface SimulcastTargetParams {
  url: string;
  stream_key?: string;
  passthrough?: string;
}

export interface SimulcastTarget {
  id?: string;
  passthrough?: string;
  status: 'idle' | 'starting' | 'broadcasting' | 'errored';
  stream_key?: string;
  url: string;
}

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
  latency_mode?: 'low' | 'reduced';
  simulcast_targets?: Array<SimulcastTarget>;
  test?: boolean;
}

export interface CreateLiveStreamParams {
  reconnect_window?: number;
  playback_policy?: PlaybackIdPolicy | Array<PlaybackIdPolicy>;
  new_asset_settings?: Partial<CreateAssetParams>;
  passthrough?: string;
  latency_mode?: 'low' | 'reduced';
  simulcast_targets?: Array<SimulcastTargetParams>;
  test?: boolean;
}

export interface ListLiveStreamParams {
  limit?: number;
  page?: number;
  live_stream_id?: string;
  upload_id?: string;
}

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

export interface CreateUploadParams {
  timeout?: string;
  cors_origin?: string;
  new_asset_settings?: Partial<CreateAssetParams>;
  test?: boolean;
}

export interface ListUploadParams {
  limit?: number;
  page?: number;
  upload_id?: string;
}
