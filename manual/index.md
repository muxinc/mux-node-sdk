# Mux Node SDK

The official NodeJS Mux SDK wrapper.

## Installation
```
npm install @mux/mux-node
```
or
```
yarn add @mux/mux-node
```

## Usage

```
const Mux = require('mux-node');
const MuxVideo = new Mux.video(${MUX-API-KEY}, ${MUX-SECRET});
```
```
// Create an asset
 MuxVideo.assets.create({ input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4' });
```
