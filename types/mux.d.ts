// import { AxiosInstance } from 'axios';
import { EventEmitter } from 'events';
import { RequestOptions } from './interfaces/RequestOptions';

export declare class Base extends EventEmitter {
  private _tokenId?: string;
  private _tokenSecret?: string;
  private _config?: RequestOptions;
  private _requestOptions?: RequestOptions;

  constructor(base: Base | RequestOptions);
  constructor(tokenId: string, tokenSecret: string, config: RequestOptions);
  constructor(
    param?: Base | RequestOptions | string,
    tokenSecret?: string,
    config?: RequestOptions
  );
  constructor(...params: any[]);
}

export declare interface PlaybackId {
  id: string;
  policy: 'public' | 'signed';
}

export declare interface BaseTrack {
  id: string;
  passthrough: string;
  status: TrackStatus;
}

export declare interface AudioTrack extends BaseTrack {
  type: 'audio';
  duration: number;
  max_channels: number;
  max_channel_layout: TrackMaxChannelLayout;
}

/*
export declare interface TextTrack extends BaseTrack {
  type: 'text';
  text_type: 'subtitles';
  language_code: string;
  closed_captions: boolean;
  name: string;
}
*/

export declare interface VideoTrack extends BaseTrack {
  type: 'video';
  duration: number;
  max_width: number;
  max_height: number;
  max_frame_rate: number;
}

type TrackMaxChannelLayout = 'mono' | 'stereo' | '5.1' | '7.1';
type TrackStatus = 'preparing' | 'ready' | 'errored';
type TrackType = 'video' | 'audio' | 'text';
type Track = VideoTrack | AudioTrack | TextTrack;
type AssetMp4Support = 'none' | 'standard';

export declare interface StaticRenditions {
  status: 'ready' | 'preparing' | 'errored';
  files: File[];
}
export declare interface File {
  name: 'low.mp4' | 'medium.mp4' | 'high.mp4';
  ext: 'mp4';
  height: number;
  width: number;
  bitrate: number;
  filesize: number;
}

export declare interface TextTrack {
  type: 'text';
  text_type: 'subtitles';
  language_code: string;
  closed_captions: boolean;
  name: string;
}
type MasterAcces = 'none' | 'temporary';
type MasterStatus = 'ready' | 'preparing' | 'errored';
export declare interface Master {
  status: MasterStatus;
  url: string;
}
export declare interface AssetError {
  type: 'invalid_input' | string;
  messages: string[];
}

export declare interface Asset {
  id: string;
  created_at: string;
  status: 'preparing' | 'ready' | 'errored';
  duration: number;
  max_stored_resolution: 'Audio-only' | 'SD' | 'HD' | 'FHD' | 'UHD';
  max_stored_frame_rate: number;
  aspect_ratio: string;
  per_title_encode: boolean;
  is_live: boolean;
  playback_ids: PlaybackId[];
  tracks: Track[];
  mp4_support: AssetMp4Support;
  static_renditions: StaticRenditions;
  master_access: MasterAcces;
  master: Master;
  passthrough: string;
  errors: AssetError;
}

export declare type PlaybackIdPolicy = 'public' | 'signed';

export declare interface InputOverlaySetting {
  vertical_align?: 'top' | 'middle' | 'bottom';
  vertical_margin?: string;
  horizontal_align?: 'left' | 'center' | 'right';
  horizontal_margin?: string;
  width?: string;
  height?: string;
  opacity?: string;
}

export declare interface Input {
  url: string;
  overlay_settings?: InputOverlaySetting;
  type?: 'video' | 'audio' | 'text';
  text_type?: string;
  language_code?: string;
  name?: string;
  closed_captions?: boolean;
  passthrough?: string;
}
/*
export interface CreateAssetRequest {
    input?: Array<InputSettings>;
    playback_policy?: Array<PlaybackPolicy>;
    demo?: boolean;
    per_title_encode?: boolean;
    passthrough?: string;
    mp4_support?: CreateAssetRequest.mp4_support;
}
*/

export declare interface CreateAssetParams {
  input: string | Input[];
  playback_policy?: PlaybackIdPolicy | (PlaybackIdPolicy)[];
  passthrough?: string;
  mp4_support?: AssetMp4Support;
  normalize_audio?: boolean;
}

export declare interface SimulcastTargetParams {
  url: string;
  stream_key?: string;
  passthrough?: string;
}

