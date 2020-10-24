import { Item, NodesContainer, RootAction, RootState } from "../types";

const assignItemsInState = (
  state: RootState,
  itemId: string,
  mapper: (item: Item) => Partial<Item>
) => ({
  ...state,
  items: assignItem(state.items, itemId, mapper),
});

const assignItem = (
  items: NodesContainer,
  itemId: string,
  mapper: (item: Item) => Partial<Item>
) => ({
  ...items,
  [itemId]: {
    ...items[itemId],
    ...mapper(items[itemId]),
  },
});

const findParentId = (items: NodesContainer, childId: string) =>
  Object.keys(items).find(
    (parentKey) => items[parentKey].children.indexOf(childId) > -1
  ) as string;

export const reducer = (state: RootState, action: RootAction): RootState => {
  if (action.type === "TOGGLE_ITEM") {
    return assignItemsInState(state, action.itemId, (i) => ({
      isOpen: !i.isOpen,
    }));
  } else if (action.type === "RENAME_ITEM") {
    return assignItemsInState(state, action.itemId, () => ({
      title: action.newName,
    }));
  } else if (action.type === "REMOVE_ITEM") {
    const nodeOverParentId = findParentId(state.items, action.itemId);
    return assignItemsInState(state, nodeOverParentId, (i) => ({
      children: i.children.filter((child) => child !== action.itemId),
    }));
  } else if (action.type === "APPEND_NODE") {
    const withNewNode: RootState = {
      ...state,
      items: {
        ...state.items,
        [action.node.id]: action.node,
      },
    };
    return assignItemsInState(withNewNode, action.parentId, (i) => ({
      children: i.children.concat([action.node.id]),
    }));
  } else if (action.type === "PLAY_ITEM") {
    return {
      ...state,
      itemIdBeingPlayed: action.item.id,
    };
  } else if (action.type === "PLAY_NEXT_TRACK") {
    if (state.itemIdBeingPlayed) {
      const parentItems =
        state.items[findParentId(state.items, state.itemIdBeingPlayed)]
          .children;
      const nextIndex = parentItems.indexOf(state.itemIdBeingPlayed) + 1;
      if (nextIndex < parentItems.length)
        return {
          ...state,
          itemIdBeingPlayed: parentItems[nextIndex],
        };
    }
  } else if (action.type === "SET_SEARCH_TERM") {
    return {
      ...state,
      searchTerm: action.term,
    };
  } else if (action.type === "SET_NODE_CHILDREN") {
    //TODO: remove nodes without references
    const copy = {
      ...state,
      items: {
        ...state.items,
      },
    };
    action.items.forEach((i) => {
      copy.items[i.id] = i;
    });
    return assignItemsInState(copy, action.nodeId, () => ({
      children: action.items.map((i) => i.id),
    }));
  } else if (action.type === "TOGGLE_SEARCH_VISIBILITY") {
    return {
      ...state,
      options: {
        ...state.options,
        isSearchVisible: !state.options.isSearchVisible,
      },
    };
  } else if (action.type === "MOUSE_DOWN_ON_ITEM") {
    return {
      ...state,
      dragState: {
        type: "item_pressed",
        distance: 0,
        itemId: action.itemId,
        itemOffsetX: action.offset.x,
        itemOffsetY: action.offset.y,
      },
    };
  } else if (action.type === "MOUSE_MOVE") {
    if (state.dragState.type === "item_pressed") {
      const { x, y } = action.mouseMovement;
      const newDistance = state.dragState.distance + Math.sqrt(x * x + y * y);
      if (newDistance > 4)
        return {
          ...state,
          dragState: {
            ...state.dragState,
            type: "item_being_dragged",
            x: action.mousePosition.x,
            y: action.mousePosition.y,
          },
        };
      else
        return {
          ...state,
          dragState: {
            ...state.dragState,
            distance: newDistance,
          },
        };
    } else if (state.dragState.type === "item_being_dragged") {
      return {
        ...state,
        dragState: {
          ...state.dragState,
          x: action.mousePosition.x,
          y: action.mousePosition.y,
        },
      };
    }
  } else if (action.type === "MOUSE_UP") {
    if (state.dropDestinationPlaceholder) {
      const destination = state.dropDestinationPlaceholder;
      if (!destination || state.dragState.type !== "item_being_dragged")
        return state;
      const itemBeingDraggedId = state.dragState.itemId;

      return {
        ...state,
        items: drop(
          state.items,
          itemBeingDraggedId,
          destination.itemId,
          destination.dropDestination
        ),
        dropDestinationPlaceholder: undefined,
        dragState: {
          type: "not_pressed",
        },
      };
    }
    return {
      ...state,
      dragState: {
        type: "not_pressed",
      },
    };
  } else if (action.type === "FOCUS_ON_ITEM") {
    return {
      ...state,
      itemFocused: action.itemId,
      options: {
        ...state,
        isSearchVisible: false,
      },
    };
  } else if (action.type === "REMOVE_SIDEBAR_DROP_INDICATOR") {
    return {
      ...state,
      dropDestinationPlaceholder: undefined,
    };
  } else if (action.type === "SET_ROOT_STATE") {
    return action.state;
  } else if (action.type === "DROP_ITEM") {
    const destination = action.dropPosition;
    if (!destination || state.dragState.type !== "item_being_dragged")
      return state;
    const itemBeingDraggedId = state.dragState.itemId;

    return {
      ...state,
      items: drop(
        state.items,
        itemBeingDraggedId,
        destination.itemId,
        destination.dropDestination
      ),
      dropDestinationPlaceholder: undefined,
    };
  } else if (action.type === "SET_DROP_POSITION") {
    return {
      ...state,
      dropDestinationPlaceholder: action.dropPosition,
    };
  } else if (action.type === "REPLACE_CARD") {
    if (state.dragState.type === "item_being_dragged") {
      const itemBeingDragged = state.dragState.itemId;
      const itemToReplace = action.itemIdToReplaceInPosition;
      return {
        ...state,
        items: setItemOnPlaceOf(state.items, itemBeingDragged, itemToReplace),
      };
    }
  }
  return state;
};

