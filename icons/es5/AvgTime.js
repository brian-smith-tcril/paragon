function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAvgTime = function SvgAvgTime(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-81q-74 0-139.5-28.5T226-187q-49-49-77.5-114.5T120-441h60q0 125 87.5 212.5T480-141q125 0 212.5-87.5T780-441h60q0 74-28.5 139.5T734-187q-49 49-114.5 77.5T480-81ZM120-441q0-74 28.5-139.5T226-695q49-49 114.5-77.5T480-801q67 0 126 22.5T711-716l51-51 42 42-51 51q36 40 61.5 97T840-441h-60q0-125-87.5-212.5T480-741q-125 0-212.5 87.5T180-441h-60Zm240-419v-60h240v60H360Zm120 119q-118 0-203 78t-96 193h157l62 123 160-320 99 197h120q-11-115-96-193t-203-78Zm0 600q118 0 202.5-77.5T778-410H622l-62-123-160 320-99-197H182q11 114 95.5 191.5T480-141Zm0 0q-125 0-212.5-87.5T180-441q0-125 87.5-212.5T480-741q125 0 212.5 87.5T780-441q0 125-87.5 212.5T480-141Zm0-299Z",
    fill: "currentColor"
  }));
};
export default SvgAvgTime;