import * as actions from "./state/actions";

export type RootState = {
  items: NodesContainer;
  videoIdBeingPlayed: string | undefined;
  searchTerm: string;
  options: UIOptions;
  itemBeingDraggedId?: string;
  x: number;
  y: number;
  dropDestinationPlaceholder?: DropDestinationPlaceholder;
};

export interface Item {
  id: string;
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

export type NodesContainer = {
  [key: string]: Item;
};

export interface UIOptions {
  isSearchVisible: boolean;
}

export type RootAction =
  | ReturnType<typeof actions.toggleIsItemOpen>
  | ReturnType<typeof actions.createNewNode>
  | ReturnType<typeof actions.playItem>
  | ReturnType<typeof actions.setSearchTerm>
  | ReturnType<typeof actions.renameItem>
  | ReturnType<typeof actions.setNodeChildren>
  | ReturnType<typeof actions.startDraggingItem>
  | ReturnType<typeof actions.updateMouseCoordinatesDuringDrag>
  | ReturnType<typeof actions.dropItem>
  | ReturnType<typeof actions.setDropPosition>
  | ReturnType<typeof actions.toggleSearchVisibility>
  | ReturnType<typeof actions.removeItem>;

export type RootDispatch = (action: RootAction) => void;
