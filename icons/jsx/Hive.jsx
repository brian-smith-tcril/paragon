import * as React from "react";
function SvgHive(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M13.79 8l1.8-3-1.8-3h-3.58l-1.8 3 1.8 3zm-3.58 1l-1.8 3 1.8 3h3.58l1.8-3-1.8-3zm6.24 2.51h3.59l1.79-3-1.79-3h-3.59l-1.8 3zm3.59 1h-3.59l-1.8 3 1.8 3h3.59l1.79-3zm-12.49-1l1.8-3-1.8-3H3.96l-1.79 3 1.79 3zm0 1H3.96l-1.79 3 1.79 3h3.59l1.8-3zM10.21 16l-1.8 3 1.8 3h3.58l1.8-3-1.8-3z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgHive;
