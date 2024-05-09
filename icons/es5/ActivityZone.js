function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgActivityZone = function SvgActivityZone(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M200-80q-50 0-85-35t-35-85q0-42 25.5-74t64.5-42v-328q-39-10-64.5-42T80-760q0-50 35-85t85-35q42 0 74 25.5t42 64.5h328q10-39 42.01-64.5T760-880q50 0 85 35t35 85q0 41.98-25.5 73.99T790-644v328q39 10 64.5 42t25.5 74q0 50-35 85t-85 35q-42 0-74-25.5T644-170H316q-10 39-42 64.5T200-80Zm0-620q25.5 0 42.75-17.25T260-760q0-25.5-17.25-42.75T200-820q-25.5 0-42.75 17.25T140-760q0 25.5 17.25 42.75T200-700Zm560 0q25.5 0 42.75-17.25T820-760q0-25.5-17.25-42.75T760-820q-25.5 0-42.75 17.25T700-760q0 25.5 17.25 42.75T760-700ZM316-230h328q8-32 31-55t55-31v-328q-32-8-55-31t-31-55H316q-8 32-31 55t-55 31v328q32 8 55 31t31 55Zm444 90q25.5 0 42.75-17.25T820-200q0-25.5-17.25-42.75T760-260q-25.5 0-42.75 17.25T700-200q0 25.5 17.25 42.75T760-140Zm-560 0q25.5 0 42.75-17.25T260-200q0-25.5-17.25-42.75T200-260q-25.5 0-42.75 17.25T140-200q0 25.5 17.25 42.75T200-140Zm0-620Zm560 0Zm0 560Zm-560 0Z",
    fill: "currentColor"
  }));
};
export default SvgActivityZone;