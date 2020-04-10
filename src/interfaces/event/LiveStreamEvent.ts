import { BaseEvent } from "./BaseEvent";
import { LiveStreamEventType } from "./EventType";
import { LiveStream } from "../live-stream/LiveStream";

export interface LiveStreamEvent extends BaseEvent<LiveStream, 'live_stream'> {
    type: LiveStreamEventType;
}