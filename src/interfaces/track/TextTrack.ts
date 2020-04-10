import { BaseTrack } from "./BaseTrack";
import { TextTrackTextType } from "./TextTrackTextType";

export interface TextTrack extends BaseTrack {
    /** Possible values are `video`, `audio` and `text`. */
    type: 'text';

    /** 
     * Type of text track. This parameter only supports subtitles value.
     * This parameter is set only for the `text` type track.
     */
    text_type: TextTrackTextType;

    /**
     * The language code value represents BCP 47 specification compliant value.
     * For example, `en` for English or `en-US` for the US version of English.
     * 
     * This parameter is set for `text` type and `subtitles` text type tracks.
     */
    language_code: string;

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
}