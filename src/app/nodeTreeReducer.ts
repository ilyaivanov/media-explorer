import { DropTarget } from "./dragReducer";

const id = () => Math.random() + "";

export interface Item {
  id: string;
  videoId?: string;
  title: string;
  children: string[];
  isOpen: boolean;
}

export const getInitialState = (): NodesContainer => ({
  HOME: { id: "HOME", title: "HOME", isOpen: false, children: ["1", "2", "3"] },
  SEARCH: { id: "SEARCH", title: "SEARCH", isOpen: false, children: [] },
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

export const removeAllChildren = (nodes: NodesContainer, id: string) => {
  return {
    ...nodes,
    [id]: {
      ...nodes[id],
      children: [],
    },
  };
};

export const setChildren = (
  nodes: NodesContainer,
  id: string,
  items: Item[]
) => {
  const copy = {
    ...nodes,
  };
  items.forEach((item) => {
    copy[item.id] = item;
  });
  return {
    ...copy,
    [id]: {
      ...copy[id],
      children: items.map((i) => i.id),
    },
  };
};
export const appendChildren = (
  nodes: NodesContainer,
  id: string,
  items: Item[]
) => {
  const copy = {
    ...nodes,
  };
  items.forEach((item) => {
    copy[item.id] = item;
  });
  return {
    ...copy,
    [id]: {
      ...copy[id],
      children: nodes[id].children.concat(items.map((i) => i.id)),
    },
  };
};

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

export const drop = (items: NodesContainer, dropDescription: DropTarget) => {
  removeNode(items, dropDescription.itemOverId);

  if (dropDescription.dropPlacement === "inside") {
    let targetIndex = 0;

    const newChildren = [...items[dropDescription.itemUnderId].children];
    newChildren.splice(targetIndex, 0, dropDescription.itemOverId);
    items[dropDescription.itemUnderId] = {
      ...items[dropDescription.itemUnderId],
      children: newChildren,
    };
  } else {
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
  }

  return items;
};

//TODO: GET RID OF MUTATION HERE
export const removeNode = (
  nodes: NodesContainer,
  id: string
): NodesContainer => {
  const nodeOverParentId = findParentId(nodes, id);
  nodes[nodeOverParentId] = {
    ...nodes[nodeOverParentId],
    children: nodes[nodeOverParentId].children.filter((i) => i != id),
  };
  return nodes;
};

//TODO: GET RID OF MUTATION HERE
export const renameNode = (
  nodes: NodesContainer,
  id: string,
  newName: string
): NodesContainer => {
  nodes[id] = {
    ...nodes[id],
    title: newName,
  };
  return nodes;
};
const findParentId = (nodes: NodesContainer, childId: string) =>
  Object.keys(nodes).find(
    (parentKey) => nodes[parentKey].children.indexOf(childId) > -1
  ) as string;
