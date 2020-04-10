import { Data } from "../data/Data";

export interface DeliveryUsage {
    /**
     * Total number of assets with delivery usage.
     */
    total_row_count: number;

    /**
     * Time window representing the delivery usage.
     * 
     * Start time of the time window. Start time value is included in delivery usage calculations. Measured in seconds since Unix epoch.
     * 
     * End time of the time window. End time value is excluded in delivery usage calculations. Measured in seconds since Unix epoch.
     */
    timeframe: [number, number];

    /**
     * Number of assets returned in this response. Default value is 100.
     */
    limit: number;

    /**
     * An array of Delivery Usage objects, each of which include delivery usage details of an asset.
     */
    data: Data[];
}