import React from "react";
const Button = ({ children, className }) => {
  return (
    <button
      className={`hover:duration-300 hover:transition-al font-bold py-2 px-4 rounded-full text-base ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
