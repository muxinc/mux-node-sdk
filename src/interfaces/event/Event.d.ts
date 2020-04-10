import { AssetEvent } from "./AssetEvent";
import { LiveStreamEvent } from "./LiveStreamEvent"
import { MasterEvent } from "./MasterEvent";
import { SimulcastTargetEvent } from "./SimulcastTargetEvent";
import { StaticRenditionsEvent } from "./StaticRenditionsEvent";
import { TrackEvent } from "./TrackEvent";
import { UploadEvent } from "./UploadEvent";

export type Event =
    AssetEvent |
    LiveStreamEvent |
    MasterEvent |
    SimulcastTargetEvent |
    StaticRenditionsEvent |
    TrackEvent |
    UploadEvent;