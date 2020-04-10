import { InputOverlaySetting } from "./InputOverlaySetting";

export interface Input {
    /**
     * @param required
     * The web address of a file that Mux should download and use to create the asset.
     * 
     * Service : URL Format
     * HTTP(S) : https://example.com/path/myVideo.mp4
     * SFTP    : [sftp://username:password@example.com/path/myVideo.mp4]
     * 
     * Other protocols and stored credentials coming soon.
     * Mux supports SubRip Text (SRT) and Web Video Text Tracks format for ingesting Subtitles and Closed Captions.
     * 
     * **(required)**
     */
    url: string;

    /**
     * An object that describes how the image file referenced in url should be placed over the video (i.e. watermarking).
     * 
     * Currently overlays can only be images, and a video file must exist before the overlay image in the array of inputs.
     */
    overlay_settings?: InputOverlaySetting;

    /**
     * Possible values are:
     * * `video`
     * * `audio`
     * * `text`.
     * 
     * This parameter is required for the `text` track type.
     */
    type?: 'video' | 'audio' | 'text';

    /**
     * Type of text track. This parameter only supports subtitles value.
     * 
     * This parameter is required for text track type.
     */
    text_type?: string;

    /**
     * The language code value must be a valid BCP 47 specification compliant value. For example, en for English or en-US for the US version of English.
     * 
     * This parameter is required for text type and subtitles text type track.
     */
    language_code?: string;

    /**
     * The name of the track containing a human-readable description.
     * This value must be unique across all `text` type and `subtitles` text type tracks.
     * The hls manifest will associate a subtitle text track with this value.
     * For example, the value should be "English" for subtitles text track with `language_code` as `en`.
     * This optional parameter should be used only for `text` type and `subtitles` text type track.
     * If this parameter is not included, Mux will auto-populate based on the `input[].language_code` value.
     */
    name?: string;

    /**
     * Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).
     * 
     * This optional parameter should be used for `text` type and `subtitles` text type tracks.
     */
    closed_captions?: boolean;

    /**
     * Arbitrary metadata set for the track either when creating the asset or track.
     * 
     * This optional parameter should be used for `text` type and `subtitles` text type tracks.
     */
    passthrough?: string;
}