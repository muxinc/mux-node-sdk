// File generated from our OpenAPI spec by Stainless.

import Mux from '@mux/mux-node';
import { TypeClaim, DataTypeClaim } from '@mux/mux-node/jwt-types';
import jwt from 'jsonwebtoken';

const jwtSigningKey = 'PT74yy9024fVaJjZJaGsHY01XFzoBtWazx4s6S7AkNri4';
const jwtPrivateKey =
  'LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFcEFJQkFBS0NBUUVBM3pCNnc0ckZzaTNTVUgrZlR2eTFWYlg4cng3OU8xRzBBN0hPSldoaVN6Z001UmxQClc4RWZBbzFQbVB0N0MyVmRPcGVkaWx4eXJ2YVUwcUc0OGZIc3RnbHIzZHVCQUE1ekgxc3RNSHpMQ1NYWGRKOGcKZUF1K2ZzRzg3ZlNYamxPWkh1dGxZcytpNmt3Tk9QaGVacXJjZEJVWVdZalN2WGtxMkNwQkphSFVYMVlLeE5hQQpWZGVVV0Zrd3pVUW1ITVJPMEJSMHMyVXhzUWR5aXN1UVkybkdZazN4OEgvK29VcW5ET3pqV2J0YjNIaC9Xdjd2ClY2N29mM3JKSlBnVExhbk5kWkZkMEllQnA1OG41VUF2dDFNaWhnSmprcndsZHlaSGVhSExWb2RFVVhqYjZvQTcKU1M3Z1FHd0hjczFla21iUTR1bmdlZGFCTUpubHVWNlg4VE5TcndJREFRQUJBb0lCQVFDSDZKbVpJWlFwWUVYRgp4ekZYaEFOWVlpMnc1Z29HYVVaWlNaamlwcUhVZEJsR0dSZCtKQ2VpQWpNS1VYa29BMTIySkVWR3orejJKaW1SCjZmRVpROXlGTFUrR0ZmaUQ5RWllTzROVkYyajc5Uk15YlFQMGxoSTJWZnVhVzJzK3ZDRnQ5cUlTZmFZVFRxUnUKb0srN2pTZ1plQThQMW9XZDQzNzNpeU9JcXZjTDVkSDJsMnkrMjFLRGVmYmZURmhrcmVXd2NyWkRzdFREb01MRgpQV1RRN201SlhkY2dwa1NGRjJEejNsc200RnZLdlR0RW5rNmN4V3JGZGxXd2hRc2dWcGJiSjRiL2RUbnR0cy93CjBVa3l4M2lrZlphSHRZRUlWaGg1S3N1d3pFMmd4NnBUbVl0eGRiR3VEUkZHQmY0ZXB6Z0F4MGtqaGJveFJVYWwKYm05SnF5ckJBb0dCQVBkdzNwMmVoL0JTM3VXcDZxL2RDbVZacG03elBUajRsSFMxaDJYV3JSQ21uZ3hjeHFoKwpyakY1T3gvc3JIdCtPQkpNQ29payt0VlNpc21YL0twVmc1b05rV2tDK2FvcTVGeFdzUGZncU5DYm0rby9iZ1JuCmpMbmFmaklESmZWbkN2dTYvTHFWbWhJNGFFenVUaWJaSmFxcFVlbkJWMWJkL3lXM1ppS1Z1SVhKQW9HQkFPYm8KMjlHalg2U2xHWEQ2SHRWQitESmxhazltOVZmbVVWWlJkSEY3WlgvNms1ZDdEb1JUVnBveWVoQmVsdTNZVGhiaQpNZnpjUytiNDVOZU9QMXRkVHZwb0NTNEEzdVBDVCtvcm90V1crYS9oRWw2MWJOQUVtUUpaWncwTTY2Vm53K1AyClVoQmZhWk1yMFNJaWJ0SVZpcGdTOUtoUWUzd3ViYjZoWWhENmhqQzNBb0dCQU1KRDlqTXZiTENzajEwbVd4LzUKWFprV21vbVBKS2plMk1jTVlpSDlPbURSUDFLYllFaVhOTEdZNldkMkRERGtkcWMrMWlKVHpLN0FvRUFIdUpJTwprMFRXbEN3cTd0Sy8zQXYyNy9lY2hVMUtiazJwd1BscVJ0ei9nb1pIWEh6ZmlvcjZVa00zQXdCOUVyNGJkbllmCmsrZjZDVnFKdGNWNGcwSWNTKzZwTjNhcEFvR0FSb0pjZlV0UjdVaXMyQjdJUTM1OWQ0WVlURjY0RkRzMEl4T0UKWnhLekQ3MUlURDA3VlpUTklSREF6VGJWQjVQQlpLTjFlQzBjMEU2NE1rb3hkb2lya1RNcmVteXhvd0sydkY3Twp2a0gzeElrSnZ2blBYRVhMSXppQml5Nmkxa00xUWVyNWJCNTJjb1l5dWlXaGlXMGlnUVZveCt5cmlHUDFCdnpvCm9SNmUwMGtDZ1lCb2phblNnUjhWQm8zZC8yeHRTVUM0cmkzZmxqSkoyZWxDRk1TMU40Ym1JY2t3NmZ5UGMzelEKb3dFNFA5dG5pMVhYcHNUTys1TjFTYnpmdFkzdzl1SVJRRDRZaTVFbDFYQUFBdUo1VFUxUzRGNTRLa0srOWQ5bwpYWGpHR2t0bERqL3ZoUDlQUlIzTmhMS084M1A2bk1FbEN5U1BteXJRdjIvczc4QmNNOVp2R0E9PQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQo=';

