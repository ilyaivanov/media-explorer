import React from "react";
import "./App.css";
import "./constants.css";
import { Player } from "./Player";
import { ItemBeingDraggedAvatar } from "./ItemBeingDraggedAvatar";
import { DropDestinationLine } from "./DropDestinationIndicator";
import { dispatch, useStoreWithGlobalDispatch } from "./globalDispatch";
import { Sidebar } from "./Sidebar";
import { cn } from "./classNames";
import Menu from "./Menu";
import * as actions from "./state/actions";
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
        <Sidebar items={state.items} dragState={state.dragState} />

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

// interface GalleryProps {
//   state: RootState;
// }
// const Gallery = ({ state }: GalleryProps) => {
//   const items = state.items[state.itemFocused].children;
//
//   return (
//     <>
//       {items.map((id) => (
//         <Card key={id} dragState={state.dragState} state={state} item={state.items[id]} />
//       ))}
//     </>
//   );
// };

export default App;
