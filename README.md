# Mux Node SDK

The official NodeJS Mux SDK wrapper.

This library is intended to provide convenience methods for the Mux API for applications written in server-side Javascript.

__Please note__ that this package uses Mux access tokens and secret keys and intended to be used in server-side code only.

See the official Mux API docs here: https://docs.mux.com

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
an access token, visit the Mux Getting Started guide https://docs.mux.com/docs

Require the 'mux-node' npm module and create a new video instance.
```
const Mux = require('mux-node');
const MuxVideo = new Mux.video(${MUX-API-KEY}, ${MUX-SECRET});
```
As an example, you can create a Mux asset and playback ID by using the below functions on your Video instance.
```
// Create an asset
MuxVideo.assets.create({ input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4' });
```

```
// Create a playback ID for an asset
MuxVideo.playbackIds.create(assetId, { policy: 'public' });
```

Every function will return a chainable promise

See the [Mux-Node docs] for a list of all available functions.

## Development

Run unit tests: `npm test` or `npm run test:unit`

Run integration tests: `npm run test:int`
__Note_: this will require you to configure the `MUX_ACCESS_TOKEN` and `MUX_SECRET` environment variables with your Mux access token and secret.