export declare interface CreateLiveStreamParams {
  reconnect_window?: number;
  playback_policy?: PlaybackIdPolicy | (PlaybackIdPolicy)[];
  new_asset_settings?: any;
  passthrough?: string;
  reduced_latency?: boolean;
  simulcast_targets?: SimulcastTargetParams[];
  test?: boolean;
}

export declare interface ListParams {
  limit: number;
  page: number;
}

export declare interface CreatePlaybackIdParams {
  policy: PlaybackIdPolicy;
}

export declare interface AssetResponse {
  data: Asset;
}

export declare class Assets extends Base {
  create(params: CreateAssetParams): Promise<AssetResponse>;
  del(assetId: string): Promise<any>;
  get(assetId: string): Promise<AssetResponse>;
  inputInfo(assetId: string): Promise<any>;
  list(params: ListParams): Promise<any>;
}

export declare class LiveStreams extends Base {
  create(params: CreateLiveStreamParams): Promise<any>;
  del(liveStreamId: string): Promise<any>;
  get(liveStreamId: string): Promise<any>;
  list(params: ListParams): Promise<any>;
  signalComplete(liveStreamId: string): Promise<any>;
  resetStreamKey(liveStreamId: string): Promise<any>;
  createPlaybackId(
    liveStreamId: string,
    params: CreatePlaybackIdParams
  ): Promise<any>;
  deletePlaybackId(liveStreamId: string, playbackId: string): Promise<any>;
  createSimulcastTarget(
    liveStreamId: string,
    params: SimulcastTargetParams
  ): Promise<any>;
  getSimulcastTarget(
    liveStreamId: string,
    simulcastTargetId: string
  ): Promise<any>;
  deleteSimulcastTarget(
    liveStreamId: string,
    simulcastTargetId: string
  ): Promise<any>;
}

export declare interface CreateUploadParams {
  timeout?: string;
  cors_origin?: string;
  new_asset_settings?: any;
  test?: boolean;
}

export declare class Uploads extends Base {
  create(params: CreateUploadParams): Promise<any>;
  cancel(uploadId: string): Promise<any>;
  get(uploadId: string): Promise<any>;
}

export declare interface JWTOptions {
  keyId: string;
  keySecret: string;
  type: string;
  params?: any;
}

export declare class JWT {
  static sign(playbackId: string, options: JWTOptions): string;
}

export declare class Webhooks {
  static verifyHeader(
    payload: string | Buffer,
    headers: string,
    secret: string,
    tolerance?: number
  ): boolean;
}

export declare interface ErrorsParams {
  filters?: any[];
  array?: any[];
}

export declare class Errors extends Base {
  list(params?: ErrorsParams): Promise<any>;
}

export declare class Exports extends Base {
  list: Promise<any>;
}

export declare class Filters extends Base {
  list: Promise<any>;
  get(filterId: string, queryParams?: any): Promise<any>;
}

export declare class Incidents extends Base {
  list(queryParams?: any): Promise<any>;
  get(incidentId: string): Promise<any>;
  related(incidentId: string, queryParams?: any): Promise<any>;
}

export declare class Metrics extends Base {
  breakdown(metricId: string, queryParams: any): Promise<any>;
  comparison(queryParams: any): Promise<any>;
  insights(metricId: string, queryParams?: any): Promise<any>;
  overall(metricId: string, queryParams?: any): Promise<any>;
  timeseries(metricId: string, queryParams?: any): Promise<any>;
}

export declare class RealTime extends Base {
  breakdown(metricId: string, queryParams: any): Promise<any>;
  dimensions(): Promise<any>;
  histogramTimeseries(metricId: string, queryParams: any): Promise<any>;
  metrics(): Promise<any>;
  timeseries(metricId: string, queryParams: any): Promise<any>;
}

export declare class VideoViews extends Base {
  get(videoViewId: string): Promise<any>;
  list(queryParams: any): Promise<any>;
}

export declare class Video extends Base {
  Assets: Assets;
  LiveStreams: LiveStreams;
  Uploads: Uploads;
  Metrics: Metrics;
}

export declare class Data extends Base {
  Errors: Errors;
  Exports: Exports;
  Filters: Filters;
  Incidents: Incidents;
  Metrics: Metrics;
  RealTime: RealTime;
  VideoViews: VideoViews;
}

declare class Mux extends Base {
  constructor(
    accessTokenOrConfig?: string | RequestOptions,
    secret?: string,
    config?: RequestOptions
  );
  Video: Video;
  Data: Data;
  static JWT: typeof JWT;
  static Webhooks: typeof Webhooks;
}

export default Mux;
export { RequestOptions };
