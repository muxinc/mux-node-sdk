# Mux Node SDK

![build status](https://api.travis-ci.org/muxinc/mux-node-sdk.svg?branch=master)

Official Mux API wrapper for Node projects.

This library is intended to provide Mux API convenience methods for applications written in server-side Javascript. __Please note__ that this package uses Mux access tokens and secret keys and is intended to be used in server-side code only.

Not familiar with Mux? Check out https://mux.com/ for more information.

## Documentation

See the [Mux-Node docs](https://muxinc.github.io/mux-node-sdk)

## Installation
```
npm install @mux/mux-node --save
```
or
```
yarn add @mux/mux-node
```

## Releases
 The latest **stable** release is `1.1.1`

## Usage
To start, you will need a Mux access token and secret for your Mux environment. For more information on where to get
an access token, visit the Mux Getting Started guide https://docs.mux.com/docs

Require the `@mux/mux-node` npm module and create a Mux instance. Your Mux instance will have `Data` and `Video` properties
that will allow you to access the Mux Data and Video APIs.

```javascript
const Mux = require('@mux/mux-node');
const muxClient = new Mux(accessToken, secret);
const { Video, Data } = muxClient;
```
As an example, you can create a Mux asset and playback ID by using the below functions on your Video instance.
```javascript
// Create an asset
const asset = await Video.assets.create({ input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4' });
```

```javascript
// Create a playback ID for an asset
const playbackId = await Video.assets.createPlaybackId(assetId, { policy: 'public' });
```

You can access the Mux Data API in the same way by using your Data instance. For example, you can list all of the
values across every breakdown for the `aggregate_startup_time` metric by using the below function.

```javascript
const breakdown = await Data.metrics.breakdown('aggregate_startup_time', { group_by: 'browser' });
```

Every function will return a chainable [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

```javascript
Video.assets.create({
  input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'
}).then(asset => {
  /* Do things with the asset */
});
```

## `request` and `response` events

The SDK returns the `data` key for every object, because in the Mux API that's always the thing you actually want to see. Sometimes, however, it's useful to see more details about the request being made or the full response object. You can listen for `request` and `response` events to get these raw objects.

```javascript
muxClient.on('request', req => {
  // Request will contain everything being sent such as `headers, method, base url, etc
});

muxClient.on('response', res => {
  // Response will include everything returned from the API, such as status codes/text, headers, etc
});
```

See the [Mux-Node docs](https://muxinc.github.io/mux-node-sdk/identifiers.html) for a list of all available functions.

## Development

Run unit tests: `npm test` or `npm run test:unit`

Run integration tests: `npm run test:int`

__Note__: running the integration tests will require you to configure the `MUX_ACCESS_TOKEN` and `MUX_SECRET` environment variables with your Mux access token and secret.


To generate the ESDocs, run:
```
./node_modules/.bin/esdoc
open ./docs/index.html
```

## Contributing

Find a bug or want to add a useful feature? That'd be amazing! If you'd like to submit a [pull request](https://help.github.com/articles/about-pull-requests/) to the project with changes, please do something along these lines:

1. Fork the project wherever you'd like
2. Create a meaningful branch name that relates to your contribution. Consider including an issue number if available! `git co -b add-node-lts-support`
3. Make any changes you'd like in your forked branch.
4. Add any relevant tests for your changes
5. Open the pull request! :tada:
