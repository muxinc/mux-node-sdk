export interface StaticRendition {
  name: 'low.mp4' | 'medium.mp4' | 'high.mp4';
  ext: 'mp4';
  height: number;
  width: number;
  bitrate: number;
  filesize: number;
}

export interface StaticRenditions {
  status: 'ready' | 'preparing' | 'errored';
  files: Array<StaticRendition>;
}
