// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { BasePage, BasePageParams } from '~/pagination';

export class TranscriptionVocabularies extends APIResource {
  /**
   * Create a new Transcription Vocabulary.
   */
  async create(
    body: TranscriptionVocabularyCreateParams,
    options?: Core.RequestOptions,
  ): Promise<TranscriptionVocabulary> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.post('/video/v1/transcription-vocabularies', { body, ...options })) as any;
    return response.data;
  }

  /**
   * Retrieves the details of a Transcription Vocabulary that has previously been
   * created. Supply the unique Transcription Vocabulary ID and Mux will return the
   * corresponding Transcription Vocabulary information. The same information is
   * returned when creating a Transcription Vocabulary.
   */
  async retrieve(
    transcriptionVocabularyId: string,
    options?: Core.RequestOptions,
  ): Promise<TranscriptionVocabulary> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.get(
      `/video/v1/transcription-vocabularies/${transcriptionVocabularyId}`,
      options,
    )) as any;
    return response.data;
  }

  /**
   * Updates the details of a previously-created Transcription Vocabulary. Updates to
   * Transcription Vocabularies are allowed while associated live streams are active.
   * However, updates will not be applied to those streams while they are active.
   */
  async update(
    transcriptionVocabularyId: string,
    body: TranscriptionVocabularyUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<TranscriptionVocabulary> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.put(`/video/v1/transcription-vocabularies/${transcriptionVocabularyId}`, {
      body,
      ...options,
    })) as any;
    return response.data;
  }

  /**
   * List all Transcription Vocabularies.
   */
  list(
    query?: TranscriptionVocabularyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TranscriptionVocabulariesBasePage>;
  list(options?: Core.RequestOptions): Core.PagePromise<TranscriptionVocabulariesBasePage>;
  list(
    query: TranscriptionVocabularyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TranscriptionVocabulariesBasePage> {
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
  del(
    transcriptionVocabularyId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    return this.delete(`/video/v1/transcription-vocabularies/${transcriptionVocabularyId}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }
}

export class TranscriptionVocabulariesBasePage extends BasePage<TranscriptionVocabulary> {}

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
   * `generated_subtitles`, the probability of successful speech recognition for
   * these words or phrases is boosted.
   */
  phrases: Array<TranscriptionVocabularyPhrase>;
}

export interface TranscriptionVocabularyUpdateParams {
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
   * `generated_subtitles`, the probability of successful speech recognition for
   * these words or phrases is boosted.
   */
  phrases: Array<TranscriptionVocabularyPhrase>;
}

export interface TranscriptionVocabularyListParams extends BasePageParams {}
