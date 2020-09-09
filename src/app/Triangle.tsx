import React from "react";

export const Triangle = (props: any) => {
  const width = 20;
  const verticalPadding = 7;
  const horizontalPadding = 4;
  return (
    <svg
      height={width}
      width={width}
      viewBox={`0 0 ${width} ${width}`}
      {...props}
    >
      <polygon
        points={`
        ${verticalPadding},${horizontalPadding} 
        ${width - verticalPadding},${width / 2} 
        ${verticalPadding},${width - horizontalPadding}`}
      />
    </svg>
  );
};
