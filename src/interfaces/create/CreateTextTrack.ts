export interface CreateTextTrack {
    /**
     * The web address of the subtitle text track file that Mux should download and use to create the track.
     * 
     * Mux supports SubRip Text (SRT) and Web Video Text Tracks format for ingesting subtitles and closed captions.
     */
    url: string;

    /**
     * Type of track to add to the asset. Possible value is text.
     */
    type: string;

    /**
     * Type of text track. Possible value is subtitles..
     */
    text_type: string;

    /**
     * The language code value must be a valid BCP 47 specification compliant value.
     * 
     * For example, en for English or en-US for the US version of English.
     */
    language_code: string;

    /**
     * The name of the track containing a human-readable description.
     * This value must be unqiue across all the text type and subtitles text type tracks.
     * HLS manifest will associate subtitle text track with this value.
     * 
     * For example, set the value to "English" for subtitles text track with language_code as en-US.
     * 
     * If this parameter is not included, Mux will auto-populate based on the langauge_code value.
     */
    name?: string;

    /**
     * Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).
     */
    closed_captions?: boolean;

    /**
     * Arbitrary metadata set for the track either when creating the asset or track.
     */
    passthrough?: string;
}