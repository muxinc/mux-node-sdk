import { BaseEvent } from "./BaseEvent";
import { AssetEventType } from "./EventType";
import { Asset } from "../asset/Asset";

export interface AssetEvent extends BaseEvent<Asset, 'asset'> {
    type: AssetEventType;
}