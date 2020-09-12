import React from "react";

export const Triangle = (props: any) => {
  const width = props.width || 10;

  return (
    <svg
      height={width}
      width={width}
      viewBox={`0 0 ${width} ${width}`}
      {...props}
    >
      <polygon
        points={`
        ${0},${0} 
        ${width},${width / 2} 
        ${0},${width}`}
      />
    </svg>
  );
};