const mux = new Mux({
  tokenId: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  tokenSecret: 'my secret',
  jwtSigningKey,
  jwtPrivateKey,
});

const muxWithoutKeys = new Mux({
  tokenId: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  tokenSecret: 'my secret',
});

describe('resource jwt', () => {
  test('signPlaybackId', async () => {
    expect(jwt.decode(await mux.jwt.signPlaybackId('abcdefgh'))).toMatchObject({
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    });
    expect(jwt.decode(await mux.jwt.signPlaybackId('abcdefgh', { type: 'gif' }))).toMatchObject({
      aud: TypeClaim.gif,
      sub: 'abcdefgh',
    });
    expect(
      jwt.decode(
        await muxWithoutKeys.jwt.signPlaybackId('abcdefgh', {
          keyId: jwtSigningKey,
          keySecret: jwtPrivateKey,
        }),
      ),
    ).toMatchObject({
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    });
    expect(
      jwt.decode(
        await muxWithoutKeys.jwt.signPlaybackId('abcdefgh', {
          keyId: jwtSigningKey,
          keySecret: Buffer.from(jwtPrivateKey, 'base64').toString(),
        }),
      ),
    ).toMatchObject({
      aud: TypeClaim.video,
      sub: 'abcdefgh',
    });
  });

  test('signSpaceId', async () => {
    expect(jwt.decode(await mux.jwt.signSpaceId('abcdefgh'))).toMatchObject({
      aud: 'rt',
      sub: 'abcdefgh',
    });
    expect(
      jwt.decode(
        await muxWithoutKeys.jwt.signSpaceId('abcdefgh', {
          keyId: jwtSigningKey,
          keySecret: jwtPrivateKey,
        }),
      ),
    ).toMatchObject({
      aud: 'rt',
      sub: 'abcdefgh',
    });
    expect(
      jwt.decode(
        await muxWithoutKeys.jwt.signSpaceId('abcdefgh', {
          keyId: jwtSigningKey,
          keySecret: Buffer.from(jwtPrivateKey, 'base64').toString(),
        }),
      ),
    ).toMatchObject({
      aud: 'rt',
      sub: 'abcdefgh',
    });
  });

  test('signViewerCounts', async () => {
    expect(jwt.decode(await mux.jwt.signViewerCounts('abcdefgh'))).toMatchObject({
      aud: DataTypeClaim.video,
      sub: 'abcdefgh',
    });
    expect(jwt.decode(await mux.jwt.signViewerCounts('abcdefgh', { type: 'asset' }))).toMatchObject({
      aud: DataTypeClaim.asset,
      sub: 'abcdefgh',
    });

    expect(
      jwt.decode(
        await muxWithoutKeys.jwt.signViewerCounts('abcdefgh', {
          keyId: jwtSigningKey,
          keySecret: jwtPrivateKey,
        }),
      ),
    ).toMatchObject({
      aud: DataTypeClaim.video,
      sub: 'abcdefgh',
    });
    expect(
      jwt.decode(
        await muxWithoutKeys.jwt.signViewerCounts('abcdefgh', {
          keyId: jwtSigningKey,
          keySecret: Buffer.from(jwtPrivateKey, 'base64').toString(),
        }),
      ),
    ).toMatchObject({
      aud: DataTypeClaim.video,
      sub: 'abcdefgh',
    });
  });
});
