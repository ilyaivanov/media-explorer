import { DropTarget } from "./dragReducer";
const id = () => Math.random() + "";

const item = (title: string, children: Item[] = []): Item => ({
    id: title.split(" ").pop() || id(),
    title,
    children,
    isOpen: false,
});

export interface Item {
    id: string;
    title: string;
    children: Item[];
    isOpen: boolean;
}
export const getInitialState = () => [
    item("Root 1", [
        item("Sub 1.1", [item("Sub 1.1.1"), item("Sub 1.1.2")]),
        item("Sub 1.2"),
    ]),
    item("Root 2"),
    item("Root 3"),
];

export const toggleVisibility = (items: Item[], itemId: string) =>
    items.map((item) => toggleItem(item, itemId));

export const traverseOpenNodes = (items: Item[], mapper: (item: Item, level: number) => any) => {

}
const toggleItem = (item: Item, id: string): Item => {
    if (item.id === id)
        return {
            ...item,
            isOpen: !item.isOpen,
        };
    else
        return {
            ...item,
            children: item.children.map((i) => toggleItem(i, id)),
        };
};


export const drop = (items: Item[], dropDescription: DropTarget) => {
  const item = items.find((i) => i.id == dropDescription.itemOverId) as Item;
  const index = items.findIndex((i) => i.id == dropDescription.itemOverId);

  items.splice(index, 1);
  let targetIndex = items.findIndex((i) => i.id == dropDescription.itemUnderId);

  if (dropDescription.dropPlacement == "after") {
    targetIndex += 1;
  }

  items.splice(targetIndex, 0, item);
  return items;
};
