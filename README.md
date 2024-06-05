# RESTful Booker API Testing with Cypress

This project demonstrates how to perform automated testing of the RESTful Booker API using Cypress, JavaScript, and the Page Object Model (POM) design pattern. The tests cover various HTTP methods, including GET, POST, PUT, PATCH, and DELETE, to ensure the proper functionality of the API endpoints.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Test Cases](#test-cases)
- [Running the Tests](#running-the-tests)
- [Conclusion](#conclusion)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/)
- [Cypress](https://www.cypress.io/)

## Installation

1. Clone this repository:
    ```sh
    git clone https://github.com/soni26pro/cypress-rest-api
    ```

2. Navigate to the project directory:
    ```sh
    cd cypress-rest-api
    ```

3. Install the necessary dependencies:
    ```sh
    npm install
    ```

## Project Structure

The project follows the Page Object Model (POM) design pattern for better organization and maintainability of the test cases. The main test file is located in the `cypress/e2e` directory.

## Test Cases

Test cases are included for Rest API in the `api` folder and UI in the `web`

## Running the Tests

To run the tests, use the following command:

```sh
npx cypress open
```

This will open the Cypress Test Runner. Select the respective test file  run the tests.

Conclusion
This project demonstrates a comprehensive approach to testing RESTful APIs using Cypress. By covering CRUD operations and verifying the correctness of each action, it ensures the robustness and reliability of the API.

You can run Cypress tests from the command line using different browsers and in headless mode.

#### Running Tests in Chrome

To run tests in Chrome:

```bash
npx cypress run --browser chrome
```

### Running Tests in Firefox
To run tests in Firefox:

```bash
npx cypress run --browser firefox
```

### Running Tests in Edge
To run tests in Edge:

```bash
npx cypress run --browser edge
```

### Running Tests in Headless Mode
Headless mode allows you to run the tests without opening a browser window.

#### Running Tests in Headless Chrome
To run tests in headless Chrome:

```bash
npx cypress run --browser chrome --headless
```

### Running Tests in Headless Firefox
To run tests in headless Firefox:

```bash
npx cypress run --browser firefox --headless
```

### Running Specific Tests
You can specify a particular test file to run by providing the path to the test file:

```bash
npx cypress run --spec "cypress/e2e/web/my_test_spec.js"
```

Feel free to contribute to this project by submitting issues or pull requests. For any questions, please contact soni.sujit.qa@gmail.com.