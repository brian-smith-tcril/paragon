function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgSa = function SvgSa(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M11.982 2c2.797 0 5.166.97 7.107 2.91C21.03 6.84 22 9.204 22 12c0 2.798-.953 5.143-2.858 7.036C17.131 21.012 14.743 22 11.982 22c-2.703 0-5.048-.982-7.035-2.947C2.982 17.09 2 14.74 2 12c0-2.726.982-5.089 2.947-7.089C6.887 2.971 9.232 2 11.982 2Zm.036 1.804c-2.274 0-4.196.804-5.768 2.41C4.619 7.87 3.803 9.799 3.803 12c0 2.227.81 4.143 2.429 5.75 1.619 1.62 3.547 2.428 5.785 2.428 2.226 0 4.167-.815 5.822-2.446 1.571-1.524 2.357-3.434 2.357-5.732 0-2.285-.798-4.214-2.393-5.785-1.583-1.608-3.512-2.411-5.785-2.411Zm-4.465 6.785c.19-1.226.685-2.176 1.482-2.848.798-.673 1.768-1.009 2.91-1.009 1.572 0 2.822.506 3.75 1.518.93 1.012 1.394 2.31 1.394 3.893 0 1.535-.482 2.812-1.446 3.83-.965 1.017-2.215 1.526-3.75 1.526-1.132 0-2.108-.339-2.93-1.017-.82-.68-1.315-1.643-1.481-2.893H10c.06 1.214.792 1.821 2.197 1.821.701 0 1.267-.303 1.696-.91.429-.607.643-1.417.643-2.429 0-1.06-.196-1.866-.589-2.42-.393-.553-.958-.83-1.697-.83-1.333 0-2.083.59-2.25 1.768h.732L8.752 12.57l-1.983-1.982h.785Z",
    fill: "currentColor"
  }));
};
export default SvgSa;