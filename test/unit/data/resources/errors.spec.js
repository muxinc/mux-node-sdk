const moxios = require('moxios');
const { Errors } = require('../../../../cjs/data/resources/errors');

/** @test {Errors} */
describe('Unit::Errors', () => {
  const testApiKey = 'testKey';
  const testSecret = 'testSecret';
  const errorsInstance = new Errors(testApiKey, testSecret);

  beforeEach(() => {
    moxios.install(errorsInstance.http);
  });

  afterEach(() => {
    moxios.uninstall(errorsInstance.http);
  });
});
