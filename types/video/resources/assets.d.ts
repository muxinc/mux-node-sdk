/*!
 * Mux Assets
 * Copyright(c) 2018 Mux Inc.
 */
import { Base } from '../../base';
import { Asset, CreateAssetParams, CreatePlaybackIdParams, CreateTrackParams, InputInfo, ListAssetParams, PlaybackId, Track, UpdateMasterAccessParams, UpdateMp4SupportParams } from '../domain';
/**
 * Assets Class - Provides access to the Mux Video Assets API
 *
 * @example
 * const { Video } = new Mux(accessToken, secret);
 *
 * // Create an asset
 * Video.Assets.create({input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'});
 */
export declare class Assets extends Base {
    /**
     * Creates a Mux asset with the specified JSON parameters
     * @param {Object} params - Asset JSON parameters (e.g input)
     * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
     *
     * @example
     * const { Video } = new Mux(accessToken, secret);
     *
     * // Create an asset
     * Video.Assets.create({input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'});
     *
     * @see https://docs.mux.com/api-reference/video#operation/create-asset
     */
    create(params: CreateAssetParams): Promise<Asset>;
    /**
     * Deletes a Mux asset
     * @param {string} assetId - The ID for the asset intended for deletion
     * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
     *
     * @example
     * const { Video } = new Mux(accessToken, secret);
     *
     * // Delete an asset
     * Video.Assets.del(assetId);
     *
     * @see hhttps://docs.mux.com/api-reference/video#operation/delete-asset
     */
    del(assetId: string): Promise<any>;
    /**
     * Get an asset
     * @param {string} assetId - The ID for the asset
     * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
     *
     * @example
     * const { Video } = new Mux(accessToken, secret);
     *
     * // Get an asset
     * Video.Assets.get(assetId);
     *
     * @see https://docs.mux.com/api-reference/video#operation/get-asset
     */
    get(assetId: string): Promise<Asset>;
    /**
     * Get input info for an asset
     * @param {string} assetId - The ID for the asset
     * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
     *
     * @example
     * const { Video } = new Mux(accessToken, secret);
     *
     * // Get input info for an asset
     * Video.Assets.inputInfo(assetId);
     *
     * @see https://docs.mux.com/api-reference/video#operation/get-asset-input-info
     */
    inputInfo(assetId: string): Promise<Array<InputInfo>>;
    /**
     * List all assets for a Mux Environment (tied to your access token)
     * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
     *
     * @example
     * const { Video } = new Mux(accessToken, secret);
     *
     * // List all assets for a Mux Environment
     * Video.Assets.list();
     *
     * @see https://docs.mux.com/api-reference/video#operation/list-assets
     */
    list(params: ListAssetParams): Promise<Array<Asset>>;
    /**
     * Return an asset playback id
     * @param {string} assetId - The ID for the asset
     * @param {string} playbackId - The ID for the playbackId
     * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
     *
     * @example
     * const { Video } = new Mux(accessToken, secret);
     *
     * // Retrieve an asset playbackId
     * Video.Assets.playbackId(assetId, playbackId);
     *
     * @see https://docs.mux.com/api-reference/video#operation/get-asset-playback-id
     */
    playbackId(assetId: string, playbackId: string): Promise<PlaybackId>;
    /**
     * Create an asset playback id
     * @param {string} assetId - The ID for the asset
     * @param {Object} params - Asset JSON parameters (e.g playback_policy)
     * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
     *
     * @example
     * const { Video } = new Mux(accessToken, secret);
     *
     * // Create an asset playback ID
     * Video.Assets.createPlaybackId(assetId, { policy: 'public' });
     *
     * @see https://docs.mux.com/api-reference/video#operation/create-asset-playback-id
     */
    createPlaybackId(assetId: string, params: CreatePlaybackIdParams): Promise<PlaybackId>;
    /**
     * Delete an asset playback ID
     * @param {string} assetId - The ID for the asset
     * @param {string} playbackId - The ID for the asset playback ID to delete
     * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
     *
     * @example
     * const { Video } = new Mux(accessToken, secret);
     *
     * // Delete an asset playback ID
     * Video.Assets.deletePlaybackId(assetId, { policy: 'public' });
     *
     * @see https://docs.mux.com/api-reference/video#operation/delete-asset-playback-id
     */
    deletePlaybackId(assetId: string, playbackId: string): Promise<any>;
    /**
     * Create a subtitle text track
     * @param {string} assetId - The ID for the asset
     * @param {Object} params - subtitle text track JSON parameters
     * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
     *
     * @example
     * const { Video } = new Mux(accessToken, secret);
     *
     * // Create an asset text track
     * Video.Assets.createTrack(assetId, {
     *   url: "https://example.com/myVIdeo_en.srt",
     *   type: "text",
     *   text_type: "subtitles",
     *   language_code: "en-US",
     * });
     *
     * @see https://docs.mux.com/api-reference/video#operation/create-asset-track
     */
    createTrack(assetId: string, params: CreateTrackParams): Promise<Track>;
    /**
     * Delete an asset text track
     * @param {string} assetId - The ID for the asset
     * @param {string} trackId - The ID for the asset text track to delete
     * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
     *
     * @example
     * const { Video } = new Mux(accessToken, secret);
     *
     * // Delete an asset text track
     * Video.Assets.deleteTrack(assetId, trackId);
     *
     * @see https://docs.mux.com/api-reference/video#operation/delete-asset-track
     */
    deleteTrack(assetId: string, trackId: string): Promise<any>;
    /**
     * Update mp4 support for an asset
     * @param {Object} params - mp4 support JSON parameters
     * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
     *
     * @example
     * const { Video } = new Mux(accessToken, secret);
     *
     * // Updates mp4 support for an asset
     * Video.Assets.updateMp4Support(assetId, {mp4_support: "standard"});
     *
     * @see https://docs.mux.com/api-reference/video#operation/update-asset-mp4-support
     */
    updateMp4Support(assetId: string, params: UpdateMp4SupportParams): Promise<Asset>;
    /**
     * Update master access for an asset
     * @param {Object} params - master access JSON parameters
     * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
     *
     * @example
     * const { Video } = new Mux(accessToken, secret);
     *
     * // Update master access for an asset
     * Video.Assets.updateMasterAccess(assetId, {master_access: "temporary"});
     *
     * @see https://docs.mux.com/api-reference/video#operation/update-asset-master-access
     */
    updateMasterAccess(assetId: string, params: UpdateMasterAccessParams): Promise<Asset>;
}
