import React from "react";
import ShopifyBuy from "shopify-buy";

const ShopifyPectVacOld = () => {
  (function () {
    var scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      (
        document.getElementsByTagName("head")[0] ||
        document.getElementsByTagName("body")[0]
      ).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: "pect-vac.myshopify.com",
        storefrontAccessToken: "49552256f4729550cc3bd3d7f15524ae",
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent("product", {
          id: "8409700598081",
          node: document.getElementById("product-component-1692740421322"),
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "50px",
                  },
                  "text-align": "left",
                },
                title: {
                  "font-size": "26px",
                },
                button: {
                  "font-family": "Open Sans, sans-serif",
                },
                price: {
                  "font-size": "18px",
                },
                compareAt: {
                  "font-size": "15.299999999999999px",
                },
                unitPrice: {
                  "font-size": "15.299999999999999px",
                },
              },
              layout: "horizontal",
              contents: {
                img: false,
                imgWithCarousel: true,
                description: true,
              },
              width: "100%",
              text: {
                button: "Add to cart",
              },
              googleFonts: ["Open Sans"],
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px",
                  },
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                  },
                },
                button: {
                  "font-family": "Open Sans, sans-serif",
                },
                title: {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "bold",
                  "font-size": "26px",
                  color: "#4c4c4c",
                },
                price: {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "18px",
                  color: "#4c4c4c",
                },
                compareAt: {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "15.299999999999999px",
                  color: "#4c4c4c",
                },
                unitPrice: {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "15.299999999999999px",
                  color: "#4c4c4c",
                },
              },
              googleFonts: ["Open Sans"],
              text: {
                button: "Add to cart",
              },
            },
            option: {},
            cart: {
              styles: {
                button: {
                  "font-family": "Open Sans, sans-serif",
                },
              },
              text: {
                total: "Subtotal",
                button: "Checkout",
              },
              googleFonts: ["Open Sans"],
            },
            toggle: {
              styles: {
                toggle: {
                  "font-family": "Open Sans, sans-serif",
                },
              },
              googleFonts: ["Open Sans"],
            },
          },
        });
      });
    }
  })();
  return (
    <div>
      <div id="product-component-1692740421322"></div>
    </div>
  );
};

export default ShopifyPectVac;
