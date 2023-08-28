import {
  require_jsx_runtime
} from "/build/_shared/chunk-YOSDW4RD.js";
import {
  Link,
  useFetcher,
  useLocation,
  useNavigation
} from "/build/_shared/chunk-OTVY44JO.js";
import {
  require_react
} from "/build/_shared/chunk-BVWHYGSQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@shopify/hydrogen-react/dist/browser-prod/flatten-connection.mjs
function flattenConnection(connection) {
  if (!connection) {
    const noConnectionErr = `flattenConnection(): needs a 'connection' to flatten, but received '${connection ?? ""}' instead.`;
    {
      console.error(noConnectionErr + ` Returning an empty array`);
      return [];
    }
  }
  if ("nodes" in connection) {
    return connection.nodes;
  }
  if ("edges" in connection && Array.isArray(connection.edges)) {
    return connection.edges.map((edge) => {
      if (!(edge == null ? void 0 : edge.node)) {
        throw new Error(
          "flattenConnection(): Connection edges must contain nodes"
        );
      }
      return edge.node;
    });
  }
  return [];
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/Money.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/@shopify/hydrogen-react/dist/browser-prod/useMoney.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/@shopify/hydrogen-react/dist/browser-prod/ShopifyProvider.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);

// node_modules/@shopify/hydrogen-react/dist/browser-prod/storefront-api-constants.mjs
var SFAPI_VERSION = "2023-07";

