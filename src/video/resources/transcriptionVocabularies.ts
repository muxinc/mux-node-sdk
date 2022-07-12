import { Base } from '../../base.js';
import {
  UpsertTranscriptionVocabularyParams,
  ListTranscriptionVocabulariesResponse,
  TranscriptionVocabularyResponse,
} from '../domain.js';

/**
 * @private Base transcription vocabulary path for the Mux API
 * */
const PATH = '/video/v1/transcription-vocabularies';

/**
 * @private
 * Build the base transcription vocabulary path for the Mux API
 * */
const buildBasePath = (transcriptionVocabularyId: string) =>
  `${PATH}/${transcriptionVocabularyId}`;

export class TranscriptionVocabularies extends Base {
  create(
    transcriptionVocabulary: UpsertTranscriptionVocabularyParams
  ): Promise<TranscriptionVocabularyResponse> {
    return this.http.post(PATH, transcriptionVocabulary);
  }

  list(): Promise<ListTranscriptionVocabulariesResponse> {
    return this.http.get(PATH);
  }

  get(
    transcriptionVocabularyId: string
  ): Promise<TranscriptionVocabularyResponse> {
    return this.http.get(buildBasePath(transcriptionVocabularyId));
  }

  delete(transcriptionVocabularyId: string): Promise<void> {
    return this.http.delete(buildBasePath(transcriptionVocabularyId));
  }

  update(
    transcriptionVocabularyId: string,
    transcriptionVocabulary: UpsertTranscriptionVocabularyParams
  ): Promise<TranscriptionVocabularyResponse> {
    return this.http.put(
      `${buildBasePath(transcriptionVocabularyId)}`,
      transcriptionVocabulary
    );
  }
}
