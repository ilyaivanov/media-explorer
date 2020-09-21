import React from "react";
import "./index.css";
import { DragState, Item, NodesContainer } from "../types";
import { hasAnySubfolders, traverseOpenFolders } from "../state/selectors";
import { dispatch } from "../globalDispatch";
import * as actions from "../state/actions";
import { cn } from "../classNames";
import * as cs from "../constants";

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

const Chevron = () => (
  <svg width="8" height="8" viewBox="0 0 30.727 30.727">
    <path
      d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0
		l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"
    />
  </svg>
);
