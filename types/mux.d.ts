// import { AxiosInstance } from 'axios';
import { EventEmitter } from 'events';

import { AssetMp4Support } from './interfaces/AssetMp4Support';
import { AudioTrack } from './interfaces/AudioTrack';
import { CreateAssetParams } from './interfaces/CreateAssetParams';
import { InputInfo } from './interfaces/InputInfo';
import { InputOverlaySettings } from './interfaces/InputOverlaySettings';
import { InputTrack } from './interfaces/InputTrack';
import { InputFile } from './interfaces/InputFile';
import { InputSettings } from './interfaces/InputSettings';
import { PlaybackId } from './interfaces/PlaybackId';
import { PlaybackIdPolicy } from './interfaces/PlaybackIdPolicy';
import { RequestOptions } from './interfaces/RequestOptions';
import { StaticRenditions } from './interfaces/StaticRenditions';
import { TextTrack } from './interfaces/TextTrack';
import { VideoTrack } from './interfaces/VideoTrack';

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

declare type Track = VideoTrack | AudioTrack | TextTrack;

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

export declare class Assets extends Base {
  create(params: CreateAssetParams): Promise<Asset>;
  del(assetId: string): Promise<any>;
  get(assetId: string): Promise<Asset>;
  inputInfo(assetId: string): Promise<Array<InputInfo>>;
  list(params: ListParams): Promise<Array<Asset>>;
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
export {
  AssetMp4Support,
  AudioTrack,
  CreateAssetParams,
  InputInfo,
  InputOverlaySettings,
  InputTrack,
  InputFile,
  InputSettings,
  PlaybackId,
  PlaybackIdPolicy,
  RequestOptions,
  StaticRenditions,
  TextTrack,
  VideoTrack,
};
