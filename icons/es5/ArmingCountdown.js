function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgArmingCountdown = function SvgArmingCountdown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-325q72.92 0 123.96-51.04Q655-427.08 655-500q0-72.08-51.5-122.54Q552-673 480-675v50q52 1 88.5 37.24 36.5 36.23 36.5 88 0 51.76-36.46 88.26Q532.08-375 480-375q-33.37 0-62.18-16Q389-407 372-436l-43 24q24 40 63.81 63.5Q432.61-325 480-325ZM330.12-471q10.88 0 17.88-7.12 7-7.11 7-18 0-10.88-7.12-17.88-7.11-7-18-7-10.88 0-17.88 7.12-7 7.11-7 18 0 10.88 7.12 17.88 7.11 7 18 7Zm22-84q10.88 0 17.88-7.12 7-7.11 7-18 0-10.88-7.12-17.88-7.11-7-18-7-10.88 0-17.88 7.12-7 7.11-7 18 0 10.88 7.12 17.88 7.11 7 18 7Zm58-55q10.88 0 17.88-7.12 7-7.11 7-18 0-10.88-7.12-17.88-7.11-7-18-7-10.88 0-17.88 7.12-7 7.11-7 18 0 10.88 7.12 17.88 7.11 7 18 7ZM480-81q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Zm0-62q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143Zm0-337Z",
    fill: "currentColor"
  }));
};
export default SvgArmingCountdown;