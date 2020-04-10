export type AssetEventType =
    'video.asset.created' |
    'video.asset.ready' |
    'video.asset.errored' |
    'video.asset.updated' |
    'video.asset.deleted' |
    'video.asset.live_stream_completed';

export type StaticRenditionsEventType =
    'video.asset.static_renditions.ready' |
    'video.asset.static_renditions.preparing' |
    'video.asset.static_renditions.deleted' |
    'video.asset.static_renditions.errored';

export type MasterEventType =
    'video.asset.master.ready' |
    'video.asset.master.preparing' |
    'video.asset.master.deleted' |
    'video.asset.master.errored';

export type TrackEventType =
    'video.asset.track.created' |
    'video.asset.track.ready' |
    'video.asset.track.errored' |
    'video.asset.track.deleted';

export type UploadEventType =
    'video.upload.asset_created' |
    'video.upload.cancelled' |
    'video.upload.created' |
    'video.upload.errored';

export type LiveStreamEventType =
    'video.live_stream.created' |
    'video.live_stream.connected' |
    'video.live_stream.recording' |
    'video.live_stream.active' |
    'video.live_stream.disconnected' |
    'video.live_stream.idle' |
    'video.live_stream.updated' |
    'video.live_stream.deleted';

export type SimulcastTargetEventType =
    'video.live_stream.simulcast_target.created' |
    'video.live_stream.simulcast_target.idle' |
    'video.live_stream.simulcast_target.starting' |
    'video.live_stream.simulcast_target.broadcasting' |
    'video.live_stream.simulcast_target.errored' |
    'video.live_stream.simulcast_target.deleted';

export type EventType =
    AssetEventType |
    StaticRenditionsEventType |
    MasterEventType |
    TrackEventType |
    UploadEventType |
    LiveStreamEventType |
    SimulcastTargetEventType;