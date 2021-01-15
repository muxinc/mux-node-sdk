export interface SimulcastTarget {
  id?: string;
  passthrough?: string;
  status: 'idle' | 'starting' | 'broadcasting' | 'errored';
  stream_key?: string;
  url: string;
}
