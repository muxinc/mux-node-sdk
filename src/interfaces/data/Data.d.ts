export interface Data {
    /**
     * Unique identifier for the asset.
     */
    asset_id: string;

    /**
     * Arbitrary metadata set by you when creating the asset.
     */
    passthrough: string;

    /**
     * Time at which the asset was created.
     * Measured in seconds since the Unix epoch.
     */
    created_at: string;

    /**
     * Time at which the asset was deleted.
     * Measured in seconds since the Unix epoch.
     * 
     * Only included if asset_state is deleted
     */
    deleted_at: string;

    /**
     * The state of the asset is either ready, errored or deleted.
     */
    asset_state: string;

    /**
     * Unique identifier for the live stream that created the asset.
     */
    live_stream_id: string;

    /**
     * The duration in seconds of the asset.
     */
    asset_duration: number;

    /**
     * Total delivered duration for the time window in seconds.
     */
    delivered_seconds: number;
}