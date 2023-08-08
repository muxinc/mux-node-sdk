// File generated from our OpenAPI spec by Stainless.

import * as Core from '@mux/mux-node/core';
import { APIResource } from '@mux/mux-node/resource';
import { isRequestOptions } from '@mux/mux-node/core';
import * as API from './index';
import { BasePage, BasePageParams } from '@mux/mux-node/pagination';

export class TranscriptionVocabularies extends APIResource {
  /**
   * Create a new Transcription Vocabulary.
   */
  create(
    body: TranscriptionVocabularyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TranscriptionVocabulary> {
    return (
      this.post('/video/v1/transcription-vocabularies', { body, ...options }) as Core.APIPromise<{
        data: TranscriptionVocabulary;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Retrieves the details of a Transcription Vocabulary that has previously been
   * created. Supply the unique Transcription Vocabulary ID and Mux will return the
   * corresponding Transcription Vocabulary information. The same information is
   * returned when creating a Transcription Vocabulary.
   */
  retrieve(
    transcriptionVocabularyId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TranscriptionVocabulary> {
    return (
      this.get(
        `/video/v1/transcription-vocabularies/${transcriptionVocabularyId}`,
        options,
      ) as Core.APIPromise<{ data: TranscriptionVocabulary }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Updates the details of a previously-created Transcription Vocabulary. Updates to
   * Transcription Vocabularies are allowed while associated live streams are active.
   * However, updates will not be applied to those streams while they are active.
   */
  update(
    transcriptionVocabularyId: string,
    body: TranscriptionVocabularyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TranscriptionVocabulary> {
    return (
      this.put(`/video/v1/transcription-vocabularies/${transcriptionVocabularyId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ data: TranscriptionVocabulary }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * List all Transcription Vocabularies.
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
    return this.getAPIList('/video/v1/transcription-vocabularies', TranscriptionVocabulariesBasePage, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a Transcription Vocabulary. The Transcription Vocabulary's ID will be
   * disassociated from any live streams using it. Transcription Vocabularies can be
   * deleted while associated live streams are active. However, the words and phrases
   * in the deleted Transcription Vocabulary will remain attached to those streams
   * while they are active.
   */
  del(transcriptionVocabularyId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this.delete(`/video/v1/transcription-vocabularies/${transcriptionVocabularyId}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }
}

export class TranscriptionVocabulariesBasePage extends BasePage<TranscriptionVocabulary> {}
// alias so we can export it in the namespace
type _TranscriptionVocabulariesBasePage = TranscriptionVocabulariesBasePage;

export interface TranscriptionVocabulary {
  /**
   * Unique identifier for the Transcription Vocabulary
   */
  id?: string;

  /**
   * Time the Transcription Vocabulary was created, defined as a Unix timestamp
   * (seconds since epoch).
   */
  created_at?: string;

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
  phrases?: Array<TranscriptionVocabularyPhrase>;

  /**
   * Time the Transcription Vocabulary was updated, defined as a Unix timestamp
   * (seconds since epoch).
   */
  updated_at?: string;
}

/**
 * A phrase or word belonging to a Transcription Vocabulary.
 */
export type TranscriptionVocabularyPhrase = string;

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
  phrases: Array<TranscriptionVocabularyPhrase>;

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
  phrases: Array<TranscriptionVocabularyPhrase>;

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

export namespace TranscriptionVocabularies {
  export import TranscriptionVocabulary = API.TranscriptionVocabulary;
  export import TranscriptionVocabularyPhrase = API.TranscriptionVocabularyPhrase;
  export import TranscriptionVocabularyResponse = API.TranscriptionVocabularyResponse;
  export type TranscriptionVocabulariesBasePage = _TranscriptionVocabulariesBasePage;
  export import TranscriptionVocabularyCreateParams = API.TranscriptionVocabularyCreateParams;
  export import TranscriptionVocabularyUpdateParams = API.TranscriptionVocabularyUpdateParams;
  export import TranscriptionVocabularyListParams = API.TranscriptionVocabularyListParams;
}
