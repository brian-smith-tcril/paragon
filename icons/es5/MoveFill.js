function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMoveFill = function SvgMoveFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M440-280q-7 0-12-4t-7-10q-14-42-34-70t-40-54q-20-26-33.5-54T300-540q0-58 41-99t99-41q58 0 99 41t41 99q0 40-13.5 68T533-418q-20 26-40 54t-34 70q-2 6-7 10t-12 4Zm0-210q21 0 35.5-14.5T490-540q0-21-14.5-35.5T440-590q-21 0-35.5 14.5T390-540q0 21 14.5 35.5T440-490Zm3 374q-152 0-258-106T79-480q0-76 28.5-142t78-115.5Q235-787 301-815.5T443-844q76 0 142 28.5t115.5 78Q750-688 778.5-622T807-480v18l70-70 42 42-142 142-142-142 42-42 70 70v-18q0-125-89.5-214.5T443-784q-125 0-214.5 89.5T139-480q0 125 89.5 214.5T443-176q57 0 110.5-21.5T647-256l43 43q-48 45-113 71t-134 26Z",
    fill: "currentColor"
  }));
};
export default SvgMoveFill;