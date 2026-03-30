import { makeOAuthConsent } from './app';
import { McpAgent } from 'agents/mcp';
import OAuthProvider from '@cloudflare/workers-oauth-provider';
import { McpOptions, initMcpServer, server, ClientOptions } from '@mux/mcp/server';
import type { ExportedHandler } from '@cloudflare/workers-types';

type MCPProps = {
  clientProps: ClientOptions;
  clientConfig: McpOptions;
};

/**
 * The information displayed on the OAuth consent screen
 */
const serverConfig: ServerConfig = {
  orgName: 'Mux',
  instructionsUrl: undefined, // Set a url for where you show users how to get an API key
  logoUrl: undefined, // Set a custom logo url to appear during the OAuth flow
  clientProperties: [
    {
      key: 'tokenId',
      label: 'Token ID',
      description: '',
      required: false,
      default: null,
      placeholder: 'my token id',
      type: 'password',
    },
    {
      key: 'tokenSecret',
      label: 'Token Secret',
      description: '',
      required: false,
      default: null,
      placeholder: 'my secret',
      type: 'password',
    },
    {
      key: 'webhookSecret',
      label: 'Webhook Secret',
      description: '',
      required: false,
      default: null,
      placeholder: 'My Webhook Secret',
      type: 'string',
    },
    {
      key: 'jwtSigningKey',
      label: 'Jwt Signing Key',
      description: '',
      required: false,
      default: null,
      placeholder: 'My Jwt Signing Key',
      type: 'string',
    },
    {
      key: 'jwtPrivateKey',
      label: 'Jwt Private Key',
      description: '',
      required: false,
      default: null,
      placeholder: 'My Jwt Private Key',
      type: 'string',
    },
    {
      key: 'authorizationToken',
      label: 'Authorization Token',
      description: '',
      required: false,
      default: null,
      placeholder: 'my authorization token',
      type: 'password',
    },
  ],
};

export class MyMCP extends McpAgent<Env, unknown, MCPProps> {
  server = server;

  async init() {
    initMcpServer({
      server: this.server,
      clientOptions: this.props.clientProps,
      mcpOptions: this.props.clientConfig,
    });
  }
}

export type ServerConfig = {
  /**
   * The name of the company/project
   */
  orgName: string;

  /**
   * An optional company logo image
   */
  logoUrl?: string;

  /**
   * An optional URL with instructions for users to get an API key
   */
  instructionsUrl?: string;

  /**
   * Properties collected to initialize the client
   */
  clientProperties: ClientProperty[];
};

export type ClientProperty = {
  key: string;
  label: string;
  description?: string;
  required: boolean;
  default?: unknown;
  placeholder?: string;
  type: 'string' | 'number' | 'password' | 'select';
  options?: { label: string; value: string }[];
};

// Export the OAuth handler as the default
export default new OAuthProvider({
  apiHandlers: {
    // @ts-expect-error
    '/sse': MyMCP.serveSSE('/sse'), // legacy SSE
    // @ts-expect-error
    '/mcp': MyMCP.serve('/mcp'), // Streaming HTTP
  },
  // Type assertion needed due to Headers type mismatch between Hono and @cloudflare/workers-types
  // At runtime, Hono's fetch handler is fully compatible with ExportedHandler
  defaultHandler: makeOAuthConsent(serverConfig) as unknown as ExportedHandler,
  authorizeEndpoint: '/authorize',
  tokenEndpoint: '/token',
  clientRegistrationEndpoint: '/register',
});
