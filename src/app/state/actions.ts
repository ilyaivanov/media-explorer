import { DropDestinationPlaceholder, Item, RootState } from "../types";

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
    nodeId,
    type: "SET_NODE_CHILDREN",
  } as const);

export const playItem = (item: Item) =>
  ({
    item,
    type: "PLAY_ITEM",
  } as const);

export const togglePlaylistPreview = (itemId: string) =>
  ({
    type: "TOGGLE_PLAYLIST_PREVIEW",
    itemId,
  } as const);

export const mouseDownOnItem = (itemId: string, offset: Point) =>
  ({
    itemId,
    offset,
    type: "MOUSE_DOWN_ON_ITEM",
  } as const);

export const mouseMove = (mousePosition: Point, mouseMovement: Point) =>
  ({
    mousePosition,
    mouseMovement,
    type: "MOUSE_MOVE",
  } as const);

export const mouseUp = () =>
  ({
    type: "MOUSE_UP",
  } as const);
export const removeSidebarDropIndicator = () =>
  ({
    type: "REMOVE_SIDEBAR_DROP_INDICATOR",
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

export const dropItem = (dropPosition?: DropDestinationPlaceholder) =>
  ({
    dropPosition,
    type: "DROP_ITEM",
  } as const);

export const replaceCard = (itemIdToReplaceInPosition: string) =>
  ({
    itemIdToReplaceInPosition,
    type: "REPLACE_CARD",
  } as const);

export const setDropPosition = (dropPosition: DropDestinationPlaceholder) =>
  ({
    dropPosition,
    type: "SET_DROP_POSITION",
  } as const);
export const setRootState = (state: RootState) =>
  ({
    state,
    type: "SET_ROOT_STATE",
  } as const);
export const playNextTrack = () =>
  ({
    type: "PLAY_NEXT_TRACK",
  } as const);

export const createNewNode = () =>
  ({
    node: {
      children: [],
      isOpen: false,
      itemType: "folder",
      title: "New Node",
      id: Math.random() + "",
    } as Item,
    parentId: "HOME",
    type: "APPEND_NODE",
  } as const);

type Point = {
  x: number;
  y: number;
};
