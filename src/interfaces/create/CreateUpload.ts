import { CreateAsset } from "./CreateAsset"

export interface CreateUpload {
    /**
     * Max time in seconds for the signed upload URL to be valid.
     * If a successful upload has not occurred before the timeout limit, the direct upload is marked timed_out
     */
    timeout?: number;

    /**
     * If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers.
     */
    cors_origin?: string;

    /**
     * The settings to be used when creating the new asset.
     * You can use any of the usual settings when creating an asset normally, with the exception to not include file url for creating the asset in input.
     * You could optionally add overlay_setting and url to add Subtitles / Captions
     */
    new_asset_settings?: Partial<CreateAsset>;
}