import React from "react";
const Button = ({ children, className }) => {
  return (
    <button
      className={`hover:duration-300 hover:transition-al font-bold py-2 px-4 rounded-3xl text-base relative active:scale-95 transition-transform border-b block mx-auto tablet:mx-0 desktop:mx-0 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
