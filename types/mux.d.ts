// import { AxiosInstance } from 'axios';
import { EventEmitter } from 'events';

import { Asset } from './interfaces/Asset';
import { AssetError } from './interfaces/AssetError';
import { AssetMaster } from './interfaces/AssetMaster';
import { AssetMp4Support } from './interfaces/AssetMp4Support';
import { AssetMasterAccess } from './interfaces/AssetMasterAccess';
import { AudioTrack } from './interfaces/AudioTrack';
import { CreateAssetParams } from './interfaces/CreateAssetParams';
import { CreateLiveStreamParams } from './interfaces/CreateLiveStreamParams';
import { CreateUploadParams } from './interfaces/CreateUploadParams';
import { ErrorsResponse } from './interfaces/ErrorsResponse';
import { ExportsResponse } from './interfaces/ExportsResponse';
import { FiltersListResponse } from './interfaces/FiltersListResponse';
import { FilterValueResponse } from './interfaces/FilterValueResponse';
import { FilterQueryParams } from './interfaces/FilterQueryParams';
import { InputInfo } from './interfaces/InputInfo';
import { InputOverlaySettings } from './interfaces/InputOverlaySettings';
import { InputTrack } from './interfaces/InputTrack';
import { InputFile } from './interfaces/InputFile';
import { InputSettings } from './interfaces/InputSettings';
import { LiveStream } from './interfaces/LiveStream';
import { PlaybackId } from './interfaces/PlaybackId';
import { PlaybackIdPolicy } from './interfaces/PlaybackIdPolicy';
import { RequestOptions } from './interfaces/RequestOptions';
import { SimulcastTarget } from './interfaces/SimulcastTarget';
import { SimulcastTargetParams } from './interfaces/SimulcastTargetParams';
import { StaticRenditions } from './interfaces/StaticRenditions';
import { TextTrack } from './interfaces/TextTrack';
import { Upload } from './interfaces/Upload';
import { VideoTrack } from './interfaces/VideoTrack';
import { ViewError } from './interfaces/ViewError';
import { Track } from './interfaces/Track';

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

export declare interface ListParams {
  limit?: number;
  page?: number;
}

export declare interface CreatePlaybackIdParams {
  policy: PlaybackIdPolicy;
}

export declare interface UpdateMp4SupportParams {
  mp4_support: AssetMp4Support;
}

export declare interface UpdateMasterAccessParams {
  master_access: AssetMasterAccess;
}

export declare class Assets extends Base {
  create(params: CreateAssetParams): Promise<Asset>;
  del(assetId: string): Promise<any>;
  createTrack(assetId: string): Promise<Track>;
  get(assetId: string): Promise<Asset>;
  inputInfo(assetId: string): Promise<Array<InputInfo>>;
  list(params: ListParams): Promise<Array<Asset>>;
  playbackId(assetId: string): Promise<PlaybackId>;
  createPlaybackId(
    assetId: string,
    params: CreatePlaybackIdParams
  ): Promise<PlaybackId>;
  deletePlaybackId(liveStreamId: string, playbackId: string): Promise<any>;
  deleteTrack(assetId: string): Promise<any>;
  updateMp4Support(
    assetId: string,
    params: UpdateMp4SupportParams
  ): Promise<Asset>;
  updateMasterAccess(
    assetId: string,
    params: UpdateMasterAccessParams
  ): Promise<Asset>;
}

export declare class LiveStreams extends Base {
  create(params: CreateLiveStreamParams): Promise<any>;
  del(liveStreamId: string): Promise<any>;
  get(liveStreamId: string): Promise<LiveStream>;
  list(params: ListParams): Promise<Array<LiveStream>>;
  signalComplete(liveStreamId: string): Promise<any>;
  resetStreamKey(liveStreamId: string): Promise<LiveStream>;
  createPlaybackId(
    liveStreamId: string,
    params: CreatePlaybackIdParams
  ): Promise<PlaybackId>;
  deletePlaybackId(liveStreamId: string, playbackId: string): Promise<any>;
  createSimulcastTarget(
    liveStreamId: string,
    params: SimulcastTargetParams
  ): Promise<SimulcastTarget>;
  getSimulcastTarget(
    liveStreamId: string,
    simulcastTargetId: string
  ): Promise<SimulcastTarget>;
  deleteSimulcastTarget(
    liveStreamId: string,
    simulcastTargetId: string
  ): Promise<any>;
}

export declare class Uploads extends Base {
  create(params: CreateUploadParams): Promise<Upload>;
  cancel(uploadId: string): Promise<Upload>;
  get(uploadId: string): Promise<Upload>;
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
  list(params?: ErrorsParams): Promise<ErrorsResponse>;
}

export declare class Exports extends Base {
  list: Promise<ExportsResponse>;
}

export declare class Filters extends Base {
  list: Promise<FiltersListResponse>;
  get(
    filterId: string,
    queryParams?: FilterQueryParams
  ): Promise<FilterValueResponse>;
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
  Asset,
  AssetError,
  AssetMaster,
  AssetMp4Support,
  AssetMasterAccess,
  AudioTrack,
  CreateAssetParams,
  CreateLiveStreamParams,
  CreateUploadParams,
  ErrorsResponse,
  ExportsResponse,
  FiltersListResponse,
  FilterQueryParams,
  FilterValueResponse,
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
  Upload,
  VideoTrack,
  ViewError,
};
