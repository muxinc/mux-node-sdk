import { Identifier } from './Identifier';

export interface PlaybackIdentifier {
  policy: 'public' | 'signed';
  object: Identifier;
  id: string;
}
