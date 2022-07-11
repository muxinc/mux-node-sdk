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

  /** @test {TranscriptionVocabularies.create} */
  describe('TranscriptionVocabularies.create', () => {
    /** @test {TranscriptionVocabularies.create} */
    it('creates a transcription vocabulary with defaults', async () => {
      const name = 'Mux Test Vocabulary';
      const phrases = ['test', 'all', 'the', 'things'];

      const { nockDone } = await nockBack(
        'TranscriptionVocabularies/createWithParams.json'
      );

      const vocabulary = await Video.TranscriptionVocabularies.create({
        name,
        phrases,
      });

      expect(vocabulary.id).to.exist;
      expect(vocabulary.name).to.equal(name);
      expect(vocabulary.phrases).to.be.an('array');
      expect(vocabulary.phrases).to.have.lengthOf(4);
      await Video.TranscriptionVocabularies.delete(vocabulary.id);
      nockDone();
    });
  });
});
