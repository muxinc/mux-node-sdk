import { EventEmitter } from 'events';

import { Asset } from './interfaces/Asset';
import { AssetError } from './interfaces/AssetError';
import { AssetMaster } from './interfaces/AssetMaster';
import { AssetMasterAccess } from './interfaces/AssetMasterAccess';
import { AssetMp4Support } from './interfaces/AssetMp4Support';
import { AudioTrack } from './interfaces/AudioTrack';
import { CreateAssetParams } from './interfaces/CreateAssetParams';
import { CreateLiveStreamParams } from './interfaces/CreateLiveStreamParams';
import { CreateUploadParams } from './interfaces/CreateUploadParams';
import { FilterQueryParams } from './interfaces/FilterQueryParams';
import { FilterValue } from './interfaces/FilterValue';
import { FiltersListResponse } from './interfaces/FiltersListResponse';
import { Incident } from './interfaces/Incident';
import { IncidentsQueryParams } from './interfaces/IncidentsQueryParams';
import { InputFile } from './interfaces/InputFile';
import { InputInfo } from './interfaces/InputInfo';
import { InputOverlaySettings } from './interfaces/InputOverlaySettings';
import { InputSettings } from './interfaces/InputSettings';
import { InputTrack } from './interfaces/InputTrack';
import { Insight } from './interfaces/Insight';
import { LiveStream } from './interfaces/LiveStream';
import { Metric } from './interfaces/Metric';
import { MetricsBreakdownQueryParams } from './interfaces/MetricsBreakdownQueryParams';
import { MetricsBreakdownValue } from './interfaces/MetricsBreakdownValue';
import { MetricsComparisonQueryParams } from './interfaces/MetricsComparisonQueryParams';
import { MetricsComparisonValue } from './interfaces/MetricsComparisonValue';
import { MetricsInsightsQueryParams } from './interfaces/MetricsInsightsQueryParams';
import { MetricsOverallQueryParams } from './interfaces/MetricsOverallQueryParams';
import { MetricsOverallValue } from './interfaces/MetricsOverallValue';
import { MetricsTimeseriesQueryParams } from './interfaces/MetricsTimeseriesQueryParams';
import { PlaybackId } from './interfaces/PlaybackId';
import { PlaybackIdPolicy } from './interfaces/PlaybackIdPolicy';
import { RealTimeBreakdownQueryParams } from './interfaces/RealTimeBreakdownQueryParams';
import { RealTimeBreakdownValue } from './interfaces/RealTimeBreakdownValue';
import { RealTimeDimensionsValue } from './interfaces/RealTimeDimensionsValue';
import { RealTimeHistogramQueryParams } from './interfaces/RealTimeHistogramQueryParams';
import { RealTimeHistogramResponse } from './interfaces/RealTimeHistogramResponse';
import { RealTimeHistogramValue } from './interfaces/RealTimeHistogramValue';
import { RealTimeMetricsResponse } from './interfaces/RealTimeMetricsResponse';
import { RealTimeTimeseriesParams } from './interfaces/RealTimeTimeseriesParams';
import { RealTimeTimeseriesResponse } from './interfaces/RealTimeTimeseriesResponse';
import { RequestOptions } from './interfaces/RequestOptions';
import { SimulcastTarget } from './interfaces/SimulcastTarget';
import { SimulcastTargetParams } from './interfaces/SimulcastTargetParams';
import { StaticRenditions } from './interfaces/StaticRenditions';
import { TextTrack } from './interfaces/TextTrack';
import { Track } from './interfaces/Track';
import { Upload } from './interfaces/Upload';
import { VideoTrack } from './interfaces/VideoTrack';
import { VideoView } from './interfaces/VideoView';
import { VideoViewsQueryParams } from './interfaces/VideoViewsQueryParams';
import { ViewError } from './interfaces/ViewError';

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
  constructor(...params: Array<any>);
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
  create(params: CreateLiveStreamParams): Promise<LiveStream>;
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
  enable(liveStreamId: string): Promise<any>;
  disable(liveStreamId: string): Promise<any>;
}

export declare class Uploads extends Base {
  create(params: CreateUploadParams): Promise<Upload>;
  cancel(uploadId: string): Promise<Upload>;
  get(uploadId: string): Promise<Upload>;
}

export declare interface JWTOptions {
  type?: 'video' | 'thumbnail' | 'gif' | 'storyboard';
  keyId?: string;
  keySecret?: string;
  expiration?: string;
  params?: any;
}

export declare class JWT {
  static sign(playbackId: string, options?: JWTOptions): string;
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
  filters?: Array<any>;
  array?: Array<any>;
}

export declare interface ErrorsListResponse {
  total_row_count: null;
  timeframe: Array<number>;
  data: Array<ViewError>;
}

