import { DropDestinationPlaceholder, Item } from "../types";

export const toggleIsItemOpen = (item: Item) =>
  ({
    itemId: item.id,
    type: "TOGGLE_ITEM",
  } as const);

export const removeItem = (item: Item) =>
  ({
    itemId: item.id,
    type: "REMOVE_ITEM",
  } as const);

export const renameItem = (itemId: string, newName: string) =>
  ({
    itemId,
    newName,
    type: "RENAME_ITEM",
  } as const);

export const setSearchTerm = (term: string) =>
  ({
    term,
    type: "SET_SEARCH_TERM",
  } as const);

export const setNodeChildren = (nodeId: string, items: Item[]) =>
  ({
    items,
    type: "SET_NODE_CHILDREN",
  } as const);

export const playItem = (item: Item) =>
  ({
    item,
    type: "PLAY_ITEM",
  } as const);

export const toggleSearchVisibility = () =>
  ({
    type: "TOGGLE_SEARCH_VISIBILITY",
  } as const);

export const startDraggingItem = (itemId: string) =>
  ({
    itemId,
    type: "START_DRAGGING_ITEM",
  } as const);
export const focusItem = (itemId: string) =>
    ({
        itemId,
        type: "FOCUS_ON_ITEM",
    } as const);

export const updateMouseCoordinatesDuringDrag = (x: number, y: number) =>
  ({
    x,
    y,
    type: "UPDATE_MOUSE_COORDINATES",
  } as const);

export const dropItem = () =>
  ({
    type: "DROP_ITEM",
  } as const);

export const setDropPosition = (dropPosition: DropDestinationPlaceholder) =>
  ({
    dropPosition,
    type: "SET_DROP_POSITION",
  } as const);

export const createNewNode = () =>
  ({
    node: {
      children: [],
      isOpen: false,
      title: "New Node",
      id: Math.random() + "",
    } as Item,
    parentId: "HOME",
    type: "APPEND_NODE",
  } as const);
