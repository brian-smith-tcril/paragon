function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgModeHeatCool = function SvgModeHeatCool(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M298-278q-77-20-127.5-84T120-510q0-79 37.5-140.5T240-754q45-42 82.5-64l37.5-22v99q0 25 18 42.5t43 17.5q14 0 26-6t20-17l13-16q43 24 71.5 62.5T592-572l-52 52q-2-34-16.5-64.5T486-641q-15 8-31.5 14t-33.5 6q-45 0-76-31.5T303-729q-49 45-86 99t-37 120q0 41 16.5 75.5T241-375q-1-4-1-7v-7q0-23 9.5-44.5T276-472l84-84 86 84q6 6 10.5 12.5T465-445l-46 46q-2-8-6-16t-10-14l-43-43-42 43q-8 8-13 18.5t-5 21.5q0 23 14.5 39t36.5 19l-53 53Zm62-278Zm0 0ZM258-70l-42-42 592-592 42 42-184 184h184v60H606l-30 30 70 70h204v60H706l115 115-42 42-115-115v146h-60v-206l-70-70-30 30v246h-60v-186L258-70Z",
    fill: "currentColor"
  }));
};
export default SvgModeHeatCool;