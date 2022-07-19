import React from "react";

const Paragraph = ({ children, className }) => {
  return (
    <p className={`font-inter text-base desktop:text-xl ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
