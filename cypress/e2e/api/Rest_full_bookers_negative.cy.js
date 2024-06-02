/// <reference types="Cypress" />

describe("RESTful Booker API", () => {
  let token = null;

  before("Create Token", () => {
    cy.request({
      method: "POST",
      url: "https://restful-booker.herokuapp.com/auth",
      headers: { "content-type": "application/json" },
      body: {
        username: "admin",
        password: "password123",
      },
    }).then((response) => {
      token = response.body.token;
      cy.log(JSON.stringify(token));
      Cypress.env("token", token);
    });
  });

  context("Booking Operations", () => {
    let bookingIds = [];
    let firstBookingId;

    it("GET all bookings", () => {
      cy.request("GET", "https://restful-booker.herokuapp.com/booking")
        .then((response) => {
          expect(response.status).to.equal(200);
          bookingIds = response.body.map(booking => booking.bookingid);
          cy.log(JSON.stringify(bookingIds));
          Cypress.env("bookingIds", bookingIds);
        });
    });

    it("GET a booking by ID", () => {
      bookingIds = Cypress.env("bookingIds");

      if (bookingIds && bookingIds.length > 0) {
        const randomId = bookingIds[Math.floor(Math.random() * bookingIds.length)];
        cy.log(`Using random ID: ${randomId}`);

        cy.request({
          method: "GET",
          url: `https://restful-booker.herokuapp.com/booking/${randomId}`,
        }).then((response) => {
          expect(response.status).to.equal(200);
          cy.log(JSON.stringify(response.body));
        });
      } else {
        cy.log("No IDs found");
      }
    });

    it("Create a booking", () => {
      cy.request({
        method: "POST",
        url: "https://restful-booker.herokuapp.com/booking",
        body: {
          firstname: "tailord",
          lastname: "care",
          totalprice: 111,
          depositpaid: true,
          bookingdates: {
            checkin: "2013-02-23",
            checkout: "2014-10-23",
          },
          additionalneeds: "Breakfast",
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        firstBookingId = response.body.bookingid;
        cy.log(JSON.stringify(response.body));
        Cypress.env("firstBookingId", firstBookingId);
      });
    });

    it("GET the created booking", () => {
      firstBookingId = Cypress.env("firstBookingId");

      cy.request({
        method: "GET",
        url: `https://restful-booker.herokuapp.com/booking/${firstBookingId}`,
        headers: { Accept: "application/json" },
      }).then((response) => {
        expect(response.status).to.equal(200);
        cy.log(JSON.stringify(response.body));
      });
    });

    it("Update the booking with PUT", () => {
      firstBookingId = Cypress.env("firstBookingId");

      cy.request({
        method: "PUT",
        url: `https://restful-booker.herokuapp.com/booking/${firstBookingId}`,
        headers: {
          Accept: "application/json",
          Cookie: `token=${token}`,
        },
        body: {
          firstname: "tata",
          lastname: "tcs",
          totalprice: 10000,
          depositpaid: true,
          bookingdates: {
            checkin: "2018-01-01",
            checkout: "2019-01-01",
          },
          additionalneeds: "dinner",
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        cy.log(JSON.stringify(response.body));
      });
    });

    it("Partially update the booking with PATCH", () => {
      firstBookingId = Cypress.env("firstBookingId");

      cy.request({
        method: "PATCH",
        url: `https://restful-booker.herokuapp.com/booking/${firstBookingId}`,
        headers: {
          Accept: "application/json",
          Cookie: `token=${token}`,
        },
        body: {
          firstname: "Tata Consultancy Services",
          lastname: "tcs",
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        cy.log(JSON.stringify(response.body));
      });
    });

    it("Delete the created booking", () => {
      firstBookingId = Cypress.env("firstBookingId");

      cy.request({
        method: "DELETE",
        url: `https://restful-booker.herokuapp.com/booking/${firstBookingId}`,
        headers: {
          "Content-Type": "application/json",
          Cookie: `token=${token}`,
        },
      }).then((response) => {
        expect(response.status).to.equal(201);
        cy.log(JSON.stringify(response.body));
      });
    });
  });

  context("Additional Test Cases", () => {
    it("Create Token with Invalid Credentials", () => {
      cy.request({
        method: "POST",
        url: "https://restful-booker.herokuapp.com/auth",
        headers: { "content-type": "application/json" },
        failOnStatusCode: false,
        body: {
          username: "invalidUser",
          password: "invalidPass",
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.reason).to.equal("Bad credentials");
      });
    });

    it("Create Booking with Invalid Data", () => {
      cy.request({
        method: "POST",
        url: "https://restful-booker.herokuapp.com/booking",
        failOnStatusCode: false,
        body: {
          firstname: "",
          lastname: "care",
          totalprice: "invalid",
          depositpaid: true,
          bookingdates: {
            checkin: "invalid-date",
            checkout: "2014-10-23",
          },
          additionalneeds: "Breakfast",
        },
      }).then((response) => {
        expect(response.status).to.equal(500);
      });
    });

    it("Update Booking with Invalid Token", () => {
      const firstBookingId = Cypress.env("firstBookingId");

      cy.request({
        method: "PUT",
        url: `https://restful-booker.herokuapp.com/booking/${firstBookingId}`,
        headers: {
          Accept: "application/json",
          Cookie: "token=invalidToken",
        },
        failOnStatusCode: false,
        body: {
          firstname: "tata",
          lastname: "tcs",
          totalprice: 10000,
          depositpaid: true,
          bookingdates: {
            checkin: "2018-01-01",
            checkout: "2019-01-01",
          },
          additionalneeds: "dinner",
        },
      }).then((response) => {
        expect(response.status).to.equal(403);
      });
    });

    it("Partially Update Booking with Invalid Data", () => {
      const firstBookingId = Cypress.env("firstBookingId");

      cy.request({
        method: "PATCH",
        url: `https://restful-booker.herokuapp.com/booking/${firstBookingId}`,
        headers: {
          Accept: "application/json",
          Cookie: `token=${token}`,
        },
        failOnStatusCode: false,
        body: {
          firstname: "",
          lastname: 12345,
        },
      }).then((response) => {
        expect(response.status).to.equal(500);
      });
    });

    it("Delete Booking with Invalid Token", () => {
      const firstBookingId = Cypress.env("firstBookingId");

      cy.request({
        method: "DELETE",
        url: `https://restful-booker.herokuapp.com/booking/${firstBookingId}`,
        headers: {
          "Content-Type": "application/json",
          Cookie: "token=invalidToken",
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.equal(403);
      });
    });

    it("Verify Error for Non-Existent Booking ID", () => {
      cy.request({
        method: "GET",
        url: "https://restful-booker.herokuapp.com/booking/999999",
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.equal(404);
      });
    });
  });

  it("Ping the server", () => {
    cy.request({
      method: "GET",
      url: "https://restful-booker.herokuapp.com/ping",
    }).then((response) => {
      expect(response.status).to.equal(201);
      cy.log(JSON.stringify(response.body));
    });
  });
});
