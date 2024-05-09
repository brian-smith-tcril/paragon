function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFloodFill = function SvgFloodFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-80v-60q34-3 54.5-21.5T208-180q53 0 75.5 20t60.5 20q38 0 60.5-20t75.5-20q53 0 76 20t60 20q38 0 60.5-25t75.5-25q53 0 73.5 23.5T880-140v60q-42 0-68.5-25T752-130q-33 0-58 25t-78 25q-53 0-78-20t-58-20q-33 0-58 20t-78 20q-53 0-78-20t-58-20q-33 0-59.5 20T80-80Zm0-190v-60q34-3 54.5-21.5T208-370q11 0 22.5 1.5T251-364l-51-185-62 77-47-38 300-370 445 170-22 56-92-35 86 321q18 10 36.5 24t35.5 13v61q-42 0-68.5-25T752-320q-33 0-58 25t-78 25q-53 0-78-20t-58-20q-33 0-58 20t-78 20q-53 0-78-20t-58-20q-33 0-59.5 20T80-270Zm530-60-55-211-136 36 37 136q5-2 11-1.5t13 .5q50 0 71.5 18t58.5 22Z",
    fill: "currentColor"
  }));
};
export default SvgFloodFill;