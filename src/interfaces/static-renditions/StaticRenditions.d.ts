import { File } from "../file/File";

export interface StaticRenditions {
    /**
     * Possible values include:
     * * `ready`: All static renditions (MP4s) are downloadable
     * * `preparing`: We are preparing the static renditions
     * * `errored`: There was a Mux internal error that prevented the static renditions from being created
     */
    status: 'ready' | 'preparing' | 'errored';

    /** Array of file objects */
    files: File[];
}