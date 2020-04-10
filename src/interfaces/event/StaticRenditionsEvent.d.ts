import { BaseEvent } from "./BaseEvent";
import { StaticRenditionsEventType } from "./EventType";
import { StaticRenditions } from "../static-renditions/StaticRenditions";

export interface StaticRenditionsEvent extends BaseEvent<StaticRenditions, 'static_renditions'> {
    type: StaticRenditionsEventType;
}