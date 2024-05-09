function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRecentPatient = function SvgRecentPatient(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q27.5 0 55 3t55 9v59q-28-6-55-8.5t-55-2.5q-57 0-110.5 12T252-306q-14 7-23 21.5t-9 30.5v34h370v60H160Zm60-60h370-370Zm260-261q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm0-60q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90ZM730-38v-172h-80v-220h214l-80 160h79L730-38Z",
    fill: "currentColor"
  }));
};
export default SvgRecentPatient;