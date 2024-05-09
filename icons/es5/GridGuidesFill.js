function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgGridGuidesFill = function SvgGridGuidesFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M222-180h515L620-297q-29 23-64.5 35T480-250q-40 0-75.5-12.5T340-298L222-180Zm-42-43 117-117q-23-29-35-64.5T250-480q0-40 12.5-75.5T298-620L180-738v515Zm160-160 98-97-97-97q-14 21-22.5 45.5T310-480q0 27 8 51.5t22 45.5Zm140 73q27 0 51.5-8t45.5-22l-97-98-97 97q21 14 45.5 22.5T480-310Zm0-213 97-96q-21-14-45.5-22.5T480-650q-27 0-52 8t-45 22l97 97Zm140 140q14-20 22-45t8-52q0-27-8.5-51.5T619-577l-97 96 98 98Zm160 160v-515L662-620q23 29 35.5 64.5T710-480q0 40-12 75.5T663-340l117 117ZM620-662l118-118H223l117 117q29-23 64.5-35t75.5-12q40 0 75.5 12.5T620-662ZM120-120v-720h720v720H120Z",
    fill: "currentColor"
  }));
};
export default SvgGridGuidesFill;