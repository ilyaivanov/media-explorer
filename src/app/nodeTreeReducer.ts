import { DropTarget } from "./dragReducer";

const id = () => Math.random() + "";

export interface Item {
  id: string;
  title: string;
  children: string[];
  isOpen: boolean;
}

export const getInitialState = (): NodesContainer => ({
  HOME: { id: "HOME", title: "HOME", isOpen: false, children: ["1", "2", "3"] },
  "1": { id: "1", title: "Root 1", isOpen: false, children: ["4", "5"] },
  "2": { id: "2", title: "Root 2", isOpen: false, children: [] },
  "3": { id: "3", title: "Root 3", isOpen: false, children: [] },
  "4": { id: "4", title: "Root 4", isOpen: false, children: [] },
  "5": { id: "5", title: "Root 5", isOpen: false, children: ["6"] },
  "6": { id: "6", title: "Root 6", isOpen: false, children: [] },
});
export type NodesContainer = {
  [key: string]: Item;
};
export const toggleVisibility = (items: NodesContainer, itemId: string) => {
  items[itemId] = {
    ...items[itemId],
    isOpen: !items[itemId].isOpen,
  };
  return items;
};

export const traverseOpenNodes = (
  items: NodesContainer,
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
  return items.HOME.children.map((i) => mapItem(i, 0)).flat(Number.MAX_VALUE);
};

export const drop = (items: NodesContainer, dropDescription: DropTarget) => {
  const nodeOverParentId = findParentId(items, dropDescription.itemOverId);

  items[nodeOverParentId] = {
    ...items[nodeOverParentId],
    children: items[nodeOverParentId].children.filter(
      (i) => i != dropDescription.itemOverId
    ),
  };
  const nodeUnderParentId = findParentId(items, dropDescription.itemUnderId);

  let targetIndex = items[nodeUnderParentId].children.indexOf(
    dropDescription.itemUnderId
  );

  if (dropDescription.dropPlacement == "after") {
    targetIndex += 1;
  }

  const newChildren = [...items[nodeUnderParentId].children];
  newChildren.splice(targetIndex, 0, dropDescription.itemOverId);
  items[nodeUnderParentId] = {
    ...items[nodeUnderParentId],
    children: newChildren,
  };
  return items;
};

const findParentId = (nodes: NodesContainer, childId: string) =>
  Object.keys(nodes).find(
    (parentKey) => nodes[parentKey].children.indexOf(childId) > -1
  ) as string;
