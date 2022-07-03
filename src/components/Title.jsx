import React from "react";
const Title = ({ children, className }) => {
  return (
    <h1 className={`text-4xl ${className} font-poppins font-bold`}>
      {children}
    </h1>
  );
};

export default Title;
