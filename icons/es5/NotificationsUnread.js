function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgNotificationsUnread = function SvgNotificationsUnread(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm0-422ZM160-200v-60h80v-304q0-84 49.5-150.5T420-798v-82h119v50q-12 20-19 42.5t-9 46.5q-8-2-15.28-2.5-7.29-.5-15.72-.5-75 0-127.5 52.5T300-564v304h360v-284q15 3 30 4t30-1v281h80v60H160Zm540.88-420Q655-620 623-652.12q-32-32.12-32-78T623.12-808q32.12-32 78-32T779-807.88q32 32.12 32 78T778.88-652q-32.12 32-78 32Z",
    fill: "currentColor"
  }));
};
export default SvgNotificationsUnread;