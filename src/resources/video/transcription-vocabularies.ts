// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { BasePage, type BasePageParams } from '../../pagination';

export class TranscriptionVocabularies extends APIResource {
  /**
   * Create a new Transcription Vocabulary.
   *
   * @example
   * ```ts
   * const transcriptionVocabulary =
   *   await client.video.transcriptionVocabularies.create({
   *     phrases: [
   *       'Mux',
   *       'Live Stream',
   *       'Playback ID',
   *       'video encoding',
   *     ],
   *     name: 'Mux API Vocabulary',
   *   });
   * ```
   */
  create(
    body: TranscriptionVocabularyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TranscriptionVocabulary> {
    return (
      this._client.post('/video/v1/transcription-vocabularies', {
        body,
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as Core.APIPromise<{ data: TranscriptionVocabulary }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Retrieves the details of a Transcription Vocabulary that has previously been
   * created. Supply the unique Transcription Vocabulary ID and Mux will return the
   * corresponding Transcription Vocabulary information. The same information is
   * returned when creating a Transcription Vocabulary.
   *
   * @example
   * ```ts
   * const transcriptionVocabulary =
   *   await client.video.transcriptionVocabularies.retrieve(
   *     'TRANSCRIPTION_VOCABULARY_ID',
   *   );
   * ```
   */
  retrieve(
    transcriptionVocabularyId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TranscriptionVocabulary> {
    return (
      this._client.get(`/video/v1/transcription-vocabularies/${transcriptionVocabularyId}`, {
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as Core.APIPromise<{ data: TranscriptionVocabulary }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Updates the details of a previously-created Transcription Vocabulary. Updates to
   * Transcription Vocabularies are allowed while associated live streams are active.
   * However, updates will not be applied to those streams while they are active.
   *
   * @example
   * ```ts
   * const transcriptionVocabulary =
   *   await client.video.transcriptionVocabularies.update(
   *     'TRANSCRIPTION_VOCABULARY_ID',
   *     {
   *       phrases: ['Mux', 'Live Stream', 'RTMP', 'Stream Key'],
   *       name: 'Mux API Vocabulary - Updated',
   *     },
   *   );
   * ```
   */
  update(
    transcriptionVocabularyId: string,
    body: TranscriptionVocabularyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TranscriptionVocabulary> {
    return (
      this._client.put(`/video/v1/transcription-vocabularies/${transcriptionVocabularyId}`, {
        body,
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as Core.APIPromise<{ data: TranscriptionVocabulary }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * List all Transcription Vocabularies.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const transcriptionVocabulary of client.video.transcriptionVocabularies.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: TranscriptionVocabularyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TranscriptionVocabulariesBasePage, TranscriptionVocabulary>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<TranscriptionVocabulariesBasePage, TranscriptionVocabulary>;
  list(
    query: TranscriptionVocabularyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TranscriptionVocabulariesBasePage, TranscriptionVocabulary> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList(
      '/video/v1/transcription-vocabularies',
      TranscriptionVocabulariesBasePage,
      { query, defaultBaseURL: 'https://api.mux.com', ...options },
    );
  }

  /**
   * Deletes a Transcription Vocabulary. The Transcription Vocabulary's ID will be
   * disassociated from any live streams using it. Transcription Vocabularies can be
   * deleted while associated live streams are active. However, the words and phrases
   * in the deleted Transcription Vocabulary will remain attached to those streams
   * while they are active.
   *
   * @example
   * ```ts
   * await client.video.transcriptionVocabularies.delete(
   *   'TRANSCRIPTION_VOCABULARY_ID',
   * );
   * ```
   */
  delete(transcriptionVocabularyId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/video/v1/transcription-vocabularies/${transcriptionVocabularyId}`, {
      defaultBaseURL: 'https://api.mux.com',
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class TranscriptionVocabulariesBasePage extends BasePage<TranscriptionVocabulary> {}

export interface TranscriptionVocabulary {
  /**
   * Unique identifier for the Transcription Vocabulary
   */
  id: string;

  /**
   * Time the Transcription Vocabulary was created, defined as a Unix timestamp
   * (seconds since epoch).
   */
  created_at: string;

  /**
   * Time the Transcription Vocabulary was updated, defined as a Unix timestamp
   * (seconds since epoch).
   */
  updated_at: string;

  /**
   * The user-supplied name of the Transcription Vocabulary.
   */
  name?: string;

  /**
   * Arbitrary user-supplied metadata set for the Transcription Vocabulary. Max 255
   * characters.
   */
  passthrough?: string;

  /**
   * Phrases, individual words, or proper names to include in the Transcription
   * Vocabulary. When the Transcription Vocabulary is attached to a live stream's
   * `generated_subtitles` configuration, the probability of successful speech
   * recognition for these words or phrases is boosted.
   */
  phrases?: Array<string>;
}

export interface TranscriptionVocabularyResponse {
  data: TranscriptionVocabulary;
}

export interface TranscriptionVocabularyCreateParams {
  /**
   * Phrases, individual words, or proper names to include in the Transcription
   * Vocabulary. When the Transcription Vocabulary is attached to a live stream's
   * `generated_subtitles`, the probability of successful speech recognition for
   * these words or phrases is boosted.
   */
  phrases: Array<string>;

  /**
   * The user-supplied name of the Transcription Vocabulary.
   */
  name?: string;

  /**
   * Arbitrary user-supplied metadata set for the Transcription Vocabulary. Max 255
   * characters.
   */
  passthrough?: string;
}

export interface TranscriptionVocabularyUpdateParams {
  /**
   * Phrases, individual words, or proper names to include in the Transcription
   * Vocabulary. When the Transcription Vocabulary is attached to a live stream's
   * `generated_subtitles`, the probability of successful speech recognition for
   * these words or phrases is boosted.
   */
  phrases: Array<string>;

  /**
   * The user-supplied name of the Transcription Vocabulary.
   */
  name?: string;

  /**
   * Arbitrary user-supplied metadata set for the Transcription Vocabulary. Max 255
   * characters.
   */
  passthrough?: string;
}

export interface TranscriptionVocabularyListParams extends BasePageParams {}

TranscriptionVocabularies.TranscriptionVocabulariesBasePage = TranscriptionVocabulariesBasePage;

export declare namespace TranscriptionVocabularies {
  export {
    type TranscriptionVocabulary as TranscriptionVocabulary,
    type TranscriptionVocabularyResponse as TranscriptionVocabularyResponse,
    TranscriptionVocabulariesBasePage as TranscriptionVocabulariesBasePage,
    type TranscriptionVocabularyCreateParams as TranscriptionVocabularyCreateParams,
    type TranscriptionVocabularyUpdateParams as TranscriptionVocabularyUpdateParams,
    type TranscriptionVocabularyListParams as TranscriptionVocabularyListParams,
  };
}
