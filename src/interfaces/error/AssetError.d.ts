export interface AssetError {
    type: "invalid_input" | string;
    messages: string[];
}