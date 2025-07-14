# Mux Node API Library

[![NPM version](https://img.shields.io/npm/v/@mux/mux-node.svg)](https://npmjs.org/package/@mux/mux-node) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@mux/mux-node)

This library provides convenient access to the Mux REST API from server-side TypeScript or JavaScript.

> [!NOTE]
> In February 2024 this SDK was updated to Version 8.0. For upgrading to 8.x see [UPGRADE_8.x.md](https://github.com/muxinc/mux-node-sdk/blob/master/UPGRADE_8.x.md)

The REST API documentation can be found on [docs.mux.com](https://docs.mux.com). The full API of this library can be found in [api.md](api.md).

## Installation

```sh
npm install @mux/mux-node
```

## Usage

The full API of this library can be found in [api.md](api.md).

<!-- prettier-ignore -->
```js
import Mux from '@mux/mux-node';

const client = new Mux({
  tokenId: process.env['MUX_TOKEN_ID'], // This is the default and can be omitted
  tokenSecret: process.env['MUX_TOKEN_SECRET'], // This is the default and can be omitted
});

const asset = await client.video.assets.create({
  inputs: [{ url: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4' }],
  playback_policies: ['public'],
});

console.log(asset.id);
```

### Request & Response types

This library includes TypeScript definitions for all request params and response fields. You may import and use them like so:

<!-- prettier-ignore -->
```ts
import Mux from '@mux/mux-node';

const client = new Mux({
  tokenId: process.env['MUX_TOKEN_ID'], // This is the default and can be omitted
  tokenSecret: process.env['MUX_TOKEN_SECRET'], // This is the default and can be omitted
});

const params: Mux.Video.AssetCreateParams = {
  inputs: [{ url: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4' }],
  playback_policies: ['public'],
};
const asset: Mux.Video.Asset = await client.video.assets.create(params);
```

Documentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.

## JWT Helpers ([API Reference](https://github.com/muxinc/mux-node-sdk/blob/master/api.md#jwt))

You can use any JWT-compatible library, but we've included some light helpers in the SDK to make it easier to get up and running.

```js
// Assuming you have your signing key specified in your environment variables:
// Signing token ID: process.env.MUX_SIGNING_KEY
// Signing token secret: process.env.MUX_PRIVATE_KEY

// Most simple request, defaults to type video and is valid for 7 days.
const token = mux.jwt.signPlaybackId('some-playback-id');
// https://stream.mux.com/some-playback-id.m3u8?token=${token}

// If you wanted to sign a thumbnail
const thumbParams = { time: 14, width: 100 };
const thumbToken = mux.jwt.signPlaybackId('some-playback-id', {
  type: 'thumbnail',
  params: thumbParams,
});
// https://image.mux.com/some-playback-id/thumbnail.jpg?token=${token}

// If you wanted to sign a gif
const gifToken = mux.jwt.signPlaybackId('some-playback-id', { type: 'gif' });
// https://image.mux.com/some-playback-id/animated.gif?token=${token}

// Here's an example for a storyboard
const storyboardToken = mux.jwt.signPlaybackId('some-playback-id', {
  type: 'storyboard',
});

// https://image.mux.com/some-playback-id/storyboard.jpg?token=${token}

// You can also use `signViewerCounts` to get a token
// used for requests to the Mux Engagement Counts API
// https://docs.mux.com/guides/see-how-many-people-are-watching
const statsToken = mux.jwt.signViewerCounts('some-live-stream-id', {
  type: 'live_stream',
});

// https://stats.mux.com/counts?token={statsToken}
```

### Signing multiple JWTs at once
In cases you need multiple tokens, like when using Mux Player, things can get unwieldy pretty quickly. For example,
```tsx
const playbackToken = await mux.jwt.signPlaybackId(id, {
  expiration: "1d",
  type: "playback"
})
const thumbnailToken = await mux.jwt.signPlaybackId(id, {
  expiration: "1d",
  type: "thumbnail",
})
const storyboardToken = await mux.jwt.signPlaybackId(id, {
  expiration: "1d",
  type: "storyboard"
})
const drmToken = await mux.jwt.signPlaybackId(id, {
  expiration: "1d",
  type: "drm_license"
})

<mux-player
  playback-token={playbackToken}
  thumbanil-token={thumbnailToken}
  storyboard-token={storyboardToken}
  drm-token={drmToken}
  playbackId={id}
></mux-player>
```

To simplify this use-case, you can provide multiple types to `signPlaybackId` to recieve multiple tokens. These tokens are provided in a format that Mux Player can take as props:
```tsx
// { "playback-token", "thumbnail-token", "storyboard-token", "drm-token" }
const tokens = await mux.jwt.signPlaybackId(id, {
  expiration: "1d",
  type: ["playback", "thumbnail", "storyboard", "drm_license"]
})

<mux-player
  {...tokens}
  playbackId={id}
></mux-player>
```

If you would like to provide params to a single token (e.g., if you would like to have a thumbnail `time`), you can provide `[type, typeParams]` instead of `type`:
```tsx
const tokens = await mux.jwt.signPlaybackId(id, {
  expiration: "1d",
  type: ["playback", ["thumbnail", { time: 2 }], "storyboard", "drm_license"]
})
```

## Parsing Webhook payloads

To validate that the given payload was sent by Mux and parse the webhook payload for use in your application,
you can use the `mux.webhooks.unwrap` utility method.

This method accepts a raw `body` string and a list of headers. As long as you have set your `webhookSecret` in the
appropriate configuration property when instantiating the library, all webhooks will be verified for authenticity automatically.

The following example shows how you can handle a webhook using a Next.js app directory API route:

```js
// app/api/mux/webhooks/route.ts
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';

import Mux from '@mux/mux-node';

const mux = new Mux({
  webhookSecret: process.env.MUX_WEBHOOK_SECRET,
});

export async function POST(request: Request) {
  const headersList = headers();
  const body = await request.text();
  const event = mux.webhooks.unwrap(body, headersList);

  switch (event.type) {
    case 'video.live_stream.active':
    case 'video.live_stream.idle':
    case 'video.live_stream.disabled':
      /**
       * `event` is now understood to be one of the following types:
       *
       *   | Mux.Webhooks.VideoLiveStreamActiveWebhookEvent
       *   | Mux.Webhooks.VideoLiveStreamIdleWebhookEvent
       *   | Mux.Webhooks.VideoLiveStreamDisabledWebhookEvent
       */
      if (event.data.id === 'MySpecialTVLiveStreamID') {
        revalidatePath('/tv');
      }
      break;
    default:
      break;
  }

  return Response.json({ message: 'ok' });
}
```

## Verifying Webhook Signatures

Verifying Webhook Signatures is _optional but encouraged_. Learn more in our [Webhook Security Guide](https://docs.mux.com/docs/webhook-security)

```js
/*
  If the header is valid, this function will not throw an error and will not return a value.
  If the header is invalid, this function will throw one of the following errors:
    - new Error(
      "The webhook secret must either be set using the env var, MUX_WEBHOOK_SECRET, on the client class, Mux({ webhookSecret: '123' }), or passed to this function",
    );
    - new Error('Could not find a mux-signature header');
    - new Error(
      'Webhook body must be passed as the raw JSON string sent from the server (do not parse it first).',
    );
    - new Error('Unable to extract timestamp and signatures from header')
    - new Error('No v1 signatures found');
    - new Error('No signatures found matching the expected signature for payload.')
    - new Error('Webhook timestamp is too old')
*/

/*
  `body` is the raw request body. It should be a string representation of a JSON object.
  `headers` is the value in request.headers
  `secret` is the signing secret for this configured webhook. You can find that in your webhooks dashboard
          (note that this secret is different than your API Secret Key)
*/

mux.webhooks.verifySignature(body, headers, secret);
```

Note that when passing in the payload (body) you want to pass in the raw un-parsed request body, not the parsed JSON. Here's an example if you are using express.

```js
const Mux = require('@mux/mux-node');
const mux = new Mux();
const express = require('express');
const bodyParser = require('body-parser');

/**
 * You'll need to make sure this is externally accessible.  ngrok (https://ngrok.com/)
 * makes this really easy.
 */

const webhookSecret = process.env.WEBHOOK_SECRET;
const app = express();

app.post('/webhooks', bodyParser.raw({ type: 'application/json' }), async (req, res) => {
  try {
    // will raise an exception if the signature is invalid
    const isValidSignature = mux.webhooks.verifySignature(req.body, req.headers, webhookSecret);
    console.log('Success:', isValidSignature);
    // convert the raw req.body to JSON, which is originally Buffer (raw)
    const jsonFormattedBody = JSON.parse(req.body);
    // await doSomething();
    res.json({ received: true });
  } catch (err) {
    // On error, return the error message
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
```

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

<!-- prettier-ignore -->
```ts
const liveStream = await client.video.liveStreams
  .create({ playback_policies: ['public'] })
  .catch(async (err) => {
    if (err instanceof Mux.APIError) {
      console.log(err.status); // 400
      console.log(err.name); // BadRequestError
      console.log(err.headers); // {server: 'nginx', ...}
    } else {
      throw err;
    }
  });
```

Error codes are as follows:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

### Retries

Certain errors will be automatically retried 2 times by default, with a short exponential backoff.
Connection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,
429 Rate Limit, and >=500 Internal errors will all be retried by default.

You can use the `maxRetries` option to configure or disable this:

<!-- prettier-ignore -->
```js
// Configure the default for all requests:
const client = new Mux({
  maxRetries: 0, // default is 2
});

// Or, configure per-request:
await client.video.assets.retrieve('t02rm...', {
  maxRetries: 5,
});
```

### Timeouts

Requests time out after 1 minute by default. You can configure this with a `timeout` option:

<!-- prettier-ignore -->
```ts
// Configure the default for all requests:
const client = new Mux({
  timeout: 20 * 1000, // 20 seconds (default is 1 minute)
});

// Override per-request:
await client.video.assets.retrieve('t02rm...', {
  timeout: 5 * 1000,
});
```

On timeout, an `APIConnectionTimeoutError` is thrown.

Note that requests which time out will be [retried twice by default](#retries).

## Auto-pagination

List methods in the Mux API are paginated.
You can use the `for await … of` syntax to iterate through items across all pages:

```ts
async function fetchAllDeliveryReports(params) {
  const allDeliveryReports = [];
  // Automatically fetches more pages as needed.
  for await (const deliveryReport of client.video.deliveryUsage.list()) {
    allDeliveryReports.push(deliveryReport);
  }
  return allDeliveryReports;
}
```

Alternatively, you can request a single page at a time:

```ts
let page = await client.video.deliveryUsage.list();
for (const deliveryReport of page.data) {
  console.log(deliveryReport);
}

// Convenience methods are provided for manually paginating:
while (page.hasNextPage()) {
  page = await page.getNextPage();
  // ...
}
```

## Advanced Usage

### Accessing raw Response data (e.g., headers)

The "raw" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.

You can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.

<!-- prettier-ignore -->
```ts
const client = new Mux();

const response = await client.video.assets
  .create({
    inputs: [{ url: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4' }],
    playback_policies: ['public'],
  })
  .asResponse();
console.log(response.headers.get('X-My-Header'));
console.log(response.statusText); // access the underlying Response object

const { data: asset, response: raw } = await client.video.assets
  .create({
    inputs: [{ url: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4' }],
    playback_policies: ['public'],
  })
  .withResponse();
console.log(raw.headers.get('X-My-Header'));
console.log(asset.id);
```

### Making custom/undocumented requests

This library is typed for convenient access to the documented API. If you need to access undocumented
endpoints, params, or response properties, the library can still be used.

#### Undocumented endpoints

To make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.
Options on the client, such as retries, will be respected when making these requests.

```ts
await client.post('/some/path', {
  body: { some_prop: 'foo' },
  query: { some_query_arg: 'bar' },
});
```

#### Undocumented params

To make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented
parameter. This library doesn't validate at runtime that the request matches the type, so any extra values you
send will be sent as-is.

```ts
client.foo.create({
  foo: 'my_param',
  bar: 12,
  // @ts-expect-error baz is not yet public
  baz: 'undocumented option',
});
```

For requests with the `GET` verb, any extra params will be in the query, all other requests will send the
extra param in the body.

If you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request
options.

#### Undocumented properties

To access undocumented response properties, you may access the response object with `// @ts-expect-error` on
the response object, or cast the response object to the requisite type. Like the request params, we do not
validate or strip extra properties from the response from the API.

### Customizing the fetch client

By default, this library uses `node-fetch` in Node, and expects a global `fetch` function in other environments.

If you would prefer to use a global, web-standards-compliant `fetch` function even in a Node environment,
(for example, if you are running Node with `--experimental-fetch` or using NextJS which polyfills with `undici`),
add the following import before your first import `from "Mux"`:

```ts
// Tell TypeScript and the package to use the global web fetch instead of node-fetch.
// Note, despite the name, this does not add any polyfills, but expects them to be provided if needed.
import '@mux/mux-node/shims/web';
import Mux from '@mux/mux-node';
```

To do the inverse, add `import "@mux/mux-node/shims/node"` (which does import polyfills).
This can also be useful if you are getting the wrong TypeScript types for `Response` ([more details](https://github.com/muxinc/mux-node-sdk/tree/master/src/_shims#readme)).

### Logging and middleware

You may also provide a custom `fetch` function when instantiating the client,
which can be used to inspect or alter the `Request` or `Response` before/after each request:

```ts
import { fetch } from 'undici'; // as one example
import Mux from '@mux/mux-node';

const client = new Mux({
  fetch: async (url: RequestInfo, init?: RequestInit): Promise<Response> => {
    console.log('About to make a request', url, init);
    const response = await fetch(url, init);
    console.log('Got response', response);
    return response;
  },
});
```

Note that if given a `DEBUG=true` environment variable, this library will log all requests and responses automatically.
This is intended for debugging purposes only and may change in the future without notice.

### Configuring an HTTP(S) Agent (e.g., for proxies)

By default, this library uses a stable agent for all http/https requests to reuse TCP connections, eliminating many TCP & TLS handshakes and shaving around 100ms off most requests.

If you would like to disable or customize this behavior, for example to use the API behind a proxy, you can pass an `httpAgent` which is used for all requests (be they http or https), for example:

<!-- prettier-ignore -->
```ts
import http from 'http';
import { HttpsProxyAgent } from 'https-proxy-agent';

// Configure the default for all requests:
const client = new Mux({
  httpAgent: new HttpsProxyAgent(process.env.PROXY_URL),
});

// Override per-request:
await client.video.assets.retrieve('t02rm...', {
  httpAgent: new http.Agent({ keepAlive: false }),
});
```

## Semantic versioning

This package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:

1. Changes that only affect static types, without breaking runtime behavior.
2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_
3. Changes that we do not expect to impact the vast majority of users in practice.

We take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.

We are keen for your feedback; please open an [issue](https://www.github.com/muxinc/mux-node-sdk/issues) with questions, bugs, or suggestions.

## Requirements

TypeScript >= 4.5 is supported.

The following runtimes are supported:

- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)
- Node.js 18 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.
- Deno v1.28.0 or higher.
- Bun 1.0 or later.
- Cloudflare Workers.
- Vercel Edge Runtime.
- Jest 28 or greater with the `"node"` environment (`"jsdom"` is not supported at this time).
- Nitro v2.6 or greater.

Note that React Native is not supported at this time.

If you are interested in other runtime environments, please open or upvote an issue on GitHub.

## Contributing

See [the contributing documentation](./CONTRIBUTING.md).
