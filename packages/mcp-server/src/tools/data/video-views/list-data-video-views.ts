// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@mux/mcp/filtering';
import { Metadata, asTextContentResult } from '@mux/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mux from '@mux/mux-node';

export const metadata: Metadata = {
  resource: 'data.video_views',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/v1/video-views',
  operationId: 'list-video-views',
};

export const tool: Tool = {
  name: 'list_data_video_views',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of video views which match the filters and have a `view_end` within the specified timeframe.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/abridged_video_view'\n      }\n    },\n    timeframe: {\n      type: 'array',\n      items: {\n        type: 'integer'\n      }\n    },\n    total_row_count: {\n      type: 'integer'\n    }\n  },\n  required: [    'data',\n    'timeframe',\n    'total_row_count'\n  ],\n  $defs: {\n    abridged_video_view: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        country_code: {\n          type: 'string'\n        },\n        error_type_id: {\n          type: 'integer'\n        },\n        playback_failure: {\n          type: 'boolean'\n        },\n        player_error_code: {\n          type: 'string'\n        },\n        player_error_message: {\n          type: 'string'\n        },\n        total_row_count: {\n          type: 'integer'\n        },\n        video_title: {\n          type: 'string'\n        },\n        view_end: {\n          type: 'string'\n        },\n        view_start: {\n          type: 'string'\n        },\n        viewer_application_name: {\n          type: 'string'\n        },\n        viewer_experience_score: {\n          type: 'number'\n        },\n        viewer_os_family: {\n          type: 'string'\n        },\n        watch_time: {\n          type: 'integer'\n        }\n      },\n      required: [        'id',\n        'country_code',\n        'error_type_id',\n        'playback_failure',\n        'player_error_code',\n        'player_error_message',\n        'total_row_count',\n        'video_title',\n        'view_end',\n        'view_start',\n        'viewer_application_name',\n        'viewer_experience_score',\n        'viewer_os_family',\n        'watch_time'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      error_id: {
        type: 'integer',
        description:
          'Filter video views by the provided error ID (as returned in the error_type_id field in the list video views endpoint). If you provide any as the error ID, this will filter the results to those with any error.',
      },
      filters: {
        type: 'array',
        description:
          'Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.\n\nTo exclude rows that match a certain condition, prepend a `!` character to the dimension.\n\nPossible filter names are the same as returned by the List Filters endpoint.\n\nExample:\n\n  * `filters[]=operating_system:windows&filters[]=!country:US`\n',
        items: {
          type: 'string',
        },
      },
      limit: {
        type: 'integer',
        description: 'Number of items to include in the response',
      },
      metric_filters: {
        type: 'array',
        description:
          'Limit the results to rows that match inequality conditions from provided metric comparison clauses. Must be provided as an array query string parameter.\n\nPossible filterable metrics are the same as the set of metric ids, with the exceptions of `exits_before_video_start`, `unique_viewers`, `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.\n\nExample:\n\n  * `metric_filters[]=aggregate_startup_time>=1000`\n',
        items: {
          type: 'string',
        },
      },
      order_direction: {
        type: 'string',
        description: 'Sort order.',
        enum: ['asc', 'desc'],
      },
      page: {
        type: 'integer',
        description: 'Offset by this many pages, of the size of `limit`',
      },
      timeframe: {
        type: 'array',
        description:
          'Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n',
        items: {
          type: 'string',
        },
      },
      viewer_id: {
        type: 'string',
        description:
          'Viewer ID to filter results by. This value may be provided by the integration, or may be created by Mux.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: Mux, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.data.videoViews.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
