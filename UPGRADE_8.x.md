# Upgrading to 8.x

If you're coming a version of this SDK before 8.0 then a lot has changed.

For context & background see the [announcement issue](https://github.com/muxinc/mux-node-sdk/issues/327).

## Codemod

There is a codemod script you can run which will modify the old function calls to the new 8.0 syntax:

```
npx @getgrit/launcher apply mux_v8
```

This will edit the files in your project in a way that converts your existing code to the new v8 syntax. The codemod script is working well for us, but you should still verify your code changes and make sure it works as expected before deploying the new code to production.

This codemod script was tested and run against code running 7.x versions of the SDK. If you're on a version before 7.x you can still run it, but it might not work as reliably and if you're running into issues you may want to upgrade to 7.3.5 before running the codemod.
