import { InputOverlaySettings } from './InputOverlaySettings';

export interface InputSettings {
  url: string;
  overlay_settings?: InputOverlaySettings;
  type?: 'video' | 'audio' | 'text';
  text_type?: 'subtitles';
  language_code?: string;
  name?: string;
  closed_captions?: boolean;
  passthrough?: string;
}
