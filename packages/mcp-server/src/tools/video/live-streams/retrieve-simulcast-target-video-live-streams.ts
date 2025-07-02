// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'video.live_streams',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}',
  operationId: 'get-live-stream-simulcast-target',
};

export const tool: Tool = {
  name: 'retrieve_simulcast_target_video_live_streams',
  description:
    'Retrieves the details of the simulcast target created for the parent live stream. Supply the unique live stream ID and simulcast target ID that was returned in the response of create simulcast target request, and Mux will return the corresponding information.',
  inputSchema: {
    type: 'object',
    properties: {
      LIVE_STREAM_ID: {
        type: 'string',
      },
      SIMULCAST_TARGET_ID: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { LIVE_STREAM_ID, SIMULCAST_TARGET_ID, ...body } = args as any;
  return asTextContentResult(
    await client.video.liveStreams.retrieveSimulcastTarget(LIVE_STREAM_ID, SIMULCAST_TARGET_ID),
  );
};

export default { metadata, tool, handler };
