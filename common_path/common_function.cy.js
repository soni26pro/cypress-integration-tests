/**
 * Generates a random three-digit number between 100 and 999.
 * @returns {number} Random three-digit number
 */
const getRandomNumber = () => {
  return Math.floor(Math.random() * 900) + 100;
};

/**
 * Random three-digit number.
 * @type {number}
 */
const randomThreeDigitNumber = getRandomNumber();

/**
 * Module exporting the random three-digit number.
 * @module randomNumber
 */
module.exports = {
  /**
   * The random three-digit number.
   * @type {number}
   */
  three_digit_number: randomThreeDigitNumber,
};
