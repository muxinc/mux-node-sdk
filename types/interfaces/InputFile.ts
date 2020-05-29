import { InputTrack } from './InputTrack';

export interface InputFile {
  container_format?: string;
  tracks?: Array<InputTrack>;
}
