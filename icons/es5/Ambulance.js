function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAmbulance = function SvgAmbulance(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M450-810v-150h60v150h-60Zm-187 53L152-869l42-43 112 112-43 43ZM120-40v-354l98-286h157v-75h153q-23 29-37.5 63T472-620H258l-60 176h323q13 17 29 32.5t34 27.5H180v200h600v-163q16-4 30.92-9.14Q825.83-361.29 840-369v329h-81v-84H200v84h-80Zm130-214h150v-60H250v60Zm460 0v-60H560v60h150Zm-530 70v-200 200Zm518-326 141-142-28-28-113 114-59-60-28 29 87 87Zm27 109q-80.51 0-137.26-56.74Q531-514.49 531-595q0-80.51 56.74-137.26Q644.49-789 725-789q80.51 0 137.26 56.74Q919-675.51 919-595q0 80.51-56.74 137.26Q805.51-401 725-401Z",
    fill: "currentColor"
  }));
};
export default SvgAmbulance;