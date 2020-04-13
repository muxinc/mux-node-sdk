import { AssetStatus } from "./AssetStatus";
import { AssetMaxStoredResolution } from "./AssetMaxStoredResolution";
import { AssetMp4Support } from "./AssetMp4Support";
import { AssetError } from "../error/AssetError";
import { MasterAcces } from "../master/MasterAccess";
import { Master } from "../master/Master";
import { StaticRenditions } from "../static-renditions/StaticRenditions";
import { PlaybackId } from "../playback_id/PlaybackId";
import { Track } from "../track/Track";

export interface Asset {
    /** Unique identifier for the asset. */
    id: string;

    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created_at: string;

    /** The status of the asset is either `preparing`, `ready` or `errored` */
    status: AssetStatus;

    /** 
     * The duration in seconds of the asset media.
     * The max duration for a single asset is 24 hours.
     */
    duration: number;

    /**
     * The maximum resolution that has been stored for the asset, options being `Audio-only`, `SD`, `HD`, `FHD`, `UHD`.
     *  The asset may be delivered at lower resolutions depending on the device and bandwidth, however it cannot be delivered at a higher value than is stored.
     */
    max_stored_resolution: AssetMaxStoredResolution;

    /**
     * The maximum frame rate that has been stored for the asset.
     * The asset may be delivered at lower frame rates depending on the device and bandwidth, however it cannot be delivered at a higher value than is stored.
     */
    max_stored_frame_rate: number;

    /** The aspect ratio of the asset in the form of `width:height`, for example `16:9`. */
    aspect_ratio: string;

    /** Whether the asset was created with Per-title encoding. */
    per_title_encode: boolean;

    /** Whether the asset is currently being created from a live stream. */
    is_live: boolean;

    /** Playback IDs are used with `stream.mux.com` to create the source URL for a video player. */
    playback_ids: PlaybackId[];

    /** The individual media tracks that make up an asset. */
    tracks: Track[];

    /**
     * Specifies the asset's level (if any) of support for mp4 playback.
     * 
     * Options include:
     * * `none`: No MP4s exist for this asset.
     * * `standard`: The standard set of mp4 renditions have been requested.
     * 
     * Default: `none`
     */
    mp4_support: AssetMp4Support;

    /**
     * An object containing the current status of any static renditions such as mp4s.
     * The object does not exist if no static renditions have been requested.
     */
    static_renditions: StaticRenditions;

    /**
     * Specifies whether or not a temporary URL to the master (highest-quality) version of the video will be made available as an MP4 file.
     * 
     * Possible values include:
     * * `none`
     * * `temporary`
     * 
     * Default: `none`
     */
    master_access: MasterAcces;

    /**
     * An object containing the current status of Master Access and the link to the Master MP4 file when ready.
     * This object does not exist if master_acess is set to none and when the temporary URL expires.
     */
    master: Master;

    /** Arbitrary metadata set by you when creating the asset. */
    passthrough: string;

    /**
     * When asset status is errored, the errors object contains details on what caused the error.
     * The errors object contains a `type`, and an array of `messages`.
     * 
     * Default: `none`
     */
    errors: AssetError;
}