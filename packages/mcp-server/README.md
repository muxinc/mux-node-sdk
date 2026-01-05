# Mux Node MCP Server

## Installation


### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "mux": {
      "command": "npx",
      "args": ["-y", "@mux/mcp@latest"],
      "env": {
        "MUX_TOKEN_ID": "my token id",
        "MUX_TOKEN_SECRET": "my secret",
        "MUX_WEBHOOK_SECRET": "My Webhook Secret",
        "MUX_SIGNING_KEY": "My Jwt Signing Key",
        "MUX_PRIVATE_KEY": "My Jwt Private Key",
        "MUX_AUTHORIZATION_TOKEN": "my authorization token"
      }
    }
  }
}
```

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40mux%2Fmcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBtdXgvbWNwIl0sImVudiI6eyJNVVhfVE9LRU5fSUQiOiJTZXQgeW91ciBNVVhfVE9LRU5fSUQgaGVyZS4iLCJNVVhfVE9LRU5fU0VDUkVUIjoiU2V0IHlvdXIgTVVYX1RPS0VOX1NFQ1JFVCBoZXJlLiIsIk1VWF9XRUJIT09LX1NFQ1JFVCI6IlNldCB5b3VyIE1VWF9XRUJIT09LX1NFQ1JFVCBoZXJlLiIsIk1VWF9TSUdOSU5HX0tFWSI6IlNldCB5b3VyIE1VWF9TSUdOSU5HX0tFWSBoZXJlLiIsIk1VWF9QUklWQVRFX0tFWSI6IlNldCB5b3VyIE1VWF9QUklWQVRFX0tFWSBoZXJlLiIsIk1VWF9BVVRIT1JJWkFUSU9OX1RPS0VOIjoiU2V0IHlvdXIgTVVYX0FVVEhPUklaQVRJT05fVE9LRU4gaGVyZS4ifX0)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40mux%2Fmcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40mux%2Fmcp%22%5D%2C%22env%22%3A%7B%22MUX_TOKEN_ID%22%3A%22Set%20your%20MUX_TOKEN_ID%20here.%22%2C%22MUX_TOKEN_SECRET%22%3A%22Set%20your%20MUX_TOKEN_SECRET%20here.%22%2C%22MUX_WEBHOOK_SECRET%22%3A%22Set%20your%20MUX_WEBHOOK_SECRET%20here.%22%2C%22MUX_SIGNING_KEY%22%3A%22Set%20your%20MUX_SIGNING_KEY%20here.%22%2C%22MUX_PRIVATE_KEY%22%3A%22Set%20your%20MUX_PRIVATE_KEY%20here.%22%2C%22MUX_AUTHORIZATION_TOKEN%22%3A%22Set%20your%20MUX_AUTHORIZATION_TOKEN%20here.%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add mux_mcp_api --env MUX_TOKEN_ID="Your MUX_TOKEN_ID here." MUX_TOKEN_SECRET="Your MUX_TOKEN_SECRET here." MUX_WEBHOOK_SECRET="Your MUX_WEBHOOK_SECRET here." MUX_SIGNING_KEY="Your MUX_SIGNING_KEY here." MUX_PRIVATE_KEY="Your MUX_PRIVATE_KEY here." MUX_AUTHORIZATION_TOKEN="Your MUX_AUTHORIZATION_TOKEN here." -- npx -y @mux/mcp
```

## Code Mode

This MCP server is built on the "Code Mode" tool scheme. In this MCP Server,
your agent will write code against the TypeScript SDK, which will then be executed in an
isolated sandbox. To accomplish this, the server will expose two tools to your agent:

- The first tool is a docs search tool, which can be used to generically query for
  documentation about your API/SDK.

- The second tool is a code tool, where the agent can write code against the TypeScript SDK.
  The code will be executed in a sandbox environment without web or filesystem access. Then,
  anything the code returns or prints will be returned to the agent as the result of the
  tool call.

Using this scheme, agents are capable of performing very complex tasks deterministically
and repeatably.

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Basic or Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| --------------------------- | ------------------------ | ------------------ |
| `x-mux-token-id` | `tokenId` | accessToken |
| `x-mux-token-secret` | `tokenSecret` | accessToken |
| `x-mux-authorization-token` | `authorizationToken` | authorizationToken |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "mux_mux_node_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Basic <auth value>"
      }
    }
  }
}
```
