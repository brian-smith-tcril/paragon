function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRequestQuoteFill = function SvgRequestQuoteFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M450-201h60v-40h90v-190H420v-70h180v-60h-90v-40h-60v40h-90v190h180v70H360v60h90v40ZM160-80v-800h421l219 219v581H160Zm60-60h520v-494H554v-186H220v680Zm0-680h334v186h186L554-820v186h186v494H220v-680Z",
    fill: "currentColor"
  }));
};
export default SvgRequestQuoteFill;