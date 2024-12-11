function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgDiversity2 = function SvgDiversity2(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m10.1 15.9 1.42-1.42C8.79 12.05 7 10.41 7 8.85 7 7.8 7.8 7 8.85 7c1.11 0 1.54.65 2.68 2h.93c1.12-1.31 1.53-2 2.68-2 .87 0 1.55.54 1.77 1.32.35-.04.68-.06 1-.06.36 0 .7.03 1.03.08C18.7 6.43 17.13 5 15.15 5c-.12 0-.23.03-.35.04.12-.33.2-.67.2-1.04 0-1.66-1.34-3-3-3S9 2.34 9 4c0 .37.08.71.2 1.04-.12-.01-.23-.04-.35-.04C6.69 5 5 6.69 5 8.85c0 2.42 2.04 4.31 5.1 7.05z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.5 16.24c-.32-.18-.66-.29-1-.35.07-.1.15-.18.21-.28 1.08-1.87.46-4.18-1.41-5.26-2.09-1.21-4.76-.39-8.65.9l.52 1.94c3.47-1.14 5.79-1.88 7.14-1.1.91.53 1.2 1.61.68 2.53-.56.96-1.33 1-3.07 1.32l-.47.81c.58 1.62.97 2.33.39 3.32-.53.91-1.61 1.2-2.53.68-.06-.03-.11-.09-.17-.13-.3.67-.64 1.24-1.03 1.73.07.04.13.09.2.14 1.87 1.08 4.18.46 5.26-1.41.06-.1.09-.21.14-.32.22.27.48.51.8.69 1.43.83 3.27.34 4.1-1.1s.32-3.29-1.11-4.11z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.32 14.01c-.74 3.58-1.27 5.95-2.62 6.73-.91.53-2 .24-2.53-.68-.56-.96-.2-1.66.39-3.32l-.46-.81c-1.7-.31-2.5-.33-3.07-1.32-.53-.91-.24-2 .68-2.53.09-.05.19-.08.29-.11-.35-.56-.64-1.17-.82-1.85-.16.07-.32.14-.48.23-1.87 1.08-2.49 3.39-1.41 5.26.06.1.14.18.21.28-.34.06-.68.17-1 .35-1.43.83-1.93 2.66-1.1 4.1s2.66 1.93 4.1 1.1c.32-.18.58-.42.8-.69.05.11.08.22.14.32 1.08 1.87 3.39 2.49 5.26 1.41 2.09-1.21 2.71-3.93 3.55-7.94l-1.93-.53z",
    fill: "currentColor"
  }));
};
export default SvgDiversity2;