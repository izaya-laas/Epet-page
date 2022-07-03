import React from "react";

const IntroductionImage = ({ src, alt }) => {
  return (
    <div className="absolute left-0 top-0 z-0 ">
      <img src={src} alt={alt} className="object-cover" />
    </div>
  );
};

export default IntroductionImage;
