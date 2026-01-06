import { Hono } from 'hono';
import {
  layout,
  homeContent,
  parseApproveFormBody,
  renderAuthorizationApprovedContent,
  renderLoggedOutAuthorizeScreen,
  renderAuthorizationRejectedContent,
} from './utils';
import type { OAuthHelpers } from '@cloudflare/workers-oauth-provider';
import { ServerConfig } from '.';

export type Bindings = Env & {
  OAUTH_PROVIDER: OAuthHelpers;
};

export function makeOAuthConsent(config: ServerConfig) {
  const app = new Hono<{
    Bindings: Bindings;
  }>();

  // Render a reasonable home page just to show the app is up
  app.get('/', async (c) => {
    const content = await homeContent(c.req.raw);
    return c.html(layout(content, 'Home', config));
  });

  // The /authorize page has a form that will POST to /approve
  app.get('/authorize', async (c) => {
    const oauthReqInfo = await c.env.OAUTH_PROVIDER.parseAuthRequest(c.req.raw);

    const content = await renderLoggedOutAuthorizeScreen(config, oauthReqInfo);
    return c.html(layout(content, 'Authorization', config));
  });

  // This endpoint is responsible for validating any login information and
  // then completing the authorization request with the OAUTH_PROVIDER
  app.post('/approve', async (c) => {
    const { action, oauthReqInfo, clientProps } = await parseApproveFormBody(await c.req.parseBody(), config);

    if (action !== 'login_approve') {
      return c.html(
        layout(
          await renderAuthorizationRejectedContent(oauthReqInfo?.redirectUri || ''),
          'Authorization Status',
          config,
        ),
      );
    }

    if (!oauthReqInfo || !clientProps) {
      return c.html('INVALID LOGIN', 401);
    }

    // We don't have a real user ID, just tokens, so we generate a random one
    // Make this some stable ID if you want to look up the user's grants later.
    const generatedUserId = crypto.randomUUID();

    const { redirectTo } = await c.env.OAUTH_PROVIDER.completeAuthorization({
      request: oauthReqInfo,
      userId: generatedUserId,
      metadata: {},
      scope: oauthReqInfo.scope,
      props: {
        clientProps,
      },
    });

    return c.html(
      layout(await renderAuthorizationApprovedContent(redirectTo), 'Authorization Status', config),
    );
  });

  // Render the authorize screen for demoing the OAuth flow (it won't actually log in)
  app.get('/demo', async (c) => {
    const content = await renderLoggedOutAuthorizeScreen(config, {} as any);
    return c.html(layout(content, 'Authorization', config));
  });

  // Add a resource server .well-known to point clients to the correct auth server
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Max-Age': '86400',
  };
  app.options('/.well-known/oauth-protected-resource', async (c) => {
    Object.entries(corsHeaders).forEach(([key, value]) => c.header(key, value));
    return c.body(null, 204);
  });
  app.get('/.well-known/oauth-protected-resource', async (c) => {
    Object.entries(corsHeaders).forEach(([key, value]) => c.header(key, value));
    const baseURL = new URL('/', c.req.url).toString();
    return c.json({
      resource: baseURL,
      authorization_servers: [baseURL],
    });
  });

  return app;
}
