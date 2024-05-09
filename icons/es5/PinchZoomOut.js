function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPinchZoomOut = function SvgPinchZoomOut(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M40-490v-170h40v102l131-131 28 28-131 131h102v40H40Zm259-231-28-28 131-131H300v-40h170v170h-40v-102L299-721ZM544-40 304-280l39-57 137 37v-370h60v450l-124-33 153 153h291v-310h60v370H544Zm63-290v-200h60v200h-60Zm126 0v-160h60v160h-60Zm-36 105Z",
    fill: "currentColor"
  }));
};
export default SvgPinchZoomOut;