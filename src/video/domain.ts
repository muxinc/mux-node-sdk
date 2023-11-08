export type PlaybackIdPolicy = 'public' | 'signed';
export type AssetMp4Support = 'none' | 'standard';
export type AssetMasterAccess = 'none' | 'temporary';
export type TrackStatus = 'preparing' | 'ready' | 'errored';

export type LatencyMode = 'low' | 'reduced' | 'standard';

export type RecordingTimesType = 'content' | 'slate';

export interface RecordingTimes {
  started_at: string;
  duration: number;
  type?: RecordingTimesType;
}

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

export interface GeneratedSubtitlesSettings {
  name?: string;
  passthrough?: string;
  language_code?: string;
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
  generated_subtitles?: Array<GeneratedSubtitlesSettings>;
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
  max_resolution_tier?: '1080p' | '1440p' | '2160p';
  encoding_tier?: 'baseline' | 'smart';
}

export interface UpdateAssetParams {
  passthrough?: string;
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

export interface NonStandardInputReasons {
  video_codec?: string;
  audio_codec?: string;
  video_gop_size?: string;
  video_frame_rate?: string;
  video_resolution?: string;
  video_bitrate?: string;
  pixel_aspect_ratio?: string;
  video_edit_list?: string;
  audio_edit_list?: string;
  unexpected_media_file_parameters?: string;
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
  resolution_tier: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p';
  /** @deprecated Please use `resolution_tier` instead */
  max_stored_resolution?: 'Audio only' | 'SD' | 'HD' | 'FHD' | 'UHD';
  max_stored_frame_rate?: number;
  aspect_ratio?: string;
  per_title_encode?: boolean;
  is_live?: boolean;
  source_asset_id?: string;
  playback_ids?: Array<PlaybackId>;
  tracks?: Array<Track>;
  mp4_support: AssetMp4Support;
  static_renditions?: StaticRenditions;
  master_access: AssetMasterAccess;
  master?: AssetMaster;
  passthrough?: string;
  errors?: AssetError;
  upload_id?: string;
  live_stream_id?: string;
  normalize_audio?: boolean;
  recording_times?: Array<RecordingTimes>;
  non_standard_input_reasons?: NonStandardInputReasons;
  test: boolean;
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
  type: 'text' | 'audio';
  text_type?: 'subtitles';
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
  asset_resolution_tier: 'audio-only' | '720p' | '1080p' | '1440p' | '2160p';
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

export interface LiveStreamGeneratedSubtitleSettings {
  name: string;
  passthrough?: string;
  language_code?: string;
  transcription_vocabulary_ids?: Array<string>;
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
  reduced_latency?: boolean;
  latency_mode?: LatencyMode;
  simulcast_targets?: Array<SimulcastTarget>;
  test?: boolean;
  generated_subtitles?: Array<LiveStreamGeneratedSubtitleSettings>;
  use_slate_for_standard_latency?: boolean;
  reconnect_slate_url?: string;
}

export interface LiveStreamEmbeddedSubtitleSettings {
  name: string;
  passthrough?: string;
  language_code?: string;
  language_channel?: 'cc1';
}

export interface UpdateLiveStreamEmbeddedSubtitlesParams {
  embedded_subtitles: Array<LiveStreamEmbeddedSubtitleSettings>;
}

export interface UpdateLiveStreamGeneratedSubtitlesParams {
  generated_subtitles: Array<LiveStreamGeneratedSubtitleSettings>;
}

export interface CreateLiveStreamParams {
  reconnect_window?: number;
  playback_policy?: PlaybackIdPolicy | Array<PlaybackIdPolicy>;
  new_asset_settings?: Partial<CreateAssetParams>;
  passthrough?: string;
  reduced_latency?: boolean;
  latency_mode?: LatencyMode;
  simulcast_targets?: Array<SimulcastTargetParams>;
  test?: boolean;
  audio_only?: boolean;
  max_continuous_duration?: number;
  embedded_subtitles?: Array<LiveStreamEmbeddedSubtitleSettings>;
  generated_subtitles?: Array<LiveStreamGeneratedSubtitleSettings>;
  use_slate_for_standard_latency?: boolean;
  reconnect_slate_url?: string;
}

export interface UpdateLiveStreamParams {
  passthrough?: string;
  latency_mode?: LatencyMode;
  reconnect_window?: number;
  max_continuous_duration?: number;
  use_slate_for_standard_latency?: boolean;
  reconnect_slate_url?: string;
}

export interface ListLiveStreamParams {
  limit?: number;
  page?: number;
  live_stream_id?: string;
  stream_key?: string;
  status?: string;
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

export interface ReferrerDomainRestriction {
  allowed_domains?: Array<string>;
  allow_no_referrer?: boolean;
}

export interface CreatePlaybackRestrictionParams {
  referrer?: ReferrerDomainRestriction;
}

export interface PlaybackRestriction {
  id: string;
  created_at: string;
  updated_at?: string;
  referrer?: ReferrerDomainRestriction;
}

export type SpaceStatus = 'idle' | 'active';
export type BroadcastStatus = 'idle' | 'active';
export type BroadcastLayout = 'gallery' | 'active-speaker';
export type BroadcastResolution =
  | '1920x1080'
  | '1280x720'
  | '1080x1920'
  | '720x1280'
  | '1080x1080'
  | '720x720';

export interface Broadcast {
  id: string;
  live_stream_id: string;
  status: BroadcastStatus;
  layout: BroadcastLayout;
  resolution: BroadcastResolution;

  passthrough?: string;
  background?: string;
}

export interface Space {
  id: string;
  created_at: string;
  type: 'server';
  status: SpaceStatus;
  passthrough?: string;
  broadcasts?: Array<Broadcast>;
}

export interface CreateBroadcastRequest {
  live_stream_id: string;

  passthrough?: string;
  layout?: BroadcastLayout;
  resolution?: BroadcastResolution;
}

export interface CreateSpaceRequest {
  type?: 'server';
  passthrough?: string;
  broadcasts?: Array<CreateBroadcastRequest>;
}

export interface ListSpacesRequest {
  limit?: number;
  page?: number;
}

export interface TranscriptionVocabulary {
  id: string;
  name: string;
  phrases: string[];
  created_at: string;
  updated_at?: string;
}

export interface UpsertTranscriptionVocabularyParams {
  name: string;
  phrases: string[];
  passthrough?: string;
}
