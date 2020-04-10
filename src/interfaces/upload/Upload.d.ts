import { CreateAsset } from "../create-asset/CreateAsset";

export interface Upload {
    /** Unique identifier for the upload. */
    id?: string;

    /** The URL to upload the asset. This field is only populated until the status transition from the waiting state */
    url?: string;

    /**
     * Max time in seconds for the signed upload URL to be valid.
     * 
     * If a successful upload has not occurred before the timeout limit, the direct upload is marked timed_out
     * 
     * Default: `3600`
     * Min: `60`
     * Max: `604800`
     */
    timeout?: number;

    /**
     * If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers.
     */
    cors_origin?: string;

    /**
     * Current status of the upload
     * 
     * Valid States include:
     * * `waiting`
     * * `asset_created`
     * * `errored`
     * * `cancelled`
     * * `timed_out`
     */
    status?: 'waiting' | 'asset_created' | 'errored' | 'cancelled' | 'timed_out';

    /**
     * The settings to be used when creating a new asset.
     * 
     * You can use any of the usual settings when creating an asset normally, with the exception to not include file url for creating the asset in input.
     * You could optionally add overlay_setting and input urls to add Subtitles / Captions.
     */
    new_asset_settings?: Partial<CreateAsset>;

    /**
     * The ID for the newly created asset.
     * 
     * This field is only populated after the upload state transitions to asset_created.
     */
    asset_id?: string;

    /** Only set if an error occurred during asset creation. */
    error?: {
        /** Label for the specific error */
        type: string;

        /** Human readable error message */
        message: string;
    }
}