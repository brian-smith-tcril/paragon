function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWaterPhFill = function SvgWaterPhFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M440-80v-240h200v160H488v80h-48Zm238 0v-240h48v89h108v-89h48v240h-48v-103H726v103h-48ZM488-208h104v-64H488v64ZM380-81q-130-8-215-100T80-408q0-100 79.5-217.5T400-880q161 137 240.5 254.5T720-408v14q0 7-1 14H380v299Z",
    fill: "currentColor"
  }));
};
export default SvgWaterPhFill;