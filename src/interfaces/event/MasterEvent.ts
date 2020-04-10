import { BaseEvent } from "./BaseEvent";
import { MasterEventType } from "./EventType";
import { Master } from "../master/Master";

export interface MasterEvent extends BaseEvent<Master, 'master'> {
    type: MasterEventType;
}