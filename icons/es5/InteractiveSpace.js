function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgInteractiveSpace = function SvgInteractiveSpace(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m281-625 75-75-75-75-75 75 75 75Zm199-35ZM80-400v-520h800v520H671q5-14 7-29t2-31h140v-400H140v400h140q0 16 2 31t7 29H80Zm580.06-285Q683-685 699-701.06q16-16.06 16-39T698.94-779q-16.06-16-39-16T621-778.94q-16 16.06-16 39T621.06-701q16.06 16 39 16ZM200-40v-84q0-35 19.5-65t51.5-45q49-23 102-34.5T480-280q54 0 107 11.5T689-234q32 15 51.5 45t19.5 65v84H200Zm60-60h440v-24q0-17.63-10-32.31Q680-171 663-179q-43-20-89-30.5T480-220q-48 0-94 10.5T297-179q-17 8-27 22.69-10 14.68-10 32.31v24Zm220-220q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm-.24-60q33.24 0 56.74-23.26 23.5-23.27 23.5-56.5 0-33.24-23.26-56.74-23.27-23.5-56.5-23.5-33.24 0-56.74 23.26-23.5 23.27-23.5 56.5 0 33.24 23.26 56.74 23.27 23.5 56.5 23.5Zm.24-80Zm0 360Z",
    fill: "currentColor"
  }));
};
export default SvgInteractiveSpace;