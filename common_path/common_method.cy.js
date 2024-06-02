/**
 * HTTP Methods module.
 * @module httpMethods
 */

/**
 * HTTP methods supported in API requests.
 * @typedef {Object} HttpMethods
 * @property {string} GET - The HTTP GET method.
 * @property {string} POST - The HTTP POST method.
 * @property {string} PUT - The HTTP PUT method.
 * @property {string} PATCH - The HTTP PATCH method.
 */

/**
 * HTTP methods supported in API requests.
 * @type {HttpMethods}
 */
const httpMethods = {
    /**
     * The HTTP GET method.
     * @type {string}
     */
    GET: "GET",
  
    /**
     * The HTTP POST method.
     * @type {string}
     */
    POST: "POST",
  
    /**
     * The HTTP PUT method.
     * @type {string}
     */
    PUT: "PUT",
  
    /**
     * The HTTP PATCH method.
     * @type {string}
     */
    PATCH: "PATCH",
  };
  
  module.exports = httpMethods;
  