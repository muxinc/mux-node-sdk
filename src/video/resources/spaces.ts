import { Base } from '../../base.js';
import { RequestOptions } from '../../RequestOptions.js';
import {
  BroadcastResponse,
  CreateBroadcastRequest,
  CreateSpaceRequest,
  ListSpacesRequest,
  ListSpacesResponse,
  SpaceResponse,
  StartSpaceBroadcastResponse,
  StopSpaceBroadcastResponse,
} from '../domain.js';

const BASE_PATH = '/video/v1/spaces';

const SPACE_PATH = (spaceId: string) => `${BASE_PATH}/${spaceId}`;
const BROADCAST_PATH = (spaceId: string, broadcastId: string) =>
  `${SPACE_PATH(spaceId)}/broadcasts/${broadcastId}`;

export class Broadcasts extends Base {
  create(
    spaceId: string,
    request: CreateBroadcastRequest
  ): Promise<BroadcastResponse> {
    return this.http.post(`${SPACE_PATH(spaceId)}/broadcasts`, request);
  }

  get(spaceId: string, broadcastId: string): Promise<BroadcastResponse> {
    return this.http.get(BROADCAST_PATH(spaceId, broadcastId));
  }

  delete(spaceId: string, broadcastId: string): Promise<BroadcastResponse> {
    return this.http.delete(BROADCAST_PATH(spaceId, broadcastId));
  }

  start(
    spaceId: string,
    broadcastId: string
  ): Promise<StartSpaceBroadcastResponse> {
    return this.http.post(`${BROADCAST_PATH(spaceId, broadcastId)}/start`);
  }

  stop(
    spaceId: string,
    broadcastId: string
  ): Promise<StopSpaceBroadcastResponse> {
    return this.http.post(`${BROADCAST_PATH(spaceId, broadcastId)}/stop`);
  }
}

export class Spaces extends Base {
  readonly Broadcasts: Broadcasts;

  constructor(base: Base);
  constructor(config: RequestOptions);
  constructor(accessToken: string, secret: string, config: RequestOptions);
  constructor(
    accessTokenOrConfigOrBase: string | RequestOptions | Base,
    secret?: string,
    config?: RequestOptions
  ) {
    if (accessTokenOrConfigOrBase instanceof Base) {
      super(accessTokenOrConfigOrBase);
    } else if (typeof accessTokenOrConfigOrBase === 'object') {
      super(accessTokenOrConfigOrBase);
    } else {
      super(accessTokenOrConfigOrBase, secret!, config!);
    }

    this.Broadcasts = new Broadcasts(this);
  }

  create(req: CreateSpaceRequest): Promise<SpaceResponse> {
    return this.http.post(BASE_PATH, req);
  }

  list(params: ListSpacesRequest): Promise<ListSpacesResponse> {
    return this.http.get(BASE_PATH, { params });
  }

  get(spaceId: string): Promise<SpaceResponse> {
    return this.http.get(SPACE_PATH(spaceId));
  }

  delete(spaceId: string): Promise<SpaceResponse> {
    return this.http.delete(SPACE_PATH(spaceId));
  }
}
