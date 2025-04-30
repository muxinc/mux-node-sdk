# Changelog

## 11.0.2 (2025-04-14)

Full Changelog: [v11.0.1...v11.0.2](https://github.com/muxinc/mux-node-sdk/compare/v11.0.1...v11.0.2)

### Bug Fixes

* add `audio-only` enum option in `resolution_tier` for Static Rendition responses ([#339](https://github.com/muxinc/mux-node-sdk/issues/339)) ([#581](https://github.com/muxinc/mux-node-sdk/issues/581)) ([08a6aed](https://github.com/muxinc/mux-node-sdk/commit/08a6aedb36689e9857603405a8f680ea00874215))
* **api:** improve type resolution when importing as a package ([#578](https://github.com/muxinc/mux-node-sdk/issues/578)) ([eaa6190](https://github.com/muxinc/mux-node-sdk/commit/eaa6190a2d8615cae7497076b5b484bf7a17bbd0))
* **client:** send `X-Stainless-Timeout` in seconds ([#576](https://github.com/muxinc/mux-node-sdk/issues/576)) ([365f84d](https://github.com/muxinc/mux-node-sdk/commit/365f84d3950de97ddf05d1e417d2284dfb7063b6))
* **mcp:** remove unused tools.ts ([#579](https://github.com/muxinc/mux-node-sdk/issues/579)) ([65b514b](https://github.com/muxinc/mux-node-sdk/commit/65b514bf697ba0de7d144174d516940c91e53869))


### Chores

* **client:** minor internal fixes ([b991d1e](https://github.com/muxinc/mux-node-sdk/commit/b991d1eaae02f6a368c5fcbc7aef615ab24c7726))
* **internal:** add aliases for Record and Array ([#577](https://github.com/muxinc/mux-node-sdk/issues/577)) ([ae647ce](https://github.com/muxinc/mux-node-sdk/commit/ae647ced0dc096d78d0487c5aab272424bb7a9ae))
* **internal:** reduce CI branch coverage ([e015341](https://github.com/muxinc/mux-node-sdk/commit/e01534171f4e55eba0602782a75aef917461c3ed))
* **internal:** upload builds and expand CI branch coverage ([#582](https://github.com/muxinc/mux-node-sdk/issues/582)) ([e61097a](https://github.com/muxinc/mux-node-sdk/commit/e61097a30d72011f248e13ef15c53ba6c8ff5803))
* **tests:** improve enum examples ([#580](https://github.com/muxinc/mux-node-sdk/issues/580)) ([9519087](https://github.com/muxinc/mux-node-sdk/commit/9519087018d6aacf81981a9c0785cd7747661f2c))


### Documentation

* change video to asset in metadata docs ([#340](https://github.com/muxinc/mux-node-sdk/issues/340)) ([cc9a980](https://github.com/muxinc/mux-node-sdk/commit/cc9a98088586e56872af9923154f0c4f7c1be5f4))
* Document add-asset-track requirements a little more ([#338](https://github.com/muxinc/mux-node-sdk/issues/338)) ([#574](https://github.com/muxinc/mux-node-sdk/issues/574)) ([21bbfa3](https://github.com/muxinc/mux-node-sdk/commit/21bbfa3f2a531229b8ef80bab877849eb0c6ff35))

## 11.0.1 (2025-04-01)

Full Changelog: [v11.0.0...v11.0.1](https://github.com/muxinc/mux-node-sdk/compare/v11.0.0...v11.0.1)

### Bug Fixes

* Fix example to also use inputs & policies ([fef7268](https://github.com/muxinc/mux-node-sdk/commit/fef72687669c6d77152d7c1f572de276528aabcd))
* Fix README to match asset and live stream settings ([#572](https://github.com/muxinc/mux-node-sdk/issues/572)) ([92e8e26](https://github.com/muxinc/mux-node-sdk/commit/92e8e264fec6810c09a475b8845488356e9c34d3))
* Fix validation on `input` / `inputs` when creating an asset ([#337](https://github.com/muxinc/mux-node-sdk/issues/337)) ([#570](https://github.com/muxinc/mux-node-sdk/issues/570)) ([4186f78](https://github.com/muxinc/mux-node-sdk/commit/4186f7828f4663df68e1d4ff23982ea569bfaddf))

## 11.0.0 (2025-03-27)

Full Changelog: [v10.1.0...v11.0.0](https://github.com/muxinc/mux-node-sdk/compare/v10.1.0...v11.0.0)

### ⚠ BREAKING CHANGES

* Fix type of `new_asset_settings` in Direct Uploads, and inline `UpdateReferrerDomainRestrictionRequest` ([#331](https://github.com/muxinc/mux-node-sdk/issues/331)) (#563)
* Changes the type of `new_asset_settings` to be a `CreateAssetRequest`, which exposes the correct set of fields to control asset creation
* Replaces `input` on `CreateAssetRequest` with `inputs`, which accepts the same type, and added deprecation notices
* Replaces `playback_policy` on `CreateAssetRequest` with `playback_policies`, which accepts the same type, and added deprecation notices

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#556](https://github.com/muxinc/mux-node-sdk/issues/556)) ([d7b9122](https://github.com/muxinc/mux-node-sdk/commit/d7b91226ab8174fbdc836f7f2348a6915f3e15f9))
* Replace input with inputs and playback_policy with playback_policies ([#335](https://github.com/muxinc/mux-node-sdk/issues/335)) ([#565](https://github.com/muxinc/mux-node-sdk/issues/565)) ([f477926](https://github.com/muxinc/mux-node-sdk/commit/f4779269b5b0939ac22d917bfccfdcaf56a73347))


### Bug Fixes

* avoid type error in certain environments ([#564](https://github.com/muxinc/mux-node-sdk/issues/564)) ([d57d25d](https://github.com/muxinc/mux-node-sdk/commit/d57d25d7e6693978e9fb06e0517aa1f9c9d57f54))
* **exports:** add missing type exports ([#566](https://github.com/muxinc/mux-node-sdk/issues/566)) ([94654c9](https://github.com/muxinc/mux-node-sdk/commit/94654c940956c4f7744441612b1ef45567ff6802))
* **exports:** ensure resource imports don't require /index ([#560](https://github.com/muxinc/mux-node-sdk/issues/560)) ([31a9554](https://github.com/muxinc/mux-node-sdk/commit/31a95542229094432ec901f763ee566f684bfda7))
* Fix type of new_asset_settings in Direct Uploads, and inline UpdateReferrerDomainRestrictionRequest ([#331](https://github.com/muxinc/mux-node-sdk/issues/331)) ([#563](https://github.com/muxinc/mux-node-sdk/issues/563)) ([f8342e9](https://github.com/muxinc/mux-node-sdk/commit/f8342e9cfd33ac1d720f0649cc9043ad3920e44f))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#567](https://github.com/muxinc/mux-node-sdk/issues/567)) ([6305af8](https://github.com/muxinc/mux-node-sdk/commit/6305af861e3a79eb6b74fc7958d1346fecf4e54c))


### Chores

* **exports:** cleaner resource index imports ([#561](https://github.com/muxinc/mux-node-sdk/issues/561)) ([7a71c93](https://github.com/muxinc/mux-node-sdk/commit/7a71c9309c6bcc22841ae404c068b84bbb0ef226))
* **exports:** stop using path fallbacks ([#562](https://github.com/muxinc/mux-node-sdk/issues/562)) ([ab7f871](https://github.com/muxinc/mux-node-sdk/commit/ab7f8717b6e3b521eeefef13ab69918cab8bd3a7))
* **internal:** codegen related update ([#558](https://github.com/muxinc/mux-node-sdk/issues/558)) ([a1a797a](https://github.com/muxinc/mux-node-sdk/commit/a1a797a82b0183e087824fc9b05cecd82a8bec1e))
* **internal:** remove extra empty newlines ([#559](https://github.com/muxinc/mux-node-sdk/issues/559)) ([407398f](https://github.com/muxinc/mux-node-sdk/commit/407398fd5eb873af96860ebd267de81a5f9b91c7))

## 10.1.0 (2025-03-06)

Full Changelog: [v10.0.0...v10.1.0](https://github.com/muxinc/mux-node-sdk/compare/v10.0.0...v10.1.0)

### Features

* add asset metadata schema ([#323](https://github.com/muxinc/mux-node-sdk/issues/323)) ([#552](https://github.com/muxinc/mux-node-sdk/issues/552)) ([769d578](https://github.com/muxinc/mux-node-sdk/commit/769d5783a1278fd7e22353a28ab1d8f0bedbe044))
* add static_rendition webhooks ([#327](https://github.com/muxinc/mux-node-sdk/issues/327)) ([#554](https://github.com/muxinc/mux-node-sdk/issues/554)) ([b483052](https://github.com/muxinc/mux-node-sdk/commit/b48305245dcb4b9eac7053239d2050305d542e1c))
* Add Video Creator ID dimension ([#325](https://github.com/muxinc/mux-node-sdk/issues/325)) ([#553](https://github.com/muxinc/mux-node-sdk/issues/553)) ([0246142](https://github.com/muxinc/mux-node-sdk/commit/024614201acffe3e227534e4ba353aa4cc7ac229))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#550](https://github.com/muxinc/mux-node-sdk/issues/550)) ([0be8bb7](https://github.com/muxinc/mux-node-sdk/commit/0be8bb743e1e5c551d950dfca5dce7aa2ab84830))

## 10.0.0 (2025-02-21)

Full Changelog: [v9.0.1...v10.0.0](https://github.com/muxinc/mux-node-sdk/compare/v9.0.1...v10.0.0)

### ⚠ BREAKING CHANGES

* deprecate `mp4_support` option ([#321](https://github.com/muxinc/mux-node-sdk/issues/321)) (#547)

### Features

* Add passthrough field on static renditions ([#320](https://github.com/muxinc/mux-node-sdk/issues/320)) ([#543](https://github.com/muxinc/mux-node-sdk/issues/543)) ([33ceef2](https://github.com/muxinc/mux-node-sdk/commit/33ceef2da37106ef2b2abef8a950544df279a42f))
* Add video.asset.non_standard_input_detected webhook ([#317](https://github.com/muxinc/mux-node-sdk/issues/317)) ([#536](https://github.com/muxinc/mux-node-sdk/issues/536)) ([d39b407](https://github.com/muxinc/mux-node-sdk/commit/d39b407da4e2cf57e600a0181175de8e0ecd7aeb))
* Additional Standard Dimensions ([#319](https://github.com/muxinc/mux-node-sdk/issues/319)) ([#544](https://github.com/muxinc/mux-node-sdk/issues/544)) ([22dbea3](https://github.com/muxinc/mux-node-sdk/commit/22dbea3eea8efcd8c9bd8e650f5af4f94ce44e3e))
* **api:** api update ([#533](https://github.com/muxinc/mux-node-sdk/issues/533)) ([febeae5](https://github.com/muxinc/mux-node-sdk/commit/febeae5171526e60460024b6c46a142533eeb235))
* **client:** send `X-Stainless-Timeout` header ([#542](https://github.com/muxinc/mux-node-sdk/issues/542)) ([bddd452](https://github.com/muxinc/mux-node-sdk/commit/bddd45248b23fb9b363ccdb75d442e9b6ff4aa1c))
* generate more types that are used as request bodies ([#532](https://github.com/muxinc/mux-node-sdk/issues/532)) ([17dc3e2](https://github.com/muxinc/mux-node-sdk/commit/17dc3e216554bf18b3e015577f192c024c63bc38))
* **internal:** make git install file structure match npm ([#527](https://github.com/muxinc/mux-node-sdk/issues/527)) ([10ae8eb](https://github.com/muxinc/mux-node-sdk/commit/10ae8ebf80dd4f2962739694229c700c55b682b3))


### Bug Fixes

* **client:** fix export map for index exports ([#545](https://github.com/muxinc/mux-node-sdk/issues/545)) ([228c810](https://github.com/muxinc/mux-node-sdk/commit/228c8101ed21732bca78383561cec082a0076e92))
* **client:** normalize method ([#535](https://github.com/muxinc/mux-node-sdk/issues/535)) ([7993276](https://github.com/muxinc/mux-node-sdk/commit/799327684ce912491a776a272e0f13ad0ac23944))


### Chores

* deprecate `mp4_support` option ([#321](https://github.com/muxinc/mux-node-sdk/issues/321)) ([#547](https://github.com/muxinc/mux-node-sdk/issues/547)) ([1562daa](https://github.com/muxinc/mux-node-sdk/commit/1562daa64a421c7a31bf1330bc41c634b26b7319))
* **internal:** bump cross-spawn to v7.0.6 ([#529](https://github.com/muxinc/mux-node-sdk/issues/529)) ([625f90b](https://github.com/muxinc/mux-node-sdk/commit/625f90b108126c7940dc668d5ee4e0bd6095b39a))
* **internal:** codegen related update ([#538](https://github.com/muxinc/mux-node-sdk/issues/538)) ([7291076](https://github.com/muxinc/mux-node-sdk/commit/729107671e066d0966048f56ab97a42187632eb4))
* **internal:** codegen related update ([#539](https://github.com/muxinc/mux-node-sdk/issues/539)) ([1ca421c](https://github.com/muxinc/mux-node-sdk/commit/1ca421c2aa6f3ec359d0d60f37535510a88c478f))
* **internal:** codegen related update ([#541](https://github.com/muxinc/mux-node-sdk/issues/541)) ([81fe307](https://github.com/muxinc/mux-node-sdk/commit/81fe3077369f56adac67b69471a0512b65ed94d7))
* **internal:** fix devcontainers setup ([#548](https://github.com/muxinc/mux-node-sdk/issues/548)) ([b916855](https://github.com/muxinc/mux-node-sdk/commit/b9168551c77fd14be61545fd8e680828e0892957))
* **internal:** fix some typos ([#534](https://github.com/muxinc/mux-node-sdk/issues/534)) ([5ea0e8e](https://github.com/muxinc/mux-node-sdk/commit/5ea0e8e9c26fe491f63c44be522748c1e267bf5e))
* **internal:** remove unnecessary getRequestClient function ([#528](https://github.com/muxinc/mux-node-sdk/issues/528)) ([a8a00ef](https://github.com/muxinc/mux-node-sdk/commit/a8a00eff2bb0586d5780c93199d120b5673f0d49))
* **internal:** update isAbsoluteURL ([#531](https://github.com/muxinc/mux-node-sdk/issues/531)) ([e1b231d](https://github.com/muxinc/mux-node-sdk/commit/e1b231dabdd236cb773de2e9e13c26ca8866356b))
* rebuild project due to codegen change ([#523](https://github.com/muxinc/mux-node-sdk/issues/523)) ([9cc566c](https://github.com/muxinc/mux-node-sdk/commit/9cc566cdeba6d3e1f6ed6bcd4643ecbafedda110))
* remove redundant word in comment ([#526](https://github.com/muxinc/mux-node-sdk/issues/526)) ([f5dd390](https://github.com/muxinc/mux-node-sdk/commit/f5dd3901391cb3d210a42cbfe4874e203013107a))
* **types:** nicer error class types + jsdocs ([#530](https://github.com/muxinc/mux-node-sdk/issues/530)) ([2b6cf7e](https://github.com/muxinc/mux-node-sdk/commit/2b6cf7e1da6895a7a1f5ab348f8b28f82dcc856d))


### Documentation

* minor formatting changes ([#537](https://github.com/muxinc/mux-node-sdk/issues/537)) ([69e736a](https://github.com/muxinc/mux-node-sdk/commit/69e736a7f8b7f24a23624f3ba9e0cefb35bd1415))
* remove suggestion to use `npm` call out ([#525](https://github.com/muxinc/mux-node-sdk/issues/525)) ([a1250bc](https://github.com/muxinc/mux-node-sdk/commit/a1250bcb104d1e0a93cec2bcc19d96d56f323fe9))

## 9.0.1 (2024-11-15)

Full Changelog: [v9.0.0...v9.0.1](https://github.com/muxinc/mux-node-sdk/compare/v9.0.0...v9.0.1)

### Bug Fixes (breaking)

* Remove `ad_watch_time` and `view_content_watch_time` from Video View model and Data APIs. Note: this _may_ be a breaking change, but was missed in the 9.0.0 release.

## 9.0.0 (2024-11-14)

Full Changelog: [v8.8.0...v9.0.0](https://github.com/muxinc/mux-node-sdk/compare/v8.8.0...v9.0.0)

### Breaking Changes
* Remove support for Spaces

### Features
* Add support for View Dropped Percentage and `view_dropped` in Mux Data.
* Add support for signing multiple tokens (with various `aud` types) for signed playback policies in a single call.
* Add support for `premium` assets in Mux Video. [Read more here](https://www.mux.com/blog/one-size-does-not-fit-all-introducing-premium-video-quality-for-mux-video).
* Add full support for DRM for Mux Video. [Read more here](https://www.mux.com/blog/introducing-drm-the-latest-tool-in-protecting-your-content-on-mux).
* Add support for updating `master_access` settings on live streams.
* Add support for user agent-based Playback Restrictions.
* **client:** send retry count header ([#493](https://github.com/muxinc/mux-node-sdk/issues/493)) ([f202eef](https://github.com/muxinc/mux-node-sdk/commit/f202eef237847862097850bb4387452df762bce6))

### Deprecations
* Deprecate `encoding_tier` in favor of `video_quality` (to support `premium` assets)

### Bug Fixes
* add missing types for encoding tier, generated subtitles settings and multi-track audio ([#319](https://github.com/muxinc/mux-node-sdk/issues/319)) ([16d20ad](https://github.com/muxinc/mux-node-sdk/commit/16d20ad310a6dbff4b4cf5fbce17a4cea72e2b4c))
* add resolution_tier and max_resolution_tier ([#314](https://github.com/muxinc/mux-node-sdk/issues/314)) ([ff1586b](https://github.com/muxinc/mux-node-sdk/commit/ff1586b4503ab943c0c0682c2f4d15705ca7248b))
* allow git imports for pnpm ([#412](https://github.com/muxinc/mux-node-sdk/issues/412)) ([d7f6e32](https://github.com/muxinc/mux-node-sdk/commit/d7f6e32c8e7affa18fbd2e0aa7d78e744c868f11))
* **client:** correct File construction from node-fetch Responses ([#478](https://github.com/muxinc/mux-node-sdk/issues/478)) ([37cc57c](https://github.com/muxinc/mux-node-sdk/commit/37cc57c0c0fea5228529be15cfcbb3691f23f65f))
* **client:** correctly send deno version header ([#356](https://github.com/muxinc/mux-node-sdk/issues/356)) ([3b59a43](https://github.com/muxinc/mux-node-sdk/commit/3b59a434662af71d04e9bc123d89e23919663fb7))
* **compat:** remove ReadableStream polyfill redundant since node v16 ([#460](https://github.com/muxinc/mux-node-sdk/issues/460)) ([66b4d45](https://github.com/muxinc/mux-node-sdk/commit/66b4d45a42f4324cdfda08b9675a47cdc648ecb5))
* correct response type for generate subtitles ([#385](https://github.com/muxinc/mux-node-sdk/issues/385)) ([5b05c0c](https://github.com/muxinc/mux-node-sdk/commit/5b05c0cb86913bd98b8f504cfdb1b900ea85efae))
* **errors:** pass message through to APIConnectionError ([#486](https://github.com/muxinc/mux-node-sdk/issues/486)) ([56485cc](https://github.com/muxinc/mux-node-sdk/commit/56485ccaf60112ec0802afcea1f9700443c47da5))
* handle process.env being undefined in debug func ([#354](https://github.com/muxinc/mux-node-sdk/issues/354)) ([e90a964](https://github.com/muxinc/mux-node-sdk/commit/e90a9646f4c1f729861c4e46d1c77ec2eb8846e4))
* **internal:** make toFile use input file's options ([#350](https://github.com/muxinc/mux-node-sdk/issues/350)) ([0f8c319](https://github.com/muxinc/mux-node-sdk/commit/0f8c319611c939abf31559d5338dacc2026e18ae))
* package.json & yarn.lock to reduce vulnerabilities ([bd8af62](https://github.com/muxinc/mux-node-sdk/commit/bd8af62afa6bc7fe2fe43969fcfa2b86cf4a6b7e))
* **package:** revert recent client file change ([#394](https://github.com/muxinc/mux-node-sdk/issues/394)) ([f520093](https://github.com/muxinc/mux-node-sdk/commit/f52009351aa21640d0aadb53d2e182a0d1da001f))
* remove lingering file ([6014f6f](https://github.com/muxinc/mux-node-sdk/commit/6014f6fecf578a466913fcc1a8a74be901055f88))
* **shims:** export JWT shims for bun ([#369](https://github.com/muxinc/mux-node-sdk/issues/369)) ([84833ab](https://github.com/muxinc/mux-node-sdk/commit/84833ab802b3b1c7aeee4e58af63ddcc4b35f9f1))
* **types:** remove leftover polyfill usage ([#492](https://github.com/muxinc/mux-node-sdk/issues/492)) ([6d7f768](https://github.com/muxinc/mux-node-sdk/commit/6d7f76858dccefc61e31096209b7979d45614406))
* update casing for "drm" ([#425](https://github.com/muxinc/mux-node-sdk/issues/425)) ([34cf334](https://github.com/muxinc/mux-node-sdk/commit/34cf33429db0f9e76dd16378725a60019f4dbdda))
* **uploads:** avoid making redundant memory copies ([#483](https://github.com/muxinc/mux-node-sdk/issues/483)) ([f24c5bd](https://github.com/muxinc/mux-node-sdk/commit/f24c5bd629c947335ca57ca7fd7b3559cd5c5d6c))
* use relative paths ([#458](https://github.com/muxinc/mux-node-sdk/issues/458)) ([96adde9](https://github.com/muxinc/mux-node-sdk/commit/96adde9d26599001ae82349eaad43f810250bf2c))

### Documentation

* add jwt helpers, webhooks, and version upgrade content back to readme ([#342](https://github.com/muxinc/mux-node-sdk/issues/342)) ([f339b9e](https://github.com/muxinc/mux-node-sdk/commit/f339b9e542e4d74055a14b84a7d2c68741f34101))
* add release steps ([2432cf8](https://github.com/muxinc/mux-node-sdk/commit/2432cf824e05031c332ebbfd4ec94c5365e12e0f))
* add upgrade to v8 guide back in ([5837819](https://github.com/muxinc/mux-node-sdk/commit/58378196949b91f8a966eb04c498d5dc24bc851b))
* fix typo in CONTRIBUTING.md ([#347](https://github.com/muxinc/mux-node-sdk/issues/347)) ([59af6cd](https://github.com/muxinc/mux-node-sdk/commit/59af6cdbdea2084effec55dd6ae30fbf80cff0ec))
* **readme:** add bundle size badge ([#409](https://github.com/muxinc/mux-node-sdk/issues/409)) ([ce5c0d7](https://github.com/muxinc/mux-node-sdk/commit/ce5c0d73d52790d6986ec9276c8f6d39fb6c3523))
* **readme:** consistent use of sentence case in headings ([#351](https://github.com/muxinc/mux-node-sdk/issues/351)) ([fc5fdbf](https://github.com/muxinc/mux-node-sdk/commit/fc5fdbf56f66fa5dd01018d0f62be9f50978588f))
* **readme:** document how to make undocumented requests ([#353](https://github.com/muxinc/mux-node-sdk/issues/353)) ([abdba1e](https://github.com/muxinc/mux-node-sdk/commit/abdba1e3aaee117d8dedfa0faf1281cdcce66549))
* update CONTRIBUTING.md ([#488](https://github.com/muxinc/mux-node-sdk/issues/488)) ([f1bc68d](https://github.com/muxinc/mux-node-sdk/commit/f1bc68d07aaaf7512ab363cc9f2c72755bc5b4c1))

## 8.8.0 (2024-06-14)

Full Changelog: [v8.7.1...v8.8.0](https://github.com/muxinc/mux-node-sdk/compare/v8.7.1...v8.8.0)

### Features

* prepare for upcoming feature release

## 8.7.1 (2024-05-31)

Full Changelog: [v8.7.0...v8.7.1](https://github.com/muxinc/mux-node-sdk/compare/v8.7.0...v8.7.1)

### Bug Fixes

* allow git imports for pnpm ([#412](https://github.com/muxinc/mux-node-sdk/issues/412)) ([fa4d936](https://github.com/muxinc/mux-node-sdk/commit/fa4d936f6179427980f460689441251e165771e0))


### Chores

* rebuild project due to codegen change ([#411](https://github.com/muxinc/mux-node-sdk/issues/411)) ([5cee0e9](https://github.com/muxinc/mux-node-sdk/commit/5cee0e93d70bc1ff792ccde03d9b63d3ce5b8f23))


### Documentation

* **readme:** add bundle size badge ([#409](https://github.com/muxinc/mux-node-sdk/issues/409)) ([b538159](https://github.com/muxinc/mux-node-sdk/commit/b538159f9dff76726a16b39337eed879287600f8))

## 8.7.0 (2024-05-24)

Full Changelog: [v8.6.0...v8.7.0](https://github.com/muxinc/mux-node-sdk/compare/v8.6.0...v8.7.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#406](https://github.com/muxinc/mux-node-sdk/issues/406)) ([c279cd1](https://github.com/muxinc/mux-node-sdk/commit/c279cd1c0165d97d1332d9768d3be684bc3904e0))

## 8.6.0 (2024-05-24)

Full Changelog: [v8.5.4...v8.6.0](https://github.com/muxinc/mux-node-sdk/compare/v8.5.4...v8.6.0)

### Features

* **api:** manual updates ([#403](https://github.com/muxinc/mux-node-sdk/issues/403)) ([c8dce30](https://github.com/muxinc/mux-node-sdk/commit/c8dce30854b169947b28b63e30f722f926b45f1c))

## 8.5.4 (2024-05-14)

Full Changelog: [v8.5.3...v8.5.4](https://github.com/muxinc/mux-node-sdk/compare/v8.5.3...v8.5.4)

### Chores

* rebuild project due to codegen change ([#399](https://github.com/muxinc/mux-node-sdk/issues/399)) ([2652e3b](https://github.com/muxinc/mux-node-sdk/commit/2652e3b815842e9f21b638deeb709dab5bee2dcd))

## 8.5.3 (2024-05-10)

Full Changelog: [v8.5.2...v8.5.3](https://github.com/muxinc/mux-node-sdk/compare/v8.5.2...v8.5.3)

### Bug Fixes

* remove lingering file ([6014f6f](https://github.com/muxinc/mux-node-sdk/commit/6014f6fecf578a466913fcc1a8a74be901055f88))


### Chores

* **docs:** add SECURITY.md ([#397](https://github.com/muxinc/mux-node-sdk/issues/397)) ([665935e](https://github.com/muxinc/mux-node-sdk/commit/665935e2a670d199caac06500b46e7f5c46535fe))

## 8.5.2 (2024-05-03)

Full Changelog: [v8.5.1...v8.5.2](https://github.com/muxinc/mux-node-sdk/compare/v8.5.1...v8.5.2)

### Bug Fixes

* **package:** revert recent client file change ([#394](https://github.com/muxinc/mux-node-sdk/issues/394)) ([8246aaa](https://github.com/muxinc/mux-node-sdk/commit/8246aaa0aa2bf486fd534dde16837fcf7b26fe00))


### Chores

* **internal:** add link to openapi spec ([#389](https://github.com/muxinc/mux-node-sdk/issues/389)) ([a2b5816](https://github.com/muxinc/mux-node-sdk/commit/a2b5816264089498856d02c319b9281189400df3))
* **internal:** add scripts/test and scripts/mock ([#386](https://github.com/muxinc/mux-node-sdk/issues/386)) ([efdfbf0](https://github.com/muxinc/mux-node-sdk/commit/efdfbf0f9c023fd31c4a912324dfc2e23ae54a55))
* **internal:** add scripts/test, scripts/mock and add ci job ([#390](https://github.com/muxinc/mux-node-sdk/issues/390)) ([0ca562f](https://github.com/muxinc/mux-node-sdk/commit/0ca562f4518f5970d41a4b2b86aa1ddd80ae9e95))
* **internal:** forward arguments in scripts/test ([#391](https://github.com/muxinc/mux-node-sdk/issues/391)) ([7b31ea3](https://github.com/muxinc/mux-node-sdk/commit/7b31ea310f87fad6fb94c876e510f49659cfa9ff))
* **internal:** move client class to separate file ([#392](https://github.com/muxinc/mux-node-sdk/issues/392)) ([db724fb](https://github.com/muxinc/mux-node-sdk/commit/db724fb32fcf66bb326bae008c6fd0acdac447d3))
* **internal:** refactor scripts ([#388](https://github.com/muxinc/mux-node-sdk/issues/388)) ([806d195](https://github.com/muxinc/mux-node-sdk/commit/806d19531b59fb3acb37f9c35a3231b3e5e6645b))

## 8.5.1 (2024-04-25)

Full Changelog: [v8.5.0...v8.5.1](https://github.com/muxinc/mux-node-sdk/compare/v8.5.0...v8.5.1)

### Bug Fixes

* correct response type for generate subtitles ([#385](https://github.com/muxinc/mux-node-sdk/issues/385)) ([5cc8533](https://github.com/muxinc/mux-node-sdk/commit/5cc85334b44c6e521be932fd47a8a52e7601db19))


### Chores

* **internal:** use @swc/jest for running tests ([#382](https://github.com/muxinc/mux-node-sdk/issues/382)) ([340f13e](https://github.com/muxinc/mux-node-sdk/commit/340f13e8589d7fe0d08e6d507a870e9e98da7793))
* **internal:** use actions/checkout@v4 for codeflow ([#384](https://github.com/muxinc/mux-node-sdk/issues/384)) ([f20cd83](https://github.com/muxinc/mux-node-sdk/commit/f20cd833efd3de5f21bdcb069b91ca2ebd539c9e))


### Refactors

* move web inputs under video ([#383](https://github.com/muxinc/mux-node-sdk/issues/383)) ([fbec065](https://github.com/muxinc/mux-node-sdk/commit/fbec0653b59cb6e0506df18e143f4a39ea5d196f))


### Build System

* configure UTF-8 locale in devcontainer ([#380](https://github.com/muxinc/mux-node-sdk/issues/380)) ([36f5c34](https://github.com/muxinc/mux-node-sdk/commit/36f5c34a8874611b0850a89dabb22c7bcdcccfab))

## 8.5.0 (2024-04-12)

Full Changelog: [v8.4.1...v8.5.0](https://github.com/muxinc/mux-node-sdk/compare/v8.4.1...v8.5.0)

### Features

* **data:** extended ad metrics ([#376](https://github.com/muxinc/mux-node-sdk/issues/376)) ([cb8adfc](https://github.com/muxinc/mux-node-sdk/commit/cb8adfc49ebea778a39e6924d57b95e44cc4dcca))


### Chores

* **internal:** formatting ([#378](https://github.com/muxinc/mux-node-sdk/issues/378)) ([7ab66fa](https://github.com/muxinc/mux-node-sdk/commit/7ab66fa4c1196500bdd231fe7fe078821c076b42))

## 8.4.1 (2024-04-11)

Full Changelog: [v8.4.0...v8.4.1](https://github.com/muxinc/mux-node-sdk/compare/v8.4.0...v8.4.1)

### Chores

* **internal:** update gitignore ([#374](https://github.com/muxinc/mux-node-sdk/issues/374)) ([023a67a](https://github.com/muxinc/mux-node-sdk/commit/023a67a50eac382495de8258cb62914a9f675a90))

## 8.4.0 (2024-04-11)

Full Changelog: [v8.3.1...v8.4.0](https://github.com/muxinc/mux-node-sdk/compare/v8.3.1...v8.4.0)

### Features

* **api:** add user agent playback restrictions ([#373](https://github.com/muxinc/mux-node-sdk/issues/373)) ([5dac48b](https://github.com/muxinc/mux-node-sdk/commit/5dac48b99add9699d09f440d3410fc10ee176377))
* **api:** updates ([#371](https://github.com/muxinc/mux-node-sdk/issues/371)) ([50a859a](https://github.com/muxinc/mux-node-sdk/commit/50a859a9075231e666cfa1cdb1020b3a78ff1e54))

## 8.3.1 (2024-04-09)

Full Changelog: [v8.3.0...v8.3.1](https://github.com/muxinc/mux-node-sdk/compare/v8.3.0...v8.3.1)

### Bug Fixes

* **shims:** export JWT shims for bun ([#369](https://github.com/muxinc/mux-node-sdk/issues/369)) ([56b2e80](https://github.com/muxinc/mux-node-sdk/commit/56b2e8012b5ec684a96e70d84730371b4ac209d9))

## 8.3.0 (2024-04-05)

Full Changelog: [v8.2.3...v8.3.0](https://github.com/muxinc/mux-node-sdk/compare/v8.2.3...v8.3.0)

### Features

* **api:** extend mp4 support ([#366](https://github.com/muxinc/mux-node-sdk/issues/366)) ([5483c7f](https://github.com/muxinc/mux-node-sdk/commit/5483c7fdf93e466ac40ccab3d0c5ea6663aeef89))


### Chores

* **deps:** bump yarn to v1.22.22 ([#365](https://github.com/muxinc/mux-node-sdk/issues/365)) ([8895afd](https://github.com/muxinc/mux-node-sdk/commit/8895afd2dd5f13bb77e19171c73a89bcb01b4700))
* **deps:** remove unused dependency digest-fetch ([#364](https://github.com/muxinc/mux-node-sdk/issues/364)) ([f4a22f8](https://github.com/muxinc/mux-node-sdk/commit/f4a22f893616cc3889cd5be29183311ad31cf1e7))
* **internal:** bump dependencies ([#362](https://github.com/muxinc/mux-node-sdk/issues/362)) ([d829885](https://github.com/muxinc/mux-node-sdk/commit/d8298859cea75b7f2f576f1460589ac5c28a5998))
* revert temporary commit ([6f71489](https://github.com/muxinc/mux-node-sdk/commit/6f71489569f6b6ad756936d461b8c30330116ab3))
* temporary commit ([#358](https://github.com/muxinc/mux-node-sdk/issues/358)) ([14ae9bf](https://github.com/muxinc/mux-node-sdk/commit/14ae9bfd3eb1d5753d60e227b20007310338b146))


### Documentation

* add upgrade to v8 guide back in ([5837819](https://github.com/muxinc/mux-node-sdk/commit/58378196949b91f8a966eb04c498d5dc24bc851b))

## 8.2.3 (2024-03-25)

Full Changelog: [v8.2.2...v8.2.3](https://github.com/muxinc/mux-node-sdk/compare/v8.2.2...v8.2.3)

### Bug Fixes

* **client:** correctly send deno version header ([#356](https://github.com/muxinc/mux-node-sdk/issues/356)) ([adf845e](https://github.com/muxinc/mux-node-sdk/commit/adf845ec2189de870d7643d4624e1d3c7f0b26b7))

## 8.2.2 (2024-03-21)

Full Changelog: [v8.2.1...v8.2.2](https://github.com/muxinc/mux-node-sdk/compare/v8.2.1...v8.2.2)

### Bug Fixes

* handle process.env being undefined in debug func ([#354](https://github.com/muxinc/mux-node-sdk/issues/354)) ([e8ce1fb](https://github.com/muxinc/mux-node-sdk/commit/e8ce1fb7d8950681dcb47abc2ebc835db1de6697))


### Documentation

* **readme:** consistent use of sentence case in headings ([#351](https://github.com/muxinc/mux-node-sdk/issues/351)) ([7b4a1ec](https://github.com/muxinc/mux-node-sdk/commit/7b4a1ec8f778ae2298a229782f03ce69c7eeb1b8))
* **readme:** document how to make undocumented requests ([#353](https://github.com/muxinc/mux-node-sdk/issues/353)) ([8c49b9c](https://github.com/muxinc/mux-node-sdk/commit/8c49b9cafbda4ddd987a72835655dd007be5a122))

## 8.2.1 (2024-03-19)

Full Changelog: [v8.2.0...v8.2.1](https://github.com/muxinc/mux-node-sdk/compare/v8.2.0...v8.2.1)

### Bug Fixes

* **internal:** make toFile use input file's options ([#350](https://github.com/muxinc/mux-node-sdk/issues/350)) ([ff05172](https://github.com/muxinc/mux-node-sdk/commit/ff051721d608082e14e3688b684b5e5dbe6f5ff7))


### Chores

* **internal:** update generated pragma comment ([#349](https://github.com/muxinc/mux-node-sdk/issues/349)) ([a7472a7](https://github.com/muxinc/mux-node-sdk/commit/a7472a744ca45e29ef24879c4e9fc63838b02712))


### Documentation

* fix typo in CONTRIBUTING.md ([#347](https://github.com/muxinc/mux-node-sdk/issues/347)) ([21dcae5](https://github.com/muxinc/mux-node-sdk/commit/21dcae5e253135b5f405a6654c73132c9b3acd34))

## 8.2.0 (2024-03-13)

Full Changelog: [v8.1.1...v8.2.0](https://github.com/muxinc/mux-node-sdk/compare/v8.1.1...v8.2.0)

### Features

* **api:** update documentation ([#344](https://github.com/muxinc/mux-node-sdk/issues/344)) ([cccf020](https://github.com/muxinc/mux-node-sdk/commit/cccf0205f28b7d9f4155c60a0b1409840aa24728))

## 8.1.1 (2024-03-12)

Full Changelog: [v8.1.0...v8.1.1](https://github.com/muxinc/mux-node-sdk/compare/v8.1.0...v8.1.1)

### Documentation

* add jwt helpers, webhooks, and version upgrade content back to readme ([#342](https://github.com/muxinc/mux-node-sdk/issues/342)) ([f339b9e](https://github.com/muxinc/mux-node-sdk/commit/f339b9e542e4d74055a14b84a7d2c68741f34101))

## 8.1.0 (2024-03-12)

Full Changelog: [v8.0.0...v8.1.0](https://github.com/muxinc/mux-node-sdk/compare/v8.0.0...v8.1.0)

### Features

* **api:** updates ([#338](https://github.com/muxinc/mux-node-sdk/issues/338)) ([29165ce](https://github.com/muxinc/mux-node-sdk/commit/29165ce927ca0d128afd904f37708c5c51435ce4))


### Documentation

* add release steps ([2432cf8](https://github.com/muxinc/mux-node-sdk/commit/2432cf824e05031c332ebbfd4ec94c5365e12e0f))
