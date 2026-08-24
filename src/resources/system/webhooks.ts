// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { BasePage, type BasePageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Webhook endpoints allow you to configure URLs where Mux will send notifications about events in your environment (e.g. asset ready, live stream active). Requires an access token with `system:read` and/or `system:write` permissions.
 */
export class Webhooks extends APIResource {
  /**
   * Creates a new webhook for the current environment. New webhooks start out
   * enabled. The `address` must be unique among the environment's webhooks. **The
   * `signing_secret` is only returned in this response and cannot be retrieved
   * again.** Store it securely and use it to verify that webhook payloads were sent
   * by Mux.
   *
   * @example
   * ```ts
   * const webhook = await client.system.webhooks.create({
   *   address: 'https://example.com/webhook',
   * });
   * ```
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<Webhook> {
    return (
      this._client.post('/system/v1/webhooks', {
        body,
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: Webhook }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Returns a list of webhooks configured for the current environment, sorted by
   * creation time with the most recently created first. The `signing_secret` is not
   * included; it is only returned once, when a webhook is created.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const webhook of client.system.webhooks.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WebhooksBasePage, Webhook> {
    return this._client.getAPIList('/system/v1/webhooks', BasePage<Webhook>, {
      query,
      defaultBaseURL: 'https://api.mux.com',
      ...options,
    });
  }

  /**
   * Retrieves the details of a webhook that has previously been created. The
   * `signing_secret` is not included; it is only returned once, when the webhook is
   * created.
   *
   * @example
   * ```ts
   * const webhook = await client.system.webhooks.retrieve(
   *   'WEBHOOK_ID',
   * );
   * ```
   */
  retrieve(webhookID: string, options?: RequestOptions): APIPromise<Webhook> {
    return (
      this._client.get(path`/system/v1/webhooks/${webhookID}`, {
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: Webhook }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Updates the address and/or enabled status of an existing webhook. Omitted fields
   * are left unchanged; at least one of `address` or `enabled` must be provided. The
   * new `address` must be unique among the environment's webhooks.
   *
   * @example
   * ```ts
   * const webhook = await client.system.webhooks.update(
   *   'WEBHOOK_ID',
   *   { address: 'https://example.com/new-webhook' },
   * );
   * ```
   */
  update(webhookID: string, body: WebhookUpdateParams, options?: RequestOptions): APIPromise<Webhook> {
    return (
      this._client.patch(path`/system/v1/webhooks/${webhookID}`, {
        body,
        defaultBaseURL: 'https://api.mux.com',
        ...options,
      }) as APIPromise<{ data: Webhook }>
    )._thenUnwrap((obj) => obj.data);
  }

  /**
   * Deletes an existing webhook. Mux will no longer send event notifications to the
   * configured address, the webhook no longer appears in list or retrieve responses,
   * and its address becomes available for use by a new webhook (which will have a
   * new ID and signing secret).
   *
   * @example
   * ```ts
   * await client.system.webhooks.delete('WEBHOOK_ID');
   * ```
   */
  delete(webhookID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/system/v1/webhooks/${webhookID}`, {
      defaultBaseURL: 'https://api.mux.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type WebhooksBasePage = BasePage<Webhook>;

export interface Webhook {
  /**
   * Unique identifier for the webhook.
   */
  id: string;

  /**
   * The URL where Mux sends webhook notifications.
   */
  address: string;

  /**
   * Time at which the webhook was created, as an ISO 8601 UTC datetime.
   */
  created_at: string;

  /**
   * Whether Mux attempts to deliver notifications to this webhook.
   */
  enabled: boolean;

  /**
   * Secret used to verify that webhook payloads were sent by Mux. **Note that this
   * value is only returned once when creating a webhook.**
   */
  signing_secret?: string;
}

export interface WebhookResponse {
  data?: Webhook;
}

export interface WebhookCreateParams {
  /**
   * The URL where Mux should send webhook notifications. Must be unique among the
   * environment's webhooks.
   */
  address: string;
}

export interface WebhookListParams extends BasePageParams {}

export interface WebhookUpdateParams {
  /**
   * The URL where Mux should send webhook notifications. Must be unique among the
   * environment's webhooks.
   */
  address?: string;

  /**
   * Whether Mux attempts to deliver notifications to this webhook.
   */
  enabled?: boolean;
}

export declare namespace Webhooks {
  export {
    type Webhook as Webhook,
    type WebhookResponse as WebhookResponse,
    type WebhooksBasePage as WebhooksBasePage,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookListParams as WebhookListParams,
    type WebhookUpdateParams as WebhookUpdateParams,
  };
}
