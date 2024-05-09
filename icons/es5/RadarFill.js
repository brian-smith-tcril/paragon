function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRadarFill = function SvgRadarFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-60q63 0 118.5-20.5T699-219l-72-71q-31 23-68 36.5T480-240q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 42-13.5 79T670-333l71 71q37-45 58-100t21-118q0-142-99-241t-241-99q-142 0-241 99t-99 241q0 142 99 241t241 99Zm0-160q29 0 55.5-8.5T584-333l-74-73q-7 3-14.5 4.5T480-400q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 8-2 16t-5 16l74 72q16-22 24.5-48.5T660-480q0-75-52.5-127.5T480-660q-75 0-127.5 52.5T300-480q0 75 52.5 127.5T480-300Z",
    fill: "currentColor"
  }));
};
export default SvgRadarFill;