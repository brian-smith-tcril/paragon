function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgReminderFill = function SvgReminderFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M260-620h60v-60q0-25.5-17.25-42.75T260-740q-25.5 0-42.75 17.25T200-680q0 25.5 17.25 42.75T260-620Zm180 0q25.5 0 42.75-17.25T500-680q0-25.5-17.25-42.75T440-740q-25.5 0-42.75 17.25T380-680v60h60Zm-60 100h420v440H381L127-403l52-57 141 75v-175h-60q-50 0-85-35t-35-85q0-50 35-85t85-35q16 0 31 4t29 12v-96h60v96q14.24-8 28.98-12 14.75-4 31.02-4 50 0 85 35t35 85q0 50-35 85t-85 35h-60v40Z",
    fill: "currentColor"
  }));
};
export default SvgReminderFill;