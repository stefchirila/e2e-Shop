import { locators } from '../utils/locators';

const url = 'https://magento.softwaretestingboard.com/';

describe('Guest Checkout', () => {
  beforeEach(() => {
    cy.visit(url);
  });

  it('should verify if the cart is empty', () => {
    cy.isShoppingCartEmpty(true);
  });

  it('should purchase a product successfully', () => {
    const product = cy.get(locators.products.grid).find(locators.products.item).first();
    cy.goToProductPage(product);
    cy.addProductToCart();
    cy.isShoppingCartEmpty(false);
    cy.goToCart();
    cy.fillInCheckoutForm();
    cy.isCheckoutSuccessful();
  });
});