import { Item, NodesContainer, RootDispatch } from "./types";
import { traverseOpenNodes } from "./state/selectors";
import Row from "./Row";
import React from "react";

interface Props {
  items: NodesContainer;
  rootName: string;
  listenToDragEvents: boolean;
  dispatch: RootDispatch;
}

export const ItemsTree = ({
  items,
  rootName,
  listenToDragEvents,
  dispatch,
}: Props) => {
  const renderRow = (item: Item, level: number) => (
    <Row
      key={item.id}
      listenToDragEvents={listenToDragEvents}
      item={item}
      level={level}
      dispatch={dispatch}
    />
  );
  return <>{traverseOpenNodes(items, rootName, renderRow)}</>;
};
