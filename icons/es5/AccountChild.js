function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAccountChild = function SvgAccountChild(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-880q83.73 0 156.86 31Q710-818 764-764t85 127.14q31 73.13 31 156.86 0 84-31 157t-85 127q-54 54-127.14 85Q563.73-80 480-80q-84 0-157-31t-127-85q-54-54-85-127T80-480q0-83.73 31-156.86Q142-710 196-764t127-85q73-31 157-31Zm0 740q142 0 241-99t99-241q0-142-99-241t-241-99q-142 0-241 99t-99 241q0 142 99 241t241 99Zm-86-546q0 38 24 62t62 24q38 0 62-24t24-62q0-38-24-62t-62-24q-38 0-62 24t-24 62Zm86 126q-66 0-133 28.6T280-450v159q0 48.23 70.5 81.12Q421-177 502-182.86V-261q-34-1-70-9t-61-22q1-26 32.5-41.5T480-349q45 0 77 12t32 34v99q45-10 68-35.5t23-51.5v-159q0-52.8-67-81.4Q546-560 480-560Zm0 189q-23.52 0-39.76-16.24T424-427q0-23.52 16.24-39.76T480-483q23.52 0 39.76 16.24T536-427q0 23.52-16.24 39.76T480-371Zm0-112Z",
    fill: "currentColor"
  }));
};
export default SvgAccountChild;