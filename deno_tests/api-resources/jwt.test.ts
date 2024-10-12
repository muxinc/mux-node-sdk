// File generated from our OpenAPI spec by Stainless.

import Mux from '../../deno/mod.ts';
import { TypeClaim, DataTypeClaim, TypeToken } from '../../deno/util/jwt-types.ts';
import { jwtVerify, importJWK, importPKCS8 } from 'https://deno.land/x/jose@v4.14.4/index.ts';
import { assertObjectMatch } from 'https://deno.land/std@0.197.0/testing/asserts.ts';
import { publicJwk, privatePkcs1, privatePkcs8 } from '../../tests/api-resources/rsaKeys.ts';

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

Deno.test(async function signPlaybackId() {
  assertObjectMatch(await verify(mux.jwt.signPlaybackId('abcdefgh')), {
    kid: jwtSigningKey,
    aud: TypeClaim.video,
    sub: 'abcdefgh',
  });

  assertObjectMatch(await verify(mux.jwt.signPlaybackId('abcdefgh')), {
    kid: jwtSigningKey,
    aud: TypeClaim.video,
    sub: 'abcdefgh',
  });
  assertObjectMatch(await verify(mux.jwt.signPlaybackId('abcdefgh', { type: 'gif' })), {
    kid: jwtSigningKey,
    aud: TypeClaim.gif,
    sub: 'abcdefgh',
  });
  assertObjectMatch(
    await verify(
      muxWithoutKeys.jwt.signPlaybackId('abcdefgh', {
        type: 'gif',
        keyId: jwtSigningKey,
        keySecret: privatePkcs1,
      }),
    ),
    {
      kid: jwtSigningKey,
      aud: TypeClaim.gif,
      sub: 'abcdefgh',
    },
  );
});

Deno.test(async function usingBase64EncodedPkcs1Pem() {
  assertObjectMatch(
    await verify(
      mux.jwt.signPlaybackId('abcdefgh', {
        keyId: jwtSigningKey,
        // this is the format that the API returns
        keySecret: btoa(privatePkcs1),
      }),
    ),
    {
      kid: jwtSigningKey,
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    },
  );
});

Deno.test(async function usingPkcs1Pem() {
  assertObjectMatch(
    await verify(mux.jwt.signPlaybackId('abcdefgh', { keyId: jwtSigningKey, keySecret: privatePkcs1 })),
    {
      kid: jwtSigningKey,
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    },
  );
});

Deno.test(async function usingPkcs8Pem() {
  assertObjectMatch(
    await verify(mux.jwt.signPlaybackId('abcdefgh', { keyId: jwtSigningKey, keySecret: privatePkcs8 })),
    {
      kid: jwtSigningKey,
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    },
  );
});

Deno.test(async function usingJoseImportPKCS8Key() {
  assertObjectMatch(
    await verify(
      mux.jwt.signPlaybackId('abcdefgh', {
        keyId: jwtSigningKey,
        keySecret: await importPKCS8(privatePkcs8, 'RS256'),
      }),
    ),
    {
      kid: jwtSigningKey,
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    },
  );
});

Deno.test(async function usingBase64EncodedPkcs8Pem() {
  assertObjectMatch(
    await verify(
      mux.jwt.signPlaybackId('abcdefgh', {
        keyId: jwtSigningKey,
        keySecret: btoa(privatePkcs8),
      }),
    ),
    {
      kid: jwtSigningKey,
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    },
  );
});

Deno.test(async function signSpaceId() {
  assertObjectMatch(await verify(mux.jwt.signSpaceId('abcdefgh')), {
    kid: jwtSigningKey,
    aud: 'rt',
    sub: 'abcdefgh',
  });
  assertObjectMatch(
    await verify(
      muxWithoutKeys.jwt.signSpaceId('abcdefgh', {
        keyId: jwtSigningKey,
        keySecret: privatePkcs1,
      }),
    ),
    {
      kid: jwtSigningKey,
      aud: 'rt',
      sub: 'abcdefgh',
    },
  );
});

Deno.test(async function signDrmLicense() {
  assertObjectMatch(await verify(mux.jwt.signDrmLicense('abcdefgh')), {
    kid: jwtSigningKey,
    aud: 'd',
    sub: 'abcdefgh',
  });
  assertObjectMatch(
    await verify(
      muxWithoutKeys.jwt.signDrmLicense('abcdefgh', {
        keyId: jwtSigningKey,
        keySecret: privatePkcs1,
      }),
    ),
    {
      kid: jwtSigningKey,
      aud: 'd',
      sub: 'abcdefgh',
    },
  );
});

Deno.test(async function signViewerCounts() {
  assertObjectMatch(await verify(mux.jwt.signViewerCounts('abcdefgh')), {
    kid: jwtSigningKey,
    aud: DataTypeClaim.video,
    sub: 'abcdefgh',
  });
  assertObjectMatch(await verify(mux.jwt.signViewerCounts('abcdefgh', { type: 'asset' })), {
    kid: jwtSigningKey,
    aud: DataTypeClaim.asset,
    sub: 'abcdefgh',
  });

  assertObjectMatch(
    await verify(
      muxWithoutKeys.jwt.signViewerCounts('abcdefgh', {
        keyId: jwtSigningKey,
        keySecret: privatePkcs1,
      }),
    ),
    {
      kid: jwtSigningKey,
      aud: DataTypeClaim.video,
      sub: 'abcdefgh',
    },
  );
});

Deno.test('signPlaybackId multiple types returns same tokens as multiple single calls', async () => {
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

  assertEquals(tokens[TypeToken.video], playbackToken);
  assertEquals(tokens[TypeToken.thumbnail], thumbnailToken);
  assertEquals(tokens[TypeToken.storyboard], storyboardToken);
  assertEquals(tokens[TypeToken.drm_license], drmToken);
  assertEquals(tokens[TypeToken.gif], gifToken);
  assertEquals(tokens[TypeToken.stats], statsToken);
});

Deno.test(
  'signPlaybackId multiple types with params returns same tokens as multiple single calls',
  async () => {
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
      type: ['video', ['thumbnail', { params: thumbnailParams }], 'storyboard'],
    });

    assertEquals(tokens[TypeToken.video], playbackToken);
    assertEquals(tokens[TypeToken.thumbnail], thumbnailToken);
    assertEquals(tokens[TypeToken.storyboard], storyboardToken);
  },
);
