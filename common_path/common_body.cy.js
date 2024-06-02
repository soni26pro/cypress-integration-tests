/**
 * This module defines data objects used in Cypress tests.
 * These objects represent payloads for different API requests.
 */

module.exports = {

  /**
   * Payload for creating a booking.
   */
  first_post: {
    firstname: "Sally",
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01",
    },
    additionalneeds: "Breakfast",
  },

  /**
   * Payload for obtaining a token.
   */
  get_create_token: {
    username: "admin",
    password: "password123",
  },

  /**
   * Payload for updating a booking using PUT method.
   */
  put_update: {
    firstname: "moh",
    lastname: "yas",
    totalprice: 222,
    depositpaid: true,
    bookingdates: {
      checkin: "2024-05-09",
      checkout: "2024-05-10",
    },
    additionalneeds: "noodles",
  },
};
