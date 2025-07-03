// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { Endpoint, endpoints, HandlerFunction, query } from './tools';
import { CallToolRequestSchema, ListToolsRequestSchema, Tool } from '@modelcontextprotocol/sdk/types.js';
import { ClientOptions } from '@mux/mux-node';
import Mux from '@mux/mux-node';
import {
  applyCompatibilityTransformations,
  ClientCapabilities,
  defaultClientCapabilities,
  knownClients,
  parseEmbeddedJSON,
} from './compat';
import { dynamicTools } from './dynamic-tools';
import { McpOptions } from './options';

export { McpOptions } from './options';
export { ClientType } from './compat';
export { Filter } from './tools';
export { ClientOptions } from '@mux/mux-node';
export { endpoints } from './tools';

// Create server instance
export const server = new McpServer(
  {
    name: 'mux_mux_node_api',
    version: '12.0.1',
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

/**
 * Initializes the provided MCP Server with the given tools and handlers.
 * If not provided, the default client, tools and handlers will be used.
 */
export function initMcpServer(params: {
  server: Server | McpServer;
  clientOptions: ClientOptions;
  mcpOptions: McpOptions;
  endpoints?: { tool: Tool; handler: HandlerFunction }[];
}) {
  const transformedEndpoints = selectTools(endpoints, params.mcpOptions);
  const client = new Mux(params.clientOptions);
  const capabilities = {
    ...defaultClientCapabilities,
    ...(params.mcpOptions.client ? knownClients[params.mcpOptions.client] : params.mcpOptions.capabilities),
  };
  init({ server: params.server, client, endpoints: transformedEndpoints, capabilities });
}

export function init(params: {
  server: Server | McpServer;
  client?: Mux;
  endpoints?: { tool: Tool; handler: HandlerFunction }[];
  capabilities?: Partial<ClientCapabilities>;
}) {
  const server = params.server instanceof McpServer ? params.server.server : params.server;
  const providedEndpoints = params.endpoints || endpoints;

  const endpointMap = Object.fromEntries(providedEndpoints.map((endpoint) => [endpoint.tool.name, endpoint]));

  const client = params.client || new Mux({ defaultHeaders: { 'X-Stainless-MCP': 'true' } });

  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: providedEndpoints.map((endpoint) => endpoint.tool),
    };
  });

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    const endpoint = endpointMap[name];
    if (!endpoint) {
      throw new Error(`Unknown tool: ${name}`);
    }

    return executeHandler(endpoint.tool, endpoint.handler, client, args, params.capabilities);
  });
}

/**
 * Selects the tools to include in the MCP Server based on the provided options.
 */
export function selectTools(endpoints: Endpoint[], options: McpOptions) {
  const filteredEndpoints = query(options.filters, endpoints);

  let includedTools = filteredEndpoints;

  if (includedTools.length > 0) {
    if (options.includeDynamicTools) {
      includedTools = dynamicTools(includedTools);
    }
  } else {
    if (options.includeAllTools) {
      includedTools = endpoints;
    } else if (options.includeDynamicTools) {
      includedTools = dynamicTools(endpoints);
    } else {
      includedTools = endpoints;
    }
  }

  const capabilities = { ...defaultClientCapabilities, ...options.capabilities };
  return applyCompatibilityTransformations(includedTools, capabilities);
}

/**
 * Runs the provided handler with the given client and arguments.
 */
export async function executeHandler(
  tool: Tool,
  handler: HandlerFunction,
  client: Mux,
  args: Record<string, unknown> | undefined,
  compatibilityOptions?: Partial<ClientCapabilities>,
) {
  const options = { ...defaultClientCapabilities, ...compatibilityOptions };
  if (options.validJson && args) {
    args = parseEmbeddedJSON(args, tool.inputSchema);
  }
  return await handler(client, args || {});
}

export const readEnv = (env: string): string | undefined => {
  if (typeof (globalThis as any).process !== 'undefined') {
    return (globalThis as any).process.env?.[env]?.trim();
  } else if (typeof (globalThis as any).Deno !== 'undefined') {
    return (globalThis as any).Deno.env?.get?.(env)?.trim();
  }
  return;
};

export const readEnvOrError = (env: string): string => {
  let envValue = readEnv(env);
  if (envValue === undefined) {
    throw new Error(`Environment variable ${env} is not set`);
  }
  return envValue;
};
