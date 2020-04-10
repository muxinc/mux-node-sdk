import { TrackType } from "./TrackType";
import { TrackMaxChannelLayout } from "./TrackMaxChannelLayout";
import { TrackStatus } from "./TrackStatus";

export interface Track_Full {
    /** Unique identifier for the track. */
    id: string;

    /** Possible values are `video`, `audio` and `text`. */
    type: TrackType;

    /** 
     * Type of text track. This parameter only supports subtitles value.
     * This parameter is set only for the `text` type track.
     */
    text_type: string;

    /**
     * The duration in seconds of the track media.
     * This parameter is not set for the `text` type track.
     */
    duration: number;

    /**
     * The language code value represents BCP 47 specification compliant value.
     * For example, `en` for English or `en-US` for the US version of English.
     * 
     * This parameter is set for `text` type and `subtitles` text type tracks.
     */
    language_code: string;

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

    /**
     * Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).
     * This parameter is set for the `text` type and `subtitles` text type track.
     */
    closed_captions: boolean;

    /**
     * The name of the track containing a human-readable description. The hls manifest will associate a subtitle text track with this value.
     * For example, the value is "English" for subtitles text track for the `language_code` value of `en-U`S.
     * This parameter is set for the `text` type and `subtitles` text type track.
     */
    name: string;

    /**
     * Arbitrary metadata set for the track either when creating the asset or track.
     */
    passthrough: string;

    /**
     * The status of the track is either `preparing`, `ready` or `errored`.
     */
    status: TrackStatus;
}