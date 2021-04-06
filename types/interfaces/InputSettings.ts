import { InputOverlaySettings } from './InputOverlaySettings';

export interface InputSettings {
  url: string;
  start_time?: number;
  end_time?: number;
  overlay_settings?: InputOverlaySettings;
  type?: 'video' | 'audio' | 'text';
  text_type?: 'subtitles';
  language_code?: string;
  name?: string;
  closed_captions?: boolean;
  passthrough?: string;
}
