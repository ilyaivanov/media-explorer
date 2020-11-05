import { Item, NodesContainer, RootState } from "../types";

export const traverseOpenNodes = <T>(
  items: NodesContainer,
  rootKey: string,
  mapper: (item: Item, level: number) => T
): T[] => {
  const mapItem = (key: string, level: number): any => {
    if (items[key].isOpen && items[key].children.length > 0)
      return [
        mapper(items[key], level),
        ...items[key].children.map((i) => mapItem(i, level + 1)),
      ];
    else return mapper(items[key], level);
  };
  if (items[rootKey])
    return items[rootKey].children
      .map((i) => mapItem(i, 0))
      .flat(Number.MAX_VALUE);
  else return [];
};

export const traverseOpenFolders = <T>(
  items: NodesContainer,
  rootKey: string,
  mapper: (item: Item, level: number) => T
): T[] => {
  const mapItem = (key: string, level: number): any => {
    if (items[key].isOpen && items[key].children.length > 0) {
      if (hasAnySubfolders(items, key))
        return [
          mapper(items[key], level),
          ...items[key].children
            .filter((i) => isAContainer(items[i]))
            .map((i) => mapItem(i, level + 1)),
        ];
    }
    return mapper(items[key], level);
  };
  if (items[rootKey])
    return items[rootKey].children
      .filter((i) => isAContainer(items[i]))
      .map((i) => mapItem(i, 0))
      .flat(Number.MAX_VALUE);
  else return [];
};

export const traverseAllNodes = <T>(
  items: NodesContainer,
  rootKey: string,
  mapper: (item: Item, level: number) => T
): T[] => {
  const mapItem = (key: string, level: number): any => {
    if (items[key].children.length > 0) {
      return [
        mapper(items[key], level),
        ...items[key].children.map((i) => mapItem(i, level + 1)),
      ];
    }
    return mapper(items[key], level);
  };
  return items[rootKey].children
    .map((i) => mapItem(i, 0))
    .flat(Number.MAX_VALUE);
};

export const hasAnySubfolders = (items: NodesContainer, itemId: string) =>
  items[itemId].children
    .map((id) => !items[id].itemId)
    .reduce((acc, val) => acc || val, false);

export const isParentOf = (
  items: NodesContainer,
  parentId: string,
  childId: string
) => {
  return (
    traverseAllNodes(items, parentId, (item) => item.id).indexOf(childId) >= 0
  );
};

export const getPlaylistPreviewVideos = (
  state: RootState,
  playlistID: string
): Item[] => {
  return traverseAllNodes(state.items, playlistID, (item) => item)
    .filter((item) => !!item.image)
    .slice(0, 3);
};

const isAContainer = (item: Item) => item.itemType != "video";
