import type { Response } from 'node-fetch';
import { APIResponse, Headers, createResponseHeaders } from '~/core';

type ServerSentEvent = {
  event: string | null;
  data: string;
  raw: string[];
};

class SSEDecoder {
  private data: string[];
  private event: string | null;
  private chunks: string[];

  constructor() {
    this.event = null;
    this.data = [];
    this.chunks = [];
  }

  decode(line: string) {
    if (line.endsWith('\r')) {
      line = line.substring(0, line.length - 1);
    }

    if (!line) {
      // empty line and we didn't previously encounter any messages
      if (!this.event && !this.data.length) return null;

      const sse: ServerSentEvent = {
        event: this.event,
        data: this.data.join('\n'),
        raw: this.chunks,
      };

      this.event = null;
      this.data = [];
      this.chunks = [];

      return sse;
    }

    this.chunks.push(line);

    if (line.startsWith(':')) {
      return null;
    }

    let [fieldname, _, value] = partition(line, ':');

    if (value.startsWith(' ')) {
      value = value.substring(1);
    }

    if (fieldname === 'event') {
      this.event = value;
    } else if (fieldname === 'data') {
      this.data.push(value);
    }

    return null;
  }
}

export class Stream<Item> implements AsyncIterable<Item>, APIResponse<Stream<Item>> {
  response: Response;
  responseHeaders: Headers;
  controller: AbortController;

  private decoder: SSEDecoder;

  constructor(response: Response, controller: AbortController) {
    this.response = response;
    this.controller = controller;
    this.decoder = new SSEDecoder();
    this.responseHeaders = createResponseHeaders(response.headers);
  }

  private async *iterMessages(): AsyncGenerator<ServerSentEvent, void, unknown> {
    if (!this.response.body) {
      this.controller.abort();
      throw new Error(`Attempted to iterate over a response with no body`);
    }

    for await (const chunk of this.response.body) {
      let text;
      if (chunk instanceof Buffer) {
        text = chunk.toString();
      } else {
        text = chunk;
      }

      for (let line of text.split('\n')) {
        const sse = this.decoder.decode(line);
        if (sse) yield sse;
      }
    }

    this.controller.abort();
  }

  async *[Symbol.asyncIterator](): AsyncIterator<Item, any, undefined> {
    for await (const sse of this.iterMessages()) {
      try {
        yield JSON.parse(sse.data);
      } catch (e) {
        console.error(`Could not parse message into JSON:`, sse.data);
        console.error(`From chunk:`, sse.raw);
        throw e;
      }
    }
  }
}

function partition(str: string, delimiter: string): [string, string, string] {
  const index = str.indexOf(delimiter);
  if (index !== -1) {
    return [str.substring(0, index), delimiter, str.substring(index + delimiter.length)];
  }

  return [str, '', ''];
}
