import {
  favicon_default
} from "/build/_shared/chunk-Z7RIBLB2.js";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-UH6OF2JW.js";
import "/build/_shared/chunk-BVWHYGSQ.js";
import "/build/_shared/chunk-ZCSYOYEW.js";
import "/build/_shared/chunk-LSHG36UU.js";
import "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/assets/styles.css
var styles_default = "/build/_assets/styles-G72WKIIU.css";

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/components/Layout.jsx
function Layout(props) {
  return /* @__PURE__ */ React.createElement("div", { className: "hydrogen-virtual-route" }, props.children);
}

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/virtual-root.jsx
var links = () => {
  return [
    { rel: "stylesheet", href: styles_default },
    { rel: "icon", type: "image/svg+xml", href: favicon_default }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", { lang: "en" }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", { charSet: "utf-8" }), /* @__PURE__ */ React.createElement("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }), /* @__PURE__ */ React.createElement("title", null, "Hydrogen"), /* @__PURE__ */ React.createElement(
    "meta",
    {
      name: "description",
      content: "A custom storefront powered by Hydrogen"
    }
  ), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Outlet, null)), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null)));
}
export {
  App as default,
  links
};
//# sourceMappingURL=/build/virtual-routes/virtual-root-4OOIGRRU.js.map
