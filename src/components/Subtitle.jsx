import React from "react";

const Subtitle = ({ children, className }) => {
  return (
    <h2 className={`text-xl font-bold desktop:text-2xl ${className}`}>
      {children}
    </h2>
  );
};

export default Subtitle;
