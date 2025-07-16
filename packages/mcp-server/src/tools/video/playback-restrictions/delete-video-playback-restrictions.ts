// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.playback_restrictions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}',
  operationId: 'delete-playback-restriction',
};

export const tool: Tool = {
  name: 'delete_video_playback_restrictions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes a single Playback Restriction.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      PLAYBACK_RESTRICTION_ID: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { PLAYBACK_RESTRICTION_ID, ...body } = args as any;
  const response = await client.video.playbackRestrictions.delete(PLAYBACK_RESTRICTION_ID).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
