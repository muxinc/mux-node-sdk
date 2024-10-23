# Changelog

## 8.9.0 (2024-10-23)

Full Changelog: [v8.8.0...v8.9.0](https://github.com/muxinc/mux-node-sdk/compare/v8.8.0...v8.9.0)

### Features

* **api:** api update ([#495](https://github.com/muxinc/mux-node-sdk/issues/495)) ([1fe43bb](https://github.com/muxinc/mux-node-sdk/commit/1fe43bbe97ba8712184dab0655ac74575af7486d))
* **api:** api update ([#497](https://github.com/muxinc/mux-node-sdk/issues/497)) ([d0b2805](https://github.com/muxinc/mux-node-sdk/commit/d0b2805efc94b5d8d80052707a390517b9e5c684))
* **api:** api update ([#500](https://github.com/muxinc/mux-node-sdk/issues/500)) ([b873909](https://github.com/muxinc/mux-node-sdk/commit/b873909c951e64eff584cf13dc979bf33a7e28b3))
* **api:** api update ([#501](https://github.com/muxinc/mux-node-sdk/issues/501)) ([4521afb](https://github.com/muxinc/mux-node-sdk/commit/4521afbf2a29dbbb6ea855d383f767cd1b50b1b6))
* **api:** api update ([#502](https://github.com/muxinc/mux-node-sdk/issues/502)) ([2bb6de6](https://github.com/muxinc/mux-node-sdk/commit/2bb6de64955d47ae92521aa8a1601d5d685b777e))
* **api:** generate webhook types ([#441](https://github.com/muxinc/mux-node-sdk/issues/441)) ([dcb9009](https://github.com/muxinc/mux-node-sdk/commit/dcb9009810885bdfa88696588a8c589e966ee44f))
* **api:** make webhooks a standalone api ([#442](https://github.com/muxinc/mux-node-sdk/issues/442)) ([7978973](https://github.com/muxinc/mux-node-sdk/commit/79789735e7e384b764b1b9000909bf8777ffa515))
* **api:** manual updates ([#436](https://github.com/muxinc/mux-node-sdk/issues/436)) ([b647830](https://github.com/muxinc/mux-node-sdk/commit/b64783074d9b05d768f7affa2be763d5e0a07c7b))
* **api:** OpenAPI spec update via Stainless API ([#433](https://github.com/muxinc/mux-node-sdk/issues/433)) ([57614f0](https://github.com/muxinc/mux-node-sdk/commit/57614f066db415d68acec01a47c946c00563a17b))
* **api:** OpenAPI spec update via Stainless API ([#434](https://github.com/muxinc/mux-node-sdk/issues/434)) ([6b022d0](https://github.com/muxinc/mux-node-sdk/commit/6b022d05cddb78c2aff32972ae6193a298682cc0))
* **api:** OpenAPI spec update via Stainless API ([#448](https://github.com/muxinc/mux-node-sdk/issues/448)) ([4e3f947](https://github.com/muxinc/mux-node-sdk/commit/4e3f9472020b5ed3be66abec01e3c0161b1554d9))
* **api:** OpenAPI spec update via Stainless API ([#459](https://github.com/muxinc/mux-node-sdk/issues/459)) ([576e0aa](https://github.com/muxinc/mux-node-sdk/commit/576e0aacbf1307441757c4a81a7c163e96838b47))
* **api:** remove sunsetted spaces webhooks ([9398d0b](https://github.com/muxinc/mux-node-sdk/commit/9398d0bc33eafe074fb5b7d07eec9827085317e2))
* **client:** send retry count header ([#493](https://github.com/muxinc/mux-node-sdk/issues/493)) ([f202eef](https://github.com/muxinc/mux-node-sdk/commit/f202eef237847862097850bb4387452df762bce6))


### Bug Fixes

* **client:** correct File construction from node-fetch Responses ([#478](https://github.com/muxinc/mux-node-sdk/issues/478)) ([37cc57c](https://github.com/muxinc/mux-node-sdk/commit/37cc57c0c0fea5228529be15cfcbb3691f23f65f))
* **compat:** remove ReadableStream polyfill redundant since node v16 ([#460](https://github.com/muxinc/mux-node-sdk/issues/460)) ([66b4d45](https://github.com/muxinc/mux-node-sdk/commit/66b4d45a42f4324cdfda08b9675a47cdc648ecb5))
* **errors:** pass message through to APIConnectionError ([#486](https://github.com/muxinc/mux-node-sdk/issues/486)) ([56485cc](https://github.com/muxinc/mux-node-sdk/commit/56485ccaf60112ec0802afcea1f9700443c47da5))
* **types:** remove leftover polyfill usage ([#492](https://github.com/muxinc/mux-node-sdk/issues/492)) ([6d7f768](https://github.com/muxinc/mux-node-sdk/commit/6d7f76858dccefc61e31096209b7979d45614406))
* **uploads:** avoid making redundant memory copies ([#483](https://github.com/muxinc/mux-node-sdk/issues/483)) ([f24c5bd](https://github.com/muxinc/mux-node-sdk/commit/f24c5bd629c947335ca57ca7fd7b3559cd5c5d6c))
* use relative paths ([#458](https://github.com/muxinc/mux-node-sdk/issues/458)) ([96adde9](https://github.com/muxinc/mux-node-sdk/commit/96adde9d26599001ae82349eaad43f810250bf2c))


### Chores

* **api:** remove Spaces ([#440](https://github.com/muxinc/mux-node-sdk/issues/440)) ([5c02800](https://github.com/muxinc/mux-node-sdk/commit/5c0280024b0820a72efcced7c41780656eaeb256))
* better object fallback behaviour for casting errors ([#487](https://github.com/muxinc/mux-node-sdk/issues/487)) ([56b3412](https://github.com/muxinc/mux-node-sdk/commit/56b3412d18dbe48460322174c1bc1be61d3eb2fb))
* **ci:** bump prism mock server version ([#468](https://github.com/muxinc/mux-node-sdk/issues/468)) ([89c0bbe](https://github.com/muxinc/mux-node-sdk/commit/89c0bbe50c047134cef370d3cc3eff6a20822542))
* **ci:** check for build errors ([#473](https://github.com/muxinc/mux-node-sdk/issues/473)) ([74e1ebf](https://github.com/muxinc/mux-node-sdk/commit/74e1ebf5b4b3ce35378989f6128919aaf3a05dfb))
* **ci:** correctly tag pre-release npm packages ([#464](https://github.com/muxinc/mux-node-sdk/issues/464)) ([3e7edd5](https://github.com/muxinc/mux-node-sdk/commit/3e7edd5577b44717935e4b07bd57b9c2b91ca3f3))
* **ci:** install deps via ./script/bootstrap ([#476](https://github.com/muxinc/mux-node-sdk/issues/476)) ([4e518a3](https://github.com/muxinc/mux-node-sdk/commit/4e518a34bd9c398a05b9f0131dd012a08598062b))
* **ci:** minor changes ([#467](https://github.com/muxinc/mux-node-sdk/issues/467)) ([f3beb3a](https://github.com/muxinc/mux-node-sdk/commit/f3beb3ace4e0cc2795b6657eb6dbfb07ac042cc5))
* **docs:** fix incorrect client var names ([#461](https://github.com/muxinc/mux-node-sdk/issues/461)) ([4370704](https://github.com/muxinc/mux-node-sdk/commit/4370704d962b8166cbda806a780a6927578fce3d))
* **examples:** minor formatting changes ([#469](https://github.com/muxinc/mux-node-sdk/issues/469)) ([3649319](https://github.com/muxinc/mux-node-sdk/commit/3649319e74601435190bf7087b34457d54000724))
* force eslint to use non flat config ([#466](https://github.com/muxinc/mux-node-sdk/issues/466)) ([87858a2](https://github.com/muxinc/mux-node-sdk/commit/87858a2905acb0cab3d7d6b04d84f81b9572d86b))
* gitignore test server logs ([#437](https://github.com/muxinc/mux-node-sdk/issues/437)) ([bb32c90](https://github.com/muxinc/mux-node-sdk/commit/bb32c9082d73ec62fd4008d03f8e8489f1961d5d))
* **internal:** add constant for default timeout ([#463](https://github.com/muxinc/mux-node-sdk/issues/463)) ([2319c09](https://github.com/muxinc/mux-node-sdk/commit/2319c09c2f9e6a89501535b4e1e3ca869576dec7))
* **internal:** add dev dependency ([#489](https://github.com/muxinc/mux-node-sdk/issues/489)) ([2193260](https://github.com/muxinc/mux-node-sdk/commit/21932604d07ec787dbf06f1c98e35b5ef40820b9))
* **internal:** codegen related update ([#484](https://github.com/muxinc/mux-node-sdk/issues/484)) ([96bee84](https://github.com/muxinc/mux-node-sdk/commit/96bee847fd43ed80b62aeaf9121852aa2a4797e9))
* **internal:** codegen related update ([#485](https://github.com/muxinc/mux-node-sdk/issues/485)) ([80a3f6c](https://github.com/muxinc/mux-node-sdk/commit/80a3f6c84cbf80ca033554dcce315fcbf8475fb1))
* **internal:** codegen related update ([#494](https://github.com/muxinc/mux-node-sdk/issues/494)) ([802475b](https://github.com/muxinc/mux-node-sdk/commit/802475b12365f27a8fa1dbccc9ca4acfb25cac92))
* **internal:** dependency updates ([#479](https://github.com/muxinc/mux-node-sdk/issues/479)) ([9a552f5](https://github.com/muxinc/mux-node-sdk/commit/9a552f5b59b759066529f894a32aeecbcfe24fdb))
* **internal:** fix some types ([#491](https://github.com/muxinc/mux-node-sdk/issues/491)) ([b1a56e2](https://github.com/muxinc/mux-node-sdk/commit/b1a56e273b9bf3f9b0099dd09f34df0d888d319f))
* **internal:** minor bump qs version ([#480](https://github.com/muxinc/mux-node-sdk/issues/480)) ([34a8d90](https://github.com/muxinc/mux-node-sdk/commit/34a8d90b8cb90403ba873cbccbfd8be933983050))
* **internal:** minor reformatting ([#435](https://github.com/muxinc/mux-node-sdk/issues/435)) ([3eb9196](https://github.com/muxinc/mux-node-sdk/commit/3eb91960bc99ad9b244774af57c32da86b0db524))
* rebuild project due to codegen change ([#432](https://github.com/muxinc/mux-node-sdk/issues/432)) ([94f6108](https://github.com/muxinc/mux-node-sdk/commit/94f61083b2f80aa822bf96c99290dc3316ae52b7))
* rebuild project due to codegen change ([#439](https://github.com/muxinc/mux-node-sdk/issues/439)) ([9915dce](https://github.com/muxinc/mux-node-sdk/commit/9915dcec8792e6b3d10fd3af7d53a90c0b58f2d3))
* rebuild project due to codegen change ([#444](https://github.com/muxinc/mux-node-sdk/issues/444)) ([06fe62a](https://github.com/muxinc/mux-node-sdk/commit/06fe62a2886671c95bf489730b7edc035e18ea55))
* rebuild project due to codegen change ([#447](https://github.com/muxinc/mux-node-sdk/issues/447)) ([49159d3](https://github.com/muxinc/mux-node-sdk/commit/49159d3a5b0faf895eb3dd7e669b734ffd53f883))
* rebuild project due to codegen change ([#449](https://github.com/muxinc/mux-node-sdk/issues/449)) ([d7c0cb1](https://github.com/muxinc/mux-node-sdk/commit/d7c0cb11dcc21821d2e2f967219f82b75006145c))
* rebuild project due to codegen change ([#450](https://github.com/muxinc/mux-node-sdk/issues/450)) ([d306284](https://github.com/muxinc/mux-node-sdk/commit/d3062840edd24ec927de752b6bc4357333283d70))
* rebuild project due to codegen change ([#452](https://github.com/muxinc/mux-node-sdk/issues/452)) ([5cf1cba](https://github.com/muxinc/mux-node-sdk/commit/5cf1cbab38ed2b1a8819a2ff209ddea95411762e))
* rebuild project due to codegen change ([#454](https://github.com/muxinc/mux-node-sdk/issues/454)) ([e45308e](https://github.com/muxinc/mux-node-sdk/commit/e45308edf1ef612f55810f00e96cf47472bf0096))
* rebuild project due to codegen change ([#455](https://github.com/muxinc/mux-node-sdk/issues/455)) ([d42d2e2](https://github.com/muxinc/mux-node-sdk/commit/d42d2e24a49d9b32eed75a4424cabed9e737f6ff))
* rebuild project due to codegen change ([#456](https://github.com/muxinc/mux-node-sdk/issues/456)) ([be3320e](https://github.com/muxinc/mux-node-sdk/commit/be3320edb2311c05a5b19ff0dddca6f305450393))
* rebuild project due to codegen change ([#465](https://github.com/muxinc/mux-node-sdk/issues/465)) ([4a8888e](https://github.com/muxinc/mux-node-sdk/commit/4a8888ed265d9715a78910a2c34ef056e9dabb1e))
* rebuild project due to codegen change ([#470](https://github.com/muxinc/mux-node-sdk/issues/470)) ([a464948](https://github.com/muxinc/mux-node-sdk/commit/a4649481c25813727a6c46c9b201e95f7594a666))
* replace encoding tiers with video quality levels ([#475](https://github.com/muxinc/mux-node-sdk/issues/475)) ([c20f418](https://github.com/muxinc/mux-node-sdk/commit/c20f41842e8064b00926835f1498efc13a64d787))
* revert jose removal ([c7d79a0](https://github.com/muxinc/mux-node-sdk/commit/c7d79a093905c1ed4545687a92ef2862134484ae))
* run tsc as part of lint script ([#474](https://github.com/muxinc/mux-node-sdk/issues/474)) ([b887d28](https://github.com/muxinc/mux-node-sdk/commit/b887d286f99fbe495ae2d04f71198b68ec4a7d40))
* **tests:** update prism version ([#457](https://github.com/muxinc/mux-node-sdk/issues/457)) ([c1aee9d](https://github.com/muxinc/mux-node-sdk/commit/c1aee9d55211f958389af3adee542ba5f6dc93ff))


### Documentation

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
