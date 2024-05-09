import * as React from "react";
const SvgComicBubble = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="m440-831-91.21 91.21H220.21v128.58L129-520l91.21 91.21v128.58h128.58L440-209l104-104 210 107-108-209 105-105-91.21-91.21v-128.58H531.21L440-831Zm0-85 116 116h164v164l116 116-116 116 129 253-40 40-253-129-116 116-116-116H160v-164L44-520l116-116v-164h164l116-116Zm1 398Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComicBubble;
