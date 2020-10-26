import * as actions from "./state/actions";

export type RootState = {
  items: NodesContainer;
  itemIdBeingPlayed: string | undefined;
  itemFocused: string;
  searchTerm: string;
  options: UIOptions;
  dropDestinationPlaceholder?: DropDestinationPlaceholder;
  dragState: DragState;
};

export interface Item {
  id: string;
  isPreviewOpen?: boolean;
  children: string[];
  title: string;
  videoId?: string;
  isOpen?: boolean;
}

export interface DropDestinationPlaceholder {
  rect: DOMRect;
  dropDestination: "before" | "after" | "inside";
  itemId: string;
  targetLevel: number;
}

export interface NotPressed {
  type: "not_pressed";
}

export interface ItemPressed {
  type: "item_pressed";
  itemId: string;
  distance: number;
  itemOffsetX: number;
  itemOffsetY: number;
}

export interface ItemBeingDragged {
  type: "item_being_dragged";
  itemId: string;
  x: number;
  y: number;
  itemOffsetX: number;
  itemOffsetY: number;
}

export type DragState = NotPressed | ItemPressed | ItemBeingDragged;

export type NodesContainer = {
  [key: string]: Item;
};

export interface UIOptions {
}

export type RootAction =
  | ReturnType<typeof actions.toggleIsItemOpen>
  | ReturnType<typeof actions.createNewNode>
  | ReturnType<typeof actions.playItem>
  | ReturnType<typeof actions.playNextTrack>
  | ReturnType<typeof actions.setSearchTerm>
  | ReturnType<typeof actions.renameItem>
  | ReturnType<typeof actions.setNodeChildren>
  | ReturnType<typeof actions.focusItem>
  | ReturnType<typeof actions.mouseDownOnItem>
  | ReturnType<typeof actions.mouseMove>
  | ReturnType<typeof actions.mouseUp>
  | ReturnType<typeof actions.startDraggingItem>
  | ReturnType<typeof actions.removeSidebarDropIndicator>
  | ReturnType<typeof actions.dropItem>
  | ReturnType<typeof actions.replaceCard>
  | ReturnType<typeof actions.setDropPosition>
  | ReturnType<typeof actions.togglePlaylistPreview>
  | ReturnType<typeof actions.setRootState>
  | ReturnType<typeof actions.removeItem>;

export type RootDispatch = (action: RootAction) => void;
