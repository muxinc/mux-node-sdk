// File generated from our OpenAPI spec by Stainless.

export interface PlaybackId {
  /**
   * Unique identifier for the PlaybackID
   */
  id?: string;

  /**
   * - `public` playback IDs are accessible by constructing an HLS URL like
   *   `https://stream.mux.com/${PLAYBACK_ID}`
   *
   * - `signed` playback IDs should be used with tokens
   *   `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. See
   *   [Secure video playback](https://docs.mux.com/guides/video/secure-video-playback)
   *   for details about creating tokens.
   */
  policy?: 'public' | 'signed';
}

export interface DimensionValue {
  total_count?: number;

  value?: string;
}
