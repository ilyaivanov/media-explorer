import React from "react";
import Card from "../gallery/Card";
import { initialState } from "../state/initialState";

const doNothing = () => undefined;
const Storybook = () => {
  const state = initialState;

  const simpleItemId = "37f3ddb20fc3516293e685e0";
  state.items[simpleItemId].title = "Simple Video with Image";

  const playlistWithOneChild = "0.6104704294359848";
  state.items[playlistWithOneChild].title = "Playlist With One Child";

  const playlistWithTwoChilds = "0.04448319531378497";
  state.items[playlistWithTwoChilds].title = "Playlist With Two Childs";

  const playlistWithManyChilds = "0.45995652134049303";
  state.items[playlistWithManyChilds].title = "Playlist With Many Childs";

  const openPlaylistId = "0.7239814899256926";
  state.items[openPlaylistId].title = "Open Playlist";

  const longOpenPlaylistId = "0.4998267796950375";
  state.items[longOpenPlaylistId].title = "Long Open Playlist";

  const closedPlaylistWithDeletedVideos = "0.8218925884000752";
  state.items[closedPlaylistWithDeletedVideos].title = "Playlist With Deleted Videos";

  return (
    <div
      style={{ paddingLeft: 20, backgroundColor: "#e9e9e9", height: "100vh" }}
    >
      <h3 style={{ color: "black", marginTop: 0, paddingTop: 10 }}>Cards</h3>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <CardContainer>
          <Card
            toggle={doNothing}
            state={state}
            item={state.items[simpleItemId]}
          />
        </CardContainer>
        <CardContainer>
          <Card
            toggle={doNothing}
            state={state}
            item={state.items[playlistWithOneChild]}
          />
        </CardContainer>
        <CardContainer>
          <Card
            toggle={doNothing}
            state={state}
            item={state.items[playlistWithTwoChilds]}
          />
        </CardContainer>
        <CardContainer>
          <Card
            toggle={doNothing}
            state={state}
            item={state.items[playlistWithManyChilds]}
          />
        </CardContainer>
        <CardContainer>
          <Card
            isOpen={true}
            toggle={doNothing}
            state={state}
            item={state.items[openPlaylistId]}
          />
        </CardContainer>
        <CardContainer>
          <Card
            isOpen={true}
            toggle={doNothing}
            state={state}
            item={state.items[longOpenPlaylistId]}
          />
        </CardContainer>
        <CardContainer>
          <Card
            toggle={doNothing}
            state={state}
            item={state.items[closedPlaylistWithDeletedVideos]}
          />
        </CardContainer>
      </div>
    </div>
  );
};

const CardContainer = ({ children }: { children: JSX.Element }) => (
  <div style={{ width: 228, marginRight: 20 }}>{children}</div>
);

export default Storybook;
