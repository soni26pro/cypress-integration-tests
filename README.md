# RESTful Booker API Testing with Cypress

This project demonstrates how to perform automated testing of the RESTful Booker API using Cypress, JavaScript, and the Page Object Model (POM) design pattern. The tests cover various HTTP methods, including GET, POST, PUT, PATCH, and DELETE, to ensure the proper functionality of the API endpoints.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Test Cases](#test-cases)
- [Additional Test Cases](#additional-test-cases)
- [Running the Tests](#running-the-tests)
- [Conclusion](#conclusion)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/)
- [Cypress](https://www.cypress.io/)

## Installation

1. Clone this repository:
    ```sh
    git clone https://github.com/yourusername/restful-booker-cypress.git
    ```

2. Navigate to the project directory:
    ```sh
    cd restful-booker-cypress
    ```

3. Install the necessary dependencies:
    ```sh
    npm install
    ```

## Project Structure

The project follows the Page Object Model (POM) design pattern for better organization and maintainability of the test cases. The main test file is located in the `cypress/integration` directory.

## Test Cases

The following test cases are included in the `Rest_full_bookers_project.cy.js` file:

1. **Create Token**: Generates a token required for authorization.
2. **GET Method**: Retrieves all booking details.
3. **GET by ID**: Retrieves details of a specific booking by ID.
4. **Create Booking (POST Method)**: Creates a new booking.
5. **GET Created Booking**: Retrieves details of the newly created booking.
6. **Update Booking (PUT Method)**: Updates the entire booking details.
7. **Partial Update (PATCH Method)**: Updates specific fields in the booking.
8. **Delete Booking (DELETE Method)**: Deletes the created booking.
9. **Verify Deletion**: Confirms the booking has been deleted.

## Additional Test Cases

1. **Create Token with Invalid Credentials**: Verifies the server's response to invalid login credentials.
2. **Create Booking with Invalid Data**: Tests the server's response to creating a booking with invalid data.
3. **Update Booking with Invalid Token**: Checks the server's response to an update request with an invalid token.
4. **Partially Update Booking with Invalid Data**: Tests partial updates with invalid data.
5. **Delete Booking with Invalid Token**: Verifies the server's response to a delete request with an invalid token.
6. **Verify Error for Non-Existent Booking ID**: Ensures the server returns a 404 error for non-existent booking IDs.

## Running the Tests

To run the tests, use the following command:

```sh
npx cypress open
```

This will open the Cypress Test Runner. Select the test file Rest_full_bookers_project.cy.js to run the tests.

Conclusion
This project demonstrates a comprehensive approach to testing RESTful APIs using Cypress. By covering CRUD operations and verifying the correctness of each action, it ensures the robustness and reliability of the API.

Feel free to contribute to this project by submitting issues or pull requests. For any questions, please contact soni.sujit.qa@gmail.com.