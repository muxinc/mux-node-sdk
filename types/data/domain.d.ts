export interface ViewError {
    id: number;
    percentage?: number;
    notes?: string;
    message?: string;
    last_seen?: string;
    description?: string;
    count?: number;
    code?: number;
}
export interface ErrorsParams {
    filters?: Array<any>;
    array?: Array<any>;
}
export interface ErrorsListResponse {
    total_row_count: null;
    timeframe: Array<number>;
    data: Array<ViewError>;
}
export interface ExportsListResponse {
    total_row_count: number;
    timeframe: Array<number>;
    data: Array<string>;
}
export interface FilterQueryParams {
    filter_id: string;
    limit?: number;
    page?: number;
    filters?: Array<string>;
    timeframe?: Array<string>;
}
export interface FilterValue {
    value: string;
    total_count: number;
}
export declare interface FilterGetResponse {
    total_row_count: number;
    timeframe: Array<number>;
    data: Array<FilterValue>;
}
export interface Incident {
    id: string;
    threshold?: number;
    status: string;
    started_at: string;
    severity?: string;
    sample_size_unit?: string;
    sample_size?: number;
    resolved_at?: string;
    notifications?: Array<any>;
    notification_rules?: Array<any>;
    measurement?: string;
    measured_value_on_close?: number;
    measured_value?: number;
    incident_key?: string;
    impact?: string;
    error_description?: string;
    description?: string;
    breakdowns?: Array<any>;
    affected_views_per_hour_on_open?: number;
    affected_views_per_hour?: number;
    affected_views?: number;
}
export interface IncidentsQueryParams {
    limit?: number;
    page?: number;
    order_by?: string;
    order_direction?: string;
    status?: string;
}
export interface IncidentsRelatedQueryParams {
    limit?: number;
    page?: number;
    order_by?: string;
    order_direction?: string;
}
export declare interface IncidentsListResponse {
    total_row_count: number;
    timeframe: Array<number>;
    data: Array<Incident>;
}
export declare interface IncidentsGetResponse {
    total_row_count: number;
    timeframe: Array<number>;
    data: Incident;
}
export interface Metric {
    value?: number;
    type?: string;
    name?: string;
    metric?: string;
    measurement?: string;
}
export interface Insight {
    total_watch_time?: number;
    total_views?: number;
    negative_impact_score?: number;
    metric?: number;
    filter_value?: string;
    filter_column?: string;
}
export interface MetricsOverallValue {
    value?: number;
    total_watch_time?: number;
    total_views?: number;
    global_value?: number;
}
export interface MetricsBreakdownValue {
    views?: number;
    value?: number;
    total_watch_time?: number;
    negative_impact?: number;
    field?: string;
}
export interface MetricsComparisonValue {
    watch_time?: number;
    view_count?: number;
    name?: string;
    value?: number;
    metric?: string;
    items?: Array<Metric>;
}
export interface MetricsBreakdownQueryParams {
    group_by: string;
    measurement?: '95th' | 'median' | 'avg';
    filters?: Array<string>;
    limit?: number;
    page?: number;
    order_by?: 'negative_impact' | 'value' | 'views' | 'field';
    order_direction?: 'asc' | 'desc';
    timeframe?: Array<string>;
}
export interface MetricsComparisonQueryParams {
    value: string;
    dimension?: string;
    filters?: Array<string>;
    timeframe?: Array<string>;
}
export interface MetricsInsightsQueryParams {
    measurement?: string;
    order_direction?: string;
    timeframe?: Array<string>;
}
export interface MetricsOverallQueryParams {
    timeframe?: Array<string>;
    filters?: Array<string>;
    measurement?: '95th' | 'median' | 'avg';
}
export interface MetricsTimeseriesQueryParams {
    filters?: Array<string>;
    timeframe?: Array<string>;
    measurement?: '95th' | 'median' | 'avg';
    group_by?: string;
}
export declare interface MetricsBreakdownResponse {
    total_row_count: number;
    timeframe: Array<number>;
    data: Array<MetricsBreakdownValue>;
}
export declare interface MetricsComparisonResponse {
    total_row_count: number;
    timeframe: Array<number>;
    data: Array<MetricsComparisonValue>;
}
export declare interface MetricsInsightsResponse {
    total_row_count: number;
    timeframe: Array<number>;
    data: Array<Insight>;
}
export declare interface MetricsOverallResponse {
    total_row_count: number;
    timeframe: Array<number>;
    data: MetricsOverallValue;
}
export declare interface MetricsTimeseriesResponse {
    total_row_count: number;
    timeframe: Array<number>;
    data: Array<Array<string>>;
}
export interface VideoViewEvent {
    viewer_time?: number;
    playback_time?: number;
    name?: string;
    event_time?: number;
}
export interface VideoView {
    view_total_upscaling?: string;
    preroll_ad_asset_hostname?: string;
    player_source_domain?: string;
    region?: string;
    viewer_user_agent?: string;
    preroll_requested?: boolean;
    page_type?: string;
    startup_score?: string;
    view_seek_duration?: string;
    country_name?: string;
    player_source_height?: number;
    longitude?: string;
    buffering_count?: string;
    video_duration?: string;
    player_source_type?: string;
    city?: string;
    view_id?: string;
    platform_description?: string;
    video_startup_preroll_request_time?: string;
    viewer_device_name?: string;
    video_series?: string;
    viewer_application_name?: string;
    updated_at?: string;
    view_total_content_playback_time?: string;
    cdn?: string;
    player_instance_id?: string;
    video_language?: string;
    player_source_width?: number;
    player_error_message?: string;
    player_mux_plugin_version?: string;
    watched?: boolean;
    playback_score?: string;
    page_url?: string;
    metro?: string;
    view_max_request_latency?: string;
    requests_for_first_preroll?: string;
    view_total_downscaling?: string;
    latitude?: string;
    player_source_host_name?: string;
    inserted_at?: string;
    view_end?: string;
    mux_embed_version?: string;
    player_language?: string;
    page_load_time?: number;
    viewer_device_category?: string;
    video_startup_preroll_load_time?: string;
    player_version?: string;
    watch_time?: number;
    player_source_stream_type?: string;
    preroll_ad_tag_hostname?: string;
    viewer_device_manufacturer?: string;
    rebuffering_score?: string;
    experiment_name?: string;
    viewer_os_version?: string;
    player_preload?: boolean;
    buffering_duration?: string;
    player_view_count?: number;
    player_software?: string;
    player_load_time?: string;
    platform_summary?: string;
    video_encoding_variant?: string;
    player_width?: number;
    view_seek_count?: string;
    viewer_experience_score?: string;
    view_error_id?: number;
    video_variant_name?: string;
    preroll_played?: boolean;
    viewer_application_engine?: string;
    viewer_os_architecture?: string;
    player_error_code?: string;
    buffering_rate?: string;
    events?: Array<VideoViewEvent>;
    player_name?: string;
    view_start?: string;
    view_average_request_throughput?: string;
    video_producer?: string;
    error_type_id?: number;
    mux_viewer_id?: string;
    video_id?: string;
    continent_code?: string;
    session_id?: string;
    exit_before_video_start?: boolean;
    video_content_type?: string;
    viewer_os_family?: string;
    player_poster?: string;
    view_average_request_latency?: string;
    video_variant_id?: string;
    player_source_duration?: number;
    player_source_url?: string;
    mux_api_version?: string;
    video_title?: string;
    id?: string;
    short_time?: string;
    rebuffer_percentage?: string;
    time_to_first_frame?: string;
    viewer_user_id?: string;
    video_stream_type?: string;
    player_startup_time?: number;
    viewer_application_version?: string;
    view_max_downscale_percentage?: string;
    view_max_upscale_percentage?: string;
    country_code?: string;
    used_fullscreen?: boolean;
    isp?: string;
    property_id?: number;
    player_autoplay?: boolean;
    player_height?: number;
    asn?: number;
    quality_score?: string;
    player_software_version?: string;
}
export interface VideoViewsQueryParams {
    limit?: number;
    page?: number;
    error_id?: number;
    order_direction?: 'asc' | 'desc';
    filters?: Array<string>;
    timeframe?: Array<string>;
    viewer_id?: string;
}
export interface VideoViewsListResponse {
    total_row_count: number;
    timeframe: Array<number>;
    data: Array<VideoView>;
}
export interface RealTimeBreakdownQueryParams {
    dimension: string;
    timestamp?: number;
    filters?: Array<string>;
    order_by?: 'value' | 'negative_impact' | 'metric_value' | 'concurrent_viewers';
    order_direction?: 'asc' | 'desc';
}
export interface RealTimeTimeseriesParams {
    filters?: Array<string>;
}
export interface RealTimeHistogramQueryParams {
    filters?: Array<string>;
}
export interface RealTimeBreakdownValue {
    value: string;
    negative_impact: number;
    metric_value: number;
    concurrent_viewers: number;
}
export interface RealTimeDimensionsValue {
    name: string;
    display_name: string;
}
export interface RealTimeHistogramValue {
    timestamp: string;
    sum: number;
    p95: number;
    median: number;
    max_percentage: number;
    average: number;
    bucket_values: Array<{
        percentage: number;
        count: number;
    }>;
}
export interface RealTimeBreakdownResponse {
    total_row_count: null;
    timeframe: Array<number>;
    data: Array<RealTimeBreakdownValue>;
}
export interface RealTimeDimensionsResponse {
    total_row_count: null;
    timeframe: Array<number>;
    data: Array<RealTimeDimensionsValue>;
}
export interface RealTimeMetricsResponse {
    total_row_count: null;
    timeframe: Array<number>;
    data: Array<{
        name: string;
        display_name: string;
    }>;
}
export interface RealTimeTimeseriesResponse {
    total_row_count: null;
    timeframe: Array<number>;
    data: Array<{
        value: number;
        date: string;
        concurrent_viewers: number;
    }>;
}
export interface RealTimeHistogramResponse {
    total_row_count: null;
    timeframe: Array<number>;
    meta: {
        buckets: Array<{
            start: number;
            end: number;
        }>;
        bucket_unit: string;
    };
    data: Array<RealTimeHistogramValue>;
}
