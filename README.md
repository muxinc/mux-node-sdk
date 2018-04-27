# Mux Node SDK

The official NodeJS Mux SDK wrapper.

This library is intended to provide Mux API convenience methods for applications written in server-side Javascript.
__Please note__ that this package uses Mux access tokens and secret keys and is intended to be used in server-side code only.

## Documentation

See the [Mux-Node docs]

## Installation
```
npm install @mux/mux-node --save
```
or
```
yarn add @mux/mux-node
```

## Usage
To start, you will need a Mux access token and secret for your Mux environment. For more information on where to get
an access token, visit the Mux Getting Started Guide https://docs.mux.com/docs

Require the `@mux/mux-node` npm module and create a new video instance.
```
const Mux = require('@mux/mux-node');
const muxClient = new Mux(accessToken, secret);
const { Video } = muxClient;
```
As an example, you can create a Mux asset and playback ID by using the below functions on your video instance.
```
// Create an asset
Video.assets.create({ input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4' });
```

```
// Create a playback ID for an asset
Video.playbackIds.create(assetId, { policy: 'public' });
```

Every function will return a chainable promise

See the [Mux-Node docs] for a list of all available functions.

## Development

Run unit tests: `npm test` or `npm run test:unit`

Run integration tests: `npm run test:int`

__Note__: running the integration tests will require you to configure the `MUX_ACCESS_TOKEN` and `MUX_SECRET` environment variables with your Mux access token and secret.


To generate the ESDocs, run:
```
./node_modules/.bin/esdoc
open ./docs/index.html
```


