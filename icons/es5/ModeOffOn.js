function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgModeOffOn = function SvgModeOffOn(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M479.82-478q-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-346q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v346q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63Zm.18 360q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-478q0-64 22.5-123.5T207-709q9-10 22-10.5t22.75 9.25Q260-702 258.5-689.5T249-667q-34 39-51.5 88.24Q180-529.53 180-478q0 125.36 87.32 212.68Q354.64-178 480-178q125.36 0 212.68-87.32Q780-352.64 780-478q0-53-17.5-101.5T711-668q-8.33-10.05-9.17-22.02Q701-702 709-710q10-10 24-9t23 12q42 48 63 107t21 122q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-118Z",
    fill: "currentColor"
  }));
};
export default SvgModeOffOn;