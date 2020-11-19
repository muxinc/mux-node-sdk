# Changelog

## 3.1.0

- Add methods for /enable and /disable live streams
- Update JWT helper for generating signatures for storyboards (thanks @davekiss)


## 3.0.4

- Improve Typescript def for JWTOptions
- Export Mux.default so it plays nice with firebase functions (#61)

## 3.0.3

- Typescript bugfix: Change JWTOptions type declaration to correctly mark some fields as optional

## 3.0.2

- Typescript bugfix: Change types/interfaces/Asset.ts to correctly mark some fields as optional

## 3.0.1

- Typescript bugfix: Allow `new_asset_settings` to be a partial `CreateAssetParams` for both live streams and direct uploads

## 3.0.0

- Drop Node 8 support (this is no longer LTS and it is not recommended to use Node 8 in production)
- Added types for Typescript support
- Remove previously deprecated remove method ([use del instead](https://github.com/muxinc/mux-node-sdk/blob/master/CHANGELOG.md#soft-deprecations))
- Remove erroneous requirement to pass in `viewer_id` param when getting a list of views
- Change API response format for all `Mux.Data` responses (return the full response)

### Breaking Changes

- Drop Node 8 support

- Resuts for the `Data` class will no longer return the nested `data` key. They will return the full response

  ```javascript
  const Mux = require('@mux/mux-node');
  const { Data } = new Mux(accessToken, secret);

  // version 2.x
  const dimensions = await Data.RealTime.dimensions()


  // version 3.x
  const { data: dimensions, timeframe, total_row_count } = await Data.RealTime.dimensions()
  ```

**Note** this change only affects `Data`. If you are using `Video` the response format is unchanged.

If you are already using Node 10+, and you are not using `Data` then there are no breaking changes.


## 2.8.0

- Add asset mp4-support endpoint (view [docs](https://docs.mux.com/reference#update-mp4-support) for usage)
- Add asset master-access endpoint (view [docs](https://docs.mux.com/reference#update-master-access) for usage)

## 2.7.0

- Add real time api endpoints (view [docs](https://api-docs.mux.com/#real-time-get-1) for usage)


## 2.6.0

- Add Asset text track endpoints (view [docs](https://docs.mux.com/reference#create-a-subtitle-text-track) for usage)

## 2.5.0

- Add Simulcast Targets and Delivery Usage apis (view [docs](https://muxinc.github.io/mux-node-sdk/) for usage)
- Update dependencies
- Add `yarn format` commands and add formatting check to CI

## 2.0

### Breaking Changes

- Nested resource modules are now PascalCase. For example:

  ```javascript
  // version 1.x
  Video.assets.create();

  // version 2.x
  Video.Assets.create();
  ```

- All requests now return the nested `data` key directly.

  ```javascript
  // version 1.x
  const { data: { data: assets } } = await Video.assets.list();

  // version 2.x
  const assets = await Video.Assets.list();
  ```

  If you'd like access to the full request object for any reason, you can do so via listening for the `response` event:

  ```javascript
  muxClient.on('response', res => {
    // Response will include everything returned from the API, such as status codes/text, headers, etc
  });
  ```

### Soft Deprecations

- `remove` is deprecated in favor of `del`. `remove` will no longer be available in the next major release (3.x).

  ```javascript
  // 👎
  const Video.Assets.remove('your-asset-id');

  // 👍
  const Video.Assets.del('your-asset-id');
  ```

### Improvements

- Added support for the new direct uploads endpoints.

- The library will default to using the `MUX_TOKEN_ID` and `MUX_TOKEN_SECRET` environment variables if a client is initialized without the token id/secret params.

  ```javascript
  /* Assuming process.env.MUX_TOKEN_ID and process.env.MUX_TOKEN_SECRET exist and are valid, this works */
  const { Video, Data } = new Mux();
  ```
