function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSwitches = function SvgSwitches(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M270-289q-80 0-135-54.5T80-479q0-81 54.5-135.5T270-669q51 0 90 22t65 63h455v210H425q-26 41-65 63t-90 22Zm3-190Zm180 45h367v-90H453q4 10 5.5 22t1.5 23q0 11-1.5 23t-5.5 22Zm-183 85q55 0 92.5-37.5T400-479q0-55-37.5-92.5T270-609q-55 0-92.5 37.5T140-479q0 55 37.5 92.5T270-349Z",
    fill: "currentColor"
  }));
};
export default SvgSwitches;