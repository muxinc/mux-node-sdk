// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the details of the simulcast target created for the parent live stream. Supply the unique live stream ID and simulcast target ID that was returned in the response of create simulcast target request, and Mux will return the corresponding information.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/simulcast_target'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    simulcast_target: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'ID of the Simulcast Target'\n        },\n        status: {\n          type: 'string',\n          description: 'The current status of the simulcast target. See Statuses below for detailed description.\\n  * `idle`: Default status. When the parent live stream is in disconnected status, simulcast targets will be idle state.\\n  * `starting`: The simulcast target transitions into this state when the parent live stream transition into connected state.\\n  * `broadcasting`: The simulcast target has successfully connected to the third party live streaming service and is pushing video to that service.\\n  * `errored`: The simulcast target encountered an error either while attempting to connect to the third party live streaming service, or mid-broadcasting. When a simulcast target has this status it will have an `error_severity` field with more details about the error.',\n          enum: [            'idle',\n            'starting',\n            'broadcasting',\n            'errored'\n          ]\n        },\n        url: {\n          type: 'string',\n          description: 'The RTMP(s) or SRT endpoint for a simulcast destination.\\n* For RTMP(s) destinations, this should include the application name for the third party live streaming service, for example: `rtmp://live.example.com/app`.\\n* For SRT destinations, this should be a fully formed SRT connection string, for example: `srt://srt-live.example.com:1234?streamid={stream_key}&passphrase={srt_passphrase}`.\\n\\nNote: SRT simulcast targets can only be used when an source is connected over SRT.\\n'\n        },\n        error_severity: {\n          type: 'string',\n          description: 'The severity of the error encountered by the simulcast target.\\nThis field is only set when the simulcast target is in the `errored` status.\\nSee the values of severities below and their descriptions.\\n  * `normal`: The simulcast target encountered an error either while attempting to connect to the third party live streaming service, or mid-broadcasting. A simulcast may transition back into the broadcasting state if a connection with the service can be re-established.\\n  * `fatal`: The simulcast target is incompatible with the current input to the parent live stream. No further attempts to this simulcast target will be made for the current live stream asset.',\n          enum: [            'normal',\n            'fatal'\n          ]\n        },\n        passthrough: {\n          type: 'string',\n          description: 'Arbitrary user-supplied metadata set when creating a simulcast target.'\n        },\n        stream_key: {\n          type: 'string',\n          description: 'Stream Key represents a stream identifier on the third party live streaming service to send the parent live stream to. Only used for RTMP(s) simulcast destinations.'\n        }\n      },\n      required: [        'id',\n        'status',\n        'url'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      LIVE_STREAM_ID: {
        type: 'string',
      },
      SIMULCAST_TARGET_ID: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['LIVE_STREAM_ID', 'SIMULCAST_TARGET_ID'],
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const { LIVE_STREAM_ID, SIMULCAST_TARGET_ID, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      args,
      await client.video.liveStreams.retrieveSimulcastTarget(LIVE_STREAM_ID, SIMULCAST_TARGET_ID),
    ),
  );
};

export default { metadata, tool, handler };
