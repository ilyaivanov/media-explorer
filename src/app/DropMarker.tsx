import React from "react";
import { DropTarget } from "./dragReducer";

export const DropMarker = ({
  dropTarget: { rect, dropPlacement },
}: {
  dropTarget: DropTarget;
}) => {
  const BAR_HEIGHT = 2;

  let top;
  if (dropPlacement === "before") {
    top = rect.y - 5 + BAR_HEIGHT / 2;
  } else {
    top = rect.y + 45 - BAR_HEIGHT / 2;
  }
  console.log(rect, top);

  return (
    <div
      style={{
        position: "fixed",
        pointerEvents: "none",
        top,
        left: rect.x + (dropPlacement == "inside" ? 40 : 0),
        right: rect.x + rect.width,
        height: BAR_HEIGHT,
        backgroundColor: "grey",
      }}
    />
  );
};
