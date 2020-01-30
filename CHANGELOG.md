# Changelog

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
