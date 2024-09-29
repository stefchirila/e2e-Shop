export const locators = {
  header: {
    search: '#search',
    minicart: '.action.showcart'
  },
  products: {
    grid: '.widget-product-grid',
    item: '.product-item'
  },
  minicart: {
    menuWrapper: '#minicart-content-wrapper',
    emptyText: '.subtitle.empty',
    counterQty: '.counter.qty',
    counterNumber: '.counter-number',
    counterLabel: '.counter-label',
    checkout: '#top-cart-btn-checkout'
  },
  product: {
    size: '.swatch-attribute.size',
    sizeOptionText: '.swatch-option.text',
    color: '.swatch-attribute.color',
    colorOption: '.swatch-option.color',
    addToCart: '#product-addtocart-button'
  },
  checkout: {
    shipping: {
      address: '.checkout-shipping-address',
      title: '.step-title',
      form: '#co-shipping-form',
      method: '#checkout-shipping-method-load',
      methodOption: 'input[type="radio"]',
      buttons: '#shipping-method-buttons-container',
      submit: 'button[type="submit"]'
    },
    review: {
      sameAddress: '.billing-address-same-as-shipping-block.field.choice',
      sameAddressInput: 'input[type="checkbox"]',
      actions: '.actions-toolbar',
      submit: 'button[type="submit"].checkout'
    }
  },
  user: {
    email: '#customer-email',
    firstname: 'input[name="firstname"]',
    lastname: 'input[name="lastname"]',
    street: 'input[name="street[0]"]',
    city: 'input[name="city"]',
    region: 'select[name=region_id]',
    postcode: 'input[name="postcode"]',
    country: 'select[name=country_id]',
    phone: 'input[name="telephone"]'
  }
};
