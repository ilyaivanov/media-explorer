import React from "react";
import "./App.css";
import "./constants.css";
import { Player } from "./Player";
import { ItemBeingDraggedAvatar } from "./ItemBeingDraggedAvatar";
import { DropDestinationLine } from "./DropDestinationIndicator";
import { dispatch, useStoreWithGlobalDispatch } from "./globalDispatch";
import { Sidebar } from "./Sidebar";
import Card from "./Card";
import { cn } from "./classNames";
import Menu from "./Menu";
import * as actions from "./state/actions";
import { RootState } from "./types";

const App = () => {
  const state = useStoreWithGlobalDispatch();
  return (
    <div>
      <div
        className={cn({
          page: true,
          "page-during-drag": state.dragState.type !== "not_pressed",
        })}
      >
        <Sidebar items={state.items} dragState={state.dragState} />
        <div
          className="gallery"
          onMouseMove={() => {
            if (
              state.dragState &&
              state.dragState.type === "item_being_dragged"
            ) {
              dispatch(actions.removeSidebarDropIndicator());
            }
          }}
        >
          <Gallery state={state} />
        </div>
        <Menu />
      </div>
      {state.itemIdBeingPlayed && (
        <Player videoId={state.items[state.itemIdBeingPlayed].videoId} />
      )}
      <ItemBeingDraggedAvatar items={state.items} dragState={state.dragState} />
      <DropDestinationLine
        dropDestinationPlaceholder={state.dropDestinationPlaceholder}
      />
    </div>
  );
};

interface GalleryProps {
  state: RootState;
}
const Gallery = ({ state }: GalleryProps) => {
  const items = state.options.isSearchVisible
    ? state.items["SEARCH"].children
    : state.items[state.itemFocused].children;

  return (
    <>
      {items.map((id) => (
        <Card key={id} dragState={state.dragState} item={state.items[id]} />
      ))}
    </>
  );
};

export default App;
