import { EventObject } from "./EventObject";
import { EventEnvironment } from "./EventEnvironment";
import { EventObjectType } from "./EventObjectType";

export interface BaseEvent<T, U extends EventObjectType> {
    id: string;
    request_id: string;
    object: U;
    environment: EventEnvironment;
    data: T;
    created_at: string;
    accessor_source: string;
    accessor: string;
}