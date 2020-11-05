import React from "react";
import "./constants.css";
import { Player } from "./Player";
import { ItemBeingDraggedAvatar } from "./ItemBeingDraggedAvatar";
import { DropDestinationLine } from "./DropDestinationIndicator";
import { useStoreWithGlobalDispatch } from "./globalDispatch";
import { Sidebar } from "./Sidebar";
import { cn } from "./classNames";
import Menu from "./Menu";
import Gallery from "./gallery";

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
        <Sidebar state={state} dragState={state.dragState} />

        <Gallery state={state} />
        <Menu />
      </div>
      {state.itemIdBeingPlayed && (
        <Player videoId={state.items[state.itemIdBeingPlayed].itemId} />
      )}
      <ItemBeingDraggedAvatar items={state.items} state={state} />
      <DropDestinationLine
        dropDestinationPlaceholder={state.dropDestinationPlaceholder}
      />
    </div>
  );
};

export default App;
