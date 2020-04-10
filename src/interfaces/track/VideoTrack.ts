import { BaseTrack } from "./BaseTrack";

export interface VideoTrack extends BaseTrack {
    /** Possible values are `video`, `audio` and `text`. */
    type: 'video';

    /**
     * The duration in seconds of the track media.
     * This parameter is not set for the `text` type track.
     */
    duration: number;

    /**
     * Video: The maximum width in pixels available for the track.
     * This parameter is set for the `video` type track.
     */
    max_width: number;

    /**
     * Video: The maximum height in pixels available for the track.
     * This parameter is set for the `video` type track.
     */
    max_height: number;

    /**
     * Video: The maximum frame rate available for the track.
     * This parameter is set for the `video` type track.
     */
    max_frame_rate: number;
}