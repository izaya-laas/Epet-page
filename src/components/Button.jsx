import React from "react";
const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-[#0f172a] hover:duration-300 hover:transition-all   text-white font-bold py-2 px-4 rounded-full text-base ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
