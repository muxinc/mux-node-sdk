import { VideoTrack } from './VideoTrack';
import { AudioTrack } from './AudioTrack';
import { TextTrack } from './TextTrack';

export type Track = VideoTrack | AudioTrack | TextTrack;