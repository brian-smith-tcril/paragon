function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgWooCommerce = function SvgWooCommerce(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.14 7H3.86C2.83 7 1.99 7.84 2 8.86v6.21c0 1.03.83 1.86 1.86 1.86h7.71l3.52 1.96-.8-1.96h5.84c1.03 0 1.86-.83 1.86-1.86V8.86C22 7.83 21.17 7 20.14 7zM3.51 8.44c-.23.02-.4.1-.51.25-.12.15-.16.34-.13.55.48 3.07.93 5.13 1.35 6.21.16.39.35.58.57.56.34-.02.75-.5 1.23-1.42.25-.52.65-1.31 1.18-2.35.44 1.55 1.05 2.71 1.81 3.48.21.22.43.32.65.3a.51.51 0 0 0 .43-.29c.08-.16.11-.34.1-.54-.05-.74.02-1.78.23-3.12.21-1.37.47-2.36.79-2.95a.688.688 0 0 0-.17-.86.718.718 0 0 0-.52-.16c-.24.02-.42.13-.54.36-.51.92-.87 2.42-1.08 4.5-.31-.78-.57-1.71-.78-2.8-.09-.49-.31-.72-.67-.69-.24.02-.45.18-.61.49l-1.79 3.41c-.29-1.19-.57-2.63-.83-4.34-.05-.43-.29-.62-.71-.59zm15.76.59c.58.12 1.01.43 1.31.95.26.44.39.97.39 1.61 0 .84-.21 1.61-.64 2.31-.49.82-1.13 1.23-1.92 1.23-.14 0-.29-.02-.44-.05a1.88 1.88 0 0 1-1.31-.95c-.26-.45-.39-.99-.39-1.62 0-.84.21-1.61.64-2.31.5-.82 1.14-1.23 1.92-1.23.14.01.28.03.44.06zm-.34 4.42c.3-.27.51-.67.62-1.21.03-.19.06-.39.06-.61 0-.24-.05-.49-.15-.74-.12-.32-.29-.49-.48-.53-.29-.06-.58.11-.85.51a2.609 2.609 0 0 0-.49 1.57c0 .24.05.49.15.74.12.32.29.49.48.53.2.04.42-.05.66-.26zm-3.48-3.47c-.29-.52-.74-.83-1.31-.95-.15-.03-.3-.05-.44-.05-.78 0-1.42.41-1.92 1.23a4.3 4.3 0 0 0-.64 2.31c0 .63.13 1.17.39 1.62.29.52.73.83 1.31.95.16.03.3.05.44.05.79 0 1.43-.41 1.92-1.23.43-.7.64-1.47.64-2.31 0-.65-.13-1.18-.39-1.62zm-1.03 2.26c-.11.54-.32.94-.62 1.21-.24.21-.46.3-.66.26-.2-.04-.36-.21-.48-.53-.1-.25-.15-.51-.15-.74 0-.2.02-.41.06-.6.07-.34.21-.66.43-.97.27-.4.56-.56.85-.51.2.04.36.21.48.53.1.25.15.51.15.74 0 .22-.02.42-.06.61z",
    fill: "currentColor"
  }));
};
export default SvgWooCommerce;