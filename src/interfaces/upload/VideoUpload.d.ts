export interface VideoUpload {
    url: string;
    timeout: number;
    test: boolean;
    status: string;
    new_asset_settings: {
        playback_policies: string[];
        passthrough: string;
    },
    id: string;
    cors_origin: string;
}