const drop = (
  items: NodesContainer,
  itemBeingDragged: string,
  itemToDropAround: string,
  howToDrop: "before" | "after" | "inside"
): NodesContainer => {
  const parentId = findParentId(items, itemBeingDragged || "");
  const copyItems = assignItem(items, parentId, (i) => ({
    children: i.children.filter((child) => child !== itemBeingDragged),
  }));
  if (howToDrop === "inside") {
    let targetIndex = 0;

    const newChildren = [...copyItems[itemToDropAround].children];
    newChildren.splice(targetIndex, 0, itemBeingDragged);
    copyItems[itemToDropAround] = {
      ...copyItems[itemToDropAround],
      children: newChildren,
    };
  } else {
    const nodeUnderParentId = findParentId(copyItems, itemToDropAround);

    let targetIndex = copyItems[nodeUnderParentId].children.indexOf(
      itemToDropAround
    );

    if (howToDrop === "after") {
      targetIndex += 1;
    }

    const newChildren = [...copyItems[nodeUnderParentId].children];
    newChildren.splice(targetIndex, 0, itemBeingDragged);
    copyItems[nodeUnderParentId] = {
      ...copyItems[nodeUnderParentId],
      children: newChildren,
    };
  }

  return copyItems;
};

const setItemOnPlaceOf = (
  items: NodesContainer,
  itemBeingDragged: string,
  itemToReplace: string
): NodesContainer => {
  const parentOfItemBeingDragged = findParentId(items, itemBeingDragged || "");
  const parentTargetItemId = findParentId(items, itemToReplace || "");

  if (parentOfItemBeingDragged === parentTargetItemId) {
    const parentChildren = items[parentOfItemBeingDragged].children;
    const targetIndex = parentChildren.indexOf(itemToReplace);
    const currentIndex = parentChildren.indexOf(itemBeingDragged);
    const dropDestination = targetIndex < currentIndex ? "before" : "after";
    return drop(items, itemBeingDragged, itemToReplace, dropDestination);
  } else {
    return drop(items, itemBeingDragged, itemToReplace, "before");
  }
};
