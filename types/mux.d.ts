import { AxiosInstance } from 'axios';
import { EventEmitter } from 'events';

import Base, { RequestOptions } from './base';
import Video from './video/video';

/*
import Data from './data/data';
import Webhooks from './webhooks/webhooks';
import JWT from './utils/jwt';
*/

declare interface RequestOptions {
  baseUrl?: string;
  auth?: {
    username?: string;
    password?: string;
  };
}

declare class Base extends EventEmitter {
  private _tokenId?: string;
  private _tokenSecret?: string;
  private _config?: RequestOptions;
  private _requestOptions?: RequestOptions;
  http: AxiosInstance = undefined as any;

  constructor(base: Base | RequestOptions);
  constructor(tokenId: string, tokenSecret: string, config: RequestOptions);
  constructor(param?: Base | RequestOptions | string, tokenSecret?: string, config?: RequestOptions);
  constructor(...params: any[]);
}

declare class Asset

import { AssetStatus } from "./AssetStatus";
import { AssetMaxStoredResolution } from "./AssetMaxStoredResolution";
import { AssetMp4Support } from "./AssetMp4Support";
import { AssetError } from "../error/AssetError";
import { MasterAcces } from "../master/MasterAccess";
import { Master } from "../master/Master";
import { StaticRenditions } from "../static-renditions/StaticRenditions";
import { PlaybackId } from "../playback_id/PlaybackId";
import { Track } from "../track/Track";

declare interface PlaybackId {
  id: string;
  policy: 'public' | 'signed';
}

declare type TrackMaxChannelLayout = 'mono' | 'stereo' | '5.1' | '7.1';
declare type TrackStatus = 'preparing' | 'ready' | 'errored';
declare type TrackType = 'video' | 'audio' | 'text';

declare interface BaseTrack {
  id: string;
  passthrough: string;
  status: TrackStatus;
}

declare interface TextTrack {
  type: 'text';
  text_type: 'subtitles';
  language_code: string;
  closed_captions: boolean;
  name: string;
}

declare interface Asset {
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

declare class Video extends Base {
}

declare class Mux extends Base {
    constructor(accessTokenOrConfig?: string | RequestOptions, secret?: string, config?: RequestOptions);
    Video: Video;
  /*
    Data: Data;
    static JWT: typeof JWT;
    static Webhooks: typeof Webhooks;
  */
}

declare namespace Mux {
}

export = Mux;

