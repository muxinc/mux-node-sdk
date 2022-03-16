Releases are primarily tracked in the Github [Releases panel](https://github.com/muxinc/mux-node-sdk/releases)

# 5.0.0

- mux-node-sdk is now TypeScript-native! 🎉
- exports are now ESModule exports, not CommonJS exports; this means that, if you are using CJS `require`s, you will need to update to `require('@mux/mux-node').default`. The same holds true for direct imports from other files within `@mux/mux-node`'s structure.
