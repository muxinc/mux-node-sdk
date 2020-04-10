import { BaseEvent } from "./BaseEvent";
import { TrackEventType } from "./EventType";
import { Track } from "../track/Track";

export interface TrackEvent extends BaseEvent<Track, 'track'> {
    type: TrackEventType;
}