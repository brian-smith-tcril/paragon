function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSensorsFill = function SvgSensorsFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M197-197q-54-54-85.5-126.5T80-480q0-84 31.5-156.5T197-763l42 43q-46 46-72.5 107.5T140-480q0 71 26.5 132.5T240-239l-43 42Zm113-113q-32-32-51-75.5T240-480q0-51 19-94.5t51-75.5l42 43q-24 24-38 56.5T300-480q0 38 14 70.5t39 57.5l-43 42Zm170-90q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm170 90-42-43q24-24 38-56.5t14-70.5q0-38-14-70.5T607-608l43-42q32 32 51 75.5t19 94.5q0 50-19 93.5T650-310Zm113 113-42-43q46-46 72.5-107.5T820-480q0-71-26.5-132.5T720-721l43-42q54 55 85.5 127.5T880-480q0 83-31.5 155.5T763-197Z",
    fill: "currentColor"
  }));
};
export default SvgSensorsFill;