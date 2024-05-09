function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgProcedure = function SvgProcedure(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M760-520q-38 0-81-21.5T599-601q-37-38-58.5-81T519-761q0-17.21 5-31.38 5-14.18 15-24.3Q565-843 644.5-862.5T794-879q24 1 41 5.5t25 12.5q7 7 11.09 21.5T877-803q5 70-14 153t-45.27 109.27Q808-531 792.5-525.5T760-520Zm43-143q8-32 12-70.5t5-85.37Q772-821 732-817t-75 14q23 14 44 29.67 21 15.66 39 31.33 22 20 37.5 39.5T803-663Zm-32 84q-4-31-21.5-59T696-698q-36-32-64.5-50T580-771q2 32 19.5 68t41.5 60q30 30 61 45.5t69 18.5Zm81 353L668-410H268L66-612l42-42 184 184h400l202 202-42 42ZM330-90v-160q0-25 17.63-42.5Q365.25-310 390-310h180q24.75 0 42.38 17.62Q630-274.75 630-250v160H330Zm60-60h180v-100H390v100Zm0 0v-100 100Z",
    fill: "currentColor"
  }));
};
export default SvgProcedure;