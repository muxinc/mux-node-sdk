import { Input } from "../input/Input";
import { PlaybackIdPolicy } from "../playback_id/PlaybackIdPolicy";
import { AssetMp4Support } from "../asset/AssetMp4Support";

export interface CreateAsset {
    /**
     * An array of objects that each describe an input file to be used to create the asset.
     * As a shortcut, input can also be a string URL for a file when only one input file is used. See input[].url for requirements.
     * 
     * **(required)**
     */
    input: Input[];

    /**
     * An array of playback policy names that you want applied to this asset and available through playback_ids.
     * 
     * Options include:
     * * `public`: Anyone with the playback URL can stream the asset
     * * `signed`: An additional access token is required to play the asset
     * 
     * If no `playback_policy` is set, the asset will have no playback IDs and will therefore not be playable.
     * 
     * For simplicity, a single string name can be used in place of the array in the case of only one playback policy.
     */
    playback_policy?: PlaybackIdPolicy | (PlaybackIdPolicy)[];

    /**
    * Arbitrary metadata that will be included in the asset details and related webhooks.
    * Can be used to store your own ID for a video along with the asset.
    * 
    * **Max: 255 characters**
    */
    passthrough?: string;

    /**
     * Specify what level (if any) of support for mp4 playback.
     * In most cases you should use our default HLS-based streaming playback (`{playback_id}.m3u8`) which can automatically adjust to viewers' connection speeds, but an mp4 can be useful for some legacy devices or downloading for offline playback.
     * See the MP4 Support Guide for more information.
     * 
     * Options include:
     * * `none`: No mp4s will be created for this asset.
     * * `standard`: The standard set of mp4 renditions will be created.
     */
    mp4_support?: AssetMp4Support;

    /**
     * Normalize the audio track loudness level.
     * 
     * This parameter is only applicable to on-demand (not live) assets.
     * 
     * Default: `false`
     */
    normalize_audio?: boolean;
}