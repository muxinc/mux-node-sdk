import { PlaybackIdPolicy } from "./PlaybackIdPolicy";

export interface PlaybackId {
    /** Unique identifier for the Playback ID. */
    id: string;

    /** The named permissions set to be applied to the asset through this Playback ID. */
    policy: PlaybackIdPolicy;
}