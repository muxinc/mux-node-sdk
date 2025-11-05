// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import util from 'node:util';

import Fuse from 'fuse.js';
import ts from 'typescript';

import { WorkerInput, WorkerSuccess, WorkerError } from './code-tool-types';
import { Mux } from '@mux/mux-node';

function getRunFunctionNode(
  code: string,
): ts.FunctionDeclaration | ts.FunctionExpression | ts.ArrowFunction | null {
  const sourceFile = ts.createSourceFile('code.ts', code, ts.ScriptTarget.Latest, true);

  for (const statement of sourceFile.statements) {
    // Check for top-level function declarations
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name?.text === 'run') {
        return statement;
      }
    }

    // Check for variable declarations: const run = () => {} or const run = function() {}
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (ts.isIdentifier(declaration.name) && declaration.name.text === 'run') {
          // Check if it's initialized with a function
          if (
            declaration.initializer &&
            (ts.isFunctionExpression(declaration.initializer) || ts.isArrowFunction(declaration.initializer))
          ) {
            return declaration.initializer;
          }
        }
      }
    }
  }

  return null;
}

const fuse = new Fuse(
  [
    'client.video.assets.create',
    'client.video.assets.createPlaybackId',
    'client.video.assets.createStaticRendition',
    'client.video.assets.createTrack',
    'client.video.assets.delete',
    'client.video.assets.deletePlaybackId',
    'client.video.assets.deleteStaticRendition',
    'client.video.assets.deleteTrack',
    'client.video.assets.generateSubtitles',
    'client.video.assets.list',
    'client.video.assets.retrieve',
    'client.video.assets.retrieveInputInfo',
    'client.video.assets.retrievePlaybackId',
    'client.video.assets.update',
    'client.video.assets.updateMP4Support',
    'client.video.assets.updateMasterAccess',
    'client.video.deliveryUsage.list',
    'client.video.liveStreams.complete',
    'client.video.liveStreams.create',
    'client.video.liveStreams.createPlaybackId',
    'client.video.liveStreams.createSimulcastTarget',
    'client.video.liveStreams.delete',
    'client.video.liveStreams.deleteNewAssetSettingsStaticRenditions',
    'client.video.liveStreams.deletePlaybackId',
    'client.video.liveStreams.deleteSimulcastTarget',
    'client.video.liveStreams.disable',
    'client.video.liveStreams.enable',
    'client.video.liveStreams.list',
    'client.video.liveStreams.resetStreamKey',
    'client.video.liveStreams.retrieve',
    'client.video.liveStreams.retrievePlaybackId',
    'client.video.liveStreams.retrieveSimulcastTarget',
    'client.video.liveStreams.update',
    'client.video.liveStreams.updateEmbeddedSubtitles',
    'client.video.liveStreams.updateGeneratedSubtitles',
    'client.video.liveStreams.updateNewAssetSettingsStaticRenditions',
    'client.video.playbackIds.retrieve',
    'client.video.playbackRestrictions.create',
    'client.video.playbackRestrictions.delete',
    'client.video.playbackRestrictions.list',
    'client.video.playbackRestrictions.retrieve',
    'client.video.playbackRestrictions.updateReferrer',
    'client.video.playbackRestrictions.updateUserAgent',
    'client.video.transcriptionVocabularies.create',
    'client.video.transcriptionVocabularies.delete',
    'client.video.transcriptionVocabularies.list',
    'client.video.transcriptionVocabularies.retrieve',
    'client.video.transcriptionVocabularies.update',
    'client.video.uploads.cancel',
    'client.video.uploads.create',
    'client.video.uploads.list',
    'client.video.uploads.retrieve',
    'client.video.webInputs.create',
    'client.video.webInputs.delete',
    'client.video.webInputs.launch',
    'client.video.webInputs.list',
    'client.video.webInputs.reload',
    'client.video.webInputs.retrieve',
    'client.video.webInputs.shutdown',
    'client.video.webInputs.updateURL',
    'client.video.drmConfigurations.list',
    'client.video.drmConfigurations.retrieve',
    'client.video.playback.animated',
    'client.video.playback.hls',
    'client.video.playback.staticRendition',
    'client.video.playback.storyboard',
    'client.video.playback.storyboardMeta',
    'client.video.playback.storyboardVtt',
    'client.video.playback.thumbnail',
    'client.video.playback.track',
    'client.video.playback.transcript',
    'client.data.dimensions.list',
    'client.data.dimensions.listTraceElements',
    'client.data.dimensions.listValues',
    'client.data.monitoring.listDimensions',
    'client.data.monitoring.metrics.getBreakdown',
    'client.data.monitoring.metrics.getBreakdownTimeseries',
    'client.data.monitoring.metrics.getHistogramTimeseries',
    'client.data.monitoring.metrics.getTimeseries',
    'client.data.monitoring.metrics.list',
    'client.data.errors.list',
    'client.data.exports.listVideoViews',
    'client.data.filters.listValues',
    'client.data.incidents.list',
    'client.data.incidents.listRelated',
    'client.data.incidents.retrieve',
    'client.data.metrics.getInsights',
    'client.data.metrics.getOverallValues',
    'client.data.metrics.getTimeseries',
    'client.data.metrics.list',
    'client.data.metrics.listBreakdownValues',
    'client.data.realTime.listDimensions',
    'client.data.realTime.listMetrics',
    'client.data.realTime.retrieveBreakdown',
    'client.data.realTime.retrieveHistogramTimeseries',
    'client.data.realTime.retrieveTimeseries',
    'client.data.videoViews.list',
    'client.data.videoViews.retrieve',
    'client.data.annotations.create',
    'client.data.annotations.delete',
    'client.data.annotations.list',
    'client.data.annotations.retrieve',
    'client.data.annotations.update',
    'client.system.signingKeys.create',
    'client.system.signingKeys.delete',
    'client.system.signingKeys.list',
    'client.system.signingKeys.retrieve',
    'client.system.utilities.whoami',
    'client.webhooks.unwrap',
  ],
  { threshold: 1, shouldSort: true },
);

