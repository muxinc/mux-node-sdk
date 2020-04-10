import { BaseEvent } from "./BaseEvent";
import { UploadEventType } from "./EventType";
import { Upload } from "../upload/Upload";

export interface UploadEvent extends BaseEvent<Upload, 'upload'> {
    type: UploadEventType;
}