export declare class Errors extends Base {
  list(params?: ErrorsParams): Promise<ErrorsListResponse>;
}

export declare interface ExportsListResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: Array<string>;
}

export declare class Exports extends Base {
  list: Promise<ExportsListResponse>;
}

export declare interface FilterGetResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: Array<FilterValue>;
}

export declare class Filters extends Base {
  list: Promise<FiltersListResponse>;
  get(
    filterId: string,
    queryParams?: FilterQueryParams
  ): Promise<FilterGetResponse>;
}

export declare interface IncidentsListResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: Array<Incident>;
}

export declare interface IncidentsGetResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: Incident;
}

export declare class Incidents extends Base {
  list(queryParams?: IncidentsQueryParams): Promise<IncidentsListResponse>;
  get(incidentId: string): Promise<IncidentsGetResponse>;
  related(
    incidentId: string,
    queryParams?: any
  ): Promise<IncidentsListResponse>;
}

export declare interface MetricsBreakdownResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: Array<MetricsBreakdownValue>;
}

export declare interface MetricsComparisonResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: Array<MetricsComparisonValue>;
}

export declare interface MetricsInsightsResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: Array<Insight>;
}

export declare interface MetricsOverallResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: MetricsOverallValue;
}

export declare interface MetricsTimeseriesResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: Array<Array<string>>;
}

export declare class Metrics extends Base {
  breakdown(
    metricId: string,
    queryParams: MetricsBreakdownQueryParams
  ): Promise<MetricsBreakdownResponse>;
  comparison(
    queryParams: MetricsComparisonQueryParams
  ): Promise<MetricsComparisonResponse>;
  insights(
    metricId: string,
    queryParams?: MetricsInsightsQueryParams
  ): Promise<MetricsInsightsResponse>;
  overall(
    metricId: string,
    queryParams?: MetricsOverallQueryParams
  ): Promise<MetricsOverallResponse>;
  timeseries(
    metricId: string,
    queryParams?: MetricsTimeseriesQueryParams
  ): Promise<MetricsTimeseriesResponse>;
}

export declare interface RealTimeBreakdownResponse {
  total_row_count: null;
  timeframe: Array<number>;
  data: Array<RealTimeBreakdownValue>;
}

export declare interface RealTimeDimensionsResponse {
  total_row_count: null;
  timeframe: Array<number>;
  data: Array<RealTimeDimensionsValue>;
}

export declare class RealTime extends Base {
  breakdown(
    metricId: string,
    queryParams: RealTimeBreakdownQueryParams
  ): Promise<RealTimeBreakdownResponse>;
  dimensions(): Promise<RealTimeDimensionsResponse>;
  histogramTimeseries(
    metricId: string,
    queryParams: RealTimeHistogramQueryParams
  ): Promise<RealTimeHistogramResponse>;
  metrics(): Promise<RealTimeMetricsResponse>;
  timeseries(
    metricId: string,
    queryParams?: RealTimeTimeseriesParams
  ): Promise<RealTimeTimeseriesResponse>;
}

export declare interface VideoViewsListResponse {
  total_row_count: number;
  timeframe: Array<number>;
  data: Array<VideoView>;
}

export declare class VideoViews extends Base {
  get(videoViewId: string): Promise<VideoView>;
  list(queryParams?: VideoViewsQueryParams): Promise<VideoViewsListResponse>;
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
  AssetMasterAccess,
  AssetMp4Support,
  AudioTrack,
  CreateAssetParams,
  CreateLiveStreamParams,
  CreateUploadParams,
  FilterQueryParams,
  FilterValue,
  FiltersListResponse,
  Incident,
  IncidentsQueryParams,
  InputFile,
  InputInfo,
  InputOverlaySettings,
  InputSettings,
  InputTrack,
  Insight,
  LiveStream,
  Metric,
  MetricsBreakdownQueryParams,
  MetricsBreakdownValue,
  MetricsComparisonQueryParams,
  MetricsComparisonValue,
  MetricsInsightsQueryParams,
  MetricsOverallQueryParams,
  MetricsOverallValue,
  MetricsTimeseriesQueryParams,
  PlaybackId,
  PlaybackIdPolicy,
  RealTimeBreakdownQueryParams,
  RealTimeBreakdownValue,
  RealTimeDimensionsValue,
  RealTimeHistogramQueryParams,
  RealTimeHistogramResponse,
  RealTimeHistogramValue,
  RealTimeMetricsResponse,
  RealTimeTimeseriesParams,
  RealTimeTimeseriesResponse,
  RequestOptions,
  SimulcastTarget,
  SimulcastTargetParams,
  StaticRenditions,
  TextTrack,
  Track,
  Upload,
  VideoTrack,
  VideoView,
  VideoViewsQueryParams,
  ViewError,
};
