// File generated from our OpenAPI spec by Stainless.

import Mux from '@mux/mux-node';
import { TypeClaim, DataTypeClaim, TypeToken } from '@mux/mux-node/util/jwt-types';
import { decodeJwt, jwtVerify, importJWK, importPKCS8 } from 'jose';
import { publicJwk, privatePkcs1, privatePkcs8 } from './rsaKeys';
import crypto from 'crypto';
import path from 'path';

const jwtSigningKey = 'PT74yy9024fVaJjZJaGsHY01XFzoBtWazx4s6S7AkNri4';

const mux = new Mux({
  tokenId: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  tokenSecret: 'my secret',
  jwtSigningKey,
  jwtPrivateKey: privatePkcs1,
});

const muxWithoutKeys = new Mux({
  tokenId: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  tokenSecret: 'my secret',
});

async function verify(jwt: string | Promise<string>): Promise<object> {
  const publicKey = await importJWK(publicJwk);
  return (await jwtVerify(await jwt, publicKey)).payload;
}

describe('resource jwt', () => {
  test('signPlaybackId', async () => {
    expect(await verify(mux.jwt.signPlaybackId('abcdefgh'))).toMatchObject({
      kid: jwtSigningKey,
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    });
    expect(decodeJwt(await mux.jwt.signPlaybackId('abcdefgh', { type: 'gif' }))).toMatchObject({
      kid: jwtSigningKey,
      aud: TypeClaim.gif,
      sub: 'abcdefgh',
    });
    expect(
      decodeJwt(
        await muxWithoutKeys.jwt.signPlaybackId('abcdefgh', {
          keyId: jwtSigningKey,
          keySecret: privatePkcs1,
        }),
      ),
    ).toMatchObject({
      kid: jwtSigningKey,
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    });
    expect(
      decodeJwt(
        await muxWithoutKeys.jwt.signPlaybackId('abcdefgh', {
          keyId: jwtSigningKey,
          keySecret: Buffer.from(privatePkcs1).toString('base64'),
        }),
      ),
    ).toMatchObject({
      kid: jwtSigningKey,
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    });
  });

  it('using Base64-encoded PKCS1 PEM', async function () {
    expect(
      await verify(
        mux.jwt.signPlaybackId('abcdefgh', {
          keyId: jwtSigningKey,
          // this is the format that the API returns
          keySecret: Buffer.from(privatePkcs1).toString('base64'),
        }),
      ),
    ).toMatchObject({
      kid: jwtSigningKey,
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    });
  });

  it('using PKCS1 PEM', async function () {
    expect(
      await verify(mux.jwt.signPlaybackId('abcdefgh', { keyId: jwtSigningKey, keySecret: privatePkcs1 })),
    ).toMatchObject({
      kid: jwtSigningKey,
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    });
  });

  it('using PKCS1 PEM Buffer', async function () {
    expect(
      await verify(
        mux.jwt.signPlaybackId('abcdefgh', {
          keyId: jwtSigningKey,
          keySecret: Buffer.from(privatePkcs1),
        }),
      ),
    ).toMatchObject({
      kid: jwtSigningKey,
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    });
  });

  it('using keyFilePath', async function () {
    expect(
      await verify(
        mux.jwt.signPlaybackId('abcdefgh', {
          keyId: jwtSigningKey,
          keyFilePath: path.join(__dirname, 'rsaPrivateKey.pem'),
        }),
      ),
    ).toMatchObject({
      kid: jwtSigningKey,
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    });
  });

  it('using jose importPKCS8 key', async function () {
    expect(
      await verify(
        mux.jwt.signPlaybackId('abcdefgh', {
          keyId: jwtSigningKey,
          keySecret: await importPKCS8(privatePkcs8, 'RS256'),
        }),
      ),
    ).toMatchObject({
      kid: jwtSigningKey,
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    });
  });

  it('using node crypto KeyObject', async function () {
    expect(
      await verify(
        mux.jwt.signPlaybackId('abcdefgh', {
          keyId: jwtSigningKey,
          keySecret: crypto.createPrivateKey(privatePkcs1),
        }),
      ),
    ).toMatchObject({
      kid: jwtSigningKey,
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    });
  });

  it('using PKCS8 PEM', async function () {
    expect(
      await verify(mux.jwt.signPlaybackId('abcdefgh', { keyId: jwtSigningKey, keySecret: privatePkcs8 })),
    ).toMatchObject({
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    });
  });

  it('using Base64-encoded PKCS1 PEM', async function () {
    expect(
      await verify(
        mux.jwt.signPlaybackId('abcdefgh', {
          keyId: jwtSigningKey,
          keySecret: Buffer.from(privatePkcs8).toString('base64'),
        }),
      ),
    ).toMatchObject({
      kid: jwtSigningKey,
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    });
  });

  test('signSpaceId', async () => {
    expect(decodeJwt(await mux.jwt.signSpaceId('abcdefgh'))).toMatchObject({
      kid: jwtSigningKey,
      aud: 'rt',
      sub: 'abcdefgh',
    });
    expect(
      decodeJwt(
        await muxWithoutKeys.jwt.signSpaceId('abcdefgh', {
          keyId: jwtSigningKey,
          keySecret: privatePkcs1,
        }),
      ),
    ).toMatchObject({
      kid: jwtSigningKey,
      aud: 'rt',
      sub: 'abcdefgh',
    });
    expect(
      decodeJwt(
        await muxWithoutKeys.jwt.signSpaceId('abcdefgh', {
          keyId: jwtSigningKey,
          keySecret: Buffer.from(privatePkcs1).toString('base64'),
        }),
      ),
    ).toMatchObject({
      kid: jwtSigningKey,
      aud: 'rt',
      sub: 'abcdefgh',
    });
  });

  test('signDrmLicense', async () => {
    expect(decodeJwt(await mux.jwt.signDrmLicense('abcdefgh'))).toMatchObject({
      kid: jwtSigningKey,
      aud: 'd',
      sub: 'abcdefgh',
    });
    expect(
      decodeJwt(
        await muxWithoutKeys.jwt.signDrmLicense('abcdefgh', {
          keyId: jwtSigningKey,
          keySecret: privatePkcs1,
        }),
      ),
    ).toMatchObject({
      kid: jwtSigningKey,
      aud: 'd',
      sub: 'abcdefgh',
    });
    expect(
      decodeJwt(
        await muxWithoutKeys.jwt.signDrmLicense('abcdefgh', {
          keyId: jwtSigningKey,
          keySecret: Buffer.from(privatePkcs1).toString('base64'),
        }),
      ),
    ).toMatchObject({
      kid: jwtSigningKey,
      aud: 'd',
      sub: 'abcdefgh',
    });
  });

  test('signViewerCounts', async () => {
    expect(decodeJwt(await mux.jwt.signViewerCounts('abcdefgh'))).toMatchObject({
      kid: jwtSigningKey,
      aud: DataTypeClaim.video,
      sub: 'abcdefgh',
    });
    expect(decodeJwt(await mux.jwt.signViewerCounts('abcdefgh', { type: 'asset' }))).toMatchObject({
      kid: jwtSigningKey,
      aud: DataTypeClaim.asset,
      sub: 'abcdefgh',
    });

    expect(
      decodeJwt(
        await muxWithoutKeys.jwt.signViewerCounts('abcdefgh', {
          keyId: jwtSigningKey,
          keySecret: privatePkcs1,
        }),
      ),
    ).toMatchObject({
      kid: jwtSigningKey,
      aud: DataTypeClaim.video,
      sub: 'abcdefgh',
    });
    expect(
      decodeJwt(
        await muxWithoutKeys.jwt.signViewerCounts('abcdefgh', {
          keyId: jwtSigningKey,
          keySecret: Buffer.from(privatePkcs1).toString('base64'),
        }),
      ),
    ).toMatchObject({
      kid: jwtSigningKey,
      aud: DataTypeClaim.video,
      sub: 'abcdefgh',
    });
  });

  test('signPlaybackId multiple types returns same tokens as multiple single calls', async () => {
    const id = 'abcdefgh';
    const expiration = '1d';

    const playbackToken = await mux.jwt.signPlaybackId(id, {
      expiration,
      type: 'video',
    });
    const thumbnailToken = await mux.jwt.signPlaybackId(id, {
      expiration,
      type: 'thumbnail',
    });
    const storyboardToken = await mux.jwt.signPlaybackId(id, {
      expiration,
      type: 'storyboard',
    });
    const drmToken = await mux.jwt.signPlaybackId(id, {
      expiration,
      type: 'drm_license',
    });
    const gifToken = await mux.jwt.signPlaybackId(id, {
      expiration,
      type: 'gif',
    });
    const statsToken = await mux.jwt.signPlaybackId(id, {
      expiration,
      type: 'stats',
    });

    const tokens = await mux.jwt.signPlaybackId(id, {
      expiration,
      type: ['video', 'thumbnail', 'storyboard', 'drm_license', 'gif', 'stats'],
    });

    expect(tokens[TypeToken.video]).toEqual(playbackToken);
    expect(tokens[TypeToken.thumbnail]).toEqual(thumbnailToken);
    expect(tokens[TypeToken.storyboard]).toEqual(storyboardToken);
    expect(tokens[TypeToken.drm_license]).toEqual(drmToken);
    expect(tokens[TypeToken.gif]).toEqual(gifToken);
    expect(tokens[TypeToken.stats]).toEqual(statsToken);
  });

  test('signPlaybackId multiple types with params returns same tokens as multiple single calls', async () => {
    const id = 'abcdefgh';
    const expiration = '1d';

    const playbackToken = await mux.jwt.signPlaybackId(id, {
      expiration,
      type: 'video',
    });
    const thumbnailParams = { time: '2' };
    const thumbnailToken = await mux.jwt.signPlaybackId(id, {
      expiration,
      type: 'thumbnail',
      params: thumbnailParams,
    });
    const storyboardToken = await mux.jwt.signPlaybackId(id, {
      expiration,
      type: 'storyboard',
    });

    const tokens = await mux.jwt.signPlaybackId(id, {
      expiration,
      type: ['video', ['thumbnail', thumbnailParams], 'storyboard'],
    });

    expect(tokens[TypeToken.video]).toEqual(playbackToken);
    expect(tokens[TypeToken.thumbnail]).toEqual(thumbnailToken);
    expect(tokens[TypeToken.storyboard]).toEqual(storyboardToken);
  });
});
