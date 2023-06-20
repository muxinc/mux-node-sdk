// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as API from './';
import { BasePage, BasePageParams } from '~/pagination';

export class Incidents extends APIResource {
  /**
   * Returns the details of an incident.
   */
  retrieve(incidentId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<IncidentResponse>> {
    return this.get(`/data/v1/incidents/${incidentId}`, options);
  }

  /**
   * Returns a list of incidents.
   */
  list(query?: IncidentListParams, options?: Core.RequestOptions): Core.PagePromise<IncidentsBasePage>;
  list(options?: Core.RequestOptions): Core.PagePromise<IncidentsBasePage>;
  list(
    query: IncidentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<IncidentsBasePage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/data/v1/incidents', IncidentsBasePage, { query, ...options });
  }

  /**
   * Returns all the incidents that seem related to a specific incident.
   */
  listRelated(
    incidentId: string,
    query?: IncidentListRelatedParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IncidentsBasePage>;
  listRelated(incidentId: string, options?: Core.RequestOptions): Core.PagePromise<IncidentsBasePage>;
  listRelated(
    incidentId: string,
    query: IncidentListRelatedParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<IncidentsBasePage> {
    if (isRequestOptions(query)) {
      return this.listRelated(incidentId, {}, query);
    }
    return this.getAPIList(`/data/v1/incidents/${incidentId}/related`, IncidentsBasePage, {
      query,
      ...options,
    });
  }
}

export class IncidentsBasePage extends BasePage<Incident> {}

export interface Incident {
  affected_views?: number;

  affected_views_per_hour?: number;

  affected_views_per_hour_on_open?: number;

  breakdowns?: Array<Incident.Breakdowns>;

  description?: string;

  error_description?: string;

  id?: string;

  impact?: string;

  incident_key?: string;

  measured_value?: number;

  measured_value_on_close?: number;

  measurement?: string;

  notification_rules?: Array<Incident.NotificationRules>;

  notifications?: Array<Incident.Notifications>;

  resolved_at?: string;

  sample_size?: number;

  sample_size_unit?: string;

  severity?: string;

  started_at?: string;

  status?: string;

  threshold?: number;
}

export namespace Incident {
  export interface Notifications {
    attempted_at?: string;

    id?: number;

    queued_at?: string;
  }

  export interface NotificationRules {
    action?: string;

    id?: string;

    property_id?: string;

    rules?: Array<NotificationRules.Rules>;

    status?: string;
  }

  export namespace NotificationRules {
    export interface Rules {
      id?: string;

      name?: string;

      value?: string;
    }
  }

  export interface Breakdowns {
    id?: string;

    name?: string;

    value?: string;
  }
}

export interface IncidentResponse {
  data: Incident;

  timeframe: Array<number>;
}

export interface IncidentListParams extends BasePageParams {
  /**
   * Value to order the results by
   */
  order_by?: 'negative_impact' | 'value' | 'views' | 'field';

  /**
   * Sort order.
   */
  order_direction?: 'asc' | 'desc';

  /**
   * Severity to filter incidents by
   */
  severity?: 'warning' | 'alert';

  /**
   * Status to filter incidents by
   */
  status?: 'open' | 'closed' | 'expired';
}

export interface IncidentListRelatedParams extends BasePageParams {
  /**
   * Value to order the results by
   */
  order_by?: 'negative_impact' | 'value' | 'views' | 'field';

  /**
   * Sort order.
   */
  order_direction?: 'asc' | 'desc';
}

export namespace Incidents {
  export import Incident = API.Incident;
  export import IncidentResponse = API.IncidentResponse;
  export import IncidentsBasePage = API.IncidentsBasePage;
  export import IncidentListParams = API.IncidentListParams;
  export import IncidentListRelatedParams = API.IncidentListRelatedParams;
}
