// File generated from our OpenAPI spec by Stainless.

import Mux from '~/index';
const mux = new Mux({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource playback_restrictions', () => {
  test('create: only required params', async () => {
    const response = await mux.video.playbackRestrictions.create({});
  });

  test('create: required and optional params', async () => {
    const response = await mux.video.playbackRestrictions.create({
      referrer: { allowed_domains: ['string', 'string', 'string'], allow_no_referrer: true },
    });
  });

  test('retrieve', async () => {
    const response = await mux.video.playbackRestrictions.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.playbackRestrictions.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('list: only required params', async () => {
    const response = await mux.video.playbackRestrictions.list();
  });

  test('list: required and optional params', async () => {
    const response = await mux.video.playbackRestrictions.list({ page: 0, limit: 0 });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(mux.video.playbackRestrictions.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mux.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.playbackRestrictions.list({ page: 0, limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('delete', async () => {
    const response = await mux.video.playbackRestrictions.del('string');
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      mux.video.playbackRestrictions.del('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mux.NotFoundError);
  });

  test('update_referrer: only required params', async () => {
    const response = await mux.video.playbackRestrictions.updateReferrer('string', {});
  });

  test('update_referrer: required and optional params', async () => {
    const response = await mux.video.playbackRestrictions.updateReferrer('string', {
      allowed_domains: ['string', 'string', 'string'],
      allow_no_referrer: true,
    });
  });
});
