import React from "react";
import "./App.css";
import "./constants.css";
import { reducer } from "./state/reducer";
import { Player } from "./Player";
import { initialState } from "./state/initialState";
import { ItemBeingDraggedAvatar } from "./ItemBeingDraggedAvatar";
import { DropDestinationLine } from "./DropDestinationIndicator";
import { setDispatch } from "./globalDispatch";
import { Sidebar } from "./newApp";
import Gallery from "./newApp/Gallery";
import { cn } from "./classNames";

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  setDispatch(dispatch);
  return (
    <div>
      <div
        className={cn({
          page: true,
          "page-during-drag": state.dragState.type !== "not_pressed",
        })}
      >
        <Sidebar items={state.items} dragState={state.dragState} />
        <Gallery
          dragState={state.dragState}
          items={state.items[state.itemFocused].children.map(
            (id) => state.items[id]
          )}
        />
      </div>
      {state.videoIdBeingPlayed && (
        <Player videoId={state.videoIdBeingPlayed} />
      )}
      <ItemBeingDraggedAvatar items={state.items} dragState={state.dragState} />
      <DropDestinationLine
        dropDestinationPlaceholder={state.dropDestinationPlaceholder}
      />
    </div>
  );
};

export default App;
