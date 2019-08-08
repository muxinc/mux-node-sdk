/* globals Buffer */
const Base = require('../base');
const VerifyHeader = require('./resources/verify_header');

/**
 * Webhooks Class - Provides access to the Mux Webhooks signature verification
 * @extends Base
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Webhooks } = muxClient;
 *
 * // Verify a webhook signature
 * Webhooks.verifyHeader(body, signature, secret);
 */
class Webhooks extends Base {
  /**
   * Webhooks Constructor
   *
   * @param {string} accessToken - Mux API Access Token
   * @param {string} secret - Mux API secret
   * @constructor
   */
  constructor(...params) {
    super(...params);
    /**
      @private
      @ignore
    **/
    this.VerifyHeader = new VerifyHeader(this);
  }

  /**
   * Verify a webhook signature. When enabled, Mux will send webhooks with a signature
   * in the http request header 'Mux-Signature'. You can use that signature to verify
   * that the webhook is indeed coming from Mux.
   *
   * @param {string} body - The raw request body from Mux. This is stringified JSON.
   * @param {string} signature - The signature that was in the request header.
   * @param {string} secret - The webhook signing secret (get this from your dashboard).
   * @returns {boolean} - Returns true if the signature is verified.
   *
   * @throws {Error} throw error when a webhook signature verification fails.
   *
   * @example
   * const { Webhooks } = new Mux(accessToken, secret);
   *
   *
   * // Verify a webhook signature
   * Webhooks.verifyHeader(body, signature, secret);
   *
   * @see https://docs.mux.com/docs/webhook-security
   */
  verifyHeader (...args) {
    return this.VerifyHeader.verify(...args);
  }
}

module.exports = Webhooks;
