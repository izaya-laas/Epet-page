import React from "react";

const Paragraph = ({ children, className }) => {
  return (
    <p className={`font-inter text-base tablet:text-lg  ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
