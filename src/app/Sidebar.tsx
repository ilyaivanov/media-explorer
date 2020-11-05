import React from "react";
import { DragState, Item, NodesContainer, RootState } from "./types";
import {
  hasAnySubfolders,
  isParentOf,
  traverseOpenFolders,
} from "./state/selectors";
import { dispatch } from "./globalDispatch";
import * as actions from "./state/actions";
import { cn } from "./classNames";
import * as cs from "./constants";
import "./Sidebar.css";
import Chevron from "./icons/Chevron";
import noteIcon from "./icons/musical-note.svg";
interface Props {
  state: RootState;
  dragState: DragState;
}

export const Sidebar = ({ dragState, state }: Props) => (
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
      state={state}
      level={0}
      item={state.items.HOME}
    />
    {traverseOpenFolders(state.items, "HOME", (item, level) => {
      return (
        <Row
          state={state}
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
  state: RootState;
  item: Item;
  level: number;
  isRoot?: boolean;
  dragState: DragState;
}
const Row = ({ level, item, isRoot, state, dragState }: RowProps) => {
  const isFocused =
    !isRoot &&
    (isParentOf(state.items, item.id, state.itemFocused) ||
      item.id === state.itemFocused);
  const isPlaying =
    state.itemIdBeingPlayed &&
    isParentOf(state.items, item.id, state.itemIdBeingPlayed);
  return (
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
          (hasAnySubfolders(state.items, item.id) ? 0 : cs.chevronWidth),
      }}
    >
      {!isRoot && hasAnySubfolders(state.items, item.id) && (
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

      {!isRoot &&
        (isPlaying ? (
          <img
            src={noteIcon}
            className={cn({
              "note-icon": true,
              "play-svg": isFocused,
              "white-svg": !isFocused,
            })}
            alt=""
          />
        ) : (
          <div className={cn({ circle: true, "circle-focused": isFocused })} />
        ))}
      <div
        className={cn({
          "node-focused": isFocused,
        })}
      >
        {item.title}
      </div>
    </div>
  );
};
