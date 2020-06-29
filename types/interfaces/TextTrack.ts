import { TrackStatus } from './TrackStatus';

export interface TextTrack {
  id: string;
  passthrough: string;
  status: TrackStatus;
  type: 'text';
  text_type: 'subtitles';
  language_code: string;
  closed_captions: boolean;
  name: string;
}
