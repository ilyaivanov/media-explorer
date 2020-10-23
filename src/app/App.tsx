import React from "react";
import "./App.css";
import "./constants.css";
import { Player } from "./Player";
import { ItemBeingDraggedAvatar } from "./ItemBeingDraggedAvatar";
import { DropDestinationLine } from "./DropDestinationIndicator";
import { dispatch, useStoreWithGlobalDispatch } from "./globalDispatch";
import { Sidebar } from "./Sidebar";
import  Card  from "./Card";
import { cn } from "./classNames";
import Menu from "./Menu";
import SearchResults from "./SearchResults";
import * as actions from "./state/actions";

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
          className={cn({
            gallery: true,
            "gallery-without-search": !state.options.isSearchVisible,
          })}
          onMouseMove={() => {
            if (
              state.dragState &&
              state.dragState.type === "item_being_dragged"
            ) {
              dispatch(actions.removeSidebarDropIndicator());
            }
          }}
        >
          {state.items[state.itemFocused].children.map((id) => (
            <Card key={id} dragState={state.dragState} item={state.items[id]} />
          ))}
        </div>

        {state.options.isSearchVisible && (
          <SearchResults
            items={state.items["SEARCH"].children.map((id) => state.items[id])}
            dragState={state.dragState}
          />
        )}
        <Menu options={state.options} />
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

export default App;
