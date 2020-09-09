import React from "react";
import { DragState, DropTarget } from "./dragReducer";

export const DropIndicator = ({ dragState }: { dragState: DragState }) => {
  return (
    <React.Fragment>
      {dragState.movingItemInfo && (
        <div
          className="circle"
          style={{
            position: "fixed",
            backgroundColor: "lightgray",
            pointerEvents: "none",
            top: dragState.movingItemInfo.y,
            left: dragState.movingItemInfo.x,
          }}
        />
      )}
    </React.Fragment>
  );
};