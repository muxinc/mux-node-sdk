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
      "args": ["-y", "@mux/mcp@latest", "--client=claude", "--tools=dynamic"],
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

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

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

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "@mux/mcp/server";

// import a specific tool
import createVideoAssets from "@mux/mcp/tools/video/assets/create-video-assets";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createVideoAssets, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `video.assets`:

- `create_video_assets` (`write`): Create a new Mux Video asset.
- `retrieve_video_assets` (`read`): Retrieves the details of an asset that has previously been created. Supply the unique asset ID that was returned from your previous request, and Mux will return the corresponding asset information. The same information is returned when creating an asset.
- `update_video_assets` (`write`): Updates the details of an already-created Asset with the provided Asset ID. This currently supports only the `passthrough` field.
- `list_video_assets` (`read`): List all Mux assets.
- `create_playback_id_video_assets` (`write`): Creates a playback ID that can be used to stream the asset to a viewer.
- `create_static_rendition_video_assets` (`write`): Creates a static rendition (i.e. MP4) for an asset
- `create_track_video_assets` (`write`): Adds an asset track (for example, subtitles, or an alternate audio track) to an asset. Assets must be in the `ready` state before tracks can be added.
- `delete_playback_id_video_assets` (`write`): Deletes a playback ID, rendering it nonfunctional for viewing an asset's video content. Please note that deleting the playback ID removes access to the underlying asset; a viewer who started playback before the playback ID was deleted may be able to watch the entire video for a limited duration.
- `delete_static_rendition_video_assets` (`write`): Deletes a single static rendition for an asset
- `delete_track_video_assets` (`write`): Removes a text or additional audio track from an asset. Neither video nor the primary audio track can be removed.
- `generate_subtitles_video_assets` (`write`): Generates subtitles (captions) for a given audio track. This API can be used for up to 7 days after an asset is created.
- `retrieve_input_info_video_assets` (`read`): Returns a list of the input objects that were used to create the asset along with any settings that were applied to each input.
- `retrieve_playback_id_video_assets` (`read`): Retrieves information about the specified playback ID.
- `update_master_access_video_assets` (`write`): Allows you to add temporary access to the master (highest-quality) version of the asset in MP4 format. A URL will be created that can be used to download the master version for 24 hours. After 24 hours Master Access will revert to "none".
  This master version is not optimized for web and not meant to be streamed, only downloaded for purposes like archiving or editing the video offline.
