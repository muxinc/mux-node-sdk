/*!
 * Mux DeliveryUsage
 * Copyright(c) 2018 Mux Inc.
 */
import { Base } from '../../base';
import { DeliveryReport, ListDeliveryUsageParams } from '../domain';
/**
 * DeliveryUsage Class - Provides access to the Mux Video Delivery Usage API
 *
 * @example
 * const { Video } = new Mux(accessToken, secret);
 *
 * // List delivery usage within a timeframe
 * Video.DeliveryUsage.list({timeframe: [1574076240, 1573471440]});
 */
export declare class DeliveryUsage extends Base {
    /**
     * List all delivery usage during a timeframe for a Mux Environment (tied to your access token)
     * @param {Object} params - Request JSON parameters (e.g timeframe)
     * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
     *
     * @example
     * const { Video } = new Mux(accessToken, secret);
     *
     * // List all delivery usage for a Mux Environment within a timeframe
     * Video.DeliveryUsage.list({timeframe: [1574076240, 1573471440]});
     *
     * @see https://docs.mux.com/api-reference/video#operation/list-delivery-usage
     */
    list(params: ListDeliveryUsageParams): Promise<Array<DeliveryReport>>;
}
