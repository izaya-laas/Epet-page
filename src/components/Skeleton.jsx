import React from "react";

const styleOptionsCssProperties = ({
  circle,
  width,
  height,
  baseColor,
  rounded,
}) => {
  const styles = {};

  if (typeof baseColor !== "undefined") styles.backgroundColor = baseColor;

  if (height) styles.height = `${height}px`;

  if (width) styles.width = `${width}px`;

  if (circle) {
    if (width || height) {
      styles.borderRadius = `100%`;
      styles.width = `${width}px`;
      styles.height = `${width}px`;
    } else {
      styles.borderRadius = `100%`;
      styles.width = `50px`;
      styles.height = `50px`;
    }
  }

  if (rounded) styles.borderRadius = "2px";

  return styles;
};

const Skeleton = ({ count = 1, ...props }) => {
  let styles = styleOptionsCssProperties(props);

  const countCeil = Math.ceil(count);
  const elements = [];

  const skeletonDiv = (
    <div className={`animate-pulse mt-2`} style={styles}></div>
  );

  for (let i = 0; i < countCeil; i++) {
    elements.push(<React.Fragment key={i}>{skeletonDiv}</React.Fragment>);
  }

  return <>{elements}</>;
};

export default Skeleton;
