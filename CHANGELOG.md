# Changelog

## 12.8.0 (2025-09-18)

Full Changelog: [v12.7.0...v12.8.0](https://github.com/muxinc/mux-node-sdk/compare/v12.7.0...v12.8.0)

### Features

* **mcp:** allow setting logging level ([cf8ef79](https://github.com/muxinc/mux-node-sdk/commit/cf8ef795cd13ac0505f84f87dcc98698c26d6e5b))
* **mcp:** expose client options in `streamableHTTPApp` ([2321073](https://github.com/muxinc/mux-node-sdk/commit/23210734b3ea348d6d8e18fa43e050928a743912))


### Bug Fixes

* **mcp:** avoid importing unsupported libraries on non-node environments ([6e3db76](https://github.com/muxinc/mux-node-sdk/commit/6e3db76730719347ad239075c7293a989d8571d5))


### Chores

* add server.json to publish to Github's MCP registry ([#613](https://github.com/muxinc/mux-node-sdk/issues/613)) ([fd07791](https://github.com/muxinc/mux-node-sdk/commit/fd0779160400d828c16c1dca6f0db1eb30c06e69))

## 12.7.0 (2025-08-27)

Full Changelog: [v12.6.1...v12.7.0](https://github.com/muxinc/mux-node-sdk/compare/v12.6.1...v12.7.0)

### Features

* **mcp:** add client infer to cloudflare oauth screen ([1773deb](https://github.com/muxinc/mux-node-sdk/commit/1773deb1c4d0d0ec7d6eb8a381c302a9d1a7d64b))
* **mcp:** change remote server query option parsing logic ([b207dcf](https://github.com/muxinc/mux-node-sdk/commit/b207dcfaf1f0ea73511b95593b26b936f33bfd7c))


### Bug Fixes

* **image:** expose format param for storyboard.json calls ([#370](https://github.com/muxinc/mux-node-sdk/issues/370)) ([cd09584](https://github.com/muxinc/mux-node-sdk/commit/cd09584c0847ee54f79a1f5c26370f392d0c074b))
* **mcp:** redirect oauth-authorization-server ([#611](https://github.com/muxinc/mux-node-sdk/issues/611)) ([8bf978e](https://github.com/muxinc/mux-node-sdk/commit/8bf978e7e238fddf1c8766817990252cd0700dd2))

## 12.6.1 (2025-08-22)

Full Changelog: [v12.6.0...v12.6.1](https://github.com/muxinc/mux-node-sdk/compare/v12.6.0...v12.6.1)

### Chores

* update CI script ([41acbcb](https://github.com/muxinc/mux-node-sdk/commit/41acbcbf10059cfeae1b7004eb3203ba6681e344))

## 12.6.0 (2025-08-21)

Full Changelog: [v12.5.0...v12.6.0](https://github.com/muxinc/mux-node-sdk/compare/v12.5.0...v12.6.0)

### Features

* **mcp:** add Vercel function hosting option
* **mcp:** add code execution tool ([d5c777b](https://github.com/muxinc/mux-node-sdk/commit/d5c777b3363fddd098e0be97a12e63778afb322a))
* **mcp:** add option to infer mcp client ([a7b0225](https://github.com/muxinc/mux-node-sdk/commit/a7b0225e17614f841148ece5125fd8bdcf664ed0))


### Bug Fixes

* **mcp:** clean up oauth info for mcp ([0cafe63](https://github.com/muxinc/mux-node-sdk/commit/0cafe632849f9c96bf3c866ec308eb06a8db2c07))
* **mcp:** oauth metadata ([630a21b](https://github.com/muxinc/mux-node-sdk/commit/630a21b8b6476942943a9b00166d46ad166b0f57))


### Chores

* **internal:** make mcp-server publishing public by defaut ([4a3dfa2](https://github.com/muxinc/mux-node-sdk/commit/4a3dfa251810675929e543b5e855cc2f2e100169))
* **mcp:** update package.json ([da084a7](https://github.com/muxinc/mux-node-sdk/commit/da084a730ca4118467815c475bc13289b197371e))
* **mcp:** update types ([f90aed3](https://github.com/muxinc/mux-node-sdk/commit/f90aed36f91dc610465312017f4ff5b200144537))

## 12.5.0 (2025-08-19)

Full Changelog: [v12.4.1...v12.5.0](https://github.com/muxinc/mux-node-sdk/compare/v12.4.1...v12.5.0)

### Features

* **api:** actually expose support for CDN trace and trace dimension-specific API methods which was inadvertently missing
* **mcp:** add authorization servers to config ([e07584f](https://github.com/muxinc/mux-node-sdk/commit/e07584f60f28efb4b22b2ce64803e6ce3377db05))
* **mcp:** add oauth_resource_metadata ([a67d1cd](https://github.com/muxinc/mux-node-sdk/commit/a67d1cdbb8a1f4656412bdd0d7f2ad4d90963288))
* **mcp:** parse query string as mcp client options in mcp server ([715c289](https://github.com/muxinc/mux-node-sdk/commit/715c289017fdf7465b1a596fa139995d32cfc8dd))


### Chores

* **internal:** formatting change ([82f6e1a](https://github.com/muxinc/mux-node-sdk/commit/82f6e1ac65a36bff638f56ede503dcdecd6cf428))
* **internal:** refactor array check ([f788c43](https://github.com/muxinc/mux-node-sdk/commit/f788c43aded1f6db498c4eef533a8c0e7eb7a4af))
* **mcp:** add cors to oauth metadata route ([0a8796a](https://github.com/muxinc/mux-node-sdk/commit/0a8796aea676d94508c7c9ee1c14f4454bb87d8a))

## 12.4.1 (2025-08-15)

Full Changelog: [v12.4.0...v12.4.1](https://github.com/muxinc/mux-node-sdk/compare/v12.4.0...v12.4.1)

### Features

* add support for CDN trace and trace dimension-specific API methods ([#365](https://github.com/muxinc/mux-node-sdk/issues/365)) ([1ba1635](https://github.com/muxinc/mux-node-sdk/commit/1ba1635bfdefce6f1900fa7d7b7407a19ed560e6))
* **mcp:** add unix socket option for remote MCP ([839d999](https://github.com/muxinc/mux-node-sdk/commit/839d999865094e8ddce0e56d1257d518b26bc858))


### Bug Fixes

* **mcp:** fix bug in header handling ([01d65d1](https://github.com/muxinc/mux-node-sdk/commit/01d65d1f88f722a71f674ffe95a65dcb9afdb2b0))
* **mcp:** fix jq type bug ([6b46735](https://github.com/muxinc/mux-node-sdk/commit/6b46735b637051fb54809fa606ab132c08843965))


### Chores

* **deps:** update dependency node-fetch to v2.6.13 ([5f509de](https://github.com/muxinc/mux-node-sdk/commit/5f509def4f289910ebaeb692c1b4b56b117ba055))
* **internal:** move publish config ([870995a](https://github.com/muxinc/mux-node-sdk/commit/870995abf7002274a9e8a7e7f3d9cf1e4c384b4c))
* **internal:** update comment in script ([8f6a4a0](https://github.com/muxinc/mux-node-sdk/commit/8f6a4a0906ac902beb21d5bb46451939f064b9d7))
* **mcp:** bump JQ version ([e5b6779](https://github.com/muxinc/mux-node-sdk/commit/e5b67797968191ab425f0fa6e52e5f2ee50242ba))
* **mcp:** document remote server in README.md ([3344229](https://github.com/muxinc/mux-node-sdk/commit/334422990ac35284a439e084953820542a23ef89))
* **mcp:** minor cleanup of types and package.json ([24097ba](https://github.com/muxinc/mux-node-sdk/commit/24097ba76b69b98d4fcea804c74524eef8f0bf77))
* **mcp:** refactor streamable http transport ([8b40da7](https://github.com/muxinc/mux-node-sdk/commit/8b40da7f2f93e110794664c1811c8412ce3534f3))
* **mcp:** update README ([2bdad30](https://github.com/muxinc/mux-node-sdk/commit/2bdad3016326d9e04b108839ffe2030ae9f4c1c0))
* update @stainless-api/prism-cli to v5.15.0 ([6d47536](https://github.com/muxinc/mux-node-sdk/commit/6d47536322556ca25805c16dff4e5ccb3bba41c6))

## 12.4.0 (2025-08-05)

Full Changelog: [v12.3.0...v12.4.0](https://github.com/muxinc/mux-node-sdk/compare/v12.3.0...v12.4.0)

### Features

* **api:** expose authorizationToken as valid auth mechanism for remote MCP server ([cbd38d5](https://github.com/muxinc/mux-node-sdk/commit/cbd38d5cf18966172b9f0aeb947253c67c47be0b))
* **mcp:** add logging when environment variable is set ([4b25b46](https://github.com/muxinc/mux-node-sdk/commit/4b25b46de16bb2a9f381306d05c2c83141a475d1))
* **mcp:** remote server with passthru auth ([a535888](https://github.com/muxinc/mux-node-sdk/commit/a535888596ae66eeb8a5a0a678c51461407716ef))


### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([8d9d790](https://github.com/muxinc/mux-node-sdk/commit/8d9d7904342ad6fc03e49ec916bb29246f0d6637))
* **mcp:** fix tool description of jq_filter ([56ce5dd](https://github.com/muxinc/mux-node-sdk/commit/56ce5dded1744997275b58d570fb868b51411c79))
* **mcp:** reverse validJson capability option and limit scope ([8fecaf7](https://github.com/muxinc/mux-node-sdk/commit/8fecaf79e42e3b119e56593107c6dd9d94e94cdc))


### Chores

* **internal:** remove redundant imports config ([6f1bd7b](https://github.com/muxinc/mux-node-sdk/commit/6f1bd7b3af54a78cb3685dfdf97e95098e4d208b))
* update error message on instantiation ([ef387e2](https://github.com/muxinc/mux-node-sdk/commit/ef387e271e3fa57772f0762a232f317bcec8a896))

## 12.3.0 (2025-07-24)

Full Changelog: [v12.2.0...v12.3.0](https://github.com/muxinc/mux-node-sdk/compare/v12.2.0...v12.3.0)

### Features

* add more languages for live generated captions ([#361](https://github.com/muxinc/mux-node-sdk/issues/361)) ([6dc6350](https://github.com/muxinc/mux-node-sdk/commit/6dc6350f64d07ba9c4e185a6128540eab28c80b5))
* **api:** expose /system/v1/whoami route ([3fa346b](https://github.com/muxinc/mux-node-sdk/commit/3fa346b461f2aad57d4c87194c91c69a6668748d))
* Spec for latest thumbnail ([#363](https://github.com/muxinc/mux-node-sdk/issues/363)) ([72f8669](https://github.com/muxinc/mux-node-sdk/commit/72f8669588736e4c72324792bda69f24c01213c8))


### Bug Fixes

* Make all the regexes for webhook payloads more explicit, to fix `video.asset.static_rendition.*` webhooks ([#360](https://github.com/muxinc/mux-node-sdk/issues/360)) ([f276b25](https://github.com/muxinc/mux-node-sdk/commit/f276b252dfad47d0fa2b4d435505f935a17c327a))
* **mcp:** include required section for top-level properties and support naming transformations ([6c2ea9f](https://github.com/muxinc/mux-node-sdk/commit/6c2ea9fe8bd7b952c57da816ce29938710b3e529))


### Chores

* **internal:** codegen related update ([dc7ea3e](https://github.com/muxinc/mux-node-sdk/commit/dc7ea3ed285180e0f426b5d5b594dc832db60cb0))
* **internal:** version bump ([997eca2](https://github.com/muxinc/mux-node-sdk/commit/997eca2ef922a37ada5fc996e48e852ac0424b0a))
* remove log from internal build step ([#362](https://github.com/muxinc/mux-node-sdk/issues/362)) ([c06d7e2](https://github.com/muxinc/mux-node-sdk/commit/c06d7e2b18eeb3095a1232fc67c83ee5e4fd933c))

## 12.2.0 (2025-07-16)

Full Changelog: [v12.1.0...v12.2.0](https://github.com/muxinc/mux-node-sdk/compare/v12.1.0...v12.2.0)

### Features

* clean up environment call outs ([b6bd416](https://github.com/muxinc/mux-node-sdk/commit/b6bd416af78cd2010189e26c5b24ac188d6b5f51))
* **mcp:** support filtering tool results by a jq expression ([24ee59b](https://github.com/muxinc/mux-node-sdk/commit/24ee59be71cae71c8d570df1f0c0b77d505d567d))


### Bug Fixes

* **build:** bump node version in CI build to 20 to be compatible with MCP package ([31a0909](https://github.com/muxinc/mux-node-sdk/commit/31a09098aa083c0e4dc8c320d5459331351bd5ea))
* Fix incorrect deprecated message in live streaming playback policies ([#358](https://github.com/muxinc/mux-node-sdk/issues/358)) ([4fe35bb](https://github.com/muxinc/mux-node-sdk/commit/4fe35bb6af229f6d2a046ec2778830e0c72b618c))
* **mcp:** relax input type for asTextContextResult ([b6e7352](https://github.com/muxinc/mux-node-sdk/commit/b6e7352dbab0f99ccf7484a7b1701aea52b7e846))
* **mcp:** support jq filtering on cloudflare workers ([2bd8dc6](https://github.com/muxinc/mux-node-sdk/commit/2bd8dc658156a31a6082dcb82614a8b63889c1eb))


### Chores

* **api:** build cloudflare worker mcp server ([69e6f8c](https://github.com/muxinc/mux-node-sdk/commit/69e6f8c0395b58faab0bd0142764b514e3ea10bb))
* **internal:** version bump ([e312932](https://github.com/muxinc/mux-node-sdk/commit/e312932665b6e64bddd158cb417a8ef08e66b7d8))
* make some internal functions async ([4e78a17](https://github.com/muxinc/mux-node-sdk/commit/4e78a1788fe1da9a98ef75fa0693ae74df1ce369))
* **mcp:** formatting ([4844bf6](https://github.com/muxinc/mux-node-sdk/commit/4844bf69e84b4c7bfc7fdbfef3ff63bd963981b1))
* **mcp:** rework imports in tools ([4ee527f](https://github.com/muxinc/mux-node-sdk/commit/4ee527f9c107b94c0b74962a500c7f86c25aeb1f))
* upload dxt file as release asset ([86c5ad1](https://github.com/muxinc/mux-node-sdk/commit/86c5ad16f7b749a3cd6cb9132f955241f9697f0e))


### Documentation

* clarify that additional audio tracks may be removed ([#357](https://github.com/muxinc/mux-node-sdk/issues/357)) ([8577e42](https://github.com/muxinc/mux-node-sdk/commit/8577e42a3f1b7f9d2307be6151c83d9fae57a56c))

## 12.1.0 (2025-07-03)

Full Changelog: [v12.0.1...v12.1.0](https://github.com/muxinc/mux-node-sdk/compare/v12.0.1...v12.1.0)

### Features

* mcp desktop extension ([#594](https://github.com/muxinc/mux-node-sdk/issues/594)) ([da573cc](https://github.com/muxinc/mux-node-sdk/commit/da573cce4f7f6c9208c8fbc60d4bf3f4af0246b7))

## 12.0.1 (2025-07-03)

Full Changelog: [v12.0.0...v12.0.1](https://github.com/muxinc/mux-node-sdk/compare/v12.0.0...v12.0.1)

### Bug Fixes

* **client:** don't send `Content-Type` for bodyless methods ([b12e006](https://github.com/muxinc/mux-node-sdk/commit/b12e00652be1cbfd89c8568166a788d410ce5e70))
* set name of MCP server to just mux ([8219d6b](https://github.com/muxinc/mux-node-sdk/commit/8219d6ba84c263b8dac9e1ae5c8b5c7dd96d17f3))


### Chores

* mention unit type in timeout docs ([f715c2a](https://github.com/muxinc/mux-node-sdk/commit/f715c2a120f8b1e44aea47212ec32fdee05cc33f))
* update readme to remove manually running ([fb006cc](https://github.com/muxinc/mux-node-sdk/commit/fb006cc5c93c6e29f9b269c31c824a9783b45f47))

## 12.0.0 (2025-07-02)

Full Changelog: [v11.1.0...v12.0.0](https://github.com/muxinc/mux-node-sdk/compare/v11.1.0...v12.0.0)

### Features

* Expose methods for playback, images, captions, and transcripts
* Expose MCP server in build
* Add live stream metadata ([#351](https://github.com/muxinc/mux-node-sdk/issues/351)) ([4bb8e63](https://github.com/muxinc/mux-node-sdk/commit/4bb8e63a3a45330fd1a414148665796750d58eb1))
* add new copy_overlays asset option ([#355](https://github.com/muxinc/mux-node-sdk/issues/355)) ([7c24f4a](https://github.com/muxinc/mux-node-sdk/commit/7c24f4a9f350568ee1a1dc8c4df54b1e4efe857d))
* Add progress API fields to the asset model ([#328](https://github.com/muxinc/mux-node-sdk/issues/328)) ([0137bee](https://github.com/muxinc/mux-node-sdk/commit/0137bee04847d310dd74f957de110dda37c28891))
* **api:** expose playback APIs ([8609c47](https://github.com/muxinc/mux-node-sdk/commit/8609c471e8fbfccc2a34a4e33de23fdd9e76f7ca))
* **client:** add support for endpoint-specific base URLs ([e3f4bdc](https://github.com/muxinc/mux-node-sdk/commit/e3f4bdca804a846b4a87dac8c04fac26dce6798d))
* **mcp:** fallback for void-typed methods ([9a9f95f](https://github.com/muxinc/mux-node-sdk/commit/9a9f95fb407f45125a4dbd052852f955f06e5115))
* **mcp:** implement support for binary responses ([58d6395](https://github.com/muxinc/mux-node-sdk/commit/58d6395935e9a62463578a8c56fd861ef1bc258c))
* **mcp:** include http information in tools ([24bfa89](https://github.com/muxinc/mux-node-sdk/commit/24bfa892c33d92c2ef84e5b400376f9edb979db6))
* **mcp:** set X-Stainless-MCP header ([3fc5387](https://github.com/muxinc/mux-node-sdk/commit/3fc53874c819871245e6f8fe32ff4922d0d9683b))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([828e709](https://github.com/muxinc/mux-node-sdk/commit/828e7097c6ccc20296d02693664ec7021b835c50))
* **client:** correct webhooks types ([1c7a3f2](https://github.com/muxinc/mux-node-sdk/commit/1c7a3f27cf9747801429e19d450f1103ff649599))
* **mcp:** fix cursor schema transformation issue with recursive references ([f02fd01](https://github.com/muxinc/mux-node-sdk/commit/f02fd01050ad69d37110a9f7c5e2e0d4c31775ba))
* **mcp:** include description in dynamic tool search ([784bb2d](https://github.com/muxinc/mux-node-sdk/commit/784bb2dc1459f2a2066a374281a8a9636d688cb7))
* publish script — handle NPM errors correctly ([877dd7a](https://github.com/muxinc/mux-node-sdk/commit/877dd7afa69cc0fb4c9105c5bbacd4e0a966aa56))


### Chores

* **api:** mark some methods as deprecated ([217c45e](https://github.com/muxinc/mux-node-sdk/commit/217c45e22fd03fb70bcb85c9abf2a0396eed9fe9))
* **api:** remove webhooks from mcp ([f994bab](https://github.com/muxinc/mux-node-sdk/commit/f994bab88e16aaa5cfb83e58e124fbfff7e25ee3))
* bump node to 22 in tool-versions ([f80b9be](https://github.com/muxinc/mux-node-sdk/commit/f80b9be030460d3808f3ffa4b2c573e280b7f6b4))
* **ci:** enable for pull requests ([5c8229d](https://github.com/muxinc/mux-node-sdk/commit/5c8229dc453dc76d98c6786a0b1b39bd4385699d))
* **ci:** only run for pushes and fork pull requests ([e2d4018](https://github.com/muxinc/mux-node-sdk/commit/e2d40187fdec6354f4ebb0160c352cad8b3c3b25))
* configure new SDK language ([a4e9260](https://github.com/muxinc/mux-node-sdk/commit/a4e9260a4c79340fa81a77fdf98d16f373f5f1c1))
* **docs:** grammar improvements ([9735730](https://github.com/muxinc/mux-node-sdk/commit/973573020303420bf493e5cb96a9fa9707a23c76))
* **docs:** use top-level-await in example snippets ([20bf891](https://github.com/muxinc/mux-node-sdk/commit/20bf8915251e6cb3a6154f476de1a4198043cc6a))
* improve docs for MCP servers ([252617d](https://github.com/muxinc/mux-node-sdk/commit/252617d0a4d44f5a84a4f16a082ec36bfc380208))
* improve publish-npm script --latest tag logic ([ac97f0b](https://github.com/muxinc/mux-node-sdk/commit/ac97f0baca1d2feb0446b036538b7855ebaa0700))
* **internal:** make base APIResource abstract ([d8287a6](https://github.com/muxinc/mux-node-sdk/commit/d8287a6f16341d3dd7e8619f85275d5b124e8c51))
* **mcp:** provides high-level initMcpServer function and exports known clients ([ff89d71](https://github.com/muxinc/mux-node-sdk/commit/ff89d718e02f7b0992ef4f05752dbab01dcf0c12))
* **mcp:** remove duplicate assignment ([cec01d6](https://github.com/muxinc/mux-node-sdk/commit/cec01d63d581bb35cc0588150ed3f3c7ff513b94))
* update mcp package name ([3269450](https://github.com/muxinc/mux-node-sdk/commit/3269450a5a1eb57f791d93e90e7c7f098e17ff5c))
* upgrade node in upload step ([#354](https://github.com/muxinc/mux-node-sdk/issues/354)) ([5873d7b](https://github.com/muxinc/mux-node-sdk/commit/5873d7bd5f855208b163f90c933f4bec8617e0d4))


### Documentation

* **pagination:** improve naming ([289ee67](https://github.com/muxinc/mux-node-sdk/commit/289ee67158efa899084ffe3576c7725111014be7))


### Refactors

* **types:** replace Record with mapped types ([8d7ea9c](https://github.com/muxinc/mux-node-sdk/commit/8d7ea9c1ffe3f481a70b8e883d809fd2697500e0))

## 11.1.0 (2025-05-09)

Full Changelog: [v11.0.2...v11.1.0](https://github.com/muxinc/mux-node-sdk/compare/v11.0.2...v11.1.0)

### Features

* add cursor pagination for listing assets ([#330](https://github.com/muxinc/mux-node-sdk/issues/330)) ([9602721](https://github.com/muxinc/mux-node-sdk/commit/9602721156971e6491be468c01e95bfaef2961ee))
* **api:** Config update for Dashron/dev ([dd9c399](https://github.com/muxinc/mux-node-sdk/commit/dd9c399153b074a9fe2ecd28324494164869b232))
* **api:** expose annotations APIs and additional static_rendition APIs ([6f82e92](https://github.com/muxinc/mux-node-sdk/commit/6f82e924b5b7d8c26eff7c696d961c7a0622994a))


### Bug Fixes

* add timeframe to annotations ([#349](https://github.com/muxinc/mux-node-sdk/issues/349)) ([6ad1698](https://github.com/muxinc/mux-node-sdk/commit/6ad16987dd017b7193807335da1330793a1c8b82))
* fix delete annotation example ([#350](https://github.com/muxinc/mux-node-sdk/issues/350)) ([8582caf](https://github.com/muxinc/mux-node-sdk/commit/8582cafafea199b240eb7b42ea41f69caa8f1310))


### Chores

* **ci:** add timeout thresholds for CI jobs ([a16f2f5](https://github.com/muxinc/mux-node-sdk/commit/a16f2f583e76462014b18964c8b740a1d5ca0f1f))
* **ci:** bump node version for release workflows ([1c2612a](https://github.com/muxinc/mux-node-sdk/commit/1c2612a62927d850da73a80d6c1af5feb9d66074))
* **ci:** only use depot for staging repos ([036fb4a](https://github.com/muxinc/mux-node-sdk/commit/036fb4a71a13dcc082292a1b9a0c7d63e14da3ad))
* **ci:** run on more branches and use depot runners ([4edb8f1](https://github.com/muxinc/mux-node-sdk/commit/4edb8f15bbab7dfb5ae88cd02619580c8dbb693c))
* **docs:** add missing deprecation warnings ([599d3b9](https://github.com/muxinc/mux-node-sdk/commit/599d3b9db55e8f12b99809f13ffc6603568932c6))
* fix docs build by adding Annotations to the tag groups ([#345](https://github.com/muxinc/mux-node-sdk/issues/345)) ([e3c9cd5](https://github.com/muxinc/mux-node-sdk/commit/e3c9cd51968df3fe30213f11fb6bd347e6aba84a))
* fix nesting of annotation_id for docs ([#346](https://github.com/muxinc/mux-node-sdk/issues/346)) ([d782348](https://github.com/muxinc/mux-node-sdk/commit/d7823486342f2d07cfbc34521b0b234b13e0e107))
* **internal:** restore custom code ([e8e3334](https://github.com/muxinc/mux-node-sdk/commit/e8e3334c5838fb5bc3797ad775c9509ac04b7a64))


### Documentation

* add examples to tsdocs ([034fd66](https://github.com/muxinc/mux-node-sdk/commit/034fd666fabf9e35285777392ab417385a2eba5f))
* Document max length for srt_passphrase and stream_key ([#344](https://github.com/muxinc/mux-node-sdk/issues/344)) ([0c33d5e](https://github.com/muxinc/mux-node-sdk/commit/0c33d5e1ccd8a299e03c0a89c4f7160b52f5f6a7))
* **readme:** fix typo ([78b5b43](https://github.com/muxinc/mux-node-sdk/commit/78b5b43ebd2fefdd6c5f86cf92d27218570dd0f5))

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
