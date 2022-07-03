import React from "react";
import imageSrc from "../404-image.svg";

const Error404 = () => {
  return (
    <div className="flex items-center justify-center ">
      <img src={imageSrc} alt="image error 404" />
    </div>
  );
};

export default Error404;
