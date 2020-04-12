export interface ListDeliveryUsage {
    /**
     * Time window to get delivery usage information.
     * 
     * Include start and end time window values in seconds since the Unix epoch.
     * 
     * Default time window is 1 hour representing usage from 13th to 12th hour from when the request is made.
     */
    timeframe: [string, string];

    /**
     * Number of Delivery Usage objects to include in the response
     */
    limit: number;

    /**
     * Offset by this many pages, of the size of limit.
     */
    page: number;

    /**
     * Filter response to return delivery usage for this asset only.
     */
    asset_id: string;
}