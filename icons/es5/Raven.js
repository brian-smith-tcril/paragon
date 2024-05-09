function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRaven = function SvgRaven(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m324-83-55-23 60-145q-110-24-179.5-111.5T80-562.24V-727q0-64 45.24-108.5T234-880q17.39 0 33.19 4Q283-872 299-865l234 97-146 54v76l453 288 40 190h-80l-38-84H552v164h-60v-164H391L324-83Zm74-221h402l-101-64H397.6q-68.6 0-119.1-46T228-528h60q0 43 32.31 71.5Q352.63-428 398-428h207L327-605v-122q0-38.36-27.45-65.68-27.45-27.32-66-27.32t-66.05 27Q140-766 140-727v165q0 107.5 75.25 182.75T398-304ZM234.18-697q-12.83 0-21.5-8.68-8.68-8.67-8.68-21.5 0-12.82 8.68-20.82 8.67-8 21.5-8 12.82 0 20.82 8t8 20.82q0 12.83-8 21.5-8 8.68-20.82 8.68ZM398-368Z",
    fill: "currentColor"
  }));
};
export default SvgRaven;