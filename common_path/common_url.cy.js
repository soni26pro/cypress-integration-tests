/**
 * URLs for RESTful Booker API endpoints.
 * @module apiUrls
 */

/**
 * Base URL for retrieving all bookings.
 * @type {string}
 */
const base_get_Url = "https://restful-booker.herokuapp.com/booking";

/**
 * URL for retrieving a booking by ID.
 * @type {string}
 */
const get_id = "https://restful-booker.herokuapp.com/booking";

/**
 * URL for creating a new booking.
 * @type {string}
 */
const post_url = "https://restful-booker.herokuapp.com/booking";

/**
 * URL for authenticating and creating a token.
 * @type {string}
 */
const post_Auth_CreateToken = "https://restful-booker.herokuapp.com/auth";

/**
 * URL for updating a booking by ID using the PUT method.
 * Note: Replace 'id' with the actual booking ID.
 * @type {string}
 */
const put_url = "https://restful-booker.herokuapp.com/booking/id";

/**
 * URL for updating a booking by ID using the PATCH method.
 * Note: Replace '446' with the actual booking ID.
 * @type {string}
 */
const patch_url = "https://restful-booker.herokuapp.com/booking/446";

module.exports = {
  base_get_Url,
  get_id,
  post_url,
  post_Auth_CreateToken,
  put_url,
  patch_url,
};
