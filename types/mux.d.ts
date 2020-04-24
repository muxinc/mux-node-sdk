import { AxiosInstance } from 'axios';
import { EventEmitter } from 'events';

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

  constructor(base: Base | RequestOptions);
  constructor(tokenId: string, tokenSecret: string, config: RequestOptions);
  constructor(param?: Base | RequestOptions | string, tokenSecret?: string, config?: RequestOptions);
  constructor(...params: any[]);
}

declare interface PlaybackId {
  id: string;
  policy: 'public' | 'signed';
}

type TrackMaxChannelLayout = 'mono' | 'stereo' | '5.1' | '7.1';
type TrackStatus = 'preparing' | 'ready' | 'errored';
type TrackType = 'video' | 'audio' | 'text';
type Track = VideoTrack | AudioTrack | TextTrack;
type AssetMp4Support = 'none' | 'standard';

declare interface StaticRenditions {
    status: 'ready' | 'preparing' | 'errored';
    files: File[];
}
declare interface File {
    name: 'low.mp4' | 'medium.mp4' | 'high.mp4';
    ext: 'mp4';
    height: number;
    width: number;
    bitrate: number;
    filesize: number;
}

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
type MasterAcces = 'none' | 'temporary';
type MasterStatus = 'ready' | 'preparing' | 'errored';
declare interface Master {
    status: MasterStatus;
    url: string;
}
declare interface AssetError {
    type: "invalid_input" | string;
    messages: string[];
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
