import { TrackStatus } from "./TrackStatus";

export interface BaseTrack {
    /** Unique identifier for the track. */
    id: string;

    /**
     * Arbitrary metadata set for the track either when creating the asset or track.
     */
    passthrough: string;

    /**
     * The status of the track is either `preparing`, `ready` or `errored`.
     */
    status: TrackStatus;
}