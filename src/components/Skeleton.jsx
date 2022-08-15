import React from "react";

const styleOptionsCssProperties = ({
  circle,
  width,
  height,
  baseColor,
  rounded,
}) => {
  const styles = {};

  if (typeof baseColor !== "undefined") styles.baseColor = `bg-[${baseColor}]`;

  if (height) styles.height = `h-[${height}px]`;

  if (width) styles.width = `w-[${width}px]`;

  if (circle) {
    if (width || height) {
      styles.rounded = `rounded-full`;
      styles.width = `w-[${width}px]`;
      styles.height = `h-[${width}px]`;
    } else {
      styles.rounded = `rounded-full w-10 h-10`;
    }
  }

  if (rounded) styles.rounded = "rounded-md";

  return styles;
};

const Skeleton = ({ count = 1, ...props }) => {
  let styles = styleOptionsCssProperties(props);

  const countCeil = Math.ceil(count);
  const elements = [];

  const skeletonDiv = (
    <div
      className={`animate-pulse mt-2 ${Object.values(styles).join(" ")}`}
    ></div>
  );

  for (let i = 0; i < countCeil; i++) {
    elements.push(<React.Fragment key={i}>{skeletonDiv}</React.Fragment>);
  }

  return <>{elements}</>;
};

export default Skeleton;
