import React from "react";
import "./App.css";
import {
  DragAction,
  dragReducer,
  DropTarget,
  initialDragState,
  mouseMoveOtherItem,
  move,
  startMoving,
  stopMoving,
} from "./dragReducer";
import {
  appendChildren,
  drop,
  getInitialState,
  Item,
  NodesContainer,
  removeAllChildren,
  removeNode,
  renameNode,
  setChildren,
  toggleVisibility,
  traverseOpenNodes,
} from "./nodeTreeReducer";
import { DivMouseEvent, Row } from "./Row";
import { DropIndicator } from "./DropIndicator";
// @ts-ignore
import debounce from "lodash/debounce";
import { Player } from "./Player";
import { DropMarker } from "./DropMarker";

class App extends React.Component {
  state = {
    items: {},
    dragState: initialDragState,
    searchTerm: "",
    videoBeingPlayed: undefined as string | undefined,
  };

  updateItems = (items: NodesContainer) => {
    localStorage.setItem(ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(items));
    this.setState({ items });
  };

  toggleOpenClosed = (itemToToggle: Item) =>
    this.updateItems(toggleVisibility(this.state.items, itemToToggle.id));

  startMoving = (item: Item, e: DivMouseEvent) => {
    this.dispatchDragAction(startMoving(item.id, e));
    this.registerDragEvents();
  };

  componentDidMount() {
    const itemsSerialized = localStorage.getItem(ITEMS_LOCAL_STORAGE_KEY);
    if (itemsSerialized) this.setState({ items: JSON.parse(itemsSerialized) });
    else this.setState({ items: getInitialState() });
  }

  componentWillUnmount() {
    this.unregisterDragEvents();
  }

  onStopMoving = () => {
    this.updateItems(
      drop(
        // @ts-ignore
        this.state.items,
        this.state.dragState.dropTargetMarkerPosition as DropTarget
      )
    );

    this.dispatchDragAction(stopMoving());
    this.unregisterDragEvents();
  };

  onMouseMove = (e: MouseEvent) => this.dispatchDragAction(move(e));

  removeNode = (item: Item) =>
    this.updateItems(removeNode(this.state.items, item.id));
  renameNode = (item: Item, newText: string) =>
    this.updateItems(renameNode(this.state.items, item.id, newText));

  createNewNode = () => {
    this.updateItems(
      appendChildren(
        // @ts-ignore
        this.state.items,
        "HOME",
        [
          {
            children: [],
            videoId: undefined,
            title: "New Node",
            isOpen: false,
            id: Math.random() + "",
          },
        ]
      )
    );
  };
  dispatchDragAction = (action: DragAction) => {
    const newState = dragReducer(this.state.dragState, action);
    this.setState({ dragState: newState });
  };

  onMouseMoveOverItem = (item: Item, e: DivMouseEvent, itemLevel: number) =>
    this.dispatchDragAction(mouseMoveOtherItem(item.id, e, itemLevel));

  registerDragEvents = () => {
    document.addEventListener("mouseup", this.onStopMoving);
    document.addEventListener("mousemove", this.onMouseMove);
  };
  unregisterDragEvents = () => {
    document.removeEventListener("mouseup", this.onStopMoving);
    document.removeEventListener("mousemove", this.onMouseMove);
  };

  onTextChanged = (searchTerm: string) => {
    this.setState({ searchTerm });
    this.search(searchTerm);
  };

  search = debounce(
    (searchTerm: string) => {
      const url =
        "https://europe-west1-lean-watch.cloudfunctions.net/getVideos?q=" +
        searchTerm;
      fetch(url)
        .then((response) => response.json())
        .then((data: any) => {
          //parse
          const responseItems = data.items.map((i: any) => ({
            id: i.id,
            title: i.name,
            children: [],
            isOpen: false,
            videoId: i.itemId,
          }));
          const { items } = this.state;
          const without = removeAllChildren(items, "SEARCH");
          const with1 = setChildren(without, "SEARCH", responseItems);
          this.updateItems(with1);
        });
    },
    600,
    { trailling: true }
  );
  renderItem = (item: Item, level: number): JSX.Element => (
    <Row
      key={item.id}
      startMoving={this.startMoving}
      onMouseMove={this.onMouseMoveOverItem}
      onRemove={this.removeNode}
      onRename={this.renameNode}
      onPress={this.toggleOpenClosed}
      onCirclePress={(item: Item) =>
        this.setState({ videoBeingPlayed: item.videoId })
      }
      item={item}
      level={level}
    />
  );

  render() {
    return (
      <div
        className={
          "page " +
          (this.state.dragState.movingItemInfo ? "page-during-drag" : "")
        }
      >
        <div>
          <h5>Home</h5>
          {traverseOpenNodes(this.state.items, "HOME", this.renderItem)}
          <button onClick={this.createNewNode}>add</button>
          <DropIndicator dragState={this.state.dragState} />
          {this.state.dragState.dropTargetMarkerPosition && (
            <DropMarker
              dropTarget={this.state.dragState.dropTargetMarkerPosition}
            />
          )}
        </div>
        <div>
          <h5>Search</h5>
          <input
            type="text"
            className="search-input"
            value={this.state.searchTerm}
            onChange={(e) => this.onTextChanged(e.currentTarget.value)}
          />
          {traverseOpenNodes(this.state.items, "SEARCH", this.renderItem)}
        </div>
        <div style={{ position: "fixed", bottom: 20, right: 20 }}>
          {this.state.videoBeingPlayed && (
            <Player videoId={this.state.videoBeingPlayed} />
          )}
        </div>
        <div style={{ position: "fixed", bottom: 20, left: 20 }}>
          <button
            onClick={() => localStorage.removeItem(ITEMS_LOCAL_STORAGE_KEY)}
          >
            clear
          </button>
        </div>
      </div>
    );
  }
}
const ITEMS_LOCAL_STORAGE_KEY = "items:v1";

export default App;
