function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStrokePartial = function SvgStrokePartial(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M447-80q-82 0-155-31.5t-127.5-86Q110-252 78.5-325T47-480q0-83 31.5-156t86-127Q219-817 292-848.5T447-880q83 0 156 31.5T730-763q54 54 85.5 127T847-480q0 82-31.5 155T730-197.5q-54 54.5-127 86T447-80Zm305-250H338l-60 60h436q11-14 20.5-29t17.5-31Zm34-120H459l-61 60h377q4-14 6.5-29t4.5-31Zm-11-120H579l-60 60h267q-2-16-4.5-31t-6.5-29Zm-67-128-68 68h112q-9-19-20-35.5T708-698ZM186-262l480-478q-45-38-100.5-59T447-820q-141 0-240.5 99T107-480q0 63 21 118t58 100Zm261 122q59 0 111-18.5t95-51.5H241q43 33 95.5 51.5T447-140Z",
    fill: "currentColor"
  }));
};
export default SvgStrokePartial;