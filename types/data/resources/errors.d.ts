/*!
 * Mux Errors
 * Copyright(c) 2018 Mux Inc.
 */
import { Base } from '../../base';
import { ErrorsListResponse, ErrorsParams } from '../domain';
/**
 * Errors Class - Provides access to the Mux Data Errors API
 * @extends Base
 * @example
 * const { Data } = new Mux(accessToken, secret);
 *
 * // Returns a list of playback errors filtered by the windows operating system
 * Data.Errors.list({ filters: ['operating_system:windows'] });
 */
export declare class Errors extends Base {
    /**
     * Returns a list of playback errors
     *
     * @param {Object} [params] - example { timeframe: ['7:days'], filters: ['operating_system:windows'] }
     * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
     *
     * @example
     * const { Data } = new Mux(accessToken, secret);
     *
     * // Returns a list of playback errors filtered by the windows operating system
     * Data.Errors.list({ filters: ['operating_system:windows'] });
     *
     * @see https://docs.mux.com/api-reference/data#operation/list-errors
     */
    list(params?: ErrorsParams): Promise<ErrorsListResponse>;
}
