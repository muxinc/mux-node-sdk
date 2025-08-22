import { streamableHTTPApp } from '@mux/mcp/http';
import { McpOptions } from '@mux/mcp/options';

const defaults: McpOptions = {
  client: 'claude',
  filters: [],
  includeAllTools: false,
  includeDynamicTools: false,
};

console.log('cahnge');
const app = streamableHTTPApp(defaults);

export default app;
