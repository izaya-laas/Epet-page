import React, { useState } from "react";
import Skeleton from "./Skeleton";

const SkeletonImage = ({ className, src, alt, ...skeletonProps }) => {
  const [isImageLoad, setIsImageLoad] = useState(false);

  const imageLoad = () => {
    setIsImageLoad(true);
  };

  return (
    <>
      {!isImageLoad && <Skeleton {...skeletonProps} />}
      <img
        src={src}
        alt={alt}
        className={`${className} ${!isImageLoad && "hidden"}`}
        onLoad={imageLoad}
      />
    </>
  );
};

export default SkeletonImage;
