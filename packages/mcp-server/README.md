# Mux TypeScript MCP Server

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:stainless-sdks/mux-typescript.git
cd mux-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export MUX_TOKEN_ID="my token id"
export MUX_TOKEN_SECRET="my secret"
export MUX_WEBHOOK_SECRET="My Webhook Secret"
export MUX_SIGNING_KEY="My Jwt Signing Key"
export MUX_PRIVATE_KEY="My Jwt Private Key"
export MUX_AUTHORIZATION_TOKEN="my authorization token"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y @mux/mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "mux_mux_node_api": {
      "command": "node",
      "args": ["/path/to/local/mux-typescript/packages/mcp-server"],
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
| `x-mux-token-id` | `tokenID` | accessToken |
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
