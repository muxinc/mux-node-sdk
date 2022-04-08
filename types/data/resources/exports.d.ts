/*!
 * Mux Exports
 * Copyright(c) 2018 Mux Inc.
 */
import { Base } from '../../base';
import { ExportsListResponse } from '../domain';
/**
 * Exports Class - Provides access to the Mux Data Exports API
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Data } = muxClient;
 *
 * // Lists the available video view exports along with URLs to retrieve them
 * Data.Exports.list();
 */
export declare class Exports extends Base {
    /**
     * Lists the available video view exports along with URLs to retrieve them
     * @extends Base
     * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
     *
     * @example
     * const muxClient = new Mux(accessToken, secret);
     * const { Data } = muxClient;
     *
     * // Lists the available video view exports along with URLs to retrieve them
     * Data.Exports.list();
     *
     * @see https://docs.mux.com/api-reference/data#operation/list-exports
     */
    list(): Promise<ExportsListResponse>;
}
