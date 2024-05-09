function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMatchWord = function SvgMatchWord(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M40-199v-190h60v130h760v-130h60v190H40Zm346-162v-43h-4q-14 23-36 35t-51 12q-43 0-69-23.5T200-443q0-43 30.5-69.5T312-539q20 0 39.5 4t33.5 12v-20q0-35-19-54t-54-19q-22 0-40 7.5T238-586l-29-25q21-22 46-32t57-10q56 0 85 28.5t29 85.5v178h-40Zm-68-143q-35 0-55.5 16T242-444q0 24 15 38t41 14q38 0 63-27.5t25-68.5q-12-8-30.5-12t-37.5-4Zm185 143v-400h40v133l-3 40h2q13-20 39-33t56-13q51 0 87.5 39t36.5 99q0 60-36 99.5T637-357q-29 0-53.5-12T545-401h-2v40h-40Zm126-237q-38 0-63.5 29.5T540-495q0 44 25.5 72.5T629-394q38 0 64-29t26-73q0-44-26-73t-64-29Z",
    fill: "currentColor"
  }));
};
export default SvgMatchWord;