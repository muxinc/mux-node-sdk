import { EventObjectType } from "./EventObjectType";

export interface EventObject<T extends EventObjectType> {
    type: T;
    id: string;
}