- `update_mp4_support_video_assets` (`write`): This method has been deprecated. Please see the [Static Rendition API](https://www.mux.com/docs/guides/enable-static-mp4-renditions#after-asset-creation).
  Allows you to add or remove mp4 support for assets that were created without it. The values supported are `capped-1080p`, `audio-only`, `audio-only,capped-1080p`, `standard`(deprecated), and `none`. `none` means that an asset _does not_ have mp4 support, so submitting a request with `mp4_support` set to `none` will delete the mp4 assets from the asset in question.

### Resource `video.delivery_usage`:

- `list_video_delivery_usage` (`read`): Returns a list of delivery usage records and their associated Asset IDs or Live Stream IDs.

### Resource `video.live_streams`:

- `create_video_live_streams` (`write`): Creates a new live stream. Once created, an encoder can connect to Mux via the specified stream key and begin streaming to an audience.
- `retrieve_video_live_streams` (`read`): Retrieves the details of a live stream that has previously been created. Supply the unique live stream ID that was returned from your previous request, and Mux will return the corresponding live stream information. The same information is returned when creating a live stream.
- `update_video_live_streams` (`write`): Updates the parameters of a previously-created live stream. This currently supports a subset of variables. Supply the live stream ID and the updated parameters and Mux will return the corresponding live stream information. The information returned will be the same after update as for subsequent get live stream requests.
- `list_video_live_streams` (`read`): Lists the live streams that currently exist in the current environment.
- `complete_video_live_streams` (`write`): (Optional) End the live stream recording immediately instead of waiting for the reconnect_window. `EXT-X-ENDLIST` tag is added to the HLS manifest which notifies the player that this live stream is over.

  Mux does not close the encoder connection immediately. Encoders are often configured to re-establish connections immediately which would result in a new recorded asset. For this reason, Mux waits for 60s before closing the connection with the encoder. This 60s timeframe is meant to give encoder operators a chance to disconnect from their end.

- `create_playback_id_video_live_streams` (`write`): Create a new playback ID for this live stream, through which a viewer can watch the streamed content of the live stream.
- `create_simulcast_target_video_live_streams` (`write`): Create a simulcast target for the parent live stream. Simulcast target can only be created when the parent live stream is in idle state. Only one simulcast target can be created at a time with this API.
- `delete_new_asset_settings_static_renditions_video_live_streams` (`write`): Deletes a live stream's static renditions settings for new assets. Further assets made via this live stream will not create static renditions unless re-added.
- `delete_playback_id_video_live_streams` (`write`): Deletes the playback ID for the live stream. This will not disable ingest (as the live stream still exists). New attempts to play back the live stream will fail immediately. However, current viewers will be able to continue watching the stream for some period of time.
- `delete_simulcast_target_video_live_streams` (`write`): Delete the simulcast target using the simulcast target ID returned when creating the simulcast target. Simulcast Target can only be deleted when the parent live stream is in idle state.
- `disable_video_live_streams` (`write`): Disables a live stream, making it reject incoming RTMP streams until re-enabled. The API also ends the live stream recording immediately when active. Ending the live stream recording adds the `EXT-X-ENDLIST` tag to the HLS manifest which notifies the player that this live stream is over.

  Mux also closes the encoder connection immediately. Any attempt from the encoder to re-establish connection will fail till the live stream is re-enabled.

- `enable_video_live_streams` (`write`): Enables a live stream, allowing it to accept an incoming RTMP stream.
- `reset_stream_key_video_live_streams` (`write`): Reset a live stream key if you want to immediately stop the current stream key from working and create a new stream key that can be used for future broadcasts.
- `retrieve_playback_id_video_live_streams` (`read`): Fetches information about a live stream's playback ID, through which a viewer can watch the streamed content from this live stream.
- `retrieve_simulcast_target_video_live_streams` (`read`): Retrieves the details of the simulcast target created for the parent live stream. Supply the unique live stream ID and simulcast target ID that was returned in the response of create simulcast target request, and Mux will return the corresponding information.
- `update_embedded_subtitles_video_live_streams` (`write`): Configures a live stream to receive embedded closed captions.
  The resulting Asset's subtitle text track will have `closed_captions: true` set.
- `update_generated_subtitles_video_live_streams` (`write`): Updates a live stream's automatic-speech-recognition-generated subtitle configuration.
  Automatic speech recognition subtitles can be removed by sending an empty array in the
  request payload.
- `update_new_asset_settings_static_renditions_video_live_streams` (`write`): Updates a live stream's static renditions settings for new assets. Further assets made via this live stream will create static renditions per the settings provided. You must provide all static renditions desired.

### Resource `video.playback_ids`:

- `retrieve_video_playback_ids` (`read`): Retrieves the Identifier of the Asset or Live Stream associated with the Playback ID.

### Resource `video.playback_restrictions`:

- `create_video_playback_restrictions` (`write`): Create a new Playback Restriction.
- `retrieve_video_playback_restrictions` (`read`): Retrieves a Playback Restriction associated with the unique identifier.
- `list_video_playback_restrictions` (`read`): Returns a list of all Playback Restrictions.
- `delete_video_playback_restrictions` (`write`): Deletes a single Playback Restriction.
- `update_referrer_video_playback_restrictions` (`write`): Allows you to modify the list of domains or change how Mux validates playback requests without the `Referer` HTTP header. The Referrer restriction fully replaces the old list with this new list of domains.
- `update_user_agent_video_playback_restrictions` (`write`): Allows you to modify how Mux validates playback requests with different user agents. Please see [Using User-Agent HTTP header for validation](https://docs.mux.com/guides/secure-video-playback#using-user-agent-http-header-for-validation) for more details on this feature.

### Resource `video.transcription_vocabularies`:

- `create_video_transcription_vocabularies` (`write`): Create a new Transcription Vocabulary.
- `retrieve_video_transcription_vocabularies` (`read`): Retrieves the details of a Transcription Vocabulary that has previously been created. Supply the unique Transcription Vocabulary ID and Mux will return the corresponding Transcription Vocabulary information. The same information is returned when creating a Transcription Vocabulary.
- `update_video_transcription_vocabularies` (`write`): Updates the details of a previously-created Transcription Vocabulary. Updates to Transcription Vocabularies are allowed while associated live streams are active. However, updates will not be applied to those streams while they are active.
- `list_video_transcription_vocabularies` (`read`): List all Transcription Vocabularies.
- `delete_video_transcription_vocabularies` (`write`): Deletes a Transcription Vocabulary. The Transcription Vocabulary's ID will be disassociated from any live streams using it. Transcription Vocabularies can be deleted while associated live streams are active. However, the words and phrases in the deleted Transcription Vocabulary will remain attached to those streams while they are active.

### Resource `video.uploads`:

- `create_video_uploads` (`write`): Creates a new direct upload, through which video content can be uploaded for ingest to Mux.
- `retrieve_video_uploads` (`read`): Fetches information about a single direct upload in the current environment.
- `list_video_uploads` (`read`): Lists direct uploads in the current environment.
- `cancel_video_uploads` (`write`): Cancels a direct upload and marks it as cancelled. If a pending upload finishes after this
  request, no asset will be created. This request will only succeed if the upload is still in
  the `waiting` state.

### Resource `video.drm_configurations`:

- `retrieve_video_drm_configurations` (`read`): Retrieves a single DRM Configuration.
- `list_video_drm_configurations` (`read`): Returns a list of DRM Configurations

### Resource `video.playback`:

- `animated_video_playback` (`read`): [Fetch an animated GIF or WebP image](https://docs.mux.com/guides/get-images-from-a-video#get-an-animated-gif-from-a-video) from a video segment with optional transformations.
- `hls_video_playback` (`read`): Fetch an HLS (HTTP Live Streaming) playlist for the specified video asset, with optional query parameters to [modify playback behavior](https://docs.mux.com/guides/modify-playback-behavior).
- `static_rendition_video_playback` (`read`): Fetch a static rendition (usually an MP4 or M4A file) of the specified video asset. [MP4 Support](https://docs.mux.com/guides/enable-static-mp4-renditions) must be enabled on the asset before using these URLs.
- `storyboard_video_playback` (`read`): Fetch a storyboard image composed of multiple thumbnails for use in [timeline hover previews](https://docs.mux.com/guides/create-timeline-hover-previews).
- `storyboard_meta_video_playback` (`read`): Fetch metadata for the [storyboard image in JSON format](https://docs.mux.com/guides/create-timeline-hover-previews#json), detailing the coordinates and time ranges of each thumbnail.
- `storyboard_vtt_video_playback` (`read`): Fetch metadata for the [storyboard image in WebVTT format](https://docs.mux.com/guides/create-timeline-hover-previews#webvtt), detailing the coordinates and time ranges of each thumbnail.
- `thumbnail_video_playback` (`read`): [Fetch a thumbnail image from a video](https://docs.mux.com/guides/get-images-from-a-video) at a specified time with optional transformations.
- `track_video_playback` (`read`): Fetch a standalone WebVTT version of a text track from an asset.
- `transcript_video_playback` (`read`): Fetch a [transcript of an asset](https://docs.mux.com/guides/add-autogenerated-captions-and-use-transcripts#retrieve-a-transcript). This is only possible for assets with a text track generated using the [VOD generated captions feature](https://docs.mux.com/guides/add-autogenerated-captions-and-use-transcripts).

### Resource `data.dimensions`:

- `list_data_dimensions` (`read`): List all available dimensions.

  Note: This API replaces the list-filters API call.

- `list_trace_elements_data_dimensions` (`read`): Lists the elements (values) for a trace dimension along with their total counts.
  This endpoint is specifically designed for trace dimensions like video_cdn_trace
  that contain arrays of values.
- `list_values_data_dimensions` (`read`): Lists the values for a dimension along with a total count of related views.

  Note: This API replaces the list-filter-values API call.

### Resource `data.monitoring`:

- `list_dimensions_data_monitoring` (`read`): Lists available monitoring dimensions.

### Resource `data.monitoring.metrics`:

- `list_monitoring_data_metrics` (`read`): Lists available monitoring metrics.
- `get_breakdown_monitoring_data_metrics` (`read`): Gets breakdown information for a specific dimension and metric along with the number of concurrent viewers and negative impact score.
- `get_breakdown_timeseries_monitoring_data_metrics` (`read`): Gets timeseries of breakdown information for a specific dimension and metric. Each datapoint in the response represents 5 seconds worth of data.
- `get_histogram_timeseries_monitoring_data_metrics` (`read`): Gets histogram timeseries information for a specific metric.
- `get_timeseries_monitoring_data_metrics` (`read`): Gets Time series information for a specific metric along with the number of concurrent viewers.

### Resource `data.errors`:

- `list_data_errors` (`read`): Returns a list of errors.

### Resource `data.exports`:

- `list_video_views_data_exports` (`read`): Lists the available video view exports along with URLs to retrieve them.

### Resource `data.filters`:

- `list_values_data_filters` (`read`): The API has been replaced by the list-dimension-values API call.

  Lists the values for a filter along with a total count of related views.

### Resource `data.incidents`:

- `retrieve_data_incidents` (`read`): Returns the details of an incident.
- `list_data_incidents` (`read`): Returns a list of incidents.
- `list_related_data_incidents` (`read`): Returns all the incidents that seem related to a specific incident.

### Resource `data.metrics`:

- `list_data_metrics` (`read`): List all of the values across every breakdown for a specific metric.
- `get_insights_data_metrics` (`read`): Returns a list of insights for a metric. These are the worst performing values across all breakdowns sorted by how much they negatively impact a specific metric.
- `get_overall_values_data_metrics` (`read`): Returns the overall value for a specific metric, as well as the total view count, watch time, and the Mux Global metric value for the metric.
- `get_timeseries_data_metrics` (`read`): Returns timeseries data for a specific metric.

  Each interval represented in the data array contains an array with the following values:

  - the first element is the interval time
  - the second element is the calculated metric value
  - the third element is the number of views in the interval that have a valid metric value

- `list_breakdown_values_data_metrics` (`read`): List the breakdown values for a specific metric.

### Resource `data.real_time`:

- `list_dimensions_data_real_time` (`read`): Lists available real-time dimensions. This API is now deprecated, please use the `List Monitoring Dimensions` API.
- `list_metrics_data_real_time` (`read`): Lists available real-time metrics. This API is now deprecated, please use the `List Monitoring Metrics` API.
- `retrieve_breakdown_data_real_time` (`read`): Gets breakdown information for a specific dimension and metric along with the number of concurrent viewers and negative impact score. This API is now deprecated, please use the `Get Monitoring Breakdown` API.
- `retrieve_histogram_timeseries_data_real_time` (`read`): Gets histogram timeseries information for a specific metric. This API is now deprecated, please use the `Get Monitoring Histogram Timeseries` API.
- `retrieve_timeseries_data_real_time` (`read`): Gets Time series information for a specific metric along with the number of concurrent viewers. This API is now deprecated, please use the `Get Monitoring Timeseries` API.

### Resource `data.video_views`:

- `retrieve_data_video_views` (`read`): Returns the details of a video view.
- `list_data_video_views` (`read`): Returns a list of video views which match the filters and have a `view_end` within the specified timeframe.

### Resource `data.annotations`:

- `create_data_annotations` (`write`): Creates a new annotation.
- `retrieve_data_annotations` (`read`): Returns the details of a specific annotation.
- `update_data_annotations` (`write`): Updates an existing annotation.
- `list_data_annotations` (`read`): Returns a list of annotations.
- `delete_data_annotations` (`write`): Deletes an annotation.

### Resource `system.signing_keys`:

- `create_system_signing_keys` (`write`): Creates a new signing key pair. When creating a new signing key, the API will generate a 2048-bit RSA key-pair and return the private key and a generated key-id; the public key will be stored at Mux to validate signed tokens.
- `retrieve_system_signing_keys` (`read`): Retrieves the details of a signing key that has previously
  been created. Supply the unique signing key ID that was returned from your
  previous request, and Mux will return the corresponding signing key information.
  **The private key is not returned in this response.**
- `list_system_signing_keys` (`read`): Returns a list of signing keys.
- `delete_system_signing_keys` (`write`): Deletes an existing signing key. Use with caution, as this will invalidate any existing signatures and no JWTs can be signed using the key again.

### Resource `system.utilities`:

- `whoami_system_utilities` (`read`): Retrieve information about your current access token, including organization, environment, and permissions. Note that this can only be access with an access token, and _all_ access tokens can access this route, regardless of what permissions they have assigned.
