const { expect } = require('chai');
const nockBack = require('nock').back;
const Mux = require('../../../dist/mux.js');

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

  /** @test {TranscriptionVocabularies.get} */
  describe('TranscriptionVocabularies.get', () => {
    /** @test {TranscriptionVocabularies.get} */
    it('gets a transcription vocabulary', async () => {
      const { nockDone } = await nockBack('TranscriptionVocabularies/get.json');
      const testTranscriptionVocabulary =
        await Video.TranscriptionVocabularies.create({
          name: 'Mux Test Vocabulary',
        });

      const vocabulary = await Video.TranscriptionVocabularies.get(
        testTranscriptionVocabulary.id
      );

      expect(vocabulary.name).to.equal('Mux Test Vocabulary');
      nockDone();
    });

    /** @test {TranscriptionVocabularies.get} */
    it('fails to get a transcription vocabulary when not given an incorrect transcription vocabulary id', () =>
      Video.TranscriptionVocabularies.get('somefakeid').catch(
        (err) => expect(err).to.exist
      ));
  });

  /** @test {TranscriptionVocabularies.update} */
  describe('TranscriptionVocabularies.update', () => {
    /** @test {TranscriptionVocabularies.update} */
    it('updates a transcription vocabulary', async () => {
      const { nockDone } = await nockBack(
        'TranscriptionVocabularies/update.json'
      );
      const testTranscriptionVocabulary =
        await Video.TranscriptionVocabularies.create({
          name: 'Mux Test Vocabulary',
          phrases: ['goinky'],
        });

      expect(testTranscriptionVocabulary.phrases).to.include('goinky');

      const updatedTranscriptionVocabulary =
        await Video.TranscriptionVocabularies.update(
          testTranscriptionVocabulary.id,
          { phrases: ['roinky'] }
        );

      expect(updatedTranscriptionVocabulary.phrases).to.include('roinky');

      await Video.TranscriptionVocabularies.delete(
        testTranscriptionVocabulary.id
      );
      nockDone();
    });

    /** @test {TranscriptionVocabularies.update} */
    it('fails to update a transcription vocabulary if given an incorrect transcription vocabulary id', () =>
      Video.TranscriptionVocabularies.update('somefakeid').catch(
        (err) => expect(err).to.exist
      ));
  });

  /** @test {TranscriptionVocabularies.delete} */
  describe('TranscriptionVocabularies.delete', () => {
    /** @test {TranscriptionVocabularies.delete} */
    it('deletes a transcription vocabulary', async () => {
      const { nockDone } = await nockBack(
        'TranscriptionVocabularies/delete.json'
      );
      const testTranscriptionVocabulary =
        await Video.TranscriptionVocabularies.create({ name: 'Test' });

      await Video.TranscriptionVocabularies.delete(
        testTranscriptionVocabulary.id
      );

      nockDone();
    });
  });
});
