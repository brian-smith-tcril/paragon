import * as React from "react";
const SvgRipples = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M180-180h600v-371q-21 13-45.14 19-24.13 6-48.86 6-66.83 0-114.41-47.59Q524-621.17 524-688q0-24.05 6-47.52Q536-759 549-780H180v600Zm-60 60v-720h720v720H120Zm60-660v600-600Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgRipples;
