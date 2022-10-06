// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { NoMorePages, NoMorePagesParams } from '~/pagination';

export class TranscriptionVocabularies extends APIResource {
  /**
   * Create a new Transcription Vocabulary.
   */
  create(
    body: TranscriptionVocabularyCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<TranscriptionVocabularyResponse>> {
    return this.post('/video/v1/transcription-vocabularies', { body, ...options });
  }

  /**
   * Retrieves the details of a Transcription Vocabulary that has previously been
   * created. Supply the unique Transcription Vocabulary ID and Mux will return the
   * corresponding Transcription Vocabulary information. The same information is
   * returned when creating a Transcription Vocabulary.
   */
  retrieve(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<TranscriptionVocabularyResponse>> {
    return this.get(`/video/v1/transcription-vocabularies/${id}`, options);
  }

  /**
   * Updates the details of a previously-created Transcription Vocabulary. Updates to
   * Transcription Vocabularies are allowed while associated live streams are active.
   * However, updates will not be applied to those streams while they are active.
   */
  update(
    id: string,
    body: TranscriptionVocabularyUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<TranscriptionVocabularyResponse>> {
    return this.put(`/video/v1/transcription-vocabularies/${id}`, { body, ...options });
  }

  /**
   * List all Transcription Vocabularies.
   */
  list(
    query?: TranscriptionVocabularyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TranscriptionVocabulariesNoMorePages>;
  list(options?: Core.RequestOptions): Core.PagePromise<TranscriptionVocabulariesNoMorePages>;
  list(
    query: TranscriptionVocabularyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TranscriptionVocabulariesNoMorePages> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/video/v1/transcription-vocabularies', TranscriptionVocabulariesNoMorePages, {
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
  del(id: string, options?: Core.RequestOptions): Promise<void> {
    return this.delete(`/video/v1/transcription-vocabularies/${id}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }
}

export class TranscriptionVocabulariesNoMorePages extends NoMorePages<TranscriptionVocabulary> {}

export interface CreateTranscriptionVocabularyRequest {
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

export interface TranscriptionVocabulary {
  data?: Array<TranscriptionVocabulary>;
}

export interface TranscriptionVocabulary {
  /**
   * Time the Transcription Vocabulary was created, defined as a Unix timestamp
   * (seconds since epoch).
   */
  created_at?: string;

  /**
   * Unique identifier for the Transcription Vocabulary
   */
  id?: string;

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

  /**
   * Time the Transcription Vocabulary was updated, defined as a Unix timestamp
   * (seconds since epoch).
   */
  updated_at?: string;
}

/**
 * A phrase or word belonging to a Transcription Vocabulary.
 */

export interface TranscriptionVocabularyResponse {
  data?: TranscriptionVocabulary;
}

export interface UpdateTranscriptionVocabularyRequest {
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

export interface TranscriptionVocabularyListParams extends NoMorePagesParams {}
