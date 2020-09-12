import React from "react";
import "./App.css";
import { reducer } from "./state/reducer";
import * as actions from "./state/actions";
import { Player } from "./Player";
import { initialState } from "./state/initialState";
import Menu from "./Menu";
import { SearchPanel } from "./SearchPanel";
import { ItemsTree } from "./ItemsTree";
import { ItemBeingDraggedAvatar } from "./ItemBeingDraggedAvatar";
// @ts-ignore
import cn from "classnames";
import { DropDestinationLine } from "./DropDestinationIndicator";

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div
      className={cn({
        "page-container": true,
        "page-during-drag": state.itemBeingDraggedId,
      })}
    >
      <Menu options={state.options} dispatch={dispatch} />
      <div className="page">
        <div>
          <ItemsTree
            listenToDragEvents={!!state.itemBeingDraggedId}
            items={state.items}
            dispatch={dispatch}
            rootName="HOME"
          />
          <button onClick={() => dispatch(actions.createNewNode())}>add</button>
        </div>
        <SearchPanel state={state} dispatch={dispatch} />
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
