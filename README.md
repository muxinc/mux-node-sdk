# Mux Node API Library

[![NPM version](https://img.shields.io/npm/v/@mux/mux-node.svg)](https://npmjs.org/package/@mux/mux-node)

The Mux Node library provides convenient access to the Mux REST API from applications written in server-side JavaScript.
It includes TypeScript definitions for all request params and response fields.

## Documentation

The API documentation can be found [here](https://docs.mux.com).

## Installation

```sh
npm install --save @mux/mux-node
# or
yarn add @mux/mux-node
```

## Usage

```js
import Mux from '@mux/mux-node';

const mux = new Mux({
  tokenId: 'my token id', // defaults to process.env["MUX_TOKEN_ID"]
  tokenSecret: 'my secret',
});

async function main() {
  const asset = await mux.video.assets.create();

  console.log(asset.aspect_ratio);
}

main();
```

### Usage with TypeScript

Importing, instantiating, and interacting with the library are the same as above.
If you like, you may reference our types directly:

```ts
import Mux from '@mux/mux-node';

const mux = new Mux({
  tokenId: 'my token id', // defaults to process.env["MUX_TOKEN_ID"]
  tokenSecret: 'my secret',
});

async function main() {
  const asset: Mux.Video.Asset = await mux.video.assets.create();
}

main();
```

Documentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

```ts
async function main() {
  const liveStream = await mux.video.liveStreams.create().catch((err) => {
    if (err instanceof Mux.APIError) {
      console.log(err.status); // 400
      console.log(err.name); // BadRequestError

      console.log(err.headers); // {server: 'nginx', ...}
    } else {
      throw err;
    }
  });
}

main();
```

Error codes are as followed:

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
Connection errors (for example, due to a network connectivity problem), 409 Conflict, 429 Rate Limit,
and >=500 Internal errors will all be retried by default.

You can use the `maxRetries` option to configure or disable this:

<!-- prettier-ignore -->
```js
// Configure the default for all requests:
const mux = new Mux({
  maxRetries: 0, // default is 2
  tokenSecret: 'my secret',
});

// Or, configure per-request:
await mux.video.assets.retrieve('t02rm...', {
  maxRetries: 5,
});
```

### Timeouts

Requests time out after 60 seconds by default. You can configure this with a `timeout` option:

<!-- prettier-ignore -->
```ts
// Configure the default for all requests:
const mux = new Mux({
  timeout: 20 * 1000, // 20 seconds (default is 60s)
  tokenSecret: 'my secret',
});

// Override per-request:
await mux.video.assets.retrieve('t02rm...', {
  timeout: 5 * 1000,
});
```

On timeout, an `APIConnectionTimeoutError` is thrown.

Note that requests which time out will be [retried twice by default](#retries).

## Auto-pagination

List methods in the Mux API are paginated.
You can use `for await … of` syntax to iterate through items across all pages:

```ts
async function fetchAllVideoDeliveryUsages(params) {
  const allVideoDeliveryUsages = [];
  // Automatically fetches more pages as needed.
  for await (const deliveryUsage of mux.video.deliveryUsage.list()) {
    allVideoDeliveryUsages.push(deliveryUsage);
  }
  return allVideoDeliveryUsages;
}
```

Alternatively, you can make request a single page at a time:

```ts
let page = await mux.video.deliveryUsage.list();
for (const deliveryUsage of page.data) {
  console.log(deliveryUsage);
}

// Convenience methods are provided for manually paginating:
while (page.hasNextPage()) {
  page = page.getNextPage();
  // ...
}
```

## Configuring an HTTP(S) Agent (e.g., for proxies)

By default, this library uses a stable agent for all http/https requests to reuse TCP connections, eliminating many TCP & TLS handshakes and shaving around 100ms off most requests.

If you would like to disable or customize this behavior, for example to use the API behind a proxy, you can pass an `httpAgent` which is used for all requests (be they http or https), for example:

<!-- prettier-ignore -->
```ts
import http from 'http';
import HttpsProxyAgent from 'https-proxy-agent';

// Configure the default for all requests:
const mux = new Mux({
  httpAgent: new HttpsProxyAgent(process.env.PROXY_URL),
  tokenSecret: 'my secret',
});

// Override per-request:
await mux.video.assets.retrieve('t02rm...', {
  baseURL: 'http://localhost:8080/test-api',
  httpAgent: new http.Agent({ keepAlive: false }),
})
```

## Semantic Versioning

This package generally attempts to follow [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:

1. Changes that only affect static types, without breaking runtime behavior.
2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals)_.
3. Changes that we do not expect to impact the vast majority of users in practice.

We take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.

We are keen for your feedback; please open an [issue](https://www.github.com/muxinc/mux-node-sdk/issues) with questions, bugs, or suggestions.

## Requirements

The following runtimes are supported:

- Node.js 16 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.
- Deno v1.28.0 or higher (experimental).
  Use `import Mux from "npm:@mux/mux-node"`.

If you are interested in other runtime environments, please open or upvote an issue on GitHub.
