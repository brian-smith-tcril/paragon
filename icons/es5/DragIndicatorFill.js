function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDragIndicatorFill = function SvgDragIndicatorFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M358.41-160Q326-160 303-183.29t-23-56Q280-272 303.23-295t55.86-23q31.91 0 55.41 23.29 23.5 23.29 23.5 56T414.41-183q-23.59 23-56 23Zm241 0Q567-160 544-183.29t-23-56Q521-272 544.23-295t55.86-23q31.91 0 55.41 23.29 23.5 23.29 23.5 56T655.41-183q-23.59 23-56 23Zm-241-241Q326-401 303-423.09t-23-57q0-32.62 23.23-55.77Q326.46-559 359.09-559q31.91 0 55.41 23.23 23.5 23.23 23.5 55.86Q438-445 414.41-423t-56 22Zm241 0Q567-401 544-423.09t-23-57q0-32.62 23.23-55.77Q567.46-559 600.09-559q31.91 0 55.41 23.23 23.5 23.23 23.5 55.86Q679-445 655.41-423t-56 22Zm-241-241Q326-642 303-665.29t-23-56Q280-754 303.23-777t55.86-23q31.91 0 55.41 23.29 23.5 23.29 23.5 56T414.41-665q-23.59 23-56 23Zm241 0Q567-642 544-665.29t-23-56Q521-754 544.23-777t55.86-23q31.91 0 55.41 23.29 23.5 23.29 23.5 56T655.41-665q-23.59 23-56 23Z",
    fill: "currentColor"
  }));
};
export default SvgDragIndicatorFill;