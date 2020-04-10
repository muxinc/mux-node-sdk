import { MasterStatus } from "./MasterStatus";

export interface Master {
    /**
     * Possible values include:
     * * `ready`: A temporary URL to the master version is available.
     * * `preparing`: We are preparing the master version
     * * `errored`: There was a Mux internal error that prevented the master from becoming accessible
     */
    status: MasterStatus;

    /**
     * The temporary URL to the master version of the video, as an MP4 file.
     * This URL will expire after 24 hours.
     */
    url: string;
}