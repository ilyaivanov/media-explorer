import {
  Item,
  RootState,
  RootAction,
  NodesContainer,
  DropDestinationPlaceholder,
} from "../types";

const assignItem = (
  state: RootState,
  itemId: string,
  mapper: (item: Item) => Partial<Item>
) => ({
  ...state,
  items: {
    ...state.items,
    [itemId]: {
      ...state.items[itemId],
      ...mapper(state.items[itemId]),
    },
  },
});

const findParentId = (items: NodesContainer, childId: string) =>
  Object.keys(items).find(
    (parentKey) => items[parentKey].children.indexOf(childId) > -1
  ) as string;

export const reducer = (state: RootState, action: RootAction): RootState => {
  if (action.type === "TOGGLE_ITEM") {
    return assignItem(state, action.itemId, (i) => ({ isOpen: !i.isOpen }));
  } else if (action.type === "RENAME_ITEM") {
    return assignItem(state, action.itemId, () => ({ title: action.newName }));
  } else if (action.type === "REMOVE_ITEM") {
    const nodeOverParentId = findParentId(state.items, action.itemId);
    return assignItem(state, nodeOverParentId, (i) => ({
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
    return assignItem(withNewNode, action.parentId, (i) => ({
      children: i.children.concat([action.node.id]),
    }));
  } else if (action.type === "PLAY_ITEM") {
    return {
      ...state,
      videoIdBeingPlayed: action.item.videoId,
    };
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
    return assignItem(copy, "SEARCH", () => ({
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
  } else if (action.type === "START_DRAGGING_ITEM") {
    return {
      ...state,
      itemBeingDraggedId: action.itemId,
    };
  } else if (action.type === "UPDATE_MOUSE_COORDINATES") {
    return {
      ...state,
      x: action.x,
      y: action.y,
    };
  } else if (action.type === "DROP_ITEM") {
    if (!state.itemBeingDraggedId || !state.dropDestinationPlaceholder)
      return state;
    const parentId = findParentId(state.items, state.itemBeingDraggedId || "");
    const newState = assignItem(state, parentId, (i) => ({
      children: i.children.filter(
        (child) => child !== state.itemBeingDraggedId
      ),
    }));
    return {
      ...newState,
      items: drop(
        newState.items,
        state.itemBeingDraggedId,
        state.dropDestinationPlaceholder
      ),
      itemBeingDraggedId: undefined,
      dropDestinationPlaceholder: undefined,
    };
  } else if (action.type === "SET_DROP_POSITION") {
    return {
      ...state,
      dropDestinationPlaceholder: action.dropPosition,
    };
  }
  return state;
};

export const drop = (
  items: NodesContainer,
  itemBeingDragged: string,
  dropDescription: DropDestinationPlaceholder
): NodesContainer => {
  if (dropDescription.dropDestination === "inside") {
    let targetIndex = 0;

    const newChildren = [...items[dropDescription.itemId].children];
    newChildren.splice(targetIndex, 0, itemBeingDragged);
    items[dropDescription.itemId] = {
      ...items[dropDescription.itemId],
      children: newChildren,
    };
  } else {
    const nodeUnderParentId = findParentId(items, dropDescription.itemId);

    let targetIndex = items[nodeUnderParentId].children.indexOf(
      dropDescription.itemId
    );

    if (dropDescription.dropDestination === "after") {
      targetIndex += 1;
    }

    const newChildren = [...items[nodeUnderParentId].children];
    newChildren.splice(targetIndex, 0, itemBeingDragged);
    items[nodeUnderParentId] = {
      ...items[nodeUnderParentId],
      children: newChildren,
    };
  }

  return items;
};
