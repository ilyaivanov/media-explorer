export interface DragState {
  movingItemInfo?: {
    id: string;
    x: number;
    y: number;
  };
  dropTargetMarkerPosition?: DropTarget;
}
type Position = { clientX: number; clientY: number };
export interface DropTarget {
  rect: DOMRect;
  dropPlacement: "after" | "before" | "inside";
  itemUnderId: string;
  itemOverId: string;
}

export const initialDragState: DragState = {
  movingItemInfo: undefined,
  dropTargetMarkerPosition: undefined,
};

export interface DragAction {
  type:
    | "START_MOVING"
    | "STOP_MOVING"
    | "MOUSE_MOVE"
    | "MOUSE_MOVE_OVER_OTHER_ITEM";
  payload?: any;
}
export const mouseMoveOtherItem = (
  itemId: string,
  e: any,
  level: number
): DragAction => ({
  type: "MOUSE_MOVE_OVER_OTHER_ITEM",
  payload: {
    itemId,
    e,
    level,
  },
});

export const startMoving = (
  itemId: string,
  { clientX, clientY }: Position
): DragAction => ({
  type: "START_MOVING",
  payload: { itemId, clientX, clientY },
});
export const stopMoving = (): DragAction => ({
  type: "STOP_MOVING",
});

export const move = ({ clientX, clientY }: Position): DragAction => ({
  type: "MOUSE_MOVE",
  payload: { clientX, clientY },
});

export const dragReducer = (
  state: DragState,
  action: DragAction
): DragState => {
  if (action.type === "STOP_MOVING") {
    return initialDragState;
  }
  if (action.type === "START_MOVING") {
    const circleRadius = 20;
    return {
      ...state,
      movingItemInfo: {
        id: action.payload.itemId,
        x: action.payload.clientX - circleRadius,
        y: action.payload.clientY - circleRadius,
      },
    };
  }
  if (action.type === "MOUSE_MOVE") {
    const circleRadius = 20;
    return {
      ...state,
      // @ts-ignore
      movingItemInfo: {
        ...state.movingItemInfo,
        x: action.payload.clientX - circleRadius,
        y: action.payload.clientY - circleRadius,
      },
    };
  }
  if (action.type === "MOUSE_MOVE_OVER_OTHER_ITEM" && state.movingItemInfo) {
    const { e, itemId, level } = action.payload;
    var rect = e.currentTarget.getBoundingClientRect();
    var y = e.clientY - rect.top;
    var x = e.clientX - rect.left;
    return {
      ...state,
      dropTargetMarkerPosition: {
        rect,
        dropPlacement:
          y > 20 ? (x > level * 20 + 50 ? "inside" : "after") : "before",
        itemUnderId: itemId,
        itemOverId: state.movingItemInfo.id
      },
    };
  }
  return state;
};
