const { expect } = require('chai');
const nockBack = require('nock').back;
const Mux = require('../../../cjs');

/** @test {TranscriptionVocabularies} */
describe('Integration::TranscriptionVocabularies', () => {
  const muxClient = new Mux();
  const { Video } = muxClient;

  /** @test {TranscriptionVocabularies.list} */
  describe('TranscriptionVocabularies.list', () => {
    /** @test {TranscriptionVocabularies.list} */
    it('lists all transcription vocabularies', async () => {
      const { nockDone } = await nockBack(
        'TranscriptionVocabularies/list.json'
      );
      const vocabularies = await Video.TranscriptionVocabularies.list();
      expect(vocabularies).to.be.an('array');
      nockDone();
    });
  });
});
