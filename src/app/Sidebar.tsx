import React from "react";
import { DragState, Item, NodesContainer } from "./types";
import { hasAnySubfolders, traverseOpenFolders } from "./state/selectors";
import { dispatch } from "./globalDispatch";
import * as actions from "./state/actions";
import { cn } from "./classNames";
import * as cs from "./constants";
import './Sidebar.css'
import Chevron from "./icons/Chevron";
interface Props {
  items: NodesContainer;
  dragState: DragState;
}

export const Sidebar = ({ dragState, items }: Props) => (
  <div
    className="sidebar"
    onMouseMove={() => {
      if (dragState && dragState.type === "item_being_dragged") {
        dispatch(actions.removeSidebarDropIndicator());
      }
    }}
  >
    <div className="sidebar-title">Explorer</div>
    <Row
      dragState={dragState}
      isRoot
      items={items}
      level={0}
      item={items.HOME}
    />
    {traverseOpenFolders(items, "HOME", (item, level) => {
      return (
        <Row
          items={items}
          key={item.id}
          level={level}
          item={item}
          dragState={dragState}
        />
      );
    })}
    <div className="create-new-playlist">+</div>
  </div>
);
interface RowProps {
  items: NodesContainer;
  item: Item;
  level: number;
  isRoot?: boolean;
  dragState: DragState;
}
const Row = ({ level, item, isRoot, items, dragState }: RowProps) => (
  <div
    className="row"
    onClick={() => dispatch(actions.focusItem(item.id))}
    onMouseMove={(e) => {
      e.stopPropagation();
      if (dragState && dragState.type === "item_being_dragged") {
        const rect = e.currentTarget.getBoundingClientRect();
        const topInElement = e.clientY - rect.top;
        const left = e.clientX - rect.left;
        const dropInsideBoundary =
          left -
          cs.rowLeftPadding -
          cs.chevronWidth -
          (level + 1) * cs.levelOffsetForMenu;
        dispatch(
          actions.setDropPosition({
            dropDestination:
              topInElement < rect.height / 2
                ? "before"
                : dropInsideBoundary > 0
                ? "inside"
                : "after",
            itemId: item.id,
            targetLevel: level,
            rect,
          })
        );
      }
    }}
    style={{
      fontWeight: isRoot ? "bold" : undefined,
      paddingLeft:
        (isRoot ? cs.chevronWidth : 0) +
        cs.rowLeftPadding +
        cs.levelOffsetForMenu * level +
        (hasAnySubfolders(items, item.id) ? 0 : cs.chevronWidth),
    }}
  >
    {!isRoot && hasAnySubfolders(items, item.id) && (
      <div
        className={cn({ chevron: true, open: item.isOpen })}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(actions.toggleIsItemOpen(item));
        }}
      >
        <Chevron />
      </div>
    )}

    {!isRoot && <div className="circle" />}
    <div className="text">{item.title}</div>
  </div>
);
