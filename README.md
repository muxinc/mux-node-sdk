# Mux Node API Library

[![NPM version](https://img.shields.io/npm/v/mux.svg)](https://npmjs.org/package/mux)

The Mux Node library provides convenient access to the Mux REST API from applications written in server-side JavaScript.
It includes TypeScript definitions for all request params and response fields.

## Documentation

The API documentation can be found [here](https://docs.mux.com).

## Installation

```sh
npm install --save mux
# or
yarn add mux
```

## Usage

```js
import Mux from 'mux';

const mux = new Mux({
  tokenId: 'my token id', // defaults to process.env["MUX_TOKEN_ID"]
  tokenSecret: 'my secret',
});

async function main() {
  const asset = await mux.video.assets.retrieve();

  console.log(asset.log_result);
}
main().catch(console.error)
```

### Usage with TypeScript

Importing, instantiating, and interacting with the library are the same as above.
If you like, you may reference our types directly:

```ts
import Mux from 'mux';

const mux = new Mux({
  tokenId: 'my token id', // defaults to process.env["MUX_TOKEN_ID"]
  tokenSecret: 'my secret',
});

async function main() {
  const asset: Mux.AssetResponse = await mux.video.assets.retrieve()

}
main().catch(console.error)
```

Documentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

```ts
async function main() {
  const asset = await mux.video.assets.retrieve()
    .catch((err) => {
      if (err instanceof Mux.APIError) {
        console.log(err.status); // 400
        console.log(err.name); // BadRequestError

        console.log(err.headers); // {server: 'nginx', ...}
      }
    })

}
main().catch(console.error)
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
mux.video.assets.retrieve({
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
mux.video.assets.retrieve({
  timeout: 5 * 1000,
});
```

On timeout, an `APIConnectionTimeoutError` is thrown.

Note that requests which time out will be [retried twice by default](#retries).

## Auto-pagination

List methods in the Mux API are paginated.
Use `for await … of` syntax to iterate through items across all pages.

```js
async function fetchAllVideoAssets(params) {
  const allVideoAssets = [];
  // Automatically fetches more pages as needed.
  for await (const asset of mux.video.assets.list()) {
    allVideoAssets.push(asset);
  }
  return allVideoAssets;
};
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
mux.video.assets.retrieve({
  baseURL: 'http://localhost:8080/test-api',
  httpAgent: new http.Agent({ keepAlive: false }),
})
```

## Status

This package is in beta. Its internals and interfaces are not stable
and subject to change without a major semver bump;
please reach out if you rely on any undocumented behavior.

We are keen for your feedback; please email us at [devex@mux.com](mailto:devex@mux.com)
or open an issue with questions, bugs, or suggestions.

## Requirements

Node.js version 12 or higher.

If you are interested in other runtime environments, please open or upvote an issue on Github.
