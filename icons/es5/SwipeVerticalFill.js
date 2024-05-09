function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSwipeVerticalFill = function SvgSwipeVerticalFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-80v-40h93q-62-78-97.5-169T40-480q0-100 35.5-191T173-840H80v-40h180v180h-40v-133q-65 75-102.5 164.5T80-480q0 99 37.5 188.5T220-127v-133h40v180H80Zm524-31L295-254l18-68 141-11-127-347 57-22 109 301 63-23-61-169 56-20 61 169 62-23-47-131 56-21 48 132 63-23-21-56 57-22 125 348-351 129Z",
    fill: "currentColor"
  }));
};
export default SvgSwipeVerticalFill;