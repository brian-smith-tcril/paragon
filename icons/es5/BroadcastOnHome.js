function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgBroadcastOnHome = function SvgBroadcastOnHome(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 9.76V4H4v2h16v2.59c.73.29 1.4.69 2 1.17zM9 9H2v11h7V9zm-2 9H4v-7h3v7zm10.75-1.03c.3-.23.5-.57.5-.97a1.25 1.25 0 0 0-2.5 0c0 .4.2.75.5.97V22h1.5v-5.03z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 13.5a2.5 2.5 0 0 1 2.5 2.5c0 .69-.28 1.31-.73 1.76l1.06 1.06C20.55 18.1 21 17.1 21 16c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 1.1.45 2.1 1.17 2.83l1.06-1.06A2.5 2.5 0 0 1 17 13.5z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 9.5a6.5 6.5 0 0 0-6.5 6.5c0 1.79.73 3.42 1.9 4.6l1.06-1.06C12.56 18.63 12 17.38 12 16c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.37-.56 2.62-1.46 3.52l1.07 1.06A6.5 6.5 0 0 0 17 9.5z",
    fill: "currentColor"
  }));
};
export default SvgBroadcastOnHome;