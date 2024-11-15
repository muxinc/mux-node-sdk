# Changelog

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
