import { TrackStatus } from './TrackStatus';

export interface VideoTrack {
  id: string;
  passthrough: string;
  status: TrackStatus;
  type: 'video';
  duration: number;
  max_width: number;
  max_height: number;
  max_frame_rate: number;
}
