function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgViewHeadlineFill = function SvgViewHeadlineFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-372v-60h640v60H160Zm0 160v-60h640v60H160Zm0-316v-60h640v60H160Zm0-160v-60h640v60H160Z",
    fill: "currentColor"
  }));
};
export default SvgViewHeadlineFill;