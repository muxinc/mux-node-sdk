// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '@mux/mux-node/resource';
import crypto from 'crypto';
import { getHeader, HeadersLike } from '@mux/mux-node/core';

export class Webhooks extends APIResource {
  /**
   * Validates that the given payload was sent by Mux and parses the payload.
   */
  unwrap(
    payload: string,
    headers: HeadersLike,
    secret: string | undefined | null = this.client.webhookSecret,
  ): Object {
    this.verifySignature(payload, headers, secret);
    return JSON.parse(payload);
  }

  private parseHeader(header: string, scheme: string) {
    if (typeof header !== 'string') {
      return null;
    }

    return header.split(',').reduce(
      (accum, item) => {
        const kv: string[] = item.split('=');

        if (kv[0] === 't') {
          /* eslint-disable no-param-reassign, prefer-destructuring */
          accum.timestamp = parseInt(kv[1]!, 10);
        }

        if (kv[0] === scheme && typeof kv[1] === 'string') {
          accum.signatures.push(kv[1]);
        }

        return accum;
      },
      {
        timestamp: -1,
        signatures: [] as string[],
      },
    );
  }

  /** Make an assertion, if not `true`, then throw. */
  private assert(expr: unknown, msg = ''): asserts expr {
    if (!expr) {
      throw new Error(msg);
    }
  }

  private computeSignature(payload: string, secret: string | Buffer) {
    return crypto.createHmac('sha256', secret).update(payload, 'utf8').digest('hex');
  }

  /** Compare to array buffers or data views in a way that timing based attacks
   * cannot gain information about the platform. */
  private timingSafeEqual(
    a: ArrayBufferView | ArrayBufferLike | DataView,
    b: ArrayBufferView | ArrayBufferLike | DataView,
  ): boolean {
    if (a.byteLength !== b.byteLength) {
      return false;
    }
    if (!(a instanceof DataView)) {
      a = new DataView(ArrayBuffer.isView(a) ? a.buffer : a);
    }
    if (!(b instanceof DataView)) {
      b = new DataView(ArrayBuffer.isView(b) ? b.buffer : b);
    }
    this.assert(a instanceof DataView);
    this.assert(b instanceof DataView);
    const length = a.byteLength;
    let out = 0;
    let i = -1;
    while (++i < length) {
      out |= a.getUint8(i) ^ b.getUint8(i);
    }
    return out === 0;
  }

  /**
   * Validates whether or not the webhook payload was sent by Mux.
   *
   * If it was not sent by Mux then an error will be raised.
   */
  verifySignature(
    body: string,
    headers: HeadersLike,
    secret: string | undefined | null = this.client.webhookSecret,
  ): void {
    if (!secret) {
      throw new Error(
        "The webhook secret must either be set using the env var, MUX_WEBHOOK_SECRET, on the client class, Mux({ webhookSecret: '123' }), or passed to this function",
      );
    }

    const header = getHeader(headers, 'mux-signature');
    if (!header) {
      throw new Error('Could not find a mux-signature header');
    }

    if (typeof body !== 'string') {
      throw new Error(
        'Webhook body must be passed as the raw JSON string sent from the server (do not parse it first).',
      );
    }

    const details = this.parseHeader(header, 'v1');
    if (!details || details.timestamp === -1) {
      throw new Error('Unable to extract timestamp and signatures from header');
    }

    if (!details.signatures.length) {
      throw new Error('No v1 signatures found');
    }

    const expectedSignature = this.computeSignature(`${details.timestamp}.${body}`, secret);

    const encoder = new TextEncoder();
    const signatureFound = !!details.signatures.filter((sig) =>
      this.timingSafeEqual(encoder.encode(sig), encoder.encode(expectedSignature)),
    ).length;

    if (!signatureFound) {
      throw new Error('No signatures found matching the expected signature for payload.');
    }

    const timestampAge = Math.floor(Date.now() / 1000) - details.timestamp;

    const tolerance = 300; // 5 minutes
    if (timestampAge > tolerance) {
      throw new Error('Webhook timestamp is too old');
    }
  }
}
