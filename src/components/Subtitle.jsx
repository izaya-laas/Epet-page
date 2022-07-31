import React from "react";

const Subtitle = ({ children, className }) => {
  return (
    <h2
      className={`text-xl font-poppins font-bold tablet:text-2xl desktop:text-3xl underline ${className}`}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
