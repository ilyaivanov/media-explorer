import React from "react";
import { DragState } from "./dragReducer";

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
      {dragState.dropTargetMarkerPosition && (
        <div
          style={{
            position: "fixed",
            pointerEvents: "none",
            top: dragState.dropTargetMarkerPosition.rect.y + 10,
            left: dragState.dropTargetMarkerPosition.rect.x + 300,
          }}
        >
          {dragState.dropTargetMarkerPosition.dropPlacement}
        </div>
      )}
    </React.Fragment>
  );
};
