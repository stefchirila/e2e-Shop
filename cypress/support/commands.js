import { faker } from '@faker-js/faker';

import { locators } from '../utils/locators';
import { url, text } from '../utils/text';

Cypress.Commands.add("goToProductPage", (product) => {
    product.click();
  
    cy.url().then(() => {
      cy.url().should("include", `.html`);
    });
  });
  
Cypress.Commands.add("addProductToCart", () => {
    cy.get(locators.product.size).should('exist').find(locators.product.sizeOptionText).should('exist').first().click();
    cy.get(locators.product.color).should('exist').find(locators.product.colorOption).should('exist').first().click();

    cy.get(locators.product.addToCart).wait(2000);
    cy.get(locators.product.addToCart).should('exist').should('be.visible').should('be.enabled').click();

    cy.get(locators.minicart.counterQty).wait(5000).find(locators.minicart.counterNumber).should('have.text', '1');
});

Cypress.Commands.add("isShoppingCartEmpty", (isEmpty) => {
    cy.get(locators.header.minicart).click();
    cy.get(locators.minicart.menuWrapper).should('exist');
    if (isEmpty) {
        cy.get(locators.minicart.emptyText).should('exist').should('have.text', text.cartEmpty);
    } else {
        cy.get(locators.minicart.counterQty).should('be.visible').find(`${locators.minicart.counterNumber}, ${locators.minicart.counterLabel}`).should('have.length', 2);
        cy.get(locators.header.minicart).click();
    }
});

Cypress.Commands.add("fillInShipping", () => {
    cy.get('.loader').should('not.be.visible');
    cy.get(locators.checkout.shipping.address).should('be.visible').find(locators.checkout.shipping.title).should('have.text', text.shippingAddress);
    cy.get(locators.user.email).should('exist').should('be.visible').type(faker.internet.email());
    cy.get(locators.checkout.shipping.form).should('exist').should('be.visible');
    cy.get(locators.user.firstname).type(faker.person.firstName());
    cy.get(locators.user.lastname).type(faker.person.lastName());
    cy.get(locators.user.street).type(faker.location.street());
    cy.get(locators.user.city).type(faker.location.city());
    cy.get(locators.user.region).select('Alabama');
    cy.get(locators.user.postcode).type(faker.location.zipCode());
    cy.get(locators.user.country).select('United States');
    cy.get(locators.user.phone).type(faker.phone.number());
    cy.get(locators.checkout.shipping.method)
        .find(locators.checkout.shipping.methodOption)
        .first()
        .click();

    cy.get(locators.checkout.shipping.buttons).find(locators.checkout.shipping.submit).should('exist').should('be.visible').click();
});

Cypress.Commands.add("reviewOrder", () => {
    cy.get('.loader').should('not.be.visible').wait(500);
    cy.get(locators.checkout.review.sameAddress).should('be.visible').find(locators.checkout.review.sameAddressInput)
    .then(($checkbox) => {
        if (!$checkbox.is(':checked')) {
          $checkbox.click();
        }
      });
    cy.get(locators.checkout.review.actions).find(locators.checkout.review.submit).should('exist').should('be.visible').click();
});

Cypress.Commands.add("fillInCheckoutForm", () => {
    cy.fillInShipping();
    cy.reviewOrder();
});

  
Cypress.Commands.add("goToCart", () => {
    cy.get(locators.header.minicart).click();
    cy.get(locators.minicart.menuWrapper).should('exist');
    cy.get(locators.minicart.checkout).wait(500).should('exist').should('have.text', text.checkout);
    cy.get(locators.minicart.checkout).click();

    cy.url().then(() => {
        cy.url().should("include", url.checkout);
    });
});

Cypress.Commands.add("isCheckoutSuccessful", () => {
    cy.url().then(() => {
        cy.url().should("include", url.checkoutSuccess).wait(500);
    });
});