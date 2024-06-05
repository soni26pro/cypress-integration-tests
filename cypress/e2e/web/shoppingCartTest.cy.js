/// <reference types="Cypress" />

describe('Shopping Cart Tests', () => {
    beforeEach(() => {
        cy.visit('https://react-shopping-cart-67954.firebaseapp.com/');
    });

    it('should display the correct number of inventory items', () => {
        cy.get('.sc-124al1g-2').should('have.length', 16);
    });

    it('should have the correct page title', () => {
        cy.title().should('eq', 'Typescript React Shopping cart');
    });

    it('should add an item to the cart and verify the cart contents', () => {
        cy.get('.sc-124al1g-2').first().within(() => {
            cy.get('.sc-124al1g-4').invoke('text').as('itemName');
            cy.get('.sc-124al1g-6').invoke('text').then((priceText) => {
                const itemPrice = priceText.replace(/\s+/g, ' ').trim();
                cy.wrap(itemPrice.trim()).as('itemPrice');
            });

            cy.get('button').click();
        });

        cy.get('.sc-1h98xa9-2').click();

        cy.get('.sc-11uohgb-0', { timeout: 10000 }).should('have.length', 1);
        cy.get('.sc-11uohgb-0').first().within(() => {
            cy.get('@itemName').then((itemName) => {
                cy.contains(itemName);
            });
            cy.get('.sc-11uohgb-4 p').invoke('text').then((text) => {
                const cartItemPrice = text.trim().replace(/\$\s+/g, '$'); 
                cy.get('@itemPrice').then((itemPrice) => {
                    expect(cartItemPrice).to.equal(itemPrice);
                });
            });
        });
    });

    it('should remove an item from the cart', () => {
        // Add an item to the cart
        cy.get('.sc-124al1g-2').first().within(() => {
            cy.get('button').click();
        });
    
        // Open the cart
        cy.get('.sc-1h98xa9-2').click();
    
        // Remove the item from the cart
        cy.get('.sc-11uohgb-0').first().within(() => {
            cy.get('.sc-11uohgb-5').click(); // Assuming this button removes the item from the cart
        });
    
        // Verify that the item is no longer present in the cart
        cy.get('.sc-11uohgb-0').should('not.exist');
    });
    it('should increase and decrease the quantity of an item in the cart', () => {
        // Add an item to the cart
        cy.get('.sc-124al1g-2').first().within(() => {
            cy.get('button').click();
        });
    
        // Open the cart
        cy.get('.sc-1h98xa9-2').click();
    
        // Increase the quantity of the item
        cy.get('.sc-11uohgb-0').first().within(() => {
            cy.get('.sc-11uohgb-6').eq(1).click(); // Assuming this button increases the quantity
        });
    
        // Verify that the quantity is updated
        cy.get('.sc-11uohgb-3').should('contain', '2'); // Assuming this selector represents the quantity display
    
        // Decrease the quantity of the item
        cy.get('.sc-11uohgb-0').first().within(() => {
            cy.get('.sc-11uohgb-6').eq(0).click(); // Assuming this button decreases the quantity
        });
    
        // Verify that the quantity is updated
        cy.get('.sc-11uohgb-3').should('contain', '1'); // Assuming this selector represents the quantity display
    });
    
    it('should display correctly on different screen sizes', () => {
        // Test on desktop screen size
        cy.viewport(1200, 800);
        cy.visit('https://react-shopping-cart-67954.firebaseapp.com/');
        // Add assertions for desktop layout
    
        // Test on tablet screen size
        cy.viewport('ipad-2');
        cy.reload();
        // Add assertions for tablet layout
    
        // Test on mobile screen size
        cy.viewport('iphone-6');
        cy.reload();
        // Add assertions for mobile layout
    });
    
    
});
