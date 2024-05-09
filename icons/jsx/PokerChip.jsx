import * as React from "react";
const SvgPokerChip = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-30-61v-65q-41-5-77-20t-66-39l-46 46q39 33 87 53t102 25Zm60 0q54-5 102-25t87-53l-46-46q-30 24-66 39t-77 20v65Zm-30-122q91 0 154-63t63-154q0-91-63-154t-154-63q-91 0-154 63t-63 154q0 91 63 154t154 63Zm261 2q33-39 53-87t25-102h-65q-5 41-20 77t-39 66l46 46Zm-522 0 46-46q-24-30-39-66t-20-77h-65q5 54 25 102t53 87Zm261-73L370-480l110-146 109 146-109 146ZM141-510h65q5-41 20-77t39-66l-46-46q-33 39-53 87t-25 102Zm613 0h65q-5-54-25-102t-53-87l-46 46q24 30 39 66t20 77ZM307-695q30-24 66-39t77-20v-65q-54 5-102 25t-87 53l46 46Zm346 0 46-46q-39-33-87-53t-102-25v65q41 5 77 20t66 39Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPokerChip;
