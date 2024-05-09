function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCameraVideo = function SvgCameraVideo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M358-180h244l-25-100H383l-25 100Zm2-160h240q91.3 0 155.65-64.29Q820-468.58 820-559.79T755.65-715.5Q691.3-780 600-780H360q-91.3 0-155.65 64.29Q140-651.42 140-560.21t64.35 155.71Q268.7-340 360-340Zm120-120q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM257-613q12 0 21-9t9-21.5q0-12.5-9-21t-21.5-8.5q-12.5 0-21 8.62-8.5 8.63-8.5 21.38 0 12 8.63 21 8.62 9 21.37 9Zm-97 493v-60h137l26-102q-103-14-173-92.5T80-560q0-117 81.5-198.5T360-840h240q117 0 198.5 81.5T880-560q0 107-70 185.5T637-282l26 102h137v60H160Zm320-280q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160ZM358-180h244-244Z",
    fill: "currentColor"
  }));
};
export default SvgCameraVideo;