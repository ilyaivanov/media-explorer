import React from "react";
import "./App.css";
import { reducer } from "./state/reducer";
import { Player } from "./Player";
import { initialState } from "./state/initialState";
import { ItemBeingDraggedAvatar } from "./ItemBeingDraggedAvatar";
import { DropDestinationLine } from "./DropDestinationIndicator";
import { setDispatch } from "./globalDispatch";
import { Sidebar } from "./newApp";
import Gallery from "./newApp/Gallery";

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  setDispatch(dispatch);

  return (
    <div>
      <div className="page">
        <Sidebar items={state.items} />
        <Gallery
          items={state.items[state.itemFocused].children.map(
            (id) => state.items[id]
          )}
        />
      </div>
      {state.videoIdBeingPlayed && (
        <Player videoId={state.videoIdBeingPlayed} />
      )}
      {state.itemBeingDraggedId && (
        <ItemBeingDraggedAvatar
          x={state.x}
          y={state.y}
          text={state.items[state.itemBeingDraggedId].title}
          videoId={state.items[state.itemBeingDraggedId].videoId || ""}
        />
      )}
      <DropDestinationLine
        dropDestinationPlaceholder={state.dropDestinationPlaceholder}
      />
    </div>
  );
};

export default App;
