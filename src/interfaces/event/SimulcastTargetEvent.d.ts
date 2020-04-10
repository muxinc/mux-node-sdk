import { BaseEvent } from "./BaseEvent";
import { SimulcastTargetEventType } from "./EventType";
import { SimulcastTarget } from "../simulcast-target/SimulcastTarget";

export interface SimulcastTargetEvent extends BaseEvent<SimulcastTarget, 'simulcast_target'> {
    type: SimulcastTargetEventType;
}