import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

export class ShopProvider extends Component {
  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  };

  componentDidMount() {
    if (localStorage.checkout_id) {
      this.fetchCheckout(localStorage.checkout_id);
    } else {
      this.createCheckout();
    }
  }

  // Create a new checkout session
  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout_id", JSON.stringify(checkout.id));
    this.setState({ checkout: checkout });
  };

  // Fetch the current checkout;
  fetchCheckout = (checkoutId) => {
    client.checkout.fetch(checkoutId).then((checkout) => {
      this.setState({ checkout: checkout });
    });
  };

  // Add a product to the current checkout
  addItemtoCheckout = async () => {};

  // Remove a product from the current checkout
  removeLineItem = async (lineItemIdsToRemove) => {};

  // Fetch all products in your shop
  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };

  // Fetch a single product by its handle
  fetchProductWithHandle = async (handle) => {
    const encodedHandle = atob(handle);
    console.log(encodedHandle);
    const product = await client.product.fetchByHandle(encodedHandle);
    this.setState({ product: product });
  };

  // close cart
  closeCart = () => {};

  // open cart
  openCart = () => {};

  // close menu
  closeMenu = () => {};

  // open menu
  openMenu = () => {};

  render() {
    console.log(this.state.checkout);
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithHandle: this.fetchProductWithHandle,
          closeCart: this.closeCart,
          openCart: this.openCart,
          closeMenu: this.closeMenu,
          openMenu: this.openMenu,
          addItemtoCheckout: this.addItemtoCheckout,
          removeLineItem: this.removeLineItem,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopContext, ShopConsumer };

export default ShopProvider;
