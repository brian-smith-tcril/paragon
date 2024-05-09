function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMediaOutput = function SvgMediaOutput(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M340-520ZM80-160v-720h520v262.83q-16 2.17-30.92 5.64-14.91 3.48-29.08 8.53v-217H139v600h201v60H80Zm260-120v-40q0-5.16.5-10.08t.5-9.92q-33 0-57.5-23.5T259-420q0-33.33 23.33-56.67Q305.67-500 339-500q14 0 26 4.5t23 12.5q8-13 17-24.5t20-22.5q-18-14-39.5-22t-46.5-8q-58 0-99 41t-41 99q0 57.71 41.5 98.85Q282-280 340-280Zm0-340q25 0 42.5-17.5T400-680q0-25-17.5-42.5T340-740q-25 0-42.5 17.5T280-680q0 25 17.5 42.5T340-620ZM540-80H400v-240q0-100 70-170t170-70q100 0 170 70t70 170v240H740v-180h100v-60q0-83.33-58.26-141.67Q723.47-520 640.24-520 557-520 498.5-461.67 440-403.33 440-320v60h100v180Z",
    fill: "currentColor"
  }));
};
export default SvgMediaOutput;