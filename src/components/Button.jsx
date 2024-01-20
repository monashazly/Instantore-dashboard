import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Button = ({ bgColor, color, size, text, borderRadius , icon , location }) => {
   const { handleClick } = useStateContext()

  return (
    <button
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      onClick={() => handleClick(location , false)}
    >
      { icon ? icon : text}
    </button>
  );
};

export default Button;
