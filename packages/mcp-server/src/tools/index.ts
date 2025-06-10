// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_video_assets from './video/assets/create-video-assets';
import retrieve_video_assets from './video/assets/retrieve-video-assets';
import update_video_assets from './video/assets/update-video-assets';
import list_video_assets from './video/assets/list-video-assets';
import delete_video_assets from './video/assets/delete-video-assets';
import create_playback_id_video_assets from './video/assets/create-playback-id-video-assets';
import create_static_rendition_video_assets from './video/assets/create-static-rendition-video-assets';
import create_track_video_assets from './video/assets/create-track-video-assets';
import delete_playback_id_video_assets from './video/assets/delete-playback-id-video-assets';
import delete_static_rendition_video_assets from './video/assets/delete-static-rendition-video-assets';
import delete_track_video_assets from './video/assets/delete-track-video-assets';
import generate_subtitles_video_assets from './video/assets/generate-subtitles-video-assets';
import retrieve_input_info_video_assets from './video/assets/retrieve-input-info-video-assets';
import retrieve_playback_id_video_assets from './video/assets/retrieve-playback-id-video-assets';
import update_master_access_video_assets from './video/assets/update-master-access-video-assets';
import update_mp4_support_video_assets from './video/assets/update-mp4-support-video-assets';
import list_video_delivery_usage from './video/delivery-usage/list-video-delivery-usage';
import create_video_live_streams from './video/live-streams/create-video-live-streams';
import retrieve_video_live_streams from './video/live-streams/retrieve-video-live-streams';
import update_video_live_streams from './video/live-streams/update-video-live-streams';
import list_video_live_streams from './video/live-streams/list-video-live-streams';
import delete_video_live_streams from './video/live-streams/delete-video-live-streams';
import complete_video_live_streams from './video/live-streams/complete-video-live-streams';
import create_playback_id_video_live_streams from './video/live-streams/create-playback-id-video-live-streams';
import create_simulcast_target_video_live_streams from './video/live-streams/create-simulcast-target-video-live-streams';
import delete_new_asset_settings_static_renditions_video_live_streams from './video/live-streams/delete-new-asset-settings-static-renditions-video-live-streams';
import delete_playback_id_video_live_streams from './video/live-streams/delete-playback-id-video-live-streams';
import delete_simulcast_target_video_live_streams from './video/live-streams/delete-simulcast-target-video-live-streams';
import disable_video_live_streams from './video/live-streams/disable-video-live-streams';
import enable_video_live_streams from './video/live-streams/enable-video-live-streams';
import reset_stream_key_video_live_streams from './video/live-streams/reset-stream-key-video-live-streams';
import retrieve_playback_id_video_live_streams from './video/live-streams/retrieve-playback-id-video-live-streams';
import retrieve_simulcast_target_video_live_streams from './video/live-streams/retrieve-simulcast-target-video-live-streams';
import update_embedded_subtitles_video_live_streams from './video/live-streams/update-embedded-subtitles-video-live-streams';
import update_generated_subtitles_video_live_streams from './video/live-streams/update-generated-subtitles-video-live-streams';
import update_new_asset_settings_static_renditions_video_live_streams from './video/live-streams/update-new-asset-settings-static-renditions-video-live-streams';
import retrieve_video_playback_ids from './video/playback-ids/retrieve-video-playback-ids';
import create_video_playback_restrictions from './video/playback-restrictions/create-video-playback-restrictions';
import retrieve_video_playback_restrictions from './video/playback-restrictions/retrieve-video-playback-restrictions';
import list_video_playback_restrictions from './video/playback-restrictions/list-video-playback-restrictions';
import delete_video_playback_restrictions from './video/playback-restrictions/delete-video-playback-restrictions';
import update_referrer_video_playback_restrictions from './video/playback-restrictions/update-referrer-video-playback-restrictions';
import update_user_agent_video_playback_restrictions from './video/playback-restrictions/update-user-agent-video-playback-restrictions';
import create_video_transcription_vocabularies from './video/transcription-vocabularies/create-video-transcription-vocabularies';
import retrieve_video_transcription_vocabularies from './video/transcription-vocabularies/retrieve-video-transcription-vocabularies';
import update_video_transcription_vocabularies from './video/transcription-vocabularies/update-video-transcription-vocabularies';
import list_video_transcription_vocabularies from './video/transcription-vocabularies/list-video-transcription-vocabularies';
import delete_video_transcription_vocabularies from './video/transcription-vocabularies/delete-video-transcription-vocabularies';
import create_video_uploads from './video/uploads/create-video-uploads';
import retrieve_video_uploads from './video/uploads/retrieve-video-uploads';
import list_video_uploads from './video/uploads/list-video-uploads';
import cancel_video_uploads from './video/uploads/cancel-video-uploads';
import create_video_web_inputs from './video/web-inputs/create-video-web-inputs';
import retrieve_video_web_inputs from './video/web-inputs/retrieve-video-web-inputs';
import list_video_web_inputs from './video/web-inputs/list-video-web-inputs';
import delete_video_web_inputs from './video/web-inputs/delete-video-web-inputs';
import launch_video_web_inputs from './video/web-inputs/launch-video-web-inputs';
import reload_video_web_inputs from './video/web-inputs/reload-video-web-inputs';
import shutdown_video_web_inputs from './video/web-inputs/shutdown-video-web-inputs';
import update_url_video_web_inputs from './video/web-inputs/update-url-video-web-inputs';
import retrieve_video_drm_configurations from './video/drm-configurations/retrieve-video-drm-configurations';
import list_video_drm_configurations from './video/drm-configurations/list-video-drm-configurations';
import list_data_dimensions from './data/dimensions/list-data-dimensions';
import list_values_data_dimensions from './data/dimensions/list-values-data-dimensions';
import list_dimensions_data_monitoring from './data/monitoring/list-dimensions-data-monitoring';
import list_monitoring_data_metrics from './data/monitoring/metrics/list-monitoring-data-metrics';
import get_breakdown_monitoring_data_metrics from './data/monitoring/metrics/get-breakdown-monitoring-data-metrics';
import get_breakdown_timeseries_monitoring_data_metrics from './data/monitoring/metrics/get-breakdown-timeseries-monitoring-data-metrics';
import get_histogram_timeseries_monitoring_data_metrics from './data/monitoring/metrics/get-histogram-timeseries-monitoring-data-metrics';
import get_timeseries_monitoring_data_metrics from './data/monitoring/metrics/get-timeseries-monitoring-data-metrics';
import list_data_errors from './data/errors/list-data-errors';
import list_video_views_data_exports from './data/exports/list-video-views-data-exports';
import list_values_data_filters from './data/filters/list-values-data-filters';
import retrieve_data_incidents from './data/incidents/retrieve-data-incidents';
import list_data_incidents from './data/incidents/list-data-incidents';
import list_related_data_incidents from './data/incidents/list-related-data-incidents';
import list_data_metrics from './data/metrics/list-data-metrics';
import get_insights_data_metrics from './data/metrics/get-insights-data-metrics';
import get_overall_values_data_metrics from './data/metrics/get-overall-values-data-metrics';
import get_timeseries_data_metrics from './data/metrics/get-timeseries-data-metrics';
import list_breakdown_values_data_metrics from './data/metrics/list-breakdown-values-data-metrics';
import list_dimensions_data_real_time from './data/real-time/list-dimensions-data-real-time';
import list_metrics_data_real_time from './data/real-time/list-metrics-data-real-time';
import retrieve_breakdown_data_real_time from './data/real-time/retrieve-breakdown-data-real-time';
import retrieve_histogram_timeseries_data_real_time from './data/real-time/retrieve-histogram-timeseries-data-real-time';
import retrieve_timeseries_data_real_time from './data/real-time/retrieve-timeseries-data-real-time';
import retrieve_data_video_views from './data/video-views/retrieve-data-video-views';
import list_data_video_views from './data/video-views/list-data-video-views';
import create_data_annotations from './data/annotations/create-data-annotations';
import retrieve_data_annotations from './data/annotations/retrieve-data-annotations';
import update_data_annotations from './data/annotations/update-data-annotations';
import list_data_annotations from './data/annotations/list-data-annotations';
import delete_data_annotations from './data/annotations/delete-data-annotations';
import create_system_signing_keys from './system/signing-keys/create-system-signing-keys';
import retrieve_system_signing_keys from './system/signing-keys/retrieve-system-signing-keys';
import list_system_signing_keys from './system/signing-keys/list-system-signing-keys';
import delete_system_signing_keys from './system/signing-keys/delete-system-signing-keys';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_video_assets);
addEndpoint(retrieve_video_assets);
addEndpoint(update_video_assets);
addEndpoint(list_video_assets);
addEndpoint(delete_video_assets);
addEndpoint(create_playback_id_video_assets);
addEndpoint(create_static_rendition_video_assets);
addEndpoint(create_track_video_assets);
addEndpoint(delete_playback_id_video_assets);
addEndpoint(delete_static_rendition_video_assets);
addEndpoint(delete_track_video_assets);
addEndpoint(generate_subtitles_video_assets);
addEndpoint(retrieve_input_info_video_assets);
addEndpoint(retrieve_playback_id_video_assets);
addEndpoint(update_master_access_video_assets);
addEndpoint(update_mp4_support_video_assets);
addEndpoint(list_video_delivery_usage);
addEndpoint(create_video_live_streams);
addEndpoint(retrieve_video_live_streams);
addEndpoint(update_video_live_streams);
addEndpoint(list_video_live_streams);
addEndpoint(delete_video_live_streams);
addEndpoint(complete_video_live_streams);
addEndpoint(create_playback_id_video_live_streams);
addEndpoint(create_simulcast_target_video_live_streams);
addEndpoint(delete_new_asset_settings_static_renditions_video_live_streams);
addEndpoint(delete_playback_id_video_live_streams);
addEndpoint(delete_simulcast_target_video_live_streams);
addEndpoint(disable_video_live_streams);
addEndpoint(enable_video_live_streams);
addEndpoint(reset_stream_key_video_live_streams);
addEndpoint(retrieve_playback_id_video_live_streams);
addEndpoint(retrieve_simulcast_target_video_live_streams);
addEndpoint(update_embedded_subtitles_video_live_streams);
addEndpoint(update_generated_subtitles_video_live_streams);
addEndpoint(update_new_asset_settings_static_renditions_video_live_streams);
addEndpoint(retrieve_video_playback_ids);
addEndpoint(create_video_playback_restrictions);
addEndpoint(retrieve_video_playback_restrictions);
addEndpoint(list_video_playback_restrictions);
addEndpoint(delete_video_playback_restrictions);
addEndpoint(update_referrer_video_playback_restrictions);
addEndpoint(update_user_agent_video_playback_restrictions);
addEndpoint(create_video_transcription_vocabularies);
addEndpoint(retrieve_video_transcription_vocabularies);
addEndpoint(update_video_transcription_vocabularies);
addEndpoint(list_video_transcription_vocabularies);
addEndpoint(delete_video_transcription_vocabularies);
addEndpoint(create_video_uploads);
addEndpoint(retrieve_video_uploads);
addEndpoint(list_video_uploads);
addEndpoint(cancel_video_uploads);
addEndpoint(create_video_web_inputs);
addEndpoint(retrieve_video_web_inputs);
addEndpoint(list_video_web_inputs);
addEndpoint(delete_video_web_inputs);
addEndpoint(launch_video_web_inputs);
addEndpoint(reload_video_web_inputs);
addEndpoint(shutdown_video_web_inputs);
addEndpoint(update_url_video_web_inputs);
addEndpoint(retrieve_video_drm_configurations);
addEndpoint(list_video_drm_configurations);
addEndpoint(list_data_dimensions);
addEndpoint(list_values_data_dimensions);
addEndpoint(list_dimensions_data_monitoring);
addEndpoint(list_monitoring_data_metrics);
addEndpoint(get_breakdown_monitoring_data_metrics);
addEndpoint(get_breakdown_timeseries_monitoring_data_metrics);
addEndpoint(get_histogram_timeseries_monitoring_data_metrics);
addEndpoint(get_timeseries_monitoring_data_metrics);
addEndpoint(list_data_errors);
addEndpoint(list_video_views_data_exports);
addEndpoint(list_values_data_filters);
addEndpoint(retrieve_data_incidents);
addEndpoint(list_data_incidents);
addEndpoint(list_related_data_incidents);
addEndpoint(list_data_metrics);
addEndpoint(get_insights_data_metrics);
addEndpoint(get_overall_values_data_metrics);
addEndpoint(get_timeseries_data_metrics);
addEndpoint(list_breakdown_values_data_metrics);
addEndpoint(list_dimensions_data_real_time);
addEndpoint(list_metrics_data_real_time);
addEndpoint(retrieve_breakdown_data_real_time);
addEndpoint(retrieve_histogram_timeseries_data_real_time);
addEndpoint(retrieve_timeseries_data_real_time);
addEndpoint(retrieve_data_video_views);
addEndpoint(list_data_video_views);
addEndpoint(create_data_annotations);
addEndpoint(retrieve_data_annotations);
addEndpoint(update_data_annotations);
addEndpoint(list_data_annotations);
addEndpoint(delete_data_annotations);
addEndpoint(create_system_signing_keys);
addEndpoint(retrieve_system_signing_keys);
addEndpoint(list_system_signing_keys);
addEndpoint(delete_system_signing_keys);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
