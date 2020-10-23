import { Item, NodesContainer } from "../types";

export const traverseOpenNodes = (
  items: NodesContainer,
  rootKey: string,
  mapper: (item: Item, level: number) => any
) => {
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
};

export const traverseOpenFolders = (
  items: NodesContainer,
  rootKey: string,
  mapper: (item: Item, level: number) => any
) => {
  const mapItem = (key: string, level: number): any => {
    if (items[key].isOpen && items[key].children.length > 0) {
      if (hasAnySubfolders(items, key))
        return [
          mapper(items[key], level),
          ...items[key].children.filter(i => !items[i].videoId).map((i) => mapItem(i, level + 1)),
        ];
    }
    return mapper(items[key], level);
  };
  if (items[rootKey])
    return items[rootKey].children
      .filter(i => !items[i].videoId)
      .map((i) => mapItem(i, 0))
      .flat(Number.MAX_VALUE);
};

export const hasAnySubfolders = (items: NodesContainer, itemId: string) =>
  items[itemId].children
    .map((id) => !items[id].videoId)
    .reduce((acc, val) => acc || val, false);
