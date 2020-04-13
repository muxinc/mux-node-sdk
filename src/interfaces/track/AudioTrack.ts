import { BaseTrack } from "./BaseTrack";
import { TrackMaxChannelLayout } from "./TrackMaxChannelLayout";

export interface AudioTrack extends BaseTrack {
    /** Possible values are `video`, `audio` and `text`. */
    type: 'audio';

    /**
     * The duration in seconds of the track media.
     * This parameter is not set for the `text` type track.
     */
    duration: number;

    /**
     * Audio: The maximum number of audio channels the track supports.
     * This parameter is set for the `audio` type track.
     */
    max_channels: number;

    /**
     * Audio: Options being `mono`, `stereo`, `5.1`, `7.1`.
     * This parameter is set for the audio type track.
     */
    max_channel_layout: TrackMaxChannelLayout;
}