function getMethodSuggestions(fullyQualifiedMethodName: string): string[] {
  return fuse
    .search(fullyQualifiedMethodName)
    .map(({ item }) => item)
    .slice(0, 5);
}

const proxyToObj = new WeakMap<any, any>();
const objToProxy = new WeakMap<any, any>();

type ClientProxyConfig = {
  path: string[];
  isBelievedBad?: boolean;
};

function makeSdkProxy<T extends object>(obj: T, { path, isBelievedBad = false }: ClientProxyConfig): T {
  let proxy: T = objToProxy.get(obj);

  if (!proxy) {
    proxy = new Proxy(obj, {
      get(target, prop, receiver) {
        const propPath = [...path, String(prop)];
        const value = Reflect.get(target, prop, receiver);

        if (isBelievedBad || (!(prop in target) && value === undefined)) {
          // If we're accessing a path that doesn't exist, it will probably eventually error.
          // Let's proxy it and mark it bad so that we can control the error message.
          // We proxy an empty class so that an invocation or construction attempt is possible.
          return makeSdkProxy(class {}, { path: propPath, isBelievedBad: true });
        }

        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
          return makeSdkProxy(value, { path: propPath, isBelievedBad });
        }

        return value;
      },

      apply(target, thisArg, args) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a function. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.apply(target, proxyToObj.get(thisArg) ?? thisArg, args);
      },

      construct(target, args, newTarget) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a constructor. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.construct(target, args, newTarget);
      },
    });

    objToProxy.set(obj, proxy);
    proxyToObj.set(proxy, obj);
  }

  return proxy;
}

function parseError(code: string, error: unknown): string | undefined {
  if (!(error instanceof Error)) return;
  const message = error.name ? `${error.name}: ${error.message}` : error.message;
  try {
    // Deno uses V8; the first "<anonymous>:LINE:COLUMN" is the top of stack.
    const lineNumber = error.stack?.match(/<anonymous>:([0-9]+):[0-9]+/)?.[1];
    // -1 for the zero-based indexing
    const line =
      lineNumber &&
      code
        .split('\n')
        .at(parseInt(lineNumber, 10) - 1)
        ?.trim();
    return line ? `${message}\n  at line ${lineNumber}\n    ${line}` : message;
  } catch {
    return message;
  }
}

const fetch = async (req: Request): Promise<Response> => {
  const { opts, code } = (await req.json()) as WorkerInput;
  if (code == null) {
    return Response.json(
      {
        message:
          'The code param is missing. Provide one containing a top-level `run` function. Write code within this template:\n\n```\nasync function run(client) {\n  // Fill this out\n}\n```',
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const runFunctionNode = getRunFunctionNode(code);
  if (!runFunctionNode) {
    return Response.json(
      {
        message:
          'The code is missing a top-level `run` function. Write code within this template:\n\n```\nasync function run(client) {\n  // Fill this out\n}\n```',
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const client = new Mux({
    ...opts,
  });

  const logLines: string[] = [];
  const errLines: string[] = [];
  const console = {
    log: (...args: unknown[]) => {
      logLines.push(util.format(...args));
    },
    error: (...args: unknown[]) => {
      errLines.push(util.format(...args));
    },
  };
  try {
    let run_ = async (client: any) => {};
    eval(`${code}\nrun_ = run;`);
    const result = await run_(makeSdkProxy(client, { path: ['client'] }));
    return Response.json({
      result,
      logLines,
      errLines,
    } satisfies WorkerSuccess);
  } catch (e) {
    return Response.json(
      {
        message: parseError(code, e),
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }
};

export default { fetch };
