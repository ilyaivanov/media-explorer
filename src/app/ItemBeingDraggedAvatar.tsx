import React, { useEffect } from "react";
import { DragState, NodesContainer, RootState } from "./types";
import { dispatch } from "./globalDispatch";
import * as actions from "./state/actions";
import Card from "./Card";
interface Props {
  items: NodesContainer;
  state: RootState;
}

export const ItemBeingDraggedAvatar = ({ state, items }: Props) => {
  const { dragState } = state;
  const onMouseMoveDuringDrag = (e: MouseEvent) => {
    dispatch(
      actions.mouseMove(
        { x: e.clientX, y: e.clientY },
        {
          x: e.movementX,
          y: e.movementY,
        }
      )
    );
  };
  const onMouseUpDuringDrag = () => {
    dispatch(actions.mouseUp());
  };
  useEffect(() => {
    if (dragState.type !== "not_pressed") {
      document.addEventListener("mousemove", onMouseMoveDuringDrag);
      document.addEventListener("mouseup", onMouseUpDuringDrag);
    }
    return () => {
      document.removeEventListener("mousemove", onMouseMoveDuringDrag);
      document.removeEventListener("mouseup", onMouseUpDuringDrag);
    };
  }, [dragState]);
  if (dragState.type === "item_being_dragged") {
    const isOnSidebar = dragState.x < 300;
    const leftOffset = isOnSidebar ? 18 : dragState.itemOffsetX;
    const topOffset = isOnSidebar ? 18 : dragState.itemOffsetY;
    return (
      <div
        style={{
          position: "fixed",
          top: dragState.y - topOffset,
          left: dragState.x - leftOffset,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Card
          state={state}
          isMini={isOnSidebar}
          item={items[dragState.itemId]}
        />
      </div>
    );
  } else return null;
};