// node_modules/@shopify/hydrogen-react/dist/browser-prod/ShopifyProvider.mjs
var defaultShopifyContext = {
  storeDomain: "test",
  storefrontToken: "abc123",
  storefrontApiVersion: SFAPI_VERSION,
  countryIsoCode: "US",
  languageIsoCode: "EN",
  getStorefrontApiUrl() {
    return "";
  },
  getPublicTokenHeaders() {
    return {};
  },
  getShopifyDomain() {
    return "";
  }
};
var ShopifyContext = (0, import_react.createContext)(
  defaultShopifyContext
);
function useShop() {
  const shopContext = (0, import_react.useContext)(ShopifyContext);
  if (!shopContext) {
    throw new Error(`'useShop()' must be a descendent of <ShopifyProvider/>`);
  }
  return shopContext;
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/useMoney.mjs
function useMoney(money) {
  const { countryIsoCode, languageIsoCode } = useShop();
  const locale = languageIsoCode.includes("_") ? languageIsoCode.replace("_", "-") : `${languageIsoCode}-${countryIsoCode}`;
  if (!locale) {
    throw new Error(
      `useMoney(): Unable to get 'locale' from 'useShop()', which means that 'locale' was not passed to '<ShopifyProvider/>'. 'locale' is required for 'useMoney()' to work`
    );
  }
  const amount = parseFloat(money.amount);
  const options = (0, import_react2.useMemo)(
    () => ({
      style: "currency",
      currency: money.currencyCode
    }),
    [money.currencyCode]
  );
  const defaultFormatter = useLazyFormatter(locale, options);
  const nameFormatter = useLazyFormatter(locale, {
    ...options,
    currencyDisplay: "name"
  });
  const narrowSymbolFormatter = useLazyFormatter(locale, {
    ...options,
    currencyDisplay: "narrowSymbol"
  });
  const withoutTrailingZerosFormatter = useLazyFormatter(locale, {
    ...options,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  const withoutCurrencyFormatter = useLazyFormatter(locale);
  const withoutTrailingZerosOrCurrencyFormatter = useLazyFormatter(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  const isPartCurrency = (part) => part.type === "currency";
  const lazyFormatters = (0, import_react2.useMemo)(
    () => ({
      original: () => money,
      currencyCode: () => money.currencyCode,
      localizedString: () => defaultFormatter().format(amount),
      parts: () => defaultFormatter().formatToParts(amount),
      withoutTrailingZeros: () => amount % 1 === 0 ? withoutTrailingZerosFormatter().format(amount) : defaultFormatter().format(amount),
      withoutTrailingZerosAndCurrency: () => amount % 1 === 0 ? withoutTrailingZerosOrCurrencyFormatter().format(amount) : withoutCurrencyFormatter().format(amount),
      currencyName: () => {
        var _a;
        return ((_a = nameFormatter().formatToParts(amount).find(isPartCurrency)) == null ? void 0 : _a.value) ?? money.currencyCode;
      },
      // e.g. "US dollars"
      currencySymbol: () => {
        var _a;
        return ((_a = defaultFormatter().formatToParts(amount).find(isPartCurrency)) == null ? void 0 : _a.value) ?? money.currencyCode;
      },
      // e.g. "USD"
      currencyNarrowSymbol: () => {
        var _a;
        return ((_a = narrowSymbolFormatter().formatToParts(amount).find(isPartCurrency)) == null ? void 0 : _a.value) ?? "";
      },
      // e.g. "$"
      amount: () => defaultFormatter().formatToParts(amount).filter(
        (part) => ["decimal", "fraction", "group", "integer", "literal"].includes(
          part.type
        )
      ).map((part) => part.value).join("")
    }),
    [
      money,
      amount,
      nameFormatter,
      defaultFormatter,
      narrowSymbolFormatter,
      withoutCurrencyFormatter,
      withoutTrailingZerosFormatter,
      withoutTrailingZerosOrCurrencyFormatter
    ]
  );
  return (0, import_react2.useMemo)(
    () => new Proxy(lazyFormatters, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      get: (target, key) => {
        var _a;
        return (_a = Reflect.get(target, key)) == null ? void 0 : _a.call(null);
      }
    }),
    [lazyFormatters]
  );
}
function useLazyFormatter(locale, options) {
  return (0, import_react2.useMemo)(() => {
    let memoized;
    return () => memoized ?? (memoized = new Intl.NumberFormat(locale, options));
  }, [locale, options]);
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/Money.mjs
function Money({
  data,
  as,
  withoutCurrency,
  withoutTrailingZeros,
  measurement,
  measurementSeparator = "/",
  ...passthroughProps
}) {
  if (!isMoney(data)) {
    throw new Error(
      `<Money/> needs a valid 'data' prop that has 'amount' and 'currencyCode'`
    );
  }
  const moneyObject = useMoney(data);
  const Wrapper = as ?? "div";
  let output = moneyObject.localizedString;
  if (withoutCurrency || withoutTrailingZeros) {
    if (withoutCurrency && !withoutTrailingZeros) {
      output = moneyObject.amount;
    } else if (!withoutCurrency && withoutTrailingZeros) {
      output = moneyObject.withoutTrailingZeros;
    } else {
      output = moneyObject.withoutTrailingZerosAndCurrency;
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Wrapper, { ...passthroughProps, children: [
    output,
    measurement && measurement.referenceUnit && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      measurementSeparator,
      measurement.referenceUnit
    ] })
  ] });
}
function isMoney(maybeMoney) {
  return typeof maybeMoney.amount === "string" && !!maybeMoney.amount && typeof maybeMoney.currencyCode === "string" && !!maybeMoney.currencyCode;
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/Image.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var React = __toESM(require_react(), 1);
var Image = React.forwardRef(
  ({
    alt,
    aspectRatio,
    crop = "center",
    data,
    decoding = "async",
    height = "auto",
    loader = shopifyLoader,
    loaderOptions,
    loading = "lazy",
    sizes,
    src,
    srcSetOptions = {
      intervals: 15,
      startingWidth: 200,
      incrementSize: 200,
      placeholderWidth: 100
    },
    width = "100%",
    widths,
    ...passthroughProps
  }, ref) => {
    const normalizedData = React.useMemo(() => {
      const dataWidth = (data == null ? void 0 : data.width) && (data == null ? void 0 : data.height) ? data == null ? void 0 : data.width : void 0;
      const dataHeight = (data == null ? void 0 : data.width) && (data == null ? void 0 : data.height) ? data == null ? void 0 : data.height : void 0;
      return {
        width: dataWidth,
        height: dataHeight,
        unitsMatch: Boolean(unitsMatch(dataWidth, dataHeight))
      };
    }, [data]);
    const normalizedProps = React.useMemo(() => {
      const nWidthProp = width || "100%";
      const widthParts = getUnitValueParts(nWidthProp.toString());
      const nWidth = `${widthParts.number}${widthParts.unit}`;
      const autoHeight = height === void 0 || height === null;
      const heightParts = autoHeight ? null : getUnitValueParts(height.toString());
      const fixedHeight = heightParts ? `${heightParts.number}${heightParts.unit}` : "";
      const nHeight = autoHeight ? "auto" : fixedHeight;
      const nSrc = src || (data == null ? void 0 : data.url);
      const nAlt = (data == null ? void 0 : data.altText) && !alt ? data == null ? void 0 : data.altText : alt || "";
      const nAspectRatio = aspectRatio ? aspectRatio : normalizedData.unitsMatch ? [
        getNormalizedFixedUnit(normalizedData.width),
        getNormalizedFixedUnit(normalizedData.height)
      ].join("/") : void 0;
      return {
        width: nWidth,
        height: nHeight,
        src: nSrc,
        alt: nAlt,
        aspectRatio: nAspectRatio
      };
    }, [
      width,
      height,
      src,
      data,
      alt,
      aspectRatio,
      normalizedData,
      passthroughProps == null ? void 0 : passthroughProps.key
    ]);
    const { intervals, startingWidth, incrementSize, placeholderWidth } = srcSetOptions;
    const imageWidths = React.useMemo(() => {
      return generateImageWidths(
        width,
        intervals,
        startingWidth,
        incrementSize
      );
    }, [width, intervals, startingWidth, incrementSize]);
    const fixedWidth = isFixedWidth(normalizedProps.width);
    if (fixedWidth) {
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        FixedWidthImage,
        {
          aspectRatio,
          crop,
          decoding,
          height,
          imageWidths,
          loader,
          loading,
          normalizedProps,
          passthroughProps,
          ref,
          width
        }
      );
    } else {
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        FluidImage,
        {
          aspectRatio,
          crop,
          decoding,
          imageWidths,
          loader,
          loading,
          normalizedProps,
          passthroughProps,
          placeholderWidth,
          ref,
          sizes
        }
      );
    }
  }
);
function FixedWidthImage({
  aspectRatio,
  crop,
  decoding,
  height,
  imageWidths,
  loader = shopifyLoader,
  loading,
  normalizedProps,
  passthroughProps,
  ref,
  width
}) {
  const fixed = React.useMemo(() => {
    const intWidth = getNormalizedFixedUnit(width);
    const intHeight = getNormalizedFixedUnit(height);
    const fixedAspectRatio = aspectRatio ? aspectRatio : unitsMatch(normalizedProps.width, normalizedProps.height) ? [intWidth, intHeight].join("/") : normalizedProps.aspectRatio ? normalizedProps.aspectRatio : void 0;
    const sizesArray = imageWidths === void 0 ? void 0 : generateSizes(imageWidths, fixedAspectRatio, crop);
    const fixedHeight = intHeight ? intHeight : fixedAspectRatio && intWidth ? intWidth * (parseAspectRatio(fixedAspectRatio) ?? 1) : void 0;
    const srcSet = generateSrcSet(normalizedProps.src, sizesArray, loader);
    const src = loader({
      src: normalizedProps.src,
      width: intWidth,
      height: fixedHeight,
      crop: normalizedProps.height === "auto" ? void 0 : crop
    });
    return {
      width: intWidth,
      aspectRatio: fixedAspectRatio,
      height: fixedHeight,
      srcSet,
      src
    };
  }, [aspectRatio, crop, height, imageWidths, loader, normalizedProps, width]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "img",
    {
      ref,
      alt: normalizedProps.alt,
      decoding,
      height: fixed.height,
      loading,
      src: fixed.src,
      srcSet: fixed.srcSet,
      width: fixed.width,
      style: {
        aspectRatio: fixed.aspectRatio,
        ...passthroughProps.style
      },
      ...passthroughProps
    }
  );
}
function FluidImage({
  crop,
  decoding,
  imageWidths,
  loader = shopifyLoader,
  loading,
  normalizedProps,
  passthroughProps,
  placeholderWidth,
  ref,
  sizes
}) {
  const fluid = React.useMemo(() => {
    const sizesArray = imageWidths === void 0 ? void 0 : generateSizes(imageWidths, normalizedProps.aspectRatio, crop);
    const placeholderHeight = normalizedProps.aspectRatio && placeholderWidth ? placeholderWidth * (parseAspectRatio(normalizedProps.aspectRatio) ?? 1) : void 0;
    const srcSet = generateSrcSet(normalizedProps.src, sizesArray, loader);
    const src = loader({
      src: normalizedProps.src,
      width: placeholderWidth,
      height: placeholderHeight,
      crop
    });
    return {
      placeholderHeight,
      srcSet,
      src
    };
  }, [crop, imageWidths, loader, normalizedProps, placeholderWidth]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "img",
    {
      ref,
      alt: normalizedProps.alt,
      decoding,
      height: fluid.placeholderHeight,
      loading,
      sizes,
      src: fluid.src,
      srcSet: fluid.srcSet,
      width: placeholderWidth,
      ...passthroughProps,
      style: {
        width: normalizedProps.width,
        aspectRatio: normalizedProps.aspectRatio,
        ...passthroughProps.style
      }
    }
  );
}
function shopifyLoader({ src, width, height, crop }) {
  if (!src) {
    return "";
  }
  const url = new URL(src);
  if (width) {
    url.searchParams.append("width", Math.round(width).toString());
  }
  if (height) {
    url.searchParams.append("height", Math.round(height).toString());
  }
  if (crop) {
    url.searchParams.append("crop", crop);
  }
  return url.href;
}
function unitsMatch(width = "100%", height = "auto") {
  return getUnitValueParts(width.toString()).unit === getUnitValueParts(height.toString()).unit;
}
function getUnitValueParts(value) {
  const unit = value.replace(/[0-9.]/g, "");
  const number = parseFloat(value.replace(unit, ""));
  return {
    unit: unit === "" ? number === void 0 ? "auto" : "px" : unit,
    number
  };
}
function getNormalizedFixedUnit(value) {
  if (value === void 0) {
    return;
  }
  const { unit, number } = getUnitValueParts(value.toString());
  switch (unit) {
    case "em":
      return number * 16;
    case "rem":
      return number * 16;
    case "px":
      return number;
    case "":
      return number;
    default:
      return;
  }
}
function isFixedWidth(width) {
  const fixedEndings = /\d(px|em|rem)$/;
  return typeof width === "number" || typeof width === "string" && fixedEndings.test(width);
}
function generateSrcSet(src, sizesArray, loader = shopifyLoader) {
  if (!src) {
    return "";
  }
  if ((sizesArray == null ? void 0 : sizesArray.length) === 0 || !sizesArray) {
    return src;
  }
  return sizesArray.map(
    (size, i) => `${loader({
      src,
      width: size.width,
      height: size.height,
      crop: size.crop
    })} ${sizesArray.length === 3 ? `${i + 1}x` : `${size.width ?? 0}w`}`
  ).join(`, `);
}
function generateImageWidths(width = "100%", intervals, startingWidth, incrementSize) {
  const responsive = Array.from(
    { length: intervals },
    (_, i) => i * incrementSize + startingWidth
  );
  const fixed = Array.from(
    { length: 3 },
    (_, i) => (i + 1) * (getNormalizedFixedUnit(width) ?? 0)
  );
  return isFixedWidth(width) ? fixed : responsive;
}
function parseAspectRatio(aspectRatio) {
  if (!aspectRatio)
    return;
  const [width, height] = aspectRatio.split("/");
  return 1 / (Number(width) / Number(height));
}
function generateSizes(imageWidths, aspectRatio, crop = "center") {
  if (!imageWidths)
    return;
  const sizes = imageWidths.map((width) => {
    return {
      width,
      height: aspectRatio ? width * (parseAspectRatio(aspectRatio) ?? 1) : void 0,
      crop
    };
  });
  return sizes;
}

// node_modules/@shopify/hydrogen/dist/production/index.js
var import_react3 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var It = (0, import_react3.lazy)(() => import("/build/_shared/log-seo-tags-TY72EQWZ-G6FBB7A6.js"));
function At({ connection: e, children: t = () => (console.warn("<Pagination> requires children to work properly"), null) }) {
  let r = useNavigation().state === "loading", { endCursor: i, hasNextPage: n, hasPreviousPage: o, nextPageUrl: s, nodes: u, previousPageUrl: c, startCursor: p } = Ot(e), d = (0, import_react3.useMemo)(() => ({ pageInfo: { endCursor: i, hasPreviousPage: o, startCursor: p }, nodes: u }), [i, o, p, u]), l = (0, import_react3.useMemo)(() => function(m) {
    return n ? (0, import_react3.createElement)(Link, { preventScrollReset: true, ...m, to: s, state: d, replace: true }) : null;
  }, [n, s]), h = (0, import_react3.useMemo)(() => function(m) {
    return o ? (0, import_react3.createElement)(Link, { preventScrollReset: true, ...m, to: c, state: d, replace: true }) : null;
  }, [o, c]);
  return t({ state: d, hasNextPage: n, hasPreviousPage: o, isLoading: r, nextPageUrl: s, nodes: u, previousPageUrl: c, NextLink: l, PreviousLink: h });
}
function Ot(e) {
  let { state: t, search: a } = useLocation(), n = new URLSearchParams(a).get("direction") === "previous", o = (0, import_react3.useMemo)(() => !t || !t?.nodes ? flattenConnection(e) : n ? [...flattenConnection(e), ...t.nodes] : [...t.nodes, ...flattenConnection(e)], [t, e]), s = (0, import_react3.useMemo)(() => {
    let p = t?.pageInfo?.startCursor === void 0 ? e.pageInfo.startCursor : t.pageInfo.startCursor, d = t?.pageInfo?.endCursor === void 0 ? e.pageInfo.endCursor : t.pageInfo.endCursor;
    t?.nodes && (n ? p = e.pageInfo.startCursor : d = e.pageInfo.endCursor);
    let l = t?.pageInfo?.hasPreviousPage === void 0 ? e.pageInfo.hasPreviousPage : t.pageInfo.hasPreviousPage, h = t?.pageInfo?.hasNextPage === void 0 ? e.pageInfo.hasNextPage : t.pageInfo.hasNextPage;
    return { startCursor: p, endCursor: d, hasPreviousPage: l, hasNextPage: h };
  }, [n, t, e.pageInfo.hasNextPage, e.pageInfo.hasPreviousPage, e.pageInfo.startCursor, e.pageInfo.endCursor]), u = (0, import_react3.useMemo)(() => {
    let p = new URLSearchParams(a);
    return p.set("direction", "previous"), s.startCursor && p.set("cursor", s.startCursor), `?${p.toString()}`;
  }, [a, s.startCursor]), c = (0, import_react3.useMemo)(() => {
    let p = new URLSearchParams(a);
    return p.set("direction", "next"), s.endCursor && p.set("cursor", s.endCursor), `?${p.toString()}`;
  }, [a, s.endCursor]);
  return { ...s, previousPageUrl: u, nextPageUrl: c, nodes: o };
}
var Ne = "cartFormInput";
function F({ children: e, action: t, inputs: a, route: r }) {
  let i = useFetcher();
  return (0, import_jsx_runtime4.jsxs)(i.Form, { action: r || "", method: "post", children: [(t || a) && (0, import_jsx_runtime4.jsx)("input", { type: "hidden", name: Ne, value: JSON.stringify({ action: t, inputs: a }) }), typeof e == "function" ? e(i) : e] });
}
F.INPUT_NAME = Ne;
F.ACTIONS = { AttributesUpdateInput: "AttributesUpdateInput", BuyerIdentityUpdate: "BuyerIdentityUpdate", Create: "Create", DiscountCodesUpdate: "DiscountCodesUpdate", LinesAdd: "LinesAdd", LinesRemove: "LinesRemove", LinesUpdate: "LinesUpdate", NoteUpdate: "NoteUpdate", SelectedDeliveryOptionsUpdate: "SelectedDeliveryOptionsUpdate", MetafieldsSet: "MetafieldsSet", MetafieldDelete: "MetafieldDelete" };
function Dt(e) {
  let t = {};
  for (let o of e.entries()) {
    let s = o[0], u = e.getAll(s);
    t[s] = u.length > 1 ? u : o[1];
  }
  let { cartFormInput: a, ...r } = t, { action: i, inputs: n } = a ? JSON.parse(String(a)) : {};
  return { action: i, inputs: { ...n, ...r } };
}
F.getFormInput = Dt;
function Xt({ handle: e, options: t = [], variants: a = [], children: r }) {
  let i = a instanceof Array ? a : flattenConnection(a), { searchParams: n, path: o, alreadyOnProductPage: s } = er(e), u = t.filter((c) => c?.values?.length === 1);
  return (0, import_react3.createElement)(import_react3.Fragment, null, ...(0, import_react3.useMemo)(() => t.filter((c) => c?.values?.length > 1).map((c) => {
    let p, d = [];
    for (let l of c.values) {
      let h = new URLSearchParams(s ? n : void 0);
      h.set(c.name, l), u.forEach((S) => {
        h.set(S.name, S.values[0]);
      });
      let R = i.find((S) => S?.selectedOptions?.every((A) => h.get(A?.name) === A?.value)), m = n.get(c.name), O = m ? m === l : false;
      O && (p = l);
      let y = "?" + h.toString();
      d.push({ value: l, isAvailable: R ? R.availableForSale : true, to: o + y, search: y, isActive: O });
    }
    return r({ option: { name: c.name, value: p, values: d } });
  }), [t, i, r]));
}
function er(e) {
  let { pathname: t, search: a } = useLocation();
  return (0, import_react3.useMemo)(() => {
    let r = /(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(t), n = r && r.length > 0 ? `${r[0]}products/${e}` : `/products/${e}`;
    return { searchParams: new URLSearchParams(a), alreadyOnProductPage: n === t, path: n };
  }, [t, a, e]);
}

export {
  Money,
  Image,
  At,
  F,
  Xt
};
/*! Bundled license information:

@shopify/hydrogen/dist/production/index.js:
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartCreate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/queries/cart *)
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesAdd *)
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesUpdate *)
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesRemove *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartDiscountCodesUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartBuyerIdentityUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartNoteUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartSelectedDeliveryOptionsUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartMetafieldsSet *)
  (*! @see https://shopify.dev/docs/api/storefront/2023-07/mutations/cartMetafieldDelete *)
*/
//# sourceMappingURL=/build/_shared/chunk-PWG67MGJ.js.map
