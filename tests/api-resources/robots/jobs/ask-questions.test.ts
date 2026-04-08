// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mux from '@mux/mux-node';

const client = new Mux({
  tokenId: 'my token id',
  tokenSecret: 'my secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource askQuestions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.robots.jobs.askQuestions.create({
      parameters: {
        asset_id: 'mux_asset_123abc',
        questions: [{ question: 'Is there a person speaking on camera?' }],
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.robots.jobs.askQuestions.create({
      parameters: {
        asset_id: 'mux_asset_123abc',
        questions: [{ question: 'Is there a person speaking on camera?' }],
        answer_options: ['yes', 'no'],
      },
      passthrough: 'passthrough',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.robots.jobs.askQuestions.retrieve('rjob_lK9w2kI5J1');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
