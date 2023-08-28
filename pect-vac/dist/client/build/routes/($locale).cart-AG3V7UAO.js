import {
  CartMain
} from "/build/_shared/chunk-LKMHWT5O.js";
import "/build/_shared/chunk-DZFPKO23.js";
import "/build/_shared/chunk-57OSOVSV.js";
import "/build/_shared/chunk-YOSDW4RD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  Await,
  useMatches
} from "/build/_shared/chunk-UH6OF2JW.js";
import {
  require_react
} from "/build/_shared/chunk-BVWHYGSQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZCSYOYEW.js";
import "/build/_shared/chunk-LSHG36UU.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).cart.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/($locale).cart.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/($locale).cart.jsx"
  );
  import.meta.hot.lastModified = "1692931299829.9521";
}
var meta = () => {
  return [{
    title: `Hydrogen | Cart`
  }];
};
function Cart() {
  _s();
  const [root] = useMatches();
  const cart = root.data?.cart;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cart", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Cart" }, void 0, false, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Loading cart ..." }, void 0, false, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 111,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { errorElement: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "An error occurred" }, void 0, false, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 112,
      columnNumber: 30
    }, this), resolve: cart, children: (cart2) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartMain, { layout: "page", cart: cart2 }, void 0, false, {
        fileName: "app/routes/($locale).cart.jsx",
        lineNumber: 114,
        columnNumber: 18
      }, this);
    } }, void 0, false, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 112,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).cart.jsx",
    lineNumber: 109,
    columnNumber: 10
  }, this);
}
_s(Cart, "qWoibZqbzlhGDRlxEMM9P1NS8i8=", false, function() {
  return [useMatches];
});
_c = Cart;
var _c;
$RefreshReg$(_c, "Cart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Cart as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).cart-AG3V7UAO.js.map
