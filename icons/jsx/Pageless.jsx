import * as React from "react";
const SvgPageless = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M40-80v-330h60v270h310v60H40Zm510 0v-60h310v-270h60v330H550ZM40-550v-330h370v60H100v270H40Zm820 0v-270H550v-60h370v330h-60Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPageless;
