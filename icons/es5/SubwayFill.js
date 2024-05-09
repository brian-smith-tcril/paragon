function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSubwayFill = function SvgSubwayFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-80v-534q0-82 42.5-144T241-850q56-21 119-25.5t120-4.5q57 0 120.5 4.5T720-850q76 30 118 92t42 144v534H80Zm267-60 81-81h104l81 81h48v-20l-61-61q47 0 83.5-31.5T720-340v-263q0-72-75-94.5T480-720q-106 0-173 22.5T240-603v263q0 60 41 89.5t79 29.5l-61 61v20h48Zm-62-288v-175h390v175H285Zm335 127q-17 0-28-11t-11-28q0-17 11-28t28-11q17 0 28 11t11 28q0 17-11 28t-28 11Zm-280 0q-17 0-28-11t-11-28q0-17 11-28t28-11q17 0 28 11t11 28q0 17-11 28t-28 11Z",
    fill: "currentColor"
  }));
};
export default SvgSubwayFill;