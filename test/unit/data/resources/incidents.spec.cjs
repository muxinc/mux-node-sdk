const { expect } = require('chai');
const moxios = require('moxios');
const sinon = require('sinon');
const { Incidents } = require('../../../../cjs/data/resources/incidents');

/** @test {Incidents} */
describe('Unit::Incidents', () => {
  const testApiKey = 'testKey';
  const testSecret = 'testSecret';
  const incidentsInstance = new Incidents(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install(incidentsInstance.http);
  });

  afterEach(() => {
    moxios.uninstall(incidentsInstance.http);
  });

  /** @test {Incidents} */
  describe('Incidents', () => {
    /** @test {Incidents} */
    it('throws an error if an api key is not given', () => {
      expect(() => new Incidents()).to.throw(
        'API Access Token must be provided.'
      );
    });

    /** @test {Incidents} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new Incidents(testApiKey)).to.throw(
        'API secret key must be provided'
      );
    });

    /** @test {Incidents} */
    it('creates a new Incidents instance', () => {
      const TestIncidents = new Incidents(testApiKey, testSecret);
      expect(() => new Incidents(testApiKey, testSecret)).to.not.throw();
      expect(TestIncidents.tokenId).to.equal(testApiKey);
      expect(TestIncidents.tokenSecret).to.equal(testSecret);
    });
  });

  /** @test {Incidents.get} */
  describe('Incidents.get', () => {
    /** @test {Incidents.get} */
    it('throws an error if an incident Id is not provided', () => {
      expect(() => incidentsInstance.get()).to.throw(
        'An incident id is required for incident details.'
      );
    });
  });

  /** @test {Incidents.related} */
  describe('Incidents.related', () => {
    /** @test {Incidents.related} */
    it('throws an error if an incident Id is not provided', () => {
      expect(() => incidentsInstance.related()).to.throw(
        'An incident id is required for related incidents.'
      );
    });

    it('makes a get request to the Mux data incidents route', (done) => {
      moxios.stubRequest('/data/v1/incidents/abc123/related', {
        status: 200,
        responseText: '{"data": {"incidents": true}}',
      });

      const onFulfilled = sinon.spy();
      incidentsInstance.related('abc123').then(onFulfilled);

      return moxios.wait(() => {
        expect(onFulfilled.getCall(0).args[0].data.incidents).to.be.true;
        done();
      });
    });
  });
});
