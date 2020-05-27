import { TrackStatus } from './TrackStatus';

export interface AudioTrack {
  id: string;
  passthrough: string;
  status: TrackStatus;
  type: 'audio';
  duration: number;
  max_channels: number;
  max_channel_layout: string;
}
