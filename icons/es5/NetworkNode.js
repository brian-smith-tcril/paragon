function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgNetworkNode = function SvgNetworkNode(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M209.9-80Q156-80 118-118.1q-38-38.1-38-92t38.07-91.9q38.07-38 91.93-38 19 0 36 5.03T278-321l172-171v-131q-43-11-71.5-45.99T350-750q0-53.86 38.1-91.93 38.1-38.07 92-38.07t91.9 38.07q38 38.07 38 91.93 0 46.02-28.5 81.01T510-623v131l172 171q15.45-8.94 32.45-13.97 17-5.03 35.55-5.03 53.86 0 91.93 38.1 38.07 38.1 38.07 92T841.9-118q-38.1 38-92 38T658-118.07q-38-38.07-38-91.93 0-19 5.03-36T639-278L480-438 321-278q8.94 15 13.97 32 5.03 17 5.03 36 0 53.86-38.1 91.93Q263.8-80 209.9-80Zm539.98-60q29.12 0 49.62-20.38 20.5-20.38 20.5-49.5t-20.38-49.62q-20.38-20.5-49.5-20.5t-49.62 20.38q-20.5 20.38-20.5 49.5t20.38 49.62q20.38 20.5 49.5 20.5Zm-270-540q29.12 0 49.62-20.38 20.5-20.38 20.5-49.5t-20.38-49.62q-20.38-20.5-49.5-20.5t-49.62 20.38q-20.5 20.38-20.5 49.5t20.38 49.62q20.38 20.5 49.5 20.5Zm-270 540q29.12 0 49.62-20.38 20.5-20.38 20.5-49.5t-20.38-49.62q-20.38-20.5-49.5-20.5t-49.62 20.38q-20.5 20.38-20.5 49.5t20.38 49.62q20.38 20.5 49.5 20.5Z",
    fill: "currentColor"
  }));
};
export default SvgNetworkNode;