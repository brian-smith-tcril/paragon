function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRowingFill = function SvgRowingFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M734 0 622-112v-62L301-495q-6 2-12.5 3t-11.5 1v-53q49-2 111-29t93-61l58-63q12-13 27.5-21t32.5-8q32 0 55 23t23 55v248q0 30-13.5 61T630-297L516-411v-174q-30 26-67 46t-70 32l288 288h62l112 112L734 0ZM205-144l-45-45 206-204 105 105H350L205-144Zm399-630q-30 0-51.5-21.5T531-847q0-30 21.5-51.5T604-920q30 0 51.5 21.5T677-847q0 30-21.5 51.5T604-774Z",
    fill: "currentColor"
  }));
};
export default SvgRowingFill;