export interface File {
    /**
     * The name of the static rendition file.
     * 
     * Possible values include:
     * * `low.mp4`
     * * `medium.mp4`
     * * `high.mp4`
     */
    name: 'low.mp4' | 'medium.mp4' | 'high.mp4';

    /**
     * The extension of the static rendition file.
     * 
     * Possible values include:
     * * `mp4`
     */
    ext: 'mp4';

    /** The height of the static rendition's file in pixels */
    height: number;

    /** The width of the static rendition's file in pixels */
    width: number;

    /** The bitrate in bits per second */
    bitrate: number;

    /** The filesize in bytes */
    filesize: number;
}